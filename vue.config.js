const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
// const componentsPath = 'src/components'
// const componentList = getDirectories(resolvePath(componentsPath))

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
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
          from: 'src/css',
          to: 'css/',
          toType: 'dir'
        }
      ])
    ]
  }
}
