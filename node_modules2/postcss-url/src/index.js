'use strict';

const path = require('path');
const postcss = require('postcss');

const declProcessor = require('./lib/decl-processor').declProcessor;

/**
 *
 * @type {Plugin}
 */
module.exports = postcss.plugin('postcss-url', (options) => {
    options = options || {};

    return function(styles, result) {
        const opts = result.opts;
        const from = opts.from ? path.dirname(opts.from) : '.';
        const to = opts.to ? path.dirname(opts.to) : from;

        styles.walkDecls((decl) =>
            declProcessor(from, to, options, result, decl)
        );
    };
});

/**
 * @callback PostcssUrl~UrlProcessor
 * @param {String} from from
 * @param {String} dirname to dirname
 * @param {String} oldUrl url
 * @param {String} to destination
 * @param {Object} options plugin options
 * @param {Object} decl postcss declaration
 * @return {String|undefined} new url or undefined if url is old
 */

/**
 * @typedef {Object} PostcssUrl~HashOptions
 * @property {Function|String} [method=^xxhash32|xxhash64] - hash name or custom function, accepting file content
 * @see https://github.com/pierrec/js-xxhash
 * @property {Number} [shrink=8] - shrink hash string
 */

/**
 * @typedef {Object} Decl - postcss decl
 * @see http://api.postcss.org/Declaration.html
 */

/**
 * @typedef {Object} Result - postcss result
 * @see http://api.postcss.org/Result.html
 */
