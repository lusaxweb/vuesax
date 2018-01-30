// loader for pre-processing templates with e.g. pug

const cons = require('consolidate')
const loaderUtils = require('loader-utils')

module.exports = function (content) {
  this.cacheable && this.cacheable()
  const callback = this.async()
  const opt = loaderUtils.getOptions(this) || {}

  if (!cons[opt.engine]) {
    return callback(
      new Error(
        "Template engine '" +
          opt.engine +
          "' " +
          "isn't available in Consolidate.js"
      )
    )
  }

  // allow passing options to the template preprocessor via `template` option
  if (this.options.__vueOptions__) {
    Object.assign(opt, this.options.__vueOptions__.template)
  }

  // for relative includes
  opt.filename = this.resourcePath

  cons[opt.engine].render(content, opt, (err, html) => {
    if (err) {
      return callback(err)
    }
    callback(null, html)
  })
}
