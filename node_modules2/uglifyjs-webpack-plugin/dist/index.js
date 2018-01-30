'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       MIT License http://www.opensource.org/licenses/mit-license.php
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Author Tobias Koppers @sokra
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

var _sourceMap = require('source-map');

var _webpackSources = require('webpack-sources');

var _RequestShortener = require('webpack/lib/RequestShortener');

var _RequestShortener2 = _interopRequireDefault(_RequestShortener);

var _ModuleFilenameHelpers = require('webpack/lib/ModuleFilenameHelpers');

var _ModuleFilenameHelpers2 = _interopRequireDefault(_ModuleFilenameHelpers);

var _schemaUtils = require('schema-utils');

var _schemaUtils2 = _interopRequireDefault(_schemaUtils);

var _serializeJavascript = require('serialize-javascript');

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _options = require('./options.json');

var _options2 = _interopRequireDefault(_options);

var _uglify = require('./uglify');

var _uglify2 = _interopRequireDefault(_uglify);

var _versions = require('./uglify/versions');

var _versions2 = _interopRequireDefault(_versions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable
  no-param-reassign
*/

var warningRegex = /\[.+:([0-9]+),([0-9]+)\]/;

var UglifyJsPlugin = function () {
  function UglifyJsPlugin() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, UglifyJsPlugin);

    (0, _schemaUtils2.default)(_options2.default, options, 'UglifyJs Plugin');

    var _options$uglifyOption = options.uglifyOptions,
        uglifyOptions = _options$uglifyOption === undefined ? {} : _options$uglifyOption,
        _options$test = options.test,
        test = _options$test === undefined ? /\.js$/i : _options$test,
        _options$warningsFilt = options.warningsFilter,
        warningsFilter = _options$warningsFilt === undefined ? function () {
      return true;
    } : _options$warningsFilt,
        _options$extractComme = options.extractComments,
        extractComments = _options$extractComme === undefined ? false : _options$extractComme,
        _options$sourceMap = options.sourceMap,
        sourceMap = _options$sourceMap === undefined ? false : _options$sourceMap,
        _options$cache = options.cache,
        cache = _options$cache === undefined ? false : _options$cache,
        _options$parallel = options.parallel,
        parallel = _options$parallel === undefined ? false : _options$parallel,
        include = options.include,
        exclude = options.exclude;


    this.options = {
      test,
      warningsFilter,
      extractComments,
      sourceMap,
      cache,
      parallel,
      include,
      exclude,
      uglifyOptions: Object.assign({
        output: {
          comments: false
        }
      }, uglifyOptions)
    };
  }

  _createClass(UglifyJsPlugin, [{
    key: 'apply',
    value: function apply(compiler) {
      var _this = this;

      var requestShortener = new _RequestShortener2.default(compiler.context);

      compiler.plugin('compilation', function (compilation) {
        if (_this.options.sourceMap) {
          compilation.plugin('build-module', function (moduleArg) {
            // to get detailed location info about errors
            moduleArg.useSourceMap = true;
          });
        }

        compilation.plugin('optimize-chunk-assets', function (chunks, callback) {
          var uglify = new _uglify2.default({
            cache: _this.options.cache,
            parallel: _this.options.parallel
          });
          var uglifiedAssets = new WeakSet();
          var tasks = [];
          chunks.reduce(function (acc, chunk) {
            return acc.concat(chunk.files || []);
          }, []).concat(compilation.additionalChunkAssets || []).filter(_ModuleFilenameHelpers2.default.matchObject.bind(null, _this.options)).forEach(function (file) {
            var sourceMap = void 0;
            var asset = compilation.assets[file];
            if (uglifiedAssets.has(asset)) {
              return;
            }

            try {
              var input = void 0;
              var inputSourceMap = void 0;

              if (_this.options.sourceMap && asset.sourceAndMap) {
                var _asset$sourceAndMap = asset.sourceAndMap(),
                    source = _asset$sourceAndMap.source,
                    map = _asset$sourceAndMap.map;

                input = source;
                inputSourceMap = map;

                sourceMap = new _sourceMap.SourceMapConsumer(inputSourceMap);
              } else {
                input = asset.source();
                inputSourceMap = null;
              }

              // Handling comment extraction
              var commentsFile = false;
              if (_this.options.extractComments) {
                commentsFile = _this.options.extractComments.filename || `${file}.LICENSE`;
                if (typeof commentsFile === 'function') {
                  commentsFile = commentsFile(file);
                }
              }

              var task = {
                file,
                input,
                sourceMap,
                inputSourceMap,
                commentsFile,
                extractComments: _this.options.extractComments,
                uglifyOptions: _this.options.uglifyOptions
              };

              if (_this.options.cache) {
                task.cacheKey = (0, _serializeJavascript2.default)({
                  'uglify-es': _versions2.default.uglify,
                  'uglifyjs-webpack-plugin': _versions2.default.plugin,
                  'uglifyjs-webpack-plugin-options': _this.options,
                  path: compiler.outputPath ? `${compiler.outputPath}/${file}` : file,
                  input
                });
              }

              tasks.push(task);
            } catch (error) {
              compilation.errors.push(UglifyJsPlugin.buildError(error, file, sourceMap, requestShortener));
            }
          });

          uglify.runTasks(tasks, function (tasksError, results) {
            if (tasksError) {
              compilation.errors.push(tasksError);
              return;
            }

            results.forEach(function (data, index) {
              var _tasks$index = tasks[index],
                  file = _tasks$index.file,
                  input = _tasks$index.input,
                  sourceMap = _tasks$index.sourceMap,
                  inputSourceMap = _tasks$index.inputSourceMap,
                  commentsFile = _tasks$index.commentsFile;
              var error = data.error,
                  map = data.map,
                  code = data.code,
                  warnings = data.warnings,
                  extractedComments = data.extractedComments;

              // Handling results
              // Error case: add errors, and go to next file

              if (error) {
                compilation.errors.push(UglifyJsPlugin.buildError(error, file, sourceMap, requestShortener));
                return;
              }

              var outputSource = void 0;
              if (map) {
                outputSource = new _webpackSources.SourceMapSource(code, file, JSON.parse(map), input, inputSourceMap);
              } else {
                outputSource = new _webpackSources.RawSource(code);
              }

              // Write extracted comments to commentsFile
              if (commentsFile && extractedComments.length > 0) {
                // Add a banner to the original file
                if (_this.options.extractComments.banner !== false) {
                  var banner = _this.options.extractComments.banner || `For license information please see ${commentsFile}`;
                  if (typeof banner === 'function') {
                    banner = banner(commentsFile);
                  }
                  if (banner) {
                    outputSource = new _webpackSources.ConcatSource(`/*! ${banner} */\n`, outputSource);
                  }
                }

                var commentsSource = new _webpackSources.RawSource(`${extractedComments.join('\n\n')}\n`);
                if (commentsFile in compilation.assets) {
                  // commentsFile already exists, append new comments...
                  if (compilation.assets[commentsFile] instanceof _webpackSources.ConcatSource) {
                    compilation.assets[commentsFile].add('\n');
                    compilation.assets[commentsFile].add(commentsSource);
                  } else {
                    compilation.assets[commentsFile] = new _webpackSources.ConcatSource(compilation.assets[commentsFile], '\n', commentsSource);
                  }
                } else {
                  compilation.assets[commentsFile] = commentsSource;
                }
              }

              // Updating assets
              uglifiedAssets.add(compilation.assets[file] = outputSource);

              // Handling warnings
              if (warnings) {
                var warnArr = UglifyJsPlugin.buildWarnings(warnings, file, sourceMap, _this.options.warningsFilter, requestShortener);
                if (warnArr.length > 0) {
                  compilation.warnings.push(new Error(`${file} from UglifyJs\n${warnArr.join('\n')}`));
                }
              }
            });

            uglify.exit();
            callback();
          });
        });
      });
    }
  }], [{
    key: 'buildError',
    value: function buildError(err, file, sourceMap, requestShortener) {
      // Handling error which should have line, col, filename and message
      if (err.line) {
        var original = sourceMap && sourceMap.originalPositionFor({
          line: err.line,
          column: err.col
        });
        if (original && original.source) {
          return new Error(`${file} from UglifyJs\n${err.message} [${requestShortener.shorten(original.source)}:${original.line},${original.column}][${file}:${err.line},${err.col}]`);
        }
        return new Error(`${file} from UglifyJs\n${err.message} [${file}:${err.line},${err.col}]`);
      } else if (err.stack) {
        return new Error(`${file} from UglifyJs\n${err.stack}`);
      }
      return new Error(`${file} from UglifyJs\n${err.message}`);
    }
  }, {
    key: 'buildWarnings',
    value: function buildWarnings(warnings, file, sourceMap, warningsFilter, requestShortener) {
      if (!sourceMap) {
        return warnings;
      }
      return warnings.reduce(function (accWarnings, warning) {
        var match = warningRegex.exec(warning);
        var line = +match[1];
        var column = +match[2];
        var original = sourceMap.originalPositionFor({
          line,
          column
        });

        if (original && original.source && original.source !== file && warningsFilter(original.source)) {
          accWarnings.push(`${warning.replace(warningRegex, '')}[${requestShortener.shorten(original.source)}:${original.line},${original.column}]`);
        }

        return accWarnings;
      }, []);
    }
  }]);

  return UglifyJsPlugin;
}();

exports.default = UglifyJsPlugin;