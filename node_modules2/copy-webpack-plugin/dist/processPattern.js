'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = processPattern;

var _globby = require('globby');

var _globby2 = _interopRequireDefault(_globby);

var _pLimit = require('p-limit');

var _pLimit2 = _interopRequireDefault(_pLimit);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _minimatch = require('minimatch');

var _minimatch2 = _interopRequireDefault(_minimatch);

var _writeFile = require('./writeFile');

var _writeFile2 = _interopRequireDefault(_writeFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function processPattern(globalRef, pattern) {
    var info = globalRef.info,
        debug = globalRef.debug,
        output = globalRef.output,
        concurrency = globalRef.concurrency;

    var globArgs = _lodash2.default.assign({
        cwd: pattern.context
    }, pattern.fromArgs || {});

    if (pattern.fromType === 'nonexistent') {
        return Promise.resolve();
    }

    var limit = (0, _pLimit2.default)(concurrency || 100);

    info('begin globbing \'' + pattern.absoluteFrom + '\' with a context of \'' + pattern.context + '\'');
    return (0, _globby2.default)(pattern.absoluteFrom, globArgs).then(function (paths) {
        return Promise.all(paths.map(function (from) {
            return limit(function () {
                var file = {
                    force: pattern.force,
                    absoluteFrom: _path2.default.resolve(pattern.context, from)
                };
                file.relativeFrom = _path2.default.relative(pattern.context, file.absoluteFrom);

                if (pattern.flatten) {
                    file.relativeFrom = _path2.default.basename(file.relativeFrom);
                }

                debug('found ' + from);

                // Check the ignore list
                var il = pattern.ignore.length;
                while (il--) {
                    var ignoreGlob = pattern.ignore[il];

                    var globParams = {
                        dot: true,
                        matchBase: true
                    };

                    var glob = void 0;
                    if (_lodash2.default.isString(ignoreGlob)) {
                        glob = ignoreGlob;
                    } else if (_lodash2.default.isObject(ignoreGlob)) {
                        glob = ignoreGlob.glob || '';
                        // Overwrite minimatch defaults
                        globParams = _lodash2.default.assign(globParams, _lodash2.default.omit(ignoreGlob, ['glob']));
                    } else {
                        glob = '';
                    }

                    debug('testing ' + glob + ' against ' + file.relativeFrom);
                    if ((0, _minimatch2.default)(file.relativeFrom, glob, globParams)) {
                        info('ignoring \'' + file.relativeFrom + '\', because it matches the ignore glob \'' + glob + '\'');
                        return Promise.resolve();
                    } else {
                        debug(glob + ' doesn\'t match ' + file.relativeFrom);
                    }
                }

                // Change the to path to be relative for webpack
                if (pattern.toType === 'dir') {
                    file.webpackTo = _path2.default.join(pattern.to, file.relativeFrom);
                } else if (pattern.toType === 'file') {
                    file.webpackTo = pattern.to || file.relativeFrom;
                } else if (pattern.toType === 'template') {
                    file.webpackTo = pattern.to;
                }

                if (_path2.default.isAbsolute(file.webpackTo)) {
                    if (output === '/') {
                        throw '[copy-webpack-plugin] Using older versions of webpack-dev-server, devServer.outputPath must be defined to write to absolute paths';
                    }

                    file.webpackTo = _path2.default.relative(output, file.webpackTo);
                }

                // ensure forward slashes
                file.webpackTo = file.webpackTo.replace(/\\/g, '/');

                info('determined that \'' + from + '\' should write to \'' + file.webpackTo + '\'');

                return (0, _writeFile2.default)(globalRef, pattern, file);
            });
        }));
    });
}