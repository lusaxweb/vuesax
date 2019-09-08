const { execSync } = require('child_process')
const path = require('path')
const removeDemoHtml = require('./remove-demo-html.js')
const buildComponents = require('./build-components.js')
const renameFiles = require('./rename-files.js')
const copyStylesComponents = require('./copy-style-components.js')
const copyComponentsDist = require('./copy-components-dist.js')
const print = require('./print.js')
const fs = require('fs-extra')
const chalk = require('chalk')
// const log = console.log

const yellow = print('yellow')
const magenta = print('magenta')
const cyan = print('cyan')
const green = print('green')
const emptyLine = print()

emptyLine()
emptyLine()
yellow(`Building ${chalk.bold('Vuesax')} Framework`)
emptyLine()
emptyLine()

execSync(
  `vue build packages/vuesax/index.js --target lib --name vuesax --dest packages/vuesax/dist/`
  )

emptyLine()
emptyLine()
magenta(`Building ${chalk.bold('@vuesax Components')}`)
emptyLine()
emptyLine()

buildComponents(path.resolve(__dirname, '../packages/@vuesax'))

removeDemoHtml()

renameFiles()

/*
 * Copy Styles
 */

fs.copy('packages/vuesax/style/', 'packages/vuesax/dist/style', err =>{
  if(err) return console.error(err);
  copyStylesComponents(path.resolve(__dirname, '../packages/@vuesax'))
})

emptyLine()
emptyLine()
cyan(`Copy Components ${chalk.bold('@vuesax/{Component}/dist')}`)
emptyLine()
emptyLine()

copyComponentsDist(path.resolve(__dirname, '../packages/vuesax/dist/components/'))

// fs.copy('dist/', 'packages/vuesax/dist/', err => {
//   if(err) return console.error(err);
// });

emptyLine()
emptyLine()
green(chalk.bold(`${'🎉'} Success Build! ${'🎉'}`))
emptyLine()
emptyLine()









