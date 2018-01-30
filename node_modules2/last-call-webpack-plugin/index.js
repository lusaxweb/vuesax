var assign = require('lodash/assign');
var each = require('lodash/each');
var find = require('lodash/find');
var isArray = require('lodash/isArray');
var isFunction = require('lodash/isFunction');
var isRegExp = require('lodash/isRegExp');
var keys = require('lodash/keys');
var values = require('lodash/values');
var webpackSources = require('webpack-sources');

function EMPTY_FUNC() {};

var PHASE = {
  OPTIMIZE_CHUNK_ASSETS: 'compilation.optimize-chunk-assets',
  OPTIMIZE_ASSETS: 'compilation.optimize-assets',
  EMIT: 'emit'
};
var PHASES = values(PHASE);

function AssetsManipulation(lastCallWebpackPlugin, compilation) {
  this.lastCallWebpackPlugin = lastCallWebpackPlugin;
  this.compilation = compilation;
}

AssetsManipulation.prototype.setAsset = function(assetName, assetValue, immediate) {
  this.lastCallWebpackPlugin.setAsset(assetName, assetValue, immediate, this.compilation);
};

AssetsManipulation.prototype.getAsset = function(assetName) {
  var asset = assetName && this.compilation.assets[assetName] && this.compilation.assets[assetName].source();
  return asset || undefined;
};

function LastCallWebpackPlugin(options) {
  this.options = assign(
    {
      assetProcessors: [],
      onStart: EMPTY_FUNC,
      onEnd: EMPTY_FUNC,
      canPrint: true
    },
    options || {}
  );

  if (!isArray(this.options.assetProcessors)) {
    throw new Error('LastCallWebpackPlugin Error: invalid options.assetProcessors (must be an Array).');
  }

  each(this.options.assetProcessors, function (processor, index) {
    if (!processor) {
      throw new Error('LastCallWebpackPlugin Error: invalid options.assetProcessors[' + String(index) + '] (must be an object).');
    }
    if (!isRegExp(processor.regExp)) {
      throw new Error('LastCallWebpackPlugin Error: invalid options.assetProcessors[' + String(index) + '].regExp (must be an regular expression).');
    }
    if (!isFunction(processor.processor)) {
      throw new Error('LastCallWebpackPlugin Error: invalid options.assetProcessors[' + String(index) + '].processor (must be a function).');
    }
    if (processor.phase === undefined) {
      processor.phase = PHASE.OPTIMIZE_ASSETS;
    }
    if (!find(PHASES, function(p) { return p === processor.phase; })) {
      throw new Error('LastCallWebpackPlugin Error: invalid options.assetProcessors[' + String(index) + '].phase (must be on of: ' + PHASES.join(', ') + ').');
    }
  });

  if (!isFunction(this.options.onStart)) {
    throw new Error('LastCallWebpackPlugin Error: invalid options.onStart (must be a function).');
  }
  if (!isFunction(this.options.onEnd)) {
    throw new Error('LastCallWebpackPlugin Error: invalid options.onEnd (must be a function).');
  }

  this.initCompile();
};

LastCallWebpackPlugin.prototype.initCompile = function() {
  this.deleteAssetsMap = {};
}

LastCallWebpackPlugin.prototype.print = function() {
  if (this.options.canPrint) {
    console.log.apply(console, arguments);
  }
};

LastCallWebpackPlugin.prototype.onAssetError = function(assetName, asset, err) {
  this.print('Error processing file: ' + assetName);
};

LastCallWebpackPlugin.prototype.getAssetsAndProcessors = function(assets, phase) {
  var assetProcessors = this.options.assetProcessors;
  var assetNames = keys(assets);
  var assetsAndProcessors = [];

  each(assetNames, function (assetName) {
    each(assetProcessors, function(assetProcessor) {
      if (assetProcessor.phase === phase) {
        var regExpResult = assetProcessor.regExp.exec(assetName);
        assetProcessor.regExp.lastIndex = 0;
        if (regExpResult) {
          var assetAndProcessor = {
            assetName: assetName,
            regExp: assetProcessor.regExp,
            processor: assetProcessor.processor,
            regExpResult: regExpResult,
          };
          assetsAndProcessors.push(assetAndProcessor);
        }
      }
    });
  });

  return assetsAndProcessors;
};

LastCallWebpackPlugin.prototype.createAsset = function(content, originalAsset) {
  return new webpackSources.RawSource(content);
};

LastCallWebpackPlugin.prototype.process = function(compilation, phase, callback) {
  var self = this;

  var assetsAndProcessors = this.getAssetsAndProcessors(compilation.assets, phase);
  if (assetsAndProcessors.length <= 0) {
    return callback();
  }

  this.options.onStart(assetsAndProcessors, compilation, phase);

  var hasErrors = false;
  var promises = [];

  var assetsManipulationObject = new AssetsManipulation(self, compilation);

  each(assetsAndProcessors, function(assetAndProcessor) {
    var asset = compilation.assets[assetAndProcessor.assetName];
    var promise = assetAndProcessor
      .processor(assetAndProcessor.assetName, asset, assetsManipulationObject)
      .then(function (result) {
        if (result !== undefined) {
          self.setAsset(assetAndProcessor.assetName, result, false, compilation);
        }
      })
      .catch(function(err) {
        hasErrors = true;
        self.onAssetError(assetAndProcessor.assetName, asset, err);
        throw err;
      });
    promises.push(promise);
  });

  return Promise.all(promises)
    .then(function () {
      self.options.onEnd(assetsAndProcessors, compilation, phase);
      callback();
    })
    .catch(function (err) {
      self.options.onEnd(assetsAndProcessors, compilation, phase, err);
      callback(err);
    });
};

LastCallWebpackPlugin.prototype.setAsset = function(assetName, assetValue, immediate, compilation) {
  if (assetName) {
    if (assetValue === null) {
      this.deleteAssetsMap[assetName] = true;
      if (immediate) {
        delete compilation.assets[assetName];
      }
    } else {
      if (assetValue !== undefined) {
        compilation.assets[assetName] = this.createAsset(assetValue, compilation.assets[assetName]);
      }
    }
  }
};

LastCallWebpackPlugin.prototype.deleteAssets = function(compilation) {
  if (this.deleteAssetsMap && compilation) {
    each(keys(this.deleteAssetsMap), function(key) {
      delete compilation.assets[key];
    });
  }
};

LastCallWebpackPlugin.prototype.apply = function(compiler) {
  var self = this;

  compiler.plugin('compilation', function(compilation, params) {
    self.initCompile();

    compilation.plugin("optimize-chunk-assets", function(chunks, callback) {
      self.process(compilation, PHASE.OPTIMIZE_CHUNK_ASSETS, callback);
    });
    compilation.plugin("optimize-assets", function(chunks, callback) {
      self.process(compilation, PHASE.OPTIMIZE_ASSETS, callback);
    });
  });
  compiler.plugin('emit', function(compilation, callback) {
    self.process(compilation, PHASE.EMIT, callback);
    self.deleteAssets(compilation);
  });
};

LastCallWebpackPlugin.prototype.PHASE = PHASE;
LastCallWebpackPlugin.PHASE = PHASE;

module.exports = LastCallWebpackPlugin;
