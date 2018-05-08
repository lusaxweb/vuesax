module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Fqf":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("tsgq");
var document = __webpack_require__("Z+6H").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "+K5V":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "+euK":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("yi96");
module.exports = __webpack_require__("ReUz").Object.keys;


/***/ }),

/***/ "+lEw":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("o3KC");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("yq2B");


/***/ }),

/***/ "0+C+":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("HMAq");
var $values = __webpack_require__("LaHy")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "0ArC":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "0IjE":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "0c9U":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("SGiu")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "0fJi":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "188f":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "1XgQ":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "221b":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("jEwU");
var enumBugKeys = __webpack_require__("wdcL");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "2pBh":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("aOqR");
var defined = __webpack_require__("Rpei");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "2x5d":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("nJNB");
module.exports = __webpack_require__("ReUz").Object.getOwnPropertySymbols;


/***/ }),

/***/ "3RRR":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "3nYt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("UZjr");
var descriptor = __webpack_require__("WXTh");
var setToStringTag = __webpack_require__("6Zg8");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("A6jq")(IteratorPrototype, __webpack_require__("9vqU")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "58SC":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__("HMAq");

$export($export.S, 'Math', { sign: __webpack_require__("DSKJ") });


/***/ }),

/***/ "5WpK":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("0ArC");
var defined = __webpack_require__("Rpei");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "6/Tu":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("Z+6H");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ "6Gqs":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "6TMg":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("DdCD");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "6Zg8":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("f61C").f;
var has = __webpack_require__("0fJi");
var TAG = __webpack_require__("9vqU")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "6dI7":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "6jnJ":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("0ArC");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "74L1":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "7tz2":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "814A":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("0fJi");
var toObject = __webpack_require__("8IVJ");
var IE_PROTO = __webpack_require__("MERr")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "8IVJ":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("Rpei");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "9/pB":
/***/ (function(module, exports) {



/***/ }),

/***/ "9XcI":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9vqU":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("yRDd")('wks');
var uid = __webpack_require__("J2cS");
var Symbol = __webpack_require__("74L1").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "A6jq":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("f61C");
var createDesc = __webpack_require__("WXTh");
module.exports = __webpack_require__("uVaM") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "A9YY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "A9i9":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("jEwU");
var hiddenKeys = __webpack_require__("wdcL").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "ArFY":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "Biqn":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Ttsf");

var _Object$getOwnPropertySymbols = __webpack_require__("qp3O");

var _Object$keys = __webpack_require__("qO4g");

var defineProperty = __webpack_require__("fKPv");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _Object$keys(source);

    if (typeof _Object$getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(_Object$getOwnPropertySymbols(source).filter(function (sym) {
        return _Object$getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "Bv1W":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "DSKJ":
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),

/***/ "DdCD":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "ED//":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "EV4j":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("r4Vc");
var defined = __webpack_require__("gYvx");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "FKwx":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "GvgU":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("rxG7");
var createDesc = __webpack_require__("gaXX");
module.exports = __webpack_require__("aJj7") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "H9VJ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "HEx+":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("6/Tu")('keys');
var uid = __webpack_require__("PPmz");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "HMAq":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("Z+6H");
var core = __webpack_require__("LChv");
var hide = __webpack_require__("GvgU");
var redefine = __webpack_require__("Hh3w");
var ctx = __webpack_require__("Ob5K");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "Hf4L":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Hh3w":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("Z+6H");
var hide = __webpack_require__("GvgU");
var has = __webpack_require__("n62D");
var SRC = __webpack_require__("PPmz")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("LChv").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "ImXl":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("ZVp1");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("uVaM"), 'Object', { defineProperty: __webpack_require__("f61C").f });


/***/ }),

/***/ "IszU":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("tsgq");
var cof = __webpack_require__("PZ5W");
var MATCH = __webpack_require__("SGiu")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "J+Nn":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "J2cS":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "L+Fp":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "LChv":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "LZLU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("HMAq");
var $includes = __webpack_require__("qgMo")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("UPr9")('includes');


/***/ }),

/***/ "LaHy":
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__("VxCo");
var toIObject = __webpack_require__("EV4j");
var isEnum = __webpack_require__("Q4AC").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),

/***/ "LdQc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("uVaM") && !__webpack_require__("1XgQ")(function () {
  return Object.defineProperty(__webpack_require__("Lx6X")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "Lx6X":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("o3KC");
var document = __webpack_require__("74L1").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "MERr":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("yRDd")('keys');
var uid = __webpack_require__("J2cS");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "NNsH":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("ZVp1");
var core = __webpack_require__("ReUz");
var fails = __webpack_require__("1XgQ");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "NQB/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("5WpK")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("SJuQ")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "Ob5K":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("Bv1W");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "Oy1H":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("tRu9");

var _Symbol = __webpack_require__("xah7");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "PPmz":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "PZ5W":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "Q0Ak":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Ufgr");

/***/ }),

/***/ "Q4AC":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "RKPc":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ReUz":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "Rj40":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("oU4r")('asyncIterator');


/***/ }),

/***/ "Rpei":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "S4fz":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("DdCD");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "SGiu":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("6/Tu")('wks');
var uid = __webpack_require__("PPmz");
var Symbol = __webpack_require__("Z+6H").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "SH3K":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "SJe0":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("n62D");
var toIObject = __webpack_require__("EV4j");
var arrayIndexOf = __webpack_require__("qgMo")(false);
var IE_PROTO = __webpack_require__("HEx+")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "SJuQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("iQBQ");
var $export = __webpack_require__("ZVp1");
var redefine = __webpack_require__("XZrW");
var hide = __webpack_require__("A6jq");
var Iterators = __webpack_require__("6dI7");
var $iterCreate = __webpack_require__("3nYt");
var setToStringTag = __webpack_require__("6Zg8");
var getPrototypeOf = __webpack_require__("814A");
var ITERATOR = __webpack_require__("9vqU")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "Slpf":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("74L1").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "TXzB":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("nJNB");
__webpack_require__("9/pB");
__webpack_require__("Rj40");
__webpack_require__("aKKh");
module.exports = __webpack_require__("ReUz").Symbol;


/***/ }),

/***/ "Ttsf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("rTOw");

/***/ }),

/***/ "UPr9":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("SGiu")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("GvgU")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "UZjr":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("+lEw");
var dPs = __webpack_require__("hCdi");
var enumBugKeys = __webpack_require__("wdcL");
var IE_PROTO = __webpack_require__("MERr")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("Lx6X")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("Slpf").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "Ufgr":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("ImXl");
var $Object = __webpack_require__("ReUz").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "VxCo":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("SJe0");
var enumBugKeys = __webpack_require__("7tz2");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "W37P":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "WNAU":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "WQBH":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "WXTh":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "XZrW":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("A6jq");


/***/ }),

/***/ "YjWS":
/***/ (function(module, exports, __webpack_require__) {

// @@search logic
__webpack_require__("tXlP")('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});


/***/ }),

/***/ "Z+6H":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "ZFJ+":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ZVp1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("74L1");
var core = __webpack_require__("ReUz");
var ctx = __webpack_require__("wpHI");
var hide = __webpack_require__("A6jq");
var has = __webpack_require__("0fJi");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "aJj7":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("W37P")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "aKKh":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("oU4r")('observable');


/***/ }),

/***/ "aOqR":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("iOGI");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "bnAT":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("rxG7").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("aJj7") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "dE1c":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("2pBh");
var toLength = __webpack_require__("6jnJ");
var toAbsoluteIndex = __webpack_require__("pIIr");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "dEVo":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("221b");
var gOPS = __webpack_require__("uEB6");
var pIE = __webpack_require__("ArFY");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "dsxj":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("o3KC");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "e5kn":
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__("tXlP")('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});


/***/ }),

/***/ "ekaF":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "f61C":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("+lEw");
var IE8_DOM_DEFINE = __webpack_require__("LdQc");
var toPrimitive = __webpack_require__("dsxj");
var dP = Object.defineProperty;

exports.f = __webpack_require__("uVaM") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "fKPv":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("Q0Ak");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "gYvx":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "gaXX":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "hCdi":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("f61C");
var anObject = __webpack_require__("+lEw");
var getKeys = __webpack_require__("221b");

module.exports = __webpack_require__("uVaM") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "iOGI":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "iQBQ":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "iiot":
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__("tXlP")('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = __webpack_require__("IszU");
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});


/***/ }),

/***/ "iqNS":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "irTn":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("IszU");
var defined = __webpack_require__("gYvx");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "j9GS":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("tsgq");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "jEwU":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("0fJi");
var toIObject = __webpack_require__("2pBh");
var arrayIndexOf = __webpack_require__("dE1c")(false);
var IE_PROTO = __webpack_require__("MERr")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "kXha":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("HMAq");
var context = __webpack_require__("irTn");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("0c9U")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "lDMd":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "mNwb":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("NQB/");
__webpack_require__("tfnZ");
module.exports = __webpack_require__("q+MV").f('iterator');


/***/ }),

/***/ "n62D":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "nGgq":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "nJNB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("74L1");
var has = __webpack_require__("0fJi");
var DESCRIPTORS = __webpack_require__("uVaM");
var $export = __webpack_require__("ZVp1");
var redefine = __webpack_require__("XZrW");
var META = __webpack_require__("yNpW").KEY;
var $fails = __webpack_require__("1XgQ");
var shared = __webpack_require__("yRDd");
var setToStringTag = __webpack_require__("6Zg8");
var uid = __webpack_require__("J2cS");
var wks = __webpack_require__("9vqU");
var wksExt = __webpack_require__("q+MV");
var wksDefine = __webpack_require__("oU4r");
var enumKeys = __webpack_require__("dEVo");
var isArray = __webpack_require__("wlT+");
var anObject = __webpack_require__("+lEw");
var isObject = __webpack_require__("o3KC");
var toIObject = __webpack_require__("2pBh");
var toPrimitive = __webpack_require__("dsxj");
var createDesc = __webpack_require__("WXTh");
var _create = __webpack_require__("UZjr");
var gOPNExt = __webpack_require__("v6xn");
var $GOPD = __webpack_require__("zJ3u");
var $DP = __webpack_require__("f61C");
var $keys = __webpack_require__("221b");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("A9i9").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("ArFY").f = $propertyIsEnumerable;
  __webpack_require__("uEB6").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("iQBQ")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("A6jq")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "o3KC":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "oM5C":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "oU4r":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("74L1");
var core = __webpack_require__("ReUz");
var LIBRARY = __webpack_require__("iQBQ");
var wksExt = __webpack_require__("q+MV");
var defineProperty = __webpack_require__("f61C").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "pIIr":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("0ArC");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "pQlg":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("tsgq");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "q+MV":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("9vqU");


/***/ }),

/***/ "qO4g":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("+euK");

/***/ }),

/***/ "qgMo":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("EV4j");
var toLength = __webpack_require__("6TMg");
var toAbsoluteIndex = __webpack_require__("S4fz");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "qp3O":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2x5d");

/***/ }),

/***/ "r4Vc":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("PZ5W");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "rTOw":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("zxEQ");
var $Object = __webpack_require__("ReUz").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "re1x":
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__("tXlP")('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});


/***/ }),

/***/ "rxG7":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("j9GS");
var IE8_DOM_DEFINE = __webpack_require__("wOMn");
var toPrimitive = __webpack_require__("pQlg");
var dP = Object.defineProperty;

exports.f = __webpack_require__("aJj7") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "rxbv":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "sCZX":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "t0E1":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "tRu9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("mNwb");

/***/ }),

/***/ "tXlP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__("GvgU");
var redefine = __webpack_require__("Hh3w");
var fails = __webpack_require__("W37P");
var defined = __webpack_require__("gYvx");
var wks = __webpack_require__("SGiu");

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "tfnZ":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("zUQ1");
var global = __webpack_require__("74L1");
var hide = __webpack_require__("A6jq");
var Iterators = __webpack_require__("6dI7");
var TO_STRING_TAG = __webpack_require__("9vqU")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "tsgq":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "uEB6":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "uVaM":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("1XgQ")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "v6xn":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("2pBh");
var gOPN = __webpack_require__("A9i9").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "wOMn":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("aJj7") && !__webpack_require__("W37P")(function () {
  return Object.defineProperty(__webpack_require__("+Fqf")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "wdcL":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "wlT+":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("iOGI");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "wpHI":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("rxbv");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "xah7":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TXzB");

/***/ }),

/***/ "yNpW":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("J2cS")('meta');
var isObject = __webpack_require__("o3KC");
var has = __webpack_require__("0fJi");
var setDesc = __webpack_require__("f61C").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("1XgQ")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "yRDd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("74L1");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ "yTKW":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "yi96":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("8IVJ");
var $keys = __webpack_require__("221b");

__webpack_require__("NNsH")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "yq2B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../Users/pc 01/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("bnAT");
var es6_function_name_default = /*#__PURE__*/__webpack_require__.n(es6_function_name);

// EXTERNAL MODULE: ../Users/pc 01/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es7.object.values.js
var es7_object_values = __webpack_require__("0+C+");
var es7_object_values_default = /*#__PURE__*/__webpack_require__.n(es7_object_values);

// EXTERNAL MODULE: ./src/vuesax/css/index.css
var css = __webpack_require__("z6KV");
var css_default = /*#__PURE__*/__webpack_require__.n(css);

// EXTERNAL MODULE: ../Users/pc 01/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("e5kn");
var es6_regexp_replace_default = /*#__PURE__*/__webpack_require__.n(es6_regexp_replace);

// EXTERNAL MODULE: ../Users/pc 01/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("iiot");
var es6_regexp_split_default = /*#__PURE__*/__webpack_require__.n(es6_regexp_split);

// EXTERNAL MODULE: ../Users/pc 01/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("LZLU");
var es7_array_includes_default = /*#__PURE__*/__webpack_require__.n(es7_array_includes);

// CONCATENATED MODULE: ./src/vuesax/utils/color.js






/* harmony default export */ var color = ({
  contrastColor: function contrastColor(elementx) {
    var c = elementx;

    if (/[#]/g.test(elementx)) {
      // console.log();
      var rgbx = this.hexToRgb(elementx);
      c = "rgb(".concat(rgbx.r, ",").concat(rgbx.g, ",").concat(rgbx.b, ")");
    }

    var rgb = c.replace(/^(rgb|rgba)\(/, '').replace(/\)$/, '').replace(/\s/g, '').split(',');
    var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;

    if (yiq >= 128) {
      return true;
    } else {
      return false;
    }
  },
  setCssVariable: function setCssVariable(propertyName, value) {
    document.documentElement.style.setProperty(propertyName, value);
  },
  hexToRgb: function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  },
  getVariable: function getVariable(styles, propertyName) {
    return String(styles.getPropertyValue(propertyName)).trim();
  },
  changeColor: function changeColor(colorInicial) {
    var colores = ['primary', 'success', 'danger', 'warning', 'dark'];
    var colorx;

    if (colores.includes(colorInicial)) {
      var style = getComputedStyle(document.documentElement);
      colorx = this.getVariable(style, '--' + colorInicial);
    } else {
      if (/[rgb()]/g.test(colorInicial)) {
        colorx = colorInicial.replace(/[rgb()]/g, '');
      } else if (/[#]/g.test(colorInicial)) {
        var rgbx = this.hexToRgb(colorInicial);
        colorx = "".concat(rgbx.r, ",").concat(rgbx.g, ",").concat(rgbx.b);
      } else {
        colorx = '--' + colorInicial;
      }
    }

    return colorx; // this.setCssVariable('--'+clave,colorx)
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/vuesax/components/vsButton/vsButton.vue




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsButton = ({
  name: 'vs-button',
  props: {
    vsHtml: {
      type: String,
      default: null
    },
    vsType: {
      type: String,
      default: 'primary-filled'
    },
    vsColor: {
      type: String,
      default: ''
    },
    vsRadius: {
      type: String,
      default: ''
    },
    vsPadding: {
      type: String,
      default: ''
    },
    vsColorText: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      hoverx: false,
      clasex: "vs-button-".concat(this.vsType)
    };
  },
  computed: {
    backgroundx: function backgroundx() {
      if (/-border/.test(this.vsType) || /-flat/.test(this.vsType) || /-line-down/.test(this.vsType) || /-gradient/.test(this.vsType)) {
        if (/-border/.test(this.vsType)) {}
      } else {
        if (this.vsColor) {
          if (/[#()]/.test(this.vsColor)) {
            return this.vsColor;
          } else {
            return "rgb(var(--".concat(this.vsColor, "))");
          }
        }
      }
    } // 'box-shadow': hoverx?`0px 2px 15px 0px ${/[#()]/.test(vsColor)?vsColor:`rgb(var(--${vsColor}))`}`:'',

  },
  updated: function updated() {
    this.vsColorx();
  },
  mounted: function mounted() {
    var _this = this;

    var btn = this.$refs.btnvuesax;
    var colorx = null;
    this.vsColorx(); // if(){
    //
    // }
    // btn.style.boxShadow = this.hoverx?`0px 2px 15px 0px ${/[#()]/.test(vsColor)?vsColor:`rgb(var(--${vsColor}))`}`:''

    var el = this.$el;
    el.addEventListener('click', function (event) {
      console.log(event);
      var x;
      var y;

      if (event.target.className == 'text') {
        x = event.offsetX;
        y = event.offsetY;
      } else {
        x = event.offsetX;
        y = event.offsetY;
      }

      var elSpan = document.createElement("span");
      elSpan.className = 'relleno';
      el.appendChild(elSpan);
      var spanx = this.querySelector('.relleno'); //agregar color personalizado

      if (_this.vsColor) {
        if (/-flat/.test(_this.vsType) || /-border/.test(_this.vsType)) {
          // btn.style.border = '1px solid '+this.vsColor
          console.log("click dentro");
          spanx.style.background = _this.vsColor;
        }
      }

      var time = 0.5;

      if (event.target.clientWidth > 100) {
        var s = event.target.clientWidth + 60;
        time = event.target.clientWidth / s;
      } else if (this.classList.contains('filled')) {
        var _s = event.target.clientWidth;
        time = event.target.clientWidth / _s;
      }

      spanx.style.transition = 'width ' + time + 's ease,height ' + time + 's ease,opacity ' + time / 1.5 + 's ease';
      spanx.style.left = x + 'px';
      spanx.style.top = y + 'px';
      spanx.style.width = event.target.clientWidth * 3 + 'px';
      spanx.style.height = event.target.clientWidth * 3 + 'px';
      spanx.style.opacity = '1';
      this.classList.add('activo');

      if (this.classList.contains('filled')) {
        setTimeout(function () {
          spanx.style.left = x + 'px';
          spanx.style.top = y + 'px';
          spanx.style.width = '0px';
          spanx.style.height = '0px';
          spanx.remove();
        }, time * 1000);
      }
    });
  },
  methods: {
    vsColorx: function vsColorx() {
      var _this = this;

      var btn = this.$refs.btnvuesax;
      var colorx = null;

      if (this.vsColor) {
        if (/[#()]/.test(this.vsColor)) {
          if (/#/.test(this.vsColor)) {
            var c = color.hexToRgb(this.vsColor);

            colorx = function colorx(opacity) {
              return "rgba(".concat(c.r, ",").concat(c.g, ",").concat(c.b, ",").concat(opacity, ")");
            };

            console.log("paso coloe");
          } else {
            colorx = function colorx(opacity) {
              var rgb = _this.vsColor.replace(/^(rgb|rgba)\(/, '').replace(/\)$/, '').replace(/\s/g, '').split(',');

              console.log(rgb);
              return "rgba(".concat(rgb[0], ",").concat(rgb[1], ",").concat(rgb[2], ",").concat(opacity, ")");
            };

            console.log("paso coloe");
          }
        }

        if (/-border/.test(this.vsType)) {
          btn.style.border = '1px solid ' + this.vsColor;
          btn.style.color = this.vsColor;
          console.log("entro");
        } else if (/-flat/.test(this.vsType)) {
          btn.style.color = this.vsColor;
          btn.addEventListener('mouseover', function () {
            btn.style.background = colorx(.1);
          }), btn.addEventListener('mouseout', function () {
            btn.style.background = 'rgb(255, 255, 255)';
          });
        } else if (/-filled/.test(this.vsType)) {
          btn.addEventListener('mouseover', function () {
            btn.style.boxShadow = "0px 2px 15px 0px ".concat(colorx(1));
          }), btn.addEventListener('mouseout', function () {
            btn.style.boxShadow = "0px 2px 15px 0px ".concat('rgba(255, 255, 255, 0)');
          });
        } else if (/-line-down/.test(this.vsType)) {
          btn.querySelector('.text').style.color = this.vsColor;
          btn.querySelector('.lineax').style.background = this.vsColor;
          btn.style.borderBottom = "2px solid ".concat(colorx(.2));
        } else if (/-gradient/.test(this.vsType)) {
          var color1 = this.vsColor.split('/')[0];
          var color2 = this.vsColor.split('/')[1];
          console.log(color1);
          console.log(color2);
          btn.style.background = "linear-gradient(30deg, ".concat(color1, " 0%, ").concat(color2, " 100%)");
        }
      }
    },
    btnBlur: function btnBlur(evt) {
      if (!evt.target.classList.contains('filled')) {
        evt.target.classList.remove('activo');
        var spanx = evt.target.querySelector('.relleno');
        spanx.style.opacity = '0';
        setTimeout(function () {
          spanx.style.width = '0px';
          spanx.style.height = '0px';
          spanx.remove();
        }, 200);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-b7729746","hasScoped":false,"optionsId":"1","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/vuesax/components/vsButton/vsButton.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{ref:"btnvuesax",class:[_vm.vsType?_vm.clasex:'vs-button-primary-filled',{'filled':_vm.vsType?_vm.vsType.search('filled')!=-1:false,'border':_vm.vsType?_vm.vsType.search('border')!=-1:false}],style:({
  'color':_vm.vsColorText?/[#()]/.test(_vm.vsColorText)?_vm.vsColorText:("rgb(var(--" + _vm.vsColorText + "))"):'',
  'border-radius':_vm.vsRadius,
  'background':_vm.backgroundx,

  }),attrs:{"type":"button","name":"button"},on:{"mouseenter":function($event){_vm.hoverx=true,_vm.$emit('mouseenter')},"mouseleave":function($event){_vm.hoverx=false,_vm.$emit('mouseleave')},"click":function($event){_vm.$emit('click',$event)},"blur":function($event){_vm.btnBlur($event)}}},[(_vm.vsHtml)?_c('span',{staticClass:"text",style:({
    'color':_vm.vsColorText?/[#()]/.test(_vm.vsColorText)?_vm.vsColorText:("rgb(var(--" + _vm.vsColorText + "))"):'',
    'padding':_vm.vsPadding}),domProps:{"innerHTML":_vm._s(_vm.vsHtml)}}):_c('span',{staticClass:"text",style:({
    'color':_vm.vsColorText?/[#()]/.test(_vm.vsColorText)?_vm.vsColorText:("rgb(var(--" + _vm.vsColorText + "))"):'',
    'padding':_vm.vsPadding})},[_vm._t("default")],2),_c('div',{ref:"lineax",staticClass:"lineax"})])}
var staticRenderFns = []

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/vuesax/components/vsButton/vsButton.vue
function injectStyle (context) {
  __webpack_require__("ekaF")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = normalizeComponent(
  vsButton,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var vsButton_vsButton = (Component.exports);

// EXTERNAL MODULE: ../Users/pc 01/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.regexp.search.js
var es6_regexp_search = __webpack_require__("YjWS");
var es6_regexp_search_default = /*#__PURE__*/__webpack_require__.n(es6_regexp_search);

// EXTERNAL MODULE: ./src/vuesax/css/iconfont/material-icons.css
var material_icons = __webpack_require__("WQBH");
var material_icons_default = /*#__PURE__*/__webpack_require__.n(material_icons);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/vuesax/components/vsSelect/vsSelect.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsSelect = ({
  name: 'vs-select',
  props: ['label', 'options', 'value', 'disabled'],
  data: function data() {
    return {
      scroll: false,
      visible: false,
      topx: 0,
      leftx: 0,
      widthx: 0
    };
  },
  watch: {
    visible: function visible() {
      var _this = this;

      if (this.visible) {
        setTimeout(function () {
          var selects = document.querySelectorAll('.con-ul-select');

          if (selects.length == 1) {
            console.log("paso en 1");

            if (document.querySelector('.con-ul-select').clientHeight >= 300) {
              _this.scroll = true;
            }
          } else {
            console.log("paso en 2", selects);

            if (selects[1].clientHeight >= 300) {
              _this.scroll = true;
            }
          }
        }, 400);
        setTimeout(function () {
          console.log();

          var elx = _this.$el.querySelector('.con-ul-select');

          var elx2 = document.querySelectorAll('.con-ul-select');
          var elxUl = document.querySelector('.con-ul-select ul');

          for (var i = 0; i < elx2.length; i++) {
            mousewheelx(elx2[i]);
          }

          function mousewheelx(el) {
            console.log();
            el.querySelector('.con-ul-select ul').scrollTop = el.querySelector('.con-ul-select ul .activo').offsetTop;

            if (el.clientHeight >= 300) {
              el.addEventListener('mousewheel', function (e) {
                // console.log($(".con-codes").scrollTop());
                if (e.wheelDelta / 120 > 0) {
                  // console.log('scrolling up !');
                  if (el.querySelector('.con-ul-select ul').scrollTop == 0) {
                    el.querySelector('.con-ul-select ul').style.paddingTop = '25px';
                    setTimeout(function () {
                      el.querySelector('.con-ul-select ul').style.paddingTop = '0px';
                    }, 300);
                  }
                } else {
                  if (el.querySelector('.con-ul-select ul').scrollHeight - el.querySelector('.con-ul-select ul').scrollTop === el.querySelector('.con-ul-select ul').clientHeight) {
                    el.querySelector('.con-ul-select ul').style.paddingBottom = '30px';
                    setTimeout(function () {
                      el.querySelector('.con-ul-select ul').style.paddingBottom = '0px';
                    }, 300);
                  } // console.log('scrolling down !');

                }
              });
            }

            if (elx) {
              document.body.insertBefore(elx, document.body.firstChild);
              elx.scrollIntoView();
            }
          }
        }, 1);
      } else {
        this.scroll = false;
      }
    }
  },
  methods: {
    clickSelect: function clickSelect() {
      if (!this.disabled) {
        this.$refs.inputHidden.focus();
      }
    },
    blurx: function blurx() {
      this.visible = false;
    },
    clickOption: function clickOption(evt) {
      this.visible = false;
      this.$emit('input', evt.target.dataset.value);
      this.$emit('change', evt.target.dataset.value);
    },
    clickOptionSelect: function clickOptionSelect(evt) {
      // console.log("paso select change");
      // this.visible=false
      this.$emit('input', evt.target.value);
      this.$emit('change', evt.target.value);
    },
    clickInputSelect: function clickInputSelect() {
      this.topx = this.$refs.vsSelect.querySelector('.con-input-select').getBoundingClientRect().top;
      this.leftx = this.$refs.vsSelect.querySelector('.con-input-select').getBoundingClientRect().left;
      this.widthx = this.$refs.vsSelect.querySelector('.con-input-select').offsetWidth;
    }
  },
  computed: {
    validaAncho: function validaAncho() {
      if (window.innerWidth > 500) {
        return true;
      } else {
        return false;
      }
    },
    seleccionado: function seleccionado() {
      var _this2 = this;

      var seleccionadox = this.options.filter(function (item) {
        return item.value == _this2.value;
      });
      return seleccionadox[0].text;
    },
    seleccionadoValue: function seleccionadoValue() {
      var _this3 = this;

      var seleccionadox = this.options.filter(function (item) {
        return item.value == _this3.value;
      });
      return seleccionadox[0].value;
    }
  },
  mounted: function mounted() {
    function getParents(e) {
      var result = [];

      for (var p = e && e.parentElement; p; p = p.parentElement) {
        result.push(p);
      }

      return result;
    }

    window.addEventListener('mousewheel', function (e) {
      var parents = getParents(e.toElement);
      parents = parents.filter(function (item) {
        return item.className.search('con-ul-select') != -1;
      });

      if (parents.length == 0) {// this.visible=false
      }
    });
    window.addEventListener('touchmove', function (e) {
      var parents = getParents(e.toElement);
      parents = parents.filter(function (item) {
        return item.className.search('con-ul-select') != -1;
      });

      if (parents.length == 0) {// this.visible=false
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-c83984ca","hasScoped":true,"optionsId":"1","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/vuesax/components/vsSelect/vsSelect.vue
var vsSelect_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"vsSelect",staticClass:"vs-select",class:{'abierto':_vm.visible,'disabledx':_vm.disabled},on:{"click":_vm.clickSelect}},[_c('label',{attrs:{"for":""}},[_vm._v(_vm._s(_vm.label))]),_c('button',{staticClass:"con-input-select",attrs:{"type":"button","title":_vm.seleccionado},on:{"focus":function($event){_vm.visible=true},"blur":function($event){_vm.visible=false},"click":_vm.clickInputSelect}},[_c('span',[_vm._v(_vm._s(_vm.seleccionado))]),_c('i',{staticClass:"i-icon material-icons"},[_vm._v("expand_more")])]),_c('transition',{attrs:{"name":"fade-select"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],ref:"conUlSelect",staticClass:"con-ul-select",class:{'visiblex':_vm.visible},style:({'top':_vm.topx+'px','left':_vm.leftx+'px','width':_vm.widthx+'px'})},[_c('ul',{class:{'scrollx':_vm.scroll}},_vm._l((_vm.options),function(option,index){return _c('li',{style:({'transition':'transform .2s ease '+index/30+'s , background .2s ease,opacity .2s ease '+index/30+'s'})},[_c('button',{class:{'activo':_vm.seleccionadoValue==option.value},attrs:{"data-value":option.value,"type":"button","name":"button"},on:{"focus":function($event){_vm.visible=true},"blur":function($event){_vm.visible=false},"click":function($event){_vm.clickOption($event)}}},[_vm._v(_vm._s(option.text))])])}))])])],1)}
var vsSelect_staticRenderFns = []

// CONCATENATED MODULE: ./src/vuesax/components/vsSelect/vsSelect.vue
function vsSelect_injectStyle (context) {
  __webpack_require__("L+Fp")
}
/* script */


/* template */

/* template functional */
var vsSelect___vue_template_functional__ = false
/* styles */
var vsSelect___vue_styles__ = vsSelect_injectStyle
/* scopeId */
var vsSelect___vue_scopeId__ = "data-v-c83984ca"
/* moduleIdentifier (server only) */
var vsSelect___vue_module_identifier__ = null

var vsSelect_Component = normalizeComponent(
  vsSelect,
  vsSelect_render,
  vsSelect_staticRenderFns,
  vsSelect___vue_template_functional__,
  vsSelect___vue_styles__,
  vsSelect___vue_scopeId__,
  vsSelect___vue_module_identifier__
)

/* harmony default export */ var vsSelect_vsSelect = (vsSelect_Component.exports);

// EXTERNAL MODULE: ./src/vuesax/components/vsNotifications/vsNotifications.css
var vsNotifications = __webpack_require__("iqNS");
var vsNotifications_default = /*#__PURE__*/__webpack_require__.n(vsNotifications);

// CONCATENATED MODULE: ./src/vuesax/components/vsNotifications/vsNotifications.js





/* harmony default export */ var vsNotifications_vsNotifications = ({
  name: 'notify',
  vsfunction: function vsfunction(parameters) {
    // text,type='white',position='bottom-right',icon,functiox,fixed
    var text = parameters.text ? parameters.text : null;
    var type = parameters.color ? parameters.color : 'white';
    var position = parameters.position ? parameters.position : 'bottom-right';
    var icon = parameters.icon ? parameters.icon : null;
    var functiox = parameters.click ? parameters.click : null;
    var fixed = parameters.fixed ? parameters.fixed : null; // new

    var title = parameters.title ? parameters.title : null;
    var time = parameters.time ? parameters.time : 2000;

    if (text == null) {
      text = 'Vuesax: $vsNotify not parameters text';
      icon = 'warning';
      type = 'warning';
      console.warn(text);
      return;
    }

    if (type == null) {
      type = 'white';
    }

    if (position == null) {
      position = 'bottom-right';
    }

    var conNotix = document.createElement('div');
    conNotix.classList.add('vs-noti-contenedor');
    conNotix.classList.add('vs-' + type);
    conNotix.classList.add('vs-' + position);
    var arrayPosition = position.split('-');

    if (position.search('center') == -1) {
      conNotix.style[arrayPosition[0]] = '15px';
      conNotix.style[arrayPosition[1]] = '15px';
    }

    if (position.search('top-center') != -1) {
      conNotix.style.left = "50%";
      conNotix.style.top = "15px";
      conNotix.style.transform = "translate(-50%)";
    }

    if (position.search('bottom-center') != -1) {
      conNotix.style.left = "50%";
      conNotix.style.bottom = "15px";
      conNotix.style.transform = "translate(-50%)";
    }

    document.body.insertBefore(conNotix, document.body.firstChild);
    var rellenox = document.createElement('span');
    rellenox.classList.add('rellenox');

    if (/[#()]/i.test(type)) {
      rellenox.style.background = type;
    } else {
      rellenox.style.background = "rgb(var(--".concat(type, "))");
    }

    if (position.search('center') == -1) {
      rellenox.style[arrayPosition[0]] = '50%';
      rellenox.style[arrayPosition[1]] = '0px';
    }

    if (position.search('bottom-center') != -1) {
      rellenox.style.left = '50%';
      rellenox.style.top = '100%';
    }

    if (position.search('top-center') != -1) {
      rellenox.style.left = '50%';
      rellenox.style.top = '0%';
    }

    conNotix.appendChild(rellenox);
    setTimeout(function () {
      if (position.search('left') != -1) {
        rellenox.style.left = '50%';
      } else if (position.search('right') != -1) {
        rellenox.style.right = '-50%';
        rellenox.style.transform = 'translate(50%,-50%)';
      } // else if (position.search('center')!=-1){
      //   rellenox.style.left = '50%'
      //   rellenox.style.top = '100%'
      // }


      rellenox.style.top = '50%';
      rellenox.style.width = conNotix.offsetWidth * 3.5 + 'px';
      rellenox.style.height = conNotix.offsetWidth * 3.5 + 'px';
      moverNotis(position);
    }, 50);
    var notix = document.createElement('div');
    notix.innerHTML = text;
    notix.classList.add('vs-noti'); // create titlex

    if (title) {
      var titlex = document.createElement('h3');
      titlex.innerHTML = title;
      titlex.classList.add('vs-noti-title');
      notix.prepend(titlex);
    }

    conNotix.appendChild(notix);

    if (icon) {
      conNotix.classList.add('con-icon');
      var iconx = document.createElement('span');
      iconx.classList.add('icon-noti');
      iconx.innerHTML = "<i class=\"material-icons\">".concat(icon, "</i>");
      conNotix.appendChild(iconx);
    }

    setTimeout(function () {
      conNotix.classList.add('vs-noti-listo');
    }, 150);
    conNotix.addEventListener('click', function (e) {
      if (functiox) {
        functiox();
      }

      eliminarx(conNotix, position, conNotix, fluent);
    });
    var conFluent = document.createElement('div');
    conFluent.classList.add('vs-con-fluent');
    var fluent = document.createElement('div');
    fluent.classList.add('vs-fluent');
    fluent.style.height = conNotix.offsetHeight * 2 + 'px';
    fluent.style.width = conNotix.offsetHeight * 2 + 'px';
    conFluent.appendChild(fluent);
    conNotix.appendChild(conFluent);
    conNotix.addEventListener('mousemove', function (e) {
      // console.log(e);
      var x = e.pageX;
      var y = e.pageY;
      fluent.style.left = x - conNotix.getBoundingClientRect().left + 'px';
      fluent.style.top = y - conNotix.getBoundingClientRect().top + 'px';
      fluent.style.opacity = '1';
      fluent.style.height = conNotix.offsetHeight * 2 + 'px';
      fluent.style.width = conNotix.offsetHeight * 2 + 'px';
    });
    conNotix.addEventListener('mouseleave', function (e) {
      fluent.style.opacity = '0';
      fluent.style.height = conNotix.offsetHeight * 4 + 'px';
      fluent.style.width = conNotix.offsetHeight * 4 + 'px';
    });
    setTimeout(function () {
      if (!fixed) {
        eliminarx(conNotix, position, conNotix, fluent);
      }
    }, time);
  }
});

function eliminarx(contenedor, position, conNotix, fluent) {
  fluent.style.filter = 'blur(10px)';
  fluent.style.opacity = '0';
  fluent.style.height = conNotix.offsetHeight * 5 + 'px';
  fluent.style.width = conNotix.offsetHeight * 5 + 'px';

  if (position.search('top-center') != -1) {
    contenedor.style.top = '-20px';
    contenedor.style.opacity = 0;
  }

  if (position.search('bottom-center') != -1) {
    contenedor.style.bottom = '-20px';
    contenedor.style.opacity = 0;
  }

  if (position.search('left') != -1) {
    contenedor.style.left = '-400px';
  } else if (position.search('right') != -1) {
    contenedor.style.right = '-400px';
  }

  setTimeout(function () {
    contenedor.style.opacity = 0;
  }, 50);
  setTimeout(function () {
    contenedor.remove();
    moverNotis(position);
  }, 100);
}

function moverNotis(position) {
  // console.log("paso en posision");
  var notisx = document.querySelectorAll('.vs-' + position);

  for (var i = 0; i < notisx.length; i++) {
    var hx = 0;

    for (var i2 = 0; i2 < i; i2++) {
      hx += notisx[i2].offsetHeight + 10;
    }

    if (position.search('center') == -1) {
      if (position.search('top') != -1) {
        notisx[i].style.transform = "translatey(".concat(hx, "px)");
      } else if (position.search('bottom') != -1) {
        notisx[i].style.transform = "translatey(-".concat(hx, "px)");
      }
    }

    if (position.search('top-center') != -1) {
      notisx[i].style.transform = "translate(-50%,".concat(hx, "px)");
      notisx[i].style.zIndex = 10000 - i;
    }

    if (position.search('bottom-center') != -1) {
      notisx[i].style.transform = "translate(-50%,-".concat(hx, "px)");
      notisx[i].style.zIndex = 10000 - i;
    }
  } // console.log(hx);

}
// EXTERNAL MODULE: ../Users/pc 01/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("kXha");
var es6_string_includes_default = /*#__PURE__*/__webpack_require__.n(es6_string_includes);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__("Oy1H");
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/vuesax/components/vsSwitch/vsSwitch.vue





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsSwitch = ({
  name: 'vs-switch',
  props: ['vsValue', 'value', 'vsType', 'vsIcon', 'disabled'],
  computed: {
    valueArray: function valueArray() {
      var arrayx = this.value;

      if (typeof_default()(this.value) == 'object' && this.value != null) {
        if (arrayx.includes(this.vsValue)) {
          return true;
        } else {
          return false;
        }
      } else if (typeof this.value == 'string' || this.value == '' || this.value == null) {
        if (this.value == this.vsValue) {
          return true;
        } else {
          return false;
        }
      }
    }
  },
  methods: {
    Clickx: function Clickx() {
      var _this = this;

      console.log(this.value);

      if (typeof_default()(this.value) == 'object' && this.value != null) {
        var valueOld = this.value;

        if (this.$refs.componentex.classList.contains('switch-activo')) {
          var valuenew = valueOld.filter(function (item) {
            return item.indexOf(_this.vsValue) == -1;
          });
          this.$emit('input', valuenew);
          this.$emit('click', valuenew);
          this.$emit('change', valuenew);
        } else {
          valueOld.push(this.vsValue);
          this.$emit('input', valueOld);
          this.$emit('click', valueOld);
          this.$emit('change', valueOld);
        }
      } else if (typeof this.value == 'boolean') {
        this.$emit('input', !this.value);
        this.$emit('click', !this.value);
        this.$emit('change', !this.value);
      } else if (typeof this.value == 'string' || this.value == '' || this.value == null) {
        if (this.value == this.vsValue) {
          this.$emit('input', null);
          this.$emit('click', null);
          this.$emit('change', null);
        } else {
          this.$emit('input', this.vsValue);
          this.$emit('click', this.vsValue);
          this.$emit('change', this.vsValue);
        }
      }
    },
    backgroundx: function backgroundx() {
      var arrayx = this.value;

      if (typeof this.value == 'boolean') {
        if (this.value) {
          if (/[#()]/i.test(this.vsType)) {
            return this.vsType;
          } else {
            return "rgb(var(--".concat(this.vsType, "))");
          }
        }
      } else if (typeof_default()(this.value) == 'object') {
        if (arrayx.includes(this.vsValue)) {
          if (/[#()]/i.test(this.vsType)) {
            return this.vsType;
          } else {
            return "rgb(var(--".concat(this.vsType, "))");
          }
        }
      }
    }
  },
  mounted: function mounted() {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6b2a00c7","hasScoped":true,"optionsId":"1","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/vuesax/components/vsSwitch/vsSwitch.vue
var vsSwitch_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{attrs:{"for":""}},[_c('button',{ref:"componentex",staticClass:"con-switch",class:[{'switch-activo':typeof _vm.value == 'boolean'?_vm.value:_vm.valueArray}],style:({'background':_vm.backgroundx()}),attrs:{"disabled":_vm.disabled},on:{"click":_vm.Clickx}},[_c('span',{staticClass:"switch-circle"}),_c('i',{staticClass:"material-icons"},[_vm._v(_vm._s(_vm.vsIcon))])]),_c('span',[_vm._t("default")],2)])}
var vsSwitch_staticRenderFns = []

// CONCATENATED MODULE: ./src/vuesax/components/vsSwitch/vsSwitch.vue
function vsSwitch_injectStyle (context) {
  __webpack_require__("ED//")
}
/* script */


/* template */

/* template functional */
var vsSwitch___vue_template_functional__ = false
/* styles */
var vsSwitch___vue_styles__ = vsSwitch_injectStyle
/* scopeId */
var vsSwitch___vue_scopeId__ = "data-v-6b2a00c7"
/* moduleIdentifier (server only) */
var vsSwitch___vue_module_identifier__ = null

var vsSwitch_Component = normalizeComponent(
  vsSwitch,
  vsSwitch_render,
  vsSwitch_staticRenderFns,
  vsSwitch___vue_template_functional__,
  vsSwitch___vue_styles__,
  vsSwitch___vue_scopeId__,
  vsSwitch___vue_module_identifier__
)

/* harmony default export */ var vsSwitch_vsSwitch = (vsSwitch_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/vuesax/components/vsCheckBox/vsCheckBox.vue





//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsCheckBox = ({
  name: 'vs-checkbox',
  props: ['vs-value', 'value', 'vsColor', 'disabled'],
  data: function data() {
    return {};
  },
  computed: {
    valueArray: function valueArray() {
      var arrayx = this.value;

      if (typeof_default()(this.value) == 'object' && this.value != null) {
        if (arrayx.includes(this.vsValue)) {
          return true;
        } else {
          return false;
        }
      } else if (typeof this.value == 'string' || this.value == '' || this.value == null) {
        if (this.value == this.vsValue) {
          return true;
        } else {
          return false;
        }
      }
    }
  },
  methods: {
    checkBoxClick: function checkBoxClick() {
      var _this = this;

      if (typeof_default()(this.value) == 'object' && this.value != null) {
        var valueOld = this.value;

        if (this.$refs.checkBoxx.classList.contains('checkBoxActivo')) {
          var valuenew = valueOld.filter(function (item) {
            return item.indexOf(_this.vsValue) == -1;
          });
          this.$emit('input', valuenew);
        } else {
          valueOld.push(this.vsValue);
          this.$emit('input', valueOld);
        }
      } else if (typeof this.value == 'boolean') {
        this.$emit('input', !this.value);
      } else if (typeof this.value == 'string' || this.value == '' || this.value == null) {
        if (this.value == this.vsValue) {
          this.$emit('input', null);
        } else {
          this.$emit('input', this.vsValue);
        }
      }
    },
    backgroundx: function backgroundx() {
      if (this.vsColor) {
        if (/[#()]/i.test(this.vsColor)) {
          return this.vsColor;
        } else {
          return "rgb(var(--".concat(this.vsColor, "))");
        }
      } else {
        return 'rgb(var(--primary))';
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-b9ce18ee","hasScoped":true,"optionsId":"1","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/vuesax/components/vsCheckBox/vsCheckBox.vue
var vsCheckBox_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{ref:"checkBoxx",staticClass:"con-check",class:[{'disabledx':_vm.disabled,'checkBoxActivo':typeof _vm.value == 'boolean'?_vm.value:_vm.valueArray}],attrs:{"disabled":_vm.disabled},on:{"click":_vm.checkBoxClick}},[_c('span',{staticClass:"cuadro",style:({'border':typeof _vm.value == 'boolean'?!_vm.value?'2px solid rgb(160, 160, 160)':'2px solid '+_vm.backgroundx():!_vm.valueArray?'2px solid rgb(160, 160, 160)':'2px solid '+_vm.backgroundx()})},[_c('i',{staticClass:"material-icons"},[_vm._v("check")]),_c('span',{staticClass:"afterx",style:({'background':_vm.backgroundx()})})]),_vm._t("default")],2)}
var vsCheckBox_staticRenderFns = []

// CONCATENATED MODULE: ./src/vuesax/components/vsCheckBox/vsCheckBox.vue
function vsCheckBox_injectStyle (context) {
  __webpack_require__("nGgq")
}
/* script */


/* template */

/* template functional */
var vsCheckBox___vue_template_functional__ = false
/* styles */
var vsCheckBox___vue_styles__ = vsCheckBox_injectStyle
/* scopeId */
var vsCheckBox___vue_scopeId__ = "data-v-b9ce18ee"
/* moduleIdentifier (server only) */
var vsCheckBox___vue_module_identifier__ = null

var vsCheckBox_Component = normalizeComponent(
  vsCheckBox,
  vsCheckBox_render,
  vsCheckBox_staticRenderFns,
  vsCheckBox___vue_template_functional__,
  vsCheckBox___vue_styles__,
  vsCheckBox___vue_scopeId__,
  vsCheckBox___vue_module_identifier__
)

/* harmony default export */ var vsCheckBox_vsCheckBox = (vsCheckBox_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/vuesax/components/vsRadio/vsRadio.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsRadio = ({
  name: 'vs-radio',
  props: ['vsColor', // 'vsType',
  'value', 'vsValue', 'disabled'],
  computed: {
    backgroundx: function backgroundx() {
      if (this.vsColor) {
        if (/[#()]/i.test(this.vsColor)) {
          return this.vsColor;
        } else {
          return "rgb(var(--".concat(this.vsColor, "))");
        }
      } else {
        return 'rgb(var(--primary))';
      }
    }
  },
  methods: {
    clickx: function clickx() {
      this.$emit('input', this.vsValue);
      this.$emit('click', this.vsValue);
      this.$emit('change', this.vsValue);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-bbf185f0","hasScoped":true,"optionsId":"1","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/vuesax/components/vsRadio/vsRadio.vue
var vsRadio_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-radio",class:{'disabledx':_vm.disabled,'vsActivo':_vm.value?_vm.value.search(_vm.vsValue)!=-1:false},on:{"click":_vm.clickx}},[_c('span',{staticClass:"vs-radio"},[_c('div',{staticClass:"vs-circle",style:({'background':_vm.backgroundx,'boxShadow':'0px 0px 5px 0px '+_vm.backgroundx})}),_c('div',{staticClass:"vs-border",style:({'border':'2px solid rgb(170, 170, 170)'})})]),_c('span',{staticClass:"textx",style:({'color':_vm.value?_vm.value.search(_vm.vsValue)!=-1?_vm.backgroundx:'rgba(0,0,0,.7)':false})},[_vm._t("default")],2)])}
var vsRadio_staticRenderFns = []

// CONCATENATED MODULE: ./src/vuesax/components/vsRadio/vsRadio.vue
function vsRadio_injectStyle (context) {
  __webpack_require__("6Gqs")
}
/* script */


/* template */

/* template functional */
var vsRadio___vue_template_functional__ = false
/* styles */
var vsRadio___vue_styles__ = vsRadio_injectStyle
/* scopeId */
var vsRadio___vue_scopeId__ = "data-v-bbf185f0"
/* moduleIdentifier (server only) */
var vsRadio___vue_module_identifier__ = null

var vsRadio_Component = normalizeComponent(
  vsRadio,
  vsRadio_render,
  vsRadio_staticRenderFns,
  vsRadio___vue_template_functional__,
  vsRadio___vue_styles__,
  vsRadio___vue_scopeId__,
  vsRadio___vue_module_identifier__
)

/* harmony default export */ var vsRadio_vsRadio = (vsRadio_Component.exports);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("Biqn");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/vuesax/components/vsInput/vsInput.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var validations = {
  email: function email(value) {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(value);
  },
  url: function url(value) {
    return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(value);
  },
  password: function password(value) {
    return /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/i.test(value);
  },
  number: function number(value, min, max) {
    if (!min || !max) return !isNaN(value);
    return Number(value) <= Number(max) && Number(value) >= Number(min);
  },
  default: function _default(value) {
    return true;
  }
};
/* harmony default export */ var vsInput = ({
  inheritAttrs: false,
  name: 'vs-input',
  props: ['value', 'vsLabelPlaceholder', 'vsPlaceholder', 'vsLabel', 'disabled', 'vsIcon', 'vsIconAfter', 'vsColor', 'vsType', 'vsDangerText', 'vsSuccessText', 'vsMax', 'vsMin', 'vsValid', 'vsValidationFunction'],
  data: function data() {
    return {
      focusx: false
    };
  },
  computed: {
    listeners: function listeners() {
      var _this = this;

      return objectSpread_default()({}, this.$listeners, {
        focus: this.onFocus,
        blur: this.onBlur,
        input: this.onInput,
        keydown: function keydown(evt) {
          return _this.validarKeypress(evt, evt.target.value);
        }
      });
    },
    validar: function validar() {
      if (this.vsType) {
        //email
        if (this.value.length > 0) {
          if (this.vsValidationFunction && typeof this.vsValidationFunction === 'function') {
            validations[this.vsType] = this.vsValidationFunction;
          }

          var validationFunction = validations[this.vsType] || validations.default;
          var params = [this.value];

          if (this.vsType === 'number') {
            params.push.apply(params, [this.vsMin, this.vsMax]);
          }

          var validationResult = validationFunction.apply(null, params);
          var result = Boolean(validationResult);

          if (this.vsValid !== undefined) {
            this.$emit('update:vsValid', result);
            return result ? 'input-bien' : 'input-mal';
          }
        } else {
          if (this.vsValid !== undefined) {
            this.$emit('update:vsValid', false);
          }
        }
      } else {
        return false;
      }
    },
    backgroundx: function backgroundx() {
      if (this.vsColor) {
        if (/[#()]/i.test(this.vsColor)) {
          return this.vsColor;
        } else {
          return "rgb(var(--".concat(this.vsColor, "))");
        }
      } else {
        return 'rgb(var(--primary))';
      }
    }
  },
  methods: {
    onFocus: function onFocus() {
      this.focusx = true;
      this.$emit('focus');
    },
    onBlur: function onBlur() {
      this.focusx = false;
      this.$emit('blur');
    },
    onInput: function onInput(evt) {
      this.$emit('input', evt.target.value);
    },
    validarKeypress: function validarKeypress(evt, value) {
      if (this.vsType) {
        if (this.vsType == 'email') {
          var rgx = /[-\a-zA-Z0-9_@.]/;

          if (!rgx.test(evt.key)) {
            evt.preventDefault();
          }
        }

        if (this.vsType == 'number') {
          var rgx = /[0-9]/;

          if (evt.key != 'Backspace' && evt.key != 'Delete') {
            if (!rgx.test(evt.key)) {
              evt.preventDefault();
            }
          }
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0e0179aa","hasScoped":true,"optionsId":"1","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/vuesax/components/vsInput/vsInput.vue
var vsInput_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-input",class:[_vm.validar,{'con-focus':_vm.focusx,'vsIconx':_vm.vsIcon, 'vs-icon-after':_vm.vsIconAfter, 'disabledx':_vm.disabled}]},[_c('label',{staticClass:"label",class:{'focusLabel':_vm.focusx, 'disabledxlabel':_vm.disabled},attrs:{"for":""}},[_vm._v(_vm._s(_vm.vsLabel))]),_c('input',_vm._g(_vm._b({ref:"inputx",staticClass:"vs-input",style:({'border':("1px solid " + (_vm.focusx?_vm.backgroundx:'rgba(0, 0, 0, 0.150)')),'caretColor': _vm.backgroundx}),attrs:{"type":_vm.vsType ? _vm.vsType :'text',"disabled":_vm.disabled},domProps:{"value":_vm.value}},'input',_vm.$attrs,false),_vm.listeners)),(!_vm.vsLabelPlaceholder)?_c('span',{staticClass:"placeholder",class:{'noPlaceholder':_vm.value.length>0?true:_vm.focusx},on:{"click":function($event){_vm.$refs.inputx.focus()}}},[_vm._v(_vm._s(_vm.vsPlaceholder))]):_vm._e(),(_vm.vsLabelPlaceholder)?_c('span',{staticClass:"placeholder",class:{'noPlaceholderLabel':_vm.value.length>0?true:_vm.focusx},style:({'color':_vm.focusx?_vm.backgroundx:'rgba(0, 0, 0, 0.30)'}),on:{"click":function($event){_vm.$refs.inputx.focus()}}},[_vm._v(_vm._s(_vm.vsLabelPlaceholder))]):_vm._e(),(_vm.vsIcon)?_c('span',{staticClass:"iconx"},[_c('i',{staticClass:"material-icons"},[_vm._v(_vm._s(_vm.vsIcon))])]):_vm._e(),_c('div',{staticClass:"icon-validar-mal",attrs:{"title":_vm.validar=='input-mal'?_vm.vsDangerText:null}},[_c('i',{staticClass:"material-icons"},[_vm._v("error")])]),_c('div',{staticClass:"icon-validar-bien",attrs:{"title":_vm.validar=='input-bien'?_vm.vsSuccessText:null}},[_c('i',{staticClass:"material-icons"},[_vm._v("check_circle")])])])}
var vsInput_staticRenderFns = []

// CONCATENATED MODULE: ./src/vuesax/components/vsInput/vsInput.vue
function vsInput_injectStyle (context) {
  __webpack_require__("3RRR")
}
/* script */


/* template */

/* template functional */
var vsInput___vue_template_functional__ = false
/* styles */
var vsInput___vue_styles__ = vsInput_injectStyle
/* scopeId */
var vsInput___vue_scopeId__ = "data-v-0e0179aa"
/* moduleIdentifier (server only) */
var vsInput___vue_module_identifier__ = null

var vsInput_Component = normalizeComponent(
  vsInput,
  vsInput_render,
  vsInput_staticRenderFns,
  vsInput___vue_template_functional__,
  vsInput___vue_styles__,
  vsInput___vue_scopeId__,
  vsInput___vue_module_identifier__
)

/* harmony default export */ var vsInput_vsInput = (vsInput_Component.exports);

// EXTERNAL MODULE: ./src/vuesax/components/vsMessageBox/vsMessageBox.css
var vsMessageBox = __webpack_require__("sCZX");
var vsMessageBox_default = /*#__PURE__*/__webpack_require__.n(vsMessageBox);

// CONCATENATED MODULE: ./src/vuesax/components/vsMessageBox/vsMessageBox.js



var message = {
  name: 'alert',
  vsfunction: function vsfunction(parameters) {
    //parameters
    var title = parameters.title;
    var text = parameters.text;
    var textConfirm = parameters.textConfirm ? parameters.textConfirm : 'Accept';
    var confirm = parameters.confirm;
    var color = parameters.color ? parameters.color : null;

    if (color != null) {
      if (!/[#()]/.test(color)) {
        color = "rgb(var(--".concat(color, "))");
      }
    } // contenedor


    var conx = document.createElement('div');
    conx.classList = "vs-con-message";

    if (color) {
      conx.classList.add("vs-color");
    } else {
      conx.classList.add("vs-no-color");
    }

    var messagex = document.createElement('div');
    messagex.classList = "vs-message";
    messagex.innerHTML = "<div class=\"vs-text\">\n    <p class=\"vs-p\">\n    ".concat(text, "\n    </p>\n    <div class=\"vs-con-btns\">\n      <button style=\"background:").concat(color, "; border: 1px solid ").concat(color, "\" class=\"vs-confirm\" type=\"button\" name=\"button\">").concat(textConfirm, "</button>\n    </div>\n    </div>");
    var headerx = document.createElement('header');
    headerx.classList = 'vs-header';
    headerx.style.borderLeft = '3px solid ' + color;
    headerx.innerHTML = "\n    <div class=\"vs-x\">\n    <i style=\"color:".concat(color, "\" class=\"material-icons\">close</i>\n    </div>\n  ");
    var titlex = document.createElement('h3');
    titlex.innerHTML = title;
    titlex.style.color = color;
    messagex.prepend(headerx);
    headerx.appendChild(titlex);
    conx.appendChild(messagex);
    document.body.insertBefore(conx, document.body.firstChild); // animation

    setTimeout(function () {
      messagex.style.transform = "scale(1.050)";
      conx.style.opacity = "1";
      setTimeout(function () {
        messagex.style.transform = "scale(1)";
      }, 200);
      setTimeout(function () {
        messagex.style.borderRadius = '5px';
        headerx.style.borderRadius = '5px 5px 5px 0px';
        var x = document.getElementsByClassName('vs-x');
        x[0].style.opacity = '1';
        x[0].style.transform = ' scale(1) translate(5px,-5px)';
        x[0].style.borderRadius = '5px';
        var btns = document.getElementsByClassName('vs-con-btns');
        btns[0].style.opacity = '1';
        btns[0].style.transform = 'translate(0)';
        var text2 = document.getElementsByClassName('vs-p');
        text2[0].style.opacity = '1';
        text2[0].style.transform = 'translate(0)';
        titlex.style.opacity = '1';
        titlex.style.transform = 'translate(0)';
      }, 120);
    }, 10); //events

    document.getElementsByClassName('vs-confirm')[0].addEventListener('click', function () {
      quitarMessage(messagex, conx);
      confirm();
    });
    document.getElementsByClassName('vs-x')[0].addEventListener('click', function () {
      quitarMessage(messagex, conx);
    });
    conx.addEventListener('click', function (e) {
      if (e.target.className.search('vs-con-message') != -1) {
        quitarMessage(messagex, conx);
      }
    });

    function quitarMessage(messagex, conx) {
      messagex.style.transform = "scale(1.1)";
      conx.style.opacity = "0";
      setTimeout(function () {
        conx.remove();
      }, 300);
    }
  }
}; ////////////////////////////////////////////// confirm /////////////////////////////////

var vsMessageBox_confirm = {
  name: 'confirm',
  vsfunction: function vsfunction(parameters) {
    //parameters
    var title = parameters.title;
    var text = parameters.text;
    var textConfirm = parameters.textConfirm ? parameters.textConfirm : 'Accept';
    var confirm = parameters.confirm;
    var color = parameters.color ? parameters.color : null;
    var textCancel = parameters.textCancel ? parameters.textCancel : 'Cancel';
    var cancel = parameters.cancel;

    if (color != null) {
      if (!/[#()]/.test(color)) {
        color = "rgb(var(--".concat(color, "))");
      }
    } // contenedor


    var conx = document.createElement('div');
    conx.classList = "vs-con-message";

    if (color) {
      conx.classList.add("vs-color");
    } else {
      conx.classList.add("vs-no-color");
    }

    var messagex = document.createElement('div');
    messagex.classList = "vs-message";
    messagex.innerHTML = "<div class=\"vs-text\">\n    <p class=\"vs-p\">\n    ".concat(text, "\n    </p>\n    <div class=\"vs-con-btns\">\n      <button class=\"vs-cancel\" type=\"button\" name=\"button\">").concat(textCancel, "</button>\n      <button style=\"background:").concat(color, "; border: 1px solid ").concat(color, "\" class=\"vs-confirm\" type=\"button\" name=\"button\">").concat(textConfirm, "</button>\n    </div>\n    </div>");
    var headerx = document.createElement('header');
    headerx.classList = 'vs-header';
    headerx.style.borderLeft = '3px solid ' + color; // headerx.innerHTML = `
    //   <div class="vs-x">
    //   <i style="color:${color}" class="material-icons">close</i>
    //   </div>
    // `

    var titlex = document.createElement('h3');
    titlex.innerHTML = title;
    titlex.style.color = color;
    messagex.prepend(headerx);
    headerx.appendChild(titlex);
    conx.appendChild(messagex);
    document.body.insertBefore(conx, document.body.firstChild); // animation

    setTimeout(function () {
      messagex.style.transform = "scale(1.050)";
      conx.style.opacity = "1";
      setTimeout(function () {
        messagex.style.transform = "scale(1)";
      }, 200);
      setTimeout(function () {
        messagex.style.borderRadius = '5px';
        headerx.style.borderRadius = '5px 5px 5px 0px'; // let x = document.getElementsByClassName('vs-x')
        // x[0].style.opacity = '1'
        // x[0].style.transform = ' scale(1) translate(5px,-5px)'
        // x[0].style.borderRadius = '5px'

        var btns = document.getElementsByClassName('vs-con-btns');
        btns[0].style.opacity = '1';
        btns[0].style.transform = 'translate(0)';
        var text2 = document.getElementsByClassName('vs-p');
        text2[0].style.opacity = '1';
        text2[0].style.transform = 'translate(0)';
        titlex.style.opacity = '1';
        titlex.style.transform = 'translate(0)';
      }, 120);
    }, 10); //events

    document.getElementsByClassName('vs-cancel')[0].addEventListener('click', function () {
      quitarMessage(messagex, conx);
      cancel();
    });
    document.getElementsByClassName('vs-confirm')[0].addEventListener('click', function () {
      quitarMessage(messagex, conx);
      confirm();
    }); // document.getElementsByClassName('vs-x')[0].addEventListener('click',function(){
    //   quitarMessage(messagex,conx)
    // })

    conx.addEventListener('click', function (e) {
      if (e.target.className.search('vs-con-message') != -1) {
        messagex.style.transform = "scale(1.050)";
        setTimeout(function () {
          messagex.style.transform = "scale(1)";
        }, 100);
      }
    });

    function quitarMessage(messagex, conx) {
      messagex.style.transform = "scale(1.1)";
      conx.style.opacity = "0";
      setTimeout(function () {
        conx.remove();
      }, 300);
    }
  }
}; ////////////////////////////////////////////// prompt /////////////////////////////////

var vsMessageBox_prompt = {
  name: 'prompt',
  vsfunction: function vsfunction(parameters) {
    //parameters
    var title = parameters.title;
    var text = parameters.text;
    var textConfirm = parameters.textConfirm ? parameters.textConfirm : 'Accept';
    var confirm = parameters.confirm;
    var color = parameters.color ? parameters.color : null;
    var textCancel = parameters.textCancel ? parameters.textCancel : 'Cancel';
    var cancel = parameters.cancel;
    var input = parameters.input;

    if (input.type == 'radio' || input.type == 'checkBox' || input.type == 'button') {
      // var textoActivo="MDN"
      var URL = "https://lusaxweb.github.io/vuesax/#/";
      console.warn("Vuesax: prompt invalid parameter type: " + input.type);
      return;
    }

    if (color != null) {
      if (!/[#()]/.test(color)) {
        color = "rgb(var(--".concat(color, "))");
      }
    } // contenedor


    var conx = document.createElement('div');
    conx.classList = "vs-con-message";

    if (color) {
      conx.classList.add("vs-color");
    } else {
      conx.classList.add("vs-no-color");
    }

    var messagex = document.createElement('div');
    messagex.classList = "vs-message";
    messagex.innerHTML = "<div class=\"vs-text\">\n    <p class=\"vs-p\">\n    ".concat(text, "\n    <input\n      placeholder=\"").concat(input.placeholder ? input.placeholder : '', "\"\n      class=\"vs-input\"\n      type=\"").concat(input.type, "\"\n      name=\"\"\n      maxlength=\"").concat(input.maxLength, "\"\n      value=\"").concat(input.value ? input.value : '', "\"\n      >\n    </p>\n    <div class=\"vs-con-btns\">\n      <button class=\"vs-cancel\" type=\"button\" name=\"button\">").concat(textCancel, "</button>\n      <button style=\"background:").concat(color, "; border: 1px solid ").concat(color, "\" class=\"vs-confirm\" type=\"button\" name=\"button\">").concat(textConfirm, "</button>\n    </div>\n    </div>");
    var headerx = document.createElement('header');
    headerx.classList = 'vs-header';
    headerx.style.borderLeft = '3px solid ' + color; // headerx.innerHTML = `
    //   <div class="vs-x">
    //   <i style="color:${color}" class="material-icons">close</i>
    //   </div>
    // `

    var titlex = document.createElement('h3');
    titlex.innerHTML = title;
    titlex.style.color = color;
    messagex.prepend(headerx);
    headerx.appendChild(titlex);
    conx.appendChild(messagex);
    document.body.insertBefore(conx, document.body.firstChild); // animation

    setTimeout(function () {
      messagex.style.transform = "scale(1.050)";
      conx.style.opacity = "1";
      setTimeout(function () {
        messagex.style.transform = "scale(1)";
      }, 200);
      setTimeout(function () {
        messagex.style.borderRadius = '5px';
        headerx.style.borderRadius = '5px 5px 5px 0px'; // let x = document.getElementsByClassName('vs-x')
        // x[0].style.opacity = '1'
        // x[0].style.transform = ' scale(1) translate(5px,-5px)'
        // x[0].style.borderRadius = '5px'

        var btns = document.getElementsByClassName('vs-con-btns');
        btns[0].style.opacity = '1';
        btns[0].style.transform = 'translate(0)';
        var text2 = document.getElementsByClassName('vs-p');
        text2[0].style.opacity = '1';
        text2[0].style.transform = 'translate(0)';
        titlex.style.opacity = '1';
        titlex.style.transform = 'translate(0)';
      }, 120);
    }, 10); //events

    document.getElementsByClassName('vs-cancel')[0].addEventListener('click', function () {
      var valuex = document.getElementsByClassName('vs-input')[0];
      quitarMessage(messagex, conx);
      cancel(valuex.value);
    });
    document.getElementsByClassName('vs-confirm')[0].addEventListener('click', function () {
      var valuex = document.getElementsByClassName('vs-input')[0];

      if (valuex.value.length > 0) {
        quitarMessage(messagex, conx);
        confirm(valuex.value);
      } else {
        valuex.classList.add('input-mal-box');
        valuex.focus();
        messagex.style.transform = "scale(1.030)";
        setTimeout(function () {
          messagex.style.transform = "scale(1)";
        }, 100);
      }
    }); // document.getElementsByClassName('vs-x')[0].addEventListener('click',function(){
    //   quitarMessage(messagex,conx)
    // })

    conx.addEventListener('click', function (e) {
      if (e.target.className.search('vs-con-message') != -1) {
        messagex.style.transform = "scale(1.050)";
        setTimeout(function () {
          messagex.style.transform = "scale(1)";
        }, 100);
      }
    });

    function quitarMessage(messagex, conx) {
      messagex.style.transform = "scale(1.1)";
      conx.style.opacity = "0";
      setTimeout(function () {
        conx.remove();
      }, 300);
    }
  }
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/vuesax/components/vsTabs/vsTabs.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsTabs = ({
  name: 'vs-tabs',
  props: ['vsType', 'vsColor', 'vsPosition'],
  data: function data() {
    return {
      vsTabs: []
    };
  },
  methods: {
    clickLiTab: function clickLiTab(tab, index) {
      console.log("tab", tab._props.disabled);

      for (var i = 0; i < this.vsTabs.length; i++) {
        this.vsTabs[i]._data.activo = false;
      }

      tab._data.activo = true; // console.log("tab",tab.data);

      console.log("click", index);
    }
  },
  mounted: function mounted() {
    this.vsTabs[0]._data.activo = true;
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1357a8af","hasScoped":true,"optionsId":"1","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/vuesax/components/vsTabs/vsTabs.vue
var vsTabs_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-tabs",class:[_vm.vsType?_vm.vsType:'','vs-'+_vm.vsPosition]},[_c('ul',{staticClass:"ul-tabs"},_vm._l((_vm.vsTabs),function(vsTab,index){return _c('li',{class:{'tab-disabledx':vsTab._props.disabled,'tab-activo':vsTab._data.activo},on:{"click":function($event){_vm.clickLiTab(vsTab,index)}}},[_c('span',{staticClass:"tabtext",style:({'color':vsTab._data.activo?_vm.vsColor?_vm.vsColor:'rgb(var(--primary))':''})},[_vm._v("\n        "+_vm._s(vsTab.vsLabel)+"\n      ")]),_c('span',{staticClass:"cuadro",style:({'border-bottom':_vm.vsType=='border-bottom'?'2px solid '+_vm.vsColor:'','background':vsTab._data.activo?_vm.vsColor?_vm.vsColor:'rgb(var(--primary))':''})})])})),_c('div',{staticClass:"contiene-tabs"},[_vm._t("default")],2)])}
var vsTabs_staticRenderFns = []

// CONCATENATED MODULE: ./src/vuesax/components/vsTabs/vsTabs.vue
function vsTabs_injectStyle (context) {
  __webpack_require__("A9YY")
}
/* script */


/* template */

/* template functional */
var vsTabs___vue_template_functional__ = false
/* styles */
var vsTabs___vue_styles__ = vsTabs_injectStyle
/* scopeId */
var vsTabs___vue_scopeId__ = "data-v-1357a8af"
/* moduleIdentifier (server only) */
var vsTabs___vue_module_identifier__ = null

var vsTabs_Component = normalizeComponent(
  vsTabs,
  vsTabs_render,
  vsTabs_staticRenderFns,
  vsTabs___vue_template_functional__,
  vsTabs___vue_styles__,
  vsTabs___vue_scopeId__,
  vsTabs___vue_module_identifier__
)

/* harmony default export */ var vsTabs_vsTabs = (vsTabs_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/vuesax/components/vsTabs/vsTab.vue
//
//
//
//
//
//
//
//
/* harmony default export */ var vsTab = ({
  name: 'vs-tab',
  props: ['vsLabel', 'disabled'],
  data: function data() {
    return {
      activo: false
    };
  },
  created: function created() {
    // console.log("hola tab",this.$parent);
    this.$parent.vsTabs.push(this);
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-396e9dc0","hasScoped":true,"optionsId":"1","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/vuesax/components/vsTabs/vsTab.vue
var vsTab_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[(_vm.activo)?_c('div',{staticClass:"con-tab"},[_vm._t("default")],2):_vm._e()])}
var vsTab_staticRenderFns = []

// CONCATENATED MODULE: ./src/vuesax/components/vsTabs/vsTab.vue
function vsTab_injectStyle (context) {
  __webpack_require__("oM5C")
}
/* script */


/* template */

/* template functional */
var vsTab___vue_template_functional__ = false
/* styles */
var vsTab___vue_styles__ = vsTab_injectStyle
/* scopeId */
var vsTab___vue_scopeId__ = "data-v-396e9dc0"
/* moduleIdentifier (server only) */
var vsTab___vue_module_identifier__ = null

var vsTab_Component = normalizeComponent(
  vsTab,
  vsTab_render,
  vsTab_staticRenderFns,
  vsTab___vue_template_functional__,
  vsTab___vue_styles__,
  vsTab___vue_scopeId__,
  vsTab___vue_module_identifier__
)

/* harmony default export */ var vsTabs_vsTab = (vsTab_Component.exports);

// EXTERNAL MODULE: ../Users/pc 01/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.math.sign.js
var es6_math_sign = __webpack_require__("58SC");
var es6_math_sign_default = /*#__PURE__*/__webpack_require__.n(es6_math_sign);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/vuesax/components/vsSlider/vsSlider.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsSlider = ({
  name: 'vsSlider',
  props: {
    disabled: {
      type: [Boolean, String],
      default: false
    },
    value: {
      type: Number,
      default: 0
    },
    vsColor: {
      type: String,
      default: 'rgb(var(--primary))'
    },
    vsMin: {
      type: Number
    },
    vsStep: {
      type: Number,
      default: 1
    },
    vsNotPercentage: {
      type: [Boolean],
      default: false
    }
  },
  data: function data() {
    return {
      sliderValue: this.value,
      numeroMostrar: this.value,
      showToolTip: false,
      valuex: 0,
      ancho: 0
    };
  },
  created: function created() {
    this.sliderValue = this.value;
  },
  mounted: function mounted() {
    this.ancho = this.$refs.lineaSlider.offsetWidth;
    window.addEventListener('resize', this.resizex);
  },
  watch: {
    value: function value() {
      this.sliderValue = this.value;
    },
    numeroMostrar: function numeroMostrar() {
      this.$emit('change', this.sliderValue);
    }
  },
  methods: {
    resizex: function resizex() {
      // console.log(this.$refs.lineaSlider.clientWidth);
      this.ancho = this.$refs.lineaSlider.offsetWidth;
      this.setSliderValue(this.numeroMostrar);
    },
    setSliderValue: function setSliderValue(value) {
      if (value <= 100 && value >= 0) {
        this.sliderValue = value;
      }
    },
    onRightKeyDown: function onRightKeyDown() {
      this.setSliderValue(this.sliderValue + this.vsStep);
      this.$emit('input', this.sliderValue);
    },
    onLeftKeyDown: function onLeftKeyDown() {
      this.setSliderValue(this.sliderValue - this.vsStep);
      this.$emit('input', this.sliderValue);
    },
    mousedownx: function mousedownx(event) {
      // event.preventDefault();
      window.addEventListener('mousemove', this.mouseMovex);
      window.addEventListener('mouseup', this.removeEvents);
      window.addEventListener('touchmove', this.mouseMovex);
      window.addEventListener('touchend', this.removeEvents);
    },
    mouseMovex: function mouseMovex(event) {
      if (this.disabled) {
        return;
      }

      this.showToolTip = true;
      var lineaPintada = this.$refs.lineaPintada;
      var linea = this.$refs.lineaSlider;
      var circle = this.$refs.circle;
      var x; // console.log(event);

      if (event.type == 'touchmove') {
        x = event.targetTouches[0].clientX;
      } else {
        x = event.clientX;
      }

      var valorx = x - (linea.getBoundingClientRect().left - circle.offsetWidth / 2); // console.log(this.vsMin);

      if (this.vsMin) {
        if (valorx / this.ancho * 100 <= this.vsMin) {
          valorx = valorx; // console.log('entro');
        }
      } else {
        if (Math.sign(valorx) == -1) {
          valorx = 0;
        }
      }

      if (valorx > this.ancho) {
        valorx = this.ancho;
      }

      this.valuex = valorx;
      var obtenerPorcentaje = 0;
      var porcentajex = 0; // if(this.vsMin){
      //
      // } else {

      obtenerPorcentaje = valorx / this.ancho * 100;
      porcentajex = Math.round(obtenerPorcentaje); // }
      // circle.style.left = valorx  + 'px'
      // lineaPintada.style.width = valorx + 10  + 'px'

      this.setSliderValue(porcentajex);
      this.numeroMostrar = porcentajex;
      this.$emit('input', porcentajex); // }
      // circle.style.left = (e.clientX - circle.offsetWidth/2) - this.ancho/2 + 'px'
    },
    removeEvents: function removeEvents(event) {
      if (this.disabled) {
        return;
      }

      this.showToolTip = false;
      var obtenerPorcentaje = this.valuex / this.ancho * 100;
      var porcentajex = Math.round(obtenerPorcentaje);
      this.setSliderValue(porcentajex);
      this.$emit('input', porcentajex);
      window.removeEventListener('mousemove', this.mouseMovex);
      window.removeEventListener('mouseup', this.removeEvents);
      window.removeEventListener('touchmove', this.mouseMovex);
      window.removeEventListener('touchend', this.removeEvents);
    },
    clickLinea: function clickLinea(evt) {
      var className = evt.target.className;

      if (className !== 'linea-slider' && className !== 'linea-pintada' || this.disabled) {
        return;
      }

      this.showToolTip = true;
      var sliderOffsetLeft = this.$refs.lineaSlider.getBoundingClientRect().left;
      var obtenerPorcentaje = (evt.clientX - sliderOffsetLeft) / this.ancho * 100;
      var porcentajex = Math.round(obtenerPorcentaje);
      this.numeroMostrar = porcentajex;
      this.$emit('input', porcentajex + 1);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7864d306","hasScoped":false,"optionsId":"1","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/vuesax/components/vsSlider/vsSlider.vue
var vsSlider_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-slider",class:{'s-d':_vm.disabled}},[_c('div',{ref:"lineaSlider",staticClass:"linea-slider",on:{"click":_vm.clickLinea}},[_c('div',{ref:"lineaPintada",staticClass:"linea-pintada",style:({'background':_vm.vsColor,'width':_vm.sliderValue+'%','max-width':_vm.ancho?_vm.ancho+'px':'auto'})},[_c('div',{ref:"circle",staticClass:"circle-slider",style:({'background':_vm.vsColor}),attrs:{"tabindex":"0"},on:{"mouseenter":function($event){_vm.showToolTip=true},"mouseleave":function($event){_vm.showToolTip=false},"mousedown":_vm.mousedownx,"touchstart":function($event){_vm.mousedownx($event)},"focus":function($event){_vm.showToolTip=true},"blur":function($event){_vm.showToolTip=false},"keydown":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"])){ return null; }if('button' in $event && $event.button !== 0){ return null; }return _vm.onLeftKeyDown($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"right",39,$event.key,["Right","ArrowRight"])){ return null; }if('button' in $event && $event.button !== 2){ return null; }return _vm.onRightKeyDown($event)}]}},[_c('span',{staticClass:"circle-interno",style:({'border':'2px solid '+_vm.vsColor})},[_c('span')]),_c('div',{staticClass:"con-numero-slider",class:{'hoverx':_vm.showToolTip},style:({'background':_vm.vsColor})},[_c('span',[_vm._v(_vm._s(Math.round(_vm.sliderValue)>100?100:Math.round(_vm.sliderValue))+_vm._s(_vm.vsNotPercentage?'':'%'))])])])])])])}
var vsSlider_staticRenderFns = []

// CONCATENATED MODULE: ./src/vuesax/components/vsSlider/vsSlider.vue
function vsSlider_injectStyle (context) {
  __webpack_require__("t0E1")
}
/* script */


/* template */

/* template functional */
var vsSlider___vue_template_functional__ = false
/* styles */
var vsSlider___vue_styles__ = vsSlider_injectStyle
/* scopeId */
var vsSlider___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var vsSlider___vue_module_identifier__ = null

var vsSlider_Component = normalizeComponent(
  vsSlider,
  vsSlider_render,
  vsSlider_staticRenderFns,
  vsSlider___vue_template_functional__,
  vsSlider___vue_styles__,
  vsSlider___vue_scopeId__,
  vsSlider___vue_module_identifier__
)

/* harmony default export */ var vsSlider_vsSlider = (vsSlider_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/vuesax/components/vsInputNumber/vsInputNumber.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// var pulse = setInterval(function(){ console.log("hola") }, 1000);
/* harmony default export */ var vsInputNumber = ({
  name: 'vs-input-number',
  directives: {
    repeatClick: {
      bind: function bind(el, binding, vnode) {
        var intervalx = null;
        var startT;

        var functionx = function functionx() {
          return vnode.context[binding.expression].apply();
        };

        var bucle = function bucle() {
          if (new Date() - startT < 100) {
            functionx();
          }

          clearInterval(intervalx);
          intervalx = null;
        };

        var eventx = function eventx(e) {
          if (e.button !== 0) return;
          startT = new Date();

          var escuchando = function escuchando() {
            if (bucle) {
              bucle.apply(this, arguments);
            }

            el.removeEventListener('mouseup', escuchando, false);
          };

          el.addEventListener('mouseleave', escuchando, false);
          el.addEventListener('mouseup', escuchando, false);
          clearInterval(intervalx);
          intervalx = setInterval(functionx, 100);
        };

        el.addEventListener('mousedown', eventx, false);
      }
    }
  },
  props: ['value', 'vsColor', 'vsMax', 'vsMin', 'disabled', 'vsLabel', 'vsSize'],
  data: function data() {
    return {
      valuex: this.value,
      pulsandoPlus: false,
      pulsandoMenos: false
    };
  },
  created: function created() {
    if (parseInt(this.value) < parseInt(this.vsMin)) {
      this.$emit('input', this.vsMin);
      this.$emit('change', this.vsMin);
    } else if (parseInt(this.value) > parseInt(this.vsMax)) {
      this.$emit('input', this.vsMax);
      this.$emit('change', this.vsMax);
    }
  },
  watch: {
    value: function value() {
      this.valuex = this.value;
    }
  },
  methods: {
    blurx: function blurx() {
      if (this.valuex == '') {
        this.$emit('input', 0);
        this.$emit('change', 0);
      }

      if (parseInt(this.value) < parseInt(this.vsMin)) {
        console.log("entro");
        this.$emit('input', this.vsMin);
        this.$emit('change', this.vsMin);
      } else if (parseInt(this.value) > parseInt(this.vsMax)) {
        console.log("entro");
        this.$emit('input', this.vsMax);
        this.$emit('change', this.vsMax);
      }
    },
    validarKeypress: function validarKeypress(evt, value) {
      var rgx = /[0-9]/;

      if (evt.key != 'Backspace' && evt.key != 'Delete' && evt.key != 'ArrowLeft' && evt.key != 'ArrowRight' && evt.key != 'ArrowUp' && evt.key != 'ArrowDown') {
        if (!rgx.test(evt.key)) {
          evt.preventDefault();
        }
      } else if (evt.key == 'ArrowDown') {
        this.menos();
      } else if (evt.key == 'ArrowUp') {
        this.mas();
      }
    },
    mas: function mas() {
      if (this.valuex === '') {
        this.valuex = 0;
      }

      if (this.vsMax ? parseInt(this.value) < parseInt(this.vsMax) : true) {
        var valueNew = parseInt(this.valuex) + 1;
        this.$emit('input', valueNew);
        this.$emit('change', valueNew);
      }
    },
    menos: function menos() {
      if (this.valuex === '') {
        this.valuex = 0;
      }

      if (this.vsMin ? parseInt(this.value) > parseInt(this.vsMin) : true) {
        var valueNew = parseInt(this.valuex) - 1;
        this.$emit('input', valueNew);
        this.$emit('change', valueNew);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3abfe31f","hasScoped":true,"optionsId":"1","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/vuesax/components/vsInputNumber/vsInputNumber.vue
var vsInputNumber_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:'vs-'+_vm.vsSize},[_c('div',{staticClass:"con-input-number",class:[{'con-plus':_vm.pulsandoPlus,'con-menos':_vm.pulsandoMenos,'disabledx':_vm.disabled}],style:({'color':_vm.vsColor?/[#()]/.test(_vm.vsColor)?_vm.vsColor:("rgb(var(--" + _vm.vsColor + "))"):'rgb(var(--primary))','background':_vm.vsColor?/[#()]/.test(_vm.vsColor)?_vm.vsColor:("rgb(var(--" + _vm.vsColor + "))"):'rgb(var(--primary))'})},[_c('button',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.menos),expression:"menos"}],class:{'no-mas':_vm.vsMin?_vm.value<=_vm.vsMin:false},attrs:{"type":"button","name":"button"},on:{"mousedown":function($event){_vm.pulsandoMenos=true},"mouseup":function($event){_vm.pulsandoMenos=false},"mouseleave":function($event){_vm.pulsandoMenos=false}}},[_c('i',{staticClass:"material-icons"},[_vm._v("remove")])]),_c('div',{staticClass:"numberx"},[_c('input',{class:{'plus':_vm.pulsandoPlus,'menos':_vm.pulsandoMenos},style:({'width':_vm.value.toString().length*17+'px'}),attrs:{"type":"text","name":"","value":""},domProps:{"value":_vm.value},on:{"blur":_vm.blurx,"keydown":function($event){_vm.validarKeypress($event,$event.target.value)},"input":function($event){_vm.$emit('input',$event.target.value)},"change":function($event){_vm.$emit('change',$event.target.value)}}})]),_c('div',{},[_c('button',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.mas),expression:"mas"}],class:{'no-mas':_vm.vsMax?_vm.value>=_vm.vsMax:false},attrs:{"type":"button","name":"button"},on:{"mousedown":function($event){_vm.pulsandoPlus=true},"mouseup":function($event){_vm.pulsandoPlus=false},"mouseleave":function($event){_vm.pulsandoPlus=false}}},[_c('i',{staticClass:"material-icons"},[_vm._v("add")])])])])])}
var vsInputNumber_staticRenderFns = []

// CONCATENATED MODULE: ./src/vuesax/components/vsInputNumber/vsInputNumber.vue
function vsInputNumber_injectStyle (context) {
  __webpack_require__("188f")
}
/* script */


/* template */

/* template functional */
var vsInputNumber___vue_template_functional__ = false
/* styles */
var vsInputNumber___vue_styles__ = vsInputNumber_injectStyle
/* scopeId */
var vsInputNumber___vue_scopeId__ = "data-v-3abfe31f"
/* moduleIdentifier (server only) */
var vsInputNumber___vue_module_identifier__ = null

var vsInputNumber_Component = normalizeComponent(
  vsInputNumber,
  vsInputNumber_render,
  vsInputNumber_staticRenderFns,
  vsInputNumber___vue_template_functional__,
  vsInputNumber___vue_styles__,
  vsInputNumber___vue_scopeId__,
  vsInputNumber___vue_module_identifier__
)

/* harmony default export */ var vsInputNumber_vsInputNumber = (vsInputNumber_Component.exports);

// EXTERNAL MODULE: ../Users/pc 01/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("re1x");
var es6_regexp_match_default = /*#__PURE__*/__webpack_require__.n(es6_regexp_match);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/vuesax/components/vsUpload/vsUpload.vue




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsUpload = ({
  name: 'vs-upload',
  filter: {
    reverse: function reverse(value) {
      return value.slice().reverse();
    }
  },
  props: {
    vsFile: String,
    multiple: Boolean,
    arrayFiles: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    vsFileList: Array
  },
  data: function data() {
    return {
      url: '',
      colorx: 'rgb(255, 255, 255)',
      urlview: '',
      view: false
    };
  },
  mounted: function mounted() {
    var elx = this.$refs.viewx;
    document.body.insertBefore(elx, document.body.firstChild);
  },
  computed: {
    reverseImgs: function reverseImgs() {
      if (this.arrayFiles.length > 0) {
        return this.arrayFiles.slice().reverse();
      }
    }
  },
  methods: {
    quitarImage: function quitarImage(index) {
      var filesx = JSON.parse(JSON.stringify(this.vsFileList));
      filesx.splice(index, 1);
      this.arrayFiles.splice(index, 1);
      this.$emit('update:vsFileList', filesx);
    },
    // multiple
    agregarImg: function agregarImg() {
      console.log("hola mundo");
    },
    quitarView: function quitarView(evt) {
      var _this2 = this;

      console.log(evt.target.nodeName);

      if (evt.target.nodeName != 'IMG') {
        this.view = false;
        setTimeout(function () {
          _this2.urlview = '';
        }, 250);
      }
    },
    verview: function verview() {
      this.urlview = this.url;
      this.view = true;
    },
    xUrl: function xUrl() {
      var _this3 = this;

      this.$refs.conimg.classList.add('oculto');
      setTimeout(function () {
        _this3.url = '';

        _this3.$emit('file', '');
      }, 250);
    },
    multipleUploadx: function multipleUploadx(e) {
      var _this4 = this;

      var preview = this.$refs.ulmultiple;
      var file = this.$refs.inputsx.files[0];
      var reader = new FileReader();
      var filesx = JSON.parse(JSON.stringify(this.vsFileList));

      reader.onloadend = function () {
        // preview.src = reader.result;
        _this4.arrayFiles.push({
          src: reader.result
        }); // this.vsFileList.push({name:file.name})


        console.log(file);
        filesx.push({
          name: file.name
        });
        console.log(filesx);

        _this4.$emit('update:vsFileList', filesx);
      };

      if (file) {
        reader.readAsDataURL(file);
      } else {// preview.src = this.url;
      }

      this.$refs.inputsx.value = '';
    },
    uploadx: function uploadx(e) {
      console.log("paso");
      this.$emit('update:vsFile', e.target.value);

      var _this = this;

      this.$refs.conimg.classList.remove('oculto');
      var preview = this.$refs.imgx;
      var file = this.$refs.inputx.files[0];
      var reader = new FileReader(); // reader.onloadend =  ()=> {
      //   // preview.src = reader.result;
      //   this.url = reader.result
      // }
      //
      // if (file) {
      //   reader.readAsDataURL(file);
      // } else {
      //   preview.src = this.url;
      // }

      var averagediv = this.$refs.conimg;
      var averageimage = this.$refs.imgx; // obtener color

      function getaverageColor(imagen) {
        var r = 0,
            g = 0,
            b = 0,
            count = 0,
            canvas,
            ctx,
            imageData,
            data,
            i,
            n;
        canvas = document.createElement('canvas');
        ctx = canvas.getContext("2d");
        canvas.width = imagen.width;
        canvas.height = imagen.height;
        ctx.drawImage(imagen, 0, 0);
        imageData = ctx.getImageData(0, 0, imagen.width, imagen.height);
        data = imageData.data;

        for (i = 0, n = data.length; i < n; i += 4) {
          ++count;
          r += data[i];
          g += data[i + 1];
          b += data[i + 2];
        }

        r = ~~(r / count);
        g = ~~(g / count);
        b = ~~(b / count);
        return [r, g, b];
      }

      function rgbToHex(arr) {
        return "#" + ((1 << 24) + (arr[0] << 16) + (arr[1] << 8) + arr[2]).toString(16).slice(1);
      }

      function uploadImage(e) {
        var image = new Image();
        image.src = e.target.result;

        image.onload = function () {
          switchImage(this);
        };
      }

      function switchImage(image) {
        var averagecolor = getaverageColor(image);
        var color = rgbToHex(averagecolor);
        _this.url = image.src;
        _this.colorx = color; // averagediv.style.backgroundColor = averagediv.textContent = color;
      } // function setDefaultImage() {
      //   var image = new Image();
      //   image.src = "images/average_image.jpg";
      //   image.onload = function() {
      //     switchImage(this);
      //   }
      // }


      file = e.target.files[0];
      if (!file.type.match(/image.*/)) return;
      var reader = new FileReader();
      reader.onload = uploadImage;
      reader.readAsDataURL(file); // this.$emit('file',e.target.value,e)
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-dcda2dde","hasScoped":false,"optionsId":"1","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/vuesax/components/vsUpload/vsUpload.vue
var vsUpload_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contiene-upload",class:{'con-multiple':_vm.multiple}},[(!_vm.multiple)?_c('div',{staticClass:"con-upload"},[_vm._m(0),_c('input',{ref:"inputx",staticClass:"input-upload",attrs:{"type":"file","name":"","value":""},on:{"change":function($event){_vm.uploadx($event)}}}),_c('div',{}),_c('div',{ref:"conimg",staticClass:"con-img-upload",class:{'oculto':_vm.url==''},style:({'background':_vm.colorx})},[_c('div',{staticClass:"header-upload"},[_c('div',{staticClass:"x-img",on:{"click":function($event){_vm.xUrl(),_vm.colorx='rgb(255, 255, 255)'}}},[_c('i',{staticClass:"material-icons"},[_vm._v("close")])])]),_c('img',{ref:"imgx",attrs:{"src":_vm.url,"alt":""},on:{"click":_vm.verview}})])]):_vm._e(),(_vm.multiple)?_c('div',{staticClass:"con-multiple-upload"},[_c('ul',{ref:"ulmultiple",staticClass:"con-multiples-imgs"},[_vm._l((_vm.reverseImgs),function(file,index){return _c('li',{staticClass:"con-imgs"},[_c('div',{staticClass:"x-img",on:{"click":function($event){_vm.quitarImage(index)}}},[_c('i',{staticClass:"material-icons"},[_vm._v("close")])]),_c('img',{ref:'vs'+index,refInFor:true,attrs:{"src":file.src,"alt":""},on:{"click":function($event){_vm.view=true,_vm.urlview=file.src}}})])}),_c('li',{staticClass:"agregarx"},[_c('input',{ref:"inputsx",staticClass:"input-upload",attrs:{"type":"file","name":"","value":""},on:{"change":function($event){_vm.multipleUploadx($event)}}})])],2)]):_vm._e(),_c('transition',{attrs:{"name":"fade-upload"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.view),expression:"view"}],ref:"viewx",staticClass:"view-upload",on:{"click":function($event){_vm.quitarView($event)}}},[_c('div',{staticClass:"x-view",on:{"click":function($event){_vm.view=false}}},[_c('i',{staticClass:"material-icons"},[_vm._v("close")])]),_c('img',{attrs:{"src":_vm.urlview,"alt":""}})])])],1)}
var vsUpload_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-subir"},[_c('h3',[_vm._v("Subir Archivo")]),_c('i',{staticClass:"material-icons"},[_vm._v("publish")])])}]

// CONCATENATED MODULE: ./src/vuesax/components/vsUpload/vsUpload.vue
function vsUpload_injectStyle (context) {
  __webpack_require__("RKPc")
}
/* script */


/* template */

/* template functional */
var vsUpload___vue_template_functional__ = false
/* styles */
var vsUpload___vue_styles__ = vsUpload_injectStyle
/* scopeId */
var vsUpload___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var vsUpload___vue_module_identifier__ = null

var vsUpload_Component = normalizeComponent(
  vsUpload,
  vsUpload_render,
  vsUpload_staticRenderFns,
  vsUpload___vue_template_functional__,
  vsUpload___vue_styles__,
  vsUpload___vue_scopeId__,
  vsUpload___vue_module_identifier__
)

/* harmony default export */ var vsUpload_vsUpload = (vsUpload_Component.exports);

// EXTERNAL MODULE: ./src/vuesax/components/vsLoading/vsLoading.css
var vsLoading = __webpack_require__("ZFJ+");
var vsLoading_default = /*#__PURE__*/__webpack_require__.n(vsLoading);

// CONCATENATED MODULE: ./src/vuesax/components/vsLoading/vsLoading.js

var vsLoading_vsLoading = {
  name: 'loading',
  vsfunction: function vsfunction(parameters) {
    var colorx = 'rgb(var(--primary))';
    var backgroundx = 'rgba(255, 255, 255,.8)';

    if (parameters !== undefined) {
      if (parameters.hasOwnProperty('color')) {
        colorx = /[#()]/.test(parameters.color) ? parameters.color : "rgb(var(--".concat(parameters.color, "))");
      }

      if (parameters.hasOwnProperty('background')) {
        backgroundx = /[#()]/.test(parameters.background) ? parameters.background : "rgb(var(--".concat(parameters.background, "))");
      }
    } // console.log("hola abrir el loading");


    var conLoading = document.createElement('div');
    conLoading.classList.add('vs-con-loading');
    conLoading.style.background = backgroundx;
    conLoading.innerHTML = "\n  <div class=\"vs-loading-default\">\n    <div style=\"border-left: 4px solid ".concat(colorx, "\" class=\"linea1\"></div>\n    <div style=\"border-left: 4px solid ").concat(colorx, "\" class=\"linea2\"></div>\n    <div style=\"border-left: 4px solid ").concat(colorx, "\" class=\"linea3\"></div>\n  </div>\n  ");
    document.body.insertBefore(conLoading, document.body.firstChild);
    setTimeout(function () {
      conLoading.classList.add('loading-activo');
    }, 10); // setTimeout(function () {
    //   conLoading.style.opacity = 0
    //   setTimeout(function () {
    //     conLoading.remove()
    //   }, 300);
    // }, time);
  }
};
var vsLoadingClose = {
  name: 'loading',
  subName: 'close',
  vsfunction: function vsfunction(parameters) {
    // console.log("hola close");
    // return
    var conLoading = document.querySelector('.vs-con-loading'); // setTimeout(function () {

    conLoading.style.opacity = 0;
    setTimeout(function () {
      conLoading.remove();
    }, 300); // }, 2500);
  }
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/vuesax/components/vsPopup/vsPopup.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsPopup = ({
  name: 'vs-popup',
  props: {
    vsTitle: {
      type: String,
      default: ''
    },
    vsActive: {
      type: Boolean,
      default: false
    },
    vsFullscreen: {
      type: Boolean,
      default: false
    },
    vsCloseButtonColor: {
      type: String
    },
    vsBackgroundColor: {
      type: String
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    colorx: function colorx() {
      if (this.vsBackgroundColor) {
        if (color.contrastColor(this.vsBackgroundColor)) {
          return 'rgba(0, 0, 0,.7)';
        } else {
          return 'rgba(255, 255, 255,.8)';
        }
      } else {
        return 'rgba(0, 0, 0,.7)';
      }
    },
    colorButtonx: function colorButtonx() {
      if (this.vsCloseButtonColor) {
        if (color.contrastColor(this.vsCloseButtonColor)) {
          return 'rgba(0, 0, 0,.7)';
        } else {
          return 'rgba(255, 255, 255,.8)';
        }
      } else {
        return 'rgba(0, 0, 0,.7)';
      }
    }
  },
  mounted: function mounted() {
    var popupx = this.$refs.conpopup;
    document.body.insertBefore(popupx, document.body.firstChild);
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3f1f27d9","hasScoped":true,"optionsId":"1","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/vuesax/components/vsPopup/vsPopup.vue
var vsPopup_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fadex"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.vsActive),expression:"vsActive"}],ref:"conpopup",staticClass:"con-popup"},[_c('div',_vm._b({staticClass:"vs-popup",class:{'fullscreen':_vm.vsFullscreen},style:({'background':_vm.vsBackgroundColor?/[#()]/.test(_vm.vsBackgroundColor)?_vm.vsBackgroundColor:("rgba(var(--" + _vm.vsBackgroundColor + "),1)"):'rgb(255,255,255)',
    'color':_vm.colorx,
    })},'div',_vm.$attrs,false),[_c('header',[(_vm.vsTitle!='')?_c('h2',[_vm._v("\n        "+_vm._s(_vm.vsTitle)+"\n      ")]):_vm._e(),_c('div',{staticClass:"vs-popup-cancel",style:({'background':_vm.vsCloseButtonColor?/[#()]/.test(_vm.vsCloseButtonColor)?_vm.vsCloseButtonColor:("rgba(var(--" + _vm.vsCloseButtonColor + "),1)"):'rgb(250, 250, 250)',
      'color':_vm.colorButtonx
      }),on:{"click":function($event){_vm.$emit('vs-cancel')}}},[_c('i',{staticClass:"material-icons"},[_vm._v("close")])])]),_c('div',{staticClass:"con-htmlx"},[_vm._t("default")],2)])])])}
var vsPopup_staticRenderFns = []

// CONCATENATED MODULE: ./src/vuesax/components/vsPopup/vsPopup.vue
function vsPopup_injectStyle (context) {
  __webpack_require__("+K5V")
}
/* script */


/* template */

/* template functional */
var vsPopup___vue_template_functional__ = false
/* styles */
var vsPopup___vue_styles__ = vsPopup_injectStyle
/* scopeId */
var vsPopup___vue_scopeId__ = "data-v-3f1f27d9"
/* moduleIdentifier (server only) */
var vsPopup___vue_module_identifier__ = null

var vsPopup_Component = normalizeComponent(
  vsPopup,
  vsPopup_render,
  vsPopup_staticRenderFns,
  vsPopup___vue_template_functional__,
  vsPopup___vue_styles__,
  vsPopup___vue_scopeId__,
  vsPopup___vue_module_identifier__
)

/* harmony default export */ var vsPopup_vsPopup = (vsPopup_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/vuesax/components/vsDropDown/vsDropDown.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsDropDown = ({
  name: 'vs-dropdown',
  props: {
    vsTitle: {
      type: String,
      default: ''
    },
    vsColorButton: {
      type: String,
      default: null
    },
    vsTriggerClick: {
      type: Boolean,
      default: false
    },
    vsMargin: {
      type: String,
      default: '0px'
    },
    vsDisabled: {
      type: Boolean,
      default: false
    },
    vsColor: {
      type: String,
      default: 'rgb(255, 255, 255)'
    },
    vsColorRow: {
      type: String,
      default: null
    },
    vsIcon: {
      type: String,
      default: 'keyboard_arrow_down'
    }
  },
  data: function data() {
    return {
      visible: false,
      conSlotButton: false
    };
  },
  computed: {
    colorx: function colorx() {
      if (this.vsColor) {
        if (color.contrastColor(this.vsColor)) {
          return 'rgba(0, 0, 0,.8)';
        } else {
          return 'rgba(255, 255, 255,.8)';
        }
      }
    }
  },
  methods: {
    setVisible: function setVisible(evt) {
      if (evt.type == 'mouseenter' && this.vsTriggerClick) {
        return;
      }

      var cords = evt.target.getBoundingClientRect();
      var elx = this.$refs.ulDrop;
      elx.style.left = cords.left + evt.target.clientWidth + 'px';
      elx.style.top = cords.top + evt.target.clientHeight + 'px';
      document.body.insertBefore(elx, document.body.firstChild);
      this.visible = !this.visible;
      setTimeout(function () {
        window.addEventListener('click', this.cerrar);
      }, 10);
      window.addEventListener('mousewheel', this.cerrar);
      window.addEventListener('touchmove', this.cerrar);
    },
    agregarClickFuera: function agregarClickFuera() {
      window.addEventListener('click', this.clickFuera);
    },
    clickFuera: function clickFuera(e) {
      if (e.target.closest('.con-drop-ul') == null) {
        this.visible = false;
        this.removeEventListenerx();
      }
    },
    cerrar: function cerrar(e) {
      if (e.target.closest('.con-drop-ul') == null) {
        this.visible = false;
        this.removeEventListenerx();
      }
    },
    removeEventListenerx: function removeEventListenerx() {
      window.removeEventListener('click', this.clickFuera);
      window.removeEventListener('click', this.cerrar);
      window.removeEventListener('mousewheel', this.cerrar);
      window.removeEventListener('touchmove', this.cerrar);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.visible = false;
    var ulx = this.$refs.ulDrop;
    ulx.remove();
  },
  mounted: function mounted() {
    if (this.$slots.hasOwnProperty('button')) {
      this.conSlotButton = true;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7025f3b8","hasScoped":true,"optionsId":"1","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/vuesax/components/vsDropDown/vsDropDown.vue
var vsDropDown_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-drop-down",class:{
  'vsDisabled':_vm.vsDisabled,
  'vs-visible':_vm.visible
  },style:({
  'margin':_vm.vsMargin,
  })},[(_vm.conSlotButton)?_c('div',{staticClass:"con-slot"},[_vm._t("button"),_c('i',{staticClass:"material-icons",style:({
      'background':_vm.vsColorButton?/[#()]/.test(_vm.vsColorButton)?_vm.vsColorButton:("rgba(var(--" + _vm.vsColorButton + "),1)"):'rgba(var(--primary))',
      'color':_vm.vsColorRow?/[#()]/.test(_vm.vsColorRow)?_vm.vsColorRow:("rgba(var(--" + _vm.vsColorRow + "),1)"):'rgb(255, 255, 255)',
      }),on:{"click":function($event){_vm.setVisible($event)},"mouseenter":function($event){_vm.setVisible($event)},"mouseleave":function($event){_vm.vsTriggerClick?_vm.agregarClickFuera():_vm.visible=false}}},[_vm._v(_vm._s(_vm.vsIcon))])],2):_c('div',{staticClass:"btn-vs-drop-down",on:{"click":function($event){_vm.setVisible($event)},"mouseenter":function($event){_vm.setVisible($event)},"mouseleave":function($event){_vm.vsTriggerClick?_vm.agregarClickFuera():_vm.visible=false}}},[_vm._v("\n    "+_vm._s(_vm.vsTitle)),_c('i',{staticClass:"material-icons"},[_vm._v(_vm._s(_vm.vsIcon))])]),_c('transition',{attrs:{"name":"dropdown"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],ref:"ulDrop",staticClass:"con-drop-ul",on:{"mouseenter":function($event){_vm.visible=true},"mouseleave":function($event){_vm.vsTriggerClick?_vm.agregarClickFuera():_vm.visible=false}}},[_c('ul',{staticClass:"drop-ul",style:({
      'background':_vm.vsColor?/[#()]/.test(_vm.vsColor)?_vm.vsColor:("rgba(var(--" + _vm.vsColor + "),1)"):'rgb(255, 255, 255)',
      'color':_vm.colorx,
      })},[_vm._t("default")],2)])])],1)}
var vsDropDown_staticRenderFns = []

// CONCATENATED MODULE: ./src/vuesax/components/vsDropDown/vsDropDown.vue
function vsDropDown_injectStyle (context) {
  __webpack_require__("Hf4L")
}
/* script */


/* template */

/* template functional */
var vsDropDown___vue_template_functional__ = false
/* styles */
var vsDropDown___vue_styles__ = vsDropDown_injectStyle
/* scopeId */
var vsDropDown___vue_scopeId__ = "data-v-7025f3b8"
/* moduleIdentifier (server only) */
var vsDropDown___vue_module_identifier__ = null

var vsDropDown_Component = normalizeComponent(
  vsDropDown,
  vsDropDown_render,
  vsDropDown_staticRenderFns,
  vsDropDown___vue_template_functional__,
  vsDropDown___vue_styles__,
  vsDropDown___vue_scopeId__,
  vsDropDown___vue_module_identifier__
)

/* harmony default export */ var vsDropDown_vsDropDown = (vsDropDown_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/vuesax/components/vsDropDown/vsDropDownItem.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsDropDownItem = ({
  name: 'vs-dropdown-item',
  props: {
    vsGroup: {
      type: Boolean,
      default: false
    },
    vsLabel: {
      type: String,
      default: null
    },
    vsColor: {
      type: String,
      default: 'rgb(var(--primary))'
    },
    vsDisabled: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      _vsColor: this.vsColor
    };
  },
  created: function created() {
    // console.log();
    this._vsColor = this.$parent.vsColor;
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-a6e1bec4","hasScoped":true,"optionsId":"1","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/vuesax/components/vsDropDown/vsDropDownItem.vue
var vsDropDownItem_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"lix",class:{
  'disabledx':_vm.vsDisabled,
  }},[(_vm.vsLabel)?_c('h4',[_vm._v("\n    "+_vm._s(_vm.vsLabel)+"\n  ")]):_vm._e(),_c('div',{class:{'con-li':!_vm.vsLabel||!_vm.vsGroup}},[_vm._t("default")],2)])}
var vsDropDownItem_staticRenderFns = []

// CONCATENATED MODULE: ./src/vuesax/components/vsDropDown/vsDropDownItem.vue
function vsDropDownItem_injectStyle (context) {
  __webpack_require__("SH3K")
}
/* script */


/* template */

/* template functional */
var vsDropDownItem___vue_template_functional__ = false
/* styles */
var vsDropDownItem___vue_styles__ = vsDropDownItem_injectStyle
/* scopeId */
var vsDropDownItem___vue_scopeId__ = "data-v-a6e1bec4"
/* moduleIdentifier (server only) */
var vsDropDownItem___vue_module_identifier__ = null

var vsDropDownItem_Component = normalizeComponent(
  vsDropDownItem,
  vsDropDownItem_render,
  vsDropDownItem_staticRenderFns,
  vsDropDownItem___vue_template_functional__,
  vsDropDownItem___vue_styles__,
  vsDropDownItem___vue_scopeId__,
  vsDropDownItem___vue_module_identifier__
)

/* harmony default export */ var vsDropDown_vsDropDownItem = (vsDropDownItem_Component.exports);

// CONCATENATED MODULE: ./src/vuesax/utils/easing.js
/* harmony default export */ var easing = ({
  name: 'easing',
  // no easing, no acceleration
  linear: function linear(t, b, c, d) {
    return c * t / d + b;
  },
  // accelerating from zero velocity
  easeInQuad: function easeInQuad(t, b, c, d) {
    t /= d;
    return c * t * t + b;
  },
  // decelerating to zero velocity
  easeOutQuad: function easeOutQuad(t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  },
  // accelerating from zero velocity
  easeInCubic: function easeInCubic(t, b, c, d) {
    t /= d;
    return c * t * t * t + b;
  },
  // decelerating to zero velocity
  easeOutCubic: function easeOutCubic(t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
  },
  // acceleration until halfway, then deceleration
  easeInOutCubic: function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  },
  // accelerating from zero velocity
  easeInQuart: function easeInQuart(t, b, c, d) {
    t /= d;
    return c * t * t * t * t + b;
  },
  // decelerating to zero velocity
  easeOutQuart: function easeOutQuart(t, b, c, d) {
    t /= d;
    t--;
    return -c * (t * t * t * t - 1) + b;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function easeInOutQuart(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t * t + b;
    t -= 2;
    return -c / 2 * (t * t * t * t - 2) + b;
  },
  // accelerating from zero velocity
  easeInQuint: function easeInQuint(t, b, c, d) {
    t /= d;
    return c * t * t * t * t * t + b;
  },
  // decelerating to zero velocity
  easeOutQuint: function easeOutQuint(t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t * t * t + 1) + b;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuintfunction: function easeInOutQuintfunction(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t * t * t + 2) + b;
  },
  easeInSine: function easeInSine(t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  },
  easeOutSine: function easeOutSine(t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  },
  easeInOutSine: function easeInOutSine(t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  },
  easeInExpo: function easeInExpo(t, b, c, d) {
    return c * Math.pow(2, 10 * (t / d - 1)) + b;
  },
  easeOutExpo: function easeOutExpo(t, b, c, d) {
    return c * (-Math.pow(2, -10 * t / d) + 1) + b;
  },
  easeInOutExpo: function easeInOutExpo(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    t--;
    return c / 2 * (-Math.pow(2, -10 * t) + 2) + b;
  },
  easeInCirc: function easeInCirc(t, b, c, d) {
    t /= d;
    return -c * (Math.sqrt(1 - t * t) - 1) + b;
  },
  easeOutCirc: function easeOutCirc(t, b, c, d) {
    t /= d;
    t--;
    return c * Math.sqrt(1 - t * t) + b;
  },
  easeInOutCirc: function easeInOutCirc(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    t -= 2;
    return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/vuesax/components/vsAnchor/vsAnchor.vue


//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsAnchor = ({
  name: 'vs-anchor',
  props: {
    vsColor: {
      type: String,
      default: null
    },
    vsScroll: {
      type: String,
      default: 'body'
    },
    vsScrollLess: {
      type: [String, Number],
      default: 0
    },
    vsTime: {
      type: [String, Number],
      default: 500
    },
    vsMouseWheel: {
      type: Boolean,
      default: false
    },
    vsKeyboard: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      links: [],
      delta: true
    };
  },
  beforeDestroy: function beforeDestroy() {
    var el = document.querySelector(this.vsScroll);
    el.removeEventListener('scroll', this.scrollx);
    el.removeEventListener('mousewheel', this.mouseWheelx);
    window.removeEventListener('keyup', this.keyboardx);
  },
  mounted: function mounted() {
    var _this = this;

    var el = document.querySelector(_this.vsScroll);
    el.addEventListener('scroll', this.scrollx); //   // mouse wheel
    //   if(this.vsMouseWheel){
    //     el.addEventListener('mousewheel',this.mouseWheelx)
    //   }
    //   if(this.vsKeyboard){
    //     window.addEventListener('keyup',this.keyboardx)
    //   }
  },
  methods: {
    scrollx: function scrollx(e) {
      var colorear;

      for (var i = 0; i < this.links.length; i++) {
        var itemx = document.querySelector('#' + this.links[i].href);
        document.querySelector('#link-' + this.links[i].href).classList.remove('a-activox');

        if (e.target.scrollTop > itemx.offsetTop - 300) {
          colorear = document.querySelector('#link-' + this.links[i].href);
        }
      }

      colorear.classList.add('a-activox');
    },
    mouseWheelx: function mouseWheelx(e) {
      if (document.querySelector('.a-activox')) {
        var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
        console.dir(delta);

        if (this.delta) {
          if (delta == 1) {
            var estasLink = document.querySelector('.a-activox');

            if (estasLink.previousElementSibling) {
              this.irSection(estasLink.previousElementSibling.id.replace('link-', ''));
            }
          } else {
            var _estasLink = document.querySelector('.a-activox');

            if (_estasLink.nextElementSibling) {
              this.irSection(_estasLink.nextElementSibling.id.replace('link-', ''));
            }
          }
        }
      }
    },
    keyboardx: function keyboardx(e) {
      console.log("pasos");

      if (document.querySelector('.a-activox')) {
        if (this.delta) {
          if (e.code == 'ArrowUp') {
            var estasLink = document.querySelector('.a-activox');

            if (estasLink.previousElementSibling) {
              this.irSection(estasLink.previousElementSibling.id.replace('link-', ''));
            }
          } else if (e.code == 'ArrowDown') {
            var _estasLink2 = document.querySelector('.a-activox');

            if (_estasLink2.nextElementSibling) {
              this.irSection(_estasLink2.nextElementSibling.id.replace('link-', ''));
            }
          }
        }
      }
    },
    irSection: function irSection(idx) {
      var _this = this;

      _this.delta = false; // console.log(document.querySelector(this.vsScroll));

      var conx = document.getElementById(idx.replace('#', '')); // console.log(conx.offsetTop);

      scrollTo(document.querySelector(this.vsScroll), conx.offsetTop - this.vsScrollLess, this.vsTime);

      function scrollTo(element, to, duration) {
        var start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;
        console.log(start);

        var animateScroll = function animateScroll() {
          currentTime += increment;
          var val = easing.easeInOutCirc(currentTime, start, change, duration); // console.log(val);

          element.scrollTop = val;

          if (currentTime < duration) {
            var intervalx = setTimeout(animateScroll, increment);
          } else {
            _this.delta = true;
          }
        };

        animateScroll();
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3f5f8423","hasScoped":true,"optionsId":"1","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/vuesax/components/vsAnchor/vsAnchor.vue
var vsAnchor_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-vs-anchor"},[_c('ul',[_vm._t("default")],2)])}
var vsAnchor_staticRenderFns = []

// CONCATENATED MODULE: ./src/vuesax/components/vsAnchor/vsAnchor.vue
function vsAnchor_injectStyle (context) {
  __webpack_require__("WNAU")
}
/* script */


/* template */

/* template functional */
var vsAnchor___vue_template_functional__ = false
/* styles */
var vsAnchor___vue_styles__ = vsAnchor_injectStyle
/* scopeId */
var vsAnchor___vue_scopeId__ = "data-v-3f5f8423"
/* moduleIdentifier (server only) */
var vsAnchor___vue_module_identifier__ = null

var vsAnchor_Component = normalizeComponent(
  vsAnchor,
  vsAnchor_render,
  vsAnchor_staticRenderFns,
  vsAnchor___vue_template_functional__,
  vsAnchor___vue_styles__,
  vsAnchor___vue_scopeId__,
  vsAnchor___vue_module_identifier__
)

/* harmony default export */ var vsAnchor_vsAnchor = (vsAnchor_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/vuesax/components/vsAnchor/vsLink.vue


//
//
//
//
//
//
//
//

/* harmony default export */ var vsLink = ({
  name: 'vs-link',
  props: {
    vsHref: {
      type: String,
      default: '#'
    },
    vsText: {
      type: String,
      default: null
    },
    vsHoverTitle: {
      type: Boolean,
      default: null
    }
  },
  data: function data() {
    return {
      padreScroll: 'body',
      scrollLess: 0,
      time: 500
    };
  },
  mounted: function mounted() {
    this.padreScroll = this.$parent._props.vsScroll;
    this.scrollLess = this.$parent._props.vsScrollLess;
    this.time = this.$parent.$props.vsTime; // console.log(this.$parent._data);

    this.$parent._data.links.push({
      href: this.vsHref
    });
  },
  methods: {
    irSection: function irSection(idx) {
      console.log(document.querySelector(this.padreScroll));
      var conx = document.getElementById(idx.replace('#', ''));
      console.log(conx.offsetTop);
      scrollTo(document.querySelector(this.padreScroll), conx.offsetTop - this.scrollLess, this.time);

      function scrollTo(element, to, duration) {
        var start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;

        var animateScroll = function animateScroll() {
          currentTime += increment;
          var val = easing.easeInOutCirc(currentTime, start, change, duration); // console.log(val);

          element.scrollTop = val;

          if (currentTime < duration) {
            setTimeout(animateScroll, increment);
          }
        };

        animateScroll();
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-500d15e7","hasScoped":true,"optionsId":"1","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/vuesax/components/vsAnchor/vsLink.vue
var vsLink_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{class:{'no-hasta-hover':_vm.vsHoverTitle,'a-activox':this.$parent._data.links.length>0?this.$parent._data.links[0].href == _vm.vsHref:false,'sinTitle':!_vm.vsText},attrs:{"id":'link-'+_vm.vsHref},on:{"click":function($event){_vm.irSection(_vm.vsHref)}}},[_c('span',{staticClass:"spanx"},[_vm._v(_vm._s(_vm.vsText))])])}
var vsLink_staticRenderFns = []

// CONCATENATED MODULE: ./src/vuesax/components/vsAnchor/vsLink.vue
function vsLink_injectStyle (context) {
  __webpack_require__("J+Nn")
}
/* script */


/* template */

/* template functional */
var vsLink___vue_template_functional__ = false
/* styles */
var vsLink___vue_styles__ = vsLink_injectStyle
/* scopeId */
var vsLink___vue_scopeId__ = "data-v-500d15e7"
/* moduleIdentifier (server only) */
var vsLink___vue_module_identifier__ = null

var vsLink_Component = normalizeComponent(
  vsLink,
  vsLink_render,
  vsLink_staticRenderFns,
  vsLink___vue_template_functional__,
  vsLink___vue_styles__,
  vsLink___vue_scopeId__,
  vsLink___vue_module_identifier__
)

/* harmony default export */ var vsAnchor_vsLink = (vsLink_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/vuesax/components/vsAlert/vsAlert.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsAlert = ({
  name: 'vs-alert',
  props: {
    vsActive: {
      type: [Boolean, String],
      default: false
    },
    vsTitle: {
      type: String,
      default: null
    },
    vsClosable: {
      type: Boolean,
      default: false
    },
    vsColor: {
      type: String,
      default: null
    },
    vsMargin: {
      type: [String, Boolean],
      default: '10px'
    },
    vsIcon: {
      type: String,
      default: null
    }
  },
  created: function created() {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-750f39f4","hasScoped":true,"optionsId":"1","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/vuesax/components/vsAlert/vsAlert.vue
var vsAlert_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[(_vm.vsActive)?_c('div',{staticClass:"con-vs-alert",class:{
  'con-icon':_vm.vsIcon,
  },style:({
    'background':_vm.vsColor?/[#()]/.test(_vm.vsColor)?("rgba(" + (_vm.vsColor.replace(/[rgb()]/g,'')) + ",.1)"):("rgba(var(--" + _vm.vsColor + "),.1)"):'rgba(var(--primary),.1)',
    'color':_vm.vsColor?/[#()]/.test(_vm.vsColor)?_vm.vsColor:("rgba(var(--" + _vm.vsColor + "),1)"):'rgba(var(--primary),1)',
    'margin-top':_vm.vsMargin,
    'margin-bottom':_vm.vsMargin,
    })},[(_vm.vsIcon)?_c('i',{staticClass:"material-icons icon-alert"},[_vm._v(_vm._s(_vm.vsIcon))]):_vm._e(),(_vm.vsClosable)?_c('div',{staticClass:"con-x",on:{"click":function($event){_vm.$emit('update:vsActive',false)}}},[_c('i',{staticClass:"material-icons"},[_vm._v("close")])]):_vm._e(),(_vm.vsTitle)?_c('h3',{staticClass:"titlex"},[_vm._v(_vm._s(_vm.vsTitle))]):_vm._e(),_c('div',{staticClass:"vs-alert"},[_vm._t("default")],2)]):_vm._e()])}
var vsAlert_staticRenderFns = []

// CONCATENATED MODULE: ./src/vuesax/components/vsAlert/vsAlert.vue
function vsAlert_injectStyle (context) {
  __webpack_require__("lDMd")
}
/* script */


/* template */

/* template functional */
var vsAlert___vue_template_functional__ = false
/* styles */
var vsAlert___vue_styles__ = vsAlert_injectStyle
/* scopeId */
var vsAlert___vue_scopeId__ = "data-v-750f39f4"
/* moduleIdentifier (server only) */
var vsAlert___vue_module_identifier__ = null

var vsAlert_Component = normalizeComponent(
  vsAlert,
  vsAlert_render,
  vsAlert_staticRenderFns,
  vsAlert___vue_template_functional__,
  vsAlert___vue_styles__,
  vsAlert___vue_scopeId__,
  vsAlert___vue_module_identifier__
)

/* harmony default export */ var vsAlert_vsAlert = (vsAlert_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/vuesax/layout/vsRow.vue
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsRow = ({
  name: 'vs-row',
  props: {
    vsType: {
      type: String
    },
    vsW: {
      type: [Number, String],
      default: 12
    },
    vsJustify: {
      type: String,
      default: null
    },
    vsAlign: {
      type: String,
      default: null
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5551cb28","hasScoped":false,"optionsId":"1","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/vuesax/layout/vsRow.vue
var vsRow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-row",style:({
  'align-items':_vm.vsAlign,
  'justify-content':_vm.vsJustify,
  'display':_vm.vsType,
  'width':_vm.vsW*100/12+'%'})},[_vm._t("default")],2)}
var vsRow_staticRenderFns = []

// CONCATENATED MODULE: ./src/vuesax/layout/vsRow.vue
function vsRow_injectStyle (context) {
  __webpack_require__("FKwx")
}
/* script */


/* template */

/* template functional */
var vsRow___vue_template_functional__ = false
/* styles */
var vsRow___vue_styles__ = vsRow_injectStyle
/* scopeId */
var vsRow___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var vsRow___vue_module_identifier__ = null

var vsRow_Component = normalizeComponent(
  vsRow,
  vsRow_render,
  vsRow_staticRenderFns,
  vsRow___vue_template_functional__,
  vsRow___vue_styles__,
  vsRow___vue_scopeId__,
  vsRow___vue_module_identifier__
)

/* harmony default export */ var layout_vsRow = (vsRow_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/vuesax/layout/vsCol.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsCol = ({
  name: 'vs-col',
  props: {
    vsW: {
      type: [Number, String],
      default: 12
    },
    vsXs: {
      type: [Number, String],
      default: ''
    },
    vsSm: {
      type: [Number, String],
      default: ''
    },
    vsLg: {
      type: [Number, String],
      default: ''
    },
    vsOffset: {
      type: [Number, String],
      default: 0
    },
    vsType: {
      type: String,
      default: null
    },
    vsJustify: {
      type: String,
      default: null
    },
    vsAlign: {
      type: String,
      default: null
    },
    vsOrder: {
      type: [String, Number]
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-34831898","hasScoped":true,"optionsId":"1","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/vuesax/layout/vsCol.vue
var vsCol_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-col",class:[
    'vs-xs-'+_vm.vsXs,
    'vs-sm-'+_vm.vsSm,
    'vs-lg-'+_vm.vsLg ],style:({
   'order':_vm.vsOrder,
   'justify-content':_vm.vsJustify,
   'display':_vm.vsType,
   'align-items':_vm.vsAlign,
   'margin-left':_vm.vsOffset*100/12+'%',
   'width':_vm.vsW*100/12+'%'})},[_vm._t("default")],2)}
var vsCol_staticRenderFns = []

// CONCATENATED MODULE: ./src/vuesax/layout/vsCol.vue
function vsCol_injectStyle (context) {
  __webpack_require__("H9VJ")
}
/* script */


/* template */

/* template functional */
var vsCol___vue_template_functional__ = false
/* styles */
var vsCol___vue_styles__ = vsCol_injectStyle
/* scopeId */
var vsCol___vue_scopeId__ = "data-v-34831898"
/* moduleIdentifier (server only) */
var vsCol___vue_module_identifier__ = null

var vsCol_Component = normalizeComponent(
  vsCol,
  vsCol_render,
  vsCol_staticRenderFns,
  vsCol___vue_template_functional__,
  vsCol___vue_styles__,
  vsCol___vue_scopeId__,
  vsCol___vue_module_identifier__
)

/* harmony default export */ var layout_vsCol = (vsCol_Component.exports);

// CONCATENATED MODULE: ./src/vuesax/utils/theme.js



/* harmony default export */ var theme = ({
  name: 'theme',
  vsfunction: function vsfunction(json) {
    console.log(json);

    for (var clave in json) {
      var colorx = void 0;

      if (/^[rgb(]/g.test(json[clave])) {
        colorx = json[clave].replace(/[rgb()]/g, '');
      } else if (/[#]/g.test(json[clave])) {
        var rgbx = color.hexToRgb(json[clave]); // console.log(rgbx);

        colorx = "".concat(rgbx.r, ",").concat(rgbx.g, ",").concat(rgbx.b);
      } else {
        colorx = json[clave];
      }

      color.setCssVariable('--' + clave, colorx);
    }
  }
});
// CONCATENATED MODULE: ./src/vuesax/components/index.js
















 // nuevos si terminar






 //layout


 //theme


var vsComponents = {
  vsButton: vsButton_vsButton,
  vsSelect: vsSelect_vsSelect,
  vsSwitch: vsSwitch_vsSwitch,
  vsCheckbox: vsCheckBox_vsCheckBox,
  vsRadio: vsRadio_vsRadio,
  vsInput: vsInput_vsInput,
  vsTabs: vsTabs_vsTabs,
  vsTab: vsTabs_vsTab,
  vsSlider: vsSlider_vsSlider,
  vsInputNumber: vsInputNumber_vsInputNumber,
  vsUpload: vsUpload_vsUpload,
  //nuevos sin terminar
  vsPopup: vsPopup_vsPopup,
  vsDropdown: vsDropDown_vsDropDown,
  vsDropdownItem: vsDropDown_vsDropDownItem,
  vsAnchor: vsAnchor_vsAnchor,
  vsLink: vsAnchor_vsLink,
  vsAlert: vsAlert_vsAlert,
  //layout
  vsRow: layout_vsRow,
  vsCol: layout_vsCol
};
var vsFunctions = {
  vsNotifications: vsNotifications_vsNotifications,
  message: message,
  confirm: vsMessageBox_confirm,
  prompt: vsMessageBox_prompt,
  vsLoading: vsLoading_vsLoading,
  vsLoadingClose: vsLoadingClose,
  vsTheme: theme
};
// EXTERNAL MODULE: ./src/vuesax/directives/vsTooltip/vsTooltip.css
var vsTooltip = __webpack_require__("9XcI");
var vsTooltip_default = /*#__PURE__*/__webpack_require__.n(vsTooltip);

// CONCATENATED MODULE: ./src/vuesax/directives/vsTooltip/vsTooltip.js


/* harmony default export */ var vsTooltip_vsTooltip = ({
  update: function update(el, binding, vnode) {
    // console.log("el=>",el);
    // console.log("binding=>",binding);
    // console.log('vnode=>',vnode);
    var valuex = null;
    var keyx = el.dataset.keyx;

    if (typeof_default()(binding.value) == 'object') {
      valuex = binding.value.text;
    } else if (typeof binding.value == 'string') {
      valuex = binding.value;
    }

    var tooltipx = document.querySelector('.' + keyx);

    if (tooltipx) {
      tooltipx.innerHTML = "\n      <p>\n        ".concat(valuex, "\n      </p>\n      ");
    }
  },
  inserted: function inserted(el, binding, vnode) {
    var ramdomx = Math.floor(Math.random() * 1000 + 1);
    el.dataset.keyx = 'vs-tooltip' + ramdomx; // console.log("el=>",el);
    // console.log("binding=>",binding);
    // console.log('vnode=>',vnode);

    var delayx = 0;
    var valuex = null;
    var colorx = 'rgb(70, 70, 70)';
    var active = true;

    if (typeof_default()(binding.value) == 'object') {
      valuex = binding.value.text; // if(binding.value.hasOwnProperty('delay')){

      delayx = binding.value.delay || 0; // }
      // if(binding.value.hasOwnProperty('color')){

      colorx = binding.value.color ? /[#()]/.test(binding.value.color) ? binding.value.color : "rgb(var(--".concat(binding.value.color, "))") : 'rgb(70, 70, 70)'; // }
    } else if (typeof binding.value == 'string') {
      valuex = binding.value;
    }

    el.classList.add('vs-tooltipx');
    var tooltipx = document.createElement("div");
    tooltipx.classList = 'vs-tooltip';

    if (typeof_default()(binding.value) == 'object') {
      if (binding.value.hasOwnProperty('position')) {
        tooltipx.classList.add('vs-tooltip-' + binding.value.position);
      }
    }

    tooltipx.classList.add('vs-tooltip' + ramdomx);
    tooltipx.innerHTML = "\n      <p>\n      ".concat(valuex, "\n      </p>\n    ");
    tooltipx.style.background = colorx;

    var mouseEnterx = function mouseEnterx(event) {
      var coords = event.toElement.getBoundingClientRect();
      document.body.insertBefore(tooltipx, document.body.firstChild);

      if (typeof_default()(binding.value) == 'object') {
        if (binding.value.position == 'left') {
          tooltipx.style.top = coords.top + event.target.clientHeight + 'px';
          tooltipx.style.left = coords.left - (tooltipx.clientWidth + 8) + 'px';
        } else if (binding.value.position == 'right') {
          tooltipx.style.top = coords.top + event.target.clientHeight + 'px';
          tooltipx.style.left = coords.left + (event.target.clientWidth + 8) + 'px';
        } else if (binding.value.position == 'bottom') {
          tooltipx.style.top = coords.top + (event.target.clientHeight * 2 + 5) + 'px';
          tooltipx.style.left = coords.left - (tooltipx.clientWidth / 2 - event.target.clientWidth / 2) + 'px';
        } else if (binding.value.position == 'top' || binding.value.position == undefined) {
          tooltipx.style.top = coords.top + 'px';
          tooltipx.style.left = coords.left - (tooltipx.clientWidth / 2 - event.target.clientWidth / 2) + 'px';
        }
      } else {
        tooltipx.style.top = coords.top + 'px';
        tooltipx.style.left = coords.left - (tooltipx.clientWidth / 2 - event.target.clientWidth / 2) + 'px';
      }

      setTimeout(function () {
        tooltipx.style.transform = "translateY(calc(-100% - 7px))";
        tooltipx.style.opacity = '1';
        el.removeEventListener('mouseEnterx', mouseEnterx, false);
      }, delayx);
      el.addEventListener('mouseleave', mousex);
    };

    el.addEventListener('mouseenter', mouseEnterx);

    var mousex = function mousex(event) {
      var coords = event.toElement.getBoundingClientRect();
      tooltipx.style.transform = "translateY(-90%)";
      tooltipx.style.opacity = '0';
      setTimeout(function () {
        if (document.querySelector('.vs-tooltip' + ramdomx)) {
          document.querySelector('.vs-tooltip' + ramdomx).remove();
          el.removeEventListener('mouseleave', mousex, false);
        }
      }, 200);
      el.addEventListener('mouseEnterx', mouseEnterx, false);
    };

    el.addEventListener('mouseleave', mousex); //window scroll

    window.addEventListener('mousewheel', function (e) {
      if (document.querySelector('.vs-tooltip' + ramdomx)) {
        tooltipx.style.transform = "translateY(-90%)";
        tooltipx.style.opacity = '0';
        setTimeout(function () {
          if (document.querySelector('.vs-tooltip' + ramdomx)) {
            document.querySelector('.vs-tooltip' + ramdomx).remove();
            el.removeEventListener('mouseleave', mousex, false);
          }
        }, 200);
        el.addEventListener('mouseEnterx', mouseEnterx, false);
      }
    });
    window.addEventListener('touchmove', function (e) {
      if (document.querySelector('.vs-tooltip' + ramdomx)) {
        tooltipx.style.transform = "translateY(-90%)";
        tooltipx.style.opacity = '0';
        setTimeout(function () {
          if (document.querySelector('.vs-tooltip' + ramdomx)) {
            document.querySelector('.vs-tooltip' + ramdomx).remove();
            el.removeEventListener('mouseleave', mousex, false);
          }
        }, 200);
        el.addEventListener('mouseEnterx', mouseEnterx, false);
      }
    });
  }
});
// CONCATENATED MODULE: ./src/vuesax/index.js









var Vuesax = {
  theme: {
    "primary-color": 'rgb(51, 186, 77)'
  },
  install: function install(Vue, options) {
    Object.values(vsComponents).forEach(function (vsComponent) {
      Vue.component(vsComponent.name, vsComponent);
    });
    Vue.prototype.$vs = {};
    Object.values(vsFunctions).forEach(function (vsFunctions) {
      if (vsFunctions.hasOwnProperty('subName')) {
        Vue.prototype.$vs[vsFunctions.name][vsFunctions.subName] = vsFunctions.vsfunction;
      } else {
        Vue.prototype.$vs[vsFunctions.name] = vsFunctions.vsfunction;
      }
    });
    Vue.prototype.$vs.easing = easing;
    Vue.directive('tooltip', vsTooltip_vsTooltip);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vuesax);
}

/* harmony default export */ var vuesax = __webpack_exports__["default"] = (Vuesax);

/***/ }),

/***/ "z6KV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "zJ3u":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("ArFY");
var createDesc = __webpack_require__("WXTh");
var toIObject = __webpack_require__("2pBh");
var toPrimitive = __webpack_require__("dsxj");
var has = __webpack_require__("0fJi");
var IE8_DOM_DEFINE = __webpack_require__("LdQc");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("uVaM") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "zUQ1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("yTKW");
var step = __webpack_require__("0IjE");
var Iterators = __webpack_require__("6dI7");
var toIObject = __webpack_require__("2pBh");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("SJuQ")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "zxEQ":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__("2pBh");
var $getOwnPropertyDescriptor = __webpack_require__("zJ3u").f;

__webpack_require__("NNsH")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ })

/******/ })["default"];
//# sourceMappingURL=vuesax.common.js.map