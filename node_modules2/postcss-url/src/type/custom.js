/**
 * Transform url() based on a custom callback
 *
 * @type {PostcssUrl~UrlProcessor}
 * @param {PostcssUrl~Asset} asset
 * @param {PostcssUrl~Dir} dir
 * @param {PostcssUrl~Option} options
 *
 * @returns {String|Undefined}
 */
module.exports = function getCustomProcessor(asset, dir, options) {
    return options.url.apply(null, arguments);
};
