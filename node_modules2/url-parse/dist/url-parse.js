!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.URLParse=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var required = require('requires-port')
  , lolcation = require('./lolcation')
  , qs = require('querystringify');

var keys = ',,protocol,username,password,host,hostname,port,pathname,query,hash'.split(',')
  , inherit = { protocol: 1, host: 1, hostname: 1 }
  , parts = keys.length;

//
// Story time children:
//
// FireFox 34 has some problems with their Regular Expression engine and
// executing a RegExp can cause a `too much recursion` error. We initially fixed
// this by moving the Regular Expression in the URL constructor so it's created
// every single time. This fixed it for some URL's but the more complex the
// URL's get the easier it is to trigger. Complexer URL like:
//
//   https://www.mozilla.org/en-US/firefox/34.0/whatsnew/?oldversion=33.1
//
// Still triggered the recursion error. After talking with Chrome and FireFox
// engineers it seemed to be caused by:
//
//   https://code.google.com/p/v8/issues/detail?id=430
//
// As FireFox started using Chrome's RegExp engine. After testing various of
// workarounds I finally stumbled upon this gem, use new RegExp as it sometimes
// behaves different then a RegExp literal.
//
// Steps for compiling the new RegExp:
//
// 1. Take the regular RegExp as seen below.
// 2. Escape the RegExp using XRegExp.escape from http://xregexp.com/tests/
// 3. ??
// 4. Profit.
//
// RegExp source: /^(?:(?:(([^:\/#\?]+:)?(?:(?:\/\/)(?:(?:(?:([^:@\/#\?]+)(?:\:([^:@\/#\?]*))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((?:\/?(?:[^\/\?#]+\/+)*)(?:[^\?#]*)))?(\?[^#]+)?)(#.*)?/
//
var regexp = new RegExp('\^\(\?:\(\?:\(\(\[\^:\\/\#\\\?\]\+:\)\?\(\?:\(\?:\\/\\/\)\(\?:\(\?:\(\?:\(\[\^:@\\/\#\\\?\]\+\)\(\?:\\:\(\[\^:@\\/\#\\\?\]\*\)\)\?\)@\)\?\(\(\[\^:\\/\#\\\?\\\]\\\[\]\+\|\\\[\[\^\\/\\\]@\#\?\]\+\\\]\)\(\?:\\:\(\[0\-9\]\+\)\)\?\)\)\?\)\?\)\?\(\(\?:\\/\?\(\?:\[\^\\/\\\?\#\]\+\\/\+\)\*\)\(\?:\[\^\\\?\#\]\*\)\)\)\?\(\\\?\[\^\#\]\+\)\?\)\(\#\.\*\)\?');

function parse(url) {
  try { return regexp.exec(url); }
  catch (e) { return url.match(regexp); }
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my CDO.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Boolean|function} parser Parser for the query string.
 * @param {Object} location Location defaults for relative paths.
 * @api public
 */
function URL(address, location, parser) {
  if (!(this instanceof URL)) {
    return new URL(address, location, parser);
  }

  var type = typeof location
    , bits = parse(address)
    , url = this
    , i = 0
    , key;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) {
    parser = qs.parse;
  }

  location = lolcation(location);

  for (; i < parts; key = keys[++i]) {
    if (!key) continue;

    url[key] = bits[i] || (key in inherit ? location[key] || '' : '');

    //
    // The protocol, host, host name should always be lower cased even if they
    // are supplied in uppercase. This way, when people generate an `origin`
    // it be correct.
    //
    if (i === 2 || i === 5 || i === 6) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} prop Property we need to adjust.
 * @param {Mixed} value The newly assigned value.
 * @returns {URL}
 * @api public
 */
URL.prototype.set = function set(part, value, fn) {
  var url = this;

  if ('query' === part) {
    if ('string' === typeof value) value = (fn || qs.parse)(value);
    url[part] = value;
  } else if ('port' === part) {
    url[part] = value;

    if (!required(value, url.protocol)) {
      url.host = url.hostname;
      url[part] = '';
    } else if (value) {
      url.host = url.hostname +':'+ value;
    }
  } else if ('hostname' === part) {
    url[part] = value;

    if (url.port) value += ':'+ url.port;
    url.host = value;
  } else if ('host' === part) {
    url[part] = value;

    if (/\:\d+/.test(value)) {
      value = value.split(':');
      url.hostname = value[0];
      url.port = value[1];
    }
  } else {
    url[part] = value;
  }

  url.href = url.toString();
  return url;
};

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String}
 * @api public
 */
URL.prototype.toString = function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , result = url.protocol +'//';

  if (url.username) result += url.username +':'+ url.password +'@';

  result += url.hostname;
  if (url.port) result += ':'+ url.port;

  result += url.pathname;

  if (url.query) {
    if ('object' === typeof url.query) query = stringify(url.query);
    else query = url.query;

    result += (query.charAt(0) === '?' ? '' : '?') + query;
  }

  if (url.hash) result += url.hash;

  return result;
};

//
// Expose the URL parser and some additional properties that might be useful for
// others.
//
URL.qs = qs;
URL.location = lolcation;
module.exports = URL;

},{"./lolcation":2,"querystringify":3,"requires-port":4}],2:[function(require,module,exports){
(function (global){
'use strict';

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as the a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 }
  , URL;

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @api public
 */
module.exports = function lolcation(loc) {
  loc = loc || global.location || {};
  URL = URL || require('./');

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new URL(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new URL(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) for (key in loc) {
    if (key in ignore) continue;
    finaldestination[key] = loc[key];
  }

  return finaldestination;
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./":1}],3:[function(require,module,exports){
'use strict';

var has = Object.prototype.hasOwnProperty;

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=([^&]*)/g
    , result = {}
    , part;

  //
  // Little nifty parsing hack, leverage the fact that RegExp.exec increments
  // the lastIndex property so we can continue executing this loop until we've
  // parsed all results.
  //
  for (;
    part = parser.exec(query);
    result[decodeURIComponent(part[1])] = decodeURIComponent(part[2])
  );

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = [];

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (var key in obj) {
    if (has.call(obj, key)) {
      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]));
    }
  }

  return prefix + pairs.join('&');
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;

},{}],4:[function(require,module,exports){
'use strict';

/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 22;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};

},{}]},{},[1])(1)
});