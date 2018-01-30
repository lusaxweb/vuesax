'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = writeFile;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _pify = require('pify');

var _pify2 = _interopRequireDefault(_pify);

var _loaderUtils = require('loader-utils');

var _loaderUtils2 = _interopRequireDefault(_loaderUtils);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _cacache = require('cacache');

var _cacache2 = _interopRequireDefault(_cacache);

var _serializeJavascript = require('serialize-javascript');

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _package = require('../package.json');

var _findCacheDir = require('find-cache-dir');

var _findCacheDir2 = _interopRequireDefault(_findCacheDir);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function writeFile(globalRef, pattern, file) {
    var info = globalRef.info,
        debug = globalRef.debug,
        compilation = globalRef.compilation,
        fileDependencies = globalRef.fileDependencies,
        written = globalRef.written,
        copyUnmodified = globalRef.copyUnmodified;


    return (0, _pify2.default)(_fs2.default.stat)(file.absoluteFrom).then(function (stat) {
        // We don't write empty directories
        if (stat.isDirectory()) {
            return;
        }

        // If this came from a glob, add it to the file watchlist
        if (pattern.fromType === 'glob') {
            fileDependencies.push(file.absoluteFrom);
        }

        info('reading ' + file.absoluteFrom + ' to write to assets');
        return (0, _pify2.default)(_fs2.default.readFile)(file.absoluteFrom).then(function (content) {
            if (pattern.transform) {
                var transform = function transform(content, absoluteFrom) {
                    return pattern.transform(content, absoluteFrom);
                };

                if (pattern.cache) {
                    if (!globalRef.cacheDir) {
                        globalRef.cacheDir = (0, _findCacheDir2.default)({ name: 'copy-webpack-plugin' });
                    }

                    var cacheKey = pattern.cache.key ? pattern.cache.key : (0, _serializeJavascript2.default)({
                        name: _package.name,
                        version: _package.version,
                        pattern: pattern,
                        content: content
                    });

                    return _cacache2.default.get(globalRef.cacheDir, cacheKey).then(function (result) {
                        return result.data;
                    }, function () {
                        return Promise.resolve().then(function () {
                            return transform(content, file.absoluteFrom);
                        }).then(function (content) {
                            return _cacache2.default.put(globalRef.cacheDir, cacheKey, content).then(function () {
                                return content;
                            });
                        });
                    });
                }

                content = transform(content, file.absoluteFrom);
            }

            return content;
        }).then(function (content) {
            var hash = _loaderUtils2.default.getHashDigest(content);

            if (pattern.toType === 'template') {
                info('interpolating template \'' + file.webpackTo + '\' for \'' + file.relativeFrom + '\'');

                // A hack so .dotted files don't get parsed as extensions
                var basename = _path2.default.basename(file.relativeFrom);
                var dotRemoved = false;
                if (basename[0] === '.') {
                    dotRemoved = true;
                    file.relativeFrom = _path2.default.join(_path2.default.dirname(file.relativeFrom), basename.slice(1));
                }

                // If it doesn't have an extension, remove it from the pattern
                // ie. [name].[ext] or [name][ext] both become [name]
                if (!_path2.default.extname(file.relativeFrom)) {
                    file.webpackTo = file.webpackTo.replace(/\.?\[ext\]/g, '');
                }

                // A hack because loaderUtils.interpolateName doesn't
                // find the right path if no directory is defined
                // ie. [path] applied to 'file.txt' would return 'file'
                if (file.relativeFrom.indexOf(_path2.default.sep) < 0) {
                    file.relativeFrom = _path2.default.sep + file.relativeFrom;
                }

                file.webpackTo = _loaderUtils2.default.interpolateName({ resourcePath: file.relativeFrom }, file.webpackTo, { content: content });

                // Add back removed dots
                if (dotRemoved) {
                    var newBasename = _path2.default.basename(file.webpackTo);
                    file.webpackTo = _path2.default.dirname(file.webpackTo) + '/.' + newBasename;
                }
            }

            if (!copyUnmodified && written[file.absoluteFrom] && written[file.absoluteFrom]['hash'] === hash && written[file.absoluteFrom]['webpackTo'] === file.webpackTo) {
                info('skipping \'' + file.webpackTo + '\', because it hasn\'t changed');
                return;
            } else {
                debug('added ' + hash + ' to written tracking for \'' + file.absoluteFrom + '\'');
                written[file.absoluteFrom] = {
                    hash: hash,
                    webpackTo: file.webpackTo
                };
            }

            if (compilation.assets[file.webpackTo] && !file.force) {
                info('skipping \'' + file.webpackTo + '\', because it already exists');
                return;
            }

            info('writing \'' + file.webpackTo + '\' to compilation assets from \'' + file.absoluteFrom + '\'');
            compilation.assets[file.webpackTo] = {
                size: function size() {
                    return stat.size;
                },
                source: function source() {
                    return content;
                }
            };
        });
    });
}