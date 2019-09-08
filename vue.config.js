const webpack = require('webpack');
const pkg = require('./package.json')
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
  // outputDir: './node_modules/vuesax' // cambiar para build en produccion,
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new MinifyPlugin({}, {
        exclude: ['vuesax.umd.js', 'vuesax.umd.min.js']
      }),
      new webpack.BannerPlugin({
      banner: `/*!
  * Vuesax v${pkg.version} 🖖 (https://lusaxweb.github.io/vuesax/)
  * Forged by Luis Daniel Rovira
  * Released under the MIT License.
  * Donate: https://www.patreon.com/bePatron?c=1567892
  * © 2019, Lusaxweb. (https://lusaxweb.net)
  */`,
      raw: true,
      entryOnly: true
    })
    ]
  }
}
