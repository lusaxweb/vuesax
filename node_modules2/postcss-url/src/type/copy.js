'use strict';

const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');

const calcHash = require('../lib/hash');
const paths = require('../lib/paths');
const getFile = require('../lib/get-file');

const getTargetDir = paths.getTargetDir;
const getAssetsPath = paths.getAssetsPath;
const normalize = paths.normalize;

const getHashName = (file, options) =>
    (options && options.append ? (`${path.basename(file.path, path.extname(file.path))}_`) : '')
     + calcHash(file.contents, options)
     + path.extname(file.path);

/**
 * Copy images from readed from url() to an specific assets destination
 * (`assetsPath`) and fix url() according to that path.
 * You can rename the assets by a hash or keep the real filename.
 *
 * Option assetsPath is require and is relative to the css destination (`to`)
 *
 * @type {PostcssUrl~UrlProcessor}
 * @param {PostcssUrl~Asset} asset
 * @param {PostcssUrl~Dir} dir
 * @param {PostcssUrl~Option} options
 * @param {PostcssUrl~Decl} decl
 * @param {Function} warn
 * @param {Result} result
 * @param {Function} addDependency
 *
 * @returns {String|Undefined}
 */
module.exports = function processCopy(asset, dir, options, decl, warn, result, addDependency) {
    if (!options.assetsPath && dir.from === dir.to) {
        warn('Option `to` of postcss is required, ignoring');

        return;
    }

    const file = getFile(asset, options, dir, warn);

    if (!file) return;

    const assetRelativePath = options.useHash
        ? getHashName(file, options.hashOptions)
        : asset.relativePath;

    const targetDir = getTargetDir(dir);
    const newAssetBaseDir = getAssetsPath(targetDir, options.assetsPath);
    const newAssetPath = path.join(newAssetBaseDir, assetRelativePath);
    const newRelativeAssetPath = normalize(
        path.relative(targetDir, newAssetPath)
    );

    mkdirp.sync(path.dirname(newAssetPath));

    if (!fs.existsSync(newAssetPath)) {
        fs.writeFileSync(newAssetPath, file.contents);
    }

    addDependency(file.path);

    return `${newRelativeAssetPath}${asset.search}${asset.hash}`;
};
