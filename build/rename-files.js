const fs = require('fs')
const path = require('path')

function fromDir(startPath ,filter, callback){
    if (!fs.existsSync(startPath)){
        console.log("no dir ",startPath);
        return;
    }

    var files=fs.readdirSync(startPath);
    for(var i=0;i<files.length;i++){
        var filename=path.join(startPath,files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()){
            fromDir(filename,filter,callback); //recurse
        }
        else if (filter.test(filename)) callback(filename);
    };
};



function renameFiles() {
    fromDir(path.resolve(__dirname, '../packages/vuesax/dist/components'),/common.js$/,function(filename){
        fs.renameSync(filename, filename.replace(path.basename(filename), 'index.js'))
    })

    fromDir(path.resolve(__dirname, '../packages/vuesax/dist/components'),/umd.js$/,function(filename){
        fs.unlink(filename, (err) => {
        if (err) throw err;
        })
    })

    fromDir(path.resolve(__dirname, '../packages/vuesax/dist/components'),/umd.min.js$/,function(filename){
        fs.renameSync(filename, filename.replace(path.basename(filename), 'index.umd.js'))
    })

    fromDir(path.resolve(__dirname, '../packages/vuesax/dist/components'),/\.css$/,function(filename){
        fs.renameSync(filename, filename.replace(path.basename(filename), 'main.css'))
    })
}

module.exports = renameFiles
