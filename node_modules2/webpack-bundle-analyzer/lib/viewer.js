'use strict';

var startServer = function () {
  var _ref = _asyncToGenerator(function* (bundleStats, opts) {
    var _ref2 = opts || {},
        _ref2$port = _ref2.port,
        port = _ref2$port === undefined ? 8888 : _ref2$port,
        _ref2$host = _ref2.host,
        host = _ref2$host === undefined ? '127.0.0.1' : _ref2$host,
        _ref2$openBrowser = _ref2.openBrowser,
        openBrowser = _ref2$openBrowser === undefined ? true : _ref2$openBrowser,
        _ref2$bundleDir = _ref2.bundleDir,
        bundleDir = _ref2$bundleDir === undefined ? null : _ref2$bundleDir,
        _ref2$logger = _ref2.logger,
        logger = _ref2$logger === undefined ? new Logger() : _ref2$logger,
        _ref2$defaultSizes = _ref2.defaultSizes,
        defaultSizes = _ref2$defaultSizes === undefined ? 'parsed' : _ref2$defaultSizes;

    var chartData = getChartData(logger, bundleStats, bundleDir);

    if (!chartData) return;

    var app = express();

    // Explicitly using our `ejs` dependency to render templates
    // Fixes #17
    app.engine('ejs', require('ejs').renderFile);
    app.set('view engine', 'ejs');
    app.set('views', `${projectRoot}/views`);
    app.use(express.static(`${projectRoot}/public`));

    app.use('/', function (req, res) {
      res.render('viewer', {
        mode: 'server',
        get chartData() {
          return JSON.stringify(chartData);
        },
        defaultSizes: JSON.stringify(defaultSizes)
      });
    });

    var server = http.createServer(app);

    yield new Promise(function (resolve) {
      server.listen(port, host, function () {
        resolve();

        var url = `http://${host}:${server.address().port}`;

        logger.info(`${bold('Webpack Bundle Analyzer')} is started at ${bold(url)}\n` + `Use ${bold('Ctrl+C')} to close it`);

        if (openBrowser) {
          opener(url);
        }
      });
    });

    var wss = new WebSocket.Server({ server });

    wss.on('connection', function (ws) {
      ws.on('error', function (err) {
        // Ignore network errors like `ECONNRESET`, `EPIPE`, etc.
        if (err.errno) return;

        logger.info(err.message);
      });
    });

    return {
      ws: wss,
      http: server,
      updateChartData
    };

    function updateChartData(bundleStats) {
      var newChartData = getChartData(logger, bundleStats, bundleDir);

      if (!newChartData) return;

      chartData = newChartData;

      wss.clients.forEach(function (client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({
            event: 'chartDataUpdated',
            data: newChartData
          }));
        }
      });
    }
  });

  return function startServer(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var path = require('path');
var fs = require('fs');
var http = require('http');

var WebSocket = require('ws');
var _ = require('lodash');
var express = require('express');
var ejs = require('ejs');
var opener = require('opener');
var mkdir = require('mkdirp');

var _require = require('chalk'),
    bold = _require.bold;

var Logger = require('./Logger');
var analyzer = require('./analyzer');

var projectRoot = path.resolve(__dirname, '..');

module.exports = {
  startServer,
  generateReport,
  // deprecated
  start: startServer
};

function generateReport(bundleStats, opts) {
  var _ref3 = opts || {},
      _ref3$openBrowser = _ref3.openBrowser,
      openBrowser = _ref3$openBrowser === undefined ? true : _ref3$openBrowser,
      _ref3$reportFilename = _ref3.reportFilename,
      reportFilename = _ref3$reportFilename === undefined ? 'report.html' : _ref3$reportFilename,
      _ref3$bundleDir = _ref3.bundleDir,
      bundleDir = _ref3$bundleDir === undefined ? null : _ref3$bundleDir,
      _ref3$logger = _ref3.logger,
      logger = _ref3$logger === undefined ? new Logger() : _ref3$logger,
      _ref3$defaultSizes = _ref3.defaultSizes,
      defaultSizes = _ref3$defaultSizes === undefined ? 'parsed' : _ref3$defaultSizes;

  var chartData = getChartData(logger, bundleStats, bundleDir);

  if (!chartData) return;

  ejs.renderFile(`${projectRoot}/views/viewer.ejs`, {
    mode: 'static',
    chartData: JSON.stringify(chartData),
    assetContent: getAssetContent,
    defaultSizes: JSON.stringify(defaultSizes)
  }, function (err, reportHtml) {
    if (err) return logger.error(err);

    var reportFilepath = path.resolve(bundleDir || process.cwd(), reportFilename);

    mkdir.sync(path.dirname(reportFilepath));
    fs.writeFileSync(reportFilepath, reportHtml);

    logger.info(`${bold('Webpack Bundle Analyzer')} saved report to ${bold(reportFilepath)}`);

    if (openBrowser) {
      opener(`file://${reportFilepath}`);
    }
  });
}

function getAssetContent(filename) {
  return fs.readFileSync(`${projectRoot}/public/${filename}`, 'utf8');
}

function getChartData(logger) {
  var chartData = void 0;

  try {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    chartData = analyzer.getViewerData.apply(analyzer, args.concat([{ logger }]));
  } catch (err) {
    logger.error(`Could't analyze webpack bundle:\n${err}`);
    chartData = null;
  }

  if (_.isEmpty(chartData)) {
    logger.error("Could't find any javascript bundles in provided stats file");
    chartData = null;
  }

  return chartData;
}