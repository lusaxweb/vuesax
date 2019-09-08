const fs = require('fs')
const path = require('path')

function fromDir(startPath ,filter, callback){

    //console.log('Starting from dir '+startPath+'/');

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



function removeDemoHtml() {
    fromDir(path.resolve(__dirname, '../packages/vuesax/dist'),/\.html$/,function(filename){
        fs.unlink(filename, (err) => {
        if (err) throw err;
        })
    })
}

module.exports = removeDemoHtml
