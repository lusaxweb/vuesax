const postcss = require('postcss')
const loaderUtils = require('loader-utils')
const loadPostcssConfig = require('./load-postcss-config')

const trim = require('./plugins/trim')
const scopeId = require('./plugins/scope-id')

module.exports = function (css, map) {
  this.cacheable()
  const cb = this.async()

  const query = loaderUtils.getOptions(this) || {}
  let vueOptions = this.options.__vueOptions__

  if (!vueOptions) {
    if (query.hasInlineConfig) {
      this.emitError(
        `\n  [vue-loader] It seems you are using HappyPack with inline postcss ` +
          `options for vue-loader. This is not supported because loaders running ` +
          `in different threads cannot share non-serializable options. ` +
          `It is recommended to use a postcss config file instead.\n` +
          `\n  See http://vue-loader.vuejs.org/en/features/postcss.html#using-a-config-file for more details.\n`
      )
    }
    vueOptions = Object.assign({}, this.options.vue, this.vue)
  }

  loadPostcssConfig(this, vueOptions.postcss)
    .then(config => {
      const plugins = config.plugins.concat(trim)
      const options = Object.assign(
        {
          to: this.resourcePath,
          from: this.resourcePath,
          map: false
        },
        config.options
      )

      // add plugin for vue-loader scoped css rewrite
      if (query.scoped) {
        plugins.push(scopeId({ id: query.id }))
      }

      // source map
      if (
        this.sourceMap &&
        !this.minimize &&
        vueOptions.cssSourceMap !== false &&
        process.env.NODE_ENV !== 'production' &&
        !options.map
      ) {
        options.map = {
          inline: false,
          annotation: false,
          prev: map
        }
      }

      return postcss(plugins)
        .process(css, options)
        .then(result => {
          if (result.messages) {
            result.messages.forEach(({ type, file }) => {
              if (type === 'dependency') {
                this.addDependency(file)
              }
            })
          }
          const map = result.map && result.map.toJSON()
          cb(null, result.css, map)
          return null // silence bluebird warning
        })
    })
    .catch(e => {
      console.error(e)
      cb(e)
    })
}
