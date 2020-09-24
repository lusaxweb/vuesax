#!/usr/bin/env node
const chalk = require('chalk')
const isWin32 = process.platform === 'win32'

const print = (color = null) => (str = '') => {
  const terminalCols = retrieveCols()
  const strLength = str.replace(/\u001b\[[0-9]{2}m/g, '').length
  const leftPaddingLength = Math.floor((terminalCols - strLength) / 2)
  const leftPadding = ' '.repeat(Math.max(leftPaddingLength, 0))

  if (color) {
    str = chalk[color](str)
  }

  console.log(leftPadding, str)
}

const retrieveCols = (() => {
  let result = false

  return () => {
    if (result) {
      return result
    }
    const defaultCols = 80

    try {
      const terminalCols = execSync(`tput cols`, { stdio: ['pipe', 'pipe', 'ignore'] })

      result = parseInt(terminalCols.toString()) || defaultCols
    } catch (e) {
      result = defaultCols
    }
    return result
  }
})()

const emoji = emoji => process.stdout.isTTY && !isWin32 ? emoji : ''

const dim = print('dim')
const yellow = print('yellow')
const emptyLine = print()

emptyLine()
emptyLine()
yellow(chalk.bold(`Thanks for installing Vuesax ${emoji('🙏')}`))
emptyLine()
dim('Please consider donating to our Patreon')
dim('to help us maintain this package.')
emptyLine()
print()(`${chalk.bold(`${emoji('👉 ')} Donate:`)} ${'https://www.patreon.com/bePatron?c=1567892'}`)
emptyLine()
emptyLine()
emptyLine()
