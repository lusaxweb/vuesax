'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _preProcessPattern = require('./preProcessPattern');

var _preProcessPattern2 = _interopRequireDefault(_preProcessPattern);

var _processPattern = require('./processPattern');

var _processPattern2 = _interopRequireDefault(_processPattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CopyWebpackPlugin() {
    var patterns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!Array.isArray(patterns)) {
        throw new Error('[copy-webpack-plugin] patterns must be an array');
    }

    // Defaults debug level to 'warning'
    options.debug = options.debug || 'warning';

    // Defaults debugging to info if only true is specified
    if (options.debug === true) {
        options.debug = 'info';
    }

    var debugLevels = ['warning', 'info', 'debug'];
    var debugLevelIndex = debugLevels.indexOf(options.debug);
    function log(msg, level) {
        if (level === 0) {
            msg = 'WARNING - ' + msg;
        } else {
            level = level || 1;
        }
        if (level <= debugLevelIndex) {
            console.log('[copy-webpack-plugin] ' + msg); // eslint-disable-line no-console
        }
    }

    function warning(msg) {
        log(msg, 0);
    }

    function info(msg) {
        log(msg, 1);
    }

    function debug(msg) {
        log(msg, 2);
    }

    var apply = function apply(compiler) {
        var fileDependencies = void 0;
        var contextDependencies = void 0;
        var written = {};

        var context = void 0;

        if (!options.context) {
            context = compiler.options.context;
        } else if (!_path2.default.isAbsolute(options.context)) {
            context = _path2.default.join(compiler.options.context, options.context);
        } else {
            context = options.context;
        }

        compiler.plugin('emit', function (compilation, cb) {
            debug('starting emit');
            var callback = function callback() {
                debug('finishing emit');
                cb();
            };

            fileDependencies = [];
            contextDependencies = [];

            var globalRef = {
                info: info,
                debug: debug,
                warning: warning,
                compilation: compilation,
                written: written,
                fileDependencies: fileDependencies,
                contextDependencies: contextDependencies,
                context: context,
                output: compiler.options.output.path,
                ignore: options.ignore || [],
                copyUnmodified: options.copyUnmodified,
                concurrency: options.concurrency
            };

            if (globalRef.output === '/' && compiler.options.devServer && compiler.options.devServer.outputPath) {
                globalRef.output = compiler.options.devServer.outputPath;
            }

            var tasks = [];

            patterns.forEach(function (pattern) {
                tasks.push(Promise.resolve().then(function () {
                    return (0, _preProcessPattern2.default)(globalRef, pattern);
                })
                // Every source (from) is assumed to exist here
                .then(function (pattern) {
                    return (0, _processPattern2.default)(globalRef, pattern);
                }));
            });

            Promise.all(tasks).catch(function (err) {
                compilation.errors.push(err);
            }).then(function () {
                return callback();
            });
        });

        compiler.plugin('after-emit', function (compilation, cb) {
            debug('starting after-emit');
            var callback = function callback() {
                debug('finishing after-emit');
                cb();
            };

            var compilationFileDependencies = new Set(compilation.fileDependencies);
            var compilationContextDependencies = new Set(compilation.contextDependencies);

            // Add file dependencies if they're not already tracked
            _lodash2.default.forEach(fileDependencies, function (file) {
                if (compilationFileDependencies.has(file)) {
                    debug('not adding ' + file + ' to change tracking, because it\'s already tracked');
                } else {
                    debug('adding ' + file + ' to change tracking');
                    compilation.fileDependencies.push(file);
                }
            });

            // Add context dependencies if they're not already tracked
            _lodash2.default.forEach(contextDependencies, function (context) {
                if (compilationContextDependencies.has(context)) {
                    debug('not adding ' + context + ' to change tracking, because it\'s already tracked');
                } else {
                    debug('adding ' + context + ' to change tracking');
                    compilation.contextDependencies.push(context);
                }
            });

            callback();
        });
    };

    return {
        apply: apply
    };
}

CopyWebpackPlugin['default'] = CopyWebpackPlugin;
module.exports = CopyWebpackPlugin;