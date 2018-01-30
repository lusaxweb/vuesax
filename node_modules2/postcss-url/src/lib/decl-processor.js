'use strict';

const matchOptions = require('./match-options');
const paths = require('./paths');

const getPathDeclFile = paths.getPathDeclFile;
const getDirDeclFile = paths.getDirDeclFile;
const prepareAsset = paths.prepareAsset;

/**
 * @typedef UrlRegExp
 * @name UrlRegExp
 * @desc A regex for match url with parentheses:
 *   (before url)(the url)(after url).
 *    (the url) will be replace with new url, and before and after will remain
 * @type RegExp
 */
/**
 * @type {UrlRegExp[]}
 */
const URL_PATTERNS = [
    /(url\(\s*['"]?)([^"')]+)(["']?\s*\))/g,
    /(AlphaImageLoader\(\s*src=['"]?)([^"')]+)(["'])/g
];

const WITH_QUOTES = /^['"]/;

/**
 * Restricted modes
 *
 * @type {String[]}
 */
const PROCESS_TYPES = ['rebase', 'inline', 'copy', 'custom'];

const getUrlProcessorType = (optionUrl) =>
    typeof optionUrl === 'function' ? 'custom' : (optionUrl || 'rebase');

/**
 * @param {String} optionUrl
 * @returns {PostcssUrl~UrlProcessor}
 */
function getUrlProcessor(optionUrl) {
    const mode = getUrlProcessorType(optionUrl);

    if (PROCESS_TYPES.indexOf(mode) === -1) {
        throw new Error(`Unknown mode for postcss-url: ${mode}`);
    }

    return require(`../type/${mode}`);
}

/**
 * @param {PostcssUrl~UrlProcessor} urlProcessor
 * @param {Result} result
 * @param {Decl} decl
 * @returns {Function}
 */
const wrapUrlProcessor = (urlProcessor, result, decl) => {
    const warn = (message) => decl.warn(result, message);
    const addDependency = (file) => result.messages.push({
        type: 'dependency',
        file,
        parent: getPathDeclFile(decl)
    });

    return (asset, dir, option) =>
        urlProcessor(asset, dir, option, decl, warn, result, addDependency);
};

/**
 * @param {Decl} decl
 * @returns {RegExp}
 */
const getPattern = (decl) =>
    URL_PATTERNS.find((pattern) => pattern.test(decl.value));

/**
 * @param {String} url
 * @param {Dir} dir
 * @param {Options} options
 * @param {Result} result
 * @param {Decl} decl
 * @returns {String|undefined}
 */
const replaceUrl = (url, dir, options, result, decl) => {
    const asset = prepareAsset(url, dir, decl);

    const matchedOptions = matchOptions(asset, options);

    if (!matchedOptions) return;

    const process = (option) => {
        const wrappedUrlProcessor = wrapUrlProcessor(getUrlProcessor(option.url), result, decl);

        return wrappedUrlProcessor(asset, dir, option);
    };

    if (Array.isArray(matchedOptions)) {
        matchedOptions.forEach((option) => asset.url = process(option));
    } else {
        asset.url = process(matchedOptions);
    }

    return asset.url;
};

/**
 * @param {String} from
 * @param {String} to
 * @param {PostcssUrl~Options} options
 * @param {Result} result
 * @param {Decl} decl
 * @returns {PostcssUrl~DeclProcessor}
 */
const declProcessor = (from, to, options, result, decl) => {
    const dir = { from, to, file: getDirDeclFile(decl) };
    const pattern = getPattern(decl);

    if (!pattern) return;

    decl.value = decl.value
        .replace(pattern, (matched, before, url, after) => {
            const newUrl = replaceUrl(url, dir, options, result, decl);

            if (!newUrl) return matched;

            if (WITH_QUOTES.test(newUrl) && WITH_QUOTES.test(after)) {
                before = before.slice(0, -1);
                after = after.slice(1);
            }

            return `${before}${newUrl}${after}`;
        });
};

module.exports = {
    replaceUrl,
    declProcessor
};

/**
 * @typedef {Object} PostcssUrl~Options - postcss-url Options
 * @property {String} [url=^rebase|inline|copy|custom] - processing mode
 * @property {Minimatch|RegExp|Function} [filter] - filter assets by relative pathname
 * @property {String} [assetsPath] - absolute or relative path to copy assets
 * @property {String|String[]} [basePath] - absolute or relative paths to search, when copy or inline
 * @property {Number} [maxSize] - max file size in kbytes for inline mode
 * @property {String} [fallback] - fallback mode if file exceeds maxSize
 * @property {Boolean} [useHash] - use file hash instead filename
 * @property {HashOptions} [hashOptions] - params for generating hash name
 */
