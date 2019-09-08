const chalk = require('chalk')

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


module.exports = print