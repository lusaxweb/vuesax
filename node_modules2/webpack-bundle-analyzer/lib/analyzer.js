'use strict';

var fs = require('fs');
var path = require('path');

var _ = require('lodash');
var gzipSize = require('gzip-size');

var Logger = require('./Logger');

var _require = require('../lib/tree'),
    Folder = _require.Folder;

var _require2 = require('../lib/parseUtils'),
    parseBundle = _require2.parseBundle;

var FILENAME_QUERY_REGEXP = /\?.*$/;
var MULTI_MODULE_REGEXP = /^multi /;

module.exports = {
  getViewerData,
  readStatsFromFile
};

function getViewerData(bundleStats, bundleDir, opts) {
  var _ref = opts || {},
      _ref$logger = _ref.logger,
      logger = _ref$logger === undefined ? new Logger() : _ref$logger;

  // Sometimes all the information is located in `children` array (e.g. problem in #10)


  if (_.isEmpty(bundleStats.assets) && !_.isEmpty(bundleStats.children)) {
    bundleStats = bundleStats.children[0];
  }

  // Picking only `*.js` assets from bundle that has non-empty `chunks` array
  bundleStats.assets = _.filter(bundleStats.assets, function (asset) {
    // Removing query part from filename (yes, somebody uses it for some reason and Webpack supports it)
    // See #22
    asset.name = asset.name.replace(FILENAME_QUERY_REGEXP, '');

    return _.endsWith(asset.name, '.js') && !_.isEmpty(asset.chunks);
  });

  // Trying to parse bundle assets and get real module sizes if `bundleDir` is provided
  var bundlesSources = null;
  var parsedModules = null;

  if (bundleDir) {
    bundlesSources = {};
    parsedModules = {};

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = bundleStats.assets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var statAsset = _step.value;

        var assetFile = path.join(bundleDir, statAsset.name);
        var bundleInfo = void 0;

        try {
          bundleInfo = parseBundle(assetFile);
        } catch (err) {
          bundleInfo = null;
        }

        if (!bundleInfo) {
          logger.warn(`\nCouldn't parse bundle asset "${assetFile}".\n` + 'Analyzer will use module sizes from stats file.\n');
          parsedModules = null;
          bundlesSources = null;
          break;
        }

        bundlesSources[statAsset.name] = bundleInfo.src;
        _.assign(parsedModules, bundleInfo.modules);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  var assets = _.transform(bundleStats.assets, function (result, statAsset) {
    var asset = result[statAsset.name] = _.pick(statAsset, 'size');

    if (bundlesSources) {
      asset.parsedSize = bundlesSources[statAsset.name].length;
      asset.gzipSize = gzipSize.sync(bundlesSources[statAsset.name]);
    }

    // Picking modules from current bundle script
    asset.modules = _(bundleStats.modules).filter(function (statModule) {
      return assetHasModule(statAsset, statModule);
    }).each(function (statModule) {
      if (parsedModules) {
        statModule.parsedSrc = parsedModules[statModule.id];
      }
    });

    asset.tree = createModulesTree(asset.modules);
  }, {});

  return _.transform(assets, function (result, asset, filename) {
    result.push({
      label: filename,
      // Not using `asset.size` here provided by Webpack because it can be very confusing when `UglifyJsPlugin` is used.
      // In this case all module sizes from stats file will represent unminified module sizes, but `asset.size` will
      // be the size of minified bundle.
      statSize: asset.tree.size,
      parsedSize: asset.parsedSize,
      gzipSize: asset.gzipSize,
      groups: _.invokeMap(asset.tree.children, 'toChartData')
    });
  }, []);
}

function readStatsFromFile(filename) {
  return JSON.parse(fs.readFileSync(filename, 'utf8'));
}

function assetHasModule(statAsset, statModule) {
  return _.some(statModule.chunks, function (moduleChunk) {
    return _.includes(statAsset.chunks, moduleChunk);
  });
}

function createModulesTree(modules) {
  var root = new Folder('.');

  _.each(modules, function (module) {
    var path = getModulePath(module);

    if (path) {
      root.addModuleByPath(path, module);
    }
  });

  return root;
}

function getModulePath(module) {
  if (MULTI_MODULE_REGEXP.test(module.identifier)) {
    return [module.identifier];
  }

  var parsedPath = _
  // Removing loaders from module path: they're joined by `!` and the last part is a raw module path
  .last(module.name.split('!'))
  // Splitting module path into parts
  .split('/')
  // Removing first `.`
  .slice(1)
  // Replacing `~` with `node_modules`
  .map(function (part) {
    return part === '~' ? 'node_modules' : part;
  });

  return parsedPath.length ? parsedPath : null;
}