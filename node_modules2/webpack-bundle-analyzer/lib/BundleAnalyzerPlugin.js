'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require('fs');
var path = require('path');
var mkdir = require('mkdirp');

var _require = require('chalk'),
    bold = _require.bold;

var Logger = require('./Logger');
var viewer = require('./viewer');

var BundleAnalyzerPlugin = function () {
  function BundleAnalyzerPlugin(opts) {
    _classCallCheck(this, BundleAnalyzerPlugin);

    this.opts = Object.assign({
      analyzerMode: 'server',
      analyzerHost: '127.0.0.1',
      analyzerPort: 8888,
      reportFilename: 'report.html',
      defaultSizes: 'parsed',
      openAnalyzer: true,
      generateStatsFile: false,
      statsFilename: 'stats.json',
      statsOptions: null,
      logLevel: 'info',
      // deprecated
      startAnalyzer: true
    }, opts);

    this.server = null;
    this.logger = new Logger(this.opts.logLevel);
  }

  _createClass(BundleAnalyzerPlugin, [{
    key: 'apply',
    value: function apply(compiler) {
      var _this = this;

      this.compiler = compiler;

      compiler.plugin('done', function (stats) {
        stats = stats.toJson(_this.opts.statsOptions);

        var actions = [];

        if (_this.opts.generateStatsFile) {
          actions.push(function () {
            return _this.generateStatsFile(stats);
          });
        }

        // Handling deprecated `startAnalyzer` flag
        if (_this.opts.analyzerMode === 'server' && !_this.opts.startAnalyzer) {
          _this.opts.analyzerMode = 'disabled';
        }

        if (_this.opts.analyzerMode === 'server') {
          actions.push(function () {
            return _this.startAnalyzerServer(stats);
          });
        } else if (_this.opts.analyzerMode === 'static') {
          actions.push(function () {
            return _this.generateStaticReport(stats);
          });
        }

        if (actions.length) {
          // Making analyzer logs to be after all webpack logs in the console
          setImmediate(function () {
            actions.forEach(function (action) {
              return action();
            });
          });
        }
      });
    }
  }, {
    key: 'generateStatsFile',
    value: function generateStatsFile(stats) {
      var statsFilepath = path.resolve(this.compiler.outputPath, this.opts.statsFilename);

      mkdir.sync(path.dirname(statsFilepath));

      fs.writeFileSync(statsFilepath, JSON.stringify(stats, null, 2));

      this.logger.info(`${bold('Webpack Bundle Analyzer')} saved stats file to ${bold(statsFilepath)}`);
    }
  }, {
    key: 'startAnalyzerServer',
    value: function () {
      var _ref = _asyncToGenerator(function* (stats) {
        if (this.server) {
          (yield this.server).updateChartData(stats);
        } else {
          this.server = viewer.startServer(stats, {
            openBrowser: this.opts.openAnalyzer,
            host: this.opts.analyzerHost,
            port: this.opts.analyzerPort,
            bundleDir: this.getBundleDirFromCompiler(),
            logger: this.logger,
            defaultSizes: this.opts.defaultSizes
          });
        }
      });

      function startAnalyzerServer(_x) {
        return _ref.apply(this, arguments);
      }

      return startAnalyzerServer;
    }()
  }, {
    key: 'generateStaticReport',
    value: function generateStaticReport(stats) {
      viewer.generateReport(stats, {
        openBrowser: this.opts.openAnalyzer,
        reportFilename: path.resolve(this.compiler.outputPath, this.opts.reportFilename),
        bundleDir: this.getBundleDirFromCompiler(),
        logger: this.logger,
        defaultSizes: this.opts.defaultSizes
      });
    }
  }, {
    key: 'getBundleDirFromCompiler',
    value: function getBundleDirFromCompiler() {
      return this.compiler.outputFileSystem.constructor.name === 'MemoryFileSystem' ? null : this.compiler.outputPath;
    }
  }]);

  return BundleAnalyzerPlugin;
}();

module.exports = BundleAnalyzerPlugin;