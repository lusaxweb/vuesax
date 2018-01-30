'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.raw = undefined;
exports.default = loader;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _loaderUtils = require('loader-utils');

var _loaderUtils2 = _interopRequireDefault(_loaderUtils);

var _schemaUtils = require('schema-utils');

var _schemaUtils2 = _interopRequireDefault(_schemaUtils);

var _options = require('./options.json');

var _options2 = _interopRequireDefault(_options);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loader(content) {
  if (!this.emitFile) throw new Error('File Loader\n\nemitFile is required from module system');

  var options = _loaderUtils2.default.getOptions(this) || {};

  (0, _schemaUtils2.default)(_options2.default, options, 'File Loader');

  var context = options.context || this.rootContext || this.options && this.options.context;

  var url = _loaderUtils2.default.interpolateName(this, options.name, {
    context,
    content,
    regExp: options.regExp
  });

  var outputPath = '';

  if (options.outputPath) {
    // support functions as outputPath to generate them dynamically
    outputPath = typeof options.outputPath === 'function' ? options.outputPath(url) : options.outputPath;
  }

  var filePath = this.resourcePath;

  if (options.useRelativePath) {
    var issuerContext = this._module && this._module.issuer && this._module.issuer.context || context;

    var relativeUrl = issuerContext && _path2.default.relative(issuerContext, filePath).split(_path2.default.sep).join('/');

    var relativePath = relativeUrl && `${_path2.default.dirname(relativeUrl)}/`;
    // eslint-disable-next-line no-bitwise
    if (~relativePath.indexOf('../')) {
      outputPath = _path2.default.posix.join(outputPath, relativePath, url);
    } else {
      outputPath = relativePath + url;
    }

    url = relativePath + url;
  } else if (options.outputPath) {
    // support functions as outputPath to generate them dynamically
    outputPath = typeof options.outputPath === 'function' ? options.outputPath(url) : options.outputPath + url;

    url = outputPath;
  } else {
    outputPath = url;
  }

  var publicPath = `__webpack_public_path__ + ${JSON.stringify(url)}`;

  if (options.publicPath !== undefined) {
    // support functions as publicPath to generate them dynamically
    publicPath = JSON.stringify(typeof options.publicPath === 'function' ? options.publicPath(url) : options.publicPath + url);
  }

  if (options.emitFile === undefined || options.emitFile) {
    this.emitFile(outputPath, content);
  }
  // TODO revert to ES2015 Module export, when new CSS Pipeline is in place
  return `module.exports = ${publicPath};`;
}

var raw = exports.raw = true;