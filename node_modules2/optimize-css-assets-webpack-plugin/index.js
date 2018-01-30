var LastCallWebpackPlugin = require('last-call-webpack-plugin');

function OptimizeCssAssetsPlugin(options) {
  this.options = options || {};

  if (this.options.assetNameRegExp === undefined) {
    this.options.assetNameRegExp = /\.css$/g;
  }

  if (this.options.cssProcessor === undefined) {
    this.options.cssProcessor = require('cssnano');
  }

  if (this.options.cssProcessorOptions === undefined) {
    this.options.cssProcessorOptions = {};
  }

  if (this.options.canPrint === undefined) {
    this.options.canPrint = true;
  }

  var self = this;
  this.lastCallInstance = new LastCallWebpackPlugin({
    assetProcessors: [
      {
        phase: LastCallWebpackPlugin.PHASE.OPTIMIZE_CHUNK_ASSETS,
        regExp: this.options.assetNameRegExp,
        processor: function (assetName, asset, assets) {
          return self.processCss(assetName, asset, assets);
        },
      }
    ],
    canPrint: this.options.canPrint
  });
};

OptimizeCssAssetsPlugin.prototype.processCss = function(assetName, asset, assets) {
  var css = asset.source();
  var processOptions = Object.assign(
    { from: assetName, to: assetName },
    this.options.cssProcessorOptions || {}
  );
  if (processOptions.map && !processOptions.map.prev) {
    try {
      var mapJson = assets.getAsset(assetName + '.map');
      if (mapJson) {
        var map = JSON.parse(mapJson);
        if (
          map &&
          (
            (map.sources && map.sources.length > 0) ||
            (map.mappings && map.mappings.length > 0)
          )
        ) {
          processOptions.map = Object.assign({ prev: mapJson }, processOptions.map);
        }
      }
    } catch (err) {
      console.warn('OptimizeCssAssetsPlugin.processCss() Error getting previous source map', err);
    }
  }
  return this.options
    .cssProcessor.process(css, processOptions)
    .then(r => {
      if (processOptions.map && r.map && r.map.toString) {
        assets.setAsset(assetName + '.map', r.map.toString());
      }
      return r.css;
    });
};

OptimizeCssAssetsPlugin.prototype.apply = function(compiler) {
  return this.lastCallInstance.apply(compiler);
};

module.exports = OptimizeCssAssetsPlugin;
