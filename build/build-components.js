const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
const chalk = require('chalk')
const print = require('./print.js')

const green = print('green')

const getDirectories = source => {
    let folders = fs.readdirSync(source)

    folders.forEach(name => {
        let isDirectory = fs.lstatSync(path.join(source, name)).isDirectory()
        if(isDirectory) {
            print()
            print()
            green(`Building Component ${chalk.bold(name)}`)
            print()
            print()


            execSync(
                `vue build packages/@vuesax/${name}/index.js --target lib --name ${name} --dest packages/vuesax/dist/components/${name}`
            )
        }
    });
}

module.exports = getDirectories
