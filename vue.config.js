const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'src/style',
          to: 'style/',
          toType: 'dir'
        }
      ])
    ]
  }
}
