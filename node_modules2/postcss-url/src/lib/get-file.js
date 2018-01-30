'use strict';

const fs = require('fs');
const mime = require('mime');

const getPathByBasePath = require('./paths').getPathByBasePath;

/**
 *
 * @param {PostcssUrl~Asset} asset
 * @param {PostcssUrl~Options} options
 * @param {PostcssUrl~Dir} dir
 * @param {Function} warn
 * @returns {PostcssUrl~File}
 */
const getFile = (asset, options, dir, warn) => {
    const paths = options.basePath
        ? getPathByBasePath(options.basePath, dir.from, asset.pathname)
        : [asset.absolutePath];
    const filePath = paths.find(fs.existsSync);

    if (!filePath) {
        warn(`Can't read file '${paths.join()}', ignoring`);

        return;
    }

    return {
        path: filePath,
        contents: fs.readFileSync(filePath),
        mimeType: mime.lookup(filePath)
    };
};

module.exports = getFile;

/**
 * @typedef {Object} PostcssUrl~File
 * @property {String} path
 * @property {Buffer} contents
 * @property {String} mimeType
 */
