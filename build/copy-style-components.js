
const fs = require('fs-extra')
const path = require('path')
const { execSync } = require('child_process')

const copyStyleComponents = source => {
    let folders = fs.readdirSync(source)

    folders.forEach(name => {
        let isDirectory = fs.lstatSync(path.join(source, name)).isDirectory()
        if(isDirectory) {
          fs.copy(`packages/@vuesax/${name}/main.styl`, `dist/style/components/${name}.styl`, err => {
            if(err) return console.error(err);
          });
        }
    });
}

module.exports = copyStyleComponents

