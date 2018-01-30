const path = require('path')
const hash = require('hash-sum')
const parse = require('./parser')
const querystring = require('querystring')
const loaderUtils = require('loader-utils')
const normalize = require('./utils/normalize')
const tryRequire = require('./utils/try-require')

// internal lib loaders
const selectorPath = normalize.lib('selector')
const styleCompilerPath = normalize.lib('style-compiler/index')
const templateCompilerPath = normalize.lib('template-compiler/index')
const templatePreprocessorPath = normalize.lib('template-compiler/preprocessor')
const componentNormalizerPath = normalize.lib('component-normalizer')

// dep loaders
const styleLoaderPath = normalize.dep('vue-style-loader')
const hotReloadAPIPath = normalize.dep('vue-hot-reload-api')

// check whether default js loader exists
const hasBabel = !!tryRequire('babel-loader')
const hasBuble = !!tryRequire('buble-loader')

const rewriterInjectRE = /\b(css(?:-loader)?(?:\?[^!]+)?)(?:!|$)/

const defaultLang = {
  template: 'html',
  styles: 'css',
  script: 'js'
}

const postcssExtensions = [
  'postcss', 'pcss', 'sugarss', 'sss'
]

// When extracting parts from the source vue file, we want to apply the
// loaders chained before vue-loader, but exclude some loaders that simply
// produces side effects such as linting.
function getRawRequest (
  { resource, loaderIndex, loaders },
  excludedPreLoaders = /eslint-loader/
) {
  return loaderUtils.getRemainingRequest({
    resource: resource,
    loaderIndex: loaderIndex,
    loaders: loaders.filter(loader => !excludedPreLoaders.test(loader.path))
  })
}

module.exports = function (content) {
  this.cacheable()
  const isServer = this.target === 'node'
  const isProduction = this.minimize || process.env.NODE_ENV === 'production'

  const loaderContext = this
  const query = loaderUtils.getOptions(this) || {}
  const options = Object.assign(
    {
      esModule: true
    },
    this.options.vue,
    this.vue,
    query
  )

  // disable esModule in inject mode
  // because import/export must be top-level
  if (query.inject) {
    options.esModule = false
  }

  // #824 avoid multiple webpack runs complaining about unknown option
  Object.defineProperty(this.options, '__vueOptions__', {
    value: options,
    enumerable: false,
    configurable: true
  })

  const rawRequest = getRawRequest(this, options.excludedPreLoaders)
  const filePath = this.resourcePath
  const fileName = path.basename(filePath)

  const context =
    (this._compiler && this._compiler.context) ||
    this.options.context ||
    process.cwd()
  const sourceRoot = path.dirname(path.relative(context, filePath))
  const shortFilePath = path.relative(context, filePath).replace(/^(\.\.[\\\/])+/, '')
  const moduleId = 'data-v-' + hash(isProduction ? (shortFilePath + '\n' + content) : shortFilePath)

  let cssLoaderOptions = ''
  const cssSourceMap =
    !isProduction &&
    this.sourceMap &&
    options.cssSourceMap !== false
  if (cssSourceMap) {
    cssLoaderOptions += '?sourceMap'
  }
  if (isProduction) {
    cssLoaderOptions += (cssLoaderOptions ? '&' : '?') + 'minimize'
  }

  const bubleOptions =
    hasBuble && options.buble ? '?' + JSON.stringify(options.buble) : ''

  let output = ''

  const parts = parse(
    content,
    fileName,
    this.sourceMap,
    sourceRoot,
    cssSourceMap
  )

  const hasScoped = parts.styles.some(({ scoped }) => scoped)
  const templateAttrs =
    parts.template && parts.template.attrs && parts.template.attrs
  const hasComment = templateAttrs && templateAttrs.comments
  const functionalTemplate = templateAttrs && templateAttrs.functional
  const bubleTemplateOptions = Object.assign({}, options.buble)
  bubleTemplateOptions.transforms = Object.assign(
    {},
    bubleTemplateOptions.transforms
  )
  bubleTemplateOptions.transforms.stripWithFunctional = functionalTemplate

  const templateCompilerOptions =
    '?' +
    JSON.stringify({
      id: moduleId,
      hasScoped,
      hasComment,
      transformToRequire: options.transformToRequire,
      preserveWhitespace: options.preserveWhitespace,
      buble: bubleTemplateOptions,
      // only pass compilerModules if it's a path string
      compilerModules:
        typeof options.compilerModules === 'string'
          ? options.compilerModules
          : undefined
    })

  const defaultLoaders = {
    html: templateCompilerPath + templateCompilerOptions,
    css: options.extractCSS
      ? getCSSExtractLoader()
      : styleLoaderPath + '!' + 'css-loader' + cssLoaderOptions,
    js: hasBuble
      ? 'buble-loader' + bubleOptions
      : hasBabel ? 'babel-loader' : ''
  }

  // check if there are custom loaders specified via
  // webpack config, otherwise use defaults
  const loaders = Object.assign({}, defaultLoaders, options.loaders)
  const preLoaders = options.preLoaders || {}
  const postLoaders = options.postLoaders || {}

  const needsHotReload =
    !isServer && !isProduction && (parts.script || parts.template) && options.hotReload !== false
  if (needsHotReload) {
    output += 'var disposed = false\n'
  }

  // add requires for styles
  let cssModules
  if (parts.styles.length) {
    let styleInjectionCode = 'function injectStyle (ssrContext) {\n'
    if (needsHotReload) {
      styleInjectionCode += `  if (disposed) return\n`
    }
    if (isServer) {
      styleInjectionCode += `var i\n`
    }
    parts.styles.forEach((style, i) => {
      // require style
      let requireString = style.src
        ? getRequireForImport('styles', style, style.scoped)
        : getRequire('styles', style, i, style.scoped)

      const hasStyleLoader = requireString.indexOf('style-loader') > -1
      const hasVueStyleLoader = requireString.indexOf('vue-style-loader') > -1
      // vue-style-loader exposes inject functions during SSR so they are
      // always called
      const invokeStyle =
        isServer && hasVueStyleLoader
          ? code => `;(i=${code},i.__inject__&&i.__inject__(ssrContext),i)\n`
          : code => `  ${code}\n`

      const moduleName = style.module === true ? '$style' : style.module
      // setCssModule
      if (moduleName) {
        if (!cssModules) {
          cssModules = {}
          if (needsHotReload) {
            output += `var cssModules = {}\n`
          }
        }
        if (moduleName in cssModules) {
          loaderContext.emitError(
            'CSS module name "' + moduleName + '" is not unique!'
          )
          styleInjectionCode += invokeStyle(requireString)
        } else {
          cssModules[moduleName] = true

          // `(vue-)style-loader` exposes the name-to-hash map directly
          // `css-loader` exposes it in `.locals`
          // add `.locals` if the user configured to not use style-loader.
          if (!hasStyleLoader) {
            requireString += '.locals'
          }

          if (!needsHotReload) {
            styleInjectionCode += invokeStyle(
              'this["' + moduleName + '"] = ' + requireString
            )
          } else {
            // handle hot reload for CSS modules.
            // we store the exported locals in an object and proxy to it by
            // defining getters inside component instances' lifecycle hook.
            styleInjectionCode +=
              invokeStyle(`cssModules["${moduleName}"] = ${requireString}`) +
              `Object.defineProperty(this, "${moduleName}", { get: function () { return cssModules["${moduleName}"] }})\n`

            const requirePath = style.src
              ? getRequireForImportString('styles', style, style.scoped)
              : getRequireString('styles', style, i, style.scoped)

            output +=
              `module.hot && module.hot.accept([${requirePath}], function () {\n` +
              // 1. check if style has been injected
              `  var oldLocals = cssModules["${moduleName}"]\n` +
              `  if (!oldLocals) return\n` +
              // 2. re-import (side effect: updates the <style>)
              `  var newLocals = ${requireString}\n` +
              // 3. compare new and old locals to see if selectors changed
              `  if (JSON.stringify(newLocals) === JSON.stringify(oldLocals)) return\n` +
              // 4. locals changed. Update and force re-render.
              `  cssModules["${moduleName}"] = newLocals\n` +
              `  require("${hotReloadAPIPath}").rerender("${moduleId}")\n` +
              `})\n`
          }
        }
      } else {
        styleInjectionCode += invokeStyle(requireString)
      }
    })
    styleInjectionCode += '}\n'
    output += styleInjectionCode
  }

  // we require the component normalizer function, and call it like so:
  // normalizeComponent(
  //   scriptExports,
  //   compiledTemplate,
  //   functionalTemplate,
  //   injectStyles,
  //   scopeId,
  //   moduleIdentifier (server only)
  // )
  output +=
    'var normalizeComponent = require(' +
    loaderUtils.stringifyRequest(loaderContext, '!' + componentNormalizerPath) +
    ')\n'

  // <script>
  output += '/* script */\n'
  const script = parts.script
  if (script) {
    if (options.esModule) {
      output += script.src
        ? (
            getNamedExportForImport('script', script) + '\n' +
            getImportForImport('script', script)
          )
        : (
            getNamedExport('script', script) + '\n' +
            getImport('script', script)
          ) + '\n'
    } else {
      output +=
        'var __vue_script__ = ' +
        (script.src
          ? getRequireForImport('script', script)
          : getRequire('script', script)) +
        '\n'
    }
    // inject loader interop
    if (query.inject) {
      output += '__vue_script__ = __vue_script__(injections)\n'
    }
  } else {
    output += 'var __vue_script__ = null\n'
  }

  // <template>
  output += '/* template */\n'
  const template = parts.template
  if (template) {
    if (options.esModule) {
      output +=
        (template.src
          ? getImportForImport('template', template)
          : getImport('template', template)) + '\n'
    } else {
      output +=
        'var __vue_template__ = ' +
        (template.src
          ? getRequireForImport('template', template)
          : getRequire('template', template)) +
        '\n'
    }
  } else {
    output += 'var __vue_template__ = null\n'
  }

  // template functional
  output += '/* template functional */\n'
  output +=
    'var __vue_template_functional__ = ' +
    (functionalTemplate ? 'true' : 'false') +
    '\n'

  // style
  output += '/* styles */\n'
  output +=
    'var __vue_styles__ = ' +
    (parts.styles.length ? 'injectStyle' : 'null') +
    '\n'

  // scopeId
  output += '/* scopeId */\n'
  output +=
    'var __vue_scopeId__ = ' +
    (hasScoped ? JSON.stringify(moduleId) : 'null') +
    '\n'

  // moduleIdentifier (server only)
  output += '/* moduleIdentifier (server only) */\n'
  output +=
    'var __vue_module_identifier__ = ' +
    (isServer ? JSON.stringify(hash(this.request)) : 'null') +
    '\n'

  // close normalizeComponent call
  output +=
    'var Component = normalizeComponent(\n' +
    '  __vue_script__,\n' +
    '  __vue_template__,\n' +
    '  __vue_template_functional__,\n' +
    '  __vue_styles__,\n' +
    '  __vue_scopeId__,\n' +
    '  __vue_module_identifier__\n' +
    ')\n'

  // development-only code
  if (!isProduction) {
    // add filename in dev
    output +=
      'Component.options.__file = ' + JSON.stringify(shortFilePath) + '\n'
  }

  // add requires for customBlocks
  if (parts.customBlocks && parts.customBlocks.length) {
    let addedPrefix = false

    parts.customBlocks.forEach((customBlock, i) => {
      if (loaders[customBlock.type]) {
        // require customBlock
        customBlock.src = customBlock.attrs.src
        const requireString = customBlock.src
          ? getRequireForImport(customBlock.type, customBlock)
          : getRequire(customBlock.type, customBlock, i)

        if (!addedPrefix) {
          output += '\n/* customBlocks */\n'
          addedPrefix = true
        }

        output +=
          'var customBlock = ' + requireString + '\n' +
          'if (customBlock && customBlock.__esModule) {\n' +
          '  customBlock = customBlock.default\n' +
          '}\n' +
          'if (typeof customBlock === "function") {\n' +
          '  customBlock(Component)\n' +
          '}\n'
      }
    })

    output += '\n'
  }

  if (!query.inject) {
    // hot reload
    if (needsHotReload) {
      output +=
        '\n/* hot reload */\n' +
        'if (module.hot) {(function () {\n' +
        '  var hotAPI = require("' + hotReloadAPIPath + '")\n' +
        '  hotAPI.install(require("vue"), false)\n' +
        '  if (!hotAPI.compatible) return\n' +
        '  module.hot.accept()\n' +
        '  if (!module.hot.data) {\n' +
        // initial insert
        '    hotAPI.createRecord("' + moduleId + '", Component.options)\n' +
        '  } else {\n'
      // update
      if (cssModules) {
        output +=
          '    if (module.hot.data.cssModules && Object.keys(module.hot.data.cssModules) !== Object.keys(cssModules)) {\n' +
          '      delete Component.options._Ctor\n' +
          '    }\n'
      }
      output +=
        `    hotAPI.${
          functionalTemplate ? 'rerender' : 'reload'
        }("${moduleId}", Component.options)\n  }\n`
      // dispose
      output +=
        '  module.hot.dispose(function (data) {\n' +
        (cssModules ? '    data.cssModules = cssModules\n' : '') +
        '    disposed = true\n' +
        '  })\n'
      output += '})()}\n'
    }

    // final export
    if (options.esModule) {
      output += '\nexport default Component.exports\n'
    } else {
      output += '\nmodule.exports = Component.exports\n'
    }
  } else {
    // inject-loader support
    output =
      '\n/* dependency injection */\n' +
      'module.exports = function (injections) {\n' +
      output +
      '\n' +
      '\nreturn Component.exports\n}'
  }

  // done
  return output

  // --- helpers ---

  function getRequire (type, part, index, scoped) {
    return 'require(' + getRequireString(type, part, index, scoped) + ')'
  }

  function getImport (type, part, index, scoped) {
    return (
      'import __vue_' + type + '__ from ' +
      getRequireString(type, part, index, scoped)
    )
  }

  function getNamedExport (type, part, index, scoped) {
    return (
      'export * from ' +
      getRequireString(type, part, index, scoped)
    )
  }

  function getRequireString (type, part, index, scoped) {
    return loaderUtils.stringifyRequest(
      loaderContext,
      // disable all configuration loaders
      '!!' +
        // get loader string for pre-processors
        getLoaderString(type, part, index, scoped) +
        // select the corresponding part from the vue file
        getSelectorString(type, index || 0) +
        // the url to the actual vue file, including remaining requests
        rawRequest
    )
  }

  function getRequireForImport (type, impt, scoped) {
    return 'require(' + getRequireForImportString(type, impt, scoped) + ')'
  }

  function getImportForImport (type, impt, scoped) {
    return (
      'import __vue_' + type + '__ from ' +
      getRequireForImportString(type, impt, scoped)
    )
  }

  function getNamedExportForImport (type, impt, scoped) {
    return (
      'export * from ' +
      getRequireForImportString(type, impt, scoped)
    )
  }

  function getRequireForImportString (type, impt, scoped) {
    return loaderUtils.stringifyRequest(
      loaderContext,
      '!!' + getLoaderString(type, impt, -1, scoped) + impt.src
    )
  }

  function addCssModulesToLoader (loader, part, index) {
    if (!part.module) return loader
    const option = options.cssModules || {}
    const DEFAULT_OPTIONS = {
      modules: true
    }
    const OPTIONS = {
      localIdentName: '[hash:base64]',
      importLoaders: true
    }
    return loader.replace(/((?:^|!)css(?:-loader)?)(\?[^!]*)?/, (m, $1, $2) => {
      // $1: !css-loader
      // $2: ?a=b
      const query = loaderUtils.parseQuery($2 || '?')
      Object.assign(query, OPTIONS, option, DEFAULT_OPTIONS)
      if (index !== -1) {
        // Note:
        //   Class name is generated according to its filename.
        //   Different <style> tags in the same .vue file may generate same names.
        //   Append `_[index]` to class name to avoid this.
        query.localIdentName += '_' + index
      }
      return $1 + '?' + JSON.stringify(query)
    })
  }

  function buildCustomBlockLoaderString (attrs) {
    const noSrcAttrs = Object.assign({}, attrs)
    delete noSrcAttrs.src
    const qs = querystring.stringify(noSrcAttrs)
    return qs ? '?' + qs : qs
  }

  // stringify an Array of loader objects
  function stringifyLoaders (loaders) {
    return loaders
      .map(
        obj =>
          obj && typeof obj === 'object' && typeof obj.loader === 'string'
            ? obj.loader +
              (obj.options ? '?' + JSON.stringify(obj.options) : '')
            : obj
      )
      .join('!')
  }

  function getLoaderString (type, part, index, scoped) {
    let loader = getRawLoaderString(type, part, index, scoped)
    const lang = getLangString(type, part)
    if (preLoaders[lang]) {
      loader = loader + ensureBang(preLoaders[lang])
    }
    if (postLoaders[lang]) {
      loader = ensureBang(postLoaders[lang]) + loader
    }
    return loader
  }

  function getLangString (type, { lang }) {
    if (type === 'script' || type === 'template' || type === 'styles') {
      return lang || defaultLang[type]
    } else {
      return type
    }
  }

  function getRawLoaderString (type, part, index, scoped) {
    let lang = part.lang || defaultLang[type]

    let styleCompiler = ''
    if (type === 'styles') {
      // style compiler that needs to be applied for all styles
      styleCompiler =
        styleCompilerPath +
        '?' +
        JSON.stringify({
          // a marker for vue-style-loader to know that this is an import from a vue file
          vue: true,
          id: moduleId,
          scoped: !!scoped,
          hasInlineConfig: !!query.postcss
        }) +
        '!'
      // normalize scss/sass/postcss if no specific loaders have been provided
      if (!loaders[lang]) {
        if (postcssExtensions.indexOf(lang) !== -1) {
          lang = 'css'
        } else if (lang === 'sass') {
          lang = 'sass?indentedSyntax'
        } else if (lang === 'scss') {
          lang = 'sass'
        }
      }
    }

    let loader =
      options.extractCSS && type === 'styles'
        ? loaders[lang] || getCSSExtractLoader(lang)
        : loaders[lang]

    const injectString =
      type === 'script' && query.inject ? 'inject-loader!' : ''

    if (loader != null) {
      if (Array.isArray(loader)) {
        loader = stringifyLoaders(loader)
      } else if (typeof loader === 'object') {
        loader = stringifyLoaders([loader])
      }
      if (type === 'styles') {
        // add css modules
        loader = addCssModulesToLoader(loader, part, index)
        // inject rewriter before css loader for extractTextPlugin use cases
        if (rewriterInjectRE.test(loader)) {
          loader = loader.replace(
            rewriterInjectRE,
            (m, $1) => ensureBang($1) + styleCompiler
          )
        } else {
          loader = ensureBang(loader) + styleCompiler
        }
      }
      // if user defines custom loaders for html, add template compiler to it
      if (type === 'template' && loader.indexOf(defaultLoaders.html) < 0) {
        loader = defaultLoaders.html + '!' + loader
      }
      return injectString + ensureBang(loader)
    } else {
      // unknown lang, infer the loader to be used
      switch (type) {
        case 'template':
          return (
            defaultLoaders.html +
            '!' +
            templatePreprocessorPath +
            '?engine=' +
            lang +
            '!'
          )
        case 'styles':
          loader = addCssModulesToLoader(defaultLoaders.css, part, index)
          return loader + '!' + styleCompiler + ensureBang(ensureLoader(lang))
        case 'script':
          return injectString + ensureBang(ensureLoader(lang))
        default:
          loader = loaders[type]
          if (Array.isArray(loader)) {
            loader = stringifyLoaders(loader)
          }
          return ensureBang(loader + buildCustomBlockLoaderString(part.attrs))
      }
    }
  }

  // sass => sass-loader
  // sass-loader => sass-loader
  // sass?indentedSyntax!css => sass-loader?indentedSyntax!css-loader
  function ensureLoader (lang) {
    return lang
      .split('!')
      .map(loader =>
        loader.replace(
          /^([\w-]+)(\?.*)?/,
          (_, name, query) =>
            (/-loader$/.test(name) ? name : name + '-loader') + (query || '')
        )
      )
      .join('!')
  }

  function getSelectorString (type, index) {
    return (
      selectorPath +
      '?type=' +
      (type === 'script' || type === 'template' || type === 'styles'
        ? type
        : 'customBlocks') +
      '&index=' + index +
      '!'
    )
  }

  function ensureBang (loader) {
    if (loader.charAt(loader.length - 1) !== '!') {
      return loader + '!'
    } else {
      return loader
    }
  }

  function getCSSExtractLoader (lang) {
    let extractor
    const op = options.extractCSS
    // extractCSS option is an instance of ExtractTextPlugin
    if (typeof op.extract === 'function') {
      extractor = op
    } else {
      extractor = tryRequire('extract-text-webpack-plugin')
      if (!extractor) {
        throw new Error(
          '[vue-loader] extractCSS: true requires extract-text-webpack-plugin ' +
            'as a peer dependency.'
        )
      }
    }
    const langLoader = lang ? ensureBang(ensureLoader(lang)) : ''
    return extractor.extract({
      use: 'css-loader' + cssLoaderOptions + '!' + langLoader,
      fallback: 'vue-style-loader'
    })
  }
}
