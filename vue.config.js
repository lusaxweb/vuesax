const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'src/components',
          to: 'components/',
          toType: 'dir'
        },
        {
          from: 'src/functions',
          to: 'functions/',
          toType: 'dir'
        },
        {
          from: 'src/layout',
          to: 'layout/',
          toType: 'dir'
        },
        {
          from: 'src/utils',
          to: 'utils/',
          toType: 'dir'
        },
        {
          from: 'src/styles',
          to: 'styles/',
          toType: 'dir'
        }
      ])
    ]
  }
}
