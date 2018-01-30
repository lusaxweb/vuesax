#! /usr/bin/env node
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _require = require('path'),
    resolve = _require.resolve,
    dirname = _require.dirname;

var _ = require('lodash');
var commander = require('commander');

var _require2 = require('chalk'),
    magenta = _require2.magenta;

var analyzer = require('../analyzer');
var viewer = require('../viewer');

var SIZES = new Set(['stat', 'parsed', 'gzip']);

var program = commander.version(require('../../package.json').version).usage(`<bundleStatsFile> [bundleDir] [options]

  Arguments:
  
    bundleStatsFile  Path to Webpack Stats JSON file.
    bundleDir        Directory containing all generated bundles.
                     You should provided it if you want analyzer to show you the real parsed module sizes.
                     By default a directory of stats file is used.`).option('-m, --mode <mode>', 'Analyzer mode. Should be `server` or `static`.' + br('In `server` mode analyzer will start HTTP server to show bundle report.') + br('In `static` mode single HTML file with bundle report will be generated.') + br('Default is `server`.'), 'server').option('-h, --host <host>', 'Host that will be used in `server` mode to start HTTP server.' + br('Default is `127.0.0.1`.'), '127.0.0.1').option('-p, --port <n>', 'Port that will be used in `server` mode to start HTTP server.' + br('Default is 8888.'), Number, 8888).option('-r, --report <file>', 'Path to bundle report file that will be generated in `static` mode.' + br('Default is `report.html`.'), 'report.html').option('-s, --default-sizes <type>', 'Module sizes to show in treemap by default.' + br(`Possible values: ${[].concat(_toConsumableArray(SIZES)).join(', ')}`) + br('Default is `parsed`.'), 'parsed').option('-O, --no-open', "Don't open report in default browser automatically.").parse(process.argv);

var mode = program.mode,
    host = program.host,
    port = program.port,
    reportFilename = program.report,
    defaultSizes = program.defaultSizes,
    openBrowser = program.open,
    _program$args = _slicedToArray(program.args, 2),
    bundleStatsFile = _program$args[0],
    bundleDir = _program$args[1];

if (!bundleStatsFile) showHelp('Provide path to Webpack Stats file as first argument');
if (mode !== 'server' && mode !== 'static') showHelp('Invalid mode. Should be either `server` or `static`.');
if (mode === 'server' && !host) showHelp('Invalid host name');
if (mode === 'server' && isNaN(port)) showHelp('Invalid port number');
if (!SIZES.has(defaultSizes)) showHelp(`Invalid default sizes option. Possible values are: ${[].concat(_toConsumableArray(SIZES)).join(', ')}`);

bundleStatsFile = resolve(bundleStatsFile);

if (!bundleDir) bundleDir = dirname(bundleStatsFile);

var bundleStats = void 0;
try {
  bundleStats = analyzer.readStatsFromFile(bundleStatsFile);
} catch (err) {
  console.error(`Could't read webpack bundle stats from "${bundleStatsFile}":\n${err}`);
  process.exit(1);
}

if (mode === 'server') {
  viewer.startServer(bundleStats, {
    openBrowser,
    port,
    host,
    defaultSizes,
    bundleDir
  });
} else {
  viewer.generateReport(bundleStats, {
    openBrowser,
    reportFilename: resolve(reportFilename),
    defaultSizes,
    bundleDir
  });
}

function showHelp(error) {
  if (error) console.log(`\n  ${magenta(error)}`);
  program.outputHelp();
  process.exit(1);
}

function br(str) {
  return `\n${_.repeat(' ', 28)}${str}`;
}