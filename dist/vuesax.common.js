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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00b4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var $ = __webpack_require__("23e7");
var call = __webpack_require__("c65b");
var isCallable = __webpack_require__("1626");
var anObject = __webpack_require__("825a");
var toString = __webpack_require__("577e");

var DELEGATES_TO_EXEC = function () {
  var execCalled = false;
  var re = /[ac]/;
  re.exec = function () {
    execCalled = true;
    return /./.exec.apply(this, arguments);
  };
  return re.test('abc') === true && execCalled;
}();

var nativeTest = /./.test;

// `RegExp.prototype.test` method
// https://tc39.es/ecma262/#sec-regexp.prototype.test
$({ target: 'RegExp', proto: true, forced: !DELEGATES_TO_EXEC }, {
  test: function (S) {
    var R = anObject(this);
    var string = toString(S);
    var exec = R.exec;
    if (!isCallable(exec)) return call(nativeTest, R, string);
    var result = call(exec, R, string);
    if (result === null) return false;
    anObject(result);
    return true;
  }
});


/***/ }),

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("4625");
var aCallable = __webpack_require__("59ed");
var NATIVE_BIND = __webpack_require__("40d5");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "04d1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var userAgent = __webpack_require__("342f");

var firefox = userAgent.match(/firefox\/(\d+)/i);

module.exports = !!firefox && +firefox[1];


/***/ }),

/***/ "04f8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("2d00");
var fails = __webpack_require__("d039");
var global = __webpack_require__("da84");

var $String = global.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof = __webpack_require__("c6b6");
var toIndexedObject = __webpack_require__("fc6a");
var $getOwnPropertyNames = __webpack_require__("241c").f;
var arraySlice = __webpack_require__("f36a");

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) === 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var call = __webpack_require__("c65b");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPropertyKey = __webpack_require__("a04b");
var hasOwn = __webpack_require__("1a2d");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "07ac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $values = __webpack_require__("6f53").values;

// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ }),

/***/ "07fa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toLength = __webpack_require__("50c4");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "083a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tryToString = __webpack_require__("0d51");

var $TypeError = TypeError;

module.exports = function (O, P) {
  if (!delete O[P]) throw new $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
};


/***/ }),

/***/ "0b42":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray = __webpack_require__("e8b5");
var isConstructor = __webpack_require__("68ee");
var isObject = __webpack_require__("861d");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};


/***/ }),

/***/ "0b43":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_SYMBOL = __webpack_require__("04f8");

/* eslint-disable es/no-symbol -- safe */
module.exports = NATIVE_SYMBOL && !!Symbol['for'] && !!Symbol.keyFor;


/***/ }),

/***/ "0cb2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var toObject = __webpack_require__("7b0b");

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
// eslint-disable-next-line redos/no-vulnerable -- safe
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ "0d51":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "107c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");
var global = __webpack_require__("da84");

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),

/***/ "1148":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__("5926");
var toString = __webpack_require__("577e");
var requireObjectCoercible = __webpack_require__("1d80");

var $RangeError = RangeError;

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toIntegerOrInfinity(count);
  if (n < 0 || n === Infinity) throw new $RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "1276":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("c65b");
var uncurryThis = __webpack_require__("e330");
var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var isNullOrUndefined = __webpack_require__("7234");
var requireObjectCoercible = __webpack_require__("1d80");
var speciesConstructor = __webpack_require__("4840");
var advanceStringIndex = __webpack_require__("8aa5");
var toLength = __webpack_require__("50c4");
var toString = __webpack_require__("577e");
var getMethod = __webpack_require__("dc4a");
var regExpExec = __webpack_require__("14c3");
var stickyHelpers = __webpack_require__("9f7f");
var fails = __webpack_require__("d039");

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var push = uncurryThis([].push);
var stringSlice = uncurryThis(''.slice);

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

var BUGGY = 'abbc'.split(/(b)*/)[1] === 'c' ||
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  'test'.split(/(?:)/, -1).length !== 4 ||
  'ab'.split(/(?:ab)*/).length !== 2 ||
  '.'.split(/(.?)(.?)/).length !== 4 ||
  // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
  '.'.split(/()()/).length > 1 ||
  ''.split(/.?/).length;

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit = '0'.split(undefined, 0).length ? function (separator, limit) {
    return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
  } : nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = isNullOrUndefined(separator) ? undefined : getMethod(separator, SPLIT);
      return splitter
        ? call(splitter, separator, O, limit)
        : call(internalSplit, toString(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject(this);
      var S = toString(string);

      if (!BUGGY) {
        var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
        if (res.done) return res.value;
      }

      var C = speciesConstructor(rx, RegExp);
      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');
      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return regExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = regExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push(A, stringSlice(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push(A, stringSlice(S, p));
      return A;
    }
  ];
}, BUGGY || !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);


/***/ }),

/***/ "129f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x !== x && y !== y;
};


/***/ }),

/***/ "13d2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");
var hasOwn = __webpack_require__("1a2d");
var DESCRIPTORS = __webpack_require__("83ab");
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__("5e77").CONFIGURABLE;
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ "13d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $reduce = __webpack_require__("d58f").left;
var arrayMethodIsStrict = __webpack_require__("a640");
var CHROME_VERSION = __webpack_require__("2d00");
var IS_NODE = __webpack_require__("605d");

// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduce');

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: FORCED }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("c65b");
var anObject = __webpack_require__("825a");
var isCallable = __webpack_require__("1626");
var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

var $TypeError = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw new $TypeError('RegExp#exec called on incompatible receiver');
};


/***/ }),

/***/ "14d9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var lengthOfArrayLike = __webpack_require__("07fa");
var setArrayLength = __webpack_require__("3a34");
var doesNotExceedSafeInteger = __webpack_require__("3511");
var fails = __webpack_require__("d039");

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


/***/ }),

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var DOMTokenListPrototype = __webpack_require__("785a");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ "1626":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "1787":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__("861d");

module.exports = function (argument) {
  return isObject(argument) || argument === null;
};


/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var arrayMethodIsStrict = __webpack_require__("a640");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "1a2d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var toObject = __webpack_require__("7b0b");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  try {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  } catch (error) { return false; } // workaround of old WebKit + `eval` bug
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1d80":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isNullOrUndefined = __webpack_require__("7234");

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__("5926");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var defineBuiltIn = __webpack_require__("cb2d");
var defineGlobalProperty = __webpack_require__("6374");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = global[TARGET] && global[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "2532":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var uncurryThis = __webpack_require__("e330");
var notARegExp = __webpack_require__("5a34");
var requireObjectCoercible = __webpack_require__("1d80");
var toString = __webpack_require__("577e");
var correctIsRegExpLogic = __webpack_require__("ab13");

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});


/***/ }),

/***/ "25f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PROPER_FUNCTION_NAME = __webpack_require__("5e77").PROPER;
var defineBuiltIn = __webpack_require__("cb2d");
var anObject = __webpack_require__("825a");
var $toString = __webpack_require__("577e");
var fails = __webpack_require__("d039");
var getRegExpFlags = __webpack_require__("90d8");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) !== '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name !== TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn(RegExpPrototype, TO_STRING, function toString() {
    var R = anObject(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}


/***/ }),

/***/ "2626":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var defineBuiltInAccessor = __webpack_require__("edd0");
var wellKnownSymbol = __webpack_require__("b622");
var DESCRIPTORS = __webpack_require__("83ab");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineBuiltInAccessor(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "2a62":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("c65b");
var anObject = __webpack_require__("825a");
var getMethod = __webpack_require__("dc4a");

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ "2af1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var sign = __webpack_require__("f748");

// `Math.sign` method
// https://tc39.es/ecma262/#sec-math.sign
$({ target: 'Math', stat: true }, {
  sign: sign
});


/***/ }),

/***/ "2ba4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__("40d5");

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ "2c3e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var MISSED_STICKY = __webpack_require__("9f7f").MISSED_STICKY;
var classof = __webpack_require__("c6b6");
var defineBuiltInAccessor = __webpack_require__("edd0");
var getInternalState = __webpack_require__("69f3").get;

var RegExpPrototype = RegExp.prototype;
var $TypeError = TypeError;

// `RegExp.prototype.sticky` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky
if (DESCRIPTORS && MISSED_STICKY) {
  defineBuiltInAccessor(RegExpPrototype, 'sticky', {
    configurable: true,
    get: function sticky() {
      if (this === RegExpPrototype) return;
      // We can't use InternalStateModule.getterFor because
      // we don't add metadata for regexps created by a literal.
      if (classof(this) === 'RegExp') {
        return !!getInternalState(this).sticky;
      }
      throw new $TypeError('Incompatible receiver, RegExp required');
    }
  });
}


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';


/***/ }),

/***/ "3511":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__("f5df");
var getMethod = __webpack_require__("dc4a");
var isNullOrUndefined = __webpack_require__("7234");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("aed9");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var toIndexedObject = __webpack_require__("fc6a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "3a34":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var isArray = __webpack_require__("e8b5");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw new $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ "3a9b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isPossiblePrototype = __webpack_require__("1787");

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;
var toString = __webpack_require__("577e");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("c6d2");
var createIterResultObject = __webpack_require__("4754");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return createIterResultObject(undefined, true);
  point = charAt(string, index);
  state.index += point.length;
  return createIterResultObject(point, false);
});


/***/ }),

/***/ "3f8c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = {};


/***/ }),

/***/ "408a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = uncurryThis(1.0.valueOf);


/***/ }),

/***/ "40d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var defineProperty = __webpack_require__("9bf2").f;

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] === undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__("861d");
var classof = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) === 'RegExp');
};


/***/ }),

/***/ "4625":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classofRaw = __webpack_require__("c6b6");
var uncurryThis = __webpack_require__("e330");

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ }),

/***/ "4754":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};


/***/ }),

/***/ "4840":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");
var aConstructor = __webpack_require__("5087");
var isNullOrUndefined = __webpack_require__("7234");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
};


/***/ }),

/***/ "485a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("c65b");
var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "498a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $trim = __webpack_require__("58a8").trim;
var forcedStringTrimMethod = __webpack_require__("c8d2");

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "4d63":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var uncurryThis = __webpack_require__("e330");
var isForced = __webpack_require__("94ca");
var inheritIfRequired = __webpack_require__("7156");
var createNonEnumerableProperty = __webpack_require__("9112");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var isPrototypeOf = __webpack_require__("3a9b");
var isRegExp = __webpack_require__("44e7");
var toString = __webpack_require__("577e");
var getRegExpFlags = __webpack_require__("90d8");
var stickyHelpers = __webpack_require__("9f7f");
var proxyAccessor = __webpack_require__("aeb0");
var defineBuiltIn = __webpack_require__("cb2d");
var fails = __webpack_require__("d039");
var hasOwn = __webpack_require__("1a2d");
var enforceInternalState = __webpack_require__("69f3").enforce;
var setSpecies = __webpack_require__("2626");
var wellKnownSymbol = __webpack_require__("b622");
var UNSUPPORTED_DOT_ALL = __webpack_require__("fce3");
var UNSUPPORTED_NCG = __webpack_require__("107c");

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var SyntaxError = global.SyntaxError;
var exec = uncurryThis(RegExpPrototype.exec);
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);
// TODO: Use only proper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var BASE_FORCED = DESCRIPTORS &&
  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function () {
    re2[MATCH] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) !== re1 || NativeRegExp(re2) === re2 || String(NativeRegExp(re1, 'i')) !== '/a/i';
  }));

var handleDotAll = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var brackets = false;
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      result += chr + charAt(string, ++index);
      continue;
    }
    if (!brackets && chr === '.') {
      result += '[\\s\\S]';
    } else {
      if (chr === '[') {
        brackets = true;
      } else if (chr === ']') {
        brackets = false;
      } result += chr;
    }
  } return result;
};

var handleNCG = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var named = [];
  var names = create(null);
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = '';
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      chr += charAt(string, ++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;
      case chr === '(':
        if (exec(IS_NCG, stringSlice(string, index + 1))) {
          index += 2;
          ncg = true;
        }
        result += chr;
        groupid++;
        continue;
      case chr === '>' && ncg:
        if (groupname === '' || hasOwn(names, groupname)) {
          throw new SyntaxError('Invalid capture group name');
        }
        names[groupname] = true;
        named[named.length] = [groupname, groupid];
        ncg = false;
        groupname = '';
        continue;
    }
    if (ncg) groupname += chr;
    else result += chr;
  } return [result, named];
};

// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (isForced('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = isPrototypeOf(RegExpPrototype, this);
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || isPrototypeOf(RegExpPrototype, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = getRegExpFlags(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString(pattern);
    flags = flags === undefined ? '' : toString(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf(flags, 's') > -1;
      if (dotAll) flags = replace(flags, /s/g, '');
    }

    rawFlags = flags;

    if (MISSED_STICKY && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf(flags, 'y') > -1;
      if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, '');
    }

    if (UNSUPPORTED_NCG) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState(result);
      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }
      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) { /* empty */ }

    return result;
  };

  for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
    proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
  }

  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  defineBuiltIn(global, 'RegExp', RegExpWrapper, { constructor: true });
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var toAbsoluteIndex = __webpack_require__("23cb");
var lengthOfArrayLike = __webpack_require__("07fa");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $filter = __webpack_require__("b727").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("0366");
var call = __webpack_require__("c65b");
var toObject = __webpack_require__("7b0b");
var callWithSafeIterationClosing = __webpack_require__("9bdd");
var isArrayIteratorMethod = __webpack_require__("e95a");
var isConstructor = __webpack_require__("68ee");
var lengthOfArrayLike = __webpack_require__("07fa");
var createProperty = __webpack_require__("8418");
var getIterator = __webpack_require__("9a1f");
var getIteratorMethod = __webpack_require__("35a1");

var $Array = Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
    result = IS_CONSTRUCTOR ? new this() : [];
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    for (;!(step = call(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "4e82":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var uncurryThis = __webpack_require__("e330");
var aCallable = __webpack_require__("59ed");
var toObject = __webpack_require__("7b0b");
var lengthOfArrayLike = __webpack_require__("07fa");
var deletePropertyOrThrow = __webpack_require__("083a");
var toString = __webpack_require__("577e");
var fails = __webpack_require__("d039");
var internalSort = __webpack_require__("addb");
var arrayMethodIsStrict = __webpack_require__("a640");
var FF = __webpack_require__("04d1");
var IE_OR_EDGE = __webpack_require__("d998");
var V8 = __webpack_require__("2d00");
var WEBKIT = __webpack_require__("512c");

var test = [];
var nativeSort = uncurryThis(test.sort);
var push = uncurryThis(test.push);

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT = !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }

  test.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString(x) > toString(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);

    var array = toObject(this);

    if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push(items, array[index]);
    }

    internalSort(items, getSortCompare(comparefn));

    itemsLength = lengthOfArrayLike(items);
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) deletePropertyOrThrow(array, index++);

    return array;
  }
});


/***/ }),

/***/ "5087":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isConstructor = __webpack_require__("68ee");
var tryToString = __webpack_require__("0d51");

var $TypeError = TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__("5926");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "512c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var userAgent = __webpack_require__("342f");

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

module.exports = !!webkit && +webkit[1];


/***/ }),

/***/ "5319":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__("2ba4");
var call = __webpack_require__("c65b");
var uncurryThis = __webpack_require__("e330");
var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var fails = __webpack_require__("d039");
var anObject = __webpack_require__("825a");
var isCallable = __webpack_require__("1626");
var isNullOrUndefined = __webpack_require__("7234");
var toIntegerOrInfinity = __webpack_require__("5926");
var toLength = __webpack_require__("50c4");
var toString = __webpack_require__("577e");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var getMethod = __webpack_require__("dc4a");
var getSubstitution = __webpack_require__("0cb2");
var regExpExec = __webpack_require__("14c3");
var wellKnownSymbol = __webpack_require__("b622");

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      var fullUnicode;
      if (global) {
        fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }

      var results = [];
      var result;
      while (true) {
        result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        var replacement;
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }

      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var store = __webpack_require__("c6cd");

module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var uncurryThis = __webpack_require__("e330");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "577e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__("f5df");

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ "57b9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("c65b");
var getBuiltIn = __webpack_require__("d066");
var wellKnownSymbol = __webpack_require__("b622");
var defineBuiltIn = __webpack_require__("cb2d");

module.exports = function () {
  var Symbol = getBuiltIn('Symbol');
  var SymbolPrototype = Symbol && Symbol.prototype;
  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
    // eslint-disable-next-line no-unused-vars -- required for .length
    defineBuiltIn(SymbolPrototype, TO_PRIMITIVE, function (hint) {
      return call(valueOf, this);
    }, { arity: 1 });
  }
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var requireObjectCoercible = __webpack_require__("1d80");
var toString = __webpack_require__("577e");
var whitespaces = __webpack_require__("5899");

var replace = uncurryThis(''.replace);
var ltrim = RegExp('^[' + whitespaces + ']+');
var rtrim = RegExp('(^|[^' + whitespaces + '])[' + whitespaces + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '$1');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5926":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var trunc = __webpack_require__("b42e");

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ "59ed":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__("1626");
var tryToString = __webpack_require__("0d51");

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "5a34":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isRegExp = __webpack_require__("44e7");

var $TypeError = TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw new $TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "5a47":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var NATIVE_SYMBOL = __webpack_require__("04f8");
var fails = __webpack_require__("d039");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var toObject = __webpack_require__("7b0b");

// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FORCED = !NATIVE_SYMBOL || fails(function () { getOwnPropertySymbolsModule.f(1); });

// `Object.getOwnPropertySymbols` method
// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
$({ target: 'Object', stat: true, forced: FORCED }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject(it)) : [];
  }
});


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5e77":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var hasOwn = __webpack_require__("1a2d");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "605d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var classof = __webpack_require__("c6b6");

module.exports = classof(global.process) === 'process';


/***/ }),

/***/ "6374":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var toIntegerOrInfinity = __webpack_require__("5926");
var toString = __webpack_require__("577e");
var requireObjectCoercible = __webpack_require__("1d80");

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var arraySpeciesConstructor = __webpack_require__("0b42");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "68ee":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");
var classof = __webpack_require__("f5df");
var getBuiltIn = __webpack_require__("d066");
var inspectSource = __webpack_require__("8925");

var noop = function () { /* empty */ };
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, [], argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_WEAK_MAP = __webpack_require__("cdce");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var hasOwn = __webpack_require__("1a2d");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6f53":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var uncurryThis = __webpack_require__("e330");
var objectGetPrototypeOf = __webpack_require__("e163");
var objectKeys = __webpack_require__("df75");
var toIndexedObject = __webpack_require__("fc6a");
var $propertyIsEnumerable = __webpack_require__("d1e7").f;

var propertyIsEnumerable = uncurryThis($propertyIsEnumerable);
var push = uncurryThis([].push);

// in some IE versions, `propertyIsEnumerable` returns incorrect result on integer keys
// of `null` prototype objects
var IE_BUG = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-create -- safe
  var O = Object.create(null);
  O[2] = 2;
  return !propertyIsEnumerable(O, 2);
});

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var IE_WORKAROUND = IE_BUG && objectGetPrototypeOf(O) === null;
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || (IE_WORKAROUND ? key in O : propertyIsEnumerable(O, key))) {
        push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "71a1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vsRow_vue_vue_type_style_index_0_id_517f8bed_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9f6e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vsRow_vue_vue_type_style_index_0_id_517f8bed_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vsRow_vue_vue_type_style_index_0_id_517f8bed_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7234":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ "7282":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var aCallable = __webpack_require__("59ed");

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "7839":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "785a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__("cc12");

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var requireObjectCoercible = __webpack_require__("1d80");

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__("825a");
var definePropertiesModule = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__("861d");

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
  else object[key] = value;
};


/***/ }),

/***/ "841c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("c65b");
var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var isNullOrUndefined = __webpack_require__("7234");
var requireObjectCoercible = __webpack_require__("1d80");
var sameValue = __webpack_require__("129f");
var toString = __webpack_require__("577e");
var getMethod = __webpack_require__("dc4a");
var regExpExec = __webpack_require__("14c3");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, SEARCH);
      return searcher ? call(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeSearch, rx, S);

      if (res.done) return res.value;

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "857a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var requireObjectCoercible = __webpack_require__("1d80");
var toString = __webpack_require__("577e");

var quot = /"/g;
var replace = uncurryThis(''.replace);

// `CreateHTML` abstract operation
// https://tc39.es/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = toString(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + replace(toString(value), quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "8600":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "861d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__("1626");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var isCallable = __webpack_require__("1626");
var store = __webpack_require__("c6cd");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "90d8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("c65b");
var hasOwn = __webpack_require__("1a2d");
var isPrototypeOf = __webpack_require__("3a9b");
var regExpFlags = __webpack_require__("ad6d");

var RegExpPrototype = RegExp.prototype;

module.exports = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype, R)
    ? call(regExpFlags, R) : flags;
};


/***/ }),

/***/ "90e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = __webpack_require__("c65b");
var uncurryThis = __webpack_require__("e330");
var toString = __webpack_require__("577e");
var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");
var shared = __webpack_require__("5692");
var create = __webpack_require__("7c73");
var getInternalState = __webpack_require__("69f3").get;
var UNSUPPORTED_DOT_ALL = __webpack_require__("fce3");
var UNSUPPORTED_NCG = __webpack_require__("107c");

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice(match.input, charsAdded);
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var lengthOfArrayLike = __webpack_require__("07fa");
var doesNotExceedSafeInteger = __webpack_require__("3511");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "99c0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9a1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("c65b");
var aCallable = __webpack_require__("59ed");
var anObject = __webpack_require__("825a");
var tryToString = __webpack_require__("0d51");
var getIteratorMethod = __webpack_require__("35a1");

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");
var iteratorClose = __webpack_require__("2a62");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("aed9");
var anObject = __webpack_require__("825a");
var toPropertyKey = __webpack_require__("a04b");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9ca4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vsCol_vue_vue_type_style_index_0_id_61c2982a_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8600");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vsCol_vue_vue_type_style_index_0_id_61c2982a_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vsCol_vue_vue_type_style_index_0_id_61c2982a_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "9f6e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");
var global = __webpack_require__("da84");

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

var UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') !== null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  return !$RegExp('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') !== null;
});

module.exports = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y
};


/***/ }),

/***/ "a04b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var isSymbol = __webpack_require__("d9b5");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "a434":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var toAbsoluteIndex = __webpack_require__("23cb");
var toIntegerOrInfinity = __webpack_require__("5926");
var lengthOfArrayLike = __webpack_require__("07fa");
var setArrayLength = __webpack_require__("3a34");
var doesNotExceedSafeInteger = __webpack_require__("3511");
var arraySpeciesCreate = __webpack_require__("65f0");
var createProperty = __webpack_require__("8418");
var deletePropertyOrThrow = __webpack_require__("083a");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

var max = Math.max;
var min = Math.min;

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    }
    doesNotExceedSafeInteger(len + insertCount - actualDeleteCount);
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else deletePropertyOrThrow(O, to);
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) deletePropertyOrThrow(O, k - 1);
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else deletePropertyOrThrow(O, to);
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    setArrayLength(O, len - actualDeleteCount + insertCount);
    return A;
  }
});


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__("d9f5");
__webpack_require__("b4f8");
__webpack_require__("c513");
__webpack_require__("e9c4");
__webpack_require__("5a47");


/***/ }),

/***/ "a630":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var from = __webpack_require__("4df4");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var path = __webpack_require__("428f");
var uncurryThis = __webpack_require__("e330");
var isForced = __webpack_require__("94ca");
var hasOwn = __webpack_require__("1a2d");
var inheritIfRequired = __webpack_require__("7156");
var isPrototypeOf = __webpack_require__("3a9b");
var isSymbol = __webpack_require__("d9b5");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var thisNumberValue = __webpack_require__("408a");
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var PureNumberNamespace = path[NUMBER];
var NumberPrototype = NativeNumber.prototype;
var TypeError = global.TypeError;
var stringSlice = uncurryThis(''.slice);
var charCodeAt = uncurryThis(''.charCodeAt);

// `ToNumeric` abstract operation
// https://tc39.es/ecma262/#sec-tonumeric
var toNumeric = function (value) {
  var primValue = toPrimitive(value, 'number');
  return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
};

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, 'number');
  var first, third, radix, maxCode, digits, length, index, code;
  if (isSymbol(it)) throw new TypeError('Cannot convert a Symbol value to a number');
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = charCodeAt(it, 0);
    if (first === 43 || first === 45) {
      third = charCodeAt(it, 2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (charCodeAt(it, 1)) {
        // fast equal of /^0b[01]+$/i
        case 66:
        case 98:
          radix = 2;
          maxCode = 49;
          break;
        // fast equal of /^0o[0-7]+$/i
        case 79:
        case 111:
          radix = 8;
          maxCode = 55;
          break;
        default:
          return +it;
      }
      digits = stringSlice(it, 2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = charCodeAt(digits, index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

var FORCED = isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'));

var calledWithNew = function (dummy) {
  // includes check on 1..constructor(foo) case
  return isPrototypeOf(NumberPrototype, dummy) && fails(function () { thisNumberValue(dummy); });
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
var NumberWrapper = function Number(value) {
  var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
  return calledWithNew(this) ? inheritIfRequired(Object(n), this, NumberWrapper) : n;
};

NumberWrapper.prototype = NumberPrototype;
if (FORCED && !IS_PURE) NumberPrototype.constructor = NumberWrapper;

$({ global: true, constructor: true, wrap: true, forced: FORCED }, {
  Number: NumberWrapper
});

// Use `internal/copy-constructor-properties` helper in `core-js@4`
var copyConstructorProperties = function (target, source) {
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(source) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (hasOwn(source, key = keys[j]) && !hasOwn(target, key)) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

if (IS_PURE && PureNumberNamespace) copyConstructorProperties(path[NUMBER], PureNumberNamespace);
if (FORCED || IS_PURE) copyConstructorProperties(path[NUMBER], NativeNumber);


/***/ }),

/***/ "ab13":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "addb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var arraySlice = __webpack_require__("f36a");

var floor = Math.floor;

var sort = function (array, comparefn) {
  var length = array.length;

  if (length < 8) {
    // insertion sort
    var i = 1;
    var element, j;

    while (i < length) {
      j = i;
      element = array[i];
      while (j && comparefn(array[j - 1], element) > 0) {
        array[j] = array[--j];
      }
      if (j !== i++) array[j] = element;
    }
  } else {
    // merge sort
    var middle = floor(length / 2);
    var left = sort(arraySlice(array, 0, middle), comparefn);
    var right = sort(arraySlice(array, middle), comparefn);
    var llength = left.length;
    var rlength = right.length;
    var lindex = 0;
    var rindex = 0;

    while (lindex < llength || rindex < rlength) {
      array[lindex + rindex] = (lindex < llength && rindex < rlength)
        ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
        : lindex < llength ? left[lindex++] : right[rindex++];
    }
  }

  return array;
};

module.exports = sort;


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");
var create = __webpack_require__("7c73");
var getPrototypeOf = __webpack_require__("e163");
var defineBuiltIn = __webpack_require__("cb2d");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "aeb0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (Target, Source, key) {
  key in Target || defineProperty(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};


/***/ }),

/***/ "aed9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),

/***/ "af03":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var FUNCTION_NAME_EXISTS = __webpack_require__("5e77").EXISTS;
var uncurryThis = __webpack_require__("e330");
var defineBuiltInAccessor = __webpack_require__("edd0");

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineBuiltInAccessor(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b42e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ "b4f8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var getBuiltIn = __webpack_require__("d066");
var hasOwn = __webpack_require__("1a2d");
var toString = __webpack_require__("577e");
var shared = __webpack_require__("5692");
var NATIVE_SYMBOL_REGISTRY = __webpack_require__("0b43");

var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.for` method
// https://tc39.es/ecma262/#sec-symbol.for
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  'for': function (key) {
    var string = toString(key);
    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = getBuiltIn('Symbol')(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  }
});


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var hasOwn = __webpack_require__("1a2d");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("04f8");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var nativeKeys = __webpack_require__("df75");
var fails = __webpack_require__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b65f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var trunc = __webpack_require__("b42e");

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
$({ target: 'Math', stat: true }, {
  trunc: trunc
});


/***/ }),

/***/ "b680":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var uncurryThis = __webpack_require__("e330");
var toIntegerOrInfinity = __webpack_require__("5926");
var thisNumberValue = __webpack_require__("408a");
var $repeat = __webpack_require__("1148");
var fails = __webpack_require__("d039");

var $RangeError = RangeError;
var $String = String;
var floor = Math.floor;
var repeat = uncurryThis($repeat);
var stringSlice = uncurryThis(''.slice);
var nativeToFixed = uncurryThis(1.0.toFixed);

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var multiply = function (data, n, c) {
  var index = -1;
  var c2 = c;
  while (++index < 6) {
    c2 += n * data[index];
    data[index] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};

var divide = function (data, n) {
  var index = 6;
  var c = 0;
  while (--index >= 0) {
    c += data[index];
    data[index] = floor(c / n);
    c = (c % n) * 1e7;
  }
};

var dataToString = function (data) {
  var index = 6;
  var s = '';
  while (--index >= 0) {
    if (s !== '' || index === 0 || data[index] !== 0) {
      var t = $String(data[index]);
      s = s === '' ? t : s + repeat('0', 7 - t.length) + t;
    }
  } return s;
};

var FORCED = fails(function () {
  return nativeToFixed(0.00008, 3) !== '0.000' ||
    nativeToFixed(0.9, 0) !== '1' ||
    nativeToFixed(1.255, 2) !== '1.25' ||
    nativeToFixed(1000000000000000128.0, 0) !== '1000000000000000128';
}) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed({});
});

// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toIntegerOrInfinity(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    // TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation
    if (fractDigits < 0 || fractDigits > 20) throw new $RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare -- NaN check
    if (number !== number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return $String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(data, 0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(data, 1e7, 0);
          j -= 7;
        }
        multiply(data, pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(data, 1 << 23);
          j -= 23;
        }
        divide(data, 1 << j);
        multiply(data, 1, 1);
        divide(data, 2);
        result = dataToString(data);
      } else {
        multiply(data, 0, z);
        multiply(data, 1 << -e, 0);
        result = dataToString(data) + repeat('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat('0', fractDigits - k) + result
        : stringSlice(result, 0, k - fractDigits) + '.' + stringSlice(result, k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("0366");
var uncurryThis = __webpack_require__("e330");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var lengthOfArrayLike = __webpack_require__("07fa");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE === 1;
  var IS_FILTER = TYPE === 2;
  var IS_SOME = TYPE === 3;
  var IS_EVERY = TYPE === 4;
  var IS_FIND_INDEX = TYPE === 6;
  var IS_FILTER_REJECT = TYPE === 7;
  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(self);
    var boundFunction = bind(callbackfn, that);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("c65b");
var isObject = __webpack_require__("861d");
var isSymbol = __webpack_require__("d9b5");
var getMethod = __webpack_require__("dc4a");
var ordinaryToPrimitive = __webpack_require__("485a");
var wellKnownSymbol = __webpack_require__("b622");

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = false;


/***/ }),

/***/ "c513":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var hasOwn = __webpack_require__("1a2d");
var isSymbol = __webpack_require__("d9b5");
var tryToString = __webpack_require__("0d51");
var shared = __webpack_require__("5692");
var NATIVE_SYMBOL_REGISTRY = __webpack_require__("0b43");

var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.keyFor` method
// https://tc39.es/ecma262/#sec-symbol.keyfor
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw new TypeError(tryToString(sym) + ' is not a symbol');
    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  }
});


/***/ }),

/***/ "c607":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var UNSUPPORTED_DOT_ALL = __webpack_require__("fce3");
var classof = __webpack_require__("c6b6");
var defineBuiltInAccessor = __webpack_require__("edd0");
var getInternalState = __webpack_require__("69f3").get;

var RegExpPrototype = RegExp.prototype;
var $TypeError = TypeError;

// `RegExp.prototype.dotAll` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.dotall
if (DESCRIPTORS && UNSUPPORTED_DOT_ALL) {
  defineBuiltInAccessor(RegExpPrototype, 'dotAll', {
    configurable: true,
    get: function dotAll() {
      if (this === RegExpPrototype) return;
      // We can't use InternalStateModule.getterFor because
      // we don't add metadata for regexps created by a literal.
      if (classof(this) === 'RegExp') {
        return !!getInternalState(this).dotAll;
      }
      throw new $TypeError('Incompatible receiver, RegExp required');
    }
  });
}


/***/ }),

/***/ "c65b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__("40d5");

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IS_PURE = __webpack_require__("c430");
var globalThis = __webpack_require__("da84");
var defineGlobalProperty = __webpack_require__("6374");

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.37.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "c6d2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var call = __webpack_require__("c65b");
var IS_PURE = __webpack_require__("c430");
var FunctionName = __webpack_require__("5e77");
var isCallable = __webpack_require__("1626");
var createIteratorConstructor = __webpack_require__("dcc3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var defineBuiltIn = __webpack_require__("cb2d");
var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    }

    return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),

/***/ "c7cd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createHTML = __webpack_require__("857a");
var forcedStringHTMLMethod = __webpack_require__("af03");

// `String.prototype.fixed` method
// https://tc39.es/ecma262/#sec-string.prototype.fixed
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('fixed') }, {
  fixed: function fixed() {
    return createHTML(this, 'tt', '', '');
  }
});


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c8d2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PROPER_FUNCTION_NAME = __webpack_require__("5e77").PROPER;
var fails = __webpack_require__("d039");
var whitespaces = __webpack_require__("5899");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var hasOwn = __webpack_require__("1a2d");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "caad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $includes = __webpack_require__("4d64").includes;
var fails = __webpack_require__("d039");
var addToUnscopables = __webpack_require__("44d2");

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  // eslint-disable-next-line es/no-array-prototype-includes -- detection
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "cb2d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__("1626");
var definePropertyModule = __webpack_require__("9bf2");
var makeBuiltIn = __webpack_require__("13d2");
var defineGlobalProperty = __webpack_require__("6374");

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cdce":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ "d012":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = __webpack_require__("7282");
var isObject = __webpack_require__("861d");
var requireObjectCoercible = __webpack_require__("1d80");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    requireObjectCoercible(O);
    aPossiblePrototype(proto);
    if (!isObject(O)) return O;
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var defineBuiltIn = __webpack_require__("cb2d");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__("9bf2").f;
var hasOwn = __webpack_require__("1a2d");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d58f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__("59ed");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");
var lengthOfArrayLike = __webpack_require__("07fa");

var $TypeError = TypeError;

var REDUCE_EMPTY = 'Reduce of empty array with no initial value';

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    aCallable(callbackfn);
    if (length === 0 && argumentsLength < 2) throw new $TypeError(REDUCE_EMPTY);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw new $TypeError(REDUCE_EMPTY);
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var call = __webpack_require__("c65b");
var defineBuiltIn = __webpack_require__("cb2d");
var regexpExec = __webpack_require__("9263");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegExp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) !== 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () {
      execCalled = true;
      return null;
    };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: call(nativeRegExpMethod, regexp, str, arg2) };
        }
        return { done: true, value: call(nativeMethod, str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn(String.prototype, KEY, methods[0]);
    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "d998":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var UA = __webpack_require__("342f");

module.exports = /MSIE|Trident/.test(UA);


/***/ }),

/***/ "d9b5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var isCallable = __webpack_require__("1626");
var isPrototypeOf = __webpack_require__("3a9b");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ "d9f5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var call = __webpack_require__("c65b");
var uncurryThis = __webpack_require__("e330");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_SYMBOL = __webpack_require__("04f8");
var fails = __webpack_require__("d039");
var hasOwn = __webpack_require__("1a2d");
var isPrototypeOf = __webpack_require__("3a9b");
var anObject = __webpack_require__("825a");
var toIndexedObject = __webpack_require__("fc6a");
var toPropertyKey = __webpack_require__("a04b");
var $toString = __webpack_require__("577e");
var createPropertyDescriptor = __webpack_require__("5c6c");
var nativeObjectCreate = __webpack_require__("7c73");
var objectKeys = __webpack_require__("df75");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternal = __webpack_require__("057f");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");
var definePropertiesModule = __webpack_require__("37e8");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var defineBuiltIn = __webpack_require__("cb2d");
var defineBuiltInAccessor = __webpack_require__("edd0");
var shared = __webpack_require__("5692");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");
var uid = __webpack_require__("90e3");
var wellKnownSymbol = __webpack_require__("b622");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineWellKnownSymbol = __webpack_require__("e065");
var defineSymbolToPrimitive = __webpack_require__("57b9");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");
var $forEach = __webpack_require__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';

var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);

var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var RangeError = global.RangeError;
var TypeError = global.TypeError;
var QObject = global.QObject;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push = uncurryThis([].push);

var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var WellKnownSymbolsStore = shared('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var fallbackDefineProperty = function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
};

var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a !== 7;
}) ? fallbackDefineProperty : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (hasOwn(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, nativeObjectCreate(null)));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function (O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
      push(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (isPrototypeOf(SymbolPrototype, this)) throw new TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      var $this = this === undefined ? global : this;
      if ($this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);
      if (hasOwn($this, HIDDEN) && hasOwn($this[HIDDEN], tag)) $this[HIDDEN][tag] = false;
      var descriptor = createPropertyDescriptor(1, value);
      try {
        setSymbolDescriptor($this, tag, descriptor);
      } catch (error) {
        if (!(error instanceof RangeError)) throw error;
        fallbackDefineProperty($this, tag, descriptor);
      }
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];

  defineBuiltIn(SymbolPrototype, 'toString', function toString() {
    return getInternalState(this).tag;
  });

  defineBuiltIn($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    defineBuiltInAccessor(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      defineBuiltIn(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames
});

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive();

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dc4a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__("59ed");
var isNullOrUndefined = __webpack_require__("7234");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ "dcc3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var uncurryThis = __webpack_require__("e330");
var hasOwn = __webpack_require__("1a2d");
var isCallable = __webpack_require__("1626");
var isPrototypeOf = __webpack_require__("3a9b");
var toString = __webpack_require__("577e");
var defineBuiltInAccessor = __webpack_require__("edd0");
var copyConstructorProperties = __webpack_require__("e893");

var NativeSymbol = global.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (DESCRIPTORS && isCallable(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString(arguments[0]);
    var result = isPrototypeOf(SymbolPrototype, this)
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;

  var NATIVE_SYMBOL = String(NativeSymbol('description detection')) === 'Symbol(description detection)';
  var thisSymbolValue = uncurryThis(SymbolPrototype.valueOf);
  var symbolDescriptiveString = uncurryThis(SymbolPrototype.toString);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace = uncurryThis(''.replace);
  var stringSlice = uncurryThis(''.slice);

  defineBuiltInAccessor(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = thisSymbolValue(this);
      if (hasOwn(EmptyStringDescriptionStore, symbol)) return '';
      var string = symbolDescriptiveString(symbol);
      var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, constructor: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "e065":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var path = __webpack_require__("428f");
var hasOwn = __webpack_require__("1a2d");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__("1a2d");
var isCallable = __webpack_require__("1626");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e267":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var isArray = __webpack_require__("e8b5");
var isCallable = __webpack_require__("1626");
var classof = __webpack_require__("c6b6");
var toString = __webpack_require__("577e");

var push = uncurryThis([].push);

module.exports = function (replacer) {
  if (isCallable(replacer)) return replacer;
  if (!isArray(replacer)) return;
  var rawLength = replacer.length;
  var keys = [];
  for (var i = 0; i < rawLength; i++) {
    var element = replacer[i];
    if (typeof element == 'string') push(keys, element);
    else if (typeof element == 'number' || classof(element) === 'Number' || classof(element) === 'String') push(keys, toString(element));
  }
  var keysLength = keys.length;
  var root = true;
  return function (key, value) {
    if (root) {
      root = false;
      return value;
    }
    if (isArray(this)) return value;
    for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
  };
};


/***/ }),

/***/ "e330":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__("40d5");

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__("1a2d");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "e9c4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var getBuiltIn = __webpack_require__("d066");
var apply = __webpack_require__("2ba4");
var call = __webpack_require__("c65b");
var uncurryThis = __webpack_require__("e330");
var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");
var isSymbol = __webpack_require__("d9b5");
var arraySlice = __webpack_require__("f36a");
var getReplacerFunction = __webpack_require__("e267");
var NATIVE_SYMBOL = __webpack_require__("04f8");

var $String = String;
var $stringify = getBuiltIn('JSON', 'stringify');
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var numberToString = uncurryThis(1.0.toString);

var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function () {
  var symbol = getBuiltIn('Symbol')('stringify detection');
  // MS Edge converts symbol values to JSON as {}
  return $stringify([symbol]) !== '[null]'
    // WebKit converts symbol values to JSON as null
    || $stringify({ a: symbol }) !== '{}'
    // V8 throws on boxed symbols
    || $stringify(Object(symbol)) !== '{}';
});

// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

var stringifyWithSymbolsFix = function (it, replacer) {
  var args = arraySlice(arguments);
  var $replacer = getReplacerFunction(replacer);
  if (!isCallable($replacer) && (it === undefined || isSymbol(it))) return; // IE8 returns string on undefined
  args[1] = function (key, value) {
    // some old implementations (like WebKit) could pass numbers as keys
    if (isCallable($replacer)) value = call($replacer, this, $String(key), value);
    if (!isSymbol(value)) return value;
  };
  return apply($stringify, null, args);
};

var fixIllFormed = function (match, offset, string) {
  var prev = charAt(string, offset - 1);
  var next = charAt(string, offset + 1);
  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  } return match;
};

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  $({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace(result, tester, fixIllFormed) : result;
    }
  });
}


/***/ }),

/***/ "edd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var makeBuiltIn = __webpack_require__("13d2");
var defineProperty = __webpack_require__("9bf2");

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),

/***/ "f36a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");

module.exports = uncurryThis([].slice);


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var isCallable = __webpack_require__("1626");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f748":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// `Math.sign` method implementation
// https://tc39.es/ecma262/#sec-math.sign
// eslint-disable-next-line es/no-math-sign -- safe
module.exports = Math.sign || function sign(x) {
  var n = +x;
  // eslint-disable-next-line no-self-compare -- NaN check
  return n === 0 || n !== n ? n : n < 0 ? -1 : 1;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "vsButton", function() { return /* reexport */ components_vsButton; });
__webpack_require__.d(__webpack_exports__, "vsSelect", function() { return /* reexport */ components_vsSelect; });
__webpack_require__.d(__webpack_exports__, "vsSwitch", function() { return /* reexport */ components_vsSwitch; });
__webpack_require__.d(__webpack_exports__, "vsCheckbox", function() { return /* reexport */ components_vsCheckBox; });
__webpack_require__.d(__webpack_exports__, "vsRadio", function() { return /* reexport */ components_vsRadio; });
__webpack_require__.d(__webpack_exports__, "vsInput", function() { return /* reexport */ components_vsInput; });
__webpack_require__.d(__webpack_exports__, "vsTabs", function() { return /* reexport */ components_vsTabs; });
__webpack_require__.d(__webpack_exports__, "vsSlider", function() { return /* reexport */ components_vsSlider; });
__webpack_require__.d(__webpack_exports__, "vsInputNumber", function() { return /* reexport */ components_vsInputNumber; });
__webpack_require__.d(__webpack_exports__, "vsTooltip", function() { return /* reexport */ components_vsTooltip; });
__webpack_require__.d(__webpack_exports__, "vsUpload", function() { return /* reexport */ components_vsUpload; });
__webpack_require__.d(__webpack_exports__, "vsPopup", function() { return /* reexport */ components_vsPopup; });
__webpack_require__.d(__webpack_exports__, "vsAlert", function() { return /* reexport */ components_vsAlert; });
__webpack_require__.d(__webpack_exports__, "vsChip", function() { return /* reexport */ components_vsChip; });
__webpack_require__.d(__webpack_exports__, "vsProgress", function() { return /* reexport */ components_vsProgress; });
__webpack_require__.d(__webpack_exports__, "vsCard", function() { return /* reexport */ components_vsCard; });
__webpack_require__.d(__webpack_exports__, "vsList", function() { return /* reexport */ components_vsList; });
__webpack_require__.d(__webpack_exports__, "vsAvatar", function() { return /* reexport */ components_vsAvatar; });
__webpack_require__.d(__webpack_exports__, "vsPagination", function() { return /* reexport */ components_vsPagination; });
__webpack_require__.d(__webpack_exports__, "vsBreadcrumb", function() { return /* reexport */ components_vsBreadcrumb; });
__webpack_require__.d(__webpack_exports__, "vsPrompt", function() { return /* reexport */ vsPrompt; });
__webpack_require__.d(__webpack_exports__, "vsDivider", function() { return /* reexport */ components_vsDivider; });
__webpack_require__.d(__webpack_exports__, "vsSpacer", function() { return /* reexport */ components_vsSpacer; });
__webpack_require__.d(__webpack_exports__, "vsIcon", function() { return /* reexport */ components_vsIcon; });
__webpack_require__.d(__webpack_exports__, "vsNavbar", function() { return /* reexport */ components_vsNavbar; });
__webpack_require__.d(__webpack_exports__, "vsSideBar", function() { return /* reexport */ vsSideBar; });
__webpack_require__.d(__webpack_exports__, "vsDropDown", function() { return /* reexport */ components_vsDropDown; });
__webpack_require__.d(__webpack_exports__, "vsTable", function() { return /* reexport */ components_vsTable; });
__webpack_require__.d(__webpack_exports__, "vsTextarea", function() { return /* reexport */ components_vsTextarea; });
__webpack_require__.d(__webpack_exports__, "vsCollapse", function() { return /* reexport */ components_vsCollapse; });
__webpack_require__.d(__webpack_exports__, "vsImages", function() { return /* reexport */ components_vsImages; });
__webpack_require__.d(__webpack_exports__, "vsEditableList", function() { return /* reexport */ components_vsEditableList; });
__webpack_require__.d(__webpack_exports__, "vsRow", function() { return /* reexport */ layout_vsRow; });
__webpack_require__.d(__webpack_exports__, "vsCol", function() { return /* reexport */ layout_vsCol; });

// NAMESPACE OBJECT: ./src/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "vsButton", function() { return components_vsButton; });
__webpack_require__.d(components_namespaceObject, "vsSelect", function() { return components_vsSelect; });
__webpack_require__.d(components_namespaceObject, "vsSwitch", function() { return components_vsSwitch; });
__webpack_require__.d(components_namespaceObject, "vsCheckbox", function() { return components_vsCheckBox; });
__webpack_require__.d(components_namespaceObject, "vsRadio", function() { return components_vsRadio; });
__webpack_require__.d(components_namespaceObject, "vsInput", function() { return components_vsInput; });
__webpack_require__.d(components_namespaceObject, "vsTabs", function() { return components_vsTabs; });
__webpack_require__.d(components_namespaceObject, "vsSlider", function() { return components_vsSlider; });
__webpack_require__.d(components_namespaceObject, "vsInputNumber", function() { return components_vsInputNumber; });
__webpack_require__.d(components_namespaceObject, "vsTooltip", function() { return components_vsTooltip; });
__webpack_require__.d(components_namespaceObject, "vsUpload", function() { return components_vsUpload; });
__webpack_require__.d(components_namespaceObject, "vsPopup", function() { return components_vsPopup; });
__webpack_require__.d(components_namespaceObject, "vsAlert", function() { return components_vsAlert; });
__webpack_require__.d(components_namespaceObject, "vsChip", function() { return components_vsChip; });
__webpack_require__.d(components_namespaceObject, "vsProgress", function() { return components_vsProgress; });
__webpack_require__.d(components_namespaceObject, "vsCard", function() { return components_vsCard; });
__webpack_require__.d(components_namespaceObject, "vsList", function() { return components_vsList; });
__webpack_require__.d(components_namespaceObject, "vsAvatar", function() { return components_vsAvatar; });
__webpack_require__.d(components_namespaceObject, "vsPagination", function() { return components_vsPagination; });
__webpack_require__.d(components_namespaceObject, "vsBreadcrumb", function() { return components_vsBreadcrumb; });
__webpack_require__.d(components_namespaceObject, "vsPrompt", function() { return vsPrompt; });
__webpack_require__.d(components_namespaceObject, "vsDivider", function() { return components_vsDivider; });
__webpack_require__.d(components_namespaceObject, "vsSpacer", function() { return components_vsSpacer; });
__webpack_require__.d(components_namespaceObject, "vsIcon", function() { return components_vsIcon; });
__webpack_require__.d(components_namespaceObject, "vsNavbar", function() { return components_vsNavbar; });
__webpack_require__.d(components_namespaceObject, "vsSideBar", function() { return vsSideBar; });
__webpack_require__.d(components_namespaceObject, "vsDropDown", function() { return components_vsDropDown; });
__webpack_require__.d(components_namespaceObject, "vsTable", function() { return components_vsTable; });
__webpack_require__.d(components_namespaceObject, "vsTextarea", function() { return components_vsTextarea; });
__webpack_require__.d(components_namespaceObject, "vsCollapse", function() { return components_vsCollapse; });
__webpack_require__.d(components_namespaceObject, "vsImages", function() { return components_vsImages; });
__webpack_require__.d(components_namespaceObject, "vsEditableList", function() { return components_vsEditableList; });
__webpack_require__.d(components_namespaceObject, "vsRow", function() { return layout_vsRow; });
__webpack_require__.d(components_namespaceObject, "vsCol", function() { return layout_vsCol; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.values.js
var es_object_values = __webpack_require__("07ac");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.test.js
var es_regexp_test = __webpack_require__("00b4");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsButton/vsButton.vue?vue&type=template&id=3e8b34eb&lang=html



var vsButtonvue_type_template_id_3e8b34eb_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('button', _vm._g(_vm._b({
    ref: "btn",
    staticClass: "vs-component vs-button",
    class: ["vs-button-".concat(_vm.isColor() ? _vm.color : null), "vs-button-".concat(_vm.type), {
      'isActive': _vm.isActive,
      'includeIcon': _vm.icon,
      'includeIconOnly': _vm.icon && !_vm.$slots.default,
      'vs-radius': _vm.radius
    }, _vm.size],
    style: [_vm.styles, {
      'width': /[px]/.test(_vm.size) ? "".concat(_vm.size) : null,
      'height': /[px]/.test(_vm.size) ? "".concat(_vm.size) : null
    }],
    attrs: {
      "type": _vm.button,
      "name": "button"
    }
  }, 'button', _vm.$attrs, false), _vm.listeners), [!_vm.is('line') && !_vm.is('gradient') && !_vm.is('relief') ? _c('span', {
    ref: "backgroundx",
    staticClass: "vs-button-backgroundx vs-button--background",
    style: _vm.stylesBackGround
  }) : _vm._e(), _vm.icon ? _c('vs-icon', {
    staticClass: "vs-button--icon",
    style: _defineProperty(_defineProperty({
      'order': _vm.iconAfter ? 2 : 0
    }, 'margin-' + _vm.isRTL('left'), _vm.$slots.default && !_vm.iconAfter ? '5px' : '0px'), 'margin-' + _vm.isRTL('right'), _vm.$slots.default && _vm.iconAfter ? '5px' : '0px'),
    attrs: {
      "icon-pack": _vm.iconPack,
      "icon": _vm.icon
    }
  }) : _vm._e(), _vm.$slots.default ? _c('span', {
    staticClass: "vs-button-text vs-button--text"
  }, [_vm._t("default")], 2) : _vm._e(), _c('span', {
    ref: "linex",
    staticClass: "vs-button-linex",
    style: _vm.styleLine
  })], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsButton/vsButton.vue?vue&type=template&id=3e8b34eb&lang=html

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__("841c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("498a");

// CONCATENATED MODULE: ./src/utils/color.js








/* harmony default export */ var utils_color = ({
  darken: function darken(color, percent) {
    var f = color.split(","),
      t = percent < 0 ? 0 : 255,
      p = percent < 0 ? percent * -1 : percent,
      R = parseInt(f[0].slice(4)),
      G = parseInt(f[1]),
      B = parseInt(f[2]);
    return "rgb(" + (Math.round((t - R) * p) + R) + "," + (Math.round((t - G) * p) + G) + "," + (Math.round((t - B) * p) + B) + ")";
  },
  getColor: function getColor(colorx) {
    var alphax = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var defaultx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    // change color hex to RGB
    if (/^[#]/.test(colorx)) {
      var c = this.hexToRgb(colorx);
      if (alphax == 1) {
        colorx = "rgb(".concat(c.r, ",").concat(c.g, ",").concat(c.b, ")");
      } else {
        colorx = "rgba(".concat(c.r, ",").concat(c.g, ",").concat(c.b, ",").concat(alphax, ")");
      }
    } else if (/^rgba/.test(colorx)) {
      if (colorx.search(/.([0-9]\))$/) == -1 && !defaultx) {
        colorx = colorx.replace(/.?([0-9]\))$/, "".concat(alphax, ")"));
      }
    } else if (/^(rgb)/.test(colorx)) {
      // change rgb and rgba
      if (alphax != 1) {
        colorx = colorx.replace(/^(rgb)/, "rgba");
        colorx = colorx.replace(/\)$/, ",".concat(alphax, ")"));
      }
    }
    return colorx;
  },
  isColor: function isColor(colorx) {
    var vscolors = ['primary', 'secondary', 'success', 'danger', 'warning', 'dark', 'light'];
    return vscolors.includes(colorx);
  },
  RandomColor: function RandomColor() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    return "rgb(".concat(getRandomInt(0, 255), ",").concat(getRandomInt(0, 255), ",").concat(getRandomInt(0, 255), ")");
  },
  rColor: function rColor(colorx) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    if (/^[#]/.test(colorx)) {
      var c = this.hexToRgb(colorx);
      colorx = "rgba(".concat(c.r, ",").concat(c.g, ",").concat(c.b, ",").concat(opacity, ")");
    } else if (/^[rgb]/.test(colorx)) {
      var colorSplit = colorx.split(')')[0];
      if (!/^[rgba]/.test(colorx)) {
        colorSplit.replace('rgb', 'rgba');
        colorSplit += ",".concat(opacity, ")");
      } else {
        // colorSplit.replace('rgb','rgba')
        colorSplit += ")";
      }
      colorx = colorSplit;
    }
    var vscolors = ['primary', 'success', 'danger', 'warning', 'dark'];
    if (colorx) {
      if (/[#()]/.test(colorx)) {
        return colorx;
      } else {
        if (vscolors.includes(colorx)) {
          return "rgba(var(--vs-".concat(colorx, "),").concat(opacity, ")");
        } else {
          return "rgba(var(--vs-primary),".concat(opacity, ")");
        }
      }
    } else {
      return "rgba(var(--vs-primary),".concat(opacity, ")");
    }
  },
  contrastColor: function contrastColor(elementx) {
    var c = elementx;
    if (/[#]/g.test(elementx)) {
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
    if (typeof window !== 'undefined') {
      document.documentElement.style.setProperty(propertyName, value);
    }
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
      colorx = this.getVariable(style, '--vs-' + colorInicial);
    } else {
      if (/[rgb()]/g.test(colorInicial)) {
        colorx = colorInicial.replace(/[rgb()]/g, '');
      } else if (/[#]/g.test(colorInicial)) {
        var rgbx = this.hexToRgb(colorInicial);
        colorx = "".concat(rgbx.r, ",").concat(rgbx.g, ",").concat(rgbx.b);
      } else {
        colorx = '--vs-' + colorInicial;
      }
    }
    return colorx;
    // this.setCssVariable('--vs-'+clave,colorx)
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsButton/vsButton.vue?vue&type=script&lang=js




/* harmony default export */ var vsButtonvue_type_script_lang_js = ({
  name: 'VsButton',
  inheritAttrs: false,
  props: {
    type: {
      default: 'filled',
      type: String
    },
    color: {
      default: 'primary',
      type: String
    },
    textColor: {
      default: null,
      type: String
    },
    lineOrigin: {
      default: 'center',
      type: String
    },
    linePosition: {
      default: 'bottom',
      type: String
    },
    gradientDirection: {
      default: '30deg',
      type: String
    },
    gradientColorSecondary: {
      default: 'primary',
      type: String
    },
    size: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    },
    iconAfter: {
      default: false,
      type: Boolean
    },
    radius: {
      default: false,
      type: Boolean
    },
    to: {
      default: false,
      type: String | Object
    },
    href: {
      default: '',
      type: String | Object
    },
    target: {
      default: false,
      type: [Boolean, String]
    },
    button: {
      default: 'button',
      type: String
    }
  },
  data: function data() {
    return {
      isActive: false,
      hoverx: false,
      leftBackgorund: 20,
      topBackgorund: 20,
      radio: 0,
      time: 0.3,
      timeOpacity: 0.3,
      opacity: 1
    };
  },
  computed: {
    listeners: function listeners() {
      var _this = this;
      return _objectSpread2(_objectSpread2({}, this.$listeners), {}, {
        click: function click(event) {
          return _this.clickButton(event);
        },
        blur: function blur(event) {
          return _this.blurButton(event);
        },
        mouseover: function mouseover(event) {
          return _this.mouseoverx(event);
        },
        mouseout: function mouseout(event) {
          return _this.mouseoutx(event);
        }
      });
    },
    styles: function styles() {
      if (this.is('filled')) {
        return {
          color: utils_color.getColor(this.textColor, 1),
          background: utils_color.getColor(this.color, 1),
          boxShadow: this.hoverx ? "0px 8px 25px -8px ".concat(utils_color.getColor(this.color, 1)) : null
        };
      } else if (this.is('border') || this.is('flat')) {
        return {
          border: "".concat(this.is('flat') ? 0 : 1, "px solid ").concat(utils_color.getColor(this.color, 1)),
          background: this.hoverx ? utils_color.getColor(this.color, .1) : 'transparent',
          color: utils_color.getColor(this.textColor, 1) || utils_color.getColor(this.color, 1)
        };
      } else if (this.is('line')) {
        return {
          color: utils_color.getColor(this.textColor, 1) || utils_color.getColor(this.color, 1),
          borderBottomWidth: this.linePosition == 'bottom' ? "2px" : null,
          borderColor: "".concat(utils_color.getColor(this.color, .2)),
          borderTopWidth: this.linePosition == 'top' ? "2px" : null
        };
      } else if (this.is('gradient')) {
        var backgroundx = "linear-gradient(".concat(this.gradientDirection, ", ").concat(utils_color.getColor(this.color), " 0%, ").concat(utils_color.getColor(this.gradientColorSecondary, 1), " 100%)");
        return {
          background: backgroundx
        };
      } else if (this.is('relief')) {
        var color = utils_color.getColor(this.color, 1);
        return {
          background: utils_color.getColor(this.color, 1),
          boxShadow: "0 3px 0 0 ".concat(utils_color.darken(color, -0.4))
        };
      }
    },
    stylesBackGround: function stylesBackGround() {
      var styles = {
        background: this.is('flat') || this.is('border') ? utils_color.getColor(this.color, 1, false) : null,
        opacity: this.opacity,
        left: "".concat(this.leftBackgorund, "px"),
        top: "".concat(this.topBackgorund, "px"),
        width: "".concat(this.radio, "px"),
        height: "".concat(this.radio, "px"),
        transition: "width ".concat(this.time, "s ease, height ").concat(this.time, "s ease, opacity ").concat(this.timeOpacity, "s ease")
      };
      return styles;
    },
    styleLine: function styleLine() {
      var lineOrigin = '50%';
      if (this.lineOrigin == 'left') {
        lineOrigin = '0%';
      } else if (this.lineOrigin == 'right') {
        lineOrigin = 'auto';
      }
      var styles = {
        top: this.linePosition == 'top' ? '-2px' : 'auto',
        bottom: this.linePosition == 'bottom' ? '-2px' : 'auto',
        background: utils_color.getColor(this.color, 1),
        left: lineOrigin,
        right: lineOrigin == 'auto' ? '0px' : null,
        transform: lineOrigin == '50%' ? 'translate(-50%)' : null
      };
      return styles;
    }
  },
  methods: {
    isRTL: function isRTL(value) {
      if (this.$vs.rtl) {
        return value;
      } else {
        if (value === 'right') {
          return 'left';
        }
        if (value === 'left') {
          return 'right';
        }
      }
    },
    routerPush: function routerPush() {
      var _this2 = this;
      this.$router.push(this.to).catch(function (err) {
        _this2.$emit("routeErr", err);
      });
    },
    is: function is(which) {
      var type = this.type;
      return type == which;
    },
    mouseoverx: function mouseoverx(event) {
      this.$emit('mouseover', event);
      this.hoverx = true;
    },
    mouseoutx: function mouseoutx(event) {
      this.$emit('mouseout', event);
      this.hoverx = false;
    },
    blurButton: function blurButton(event) {
      var _this3 = this;
      this.$emit('blur', event);
      this.$nextTick(function () {
        if (_this3.type == 'border' || _this3.type == 'flat') {
          _this3.opacity = 0;
          setTimeout(function () {
            _this3.radio = 0;
          }, 150);
          _this3.isActive = false;
        }
      });
    },
    clickButton: function clickButton(event) {
      var _this4 = this;
      this.$emit('click', event);
      this.$nextTick(function () {
        if (_this4.isActive) {
          return;
        }
        if (_this4.to) {
          _this4.routerPush();
        }
        if (_this4.href) {
          if (typeof _this4.href == 'string') {
            _this4.target ? window.open(_this4.href) : window.location.href = _this4.href;
          } else {
            _this4.target ? window.open(_this4.href.url) : window.location.href = _this4.href.url;
          }
        }
        if (_this4.type == 'border' || _this4.type == 'flat') {
          _this4.isActive = true;
        }
        var btn = _this4.$refs.btn;
        var xEvent = event.offsetX;
        var yEvent = event.offsetY;
        var radio = btn.clientWidth * 3;
        _this4.time = btn.clientWidth / (btn.clientWidth + (_this4.is('border') || _this4.is('flat') ? 70 : 20));
        if (_this4.is('filled')) {
          _this4.timeOpacity = _this4.time;
        }
        if (event.srcElement ? event.srcElement != btn : false) {
          xEvent += event.target.offsetLeft;
          yEvent += event.target.offsetTop;
        }
        _this4.leftBackgorund = xEvent;
        _this4.topBackgorund = yEvent;
        _this4.radio = radio;
        if (_this4.is('filled')) {
          _this4.opacity = 0;
        } else {
          _this4.opacity = 1;
        }
        if (_this4.is('filled')) {
          setTimeout(function () {
            _this4.time = _this4.timeOpacity = _this4.radio = 0;
            _this4.opacity = 1;
            _this4.isActive = false;
          }, _this4.time * 1100);
        } else {
          setTimeout(function () {
            _this4.timeOpacity = .15;
          }, _this4.time * 1100);
        }
      });
    },
    isColor: function isColor() {
      return utils_color.isColor(this.color);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsButton/vsButton.vue?vue&type=script&lang=js
 /* harmony default export */ var vsButton_vsButtonvue_type_script_lang_js = (vsButtonvue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

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
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
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
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/vsButton/vsButton.vue





/* normalize component */

var component = normalizeComponent(
  vsButton_vsButtonvue_type_script_lang_js,
  vsButtonvue_type_template_id_3e8b34eb_lang_html_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsButton = (component.exports);
// CONCATENATED MODULE: ./src/components/vsButton/index.js


/* harmony default export */ var components_vsButton = (function (Vue) {
  Vue.component(vsButton.name, vsButton);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSelect/vsSelect.vue?vue&type=template&id=41c46ea3&lang=html
var vsSelectvue_type_template_id_41c46ea3_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "con-select",
    class: {
      'autocompletex': _vm.autocomplete,
      'activeOptions': _vm.active,
      'input-select-validate-success': _vm.success,
      'input-select-validate-danger': _vm.danger,
      'input-select-validate-warning': _vm.warning
    },
    style: _vm.getWidth
  }, [_vm.label ? _c('label', {
    ref: "inputSelectLabel",
    staticClass: "vs-select--label"
  }, [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _c('div', {
    staticClass: "input-select-con"
  }, [_c('input', _vm._g(_vm._b({
    ref: "inputselect",
    staticClass: "input-select vs-select--input",
    attrs: {
      "readonly": !_vm.autocomplete,
      "type": "text"
    },
    on: {
      "keydown": function keydown($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) return null;
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.closeOptions.apply(null, arguments);
      }
    }
  }, 'input', _vm.$attrs, false), _vm.listeners)), _c('button', {
    staticClass: "icon-select-clear vs-select--icon-clear",
    class: {
      'activeBtnClear': _vm.activeBtnClear
    },
    on: {
      "click": _vm.clearValue
    }
  }, [_c('i', {
    staticClass: "material-icons"
  }, [_vm._v("\n        close\n      ")])]), !_vm.activeBtnClear ? _c('vs-icon', {
    staticClass: "icon-select vs-select--icon",
    attrs: {
      "icon-pack": _vm.iconPack,
      "icon": _vm.icon
    }
  }) : _vm._e(), _c('transition', {
    attrs: {
      "name": "fadeselect"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.active,
      expression: "active"
    }],
    ref: "vsSelectOptions",
    staticClass: "vs-select--options",
    class: ["vs-select-".concat(_vm.color), {
      'scrollx': _vm.scrollx
    }],
    style: _vm.cords
  }, [_c('ul', {
    ref: "ulx"
  }, [_vm._t("default")], 2), _c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.clear,
      expression: "clear"
    }]
  }, [_c('li', {
    on: {
      "click": function click($event) {
        _vm.filterItems(''), _vm.changeValue();
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.noData) + "\n          ")])])])])], 1), _c('transition-group', {
    on: {
      "before-enter": _vm.beforeEnter,
      "enter": _vm.enter,
      "leave": _vm.leave
    }
  }, [_vm.success ? _c('div', {
    key: "success",
    staticClass: "con-text-validation"
  }, [_c('span', {
    staticClass: "span-text-validation span-text-validation-success"
  }, [_vm._v("\n        " + _vm._s(_vm.successText) + "\n      ")])]) : _vm.danger ? _c('div', {
    key: "danger",
    staticClass: "con-text-validation span-text-validation-danger"
  }, [_c('span', {
    staticClass: "span-text-validation"
  }, [_vm._v("\n        " + _vm._s(_vm.dangerText) + "\n      ")])]) : _vm.warning ? _c('div', {
    key: "warning",
    staticClass: "con-text-validation span-text-validation-warning"
  }, [_c('span', {
    staticClass: "span-text-validation"
  }, [_vm._v("\n        " + _vm._s(_vm.warningText) + "\n      ")])]) : _vm._e(), _vm.descriptionText ? _c('div', {
    key: "description",
    staticClass: "con-text-validation span-text-validation"
  }, [_c('span', {
    staticClass: "span-text-validation"
  }, [_vm._v("\n        " + _vm._s(_vm.descriptionText) + "\n      ")])]) : _vm._e()])], 1);
};
var vsSelectvue_type_template_id_41c46ea3_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsSelect/vsSelect.vue?vue&type=template&id=41c46ea3&lang=html

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("2532");

// CONCATENATED MODULE: ./src/utils/index.js
/* harmony default export */ var utils = ({
  insertBody: function insertBody(elx, parent) {
    var bodyx = parent ? parent : document.body;
    bodyx.insertBefore(elx, bodyx.firstChild);
  },
  removeBody: function removeBody(element, parent) {
    var bodyx = parent ? parent : document.body;
    bodyx.removeChild(element);
  },
  changePosition: function changePosition(elx, content, conditional) {
    var topx = 0;
    var leftx = 0;
    var widthx = 0;
    var scrollTopx = window.pageYOffset || document.documentElement.scrollTop;
    if (elx.getBoundingClientRect().top + 300 >= window.innerHeight) {
      setTimeout(function () {
        if (conditional) {
          topx = elx.getBoundingClientRect().top - content.clientHeight + scrollTopx;
        } else {
          topx = elx.getBoundingClientRect().top - content.clientHeight + elx.clientHeight + scrollTopx;
        }
      }, 1);
    } else {
      topx = conditional ? elx.getBoundingClientRect().top + elx.clientHeight + scrollTopx + 5 : elx.getBoundingClientRect().top + scrollTopx;
    }
    leftx = elx.getBoundingClientRect().left;
    widthx = elx.offsetWidth;
    var cords = {
      left: "".concat(leftx, "px"),
      top: "".concat(topx, "px"),
      width: "".concat(widthx, "px")
    };
    return cords;
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSelect/vsSelect.vue?vue&type=script&lang=js


















/* harmony default export */ var vsSelectvue_type_script_lang_js = ({
  name: "VsSelect",
  props: {
    value: {},
    noData: {
      default: "No data available",
      type: String
    },
    maxSelected: {
      default: null,
      type: [Number, String]
    },
    autocomplete: {
      default: false,
      type: Boolean
    },
    color: {
      default: "primary",
      type: String
    },
    multiple: {
      default: false,
      type: Boolean
    },
    label: {
      default: null,
      type: [String]
    },
    success: {
      default: false,
      type: Boolean
    },
    danger: {
      default: false,
      type: Boolean
    },
    warning: {
      default: false,
      type: Boolean
    },
    successText: {
      default: null,
      type: String
    },
    dangerText: {
      default: null,
      type: String
    },
    warningText: {
      default: null,
      type: String
    },
    descriptionText: {
      default: null,
      type: String
    },
    iconPack: {
      default: "material-icons",
      type: String
    },
    icon: {
      default: "keyboard_arrow_down",
      type: String
    },
    iconClear: {
      default: "close",
      type: String
    },
    width: {
      default: null,
      type: String
    }
  },
  data: function data() {
    return {
      valueFilter: "",
      active: false,
      valuex: "",
      clear: false,
      scrollx: false,
      cords: {},
      filterx: false
    };
  },
  computed: {
    activeBtnClear: function activeBtnClear() {
      return this.autocomplete && this.filterx;
    },
    getWidth: function getWidth() {
      return this.width ? "width:".concat(this.width, ";") : null;
    },
    parent: function parent() {
      return this;
    },
    listeners: function listeners() {
      var _this = this;
      return _objectSpread2(_objectSpread2({}, this.$listeners), {}, {
        blur: function blur(event) {
          if (_this.autocomplete && event.relatedTarget ? !event.relatedTarget.closest(".vs-select--options") : false) {
            _this.closeOptions();
          }
          _this.$emit("blur", event);
        },
        focus: function focus(event) {
          _this.$emit("focus", event);
          if (event.keyCode ? event.keyCode : event.which) {
            _this.focus();
          }
        },
        mouseup: function mouseup() {
          _this.focus();
        },
        input: function input(event) {
          if (_this.autocomplete) {
            _this.$emit("input-change", event);
          }
        },
        keyup: function keyup(event) {
          if (event.key == "ArrowDown" || event.key == "ArrowUp") {
            event.preventDefault();
            var childrens = _this.$children.filter(function (item) {
              return item.visible;
            });
            childrens[0].$el.querySelector(".vs-select--item").focus();
          } else {
            if (_this.autocomplete) {
              _this.filterItems(event.target.value);
            }
          }
          _this.$children.map(function (item) {
            item.valueInputx = _this.$refs.inputselect.value;
          });
        }
      });
    }
  },
  watch: {
    value: function value(event) {
      this.valuex = this.value;
      this.$emit("change", event);
    },
    active: function active() {
      var _this2 = this;
      this.$nextTick(function () {
        if (_this2.active) {
          utils.insertBody(_this2.$refs.vsSelectOptions);
          setTimeout(function () {
            _this2.$children.forEach(function (item) {
              if (item.focusValue) {
                item.focusValue();
              }
            });
            if (_this2.$refs.ulx.scrollHeight >= 260) _this2.scrollx = true;
          }, 100);
        } else {
          var _document$getElements = document.getElementsByTagName("body"),
            _document$getElements2 = _slicedToArray(_document$getElements, 1),
            parent = _document$getElements2[0];
          parent.removeChild(_this2.$refs.vsSelectOptions);
        }
      });
    }
  },
  mounted: function mounted() {
    // this.$refs.inputselect.value = this.value
    this.changeValue();
    if (this.active) {
      utils.insertBody(this.$refs.vsSelectOptions);
    }
  },
  beforeDestroy: function beforeDestroy() {
    var _document$getElements3 = document.getElementsByTagName("body"),
      _document$getElements4 = _slicedToArray(_document$getElements3, 1),
      parent = _document$getElements4[0];
    if (this.active) {
      this.closeOptions();
    }
    if (parent && this.$refs.vsSelectOptions && this.$refs.vsSelectOptions.parentNode === parent) {
      parent.removeChild(this.$refs.vsSelectOptions);
    }
  },
  updated: function updated() {
    if (!this.active) {
      this.changeValue();
    }
  },
  methods: {
    clearValue: function clearValue() {
      this.focus();
      this.filterItems("");
      this.changeValue();
    },
    addMultiple: function addMultiple(value) {
      var currentValues = this.value ? this.value : [];
      if (currentValues.includes(value)) {
        currentValues.splice(currentValues.indexOf(value), 1);
        this.$emit("input", currentValues);
        this.changeValue();
        if (this.autocomplete) {
          this.$refs.inputselect.focus();
        }
      } else {
        if (this.autocomplete) {
          currentValues.push(value);
          this.$emit("input", currentValues);
          this.filterItems("");
          this.changeValue();
          // this.$refs.inputselect.value += ','
          this.$refs.inputselect.focus();
        } else {
          currentValues.push(value);
          this.$emit("input", currentValues);
          this.changeValue();
        }
      }
    },
    filterItems: function filterItems(value) {
      var _this3 = this;
      if (value) {
        this.filterx = true;
      } else {
        this.filterx = false;
      }
      var items = this.$children;
      items.forEach(function (item) {
        if (item.$children.length > 0) {
          items = [].concat(_toConsumableArray(items), _toConsumableArray(item.$children));
        }
      });
      items.map(function (item) {
        if (!("text" in item)) return;
        var text = item.text;
        if (_this3.multiple) {
          var valuesx = value.split(",");
          valuesx.forEach(function (value_multi) {
            if (text.toUpperCase().indexOf(value_multi.toUpperCase()) == -1) {
              item.visible = false;
            } else {
              item.visible = true;
            }
          });
        } else {
          if (text.toUpperCase().indexOf(value.toUpperCase()) == -1) {
            item.visible = false;
          } else {
            item.visible = true;
          }
        }
      });
      var lengthx = items.filter(function (item) {
        return item.visible;
      });
      if (lengthx.length == 0) {
        this.clear = true;
      } else {
        this.clear = false;
      }
      this.$nextTick(function () {
        _this3.cords = _this3.changePosition();
      });
    },
    changeValue: function changeValue() {
      this.filterx = false;
      if (this.multiple) {
        var values = this.value ? this.value : [];
        var options = this.$children;
        options.forEach(function (item) {
          if (item.$children.length > 0) {
            options = [].concat(_toConsumableArray(options), _toConsumableArray(item.$children));
          }
        });
        var optionsValues = [];
        values.forEach(function (item) {
          options.forEach(function (item_option) {
            if (item_option.value == item) {
              var text = item_option.text;
              text = text.replace("check_circle", "");
              optionsValues.push(text.trim());
            }
          });
        });
        this.$refs.inputselect.value = optionsValues.toString();
      } else {
        if (this.$refs.inputselect) {
          this.$refs.inputselect.value = this.valuex;
        }
      }
    },
    focus: function focus() {
      var _this4 = this;
      this.active = true;
      document.addEventListener('click', this.clickBlur);
      this.setLabelClass(this.$refs.inputSelectLabel, true);
      var inputx = this.$refs.inputselect;
      if (this.autocomplete && this.multiple) {
        setTimeout(function () {
          if (inputx.value) {
            _this4.$refs.inputselect.value = inputx.value += ",";
          }
          inputx.selectionStart = inputx.selectionEnd = 10000;
        }, 10);
      } else if (this.autocomplete && !this.multiple) {
        this.$refs.inputselect.select();
      }
      if (!this.autocomplete) {
        if (this.multiple ? this.value.length == 0 : !this.value || this.multiple) {
          setTimeout(function () {
            var el = _this4.$children[0].$el.querySelector(".vs-select--item");
            if (el) el.focus();
          }, 50);
        }
      }
      this.$nextTick(function () {
        _this4.cords = _this4.changePosition();
      });
    },
    clickBlur: function clickBlur(event) {
      if (event.target === this.$refs.inputselect) {
        return;
      }
      var closestx = event.target.closest(".vs-select--option");
      if (!closestx) {
        this.closeOptions();
        if (this.autocomplete) {
          this.filterItems("");
        }
        this.changeValue();
      }
    },
    closeOptions: function closeOptions() {
      this.active = false;
      this.setLabelClass(this.$refs.inputSelectLabel, false);
      document.removeEventListener("click", this.clickBlur);
    },
    changePosition: function changePosition() {
      var elx = this.$refs.inputselect;
      var content = this.$refs.vsSelectOptions;
      var conditional = this.autocomplete;
      var topx = 0;
      var leftx = 0;
      var widthx = 0;
      var scrollTopx = window.pageYOffset || document.documentElement.scrollTop;
      if (elx.getBoundingClientRect().top + content.scrollHeight + 20 >= window.innerHeight) {
        topx = elx.getBoundingClientRect().top + elx.clientHeight + scrollTopx - content.scrollHeight;
        if (conditional) {
          topx = topx - elx.clientHeight - 5;
        }
      } else {
        topx = conditional ? elx.getBoundingClientRect().top + elx.clientHeight + scrollTopx + 5 : elx.getBoundingClientRect().top + scrollTopx;
      }
      leftx = elx.getBoundingClientRect().left;
      widthx = elx.offsetWidth;
      var cords = {
        left: "".concat(leftx, "px"),
        top: "".concat(topx, "px"),
        width: "".concat(widthx, "px")
      };
      return cords;
    },
    beforeEnter: function beforeEnter(el) {
      el.style.height = 0;
    },
    enter: function enter(el, done) {
      var h = el.scrollHeight;
      el.style.height = h + "px";
      done();
    },
    leave: function leave(el) {
      el.style.height = 0 + "px";
    },
    setLabelClass: function setLabelClass(label, focusing) {
      if (!label) {
        return;
      }
      if (focusing) {
        label.classList.add("input-select-label-" + this.color + "--active");
        return;
      }
      label.classList.remove("input-select-label-" + this.color + "--active");
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsSelect/vsSelect.vue?vue&type=script&lang=js
 /* harmony default export */ var vsSelect_vsSelectvue_type_script_lang_js = (vsSelectvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsSelect/vsSelect.vue





/* normalize component */

var vsSelect_component = normalizeComponent(
  vsSelect_vsSelectvue_type_script_lang_js,
  vsSelectvue_type_template_id_41c46ea3_lang_html_render,
  vsSelectvue_type_template_id_41c46ea3_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsSelect = (vsSelect_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSelect/vsSelectItem.vue?vue&type=template&id=2247f336&lang=html
var vsSelectItemvue_type_template_id_2247f336_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('li', _vm._g({
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.visible,
      expression: "visible"
    }],
    staticClass: "vs-component",
    attrs: {
      "data-text": _vm.text
    }
  }, _vm.listeners), [_c('button', _vm._b({
    ref: "item",
    staticClass: "vs-select--item",
    class: {
      'activex': _vm.$parent.parent.multiple ? _vm.getValue.indexOf(_vm.value) != -1 : _vm.getValue == _vm.value,
      'con-icon': _vm.$parent.parent.multiple,
      'disabledx': _vm.disabledx
    },
    style: _vm.styles,
    attrs: {
      "disabled": _vm.disabled,
      "type": "button",
      "name": "button"
    },
    on: {
      "keydown": [function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "backspace", undefined, $event.key, undefined)) return null;
        $event.preventDefault();
        return _vm.backspace.apply(null, arguments);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) return null;
        $event.preventDefault();
        return _vm.navigateOptions('next');
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) return null;
        $event.preventDefault();
        return _vm.navigateOptions('prev');
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        $event.preventDefault();
        return _vm.clickOption();
      }]
    }
  }, 'button', _vm.$attrs, false), [_vm.$parent.parent.multiple ? _c('vs-icon', {
    staticClass: "icon-item vs-select--item-icon",
    attrs: {
      "icon": "check_circle"
    }
  }) : _vm._e(), _c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.getText)
    }
  })], 1)]);
};
var vsSelectItemvue_type_template_id_2247f336_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsSelect/vsSelectItem.vue?vue&type=template&id=2247f336&lang=html

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __webpack_require__("4d63");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.dot-all.js
var es_regexp_dot_all = __webpack_require__("c607");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.sticky.js
var es_regexp_sticky = __webpack_require__("2c3e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSelect/vsSelectItem.vue?vue&type=script&lang=js















/* harmony default export */ var vsSelectItemvue_type_script_lang_js = ({
  name: 'VsSelectItem',
  inheritAttrs: false,
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      default: null
    },
    text: {
      default: null
    }
  },
  data: function data() {
    return {
      hoverx: false,
      visible: true,
      getText: null,
      valueInputx: ''
    };
  },
  computed: {
    disabledx: function disabledx() {
      if (this.$parent.parent.multiple) {
        if (this.isActive) {
          return false;
        } else {
          return this.$parent.parent.maxSelected == this.$parent.parent.value.length;
        }
      } else {
        return false;
      }
    },
    isActive: function isActive() {
      return this.$parent.parent.multiple ? this.getValue.indexOf(this.value) != -1 : this.getValue == this.value;
    },
    listeners: function listeners() {
      var _this = this;
      return _objectSpread2(_objectSpread2({}, this.$listeners), {}, {
        blur: function blur(event) {
          if (event.relatedTarget ? !event.relatedTarget.closest('.vs-select--options') : true) {
            _this.$parent.parent.closeOptions();
          }
        },
        click: function click(event) {
          return _this.clickOption(event);
        },
        mouseover: function mouseover(event) {
          _this.$emit('mouseover', event);
          _this.changeHover(true);
        },
        mouseout: function mouseout(event) {
          _this.$emit('mouseover', event);
          _this.changeHover(false);
        }
      });
    },
    styles: function styles() {
      return {
        background: this.isActive ? utils_color.getColor(this.$parent.parent.color, .1) : null,
        color: this.isActive ? utils_color.getColor(this.$parent.parent.color, 1) : null,
        fontWeight: this.isActive ? 'bold' : null
      };
    },
    getValue: function getValue() {
      return this.$parent.parent.value;
    }
  },
  watch: {
    '$parent.parent.active': function $parentParentActive() {
      var _this2 = this;
      this.$nextTick(function () {
        if (_this2.$parent.parent.multiple ? _this2.getValue.indexOf(_this2.value) != -1 : _this2.getValue == _this2.value) {
          _this2.$emit('update:isSelected', true);
          _this2.getText = _this2.text;
          _this2.putValue();
        } else {
          _this2.$emit('update:isSelected', false);
          _this2.getText = _this2.text;
          _this2.putValue();
        }
      });
    },
    valueInputx: function valueInputx() {
      if (this.visible) {
        var valueInputx = this.valueInputx.split(',');
        if (valueInputx[valueInputx.length - 1] == '') {
          this.getText = this.text;
          return;
        }
        var valuex = valueInputx[valueInputx.length - 1];
        var re = new RegExp(valuex, "i");
        if (this.text.toUpperCase().indexOf(valuex.toUpperCase()) == 0) {
          valuex = this.MaysPrimera(valuex);
        }
        var text = this.text.replace(re, "<span class=\"searchx\">".concat(valuex, "</span>"));
        this.getText = text;
      } else {
        this.getText = this.text;
      }
    }
  },
  created: function created() {
    var _this3 = this;
    this.putValue();
    this.$nextTick(function () {
      if (_this3.$parent.parent.multiple ? _this3.getValue.indexOf(_this3.value) != -1 : _this3.getValue == _this3.value) {
        _this3.$emit('update:isSelected', true);
        _this3.getText = _this3.text;
        _this3.putValue();
      } else {
        _this3.$emit('update:isSelected', false);
        _this3.getText = _this3.text;
        _this3.putValue();
      }
    });
  },
  updated: function updated() {
    this.putValue();
  },
  methods: {
    changeHover: function changeHover(booleanx) {
      this.hoverx = booleanx;
    },
    MaysPrimera: function MaysPrimera(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    backspace: function backspace() {
      if (this.$parent.parent.autocomplete) {
        var valueInput = this.$parent.parent.$refs.inputselect.value;
        this.$parent.parent.$refs.inputselect.value = valueInput.substr(0, valueInput.length - 1);
        this.$parent.parent.$refs.inputselect.focus();
      }
    },
    navigateOptions: function navigateOptions(orientation) {
      var orientationObject = 'nextSibling',
        lengthx = 0;
      function getNextLi(li, orientationObject) {
        if (li && li.localName == 'li') {
          var lix = li[orientationObject];
          if (li.style) {
            if (li.style.display == 'none') {
              return getNextLi(lix, orientationObject);
            } else {
              return li;
            }
          } else {
            return li;
          }
        } else {
          return false;
        }
      }
      var children = this.$parent.parent.$children;
      children.forEach(function (item) {
        if (item.$children.length > 0) {
          children = [].concat(_toConsumableArray(children), _toConsumableArray(item.$children));
        }
      });
      children = children.filter(function (item) {
        return item.$children.length == 0 && item.$el.localName != 'span';
      });
      if (orientation == 'prev') {
        orientationObject = 'previousSibling';
        lengthx = children.length;
      }
      var nextElement = getNextLi(this.$el[orientationObject], orientationObject);
      if (nextElement) {
        nextElement.querySelector('.vs-select--item').focus();
      } else {
        if (lengthx === children.length) lengthx--;
        getNextLi(children[lengthx == 0 ? 1 : lengthx].$el, orientationObject).querySelector('.vs-select--item').focus();
      }
    },
    focusValue: function focusValue(index) {
      var _this4 = this;
      if (this.$parent.parent.multiple ? this.$parent.parent.value.indexOf(this.value) != -1 : this.value == this.$parent.parent.value) {
        if (!this.$parent.parent.autocomplete) {
          setTimeout(function () {
            _this4.$refs.item.focus();
          }, 50);
        }
      } else if (index === 0) {
        if (!this.$parent.parent.autocomplete) {
          setTimeout(function () {
            _this4.$refs.item.focus();
          }, 50);
        }
      }
    },
    putValue: function putValue() {
      if (this.value == this.$parent.parent.value) {
        this.$parent.parent.valuex = this.text;
      }
    },
    clickOption: function clickOption() {
      if (this.disabledx) {
        return;
      }
      var text = this.text;
      if (!this.$parent.parent.multiple) {
        this.$parent.parent.active = false;
        document.removeEventListener('click', this.$parent.parent.clickBlur);
        this.$parent.parent.valuex = text;
        this.$parent.parent.$emit('input', this.value);
        this.$parent.parent.changeValue();
      } else if (this.$parent.parent.multiple) {
        this.$parent.parent.valuex = text;
        this.$parent.parent.addMultiple(this.value);
      }
      this.$parent.parent.$children.map(function (item) {
        item.valueInputx = '';
      });
    },
    // methods colors
    isColor: function isColor() {
      return utils_color.isColor(this.color);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsSelect/vsSelectItem.vue?vue&type=script&lang=js
 /* harmony default export */ var vsSelect_vsSelectItemvue_type_script_lang_js = (vsSelectItemvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsSelect/vsSelectItem.vue





/* normalize component */

var vsSelectItem_component = normalizeComponent(
  vsSelect_vsSelectItemvue_type_script_lang_js,
  vsSelectItemvue_type_template_id_2247f336_lang_html_render,
  vsSelectItemvue_type_template_id_2247f336_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsSelectItem = (vsSelectItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSelect/vsSelectGroup.vue?vue&type=template&id=e3d354fc
var vsSelectGroupvue_type_template_id_e3d354fc_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vs-select-group"
  }, [!_vm.filterx ? _c('h4', [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._t("default")], 2);
};
var vsSelectGroupvue_type_template_id_e3d354fc_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsSelect/vsSelectGroup.vue?vue&type=template&id=e3d354fc

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSelect/vsSelectGroup.vue?vue&type=script&lang=js
/* harmony default export */ var vsSelectGroupvue_type_script_lang_js = ({
  name: 'VsSelectGroup',
  props: {
    title: {
      default: 'Group',
      type: String
    }
  },
  data: function data() {
    return {
      activeTitle: true
    };
  },
  computed: {
    filterx: function filterx() {
      return this.$parent.filterx;
    },
    parent: function parent() {
      return this.$parent;
    }
  },
  methods: {
    focusValue: function focusValue(index) {
      this.$children[0].focusValue(index);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsSelect/vsSelectGroup.vue?vue&type=script&lang=js
 /* harmony default export */ var vsSelect_vsSelectGroupvue_type_script_lang_js = (vsSelectGroupvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsSelect/vsSelectGroup.vue





/* normalize component */

var vsSelectGroup_component = normalizeComponent(
  vsSelect_vsSelectGroupvue_type_script_lang_js,
  vsSelectGroupvue_type_template_id_e3d354fc_render,
  vsSelectGroupvue_type_template_id_e3d354fc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsSelectGroup = (vsSelectGroup_component.exports);
// CONCATENATED MODULE: ./src/components/vsSelect/index.js




/* harmony default export */ var components_vsSelect = (function (Vue) {
  Vue.component(vsSelect.name, vsSelect);
  Vue.component(vsSelectItem.name, vsSelectItem);
  Vue.component(vsSelectGroup.name, vsSelectGroup);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSwitch/vsSwitch.vue?vue&type=template&id=1529e6a0&lang=html
var vsSwitchvue_type_template_id_1529e6a0_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('button', _vm._b({
    staticClass: "vs-component vs-switch",
    class: ["vs-switch-".concat(_vm.color), {
      'vs-switch-active': _vm.isChecked || _vm.$attrs.checked
    }],
    style: _vm.style
  }, 'button', _vm.$attrs, false), [_c('input', _vm._g(_vm._b({
    ref: "inputCheckbox",
    staticClass: "input-switch vs-switch--input",
    attrs: {
      "disabled": _vm.$attrs.disabled,
      "type": "checkbox"
    },
    domProps: {
      "value": _vm.value
    }
  }, 'input', _vm.$attrs, false), _vm.listeners)), _c('span', {
    ref: "on",
    staticClass: "text-on text-switch vs-switch--text",
    class: {
      'active-text': _vm.isChecked || _vm.$attrs.checked
    }
  }, [_vm._t("on"), _c('vs-icon', {
    staticClass: "icons-switch vs-switch--icon",
    attrs: {
      "icon-pack": _vm.iconPack,
      "icon": _vm.vsIconOn || _vm.vsIcon
    }
  })], 2), _c('span', {
    ref: "off",
    staticClass: "text-off text-switch vs-switch--text",
    class: {
      'active-text': !_vm.isChecked && !_vm.$attrs.checked
    }
  }, [_vm._t("off"), _c('vs-icon', {
    staticClass: "icons-switch vs-switch--icon",
    attrs: {
      "icon-pack": _vm.iconPack,
      "icon": _vm.vsIconOff || _vm.vsIcon
    }
  })], 2), _c('span', {
    staticClass: "vs-circle-switch vs-switch--circle"
  })]);
};
var vsSwitchvue_type_template_id_1529e6a0_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsSwitch/vsSwitch.vue?vue&type=template&id=1529e6a0&lang=html

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSwitch/vsSwitch.vue?vue&type=script&lang=js







/* harmony default export */ var vsSwitchvue_type_script_lang_js = ({
  name: 'VsSwitch',
  inheritAttrs: false,
  props: {
    value: {},
    color: {
      default: 'primary',
      type: String
    },
    vsIcon: {
      default: null,
      type: String
    },
    vsIconOn: {
      default: null,
      type: String
    },
    vsIconOff: {
      default: null,
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    vsValue: {}
  },
  data: function data() {
    return {
      widthx: 42,
      checkboxClicked: false
    };
  },
  computed: {
    style: function style() {
      return {
        background: this.value ? utils_color.getColor(this.color, 1) : null,
        width: "".concat(this.widthx, "px")
      };
    },
    listeners: function listeners() {
      var _this = this;
      return _objectSpread2(_objectSpread2({}, this.$listeners), {}, {
        input: function input(evt) {
          _this.toggleValue(evt);
        }
      });
    },
    isChecked: function isChecked() {
      return this.isArrayx() ? this.isArrayIncludes() : this.value;
    }
  },
  mounted: function mounted() {
    var _this2 = this;
    this.$nextTick(function () {
      var w = _this2.$refs.on.clientWidth > _this2.$refs.off.clientWidth ? _this2.$refs.on.clientWidth : _this2.$refs.off.clientWidth;
      _this2.widthx = w + 24;
    });
  },
  methods: {
    toggleValue: function toggleValue(evt) {
      if (Array.isArray(this.value)) {
        this.setArray(evt);
      } else {
        this.$emit('input', !this.value);
        this.$emit('change', evt);
      }
    },
    setArray: function setArray(evt) {
      var value = this.value.slice(0); // Copy Array.
      if (this.isArrayIncludes()) {
        value.splice(value.indexOf(this.vsValue), 1); // delete value
        this.$emit('input', value);
        this.$emit('change', evt);
      } else {
        value.push(this.vsValue); // add value new
        this.$emit('input', value);
        this.$emit('change', evt);
      }
    },
    isArrayIncludes: function isArrayIncludes() {
      var modelx = this.value;
      var value = this.vsValue;
      return modelx.includes(value);
    },
    isArrayx: function isArrayx() {
      return Array.isArray(this.value);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsSwitch/vsSwitch.vue?vue&type=script&lang=js
 /* harmony default export */ var vsSwitch_vsSwitchvue_type_script_lang_js = (vsSwitchvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsSwitch/vsSwitch.vue





/* normalize component */

var vsSwitch_component = normalizeComponent(
  vsSwitch_vsSwitchvue_type_script_lang_js,
  vsSwitchvue_type_template_id_1529e6a0_lang_html_render,
  vsSwitchvue_type_template_id_1529e6a0_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsSwitch = (vsSwitch_component.exports);
// CONCATENATED MODULE: ./src/components/vsSwitch/index.js


/* harmony default export */ var components_vsSwitch = (function (Vue) {
  Vue.component(vsSwitch.name, vsSwitch);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsCheckBox/vsCheckBox.vue?vue&type=template&id=3519d395&lang=html
var vsCheckBoxvue_type_template_id_3519d395_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vs-component con-vs-checkbox",
    class: ["vs-checkbox-".concat(_vm.color), "vs-checkbox-".concat(_vm.size)]
  }, [_c('input', _vm._g(_vm._b({
    staticClass: "vs-checkbox--input",
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": _vm.isChecked || _vm.$attrs.checked,
      "value": _vm.value
    }
  }, 'input', _vm.$attrs, false), _vm.listeners)), _c('span', {
    staticClass: "checkbox_x vs-checkbox",
    style: _vm.style
  }, [_c('span', {
    staticClass: "vs-checkbox--check",
    style: _vm.style_check
  }, [_c('vs-icon', {
    staticClass: "vs-checkbox--icon",
    attrs: {
      "icon": _vm.icon,
      "icon-pack": _vm.iconPack
    }
  })], 1)]), _c('span', {
    staticClass: "con-slot-label"
  }, [_vm._t("default")], 2)]);
};
var vsCheckBoxvue_type_template_id_3519d395_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsCheckBox/vsCheckBox.vue?vue&type=template&id=3519d395&lang=html

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsCheckBox/vsCheckBox.vue?vue&type=script&lang=js







/* harmony default export */ var vsCheckBoxvue_type_script_lang_js = ({
  name: 'VsCheckbox',
  inheritAttrs: false,
  props: {
    color: {
      default: 'primary',
      type: String
    },
    value: {},
    icon: {
      default: 'check',
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    vsValue: {
      type: [Boolean, Array, String, Number, Object],
      default: false
    },
    size: {
      default: 'default',
      type: String
    }
  },
  computed: {
    style_check: function style_check() {
      return {
        background: this.isChecked ? utils_color.getColor(this.color, 1) : null
      };
    },
    style: function style() {
      return {
        border: "2px solid ".concat(this.isChecked ? utils_color.getColor(this.color, 1) : 'rgb(180, 180, 180)')
      };
    },
    listeners: function listeners() {
      var _this = this;
      return {
        // ...this.$listeners,
        change: function change(evt) {
          _this.toggleValue(evt);
        }
        // input: (evt) => {
        //   this.toggleValue(evt)
        // }
      };
    },
    isChecked: function isChecked() {
      return this.isArrayx() ? this.isArrayIncludes() : this.value;
    }
  },
  methods: {
    giveColor: function giveColor(color) {
      return utils_color.rColor(color);
    },
    toggleValue: function toggleValue(evt) {
      if (this.isArrayx()) {
        this.setArray();
      } else if (typeof this.vsValue == 'string') {
        this.setValueString();
      } else {
        this.$emit('input', !this.value);
        this.$emit('change', evt);
      }
    },
    setArray: function setArray() {
      // Copy Array
      var value = this.value.slice(0);
      if (this.isArrayIncludes()) {
        value.splice(value.indexOf(this.vsValue), 1);
        this.$emit('input', value);
        this.$emit('change', value);
      } else {
        value.push(this.vsValue);
        this.$emit('input', value);
        this.$emit('change', value);
      }
    },
    setValueString: function setValueString() {
      if (this.value == this.vsValue) {
        this.$emit('input', null);
        this.$emit('change', null);
      } else {
        this.$emit('input', this.vsValue);
        this.$emit('change', this.vsValue);
      }
    },
    isArrayIncludes: function isArrayIncludes() {
      var modelx = this.value;
      var value = this.vsValue;
      return modelx.includes(value);
    },
    isArrayx: function isArrayx() {
      return Array.isArray(this.value);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsCheckBox/vsCheckBox.vue?vue&type=script&lang=js
 /* harmony default export */ var vsCheckBox_vsCheckBoxvue_type_script_lang_js = (vsCheckBoxvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsCheckBox/vsCheckBox.vue





/* normalize component */

var vsCheckBox_component = normalizeComponent(
  vsCheckBox_vsCheckBoxvue_type_script_lang_js,
  vsCheckBoxvue_type_template_id_3519d395_lang_html_render,
  vsCheckBoxvue_type_template_id_3519d395_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsCheckBox = (vsCheckBox_component.exports);
// CONCATENATED MODULE: ./src/components/vsCheckBox/index.js


/* harmony default export */ var components_vsCheckBox = (function (Vue) {
  Vue.component(vsCheckBox.name, vsCheckBox);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsRadio/vsRadio.vue?vue&type=template&id=0c37efa3&lang=html
var vsRadiovue_type_template_id_0c37efa3_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('label', {
    staticClass: "vs-component con-vs-radio",
    class: ["vs-radio-".concat(_vm.color)]
  }, [_c('input', _vm._g(_vm._b({
    staticClass: "vs-radio--input",
    attrs: {
      "name": _vm.vsName || _vm.value,
      "type": "radio"
    },
    domProps: {
      "checked": _vm.isChecked,
      "value": _vm.value
    }
  }, 'input', _vm.$attrs, false), _vm.listeners)), _c('span', {
    staticClass: "vs-radio"
  }, [_c('span', {
    staticClass: "vs-radio--borde",
    style: _vm.styles
  }), _c('span', {
    staticClass: "vs-radio--circle",
    style: _vm.styleCircle
  })]), _c('span', {
    staticClass: "vs-radio--label"
  }, [_vm._t("default")], 2)]);
};
var vsRadiovue_type_template_id_0c37efa3_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsRadio/vsRadio.vue?vue&type=template&id=0c37efa3&lang=html

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.stringify.js
var es_json_stringify = __webpack_require__("e9c4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsRadio/vsRadio.vue?vue&type=script&lang=js




/* harmony default export */ var vsRadiovue_type_script_lang_js = ({
  name: 'VsRadio',
  inheritAttrs: false,
  props: {
    value: {},
    vsValue: {},
    vsName: {},
    color: {
      default: 'primary',
      type: String
    }
  },
  computed: {
    listeners: function listeners() {
      var _this = this;
      return _objectSpread2(_objectSpread2({}, this.$listeners), {}, {
        input: function input() {
          return _this.$emit('input', _this.vsValue);
        },
        click: function click() {
          return _this.$emit('input', _this.vsValue);
        }
      });
    },
    attrs: function attrs() {
      var attrsx = JSON.parse(JSON.stringify(this.$attrs));
      return {
        attrsx: attrsx
      };
    },
    isChecked: function isChecked() {
      return this.vsValue == this.value;
    },
    styles: function styles() {
      return {
        'border': "2px solid ".concat(this.isChecked ? utils_color.getColor(this.color, 1) : 'rgb(200, 200, 200)')
      };
    },
    styleCircle: function styleCircle() {
      return {
        'background': utils_color.getColor(this.color, 1),
        'box-shadow': "0px 3px 12px 0px ".concat(utils_color.getColor(this.color, .4))
      };
    }
  },
  methods: {
    giveColor: function giveColor(color, opacity) {
      return utils_color.rColor(color, opacity);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsRadio/vsRadio.vue?vue&type=script&lang=js
 /* harmony default export */ var vsRadio_vsRadiovue_type_script_lang_js = (vsRadiovue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsRadio/vsRadio.vue





/* normalize component */

var vsRadio_component = normalizeComponent(
  vsRadio_vsRadiovue_type_script_lang_js,
  vsRadiovue_type_template_id_0c37efa3_lang_html_render,
  vsRadiovue_type_template_id_0c37efa3_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsRadio = (vsRadio_component.exports);
// CONCATENATED MODULE: ./src/components/vsRadio/index.js


/* harmony default export */ var components_vsRadio = (function (Vue) {
  Vue.component(vsRadio.name, vsRadio);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsInput/vsInput.vue?vue&type=template&id=5e5503a8&lang=html
var vsInputvue_type_template_id_5e5503a8_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "coninput",
    staticClass: "vs-component vs-con-input-label vs-input",
    class: ["vs-input-".concat(_vm.color), {
      'isFocus': _vm.isFocus,
      'input-icon-validate-success': _vm.success,
      'input-icon-validate-danger': _vm.danger,
      'input-icon-validate-warning': _vm.warning,
      'is-label-placeholder': _vm.labelPlaceholder
    }],
    style: _vm.styleLabel
  }, [(_vm.labelPlaceholder ? false : _vm.label) ? _c('label', {
    staticClass: "vs-input--label",
    attrs: {
      "for": ""
    },
    on: {
      "click": _vm.focusInput
    }
  }, [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _c('div', {
    staticClass: "vs-con-input"
  }, [_c('input', _vm._g(_vm._b({
    ref: "vsinput",
    staticClass: "vs-inputx vs-input--input",
    class: [_vm.size, {
      'hasValue': _vm.value !== '',
      'hasIcon': _vm.icon,
      'icon-after-input': _vm.iconAfter
    }],
    style: _vm.style,
    attrs: {
      "autofocus": _vm.autofocus,
      "placeholder": null,
      "type": _vm.$attrs.type ? _vm.$attrs.type : 'text'
    },
    domProps: {
      "value": _vm.value
    }
  }, 'input', _vm.$attrs, false), _vm.listeners)), _c('transition', {
    attrs: {
      "name": "placeholderx"
    }
  }, [_vm.isValue && (_vm.labelPlaceholder || _vm.$attrs.placeholder) ? _c('span', {
    ref: "spanplaceholder",
    staticClass: "input-span-placeholder vs-input--placeholder",
    class: [_vm.labelPlaceholder && _vm.size, _vm.size, {
      'vs-placeholder-label': _vm.labelPlaceholder
    }],
    style: _vm.styleLabel,
    on: {
      "click": _vm.focusInput
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$attrs.placeholder || _vm.labelPlaceholder) + "\n      ")]) : _vm._e()]), _vm.icon ? _c('vs-icon', {
    staticClass: "icon-inputx notranslate vs-input--icon",
    class: {
      'icon-after': _vm.iconAfter,
      'icon-no-border': _vm.iconNoBorder
    },
    attrs: {
      "icon-pack": _vm.iconPack,
      "icon": _vm.icon
    },
    on: {
      "click": function click($event) {
        _vm.focusInput();
        _vm.$emit('icon-click');
      }
    }
  }) : _vm._e(), _c('transition', {
    attrs: {
      "name": "icon-validate"
    }
  }, [_vm.success || _vm.danger || _vm.warning ? _c('span', {
    staticClass: "input-icon-validate vs-input--icon-validate",
    class: {
      'icon-before': _vm.iconAfter
    }
  }, [_c('vs-icon', {
    class: {
      'icon-before': _vm.iconAfter
    },
    attrs: {
      "icon-pack": _vm.valIconPack,
      "icon": _vm.getIcon
    }
  })], 1) : _vm._e()])], 1), _c('transition-group', {
    on: {
      "before-enter": _vm.beforeEnter,
      "enter": _vm.enter,
      "leave": _vm.leave
    }
  }, [_vm.success ? _c('div', {
    key: "success",
    staticClass: "con-text-validation vs-input--text-validation"
  }, [_c('span', {
    staticClass: "span-text-validation span-text-validation-success vs-input--text-validation-span"
  }, [_vm._v("\n        " + _vm._s(_vm.successText) + "\n      ")])]) : _vm.danger ? _c('div', {
    key: "danger",
    staticClass: "con-text-validation span-text-validation-danger vs-input--text-validation-span"
  }, [_c('span', {
    staticClass: "span-text-validation"
  }, [_vm._v("\n        " + _vm._s(_vm.dangerText) + "\n      ")])]) : _vm.warning ? _c('div', {
    key: "warning",
    staticClass: "con-text-validation span-text-validation-warning vs-input--text-validation-span"
  }, [_c('span', {
    staticClass: "span-text-validation"
  }, [_vm._v("\n        " + _vm._s(_vm.warningText) + "\n      ")])]) : _vm._e(), _vm.descriptionText ? _c('div', {
    key: "description",
    staticClass: "con-text-validation span-text-validation vs-input--text-validation-span"
  }, [_c('span', {
    staticClass: "span-text-validation"
  }, [_vm._v("\n        " + _vm._s(_vm.descriptionText) + "\n      ")])]) : _vm._e()])], 1);
};
var vsInputvue_type_template_id_5e5503a8_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsInput/vsInput.vue?vue&type=template&id=5e5503a8&lang=html

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsInput/vsInput.vue?vue&type=script&lang=js



/* harmony default export */ var vsInputvue_type_script_lang_js = ({
  name: 'VsInput',
  inheritAttrs: false,
  props: {
    value: {
      default: '',
      type: [String, Number]
    },
    labelPlaceholder: {
      default: null,
      type: [String, Number]
    },
    label: {
      default: null,
      type: [String, Number]
    },
    autofocus: {
      default: false,
      type: [Boolean, String]
    },
    icon: {
      default: null,
      type: String
    },
    iconAfter: {
      default: false,
      type: [Boolean, String]
    },
    iconNoBorder: {
      default: false,
      type: Boolean
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    color: {
      default: 'primary',
      type: String
    },
    success: {
      default: false,
      type: Boolean
    },
    danger: {
      default: false,
      type: Boolean
    },
    warning: {
      default: false,
      type: Boolean
    },
    successText: {
      default: null,
      type: String
    },
    dangerText: {
      default: null,
      type: String
    },
    warningText: {
      default: null,
      type: String
    },
    descriptionText: {
      default: null,
      type: String
    },
    size: {
      default: 'normal',
      type: String
    },
    valIconPack: {
      default: 'material-icons',
      type: String
    },
    valIconSuccess: {
      default: null,
      type: String
    },
    valIconDanger: {
      default: null,
      type: String
    },
    valIconWarning: {
      default: null,
      type: String
    }
  },
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  data: function data() {
    return {
      isFocus: false
    };
  },
  computed: {
    style: function style() {
      return {
        border: "1px solid ".concat(this.isFocus ? utils_color.getColor(this.color, 1) : 'rgba(0, 0, 0,.2)')
      };
    },
    styleLabel: function styleLabel() {
      return {
        color: this.isFocus ? utils_color.getColor(this.color, 1) : null
      };
    },
    listeners: function listeners() {
      var _this = this;
      return _objectSpread2(_objectSpread2({}, this.$listeners), {}, {
        input: function input(evt) {
          _this.$emit('input', evt.target.value);
        },
        focus: function focus(evt) {
          _this.$emit('focus', evt);
          _this.changeFocus(true);
        },
        blur: function blur(evt) {
          _this.$emit('blur', evt);
          _this.changeFocus(false);
        }
      });
    },
    isValue: function isValue() {
      return this.labelPlaceholder ? true : !this.value;
    },
    getIcon: function getIcon() {
      return this.danger ? this.valIconDanger : this.warning ? this.valIconWarning : this.success ? this.valIconSuccess : '';
    }
  },
  methods: {
    // animation
    changeFocus: function changeFocus(booleanx) {
      this.isFocus = booleanx;
    },
    beforeEnter: function beforeEnter(el) {
      el.style.height = 0;
    },
    enter: function enter(el, done) {
      var h = el.scrollHeight;
      el.style.height = h + 'px';
      done();
    },
    leave: function leave(el) {
      el.style.height = 0 + 'px';
    },
    focusInput: function focusInput() {
      this.$refs.vsinput.focus();
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsInput/vsInput.vue?vue&type=script&lang=js
 /* harmony default export */ var vsInput_vsInputvue_type_script_lang_js = (vsInputvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsInput/vsInput.vue





/* normalize component */

var vsInput_component = normalizeComponent(
  vsInput_vsInputvue_type_script_lang_js,
  vsInputvue_type_template_id_5e5503a8_lang_html_render,
  vsInputvue_type_template_id_5e5503a8_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsInput = (vsInput_component.exports);
// CONCATENATED MODULE: ./src/components/vsInput/index.js


/* harmony default export */ var components_vsInput = (function (Vue) {
  Vue.component(vsInput.name, vsInput);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTabs/vsTabs.vue?vue&type=template&id=0bf87e8c&lang=html
var vsTabsvue_type_template_id_0bf87e8c_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "con-vs-tabs vs-tabs",
    class: ["vs-tabs-".concat(_vm.color), "vs-tabs-position-".concat(_vm.position)]
  }, [_c('div', {
    staticClass: "con-ul-tabs"
  }, [_c('ul', {
    ref: "ul",
    staticClass: "ul-tabs vs-tabs--ul",
    class: ["ul-tabs-".concat(_vm.alignment)]
  }, _vm._l(_vm.children, function (child, index) {
    return _c('li', {
      ref: "li",
      refInFor: true,
      staticClass: "vs-tabs--li",
      class: {
        'activeChild': _vm.childActive == index
      },
      style: _vm.childActive == index ? _vm.styleTab : {},
      on: {
        "mouseover": function mouseover($event) {
          _vm.hover = true;
        },
        "mouseout": function mouseout($event) {
          _vm.hover = false;
        }
      }
    }, [_c('button', _vm._g(_vm._b({
      staticClass: "vs-tabs--btn",
      style: _vm.styleAlignIcon(child.icon),
      attrs: {
        "type": "button"
      },
      on: {
        "click": function click($event) {
          return _vm.activeChild(index);
        }
      }
    }, 'button', child.attrs, false), child.listeners), [child.icon ? _c('vs-icon', {
      staticClass: "vs-tabs--btn-icon",
      attrs: {
        "icon-pack": child.iconPack,
        "icon": child.icon,
        "color": _vm.color
      }
    }) : _vm._e(), child.label ? _c('span', [_vm._v(_vm._s(child.label))]) : _vm._e()], 1), child.tag ? _c('button', {
      staticClass: "vs-tabs--btn-tag",
      on: {
        "click": function click($event) {
          return _vm.clickTag(child);
        }
      }
    }, [_c('vs-icon', {
      attrs: {
        "icon-pack": child.iconPack,
        "icon": child.tag,
        "color": child.tagColor
      }
    })], 1) : _vm._e()]);
  }), 0), _c('span', {
    staticClass: "line-vs-tabs",
    style: _vm.stylex
  })]), _c('div', {
    staticClass: "con-slot-tabs"
  }, [_vm._t("default")], 2)]);
};
var vsTabsvue_type_template_id_0bf87e8c_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsTabs/vsTabs.vue?vue&type=template&id=0bf87e8c&lang=html

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsIcon/vsIcon.vue?vue&type=template&id=791767ed
var vsIconvue_type_template_id_791767ed_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('i', _vm._g(_vm._b({
    staticClass: "vs-icon notranslate icon-scale",
    class: [_vm.iconPack, _vm.iconPack != 'material-icons' ? _vm.icon : '', _vm.iconClass, _vm.getBg, _vm.getBgSize, {
      'round': _vm.round
    }],
    style: _vm.iconStyle
  }, 'i', _vm.$attrs, false), _vm.$listeners), [_vm._t("default", function () {
    return [_vm._v(_vm._s(_vm.iconPack == 'material-icons' ? _vm.icon : ''))];
  })], 2);
};
var vsIconvue_type_template_id_791767ed_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsIcon/vsIcon.vue?vue&type=template&id=791767ed

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsIcon/vsIcon.vue?vue&type=script&lang=js




/* harmony default export */ var vsIconvue_type_script_lang_js = ({
  name: 'VsIcon',
  props: {
    icon: {
      default: null,
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    color: {
      default: null,
      type: String
    },
    bg: {
      default: null,
      type: String
    },
    size: {
      default: null,
      type: String
    },
    round: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    iconClass: function iconClass() {
      var classes = {};
      classes[this.size] = true;
      if (utils_color.isColor(this.color)) {
        classes["vs-icon-".concat(this.color)] = true;
      }
      return classes;
    },
    iconStyle: function iconStyle() {
      var style = {
        width: /(px)/.test(this.size) ? this.size : /(em)/.test(this.size) ? this.size : null,
        height: /(px)/.test(this.size) ? this.size : /(em)/.test(this.size) ? this.size : null,
        'font-size': /(px)/.test(this.size) ? this.size : /(em)/.test(this.size) ? this.size : null,
        color: this.getColor,
        background: this.getBgColor
      };
      return style;
    },
    getBg: function getBg() {
      var classes = {};
      if (utils_color.isColor(this.bg)) {
        classes["con-vs-icon-bg-".concat(this.bg)] = true;
      }
      return classes;
    },
    getBgSize: function getBgSize() {
      var classes = {};
      if (['small', 'medium', 'large'].includes(this.size)) {
        classes["bg-".concat(this.size)] = true;
        classes['vs-icon-bg'] = true;
      }
      return classes;
    },
    getColor: function getColor() {
      return utils_color.isColor(this.color) ? this.color : this.color;
    },
    getBgColor: function getBgColor() {
      return utils_color.isColor(this.bg) ? this.bg : this.bg;
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsIcon/vsIcon.vue?vue&type=script&lang=js
 /* harmony default export */ var vsIcon_vsIconvue_type_script_lang_js = (vsIconvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsIcon/vsIcon.vue





/* normalize component */

var vsIcon_component = normalizeComponent(
  vsIcon_vsIconvue_type_script_lang_js,
  vsIconvue_type_template_id_791767ed_render,
  vsIconvue_type_template_id_791767ed_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsIcon = (vsIcon_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTabs/vsTabs.vue?vue&type=script&lang=js





/* harmony default export */ var vsTabsvue_type_script_lang_js = ({
  name: 'VsTabs',
  components: {
    vsIcon: vsIcon
  },
  props: {
    value: {
      default: 0,
      type: [Number, String]
    },
    color: {
      default: 'primary',
      type: String
    },
    tagColor: {
      default: 'primary',
      type: String
    },
    alignment: {
      default: 'left',
      type: String
    },
    position: {
      default: 'top',
      type: String
    }
  },
  data: function data() {
    return {
      topx: 'auto',
      heightx: 2,
      hover: false,
      children: [],
      childActive: 0,
      leftx: 0,
      widthx: 0,
      these: false
    };
  },
  computed: {
    styleTab: function styleTab() {
      return {
        color: utils_color.getColor(this.color, 1)
      };
    },
    stylex: function stylex() {
      return {
        top: "".concat(this.topx, "px"),
        left: "".concat(this.leftx, "px"),
        width: "".concat(this.widthx, "px"),
        height: "".concat(this.heightx, "px"),
        background: "linear-gradient(30deg, ".concat(utils_color.getColor(this.color, 1), " 0%, ").concat(utils_color.getColor(this.color, .5), " 100%)"),
        boxShadow: "0px 0px 8px 0px ".concat(utils_color.getColor(this.color, .5)),
        transform: "scaleX(".concat(this.these ? 1.3 : 1, ")")
      };
    }
  },
  watch: {
    value: function value(index) {
      var activeIndex = this.parseIndex(index);
      this.activeChild(activeIndex);
    }
  },
  mounted: function mounted() {
    var _this = this;
    var activeIndex = this.parseIndex(this.value);
    this.childActive = activeIndex;
    this.$nextTick(function () {
      _this.activeChild(activeIndex, true);
    });
  },
  methods: {
    clickTag: function clickTag(child) {
      this.$emit('click-tag', child);
    },
    styleAlignIcon: function styleAlignIcon(icon) {
      return icon ? 'display:flex;align-items:center' : '';
    },
    parseIndex: function parseIndex(index) {
      var activeIndex = this.childActive;
      if (index < 0) {
        activeIndex = 0;
      } else if (index >= this.$children.length) {
        activeIndex = this.$children.length - 1;
      } else if (typeof this.$children[index].$attrs.disabled === 'undefined') {
        activeIndex = parseInt(index);
      }
      return activeIndex;
    },
    activeChild: function activeChild(index, initialAnimation) {
      var _this2 = this;
      initialAnimation = !!initialAnimation;
      var elem = this.$refs.li[index];
      if (this.childActive == index && !initialAnimation) {
        this.these = true;
        elem.classList.add('isActive');
        setTimeout(function () {
          elem.classList.remove('isActive');
          _this2.these = false;
        }, 200);
      }
      this.$children.map(function (item, item_index) {
        if (item_index != index) {
          item.active = false;
        }
      });
      if (this.childActive > index) {
        this.$children[index].invert = true;
        this.$children[this.childActive].invert = false;
      } else {
        this.$children[this.childActive].invert = true;
        this.$children[index].invert = false;
      }
      this.$children[index].active = true;
      this.childActive = index;
      this.$emit('input', this.childActive);
      if (this.position == 'left' || this.position == 'right') {
        this.$children[index].vertical = true;
      }
      this.changePositionLine(elem, initialAnimation);
    },
    changePositionLine: function changePositionLine(elem, initialAnimation) {
      var _this3 = this;
      if (this.position == 'left' || this.position == 'right') {
        this.topx = elem.offsetTop;
        this.heightx = elem.offsetHeight;
        this.widthx = 2;
      } else {
        var update = function update() {
          _this3.leftx = elem.offsetLeft;
          _this3.widthx = elem.offsetWidth;
          _this3.topx = elem.offsetHeight + (elem.getBoundingClientRect().top - _this3.$refs.ul.getBoundingClientRect().top);
        };
        if (!initialAnimation) {
          update();
        } else {
          setTimeout(update, 100);
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsTabs/vsTabs.vue?vue&type=script&lang=js
 /* harmony default export */ var vsTabs_vsTabsvue_type_script_lang_js = (vsTabsvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsTabs/vsTabs.vue





/* normalize component */

var vsTabs_component = normalizeComponent(
  vsTabs_vsTabsvue_type_script_lang_js,
  vsTabsvue_type_template_id_0bf87e8c_lang_html_render,
  vsTabsvue_type_template_id_0bf87e8c_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsTabs = (vsTabs_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTabs/vsTab.vue?vue&type=template&id=68182bc2&lang=html
var vsTabvue_type_template_id_68182bc2_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('transition', {
    attrs: {
      "name": _vm.invert ? _vm.vertical ? 'fade-tab-vertical-invert' : 'fade-tab-invert' : _vm.vertical ? 'fade-tab-vertical' : 'fade-tab'
    }
  }, [_vm.active ? _c('div', {
    staticClass: "con-tab vs-tabs--content"
  }, [_vm._t("default")], 2) : _vm._e()]);
};
var vsTabvue_type_template_id_68182bc2_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsTabs/vsTab.vue?vue&type=template&id=68182bc2&lang=html

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTabs/vsTab.vue?vue&type=script&lang=js

/* harmony default export */ var vsTabvue_type_script_lang_js = ({
  name: 'VsTab',
  inheritAttrs: false,
  props: {
    label: {
      default: 'Label',
      type: String
    },
    icon: {
      default: '',
      type: String
    },
    tag: {
      default: '',
      type: String
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    }
  },
  data: function data() {
    return {
      vertical: false,
      active: false,
      id: null,
      invert: false
    };
  },
  watch: {
    label: function label(val) {
      this.$parent.children[this.id].label = val;
    },
    '$attrs': function $attrs(val) {
      this.$parent.children[this.id].attrs = val;
    }
  },
  mounted: function mounted() {
    this.id = this.$parent.children.length;
    this.$parent.children.push({
      label: this.label,
      icon: this.icon,
      iconPack: this.iconPack,
      tag: this.tag,
      id: this.$parent.children.length,
      listeners: this.$listeners,
      attrs: this.$attrs
    });
  }
});
// CONCATENATED MODULE: ./src/components/vsTabs/vsTab.vue?vue&type=script&lang=js
 /* harmony default export */ var vsTabs_vsTabvue_type_script_lang_js = (vsTabvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsTabs/vsTab.vue





/* normalize component */

var vsTab_component = normalizeComponent(
  vsTabs_vsTabvue_type_script_lang_js,
  vsTabvue_type_template_id_68182bc2_lang_html_render,
  vsTabvue_type_template_id_68182bc2_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsTab = (vsTab_component.exports);
// CONCATENATED MODULE: ./src/components/vsTabs/index.js



/* harmony default export */ var components_vsTabs = (function (Vue) {
  Vue.component(vsTabs.name, vsTabs);
  Vue.component(vsTab.name, vsTab);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSlider/vsSlider.vue?vue&type=template&id=cd89adc6&lang=html
var vsSlidervue_type_template_id_cd89adc6_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "con-vs-slider",
    class: ["vs-slider-".concat(_vm.color), {
      'disabledx': _vm.disabled
    }],
    on: {
      "mousewheel": function mousewheel($event) {
        $event.preventDefault();
        return _vm.mousewheelx.apply(null, arguments);
      },
      "keydown": [function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "left", 37, $event.key, ["Left", "ArrowLeft"])) return null;
        if ('button' in $event && $event.button !== 0) return null;
        return _vm.keydownLeft.apply(null, arguments);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "right", 39, $event.key, ["Right", "ArrowRight"])) return null;
        if ('button' in $event && $event.button !== 2) return null;
        return _vm.keydownRight.apply(null, arguments);
      }]
    }
  }, [_c('button', {
    ref: "slider",
    staticClass: "vs-slider",
    attrs: {
      "disabled": _vm.disabled,
      "type": "button"
    },
    on: {
      "click": function click($event) {
        _vm.clickSlider($event), _vm.actived = true;
      }
    }
  }, [_c('span', {
    staticClass: "vs-slider-line-one",
    class: {
      'hasTransition': _vm.effect
    },
    style: _vm.styleLineOne
  }), _c('span', {
    staticClass: "vs-slider-line-two"
  }), _c('span', {
    staticClass: "vs-slider-line-efect",
    class: {
      'run-effect': _vm.effect
    },
    style: _vm.styleEfect
  }), _vm._l(_vm.countTicks, function (tick, index) {
    return _vm.ticks && tick ? _c('span', {
      staticClass: "vs-slider--tick",
      class: {
        'isEnd': index == _vm.countTicks - 1
      },
      style: _vm.styleTicks(index)
    }) : _vm._e();
  })], 2), _c('button', {
    ref: "circle1",
    staticClass: "vs-circle-slider vs-circles-slider vs-slider--circles vs-slider--circle",
    class: {
      'hasTransition': _vm.effect,
      'isEquals': _vm.isEquals,
      'changeValue': _vm.changeValue,
      'isEndValue': _vm.value == _vm.max
    },
    style: _vm.styleCircle,
    attrs: {
      "disabled": _vm.disabled,
      "type": "button"
    },
    on: {
      "touchstart": function touchstart($event) {
        _vm.activeFocus($event), _vm.actived = true;
      },
      "mousedown": function mousedown($event) {
        _vm.activeFocus($event), _vm.actived = true;
      }
    }
  }, [_c('span', {
    staticClass: "text-circle-slider vs-slider--circle-text",
    style: _vm.styleText
  }, [_vm._v("\n      " + _vm._s(_vm.valueCircle1) + "\n      "), _vm.textFixed ? _c('span', [_vm._v("\n        " + _vm._s(_vm.textFixed) + "\n      ")]) : _vm._e(), _c('vs-icon', {
    attrs: {
      "icon-pack": _vm.iconPack,
      "icon": _vm.icon
    }
  })], 1)]), Array.isArray(_vm.value) ? _c('button', {
    ref: "circle2",
    staticClass: "vs-circle-slider-two vs-circles-slider vs-slider--circles vs-slider--circle-two",
    class: {
      'hasTransition': _vm.effect,
      'isEquals': _vm.isEquals,
      'changeValue': _vm.changeValue,
      'isEndValue': _vm.value == _vm.max
    },
    style: _vm.styleCircleTwo,
    attrs: {
      "disabled": _vm.disabled,
      "type": "button"
    },
    on: {
      "touchstart": function touchstart($event) {
        _vm.activeFocus($event), _vm.two = true, _vm.actived = true;
      },
      "mousedown": function mousedown($event) {
        _vm.activeFocus($event), _vm.two = true, _vm.actived = true;
      }
    }
  }, [_c('span', {
    staticClass: "text-circle-slider vs-slider--circle-text",
    style: _vm.styleText
  }, [_vm._v("\n      " + _vm._s(_vm.valueCircle2) + "\n      "), _vm.textFixed ? _c('span', [_vm._v("\n        " + _vm._s(_vm.textFixed) + "\n      ")]) : _vm._e(), _vm.icon ? _c('i', {
    staticClass: "material-icons notranslate",
    attrs: {
      "translate": "no"
    }
  }, [_vm._v("\n        " + _vm._s(_vm.icon) + "\n      ")]) : _vm._e()])]) : _vm._e()]);
};
var vsSlidervue_type_template_id_cd89adc6_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsSlider/vsSlider.vue?vue&type=template&id=cd89adc6&lang=html

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.math.sign.js
var es_math_sign = __webpack_require__("2af1");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__("b680");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSlider/vsSlider.vue?vue&type=script&lang=js




/* harmony default export */ var vsSlidervue_type_script_lang_js = ({
  name: "VsSlider",
  props: {
    value: {},
    disabled: {
      default: false,
      type: [Boolean, String]
    },
    color: {
      default: "primary",
      type: String
    },
    max: {
      default: 100,
      type: [Number, String]
    },
    min: {
      default: 0,
      type: Number
    },
    ticks: {
      default: false,
      type: Boolean
    },
    step: {
      default: 1,
      type: [Number, String]
    },
    stepDecimals: {
      type: Boolean,
      required: false,
      default: false
    },
    icon: {
      default: null,
      type: String
    },
    iconPack: {
      default: "material-icons",
      type: String
    },
    textFixed: {
      default: null,
      type: String
    }
  },
  data: function data() {
    return {
      leftx: 0,
      leftTwo: 0,
      effect: false,
      two: false,
      actived: false,
      changeValue: false,
      valueCircle1: 0,
      valueCircle2: 0
    };
  },
  computed: {
    isEquals: function isEquals() {
      return Array.isArray(this.value) ? this.value[0] == this.value[1] : false;
    },
    countTicks: function countTicks() {
      return this.max + 1;
    },
    /*
     * styles component
     */
    styleSlider: function styleSlider() {
      return {
        background: utils_color.getColor(this.color, 1)
      };
    },
    styleLineOne: function styleLineOne() {
      var widthx = this.leftTwo - this.leftx;
      var leftx = this.leftx;
      if (this.leftx > this.leftTwo) {
        widthx = this.leftx - this.leftTwo;
        leftx = this.leftTwo;
      }
      return {
        width: "".concat(widthx, "%"),
        left: "".concat(leftx, "%"),
        background: utils_color.getColor(this.color, 1)
      };
    },
    styleCircle: function styleCircle() {
      return {
        left: "".concat(this.leftx, "%"),
        border: "2px solid ".concat(utils_color.getColor(this.color, 1))
      };
    },
    styleCircleTwo: function styleCircleTwo() {
      return {
        left: "".concat(this.leftTwo, "%"),
        border: "2px solid ".concat(utils_color.getColor(this.color, 1))
      };
    },
    styleEfect: function styleEfect() {
      return {
        left: "".concat(this.leftx, "%"),
        background: utils_color.getColor(this.color, 1)
      };
    },
    styleText: function styleText() {
      return {
        background: utils_color.getColor(this.color, 1)
      };
    }
  },
  watch: {
    value: function value() {
      var _this = this;
      if (!this.actived) {
        this.changePosition();
      }
      this.changeValue = true;
      setTimeout(function () {
        _this.changeValue = false;
      }, 300);
      this.$emit("change", this.value);
    },
    leftx: function leftx() {
      if (Array.isArray(this.value)) {
        if (this.leftx > this.leftTwo) {
          this.valueCircle1 = this.value[1];
        } else {
          this.valueCircle1 = this.value[0];
        }
      } else {
        this.valueCircle1 = this.value;
      }
    },
    leftTwo: {
      handler: function handler() {
        if (this.leftTwo > this.leftx) {
          this.valueCircle2 = this.value[1];
        } else {
          this.valueCircle2 = this.value[0];
        }
      },
      deep: true
    }
  },
  mounted: function mounted() {
    this.changePosition();
  },
  methods: {
    mousewheelx: function mousewheelx(evt) {
      if (!Array.isArray(this.value)) {
        if (evt.wheelDelta > 0) {
          var val = parseFloat(this.value) + parseFloat(this.step);
          val = this.stepDecimals ? this.toDecimal(val) : Math.round(val);
          if (this.value >= this.max) {
            val = this.max;
          }
          this.leftx = val;
          this.$emit("input", val);
        } else {
          var _val = parseFloat(this.value) - parseFloat(this.step);
          _val = this.stepDecimals ? this.toDecimal(_val) : Math.round(_val);
          if (this.value <= this.min) {
            _val = this.min;
          }
          this.leftx = _val;
          this.$emit("input", _val);
        }
      }
    },
    keydownLeft: function keydownLeft() {
      if (!Array.isArray(this.value)) {
        var val = parseFloat(this.value) - parseFloat(this.step);
        val = this.stepDecimals ? this.toDecimal(val) : Math.round(val);
        if (this.value == this.min) {
          val = this.min;
        }
        this.leftx = val;
        this.$emit("input", val);
      }
    },
    keydownRight: function keydownRight() {
      if (!Array.isArray(this.value)) {
        var val = parseFloat(this.value) + parseFloat(this.step);
        val = this.stepDecimals ? this.toDecimal(val) : Math.round(val);
        if (this.value >= this.max) {
          val = this.max;
        }
        this.leftx = val;
        this.$emit("input", val);
      }
    },
    changePosition: function changePosition() {
      if (Array.isArray(this.value)) {
        this.leftx = (this.value[1] - this.min) / (this.max - this.min) * 100;
        this.leftTwo = (this.value[0] - this.min) / (this.max - this.min) * 100;
      } else {
        this.leftx = (this.value - this.min) / (this.max - this.min) * 100;
      }
    },
    styleTicks: function styleTicks(index) {
      var lengthPerStep = 100 / ((this.max - this.min) / this.step);
      var steps = index / lengthPerStep;
      return {
        left: steps * lengthPerStep + "%"
      };
    },
    activeFocus: function activeFocus() {
      window.addEventListener("mousemove", this.mouseMovex);
      window.addEventListener("mouseup", this.removeEvents);
      window.addEventListener("touchmove", this.mouseMovex);
      window.addEventListener("touchend", this.removeEvents);
    },
    mouseMovex: function mouseMovex(evt) {
      var slider = this.$refs.slider;
      var leftx;
      /*
       * change position left circle and bar
       */
      if (evt.type == "touchmove") {
        leftx = event.targetTouches[0].clientX - slider.getBoundingClientRect().left;
      } else {
        leftx = evt.clientX - slider.getBoundingClientRect().left;
      }
      if (Math.sign(leftx) == -1) {
        leftx = 0;
      } else if (leftx > slider.clientWidth) {
        leftx = slider.clientWidth;
      }
      this.changeLeft(leftx);
    },
    removeEvents: function removeEvents() {
      this.two = this.actived = false;
      window.removeEventListener("mouseup", this.removeEvents);
      window.removeEventListener("mousemove", this.mouseMovex);
      window.removeEventListener("touchmove", this.mouseMovex);
      window.removeEventListener("touchend", this.removeEvents);
    },
    clickSlider: function clickSlider(evt) {
      var _this2 = this;
      var slider = this.$refs.slider;
      var leftx = evt.clientX - slider.getBoundingClientRect().left;
      this.effect = true;
      setTimeout(function () {
        _this2.effect = false;
      }, 200);
      var percentX = Math.round(leftx / slider.clientWidth * 100);
      if (Array.isArray(this.value)) {
        if (Math.abs(percentX - this.leftx) > Math.abs(percentX - this.leftTwo)) {
          this.two = true;
        } else {
          this.two = false;
        }
      }
      this.changeLeft(leftx);
    },
    changeLeft: function changeLeft(leftx) {
      var slider = this.$refs.slider;
      var percentX = leftx / slider.clientWidth * 100;
      var lengthPerStep = 100 / ((this.max - this.min) / this.step);
      var steps = Math.round(percentX / lengthPerStep);
      var val = steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min;
      val = this.stepDecimals ? this.toDecimal(val) : Math.round(val);
      if (val > this.max) {
        val = this.max;
        this[this.two ? "leftTwo" : "leftx"] = 100;
      } else {
        this[this.two ? "leftTwo" : "leftx"] = steps * lengthPerStep;
      }
      if (Array.isArray(this.value)) {
        var valueNew = val;
        if (val == this.max) {
          valueNew = this.max;
        }
        var vals = this.value;
        var min = Math.round(this.leftTwo / 100 * (this.max / this.step)) * this.step;
        var max = Math.round(this.leftx / 100 * (this.max / this.step)) * this.step;
        if (this.two) {
          if (min < max) {
            this.$emit("input", [valueNew, vals[1]]);
          } else if (min > max) {
            this.$emit("input", [vals[0], valueNew]);
          } else {
            this.$emit("input", [valueNew, valueNew]);
          }
        } else {
          if (min > max) {
            this.$emit("input", [valueNew, vals[1]]);
          } else if (min < max) {
            this.$emit("input", [vals[0], valueNew]);
          } else {
            this.$emit("input", [valueNew, valueNew]);
          }
        }
      } else {
        this.$emit("input", val);
      }
    },
    toDecimal: function toDecimal(value) {
      return parseFloat(value.toFixed(1));
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsSlider/vsSlider.vue?vue&type=script&lang=js
 /* harmony default export */ var vsSlider_vsSlidervue_type_script_lang_js = (vsSlidervue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsSlider/vsSlider.vue





/* normalize component */

var vsSlider_component = normalizeComponent(
  vsSlider_vsSlidervue_type_script_lang_js,
  vsSlidervue_type_template_id_cd89adc6_lang_html_render,
  vsSlidervue_type_template_id_cd89adc6_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsSlider = (vsSlider_component.exports);
// CONCATENATED MODULE: ./src/components/vsSlider/index.js


/* harmony default export */ var components_vsSlider = (function (Vue) {
  Vue.component(vsSlider.name, vsSlider);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsInputNumber/vsInputNumber.vue?vue&type=template&id=05d0647d&lang=html
var vsInputNumbervue_type_template_id_05d0647d_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vs-input-number",
    class: ["vs-input-number-size-".concat(_vm.size), "vs-input-number-".concat(_vm.color), {
      'isChangeValue': _vm.isChangeValue
    }]
  }, [_c('button', {
    directives: [{
      name: "repeat-click",
      rawName: "v-repeat-click",
      value: _vm.less,
      expression: "less"
    }],
    staticClass: "btn-less vs-input-number--button-less",
    class: {
      limit: _vm.value <= _vm.min
    },
    style: {
      background: _vm.getColor
    },
    attrs: {
      "disabled": _vm.$attrs.disabled,
      "type": "button"
    }
  }, [_c('vs-icon', {
    attrs: {
      "icon-pack": _vm.iconPack,
      "icon": _vm.iconDec
    }
  })], 1), _vm.label ? _c('span', [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _c('input', _vm._g(_vm._b({
    ref: "input",
    staticClass: "vs-input-number--input",
    style: _vm.styleInput,
    attrs: {
      "disabled": _vm.isDisabled,
      "min": _vm.min,
      "max": _vm.max,
      "type": "number"
    },
    domProps: {
      "value": _vm.value
    }
  }, 'input', _vm.$attrs, false), _vm.listeners)), _c('button', {
    directives: [{
      name: "repeat-click",
      rawName: "v-repeat-click",
      value: _vm.plus,
      expression: "plus"
    }],
    staticClass: "btn-plus vs-input-number--button-plus",
    class: {
      limit: _vm.value >= _vm.max && _vm.max !== null
    },
    style: {
      background: _vm.getColor
    },
    attrs: {
      "disabled": _vm.$attrs.disabled,
      "type": "button"
    }
  }, [_c('vs-icon', {
    attrs: {
      "icon-pack": _vm.iconPack,
      "icon": _vm.iconInc
    }
  })], 1)]);
};
var vsInputNumbervue_type_template_id_05d0647d_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsInputNumber/vsInputNumber.vue?vue&type=template&id=05d0647d&lang=html

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsInputNumber/vsInputNumber.vue?vue&type=script&lang=js






/* harmony default export */ var vsInputNumbervue_type_script_lang_js = ({
  name: 'VsInputNumber',
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
          var _escuchando = function escuchando() {
            if (bucle) {
              bucle.apply(this, arguments);
            }
            el.removeEventListener('mouseup', _escuchando, false);
          };
          el.addEventListener('mouseleave', _escuchando, false);
          el.addEventListener('mouseup', _escuchando, false);
          clearInterval(intervalx);
          intervalx = setInterval(functionx, 100);
        };
        el.addEventListener('mousedown', eventx, false);
      }
    }
  },
  inheritAttrs: false,
  props: {
    value: {},
    color: {
      default: 'primary',
      type: String
    },
    label: {
      default: null,
      type: String
    },
    max: {
      default: null,
      type: [Number, String]
    },
    min: {
      default: 0,
      type: [Number, String]
    },
    size: {
      default: null,
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    iconDec: {
      default: 'remove',
      type: String
    },
    iconInc: {
      default: 'add',
      type: String
    },
    step: {
      default: 1,
      type: [Number, String]
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      isChangeValue: false
    };
  },
  computed: {
    styleInput: function styleInput() {
      return {
        width: "".concat(this.getLength, "px")
      };
    },
    getLength: function getLength() {
      if (this.value) {
        return this.value.toString().length * 9.1;
      } else {
        return 0;
      }
    },
    getColor: function getColor() {
      return utils_color.getColor(this.color, 1);
    },
    listeners: function listeners() {
      var _this = this;
      return _objectSpread2(_objectSpread2({}, this.$listeners), {}, {
        blur: function blur(evt) {
          if (parseFloat(_this.value) > parseFloat(_this.max)) {
            _this.$emit('input', _this.max);
          } else if (parseFloat(_this.value) < parseFloat(_this.min)) {
            _this.$emit('input', _this.min);
            _this.$emit('blur', evt);
          }
        },
        input: function input(evt) {
          _this.$emit('input', evt.target.value);
        }
      });
    }
  },
  watch: {
    value: function value() {
      var _this2 = this;
      this.isChangeValue = true;
      setTimeout(function () {
        _this2.isChangeValue = false;
      }, 200);
    }
  },
  methods: {
    plus: function plus() {
      var newValue;
      if (this.value === '') {
        newValue = 0;
        this.$emit('input', this.fixPrecision(newValue));
      } else {
        if (this.max ? parseFloat(this.value) < parseFloat(this.max) : true) {
          newValue = parseFloat(this.value) + parseFloat(this.step);
          this.$emit('input', this.fixPrecision(newValue));
        }
      }
    },
    less: function less() {
      var newValue;
      if (this.value === '') {
        newValue = 0;
        this.$emit('input', this.fixPrecision(newValue));
      } else {
        if (this.min ? parseFloat(this.value) > parseFloat(this.min) : true) {
          newValue = parseFloat(this.value) - parseFloat(this.step);
          this.$emit('input', this.fixPrecision(newValue));
        }
      }
    },
    fixPrecision: function fixPrecision(n) {
      var precision = (this.step + '').split('.')[1];
      return n.toFixed(precision ? precision.length : 0);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsInputNumber/vsInputNumber.vue?vue&type=script&lang=js
 /* harmony default export */ var vsInputNumber_vsInputNumbervue_type_script_lang_js = (vsInputNumbervue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsInputNumber/vsInputNumber.vue





/* normalize component */

var vsInputNumber_component = normalizeComponent(
  vsInputNumber_vsInputNumbervue_type_script_lang_js,
  vsInputNumbervue_type_template_id_05d0647d_lang_html_render,
  vsInputNumbervue_type_template_id_05d0647d_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsInputNumber = (vsInputNumber_component.exports);
// CONCATENATED MODULE: ./src/components/vsInputNumber/index.js


/* harmony default export */ var components_vsInputNumber = (function (Vue) {
  Vue.component(vsInputNumber.name, vsInputNumber);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTooltip/vsTooltip.vue?vue&type=template&id=ca4632c0
var vsTooltipvue_type_template_id_ca4632c0_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "convstooltip",
    staticClass: "con-vs-tooltip",
    on: {
      "mouseleave": _vm.mouseleavex,
      "mouseenter": _vm.mouseenterx
    }
  }, [_c('transition', {
    attrs: {
      "name": "tooltip-fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.activeTooltip,
      expression: "activeTooltip"
    }],
    ref: "vstooltip",
    staticClass: "vs-tooltip",
    class: ["vs-tooltip-".concat(_vm.positionx || _vm.position), "vs-tooltip-".concat(_vm.color), {
      'after-none': _vm.noneAfter
    }],
    style: _vm.style
  }, [_vm._t("content", function () {
    return [_vm.title ? _c('h4', [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v("\n        " + _vm._s(_vm.text) + "\n      ")];
  })], 2)]), _vm._t("default")], 2);
};
var vsTooltipvue_type_template_id_ca4632c0_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsTooltip/vsTooltip.vue?vue&type=template&id=ca4632c0

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTooltip/vsTooltip.vue?vue&type=script&lang=js




/* harmony default export */ var vsTooltipvue_type_script_lang_js = ({
  name: 'VsTooltip',
  props: {
    title: {
      default: null,
      type: [String, Number]
    },
    text: {
      default: null,
      type: [String, Number]
    },
    color: {
      default: null,
      type: String
    },
    position: {
      default: 'top',
      type: String
    },
    delay: {
      default: '0s',
      type: [Number, String]
    },
    active: {
      default: true,
      type: [Boolean]
    },
    value: Boolean
  },
  data: function data() {
    return {
      cords: {},
      activeTooltip: this.value,
      widthx: 'auto',
      positionx: null,
      noneAfter: false
    };
  },
  computed: {
    style: function style() {
      return {
        left: this.cords.left,
        top: this.cords.top,
        transitionDelay: this.activeTooltip ? this.delay : '0s',
        background: utils_color.getColor(this.color, 1),
        width: this.widthx
      };
    }
  },
  watch: {
    value: function value(val) {
      this.activeTooltip = val;
    },
    activeTooltip: function activeTooltip(val) {
      if (this.value !== val) {
        this.$emit('input', val);
      }
    }
  },
  mounted: function mounted() {
    // utils.insertBody(this.$refs.vstooltip)
  },
  updated: function updated() {
    if (!this.$slots.default) {
      this.activeTooltip = false;
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$refs.vstooltip && this.activeTooltip) {
      utils.removeBody(this.$refs.vstooltip);
    }
  },
  methods: {
    mouseenterx: function mouseenterx() {
      var _this = this;
      if (this.active) {
        this.activeTooltip = true;
        this.$nextTick(function () {
          utils.insertBody(_this.$refs.vstooltip);
          _this.changePosition(_this.$refs.convstooltip, _this.$refs.vstooltip);
        });
      }
    },
    mouseleavex: function mouseleavex() {
      this.activeTooltip = false;
      if (this.$refs.vstooltip) {
        utils.removeBody(this.$refs.vstooltip);
      }
    },
    changePosition: function changePosition(elxEvent, tooltip) {
      this.noneAfter = false;
      this.positionx = null;
      var elx = elxEvent.closest('.con-vs-tooltip');
      var scrollTopx = window.pageYOffset || document.documentElement.scrollTop;
      var topx = elx.getBoundingClientRect().top + scrollTopx - tooltip.clientHeight - 4;
      var leftx = elx.getBoundingClientRect().left - tooltip.clientWidth / 2 + elx.clientWidth / 2;
      var widthx = elx.clientWidth;
      if (this.position === 'bottom') {
        topx = elx.getBoundingClientRect().top + scrollTopx + elx.clientHeight + 4;
      } else if (this.position === 'left') {
        leftx = elx.getBoundingClientRect().left - tooltip.clientWidth - 4;
        topx = elx.getBoundingClientRect().top + scrollTopx + elx.clientHeight / 2 - tooltip.clientHeight / 2;
        if (Math.sign(leftx) === -1) {
          leftx = elx.getBoundingClientRect().left;
          topx = elx.getBoundingClientRect().top + scrollTopx + elx.clientHeight + 4;
          this.positionx = 'bottom';
          this.noneAfter = true;
        }
      } else if (this.position === 'right') {
        leftx = elx.getBoundingClientRect().left + elx.clientWidth + 4;
        topx = elx.getBoundingClientRect().top + scrollTopx + elx.clientHeight / 2 - tooltip.clientHeight / 2;
        if (window.innerWidth - (leftx + tooltip.clientWidth) <= 20) {
          leftx = elx.getBoundingClientRect().left - tooltip.clientWidth / 2 - 10;
          topx = elx.getBoundingClientRect().top + scrollTopx + elx.clientHeight + 4;
          this.positionx = 'bottom';
          this.noneAfter = true;
        }
      }
      this.cords = {
        left: "".concat(leftx, "px"),
        top: "".concat(topx, "px"),
        width: "".concat(widthx, "px")
      };
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsTooltip/vsTooltip.vue?vue&type=script&lang=js
 /* harmony default export */ var vsTooltip_vsTooltipvue_type_script_lang_js = (vsTooltipvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsTooltip/vsTooltip.vue





/* normalize component */

var vsTooltip_component = normalizeComponent(
  vsTooltip_vsTooltipvue_type_script_lang_js,
  vsTooltipvue_type_template_id_ca4632c0_render,
  vsTooltipvue_type_template_id_ca4632c0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsTooltip = (vsTooltip_component.exports);
// CONCATENATED MODULE: ./src/components/vsTooltip/index.js


/* harmony default export */ var components_vsTooltip = (function (Vue) {
  Vue.component(vsTooltip.name, vsTooltip);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsUpload/vsUpload.vue?vue&type=template&id=57540f80




var vsUploadvue_type_template_id_57540f80_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "con-upload"
  }, [_vm.viewActive ? _c('view-upload', {
    attrs: {
      "src": _vm.viewSrc
    }
  }) : _vm._e(), _c('div', {
    staticClass: "con-img-upload"
  }, [_vm._l(_vm.getFilesFilter, function (img, index) {
    return _c('div', {
      key: index,
      staticClass: "img-upload",
      class: {
        'fileError': img.error,
        'removeItem': _vm.itemRemove.includes(index)
      }
    }, [_c('button', {
      staticClass: "btn-x-file",
      attrs: {
        "type": "button"
      },
      on: {
        "click": function click($event) {
          return _vm.removeFile(index);
        }
      }
    }, [_c('i', {
      staticClass: "material-icons notranslate",
      attrs: {
        "translate": "no"
      }
    }, [_vm._v("\n          clear\n        ")])]), _vm.showUploadButton ? _c('button', {
      staticClass: "btn-upload-file",
      class: {
        'on-progress': img.percent,
        'ready-progress': img.percent >= 100
      },
      style: {
        height: "".concat(img.percent, "%")
      },
      on: {
        "click": function click($event) {
          return _vm.upload(index);
        }
      }
    }, [_c('i', {
      staticClass: "material-icons notranslate",
      attrs: {
        "translate": "no"
      }
    }, [_vm._v("\n          " + _vm._s(img.percent >= 100 ? img.error ? 'report_problem' : 'cloud_done' : 'cloud_upload') + "\n        ")]), _c('span', [_vm._v(_vm._s(img.percent) + " %")])]) : _vm._e(), img.src ? _c('img', {
      key: index,
      style: {
        maxWidth: img.orientation == 'h' ? '100%' : 'none',
        maxHeight: img.orientation == 'w' ? '100%' : 'none'
      },
      attrs: {
        "src": img.src
      },
      on: {
        "touchend": function touchend($event) {
          return _vm.viewImage(img.src, $event);
        },
        "click": function click($event) {
          return _vm.viewImage(img.src, $event);
        }
      }
    }) : _vm._e(), !img.src ? _c('h4', {
      staticClass: "text-archive"
    }, [_c('i', {
      staticClass: "material-icons notranslate",
      attrs: {
        "translate": "no"
      }
    }, [_vm._v("\n          description\n        ")]), _c('span', [_vm._v("\n          " + _vm._s(img.name) + "\n        ")])]) : _vm._e()]);
  }), _c('div', {
    staticClass: "con-input-upload",
    class: {
      'on-progress-all-upload': _vm.percent != 0,
      'is-ready-all-upload': _vm.percent >= 100,
      'disabled-upload': _vm.$attrs.hasOwnProperty('disabled') || _vm.limit ? _vm.srcs.length - _vm.itemRemove.length >= Number(_vm.limit) : false
    }
  }, [_c('input', _vm._b({
    ref: "fileInput",
    attrs: {
      "disabled": _vm.$attrs.disabled || _vm.limit ? _vm.srcs.length - _vm.itemRemove.length >= Number(_vm.limit) : false,
      "type": "file"
    },
    on: {
      "change": _vm.getFiles
    }
  }, 'input', _vm.$attrs, false)), _c('span', {
    staticClass: "text-input"
  }, [_vm._v("\n        " + _vm._s(_vm.text) + "\n      ")]), _c('span', {
    staticClass: "input-progress",
    style: {
      width: "".concat(_vm.percent, "%")
    }
  }), _vm.showUploadButton ? _c('button', {
    staticClass: "btn-upload-all vs-upload--button-upload",
    attrs: {
      "disabled": _vm.filesx.length == 0,
      "type": "button",
      "title": "Upload"
    },
    on: {
      "click": function click($event) {
        return _vm.upload('all');
      }
    }
  }, [_c('i', {
    staticClass: "material-icons notranslate",
    attrs: {
      "translate": "no"
    }
  }, [_vm._v("\n          cloud_upload\n        ")])]) : _vm._e()])], 2)], 1);
};
var vsUploadvue_type_template_id_57540f80_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsUpload/vsUpload.vue?vue&type=template&id=57540f80

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.math.trunc.js
var es_math_trunc = __webpack_require__("b65f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsUpload/viewUpload.vue?vue&type=template&id=31591ed5
var viewUploadvue_type_template_id_31591ed5_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('transition', {
    attrs: {
      "name": "view-upload"
    }
  }, [_c('div', {
    ref: "view",
    staticClass: "view-upload",
    on: {
      "click": _vm.closeView
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.src,
      "alt": "image"
    }
  })])]);
};
var viewUploadvue_type_template_id_31591ed5_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsUpload/viewUpload.vue?vue&type=template&id=31591ed5

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsUpload/viewUpload.vue?vue&type=script&lang=js

/* harmony default export */ var viewUploadvue_type_script_lang_js = ({
  name: 'ViewUpload',
  props: {
    active: {
      default: false,
      type: Boolean
    },
    src: {
      default: null,
      type: String
    }
  },
  mounted: function mounted() {
    utils.insertBody(this.$refs.view);
  },
  upload: function upload() {
    utils.insertBody(this.$refs.view);
  },
  methods: {
    closeView: function closeView(evt) {
      if (evt.target.tagName != 'IMG') {
        this.$parent.viewActive = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsUpload/viewUpload.vue?vue&type=script&lang=js
 /* harmony default export */ var vsUpload_viewUploadvue_type_script_lang_js = (viewUploadvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsUpload/viewUpload.vue





/* normalize component */

var viewUpload_component = normalizeComponent(
  vsUpload_viewUploadvue_type_script_lang_js,
  viewUploadvue_type_template_id_31591ed5_render,
  viewUploadvue_type_template_id_31591ed5_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var viewUpload = (viewUpload_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsUpload/vsUpload.vue?vue&type=script&lang=js











var lastTap = 0;
/* harmony default export */ var vsUploadvue_type_script_lang_js = ({
  name: 'VsUpload',
  components: {
    viewUpload: viewUpload
  },
  inheritAttrs: false,
  props: {
    fileName: {
      default: null,
      type: String
    },
    text: {
      default: 'Upload File',
      type: String
    },
    textMax: {
      default: 'Maximum of files reached',
      type: String
    },
    limit: {
      default: null,
      type: [Number, String]
    },
    action: {
      default: null,
      type: String
    },
    headers: {
      default: null,
      type: Object
    },
    data: {
      default: null,
      type: Object
    },
    automatic: {
      default: false,
      type: Boolean
    },
    showUploadButton: {
      default: true,
      type: Boolean
    },
    singleUpload: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      inputValue: null,
      type: null,
      srcs: [],
      filesx: [],
      itemRemove: [],
      percent: 0,
      viewActive: false,
      viewSrc: null
    };
  },
  computed: {
    getFilesFilter: function getFilesFilter() {
      var files = this.srcs.filter(function (item) {
        return !item.remove;
      });
      return files;
    },
    postFiles: function postFiles() {
      var postFiles = Array.prototype.slice.call(this.filesx);
      postFiles = postFiles.filter(function (item) {
        return !item.hasOwnProperty('remove') && !item.hasOwnProperty('success');
      });
      return postFiles.length;
    }
  },
  watch: {
    percent: function percent() {
      var _this2 = this;
      if (this.percent >= 100) {
        this.srcs.forEach(function (file) {
          file.percent = 100;
        });
        setTimeout(function () {
          _this2.percent = 0;
        }, 1000);
      }
    }
  },
  methods: {
    viewImage: function viewImage(src, evt) {
      var timeout;
      var eventx = 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch ? 'touchstart' : 'click';
      if (eventx == 'click') {
        this.viewActive = true;
        this.viewSrc = src;
      } else {
        if (evt.type == 'touchend') {
          var currentTime = new Date().getTime();
          var tapLength = currentTime - lastTap;
          clearTimeout(timeout);
          if (tapLength < 500 && tapLength > 0) {
            this.viewActive = true;
            this.viewSrc = src;
            event.preventDefault();
          }
          lastTap = currentTime;
        }
      }
    },
    removeFile: function removeFile(index) {
      var _this3 = this;
      this.itemRemove.push(index);
      this.$emit('on-delete', this.filesx[index]);
      setTimeout(function () {
        _this3.filesx[index].remove = true;
      }, 301);
    },
    getFiles: function getFiles(e) {
      this.$emit('update:vsFile', e.target.value);
      var _this = this;
      function uploadImage(e) {
        var orientation = 'h';
        var image = new Image();
        image.src = e.target.result;
        image.onload = function () {
          if (this.width > this.height) {
            orientation = 'w';
          }
          switchImage(this, orientation);
        };
      }
      function switchImage(image, orientation) {
        _this.srcs.push({
          src: image.src,
          orientation: orientation,
          type: _this.typex,
          percent: null,
          error: false,
          remove: null
        });
      }
      var files = e.target.files;
      var count = this.srcs.length - this.itemRemove.length;
      for (var file in files) {
        if (files.hasOwnProperty(file)) {
          if (this.limit) {
            count++;
            if (count > Number(this.limit)) {
              break;
            }
          }
          var reader = new FileReader();
          var filex = files[file];
          if (/image.*/.test(filex.type)) {
            this.typex = 'image';
            this.filesx.push(filex);
            reader.onload = uploadImage;
            reader.readAsDataURL(filex);
          } else if (/video.*/.test(filex.type)) {
            this.typex = 'video';
            this.filesx.push(filex);
            _this.srcs.push({
              src: null,
              name: filex.name,
              type: 'video',
              percent: null,
              error: false,
              remove: null
            });
          } else {
            this.filesx.push(filex);
            _this.srcs.push({
              src: null,
              name: filex.name,
              percent: null,
              error: false,
              remove: null
            });
          }
          this.$emit('change', e.target.value, this.filesx);
        }
      }
      var input = this.$refs.fileInput;
      input.type = 'text';
      input.type = 'file';
      if (this.automatic) {
        this.upload('all');
      }
    },
    upload: function upload(index) {
      var _this4 = this;
      var formData = new FormData();
      var postFiles = Array.prototype.slice.call(this.filesx);
      if (typeof index == 'number') {
        postFiles = [postFiles[index]];
      } else if (index == 'all') {
        postFiles = postFiles.filter(function (item) {
          return !item.hasOwnProperty('remove') && !item.hasOwnProperty('success');
        });
      }
      var data = this.data || {};
      for (var key in data) {
        formData.append(key, data[key]);
      }
      if (this.singleUpload) {
        postFiles.forEach(function (filex) {
          var formData = new FormData();
          for (var key in data) {
            formData.append(key, data[key]);
          }
          formData.append(_this4.fileName, filex, filex.name);
          _this4.uploadx(index, formData);
        });
      } else {
        postFiles.forEach(function (filex) {
          formData.append(_this4.fileName, filex, filex.name);
        });
        this.uploadx(index, formData);
      }
    },
    uploadx: function uploadx(index, formData) {
      var self = this;
      var xhr = new XMLHttpRequest();
      xhr.onerror = function error(e) {
        self.$emit('on-error', e);
        if (typeof index == 'number') {
          self.srcs[index].error = true;
        }
      };
      xhr.onload = function onload(e) {
        if (xhr.status < 200 || xhr.status >= 300) {
          self.$emit('on-error', e);
          if (typeof index == 'number') {
            self.srcs[index].error = true;
          }
        } else {
          self.filesx.forEach(function (loaded) {
            loaded.success = true;
          });
          self.$emit('on-success', e);
        }
      };
      if (xhr.upload) {
        xhr.upload.onprogress = function progress(e) {
          if (e.total > 0) {
            var percent = e.loaded / e.total * 100;
            if (typeof index == 'number') {
              self.srcs[index].percent = Math.trunc(percent);
            } else {
              self.percent = Math.trunc(percent);
            }
          }
        };
      }
      xhr.withCredentials = true;
      xhr.open('POST', this.action, true);
      var headers = this.headers || {};
      for (var head in headers) {
        if (headers.hasOwnProperty(head) && headers[head] !== null) {
          xhr.setRequestHeader(head, headers[head]);
        }
      }
      xhr.send(formData);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsUpload/vsUpload.vue?vue&type=script&lang=js
 /* harmony default export */ var vsUpload_vsUploadvue_type_script_lang_js = (vsUploadvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsUpload/vsUpload.vue





/* normalize component */

var vsUpload_component = normalizeComponent(
  vsUpload_vsUploadvue_type_script_lang_js,
  vsUploadvue_type_template_id_57540f80_render,
  vsUploadvue_type_template_id_57540f80_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsUpload = (vsUpload_component.exports);
// CONCATENATED MODULE: ./src/components/vsUpload/index.js


/* harmony default export */ var components_vsUpload = (function (Vue) {
  Vue.component(vsUpload.name, vsUpload);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsPopup/vsPopup.vue?vue&type=template&id=2c92a31b&lang=html
var vsPopupvue_type_template_id_2c92a31b_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('transition', {
    attrs: {
      "name": "popup-t"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.active,
      expression: "active"
    }],
    ref: "con",
    staticClass: "vs-component con-vs-popup",
    class: ["vs-popup-".concat(_vm.color), {
      'fullscreen': _vm.fullscreen
    }],
    on: {
      "click": function click($event) {
        return _vm.close($event, true);
      }
    }
  }, [_c('div', {
    staticClass: "vs-popup--background",
    style: _vm.styleCon
  }), _c('div', {
    ref: "popupx",
    staticClass: "vs-popup",
    style: _vm.stylePopup
  }, [_c('header', {
    staticClass: "vs-popup--header",
    style: _vm.styleHeader
  }, [_c('div', {
    staticClass: "vs-popup--title"
  }, [_c('h3', [_vm._v(_vm._s(_vm.title))]), _vm._t("subtitle")], 2), !_vm.buttonCloseHidden ? _c('vs-icon', {
    ref: "btnclose",
    staticClass: "vs-popup--close vs-popup--close--icon",
    style: _vm.stylePopup,
    attrs: {
      "icon-pack": _vm.iconPack,
      "icon": _vm.iconClose
    },
    on: {
      "click": _vm.close
    }
  }) : _vm._e()], 1), _c('div', {
    staticClass: "vs-popup--content",
    class: _vm.classContent,
    style: _vm.styleContent
  }, [_vm._t("default")], 2)])])]);
};
var vsPopupvue_type_template_id_2c92a31b_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsPopup/vsPopup.vue?vue&type=template&id=2c92a31b&lang=html

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsPopup/vsPopup.vue?vue&type=script&lang=js

/* harmony default export */ var vsPopupvue_type_script_lang_js = ({
  name: 'VsPopup',
  props: {
    color: {
      default: 'primary',
      type: String
    },
    active: {
      default: false,
      type: Boolean
    },
    title: {
      default: 'popup',
      type: String
    },
    buttonCloseHidden: {
      default: false,
      type: Boolean
    },
    fullscreen: {
      default: false,
      type: Boolean
    },
    backgroundColor: {
      default: null,
      type: String
    },
    backgroundColorPopup: {
      default: 'rgb(255,255,255)',
      type: String
    },
    styleContent: {
      default: null,
      type: String
    },
    classContent: {
      default: null,
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    iconClose: {
      default: 'close',
      type: String
    }
  },
  computed: {
    styleHeader: function styleHeader() {
      return {
        color: utils_color.getColor(this.color, 1)
      };
    },
    styleAfter: function styleAfter() {
      return {
        background: utils_color.getColor(this.color, 1)
      };
    },
    styleCon: function styleCon() {
      return {
        background: utils_color.getColor(this.backgroundColor, 1)
      };
    },
    stylePopup: function stylePopup() {
      return {
        background: utils_color.getColor(this.backgroundColorPopup, 1)
      };
    }
  },
  mounted: function mounted() {
    this.insertBody();
  },
  beforeDestroy: function beforeDestroy() {
    // close the left open prompt
    var elx = this.$refs.con;
    if (document.body) {
      document.body.removeChild(elx);
    }
  },
  methods: {
    giveColor: function giveColor(color) {
      return utils_color.rColor(color);
    },
    close: function close(event, con) {
      if (con) {
        if (event.target.className && event.target.className.indexOf && event.target.className.indexOf('vs-popup--background') != -1) {
          this.$emit('update:active', false);
          this.$emit('close', false);
        } else if (!this.buttonCloseHidden && event.srcElement == this.$refs.btnclose.$el) {
          this.$emit('update:active', false);
          this.$emit('close', false);
        }
      }
    },
    insertBody: function insertBody() {
      var elx = this.$refs.con;
      document.body.insertBefore(elx, document.body.firstChild);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsPopup/vsPopup.vue?vue&type=script&lang=js
 /* harmony default export */ var vsPopup_vsPopupvue_type_script_lang_js = (vsPopupvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsPopup/vsPopup.vue





/* normalize component */

var vsPopup_component = normalizeComponent(
  vsPopup_vsPopupvue_type_script_lang_js,
  vsPopupvue_type_template_id_2c92a31b_lang_html_render,
  vsPopupvue_type_template_id_2c92a31b_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsPopup = (vsPopup_component.exports);
// CONCATENATED MODULE: ./src/components/vsPopup/index.js


/* harmony default export */ var components_vsPopup = (function (Vue) {
  Vue.component(vsPopup.name, vsPopup);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsAlert/vsAlert.vue?vue&type=template&id=c0aaec9e&lang=html
var vsAlertvue_type_template_id_c0aaec9e_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('transition', {
    on: {
      "before-enter": _vm.beforeEnter,
      "enter": _vm.enter,
      "leave": _vm.leave
    }
  }, [_vm.active ? _c('div', _vm._g(_vm._b({
    ref: "alert",
    staticClass: "con-vs-alert",
    class: ["con-vs-alert-".concat(_vm.color), {
      'con-icon': _vm.icon
    }],
    style: _vm.styleAlert
  }, 'div', _vm.$attrs, false), _vm.$listeners), [_vm.closable ? _c('div', {
    staticClass: "con-x vs-alert--close",
    on: {
      "click": function click($event) {
        return _vm.$emit('update:active', false);
      }
    }
  }, [_c('vs-icon', {
    attrs: {
      "icon-pack": _vm.iconPack,
      "icon": _vm.closeIcon
    }
  })], 1) : _vm._e(), _vm.title ? _c('h4', {
    staticClass: "titlex vs-alert--title",
    style: _vm.styleTitle,
    domProps: {
      "textContent": _vm._s(_vm.title)
    }
  }) : _vm._e(), _c('div', {
    staticClass: "vs-alert",
    class: {
      'con-icon': _vm.icon
    }
  }, [_vm.icon ? _c('vs-icon', {
    staticClass: "icon-alert",
    attrs: {
      "icon-pack": _vm.iconPack,
      "icon": _vm.icon
    }
  }) : _vm._e(), _vm._t("default")], 2)]) : _vm._e()]);
};
var vsAlertvue_type_template_id_c0aaec9e_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsAlert/vsAlert.vue?vue&type=template&id=c0aaec9e&lang=html

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsAlert/vsAlert.vue?vue&type=script&lang=js

/* harmony default export */ var vsAlertvue_type_script_lang_js = ({
  name: 'VsAlert',
  props: {
    active: {
      type: [Boolean, String],
      default: true
    },
    title: {
      type: String,
      default: null
    },
    closable: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'primary'
    },
    margin: {
      type: [String, Boolean],
      default: '10px'
    },
    icon: {
      type: String,
      default: null
    },
    closeIcon: {
      type: String,
      default: 'close'
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    }
  },
  computed: {
    styleAlert: function styleAlert() {
      return {
        background: utils_color.getColor(this.color, .15),
        boxShadow: "0px 0px 25px 0px ".concat(utils_color.getColor(this.color, .15)),
        color: utils_color.getColor(this.color, 1)
      };
    },
    styleTitle: function styleTitle() {
      return {
        boxShadow: "0px 6px 15px -7px ".concat(utils_color.getColor(this.color, .4))
      };
    }
  },
  mounted: function mounted() {
    var _this = this;
    if (this.$refs.alert) {
      this.$nextTick(function () {
        var h = _this.$refs.alert.scrollHeight;
        _this.$refs.alert.style.height = h + 'px';
      });
    }
  },
  methods: {
    beforeEnter: function beforeEnter(el) {
      el.style.height = 0;
      el.style.opacity = 0;
    },
    enter: function enter(el, done) {
      var h = this.$refs.alert.scrollHeight;
      this.$refs.alert.style.height = h + 'px';
      el.style.opacity = 1;
      done();
    },
    leave: function leave(el) {
      this.$refs.alert.style.height = 0 + 'px';
      el.style.opacity = 0;
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsAlert/vsAlert.vue?vue&type=script&lang=js
 /* harmony default export */ var vsAlert_vsAlertvue_type_script_lang_js = (vsAlertvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsAlert/vsAlert.vue





/* normalize component */

var vsAlert_component = normalizeComponent(
  vsAlert_vsAlertvue_type_script_lang_js,
  vsAlertvue_type_template_id_c0aaec9e_lang_html_render,
  vsAlertvue_type_template_id_c0aaec9e_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsAlert = (vsAlert_component.exports);
// CONCATENATED MODULE: ./src/components/vsAlert/index.js


/* harmony default export */ var components_vsAlert = (function (Vue) {
  Vue.component(vsAlert.name, vsAlert);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsChip/vsChip.vue?vue&type=template&id=3d1c2090&lang=html
var vsChipvue_type_template_id_3d1c2090_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "con-vs-chip",
    class: ["vs-chip-".concat(_vm.color), {
      'closable': _vm.closable,
      'con-color': _vm.color,
      'bg-chip-transparent': _vm.transparent
    }],
    style: _vm.styleChip
  }, [_c('span', {
    staticClass: "text-chip vs-chip--text"
  }, [_vm._t("default")], 2), _vm.closable ? _c('button', {
    staticClass: "btn-close vs-chip--close",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.closeChip
    }
  }, [_c('vs-icon', {
    attrs: {
      "icon-pack": _vm.iconPack,
      "icon": _vm.closeIcon
    }
  })], 1) : _vm._e()]);
};
var vsChipvue_type_template_id_3d1c2090_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsChip/vsChip.vue?vue&type=template&id=3d1c2090&lang=html

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsChip/vsChip.vue?vue&type=script&lang=js

/* harmony default export */ var vsChipvue_type_script_lang_js = ({
  name: 'VsChip',
  props: {
    item: {
      type: Boolean
    },
    value: {},
    active: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: null
    },
    closable: {
      type: [Boolean, String],
      default: false
    },
    color: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    },
    closeIcon: {
      type: String,
      default: 'clear'
    },
    transparent: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    styleChip: function styleChip() {
      var background = this.transparent ? utils_color.getColor(this.color, .15) : utils_color.getColor(this.color, 1);
      var color = this.transparent ? utils_color.getColor(this.color, 1) : this.color ? 'rgba(255,255,255,.9)' : 'rgba(0,0,0,.7)';
      return {
        background: background,
        color: color
      };
    },
    eliminado: function eliminado() {
      if (this.item) {
        return true;
      } else {
        if (this.vsClosable) {
          return this.value;
        } else {
          return true;
        }
      }
    }
  },
  methods: {
    closeChip: function closeChip() {
      this.$emit('input', false);
      this.$emit('click');
    },
    remove: function remove() {
      this.$emit('vs-remove', false);
      this.$emit('input', false);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsChip/vsChip.vue?vue&type=script&lang=js
 /* harmony default export */ var vsChip_vsChipvue_type_script_lang_js = (vsChipvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsChip/vsChip.vue





/* normalize component */

var vsChip_component = normalizeComponent(
  vsChip_vsChipvue_type_script_lang_js,
  vsChipvue_type_template_id_3d1c2090_lang_html_render,
  vsChipvue_type_template_id_3d1c2090_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsChip = (vsChip_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsChip/vsChips.vue?vue&type=template&id=224d5972&lang=html
var vsChipsvue_type_template_id_224d5972_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {}, [_c('div', {
    staticClass: "con-chips",
    class: {
      'no-items': _vm.value.length == 0
    }
  }, [_vm._t("default"), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.newChip,
      expression: "newChip"
    }],
    staticClass: "con-chips--input",
    attrs: {
      "placeholder": _vm.value.length > 0 ? null : _vm.placeholder,
      "type": "text"
    },
    domProps: {
      "value": _vm.newChip
    },
    on: {
      "keypress": function keypress($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.addItem.apply(null, arguments);
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.newChip = $event.target.value;
      }
    }
  }), _c('div', {
    staticClass: "x-global con-chips--remove-all",
    on: {
      "click": _vm.removeTotalItems
    }
  }, [_c('vs-icon', {
    attrs: {
      "icon-pack": _vm.iconPack,
      "icon": _vm.removeIcon
    }
  })], 1)], 2)]);
};
var vsChipsvue_type_template_id_224d5972_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsChip/vsChips.vue?vue&type=template&id=224d5972&lang=html

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsChip/vsChips.vue?vue&type=script&lang=js



/* harmony default export */ var vsChipsvue_type_script_lang_js = ({
  name: 'VsChips',
  components: {
    vsChip: vsChip
  },
  props: {
    value: {},
    vsColor: {
      type: String,
      default: 'primary'
    },
    placeholder: {
      type: String,
      default: ''
    },
    items: {
      type: Array
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    },
    removeIcon: {
      type: String,
      default: 'close'
    }
  },
  data: function data() {
    return {
      newChip: '',
      chip1: true
    };
  },
  methods: {
    addItem: function addItem() {
      var valueOld = this.value;
      valueOld.push(this.newChip);
      this.$emit('input', valueOld);
      this.newChip = '';
    },
    removeTotalItems: function removeTotalItems() {
      var valueOld = this.value;
      valueOld.splice(0, this.value.length);
      this.$emit('input', valueOld);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsChip/vsChips.vue?vue&type=script&lang=js
 /* harmony default export */ var vsChip_vsChipsvue_type_script_lang_js = (vsChipsvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsChip/vsChips.vue





/* normalize component */

var vsChips_component = normalizeComponent(
  vsChip_vsChipsvue_type_script_lang_js,
  vsChipsvue_type_template_id_224d5972_lang_html_render,
  vsChipsvue_type_template_id_224d5972_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsChips = (vsChips_component.exports);
// CONCATENATED MODULE: ./src/components/vsChip/index.js



/* harmony default export */ var components_vsChip = (function (Vue) {
  Vue.component(vsChip.name, vsChip);
  Vue.component(vsChips.name, vsChips);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsProgress/vsProgress.vue?vue&type=template&id=df48fcfc&lang=html
var vsProgressvue_type_template_id_df48fcfc_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vs-progress--background",
    class: ["vs-progress-".concat(_vm.color), {
      'indeterminate': _vm.indeterminate
    }],
    style: _vm.styleConProgress
  }, [_c('div', {
    staticClass: "vs-progress--foreground",
    style: _vm.styleProgress
  }), _vm.indeterminate ? _c('div', {
    staticClass: "vs-progress--indeterminate",
    style: _vm.styleProgress
  }) : _vm._e()]);
};
var vsProgressvue_type_template_id_df48fcfc_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsProgress/vsProgress.vue?vue&type=template&id=df48fcfc&lang=html

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsProgress/vsProgress.vue?vue&type=script&lang=js


/* harmony default export */ var vsProgressvue_type_script_lang_js = ({
  name: 'VsProgress',
  props: {
    height: {
      type: [Number, String],
      default: 5
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    percent: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: 'primary'
    }
  },
  data: function data() {
    return {
      percentx: 0
    };
  },
  computed: {
    styleConProgress: function styleConProgress() {
      return {
        background: utils_color.getColor(this.color, .1),
        height: "".concat(this.height, "px")
      };
    },
    styleProgress: function styleProgress() {
      return {
        background: utils_color.getColor(this.color),
        width: "".concat(this.percentx, "%")
      };
    }
  },
  watch: {
    percent: function percent() {
      this.percentx = this.percent;
    }
  },
  created: function created() {
    this.percentx = 0;
  },
  mounted: function mounted() {
    var _this = this;
    setTimeout(function () {
      _this.percentx = _this.percent; // to force animation
    }, 600);
  }
});
// CONCATENATED MODULE: ./src/components/vsProgress/vsProgress.vue?vue&type=script&lang=js
 /* harmony default export */ var vsProgress_vsProgressvue_type_script_lang_js = (vsProgressvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsProgress/vsProgress.vue





/* normalize component */

var vsProgress_component = normalizeComponent(
  vsProgress_vsProgressvue_type_script_lang_js,
  vsProgressvue_type_template_id_df48fcfc_lang_html_render,
  vsProgressvue_type_template_id_df48fcfc_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsProgress = (vsProgress_component.exports);
// CONCATENATED MODULE: ./src/components/vsProgress/index.js


/* harmony default export */ var components_vsProgress = (function (Vue) {
  Vue.component(vsProgress.name, vsProgress);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsCard/vsCard.vue?vue&type=template&id=32732618
var vsCardvue_type_template_id_32732618_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "con-vs-card",
    class: {
      'withHover': _vm.actionable,
      'fixedHeight': _vm.fixedHeight
    }
  }, [_vm.hasSlot('header') ? _c('header', {
    staticClass: "vs-card--header"
  }, [_vm._t("header")], 2) : _vm._e(), _vm.hasSlot('media') ? _c('div', {
    staticClass: "vs-card--media"
  }, [_vm._t("media")], 2) : _vm._e(), _vm.hasSlot('default') ? _c('div', {
    staticClass: "vs-card--content",
    class: {
      'fixedHeight': _vm.fixedHeight
    }
  }, [_vm._t("default")], 2) : _vm._e(), _vm.hasSlot('extra-content') ? _c('div', {
    staticClass: "vs-card-extra--content"
  }, [_vm._t("extra-content")], 2) : _vm._e(), _vm.hasSlot('footer') ? _c('footer', {
    staticClass: "vs-card--footer",
    class: {
      'fixedHeight': _vm.fixedHeight
    }
  }, [_vm._t("footer")], 2) : _vm._e()]);
};
var vsCardvue_type_template_id_32732618_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsCard/vsCard.vue?vue&type=template&id=32732618

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsCard/vsCard.vue?vue&type=script&lang=js
/* harmony default export */ var vsCardvue_type_script_lang_js = ({
  name: 'VsCard',
  props: {
    actionable: {
      default: false,
      type: Boolean
    },
    fixedHeight: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    hasSlot: function hasSlot(slot) {
      return this.$slots[slot];
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsCard/vsCard.vue?vue&type=script&lang=js
 /* harmony default export */ var vsCard_vsCardvue_type_script_lang_js = (vsCardvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsCard/vsCard.vue





/* normalize component */

var vsCard_component = normalizeComponent(
  vsCard_vsCardvue_type_script_lang_js,
  vsCardvue_type_template_id_32732618_render,
  vsCardvue_type_template_id_32732618_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsCard = (vsCard_component.exports);
// CONCATENATED MODULE: ./src/components/vsCard/index.js


/* harmony default export */ var components_vsCard = (function (Vue) {
  Vue.component(vsCard.name, vsCard);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsList/vsList.vue?vue&type=template&id=38998322&lang=html
var vsListvue_type_template_id_38998322_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vs-list"
  }, [_vm._t("default")], 2);
};
var vsListvue_type_template_id_38998322_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsList/vsList.vue?vue&type=template&id=38998322&lang=html

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsList/vsList.vue?vue&type=script&lang=js
/* harmony default export */ var vsListvue_type_script_lang_js = ({
  name: 'VsList'
});
// CONCATENATED MODULE: ./src/components/vsList/vsList.vue?vue&type=script&lang=js
 /* harmony default export */ var vsList_vsListvue_type_script_lang_js = (vsListvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsList/vsList.vue





/* normalize component */

var vsList_component = normalizeComponent(
  vsList_vsListvue_type_script_lang_js,
  vsListvue_type_template_id_38998322_lang_html_render,
  vsListvue_type_template_id_38998322_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsList = (vsList_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsList/vsListItem.vue?vue&type=template&id=c3fb47ec&lang=html
var vsListItemvue_type_template_id_c3fb47ec_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vs-list--item"
  }, [_vm.$slots.avatar ? _c('div', {
    staticClass: "vs-list--avatar"
  }, [_vm._t("avatar")], 2) : _vm._e(), _vm.icon ? _c('div', {
    staticClass: "vs-list--icon"
  }, [_c('vs-icon', {
    attrs: {
      "icon-pack": _vm.iconPack,
      "icon": _vm.icon
    }
  })], 1) : _vm._e(), _c('div', {
    staticClass: "list-titles"
  }, [_vm.title ? _c('div', {
    staticClass: "vs-list--title"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._t("title"), _vm.subtitle ? _c('div', {
    staticClass: "vs-list--subtitle"
  }, [_vm._v(_vm._s(_vm.subtitle))]) : _vm._t("subtitle")], 2), _c('div', {
    staticClass: "vs-list--slot"
  }, [_vm._t("default")], 2)]);
};
var vsListItemvue_type_template_id_c3fb47ec_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsList/vsListItem.vue?vue&type=template&id=c3fb47ec&lang=html

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsList/vsListItem.vue?vue&type=script&lang=js
/* harmony default export */ var vsListItemvue_type_script_lang_js = ({
  name: 'VsListItem',
  props: {
    vsAvatar: {
      type: [Boolean, String],
      default: false
    },
    title: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsList/vsListItem.vue?vue&type=script&lang=js
 /* harmony default export */ var vsList_vsListItemvue_type_script_lang_js = (vsListItemvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsList/vsListItem.vue





/* normalize component */

var vsListItem_component = normalizeComponent(
  vsList_vsListItemvue_type_script_lang_js,
  vsListItemvue_type_template_id_c3fb47ec_lang_html_render,
  vsListItemvue_type_template_id_c3fb47ec_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsListItem = (vsListItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsList/vsListHeader.vue?vue&type=template&id=22f3fb26&lang=html
var vsListHeadervue_type_template_id_22f3fb26_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vs-list--header",
    class: ["vs-header-list-".concat(_vm.color), {
      'with-icon': _vm.icon
    }],
    style: _vm.styleHeader
  }, [_vm.icon ? _c('div', {
    staticClass: "vs-list--icon"
  }, [_c('vs-icon', {
    attrs: {
      "icon-pack": _vm.iconPack,
      "icon": _vm.icon
    }
  })], 1) : _vm._e(), _c('div', {
    staticClass: "list-titles"
  }, [_vm.title ? _c('div', {
    staticClass: "vs-list--title"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e()])]);
};
var vsListHeadervue_type_template_id_22f3fb26_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsList/vsListHeader.vue?vue&type=template&id=22f3fb26&lang=html

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsList/vsListHeader.vue?vue&type=script&lang=js

/* harmony default export */ var vsListHeadervue_type_script_lang_js = ({
  name: "VsListHeader",
  props: {
    color: {
      type: String,
      default: "primary"
    },
    title: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconPack: {
      type: String,
      default: "material-icons"
    }
  },
  computed: {
    styleHeader: function styleHeader() {
      return {
        color: utils_color.getColor(this.color)
      };
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsList/vsListHeader.vue?vue&type=script&lang=js
 /* harmony default export */ var vsList_vsListHeadervue_type_script_lang_js = (vsListHeadervue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsList/vsListHeader.vue





/* normalize component */

var vsListHeader_component = normalizeComponent(
  vsList_vsListHeadervue_type_script_lang_js,
  vsListHeadervue_type_template_id_22f3fb26_lang_html_render,
  vsListHeadervue_type_template_id_22f3fb26_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsListHeader = (vsListHeader_component.exports);
// CONCATENATED MODULE: ./src/components/vsList/index.js




/* harmony default export */ var components_vsList = (function (Vue) {
  Vue.component(vsList.name, vsList);
  Vue.component(vsListItem.name, vsListItem);
  Vue.component(vsListHeader.name, vsListHeader);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsAvatar/vsAvatar.vue?vue&type=template&id=6b3bcfeb&lang=html
var vsAvatarvue_type_template_id_6b3bcfeb_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', _vm._g(_vm._b({
    staticClass: "con-vs-avatar",
    class: _vm.avatarClass,
    style: _vm.avatarStyle
  }, 'div', _vm.$attrs, false), _vm.$listeners), [_vm.badge && _vm.badge > 0 ? _c('div', {
    staticClass: "dot-count vs-avatar--count",
    class: _vm.badgeClass,
    style: _vm.badgeStyle
  }, [_vm._v("\n    " + _vm._s(typeof _vm.badge != 'boolean' ? _vm.badge : null) + "\n  ")]) : _vm._e(), _vm.src ? _c('div', {
    staticClass: "con-img vs-avatar--con-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.src,
      "alt": _vm.text
    }
  })]) : _c('span', {
    staticClass: "vs-avatar--text notranslate",
    class: [_vm.text ? '' : _vm.iconPack, _vm.text ? '' : _vm.icon, _vm.textClass],
    style: _vm.textStyle,
    attrs: {
      "title": _vm.text,
      "translate": "no"
    }
  }, [_vm._v("\n    " + _vm._s(_vm.text ? _vm.returnText : _vm.iconPack == 'material-icons' ? _vm.icon : '') + "\n  ")])]);
};
var vsAvatarvue_type_template_id_6b3bcfeb_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsAvatar/vsAvatar.vue?vue&type=template&id=6b3bcfeb&lang=html

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsAvatar/vsAvatar.vue?vue&type=script&lang=js







/* harmony default export */ var vsAvatarvue_type_script_lang_js = ({
  name: 'VsAvatar',
  props: {
    badge: {
      type: [Boolean, String, Number],
      default: false
    },
    badgeColor: {
      default: 'danger',
      type: String
    },
    size: {
      type: String,
      default: null
    },
    src: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: 'person'
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    },
    textColor: {
      type: String,
      default: 'rgb(255, 255, 255)'
    },
    text: {
      type: [String, Number],
      default: null
    },
    color: {
      type: String,
      default: 'rgb(195, 195, 195)'
    }
  },
  computed: {
    avatarClass: function avatarClass() {
      var classes = {};
      classes[this.size] = true;
      if (utils_color.isColor(this.color)) {
        classes["con-vs-avatar-".concat(this.color)] = true;
      }
      return classes;
    },
    avatarStyle: function avatarStyle() {
      var style = {
        width: /[px]/.test(this.size) ? this.size : null,
        height: /[px]/.test(this.size) ? this.size : null
      };
      if (!utils_color.isColor(this.color)) {
        style.background = utils_color.getColor(this.color);
      }
      return style;
    },
    badgeClass: function badgeClass() {
      var classes = {
        badgeNumber: typeof badge != 'boolean'
      };
      if (utils_color.isColor(this.badgeColor)) {
        classes["dot-count-".concat(this.badgeColor)] = true;
      }
      return classes;
    },
    badgeStyle: function badgeStyle() {
      var style = {};
      if (!utils_color.isColor(this.badgeColor)) {
        style.background = utils_color.getColor(this.badgeColor);
      }
      return style;
    },
    textClass: function textClass() {
      var classes = {
        'material-icons': !this.text
      };
      if (utils_color.isColor(this.textColor)) {
        classes["vs-avatar-text-".concat(this.textColor)] = true;
      }
      return classes;
    },
    textStyle: function textStyle() {
      var style = {
        transform: "translate(-50%,-50%) scale(".concat(this.returnScale, ")")
      };
      if (!utils_color.isColor(this.textColor)) {
        style.color = utils_color.getColor(this.textColor);
      }
      return style;
    },
    returnText: function returnText() {
      if (this.text.length <= 5) {
        return this.text;
      }
      var exp = /\s/g;
      var letras = '';
      if (exp.test(this.text)) {
        this.text.split(exp).forEach(function (word) {
          letras += word[0].toUpperCase();
        });
      } else {
        letras = this.text[0].toUpperCase();
      }
      return letras.length > 5 ? letras[0] : letras;
    },
    returnScale: function returnScale() {
      if (!this.text) return 1;
      var lengthx = this.returnText.length;
      if (lengthx <= 5 && lengthx > 1) {
        return lengthx / (lengthx * 1.50);
      } else {
        return 1;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsAvatar/vsAvatar.vue?vue&type=script&lang=js
 /* harmony default export */ var vsAvatar_vsAvatarvue_type_script_lang_js = (vsAvatarvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsAvatar/vsAvatar.vue





/* normalize component */

var vsAvatar_component = normalizeComponent(
  vsAvatar_vsAvatarvue_type_script_lang_js,
  vsAvatarvue_type_template_id_6b3bcfeb_lang_html_render,
  vsAvatarvue_type_template_id_6b3bcfeb_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsAvatar = (vsAvatar_component.exports);
// CONCATENATED MODULE: ./src/components/vsAvatar/index.js


/* harmony default export */ var components_vsAvatar = (function (Vue) {
  Vue.component(vsAvatar.name, vsAvatar);
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsPagination/vsPagination.vue?vue&type=template&id=67409173


var vsPaginationvue_type_template_id_67409173_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('vs-row', {
    attrs: {
      "vs-justify": _vm.description ? 'space-between' : 'center',
      "vs-type": "flex",
      "vs-w": "12"
    }
  }, [_vm.description ? _c('vs-col', {
    staticClass: "vs-pagination--mb",
    attrs: {
      "vs-type": "flex",
      "vs-justify": "flex-start",
      "vs-align": "center",
      "vs-lg": "6",
      "vs-sm": "12",
      "vs-xs": "12"
    }
  }, [_c('div', [_c('span', {
    staticStyle: {
      "margin-right": "5px"
    }
  }, [_vm._v("\n        " + _vm._s(_vm.descriptionTitle) + ": " + _vm._s(_vm.minRows) + " - " + _vm._s(_vm.maxRows) + " " + _vm._s(_vm.descriptionConnector) + " " + _vm._s(_vm.sizeArray) + " | " + _vm._s(_vm.descriptionBody) + ":\n\n      ")]), _c('ul', {
    staticClass: "vs-pagination--array"
  }, _vm._l(_vm.descriptionItems, function (row, index) {
    return _c('li', {
      key: index
    }, [_c('span', {
      class: ["vs-description-".concat(_vm.color), {
        'vs-pagination--bold': index == _vm.indexRows
      }],
      style: _vm.styleDescription,
      on: {
        "click": function click($event) {
          return _vm.changeRowMaxItems(index);
        }
      }
    }, [_vm._v("\n            " + _vm._s(row) + "\n          ")]), index != _vm.descriptionItems.length - 1 ? _c('span', [_vm._v("\n            ,\n          ")]) : _vm._e()]);
  }), 0)])]) : _vm._e(), _c('vs-col', {
    staticClass: "vs-pagination--mb",
    attrs: {
      "vs-lg": _vm.description ? 6 : 12,
      "vs-type": "flex",
      "vs-justify": "flex-end",
      "vs-align": "center",
      "vs-sm": "12",
      "vs-xs": "12"
    }
  }, [_c('div', {
    staticClass: "con-vs-pagination",
    class: ["vs-pagination-".concat(_vm.color)],
    style: _vm.stylePagination
  }, [_c('nav', {
    staticClass: "vs-pagination--nav"
  }, [_c('button', {
    staticClass: "vs-pagination--buttons btn-prev-pagination vs-pagination--button-prev",
    class: {
      disabled: _vm.current <= 1 ? 'disabled' : null
    },
    attrs: {
      "disabled": _vm.current === 1
    },
    on: {
      "click": _vm.prevPage
    }
  }, [_c('vs-icon', {
    attrs: {
      "icon-pack": _vm.iconPack,
      "icon": _vm.prevIcon ? _vm.prevIcon : _vm.defaultPrevIcon
    }
  })], 1), _c('ul', {
    staticClass: "vs-pagination--ul"
  }, _vm._l(_vm.pages, function (page, index) {
    return _c('li', {
      key: index,
      staticClass: "item-pagination vs-pagination--li",
      class: {
        'is-current': page == _vm.current
      },
      on: {
        "click": function click($event) {
          return _vm.goTo(page);
        }
      }
    }, [_c('span', [_vm._v("\n              " + _vm._s(page) + "\n            ")]), _c('div', {
      staticClass: "effect"
    })]);
  }), 0), _c('button', {
    staticClass: "vs-pagination--buttons btn-next-pagination vs-pagination--button-next",
    class: {
      disabled: _vm.current === _vm.total ? 'disabled' : null
    },
    attrs: {
      "disabled": _vm.current === _vm.total
    },
    on: {
      "click": _vm.nextPage
    }
  }, [_c('vs-icon', {
    attrs: {
      "icon-pack": _vm.iconPack,
      "icon": _vm.nextIcon ? _vm.nextIcon : _vm.defaultNextIcon
    }
  })], 1), _vm.goto ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.go,
      expression: "go"
    }],
    staticClass: "vs-pagination--input-goto",
    attrs: {
      "max": _vm.total,
      "min": "1",
      "type": "number"
    },
    domProps: {
      "value": _vm.go
    },
    on: {
      "change": _vm.goTo,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.go = $event.target.value;
      }
    }
  }) : _vm._e()])])])], 1);
};
var vsPaginationvue_type_template_id_67409173_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsPagination/vsPagination.vue?vue&type=template&id=67409173

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js

function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsPagination/vsPagination.vue?vue&type=script&lang=js







/* harmony default export */ var vsPaginationvue_type_script_lang_js = ({
  name: 'VsPagination',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    total: {
      type: Number,
      required: true
    },
    sizeArray: {
      type: Number,
      required: false
    },
    maxItems: {
      type: [Number, String],
      required: false
    },
    value: {
      type: Number,
      required: true,
      default: 1
    },
    max: {
      type: Number,
      default: 9
    },
    goto: {
      type: Boolean
    },
    type: {
      type: String
    },
    prevIcon: {
      type: String
    },
    nextIcon: {
      type: String
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    },
    description: {
      default: false,
      type: Boolean
    },
    descriptionItems: {
      default: function _default() {
        return [];
      },
      type: Array
    },
    descriptionTitle: {
      type: String,
      default: 'Registries'
    },
    descriptionConnector: {
      type: String,
      default: 'of'
    },
    descriptionBody: {
      type: String,
      default: 'Pages'
    }
  },
  data: function data() {
    return {
      pages: [],
      current: 0,
      go: 0,
      prevRange: '',
      nextRange: '',
      hoverBtn1: false,
      minRows: 0,
      maxRows: 0,
      indexRows: 0
    };
  },
  computed: {
    defaultNextIcon: function defaultNextIcon() {
      if (this.$vs.rtl) return 'chevron_left';
      return 'chevron_right';
    },
    defaultPrevIcon: function defaultPrevIcon() {
      if (this.$vs.rtl) return 'chevron_right';
      return 'chevron_left';
    },
    stylePagination: function stylePagination() {
      var style = {};
      if (!utils_color.isColor(this.color)) {
        style = {
          '--vs-color-pagination': utils_color.getColor(this.color),
          '--vs-color-pagination-alpha': utils_color.getColor(this.color, .5)
        };
      }
      return style;
    },
    styleDescription: function styleDescription() {
      return {
        'cursor': 'pointer'
      };
    }
  },
  watch: {
    current: function current(val) {
      this.getPages();
      this.calculateMinMax(val);
      this.$emit('input', this.current);
      this.$emit('change', this.current);
    },
    total: function total() {
      this.getPages();
    },
    max: function max() {
      this.getPages();
    },
    value: function value(val) {
      var pageNum = val < 1 ? 1 : val <= this.total ? val : this.total;
      this.goTo(pageNum);
    }
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _this.current = _this.go = _this.value;
            _context.next = 3;
            return _this.calculateMinMax(_this.current);
          case 3:
            _this.indexRows = _this.descriptionItems.indexOf(_this.maxItems);
            _this.getPages();
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: {
    changeRowMaxItems: function changeRowMaxItems(index) {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.indexRows = index;
              _context2.next = 3;
              return _this2.$emit('changeMaxItems', index);
            case 3:
              _context2.next = 5;
              return _this2.calculateMinMax(_this2.current);
            case 5:
              _this2.current = 1;
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    calculateMinMax: function calculateMinMax(val) {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this3.maxRows = val * _this3.maxItems <= _this3.sizeArray ? val * _this3.maxItems : _this3.sizeArray;
              _this3.minRows = val * _this3.maxItems <= _this3.sizeArray ? _this3.maxRows - _this3.maxItems + 1 : (_this3.current - 1) * _this3.maxItems + 1;
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    isEllipsis: function isEllipsis(page) {
      return page === '...';
    },
    goTo: function goTo(page) {
      if (page === '...') {
        return;
      }
      if (typeof page.target === 'undefined') {
        this.current = page;
      } else {
        var value = parseInt(page.target.value, 10);
        this.go = value < 1 ? 1 : value <= this.total ? value : this.total;
        this.current = this.go;
      }
    },
    getPages: function getPages() {
      if (this.total <= this.max) {
        var pages = this.setPages(1, this.total);
        this.pages = pages;
      }
      var even = this.max % 2 === 0 ? 1 : 0;
      if (this.total < 6) {
        this.prevRange = Math.floor(this.max / (this.max / 2));
      } else {
        this.prevRange = Math.floor(this.max / 2);
      }
      this.nextRange = this.total - this.prevRange + 1 + even;
      if (this.current >= this.prevRange && this.current <= this.nextRange) {
        var start = this.current - this.prevRange + 2;
        var end = this.current + this.prevRange - 2 - even;
        this.pages = [1, '...'].concat(_toConsumableArray(this.setPages(start, end)), ['...', this.total]);
      } else if (this.total < 6) {
        this.pages = _toConsumableArray(this.setPages(1, this.total));
      } else {
        this.pages = [].concat(_toConsumableArray(this.setPages(1, this.prevRange)), ['...'], _toConsumableArray(this.setPages(this.nextRange, this.total)));
      }
    },
    setPages: function setPages(start, end) {
      var setPages = [];
      for (start > 0 ? start : 1; start <= end; start++) {
        setPages.push(start);
      }
      return setPages;
    },
    nextPage: function nextPage() {
      if (this.current < this.total) {
        this.current++;
      }
    },
    prevPage: function prevPage() {
      if (this.current > 1) {
        this.current--;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsPagination/vsPagination.vue?vue&type=script&lang=js
 /* harmony default export */ var vsPagination_vsPaginationvue_type_script_lang_js = (vsPaginationvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsPagination/vsPagination.vue





/* normalize component */

var vsPagination_component = normalizeComponent(
  vsPagination_vsPaginationvue_type_script_lang_js,
  vsPaginationvue_type_template_id_67409173_render,
  vsPaginationvue_type_template_id_67409173_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsPagination = (vsPagination_component.exports);
// CONCATENATED MODULE: ./src/components/vsPagination/index.js


/* harmony default export */ var components_vsPagination = (function (Vue) {
  Vue.component(vsPagination.name, vsPagination);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsBreadcrumb/vsBreadcrumb.vue?vue&type=template&id=ce9a457a&lang=html
var vsBreadcrumbvue_type_template_id_ce9a457a_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('nav', _vm._g(_vm._b({
    staticClass: "vs-breadcrumb",
    class: "vs-align-".concat(_vm.align),
    attrs: {
      "aria-label": "breadcrumb"
    }
  }, 'nav', _vm.$attrs, false), _vm.$listeners), [_c('ol', {
    staticClass: "vs-breadcrumb--ol"
  }, [_vm._t("default"), _vm._l(_vm.items, function (item) {
    return _c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.hasSlot,
        expression: "!hasSlot"
      }],
      key: item.title,
      class: {
        'vs-active': item.active,
        'disabled-link': item.disabled
      },
      attrs: {
        "aria-current": item.active ? 'page' : null
      }
    }, [!item.active ? _c('a', {
      staticClass: "vs-breadcrumb--link",
      attrs: {
        "href": item.url ? item.url : '#',
        "title": item.title
      },
      domProps: {
        "textContent": _vm._s(item.title)
      }
    }) : [_c('span', {
      staticClass: "vs-breadcrumb--text",
      class: _vm.textClass,
      style: _vm.textStyle,
      domProps: {
        "textContent": _vm._s(item.title)
      }
    })], !item.active ? _c('span', {
      staticClass: "separator notranslate vs-breadcrum--separator",
      class: _vm.separator.length > 1 ? 'material-icons' : null,
      attrs: {
        "translate": "no",
        "aria-hidden": "true"
      },
      domProps: {
        "textContent": _vm._s(_vm.separator)
      }
    }) : _vm._e()], 2);
  })], 2)]);
};
var vsBreadcrumbvue_type_template_id_ce9a457a_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsBreadcrumb/vsBreadcrumb.vue?vue&type=template&id=ce9a457a&lang=html

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsBreadcrumb/vsBreadcrumb.vue?vue&type=script&lang=js



/* harmony default export */ var vsBreadcrumbvue_type_script_lang_js = ({
  name: 'VsBreadcrumb',
  props: {
    items: {
      type: Array
    },
    separator: {
      type: String,
      default: '/'
    },
    color: {
      type: String,
      default: 'primary'
    },
    align: {
      type: String,
      default: 'left'
    }
  },
  computed: {
    textClass: function textClass() {
      var classes = {};
      if (utils_color.isColor(this.color)) {
        classes["vs-breadcrumb-text-".concat(this.color)] = true;
      }
      return classes;
    },
    textStyle: function textStyle() {
      var style = {};
      if (!utils_color.isColor(this.color)) {
        style.color = utils_color.getColor(this.color);
      }
      return style;
    },
    hasSlot: function hasSlot() {
      return !!this.$slots.default;
    }
  },
  created: function created() {
    var _this = this;
    if (this.items) {
      this.items = this.items.map(function (item) {
        if (typeof item.title === "function") {
          return _objectSpread2(_objectSpread2({}, item), {}, {
            title: item.title(_this.$route.params)
          });
        }
        return item;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsBreadcrumb/vsBreadcrumb.vue?vue&type=script&lang=js
 /* harmony default export */ var vsBreadcrumb_vsBreadcrumbvue_type_script_lang_js = (vsBreadcrumbvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsBreadcrumb/vsBreadcrumb.vue





/* normalize component */

var vsBreadcrumb_component = normalizeComponent(
  vsBreadcrumb_vsBreadcrumbvue_type_script_lang_js,
  vsBreadcrumbvue_type_template_id_ce9a457a_lang_html_render,
  vsBreadcrumbvue_type_template_id_ce9a457a_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsBreadcrumb = (vsBreadcrumb_component.exports);
// CONCATENATED MODULE: ./src/components/vsBreadcrumb/index.js


/* harmony default export */ var components_vsBreadcrumb = (function (Vue) {
  Vue.component(vsBreadcrumb.name, vsBreadcrumb);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/functions/vsDialog/index.vue?vue&type=template&id=42aabbb6&lang=html
var vsDialogvue_type_template_id_42aabbb6_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('transition', {
    attrs: {
      "name": "dialog-t"
    }
  }, [(_vm.isPrompt ? _vm.active : _vm.fActive) ? _c('div', {
    ref: "con",
    staticClass: "vs-component con-vs-dialog",
    class: ["vs-dialog-".concat(_vm.color)]
  }, [_c('div', {
    staticClass: "vs-dialog-dark",
    on: {
      "click": function click($event) {
        return _vm.handleClose($event, true);
      }
    }
  }), _c('div', {
    ref: "dialogx",
    staticClass: "vs-dialog"
  }, [_c('header', {
    staticClass: "vs-dialog-header",
    style: _vm.styleHeader
  }, [_c('div', {
    staticClass: "con-title-after"
  }, [_c('span', {
    staticClass: "after",
    style: _vm.styleAfter
  }), _c('h3', {
    staticClass: "dialog-title"
  }, [_vm._v(_vm._s(_vm.title) + " ")])]), _vm.type == 'alert' ? _c('vs-icon', {
    staticClass: "vs-dialog-cancel vs-dialog-cancel--icon notranslate",
    attrs: {
      "icon": _vm.closeIcon,
      "icon-pack": _vm.iconPack
    },
    nativeOn: {
      "click": function click($event) {
        return _vm.handleClose.apply(null, arguments);
      }
    }
  }) : _vm._e()], 1), _c('div', {
    staticClass: "vs-dialog-text"
  }, [_vm._t("default"), _vm._v("\n        " + _vm._s(_vm.text) + "\n      ")], 2), (_vm.buttonsHidden ? false : _vm.isPrompt || _vm.type == 'confirm') ? _c('footer', [_c('vs-button', {
    staticClass: "vs-dialog-accept-button",
    attrs: {
      "disabled": _vm.isValid == 'none' ? false : !_vm.isValid,
      "color": _vm.color,
      "type": _vm.buttonAccept
    },
    on: {
      "click": _vm.acceptDialog
    }
  }, [_vm._v(_vm._s(_vm.acceptText))]), _c('vs-button', {
    staticClass: "vs-dialog-cancel-button",
    attrs: {
      "text-color": 'rgba(0,0,0,.5)',
      "type": _vm.buttonCancel
    },
    on: {
      "click": _vm.cancelClose
    }
  }, [_vm._v(_vm._s(_vm.cancelText))])], 1) : _vm._e(), _vm.type == 'alert' && !_vm.isPrompt ? _c('footer', [_c('vs-button', {
    staticClass: "vs-dialog-accept-button",
    attrs: {
      "color": _vm.color,
      "type": _vm.buttonAccept
    },
    on: {
      "click": _vm.acceptDialog
    }
  }, [_vm._v(_vm._s(_vm.acceptText))])], 1) : _vm._e()])]) : _vm._e()]);
};
var vsDialogvue_type_template_id_42aabbb6_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/functions/vsDialog/index.vue?vue&type=template&id=42aabbb6&lang=html

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/functions/vsDialog/index.vue?vue&type=script&lang=js

/* harmony default export */ var vsDialogvue_type_script_lang_js = ({
  name: 'VsPrompt',
  props: {
    color: {
      default: 'primary',
      type: String
    },
    active: {
      default: false,
      type: Boolean
    },
    buttonAccept: {
      default: 'filled',
      type: String
    },
    buttonCancel: {
      default: 'flat',
      type: String
    },
    isValid: {
      default: 'none',
      type: [Boolean, String]
    },
    buttonsHidden: {
      default: false,
      type: Boolean
    },
    acceptText: {
      default: 'Accept',
      type: String
    },
    cancelText: {
      default: 'Cancel',
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    closeIcon: {
      default: 'close',
      type: String
    },
    text: {
      default: null,
      type: String
    },
    title: {
      default: 'Dialog',
      type: String
    },
    type: {
      default: 'alert',
      type: String
    },
    parent: {
      default: null
    }
  },
  data: function data() {
    return {
      isPrompt: true,
      fActive: false,
      parameters: null
    };
  },
  computed: {
    styleHeader: function styleHeader() {
      return {
        color: utils_color.getColor(this.color, 1)
      };
    },
    styleAfter: function styleAfter() {
      return {
        background: utils_color.getColor(this.color, 1)
      };
    }
  },
  watch: {
    active: function active() {
      var _this = this;
      this.$nextTick(function () {
        if (_this.active) {
          _this.insertBody();
        }
      });
    },
    fActive: function fActive() {
      var _this2 = this;
      this.$nextTick(function () {
        if (_this2.fActive) {
          _this2.insertBody();
        }
      });
    }
  },
  mounted: function mounted() {
    if (this.active && this.isPrompt) {
      this.insertBody();
    }
    this.fActive = this.active;
  },
  beforeDestroy: function beforeDestroy() {
    // close the left open prompt
    var elx = this.$refs.con;
    var parentx = this.parent ? this.parent : document.body;
    if (elx) {
      parentx.removeChild(elx);
    }
  },
  methods: {
    giveColor: function giveColor(color) {
      return utils_color.rColor(color);
    },
    acceptDialog: function acceptDialog() {
      if (!this.isPrompt) {
        this.accept ? this.accept(this.parameters) : null;
        this.fActive = false;
        this.$emit('update:active', false);
        this.$emit('accept', this.parameters);
      } else {
        if (this.isValid || this.isValid == 'none') {
          this.accept ? this.accept() : null;
          this.fActive = false;
          this.$emit('update:active', false);
          this.$emit('accept', this.parameters);
        }
      }
    },
    rebound: function rebound() {
      var _this3 = this;
      this.$refs.dialogx.classList.add('locked');
      setTimeout(function () {
        _this3.$refs.dialogx.classList.remove('locked');
      }, 200);
    },
    handleClose: function handleClose(event, con) {
      if (con) {
        if (event.target.className.indexOf('vs-dialog-dark') != -1 && this.type == 'alert') {
          this.fActive = false;
          this.$emit('update:active', false);
        } else if (event.target.className.indexOf('vs-dialog-dark') != -1) {
          this.rebound();
        }
      } else {
        if (event ? event.target.className.indexOf('vs-dialog-cancel') != -1 : event ? event.target.className.indexOf('vs-dialog-cancel--icon') != -1 : false) {
          this.fActive = false;
          this.$emit('update:active', false);
        }
      }
      this.$emit('close');
    },
    cancelClose: function cancelClose() {
      this.fActive = false;
      this.$emit('update:active', false);
      this.$emit('cancel');
      // this.$emit('cancel')
      this.cancel ? this.cancel(this.parameters) : null;
    },
    insertBody: function insertBody() {
      var elx = this.$refs.con;
      var parentx = this.parent ? this.parent : document.body;
      parentx.insertBefore(elx, parentx.firstChild);
    }
  }
});
// CONCATENATED MODULE: ./src/functions/vsDialog/index.vue?vue&type=script&lang=js
 /* harmony default export */ var functions_vsDialogvue_type_script_lang_js = (vsDialogvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/functions/vsDialog/index.vue





/* normalize component */

var vsDialog_component = normalizeComponent(
  functions_vsDialogvue_type_script_lang_js,
  vsDialogvue_type_template_id_42aabbb6_lang_html_render,
  vsDialogvue_type_template_id_42aabbb6_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsDialog = (vsDialog_component.exports);
// CONCATENATED MODULE: ./src/components/vsPrompt/index.js


/* harmony default export */ var vsPrompt = (function (Vue) {
  Vue.component(vsDialog.name, vsDialog);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsDivider/vsDivider.vue?vue&type=template&id=4d91634e&lang=html
var vsDividervue_type_template_id_4d91634e_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vs-component vs-divider"
  }, [_c('span', {
    staticClass: "vs-divider-border after",
    class: _vm.borderClass,
    style: _vm.afterStyle
  }), _vm.icon || _vm.$slots.default ? _c('span', {
    staticClass: "vs-divider--text",
    class: _vm.textAndBackgroundClass,
    style: {
      'color': _vm.textColor,
      'background': _vm.backgroundColor
    }
  }, [!_vm.icon ? [_vm._t("default")] : _c('vs-icon', {
    staticClass: "icon-divider notranslate vs-divider--icon",
    attrs: {
      "icon-pack": _vm.iconPack,
      "icon": _vm.icon
    }
  })], 2) : _vm._e(), _c('span', {
    staticClass: "vs-divider-border before",
    class: _vm.borderClass,
    style: _vm.beforeStyle
  })]);
};
var vsDividervue_type_template_id_4d91634e_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsDivider/vsDivider.vue?vue&type=template&id=4d91634e&lang=html

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsDivider/vsDivider.vue?vue&type=script&lang=js

/* harmony default export */ var vsDividervue_type_script_lang_js = ({
  name: "VsDivider",
  props: {
    color: {
      type: String,
      default: 'rgba(0, 0, 0,.1)'
    },
    background: {
      type: String,
      default: 'transparent'
    },
    icon: {
      default: null,
      type: String
    },
    borderStyle: {
      default: 'solid',
      type: String
    },
    borderHeight: {
      default: '1px',
      type: String
    },
    position: {
      default: 'center',
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    }
  },
  computed: {
    getWidthAfter: function getWidthAfter() {
      var widthx = '100%';
      if (this.position == 'left') {
        widthx = '0%';
      } else if (this.position == 'left-center') {
        widthx = '25%';
      } else if (this.position == 'right-center') {
        widthx = '75%';
      } else if (this.position == 'right') {
        widthx = '100%';
      }
      return widthx;
    },
    getWidthBefore: function getWidthBefore() {
      var widthx = '100%';
      if (this.position == 'left') {
        widthx = '100%';
      } else if (this.position == 'left-center') {
        widthx = '75%';
      } else if (this.position == 'right-center') {
        widthx = '25%';
      } else if (this.position == 'right') {
        widthx = '0%';
      }
      return widthx;
    },
    borderColor: function borderColor() {
      if (!utils_color.isColor(this.color)) {
        return utils_color.getColor(this.color);
      }
    },
    afterStyle: function afterStyle() {
      var classes = {
        width: this.getWidthAfter,
        'border-top-width': this.borderHeight,
        'border-top-style': this.borderStyle
      };
      if (!utils_color.isColor(this.color)) {
        classes['border-top-color'] = this.borderColor;
      }
      return classes;
    },
    beforeStyle: function beforeStyle() {
      var classes = {
        width: this.getWidthBefore,
        'border-top-width': this.borderHeight,
        'border-top-style': this.borderStyle
      };
      if (!utils_color.isColor(this.color)) {
        classes['border-top-color'] = this.borderColor;
      }
      return classes;
    },
    borderClass: function borderClass() {
      var classes = {};
      var borderColor = utils_color.isColor(this.color) ? this.color : 'default';
      classes["vs-divider-border-".concat(borderColor)] = true;
      return classes;
    },
    textColor: function textColor() {
      if (!utils_color.isColor(this.color)) {
        return utils_color.getColor(this.color !== 'rgba(0, 0, 0,.1)' ? this.color : null);
      }
    },
    backgroundColor: function backgroundColor() {
      if (!utils_color.isColor(this.background)) {
        return utils_color.getColor(this.background);
      }
    },
    textAndBackgroundClass: function textAndBackgroundClass() {
      var classes = {};
      var textColor = utils_color.isColor(this.color) ? this.color : 'default';
      classes["vs-divider-text-".concat(textColor)] = true;
      var backgroundColor = utils_color.isColor(this.background) ? this.background : 'default';
      classes["vs-divider-background-".concat(backgroundColor)] = true;
      return classes;
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsDivider/vsDivider.vue?vue&type=script&lang=js
 /* harmony default export */ var vsDivider_vsDividervue_type_script_lang_js = (vsDividervue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsDivider/vsDivider.vue





/* normalize component */

var vsDivider_component = normalizeComponent(
  vsDivider_vsDividervue_type_script_lang_js,
  vsDividervue_type_template_id_4d91634e_lang_html_render,
  vsDividervue_type_template_id_4d91634e_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsDivider = (vsDivider_component.exports);
// CONCATENATED MODULE: ./src/components/vsDivider/index.js


/* harmony default export */ var components_vsDivider = (function (Vue) {
  Vue.component(vsDivider.name, vsDivider);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSpacer/vsSpacer.vue?vue&type=template&id=44914ac6
var vsSpacervue_type_template_id_44914ac6_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vs-spacer"
  });
};
var vsSpacervue_type_template_id_44914ac6_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsSpacer/vsSpacer.vue?vue&type=template&id=44914ac6

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSpacer/vsSpacer.vue?vue&type=script&lang=js
/* harmony default export */ var vsSpacervue_type_script_lang_js = ({
  name: 'VsSpacer'
});
// CONCATENATED MODULE: ./src/components/vsSpacer/vsSpacer.vue?vue&type=script&lang=js
 /* harmony default export */ var vsSpacer_vsSpacervue_type_script_lang_js = (vsSpacervue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsSpacer/vsSpacer.vue





/* normalize component */

var vsSpacer_component = normalizeComponent(
  vsSpacer_vsSpacervue_type_script_lang_js,
  vsSpacervue_type_template_id_44914ac6_render,
  vsSpacervue_type_template_id_44914ac6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsSpacer = (vsSpacer_component.exports);
// CONCATENATED MODULE: ./src/components/vsSpacer/index.js


/* harmony default export */ var components_vsSpacer = (function (Vue) {
  Vue.component(vsSpacer.name, vsSpacer);
});
// CONCATENATED MODULE: ./src/components/vsIcon/index.js


/* harmony default export */ var components_vsIcon = (function (Vue) {
  Vue.component(vsIcon.name, vsIcon);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsNavbar/vsNavbar.vue?vue&type=template&id=02a86abb&lang=html
var vsNavbarvue_type_template_id_02a86abb_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', {
    staticClass: "vs-navbar",
    class: ["vs-navbar-".concat(_vm.type), "vs-navbar-color-".concat(_vm.color), {
      'collapse': _vm.collapse
    }],
    style: [_vm.styleNavbar]
  }, [_c('div', {
    staticClass: "vs-navbar--header"
  }, [_c('button', {
    staticClass: "vs-navbar--btn-responsive",
    class: {
      'active-menu': _vm.activeMenuResponsive
    },
    on: {
      "click": function click($event) {
        _vm.activeMenuResponsive = !_vm.activeMenuResponsive;
      }
    }
  }, [_c('span', {
    staticClass: "btn-responsive-line line--1"
  }), _c('span', {
    staticClass: "btn-responsive-line line--2"
  }), _c('span', {
    staticClass: "btn-responsive-line line--3"
  })]), _vm._t("title")], 2), _c('div', {
    staticClass: "vs-con-items",
    class: {
      'activeMenuResponsive': _vm.activeMenuResponsive
    }
  }, [_vm._t("default")], 2)]);
};
var vsNavbarvue_type_template_id_02a86abb_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbar.vue?vue&type=template&id=02a86abb&lang=html

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsNavbar/vsNavbar.vue?vue&type=script&lang=js

/* harmony default export */ var vsNavbarvue_type_script_lang_js = ({
  name: 'VsNavbar',
  props: {
    value: {},
    type: {
      default: null,
      type: String
    },
    collapse: {
      default: false,
      type: Boolean
    },
    color: {
      type: String,
      default: 'transparent'
    },
    activeTextColor: {
      type: String,
      default: 'primary'
    },
    textColor: {
      type: String,
      default: 'rgb(40,40,40)'
    }
  },
  data: function data() {
    return {
      activeMenuResponsive: false
    };
  },
  computed: {
    styleNavbar: function styleNavbar() {
      if (utils_color.isColor(this.color)) {
        return {
          background: "rgb(".concat(utils_color.changeColor(this.color), ")")
        };
      }
      return {
        background: utils_color.getColor(this.color)
      };
    }
  },
  methods: {
    changeIndex: function changeIndex(index) {
      this.$emit('input', index);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbar.vue?vue&type=script&lang=js
 /* harmony default export */ var vsNavbar_vsNavbarvue_type_script_lang_js = (vsNavbarvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbar.vue





/* normalize component */

var vsNavbar_component = normalizeComponent(
  vsNavbar_vsNavbarvue_type_script_lang_js,
  vsNavbarvue_type_template_id_02a86abb_lang_html_render,
  vsNavbarvue_type_template_id_02a86abb_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsNavbar = (vsNavbar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsNavbar/vsNavItem.vue?vue&type=template&id=6f341d00
var vsNavItemvue_type_template_id_6f341d00_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('li', {
    staticClass: "vs-navbar--item",
    class: [{
      'is-active-item': _vm.isActiveItem
    }, "vs-navbar-item-".concat(_vm.getActiveTextColor)],
    style: [_vm.styleHover],
    on: {
      "click": function click($event) {
        return _vm.clickItem();
      },
      "mouseout": _vm.mouseout,
      "mouseover": _vm.mouseover
    }
  }, [_vm._t("default"), _c('span', {
    staticClass: "vs-navbar-after",
    style: [_vm.styleAfter]
  })], 2);
};
var vsNavItemvue_type_template_id_6f341d00_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavItem.vue?vue&type=template&id=6f341d00

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsNavbar/vsNavItem.vue?vue&type=script&lang=js


/* harmony default export */ var vsNavItemvue_type_script_lang_js = ({
  name: 'VsNavbarItem',
  props: {
    index: {
      type: [Number, String],
      default: null
    }
  },
  data: function data() {
    return {
      hover: false
    };
  },
  computed: {
    getActiveTextColor: function getActiveTextColor() {
      return this.$parent.$props.activeTextColor;
    },
    isActiveItem: function isActiveItem() {
      return this.$parent.value == this.index;
    },
    styleAfter: function styleAfter() {
      return {
        background: utils_color.getColor(this.getActiveTextColor)
      };
    },
    styleHover: function styleHover() {
      if (this.isActiveItem) {
        return {
          color: utils_color.getColor(this.getActiveTextColor)
        };
      } else {
        return {
          color: this.hover ? utils_color.getColor(this.getActiveTextColor) : utils_color.getColor(this.$parent.$props.textColor)
        };
      }
    }
  },
  methods: {
    clickItem: function clickItem() {
      this.$parent.changeIndex(this.index);
    },
    mouseout: function mouseout() {
      this.hover = false;
    },
    mouseover: function mouseover() {
      this.hover = true;
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavItem.vue?vue&type=script&lang=js
 /* harmony default export */ var vsNavbar_vsNavItemvue_type_script_lang_js = (vsNavItemvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavItem.vue





/* normalize component */

var vsNavItem_component = normalizeComponent(
  vsNavbar_vsNavItemvue_type_script_lang_js,
  vsNavItemvue_type_template_id_6f341d00_render,
  vsNavItemvue_type_template_id_6f341d00_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsNavItem = (vsNavItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsNavbar/vsNavGroup.vue?vue&type=template&id=2d6da28e
var vsNavGroupvue_type_template_id_2d6da28e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('li', {
    staticClass: "vs-nav-item"
  }, [_c('div', {
    staticClass: "vs-nav-item-slot"
  }, [_vm._t("default")], 2), _c('ul', {
    staticClass: "vs-nav-submenu"
  }, [_vm._t("submenu")], 2)]);
};
var vsNavGroupvue_type_template_id_2d6da28e_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavGroup.vue?vue&type=template&id=2d6da28e

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsNavbar/vsNavGroup.vue?vue&type=script&lang=js
/* harmony default export */ var vsNavGroupvue_type_script_lang_js = ({
  name: 'VsNavbarGroup'
});
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavGroup.vue?vue&type=script&lang=js
 /* harmony default export */ var vsNavbar_vsNavGroupvue_type_script_lang_js = (vsNavGroupvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavGroup.vue





/* normalize component */

var vsNavGroup_component = normalizeComponent(
  vsNavbar_vsNavGroupvue_type_script_lang_js,
  vsNavGroupvue_type_template_id_2d6da28e_render,
  vsNavGroupvue_type_template_id_2d6da28e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsNavGroup = (vsNavGroup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsNavbar/vsNavbarTitle.vue?vue&type=template&id=abff2492
var vsNavbarTitlevue_type_template_id_abff2492_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('h3', {
    staticClass: "vs-navbar--title"
  }, [_vm._t("default")], 2);
};
var vsNavbarTitlevue_type_template_id_abff2492_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbarTitle.vue?vue&type=template&id=abff2492

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsNavbar/vsNavbarTitle.vue?vue&type=script&lang=js
/* harmony default export */ var vsNavbarTitlevue_type_script_lang_js = ({
  name: 'VsNavbarTitle'
});
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbarTitle.vue?vue&type=script&lang=js
 /* harmony default export */ var vsNavbar_vsNavbarTitlevue_type_script_lang_js = (vsNavbarTitlevue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbarTitle.vue





/* normalize component */

var vsNavbarTitle_component = normalizeComponent(
  vsNavbar_vsNavbarTitlevue_type_script_lang_js,
  vsNavbarTitlevue_type_template_id_abff2492_render,
  vsNavbarTitlevue_type_template_id_abff2492_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsNavbarTitle = (vsNavbarTitle_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsNavbar/vsNavbarItems.vue?vue&type=template&id=fd9aae46
var vsNavbarItemsvue_type_template_id_fd9aae46_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vs-navbar--items"
  }, [_vm._t("default")], 2);
};
var vsNavbarItemsvue_type_template_id_fd9aae46_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbarItems.vue?vue&type=template&id=fd9aae46

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsNavbar/vsNavbarItems.vue?vue&type=script&lang=js
/* harmony default export */ var vsNavbarItemsvue_type_script_lang_js = ({
  name: 'VsNavbarItems'
});
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbarItems.vue?vue&type=script&lang=js
 /* harmony default export */ var vsNavbar_vsNavbarItemsvue_type_script_lang_js = (vsNavbarItemsvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbarItems.vue





/* normalize component */

var vsNavbarItems_component = normalizeComponent(
  vsNavbar_vsNavbarItemsvue_type_script_lang_js,
  vsNavbarItemsvue_type_template_id_fd9aae46_render,
  vsNavbarItemsvue_type_template_id_fd9aae46_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsNavbarItems = (vsNavbarItems_component.exports);
// CONCATENATED MODULE: ./src/components/vsNavbar/index.js






/* harmony default export */ var components_vsNavbar = (function (Vue) {
  Vue.component(vsNavbar.name, vsNavbar);
  Vue.component(vsNavItem.name, vsNavItem);
  Vue.component(vsNavGroup.name, vsNavGroup);
  Vue.component(vsNavbarTitle.name, vsNavbarTitle);
  Vue.component(vsNavbarItems.name, vsNavbarItems);
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("13d5");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSideBar/vsSidebar.vue?vue&type=template&id=74680b86


var vsSidebarvue_type_template_id_74680b86_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('transition', {
    attrs: {
      "name": "vs-sidebar-animate"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.staticPosition || _vm.value,
      expression: "staticPosition || value"
    }],
    ref: "sidebarbackground",
    staticClass: "vs-content-sidebar"
  }, [!_vm.hiddenBackground ? _c('div', {
    staticClass: "vs-sidebar--background"
  }) : _vm._e(), _c('div', {
    ref: "sidebarContainer",
    staticClass: "vs-sidebar",
    class: ["vs-sidebar-".concat(_vm.color), {
      'vs-sidebar-parent': _vm.parent != 'body',
      'vs-sidebar-staticPosition': _vm.staticPosition,
      'vs-sidebar-position-right': _vm.positionRight,
      'vs-sidebar-reduce': _vm.reduce,
      'vs-sidebar-reduceNotRebound': _vm.reduceNotRebound,
      'vs-sidebar-reduceNotHoverExpand': _vm.reduceNotHoverExpand
    }]
  }, [_vm.$slots.header ? _c('header', {
    staticClass: "vs-sidebar--header"
  }, [_vm._t("header")], 2) : _vm._e(), _c('div', {
    staticClass: "vs-sidebar--items"
  }, [_vm._t("default")], 2), _vm.spacer ? _c('vs-spacer') : _vm._e(), _vm.$slots.footer ? _c('footer', {
    staticClass: "vs-sidebar--footer"
  }, [_vm._t("footer")], 2) : _vm._e()], 1)])]);
};
var vsSidebarvue_type_template_id_74680b86_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebar.vue?vue&type=template&id=74680b86

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSideBar/vsSidebar.vue?vue&type=script&lang=js

/* harmony default export */ var vsSidebarvue_type_script_lang_js = ({
  name: 'VsSidebar',
  props: {
    value: {
      default: false
    },
    defaultIndex: {
      default: null,
      type: [String, Number]
    },
    color: {
      default: 'primary',
      type: String
    },
    parent: {
      default: null,
      type: [String, Object]
    },
    spacer: {
      default: false,
      type: Boolean
    },
    staticPosition: {
      default: false,
      type: Boolean
    },
    positionRight: {
      default: false,
      type: Boolean
    },
    clickNotClose: {
      default: false,
      type: Boolean
    },
    reduce: {
      default: false,
      type: Boolean
    },
    reduceNotRebound: {
      default: false,
      type: Boolean
    },
    reduceNotHoverExpand: {
      default: false,
      type: Boolean
    },
    hiddenBackground: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      currentIndex: 0
    };
  },
  watch: {
    value: function value() {
      if (!this.clickNotClose) this.addEventClick();
    }
  },
  created: function created() {
    this.currentIndex = this.defaultIndex;
  },
  mounted: function mounted() {
    this.insertBody();
  },
  methods: {
    getActive: function getActive() {
      return this.currentIndex;
    },
    setIndexActive: function setIndexActive(index) {
      this.currentIndex = index;
    },
    addEventClick: function addEventClick() {
      var _this = this;
      this.$nextTick(function () {
        var parentx = typeof _this.parent == 'string' ? document.querySelector(_this.parent) : _this.parent;
        var element = parentx || window;
        if (_this.value) {
          setTimeout(function () {
            element.addEventListener('click', _this.closeSidebar);
          }, 300);
        }
      });
    },
    closeSidebar: function closeSidebar(evt) {
      var parent = evt.target.closest('.vs-sidebar');
      if (!parent) {
        this.$emit('input', false);
        var parentx = typeof this.parent == 'string' ? document.querySelector(this.parent) : this.parent;
        var element = parentx || window;
        element.removeEventListener('click', this.closeSidebar);
      }
    },
    insertBody: function insertBody() {
      if (this.parent) {
        var elx = this.$refs.sidebarbackground;
        var parentx = typeof this.parent == 'string' ? document.querySelector(this.parent) : this.parent;
        parentx.insertBefore(elx, parentx.firstChild);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebar.vue?vue&type=script&lang=js
 /* harmony default export */ var vsSideBar_vsSidebarvue_type_script_lang_js = (vsSidebarvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebar.vue





/* normalize component */

var vsSidebar_component = normalizeComponent(
  vsSideBar_vsSidebarvue_type_script_lang_js,
  vsSidebarvue_type_template_id_74680b86_render,
  vsSidebarvue_type_template_id_74680b86_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsSidebar = (vsSidebar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSideBar/vsSidebarItem.vue?vue&type=template&id=4b9f5f94
var vsSidebarItemvue_type_template_id_4b9f5f94_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vs-sidebar--item",
    class: {
      'vs-sidebar-item-active': _vm.getActive
    },
    on: {
      "click": _vm.setIndexActive
    }
  }, [_vm.to ? _c('router-link', {
    attrs: {
      "to": _vm.to
    }
  }, [_c('vs-icon', {
    attrs: {
      "icon-pack": _vm.iconPack,
      "icon": _vm.icon
    }
  }), _vm._t("default")], 2) : _c('a', {
    attrs: {
      "href": _vm.href
    }
  }, [_c('vs-icon', {
    attrs: {
      "icon-pack": _vm.iconPack,
      "icon": _vm.icon
    }
  }), _vm._t("default")], 2)], 1);
};
var vsSidebarItemvue_type_template_id_4b9f5f94_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebarItem.vue?vue&type=template&id=4b9f5f94

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSideBar/vsSidebarItem.vue?vue&type=script&lang=js

/* harmony default export */ var vsSidebarItemvue_type_script_lang_js = ({
  name: 'VsSidebarItem',
  props: {
    icon: {
      default: null,
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    href: {
      default: '#',
      type: String
    },
    to: {
      default: null,
      type: [String, Object]
    },
    index: {
      default: null,
      type: [String, Number]
    }
  },
  computed: {
    getActive: function getActive() {
      return this.$parent.getActive() == this.index;
    }
  },
  methods: {
    setIndexActive: function setIndexActive() {
      this.$parent.setIndexActive(this.index);
      this.$emit('click');
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebarItem.vue?vue&type=script&lang=js
 /* harmony default export */ var vsSideBar_vsSidebarItemvue_type_script_lang_js = (vsSidebarItemvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebarItem.vue





/* normalize component */

var vsSidebarItem_component = normalizeComponent(
  vsSideBar_vsSidebarItemvue_type_script_lang_js,
  vsSidebarItemvue_type_template_id_4b9f5f94_render,
  vsSidebarItemvue_type_template_id_4b9f5f94_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsSidebarItem = (vsSidebarItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSideBar/vsSidebarGroup.vue?vue&type=template&id=03dfb3d2
var vsSidebarGroupvue_type_template_id_03dfb3d2_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vs-sidebar-group",
    class: {
      'vs-sidebar-group-open': _vm.openItems
    },
    on: {
      "mouseover": _vm.mouseover,
      "mouseout": _vm.mouseout
    }
  }, [_c('h4', {
    on: {
      "click": _vm.clickGroup
    }
  }, [_vm._v(_vm._s(_vm.title) + " "), _c('vs-icon', [_vm._v("keyboard_arrow_down")])], 1), _c('span', {
    staticClass: "vs-sidebar--tooltip"
  }, [_vm._v(_vm._s(_vm.title))]), _c('ul', {
    ref: "items",
    staticClass: "vs-sidebar--group-items",
    style: _vm.styleItems
  }, [_vm._t("default")], 2)]);
};
var vsSidebarGroupvue_type_template_id_03dfb3d2_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebarGroup.vue?vue&type=template&id=03dfb3d2

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSideBar/vsSidebarGroup.vue?vue&type=script&lang=js
/* harmony default export */ var vsSidebarGroupvue_type_script_lang_js = ({
  name: 'VsSidebarGroup',
  props: {
    collapsed: {
      default: false,
      type: Boolean
    },
    title: {
      default: null,
      type: String
    },
    openHover: {
      default: false,
      type: Boolean
    },
    open: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      maxHeight: '0px',
      openItems: false
    };
  },
  computed: {
    styleItems: function styleItems() {
      return {
        maxHeight: this.maxHeight
      };
    }
  },
  watch: {
    maxHeight: function maxHeight() {
      this.openItems = this.maxHeight != '0px';
    }
  },
  mounted: function mounted() {
    this.openItems = this.open;
    if (this.open) {
      this.maxHeight = 'none';
    }
  },
  methods: {
    getActive: function getActive() {
      return this.$parent.getActive();
    },
    setIndexActive: function setIndexActive(index) {
      this.$parent.setIndexActive(index);
    },
    clickGroup: function clickGroup() {
      var _this = this;
      if (!this.openHover) {
        var scrollHeight = this.$refs.items.scrollHeight;
        if (this.maxHeight == '0px') {
          this.maxHeight = "".concat(scrollHeight, "px");
          setTimeout(function () {
            _this.maxHeight = 'none';
          }, 300);
        } else {
          this.maxHeight = "".concat(scrollHeight, "px");
          setTimeout(function () {
            _this.maxHeight = "".concat(0, "px");
          }, 50);
        }
      }
    },
    mouseover: function mouseover() {
      if (this.openHover) {
        var scrollHeight = this.$refs.items.scrollHeight;
        this.maxHeight = "".concat(scrollHeight, "px");
      }
    },
    mouseout: function mouseout() {
      if (this.openHover) {
        var scrollHeight = 0;
        this.maxHeight = "".concat(scrollHeight, "px");
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebarGroup.vue?vue&type=script&lang=js
 /* harmony default export */ var vsSideBar_vsSidebarGroupvue_type_script_lang_js = (vsSidebarGroupvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebarGroup.vue





/* normalize component */

var vsSidebarGroup_component = normalizeComponent(
  vsSideBar_vsSidebarGroupvue_type_script_lang_js,
  vsSidebarGroupvue_type_template_id_03dfb3d2_render,
  vsSidebarGroupvue_type_template_id_03dfb3d2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsSidebarGroup = (vsSidebarGroup_component.exports);
// CONCATENATED MODULE: ./src/components/vsSideBar/index.js




/* harmony default export */ var vsSideBar = (function (Vue) {
  Vue.component(vsSidebar.name, vsSidebar);
  Vue.component(vsSidebarItem.name, vsSidebarItem);
  Vue.component(vsSidebarGroup.name, vsSidebarGroup);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsDropDown/vsDropDown.vue?vue&type=template&id=5d4c1376&lang=html
var vsDropDownvue_type_template_id_5d4c1376_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('button', _vm._g(_vm._b({
    ref: "dropdown",
    staticClass: "vs-con-dropdown parent-dropdown",
    attrs: {
      "type": "button"
    }
  }, 'button', _vm.$attrs, false), _vm.listeners), [_vm._t("default")], 2);
};
var vsDropDownvue_type_template_id_5d4c1376_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDown.vue?vue&type=template&id=5d4c1376&lang=html

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsDropDown/vsDropDown.vue?vue&type=script&lang=js





/* harmony default export */ var vsDropDownvue_type_script_lang_js = ({
  name: "VsDropdown",
  inheritAttrs: false,
  props: {
    vsTriggerClick: {
      default: false,
      type: Boolean
    },
    vsTriggerContextmenu: {
      default: false,
      type: Boolean
    },
    color: {
      default: 'primary',
      type: String
    },
    vsCustomContent: {
      default: false,
      type: Boolean
    },
    vsDropRight: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      vsDropdownVisible: false,
      rightx: false
    };
  },
  computed: {
    listeners: function listeners() {
      var _this = this;
      return _objectSpread2(_objectSpread2({}, this.$listeners), {}, {
        contextmenu: function contextmenu(evt) {
          return _this.vsTriggerContextmenu ? _this.clickToogleMenu(evt, true) : {};
        },
        click: function click(evt) {
          if (!_this.vsTriggerContextmenu) {
            _this.clickToogleMenu(evt);
          }
          if (_this.$el === evt.target) {
            _this.$emit('click');
          }
        },
        mouseout: function mouseout(evt) {
          return _this.toggleMenu('out', evt);
        },
        mouseover: function mouseover(evt) {
          return _this.toggleMenu('over', evt);
        }
      });
    }
  },
  watch: {
    vsDropdownVisible: function vsDropdownVisible() {
      this.changePositionMenu();
      if (this.vsDropdownVisible) {
        this.$emit('focus');
        document.addEventListener('click', this.clickx);
      } else {
        this.$emit('blur');
      }
    }
  },
  mounted: function mounted() {
    this.changeColor();
    document.addEventListener('click', this.clickx);
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('click', this.clickx);
  },
  methods: {
    clickx: function clickx(evt) {
      var _this$$children$filte = this.$children.filter(function (item) {
          return item.hasOwnProperty('dropdownVisible');
        }),
        _this$$children$filte2 = _slicedToArray(_this$$children$filte, 1),
        dropdownMenu = _this$$children$filte2[0];
      dropdownMenu.vsCustomContent = this.vsCustomContent;
      dropdownMenu.vsTriggerClick = this.vsTriggerClick;
      dropdownMenu.vsDropRight = this.vsDropRight;
      if ((this.vsTriggerClick || this.vsCustomContent) && this.vsDropdownVisible) {
        if (evt.target !== this.$refs.dropdown && evt.target.parentNode !== this.$refs.dropdown && evt.target.parentNode.parentNode !== this.$refs.dropdown) {
          if (!evt.target.closest('.vs-dropdown--menu')) {
            dropdownMenu.dropdownVisible = this.vsDropdownVisible = false;
            document.removeEventListener('click', this.clickx);
          }
        }
      }
    },
    changeColor: function changeColor() {
      var _this2 = this;
      var child = this.$children;
      child.forEach(function (item) {
        if (item.$vnode.tag.indexOf('dropdown') != -1) {
          item.color = _this2.color;
        }
      });
    },
    changePositionMenu: function changePositionMenu() {
      var _this3 = this;
      var _this$$children$filte3 = this.$children.filter(function (item) {
          return item.hasOwnProperty('dropdownVisible');
        }),
        _this$$children$filte4 = _slicedToArray(_this$$children$filte3, 1),
        dropdownMenu = _this$$children$filte4[0];
      var scrollTopx = window.pageYOffset || document.documentElement.scrollTop;
      if (this.$refs.dropdown.getBoundingClientRect().top + 300 >= window.innerHeight) {
        this.$nextTick(function () {
          dropdownMenu.topx = _this3.$refs.dropdown.getBoundingClientRect().top - dropdownMenu.$el.clientHeight - 7 + scrollTopx;
          dropdownMenu.notHeight = true;
        });
      } else {
        dropdownMenu.notHeight = false;
        dropdownMenu.topx = this.$refs.dropdown.getBoundingClientRect().top + this.$refs.dropdown.clientHeight + scrollTopx - 5;
      }
      this.$nextTick(function () {
        var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (_this3.$refs.dropdown.getBoundingClientRect().left + dropdownMenu.$el.offsetWidth >= w - 25) {
          // this.rightx = true
        }
        if (_this3.$refs.dropdown.getBoundingClientRect().right < dropdownMenu.$el.clientWidth + 25) {
          dropdownMenu.leftx = dropdownMenu.$el.clientWidth + _this3.$refs.dropdown.getBoundingClientRect().left;
          _this3.rightx = true;
          return;
        }
        dropdownMenu.leftx = _this3.$refs.dropdown.getBoundingClientRect().left + (_this3.vsDropRight ? dropdownMenu.$el.clientWidth : _this3.$refs.dropdown.clientWidth);
      });
    },
    clickToogleMenu: function clickToogleMenu(evt) {
      var _this4 = this;
      if (evt.type == 'contextmenu') {
        evt.preventDefault();
      }
      var _this$$children$filte5 = this.$children.filter(function (item) {
          return item.hasOwnProperty('dropdownVisible');
        }),
        _this$$children$filte6 = _slicedToArray(_this$$children$filte5, 1),
        dropdownMenu = _this$$children$filte6[0];
      if (this.vsTriggerClick || this.vsTriggerContextmenu) {
        if (this.vsDropdownVisible && !evt.target.closest('.vs-dropdown--menu')) {
          dropdownMenu.dropdownVisible = this.vsDropdownVisible = false;
        } else {
          dropdownMenu.dropdownVisible = this.vsDropdownVisible = true;
          window.addEventListener('click', function () {
            if (!evt.target.closest('.vs-con-dropdown') && !evt.target.closest('.vs-dropdown--menu')) {
              dropdownMenu.dropdownVisible = _this4.vsDropdownVisible = false;
            }
          });
        }
      }
      this.$emit('click');
    },
    toggleMenu: function toggleMenu(typex, evt) {
      var _this$$children$filte7 = this.$children.filter(function (item) {
          return item.hasOwnProperty('dropdownVisible');
        }),
        _this$$children$filte8 = _slicedToArray(_this$$children$filte7, 1),
        dropdownMenu = _this$$children$filte8[0];
      if (!this.vsTriggerClick && !this.vsTriggerContextmenu) {
        if (typex == 'over') {
          dropdownMenu.dropdownVisible = this.vsDropdownVisible = true;
        } else {
          if (!evt.relatedTarget.classList.contains('vs-dropdown-menu')) {
            dropdownMenu.dropdownVisible = this.vsDropdownVisible = false;
          }
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDown.vue?vue&type=script&lang=js
 /* harmony default export */ var vsDropDown_vsDropDownvue_type_script_lang_js = (vsDropDownvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDown.vue





/* normalize component */

var vsDropDown_component = normalizeComponent(
  vsDropDown_vsDropDownvue_type_script_lang_js,
  vsDropDownvue_type_template_id_5d4c1376_lang_html_render,
  vsDropDownvue_type_template_id_5d4c1376_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsDropDown = (vsDropDown_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsDropDown/vsDropDownMenu.vue?vue&type=template&id=1842abea&lang=html
var vsDropDownMenuvue_type_template_id_1842abea_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('transition', {
    attrs: {
      "name": "dropdownx"
    }
  }, [_vm.dropdownVisible ? _c('div', {
    ref: "options",
    staticClass: "con-vs-dropdown--menu vs-dropdown-menu",
    class: {
      'rightx': _vm.vsDropRight || _vm.$parent.rightx,
      'notHeight': _vm.notHeight
    },
    style: {
      'left': "".concat(_vm.leftx, "px"),
      'top': "".concat(_vm.topx, "px")
    },
    on: {
      "mouseleave": _vm.mouseleavex,
      "mouseenter": _vm.mouseenterx
    }
  }, [!_vm.vsCustomContent ? _c('ul', {
    staticClass: "vs-component vs-dropdown--menu"
  }, [_vm._t("default")], 2) : _c('div', {
    staticClass: "vs-dropdown--custom vs-dropdown--menu"
  }, [_vm._t("default")], 2), _c('div', {
    ref: "menuAfter",
    class: [_vm.vsDropRight ? 'vs-dropdown-right--menu--after' : 'vs-dropdown--menu--after']
  })]) : _vm._e()]);
};
var vsDropDownMenuvue_type_template_id_1842abea_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownMenu.vue?vue&type=template&id=1842abea&lang=html

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsDropDown/vsDropDownMenu.vue?vue&type=script&lang=js



/* harmony default export */ var vsDropDownMenuvue_type_script_lang_js = ({
  name: "VsDropdownMenu",
  data: function data() {
    return {
      dropdownVisible: false,
      leftAfter: 20,
      leftx: 0,
      topx: 0,
      rightx: true,
      vsTriggerClick: false,
      vsDropRight: false,
      widthx: 0,
      notHeight: false,
      vsCustomContent: false,
      parentNode: null
    };
  },
  watch: {
    dropdownVisible: function dropdownVisible(val) {
      var dropdownGroup = this.$children.filter(function (item) {
        return item.hasOwnProperty('activeGroup');
      });
      dropdownGroup.forEach(function (item_group) {
        item_group.activeGroup = false;
      });
      this.setDirection();
      !val ? this.$parent.rightx = false : null;
    }
  },
  mounted: function mounted() {
    this.insertBody();
  },
  beforeDestroy: function beforeDestroy() {
    this.$el.parentNode.removeChild(this.$el);
  },
  methods: {
    mouseenterx: function mouseenterx() {
      if (!this.vsTriggerClick) {
        this.dropdownVisible = true;
        this.widthx = this.$el.clientWidth;
      }
    },
    mouseleavex: function mouseleavex() {
      if (!this.vsTriggerClick) {
        this.dropdownVisible = false;
        this.widthx = this.$el.clientWidth;
      }
    },
    setDirection: function setDirection() {
      var _this = this;
      setTimeout(function () {
        var dropdown = _this.parentNode;
        var menuAfter = _this.$refs.menuAfter;
        if (!menuAfter) return;
        if (dropdown && menuAfter && dropdown.getBoundingClientRect().top + 300 >= window.innerHeight) {
          // const hasGroup = this.$children.find(it=>it.hasOwnProperty('activeGroup'))
          menuAfter.style.bottom = '-5px';
          menuAfter.style.transform = 'rotate(225deg)';
          return;
        }
        menuAfter.style.top = '10px';
      }, 100);
    },
    toggleMenu: function toggleMenu(event) {
      if (event.type == 'mouseover' && !this.vsTriggerClick) {
        this.dropdownVisible = true;
      } else if (!this.vsTriggerClick) {
        this.dropdownVisible = false;
      }
      this.widthx = this.$el.clientWidth;
    },
    insertBody: function insertBody() {
      var elp = this.$el;
      this.parentNode = this.$el.parentNode;
      document.body.insertBefore(elp, document.body.firstChild);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownMenu.vue?vue&type=script&lang=js
 /* harmony default export */ var vsDropDown_vsDropDownMenuvue_type_script_lang_js = (vsDropDownMenuvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownMenu.vue





/* normalize component */

var vsDropDownMenu_component = normalizeComponent(
  vsDropDown_vsDropDownMenuvue_type_script_lang_js,
  vsDropDownMenuvue_type_template_id_1842abea_lang_html_render,
  vsDropDownMenuvue_type_template_id_1842abea_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsDropDownMenu = (vsDropDownMenu_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsDropDown/vsDropDownItem.vue?vue&type=template&id=32c610ab&lang=html
var vsDropDownItemvue_type_template_id_32c610ab_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('li', {
    staticClass: "vs-component vs-dropdown--item",
    class: {
      'divider': _vm.divider
    },
    style: {
      'color': _vm.hoverx ? _vm.giveColor() + ' !important' : null,
      'background': _vm.hoverx ? _vm.giveColor(.01) + ' !important' : null
    },
    on: {
      "click": _vm.closeParent,
      "mouseover": function mouseover($event) {
        _vm.hoverx = true;
      },
      "mouseout": function mouseout($event) {
        _vm.hoverx = false;
      }
    }
  }, [_vm.to ? _c('router-link', _vm._g(_vm._b({
    staticClass: "vs-dropdown--item-link",
    class: {
      'disabled': _vm.disabled
    },
    attrs: {
      "to": _vm.to
    }
  }, 'router-link', _vm.$attrs, false), _vm.$listeners), [_vm._v("\n    " + _vm._s(_vm.$attrs.disabled) + "\n    "), _vm._t("default")], 2) : _c('a', _vm._g(_vm._b({
    staticClass: "vs-dropdown--item-link",
    class: {
      'disabled': _vm.disabled
    }
  }, 'a', _vm.$attrs, false), _vm.$listeners), [_vm._t("default")], 2)], 1);
};
var vsDropDownItemvue_type_template_id_32c610ab_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownItem.vue?vue&type=template&id=32c610ab&lang=html

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsDropDown/vsDropDownItem.vue?vue&type=script&lang=js




/* harmony default export */ var vsDropDownItemvue_type_script_lang_js = ({
  name: "VsDropdownItem",
  inheritAttrs: false,
  props: {
    to: {},
    disabled: {
      default: false,
      type: Boolean
    },
    divider: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      hoverx: false,
      vsDropDownItem: true,
      color: null
    };
  },
  mounted: function mounted() {
    this.changeColor();
  },
  updated: function updated() {
    this.changeColor();
  },
  methods: {
    closeParent: function closeParent() {
      if (this.disabled) return;
      searchParent(this);
      function searchParent(_this) {
        var parent = _this.$parent;
        if (!parent.$el.className) return;
        if (parent.$el.className.indexOf('parent-dropdown') == -1) {
          searchParent(parent);
        } else {
          var _parent$$children$fil = parent.$children.filter(function (item) {
              return item.hasOwnProperty('dropdownVisible');
            }),
            _parent$$children$fil2 = _slicedToArray(_parent$$children$fil, 1),
            dropdownMenu = _parent$$children$fil2[0];
          dropdownMenu.dropdownVisible = parent.vsDropdownVisible = false;
        }
      }
    },
    changeColor: function changeColor() {
      var _self = this;
      searchParent(this);
      function searchParent(_this) {
        var parent = _this.$parent;
        if (!parent.$el.className) {
          return;
        }
        if (parent.$el.className.indexOf('parent-dropdown') == -1) {
          searchParent(parent);
        } else {
          _self.color = parent.color;
        }
      }
    },
    giveColor: function giveColor() {
      var opacity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return utils_color.rColor(this.color, opacity);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownItem.vue?vue&type=script&lang=js
 /* harmony default export */ var vsDropDown_vsDropDownItemvue_type_script_lang_js = (vsDropDownItemvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownItem.vue





/* normalize component */

var vsDropDownItem_component = normalizeComponent(
  vsDropDown_vsDropDownItemvue_type_script_lang_js,
  vsDropDownItemvue_type_template_id_32c610ab_lang_html_render,
  vsDropDownItemvue_type_template_id_32c610ab_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsDropDownItem = (vsDropDownItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsDropDown/vsDropDownGroup.vue?vue&type=template&id=4fe7368c&lang=html
var vsDropDownGroupvue_type_template_id_4fe7368c_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('li', {
    ref: "group",
    staticClass: "vs-component vs-dropdown--group",
    class: {
      'marginIcon': _vm.vsCollapse,
      'no-cascading': !_vm.vsCollapse,
      'group-rightx': _vm.rightx
    },
    on: {
      "click": _vm.clickGroup
    }
  }, [_vm.vsCollapse ? _c('span', {
    staticClass: "span vs-dropdown--group-label",
    domProps: {
      "textContent": _vm._s(_vm.vsLabel)
    }
  }) : _c('h3', {
    domProps: {
      "textContent": _vm._s(_vm.vsLabel)
    }
  }), _vm.vsCollapse ? _c('vs-icon', {
    staticClass: "icon-group notranslate vs-dropdown--group-icon",
    attrs: {
      "icon-pack": _vm.iconPack,
      "icon": _vm.vsIcon
    }
  }) : _vm._e(), _c('div', {
    ref: "ulx",
    staticClass: "con-dropdown--group-con-ul",
    class: {
      'con-dropdown-group-no-cascading': !_vm.vsCollapse
    },
    style: _vm.styleItems
  }, [_c('ul', {
    staticClass: "con-dropdown--group-ul"
  }, [_vm._t("default")], 2)])], 1);
};
var vsDropDownGroupvue_type_template_id_4fe7368c_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownGroup.vue?vue&type=template&id=4fe7368c&lang=html

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsDropDown/vsDropDownGroup.vue?vue&type=script&lang=js
/* harmony default export */ var vsDropDownGroupvue_type_script_lang_js = ({
  name: 'VsDropdownGroup',
  props: {
    vsLabel: {
      default: 'Options',
      type: String
    },
    vsCollapse: {
      default: false,
      type: Boolean
    },
    vsIcon: {
      default: 'keyboard_arrow_right',
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    }
  },
  data: function data() {
    return {
      activeGroup: false,
      rightx: false,
      widthx: 0,
      maxHeight: '0px'
    };
  },
  computed: {
    styleItems: function styleItems() {
      return {
        maxHeight: this.vsCollapse ? this.maxHeight : 'auto'
      };
    }
  },
  methods: {
    clickGroup: function clickGroup(evt) {
      var _this2 = this;
      if (evt.target != this.$refs.group) return;
      if (!this.openHover) {
        var scrollHeight = this.$refs.ulx.scrollHeight;
        if (this.maxHeight == '0px') {
          this.maxHeight = "".concat(scrollHeight, "px");
          setTimeout(function () {
            _this2.maxHeight = 'none';
          }, 300);
        } else {
          this.maxHeight = "".concat(scrollHeight, "px");
          setTimeout(function () {
            _this2.maxHeight = "".concat(0, "px");
          }, 50);
        }
      }
    },
    beforeEnter: function beforeEnter(el) {
      el.style.height = 0;
      el.style.opacity = 0;
    },
    enter: function enter(el, done) {
      // let h = this.$refs.ulx.scrollHeight
      // this.$refs.ulx.style.height = h + 'px'
      // el.style.opacity = 1
      // parents(this)
      // function parents(_this){
      //   if(_this.$parent.$el.className.search('vs-dropdown--group')!=-1){
      //     // this.$parent.$el
      //     let hp = _this.$parent.$refs.ulx.scrollHeight
      //     _this.$parent.$refs.ulx.style.height = hp + h + 'px'
      //     parents(_this.$parent)
      //   }
      // }

      done();
    },
    leave: function leave(el) {
      var __this = this;
      addParents(this);
      function addParents(_this) {
        if (_this.$parent.$refs.ulx) {
          var hp = _this.$parent.$refs.ulx.scrollHeight - __this.$refs.ulx.scrollHeight;
          _this.$parent.$refs.ulx.style.height = hp + 'px';
          addParents(_this.$parent);
        }
      }
      if (!this.$parent.$refs.ulx) {
        this.$refs.ulx.style.height = 0 + 'px';
      }
      this.$refs.ulx.style.height = 0 + 'px';
      el.style.opacity = 0;
    },
    toggleGroup: function toggleGroup(evt) {
      if (evt.target == this.$refs.group) {
        this.activeGroup = !this.activeGroup;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownGroup.vue?vue&type=script&lang=js
 /* harmony default export */ var vsDropDown_vsDropDownGroupvue_type_script_lang_js = (vsDropDownGroupvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownGroup.vue





/* normalize component */

var vsDropDownGroup_component = normalizeComponent(
  vsDropDown_vsDropDownGroupvue_type_script_lang_js,
  vsDropDownGroupvue_type_template_id_4fe7368c_lang_html_render,
  vsDropDownGroupvue_type_template_id_4fe7368c_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsDropDownGroup = (vsDropDownGroup_component.exports);
// CONCATENATED MODULE: ./src/components/vsDropDown/index.js





/* harmony default export */ var components_vsDropDown = (function (Vue) {
  Vue.component(vsDropDown.name, vsDropDown);
  Vue.component(vsDropDownMenu.name, vsDropDownMenu);
  Vue.component(vsDropDownItem.name, vsDropDownItem);
  Vue.component(vsDropDownGroup.name, vsDropDownGroup);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTable/vsTable.vue?vue&type=template&id=a1559ada




var vsTablevue_type_template_id_a1559ada_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vs-component vs-con-table",
    class: [{
      'stripe': _vm.stripe,
      'hoverFlat': _vm.hoverFlat
    }, "vs-table-".concat(_vm.color)]
  }, [_c('header', {
    staticClass: "header-table vs-table--header"
  }, [_vm._t("header"), _vm.search ? _c('div', {
    staticClass: "con-input-search vs-table--search"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchx,
      expression: "searchx"
    }],
    staticClass: "input-search vs-table--search-input",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.searchx
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.searchx = $event.target.value;
      }
    }
  }), _c('vs-icon', {
    attrs: {
      "icon": "search"
    }
  })], 1) : _vm._e()], 2), _c('div', {
    staticClass: "con-tablex vs-table--content"
  }, [_c('div', {
    staticClass: "vs-con-tbody vs-table--tbody",
    style: _vm.styleConTbody
  }, [_c('table', {
    ref: "table",
    staticClass: "vs-table vs-table--tbody-table"
  }, [_c('thead', {
    ref: "thead",
    staticClass: "vs-table--thead"
  }, [_c('tr', [_vm.multiple || _vm.hasExpadableData ? _c('th', {
    staticClass: "td-check"
  }, [_vm.multiple ? _c('span', {
    staticClass: "con-td-check"
  }, [_c('vs-checkbox', {
    key: _vm.isCheckedLine ? 'remove' : 'check',
    attrs: {
      "icon": _vm.isCheckedLine ? 'remove' : 'check',
      "checked": _vm.isCheckedMultiple,
      "size": "small"
    },
    on: {
      "change": _vm.changeCheckedMultiple
    }
  })], 1) : _vm._e()]) : _vm._e(), _vm._t("thead")], 2)]), _vm._t("default", null, {
    "data": _vm.datax
  })], 2)]), _vm.isNoData ? _c('div', {
    staticClass: "not-data-table vs-table--not-data"
  }, [_vm._v("\n      " + _vm._s(_vm.noDataText) + "\n    ")]) : _vm._e(), _vm.pagination ? _c('div', {
    staticClass: "con-pagination-table vs-table--pagination"
  }, [_c('vs-pagination', {
    attrs: {
      "total": _vm.searchx && !_vm.sst ? _vm.getTotalPagesSearch : _vm.getTotalPages,
      "description-items": _vm.descriptionItems,
      "max-items": _vm.maxItemsx,
      "size-array": _vm.queriedResults.length,
      "description": _vm.description,
      "description-title": _vm.descriptionTitle,
      "description-connector": _vm.descriptionConnector,
      "description-body": _vm.descriptionBody
    },
    on: {
      "changeMaxItems": _vm.changeMaxItems
    },
    model: {
      value: _vm.currentx,
      callback: function callback($$v) {
        _vm.currentx = $$v;
      },
      expression: "currentx"
    }
  })], 1) : _vm._e()])]);
};
var vsTablevue_type_template_id_a1559ada_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsTable/vsTable.vue?vue&type=template&id=a1559ada

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__("4e82");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTable/vsTable.vue?vue&type=script&lang=js




















/* harmony default export */ var vsTablevue_type_script_lang_js = ({
  name: "VsTable",
  props: {
    value: {},
    color: {
      default: 'primary',
      type: String
    },
    noDataText: {
      default: 'No data Available',
      type: String
    },
    stripe: {
      default: false,
      type: Boolean
    },
    hoverFlat: {
      default: false,
      type: Boolean
    },
    maxHeight: {
      default: 'auto',
      type: String
    },
    multiple: {
      default: false,
      type: Boolean
    },
    data: {
      default: null
    },
    notSpacer: {
      default: false,
      type: Boolean
    },
    search: {
      default: false,
      type: Boolean
    },
    maxItems: {
      default: 5,
      type: [Number, String]
    },
    pagination: {
      default: false,
      type: Boolean
    },
    description: {
      default: false,
      type: Boolean
    },
    descriptionItems: {
      default: function _default() {
        return [];
      },
      type: Array
    },
    descriptionTitle: {
      type: String
    },
    descriptionConnector: {
      type: String
    },
    descriptionBody: {
      type: String
    },
    currentPage: {
      default: 1,
      type: Number | String
    },
    sst: {
      default: false,
      type: Boolean
    },
    total: {
      type: Number,
      default: 0
    },
    onlyClickCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      headerWidth: '100%',
      trs: [],
      datax: [],
      searchx: null,
      currentx: 1,
      maxItemsx: 5,
      hasExpadableData: false,
      currentSortKey: null,
      currentSortType: null
    };
  },
  computed: {
    getTotalPages: function getTotalPages() {
      var totalLength = this.sst && this.total ? this.total : this.data.length;
      return Math.ceil(totalLength / this.maxItemsx);
    },
    getTotalPagesSearch: function getTotalPagesSearch() {
      return Math.ceil(this.queriedResults.length / this.maxItems);
    },
    queriedResults: function queriedResults() {
      var _this = this;
      var queriedResults = this.data;
      if (this.searchx && this.search) {
        var dataBase = this.data;
        queriedResults = dataBase.filter(function (tr) {
          var values = _this.getValues(tr).toString().toLowerCase();
          return values.indexOf(_this.searchx.toLowerCase()) != -1;
        });
      }
      return queriedResults;
    },
    isNoData: function isNoData() {
      if (_typeof(this.datax) == Object) {
        return this.datax ? Object.keys(this.datax).length == 0 :  false && false;
      } else {
        return this.datax ? this.datax.length == 0 :  false && false;
      }
    },
    isCheckedLine: function isCheckedLine() {
      var lengthx = this.data.length;
      var lengthSelected = this.value.length;
      return lengthx !== lengthSelected;
    },
    isCheckedMultiple: function isCheckedMultiple() {
      return this.value.length > 0;
    },
    styleConTbody: function styleConTbody() {
      return {
        maxHeight: this.maxHeight,
        overflow: this.maxHeight != 'auto' ? 'auto' : null
      };
    },
    getThs: function getThs() {
      var ths = this.$slots.thead.filter(function (item) {
        return item.tag;
      });
      return ths.length;
    },
    tableHeaderStyle: function tableHeaderStyle() {
      return {
        width: this.headerWidth
      };
    }
  },
  watch: {
    currentPage: function currentPage() {
      this.currentx = this.currentPage;
    },
    currentx: function currentx() {
      if (this.sst) {
        this.$emit('change-page', this.currentx);
      } else {
        this.loadData();
      }
    },
    maxItems: function maxItems(val) {
      this.maxItemsx = val;
      this.loadData();
    },
    maxItemsx: function maxItemsx() {
      this.loadData();
    },
    data: function data() {
      var _this2 = this;
      this.loadData();
      this.$nextTick(function () {
        if (_this2.datax.length > 0) {
          _this2.changeTdsWidth();
        }
      });
    },
    searchx: function searchx() {
      if (this.sst) {
        this.$emit('search', this.searchx);
      } else {
        this.loadData();
        this.currentx = 1;
      }
    }
  },
  mounted: function mounted() {
    window.addEventListener('resize', this.listenerChangeWidth);
    this.maxItemsx = this.maxItems;
    this.loadData();

    // this.$nextTick(() => {
    //   if(this.datax.length > 0) {
    //     this.changeTdsWidth()
    //   }
    // })
  },
  destroyed: function destroyed() {
    window.removeEventListener('resize', this.listenerChangeWidth);
  },
  methods: {
    loadData: function loadData() {
      var max = Math.ceil(this.currentx * this.maxItemsx);
      var min = max - this.maxItemsx;
      if (!this.searchx || this.sst) {
        this.datax = this.pagination ? this.getItems(min, max) : this.sortItems(this.data) || [];
      } else {
        this.datax = this.pagination ? this.getItemsSearch(min, max) : this.getItemsSearch(min, max) || [];
      }
    },
    getItems: function getItems(min, max) {
      var dataBase = this.sortItems(this.data);
      var items = [];
      dataBase.forEach(function (item, index) {
        if (index >= min && index < max) {
          items.push(item);
        }
      });
      return items;
    },
    sortItems: function sortItems(data) {
      var currentSortKey = this.currentSortKey,
        currentSortType = this.currentSortType;
      function compare(a, b) {
        if (a[currentSortKey] < b[currentSortKey]) return currentSortType == 'desc' ? 1 : -1;
        if (a[currentSortKey] > b[currentSortKey]) return currentSortType == 'desc' ? -1 : 1;
        return 0;
      }
      return currentSortType !== null ? _toConsumableArray(data).sort(compare) : _toConsumableArray(data);
    },
    getItemsSearch: function getItemsSearch(min, max) {
      var _this3 = this;
      var search = this.normalize(this.searchx);
      return this.sortItems(this.data).filter(function (tr) {
        return _this3.normalize(_this3.getValues(tr).toString()).indexOf(search) != -1;
      }).filter(function (_, index) {
        return index >= min && index < max;
      });
    },
    sort: function sort(key, sortType) {
      this.currentSortKey = key;
      this.currentSortType = sortType;
      if (this.sst) {
        this.$emit('sort', key, sortType);
        return;
      }
      this.loadData();
    },
    normalize: function normalize(string) {
      return string.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    },
    getValues: function getValues(obj) {
      function flattenDeep(val) {
        return Object.values(val || []).reduce(function (acc, val) {
          return _typeof(val) === 'object' ? acc.concat(flattenDeep(val)) : acc.concat(val);
        }, []);
      }
      return flattenDeep(obj).filter(function (item) {
        return typeof item === 'string' || typeof item === 'number';
      });
    },
    changeCheckedMultiple: function changeCheckedMultiple() {
      var lengthx = this.data.length;
      var lengthSelected = this.value.length;
      var selectedx = lengthx - lengthSelected;
      if (selectedx == 0) {
        this.$emit('input', []);
      } else {
        this.$emit('input', this.data);
      }
    },
    handleCheckbox: function handleCheckbox(tr) {
      if (this.multiple && this.onlyClickCheckbox) {
        var val = this.value.slice(0);
        if (val.includes(tr)) {
          val.splice(val.indexOf(tr), 1);
        } else {
          val.push(tr);
        }
        this.$emit('input', val);
        this.$emit('selected', tr);
      }
    },
    clicktr: function clicktr(tr, isTr) {
      if (this.multiple && isTr && !this.onlyClickCheckbox) {
        var val = this.value.slice(0);
        if (val.includes(tr)) {
          val.splice(val.indexOf(tr), 1);
        } else {
          val.push(tr);
        }
        this.$emit('input', val);
        this.$emit('selected', tr);
      } else if (isTr && !this.onlyClickCheckbox) {
        this.$emit('input', tr);
        this.$emit('selected', tr);
      }
    },
    dblclicktr: function dblclicktr(tr, isTr) {
      if (isTr) {
        this.$emit('dblSelection', tr);
      }
    },
    listenerChangeWidth: function listenerChangeWidth() {
      this.headerWidth = "".concat(this.$refs.table.offsetWidth, "px");
      this.changeTdsWidth();
    },
    changeTdsWidth: function changeTdsWidth() {
      if (!this.value) return;
      var tbody = this.$refs.table.querySelector('tbody');

      // Adding condition removes querySelector none error - if tbody isnot present
      if (tbody) {
        var trvs = tbody.querySelector('.tr-values');
        if (trvs === undefined || trvs === null) return;
        var tds = trvs.querySelectorAll('.td');
        var tdsx = [];
        tds.forEach(function (td, index) {
          tdsx.push({
            index: index,
            widthx: td.offsetWidth
          });
        });
        var colgrouptable = this.$refs.colgrouptable;
        if (colgrouptable !== undefined && colgrouptable !== null) {
          var colsTable = colgrouptable.querySelectorAll('.col');
          colsTable.forEach(function (col, index) {
            col.setAttribute('width', tdsx[index].widthx);
          });
        }
      }
    },
    changeMaxItems: function changeMaxItems(index) {
      this.maxItemsx = this.descriptionItems[index];
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsTable/vsTable.vue?vue&type=script&lang=js
 /* harmony default export */ var vsTable_vsTablevue_type_script_lang_js = (vsTablevue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsTable/vsTable.vue





/* normalize component */

var vsTable_component = normalizeComponent(
  vsTable_vsTablevue_type_script_lang_js,
  vsTablevue_type_template_id_a1559ada_render,
  vsTablevue_type_template_id_a1559ada_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsTable = (vsTable_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTable/vsTh.vue?vue&type=template&id=78e15cd8
var vsThvue_type_template_id_78e15cd8_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('th', {
    attrs: {
      "colspan": "1",
      "rowspan": "1"
    },
    on: {
      "click": function click($event) {
        return _vm.sortValue();
      }
    }
  }, [_c('div', {
    staticClass: "vs-table-text"
  }, [_vm._t("default"), _vm.isColumnSelectedForSort && _vm.currentSort != 0 ? _c('span', {
    staticClass: "sort-th"
  }, [_c('vs-icon', {
    staticClass: "th-sort-icon",
    attrs: {
      "icon": _vm.currentSort == 1 ? 'expand_less' : 'expand_more'
    }
  })], 1) : _vm._e()], 2)]);
};
var vsThvue_type_template_id_78e15cd8_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsTable/vsTh.vue?vue&type=template&id=78e15cd8

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTable/vsTh.vue?vue&type=script&lang=js

/* harmony default export */ var vsThvue_type_script_lang_js = ({
  name: 'VsTh',
  props: {
    sortKey: {
      default: null,
      type: String
    }
  },
  data: function data() {
    return {
      thIndex: 0,
      thwidth: '100%',
      currentSort: 0,
      sortStatuses: [null, 'asc', 'desc']
    };
  },
  computed: {
    styleth: function styleth() {
      return {
        width: this.thwidth
      };
    },
    isColumnSelectedForSort: function isColumnSelectedForSort() {
      if (!this.sortKey) {
        return false;
      }
      if (this.$parent.currentSortKey != this.sortKey) {
        this.resetSort();
      }
      return this.$parent.currentSortKey == this.sortKey;
    },
    parentSortStatus: function parentSortStatus() {
      return this.$parent.currentSortType;
    }
  },
  methods: {
    sortValue: function sortValue() {
      this.currentSort = this.currentSort !== 2 ? this.currentSort + 1 : 0;
      this.$parent.sort(this.sortKey, this.sortStatuses[this.currentSort]);
    },
    resetSort: function resetSort() {
      this.currentSort = 0;
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsTable/vsTh.vue?vue&type=script&lang=js
 /* harmony default export */ var vsTable_vsThvue_type_script_lang_js = (vsThvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsTable/vsTh.vue





/* normalize component */

var vsTh_component = normalizeComponent(
  vsTable_vsThvue_type_script_lang_js,
  vsThvue_type_template_id_78e15cd8_render,
  vsThvue_type_template_id_78e15cd8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsTh = (vsTh_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTable/vsTr.vue?vue&type=template&id=6d2bf854
var vsTrvue_type_template_id_6d2bf854_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('tr', {
    ref: "tableTr",
    staticClass: "tr-values vs-table--tr",
    class: ["tr-table-state-".concat(_vm.state), {
      'is-selected': _vm.isSelected,
      'selected': _vm.data,
      'is-expand': _vm.maxHeight != '0px',
      'activeEdit': _vm.activeEdit,
      'hoverFlat': _vm.$parent.hoverFlat
    }],
    on: {
      "dblclick": _vm.dblclicktr,
      "click": _vm.clicktr
    }
  }, [_vm.$parent.multiple || _vm.$slots.expand ? _c('td', {
    staticClass: "td-check",
    class: {
      'active-expanded': _vm.expanded
    }
  }, [_vm.$parent.multiple ? _c('vs-checkbox', {
    attrs: {
      "checked": _vm.isSelected,
      "size": "small"
    },
    on: {
      "change": _vm.handleCheckbox
    }
  }) : _vm._e(), _vm.$slots.expand ? _c('vs-icon', [_vm._v("keyboard_arrow_down")]) : _vm._e()], 1) : _vm._e(), _vm._t("default")], 2);
};
var vsTrvue_type_template_id_6d2bf854_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsTable/vsTr.vue?vue&type=template&id=6d2bf854

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTable/vsTrExpand.vue?vue&type=template&id=bfc23f06
var vsTrExpandvue_type_template_id_bfc23f06_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('transition', {
    attrs: {
      "name": "tr-expand"
    }
  }, [_vm.active ? _c('tr', {
    staticClass: "tr-expand"
  }, [_c('td', {
    attrs: {
      "colspan": _vm.colspan
    }
  }, [_c('div', {
    staticClass: "content-tr-expand"
  }, [_vm._t("default"), _vm.close ? _c('button', {
    staticClass: "tr-expand--close",
    on: {
      "click": function click($event) {
        return _vm.$emit('click', $event);
      }
    }
  }, [_c('i', {
    staticClass: "material-icons"
  }, [_vm._v("\n            clear\n          ")])]) : _vm._e()], 2)])]) : _vm._e()]);
};
var vsTrExpandvue_type_template_id_bfc23f06_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsTable/vsTrExpand.vue?vue&type=template&id=bfc23f06

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTable/vsTrExpand.vue?vue&type=script&lang=js

/* harmony default export */ var vsTrExpandvue_type_script_lang_js = ({
  props: {
    close: {
      type: Boolean,
      default: false
    },
    colspan: {
      default: 1,
      type: Number
    }
  },
  data: function data() {
    return {
      active: false
    };
  },
  mounted: function mounted() {
    this.active = true;
  }
});
// CONCATENATED MODULE: ./src/components/vsTable/vsTrExpand.vue?vue&type=script&lang=js
 /* harmony default export */ var vsTable_vsTrExpandvue_type_script_lang_js = (vsTrExpandvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsTable/vsTrExpand.vue





/* normalize component */

var vsTrExpand_component = normalizeComponent(
  vsTable_vsTrExpandvue_type_script_lang_js,
  vsTrExpandvue_type_template_id_bfc23f06_render,
  vsTrExpandvue_type_template_id_bfc23f06_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsTrExpand = (vsTrExpand_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTable/vsTr.vue?vue&type=script&lang=js




/* harmony default export */ var vsTrvue_type_script_lang_js = ({
  name: 'VsTr',
  props: {
    state: {
      type: String,
      default: null
    },
    data: {
      default: null
    }
  },
  data: function data() {
    return {
      colspan: 0,
      expanded: false,
      maxHeight: '0px',
      activeEdit: false
    };
  },
  computed: {
    styleExpand: function styleExpand() {
      return {
        maxHeight: this.maxHeight
      };
    },
    getColspanExpand: function getColspanExpand() {
      var lengthx = this.$parent.$refs.colgroup.querySelectorAll('th').length;
      return lengthx;
    },
    isSelected: function isSelected() {
      var _this = this;
      if (this.$parent.multiple && this.$parent.value) {
        return this.data ? this.$parent.value.some(function (item) {
          return JSON.stringify(item) === JSON.stringify(_this.data);
        }) : false;
      } else {
        return this.data ? this.$parent.value == this.data : false;
      }
    }
  },
  watch: {
    '$parent.datax': function $parentDatax() {
      this.collapseExpandedData();
    }
  },
  mounted: function mounted() {
    var _this2 = this;
    this.$nextTick(function () {
      _this2.colspan = _this2.$parent.$refs.thead.querySelectorAll('th').length;
      if (_this2.$slots.expand) {
        _this2.colspan++;
      }
    });
  },
  created: function created() {
    if (this.$slots.expand) this.$parent.hasExpadableData = true;
  },
  methods: {
    handleCheckbox: function handleCheckbox() {
      this.$parent.handleCheckbox(this.data);
    },
    insertAfter: function insertAfter(e, i) {
      if (e.nextSibling) {
        e.parentNode.insertBefore(i, e.nextSibling);
      } else {
        e.parentNode.appendChild(i);
      }
    },
    clicktr: function clicktr(evt) {
      this.$parent.clicktr(this.data, true);
      if (this.$slots.expand) {
        this.clicktd(evt);
      }
    },
    dblclicktr: function dblclicktr() {
      this.$parent.dblclicktr(this.data, true);
    },
    clicktd: function clicktd(evt) {
      if (this.$parent.multiple || !this.$slots.expand) return;
      var tr = evt.target.closest('tr');
      if (this.expanded) {
        tr.parentNode.removeChild(tr.nextSibling);
        tr.classList.remove('tr-expandedx');
        this.expanded = false;
      } else {
        tr.classList.add('tr-expandedx');
        var trx = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(vsTrExpand);
        var instance = new trx({
          parent: this,
          propsData: {
            colspan: this.colspan
          }
        });
        instance.vm = instance.$mount();
        var newTR = document.createElement('tr').appendChild(instance.vm.$el);
        this.insertAfter(tr, newTR);
        this.expanded = true;
      }
    },
    collapseExpandedData: function collapseExpandedData() {
      if (this.expanded) {
        var tr = this.$refs.tableTr;
        tr.parentNode.removeChild(tr.nextSibling);
        tr.classList.remove('tr-expandedx');
        this.expanded = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsTable/vsTr.vue?vue&type=script&lang=js
 /* harmony default export */ var vsTable_vsTrvue_type_script_lang_js = (vsTrvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsTable/vsTr.vue





/* normalize component */

var vsTr_component = normalizeComponent(
  vsTable_vsTrvue_type_script_lang_js,
  vsTrvue_type_template_id_6d2bf854_render,
  vsTrvue_type_template_id_6d2bf854_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsTr = (vsTr_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTable/vsTd.vue?vue&type=template&id=b91e7154
var vsTdvue_type_template_id_b91e7154_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('td', {
    ref: "td",
    staticClass: "td vs-table--td",
    class: {
      'td-edit': _vm.$slots.edit
    }
  }, [_c('span', {
    on: {
      "click": _vm.clicktd
    }
  }, [_vm.$slots.edit ? _c('vs-icon', {
    staticClass: "icon-edit",
    attrs: {
      "icon": "edit"
    }
  }) : _vm._e(), _vm._t("default"), _vm.$slots.edit ? _c('span', {
    staticClass: "empty"
  }, [_vm._v("\n      " + _vm._s(_vm.data ? '' : 'Empty') + "\n    ")]) : _vm._e()], 2)]);
};
var vsTdvue_type_template_id_b91e7154_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsTable/vsTd.vue?vue&type=template&id=b91e7154

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTable/vsTd.vue?vue&type=script&lang=js


/* harmony default export */ var vsTdvue_type_script_lang_js = ({
  name: 'VsTd',
  props: {
    data: {
      default: null
    }
  },
  data: function data() {
    return {
      activeEdit: false
    };
  },
  watch: {
    activeEdit: function activeEdit() {
      this.$parent.activeEdit = this.activeEdit;
    }
  },
  methods: {
    insertAfter: function insertAfter(e, i) {
      if (e.nextSibling) {
        e.parentNode.insertBefore(i, e.nextSibling);
      } else {
        e.parentNode.appendChild(i);
      }
    },
    clicktd: function clicktd(evt) {
      var _this = this;
      if (this.$slots.edit) {
        var tr = evt.target.closest('tr');
        if (!this.activeEdit) {
          var trx = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(vsTrExpand);
          var instance = new trx({
            parent: this,
            propsData: {
              colspan: this.$parent.colspan,
              close: true
            }
          });
          instance.$slots.default = this.$slots.edit;
          instance.vm = instance.$mount();
          instance.$on('click', this.close);
          var nuevo_parrafo = document.createElement('tr').appendChild(instance.vm.$el);
          this.insertAfter(tr, nuevo_parrafo);
          this.activeEdit = true;
          setTimeout(function () {
            window.addEventListener('click', _this.closeEdit);
          }, 20);
        }
      }
    },
    closeEdit: function closeEdit(evt) {
      if (!evt.target.closest('.tr-expand') && !evt.target.closest('.vs-select--options')) {
        this.close();
      }
    },
    close: function close() {
      var tr = this.$refs.td.closest('tr');
      this.activeEdit = false;
      tr.parentNode.removeChild(tr.nextSibling);
      window.removeEventListener('click', this.closeEdit);
    },
    saveEdit: function saveEdit() {
      this.activeEdit = false;
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsTable/vsTd.vue?vue&type=script&lang=js
 /* harmony default export */ var vsTable_vsTdvue_type_script_lang_js = (vsTdvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsTable/vsTd.vue





/* normalize component */

var vsTd_component = normalizeComponent(
  vsTable_vsTdvue_type_script_lang_js,
  vsTdvue_type_template_id_b91e7154_render,
  vsTdvue_type_template_id_b91e7154_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsTd = (vsTd_component.exports);
// CONCATENATED MODULE: ./src/components/vsTable/index.js





/* harmony default export */ var components_vsTable = (function (Vue) {
  Vue.component(vsTable.name, vsTable);
  Vue.component(vsTh.name, vsTh);
  Vue.component(vsTr.name, vsTr);
  Vue.component(vsTd.name, vsTd);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTextarea/vsTextarea.vue?vue&type=template&id=663276b0&lang=html
var vsTextareavue_type_template_id_663276b0_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vs-component vs-con-textarea",
    class: ["vs-textarea-".concat(_vm.color), {
      'textarea-danger': _vm.counter ? _vm.value && _vm.value.length > _vm.counter : false,
      'focusx': _vm.isFocus
    }],
    style: _vm.style
  }, [_vm.label ? _c('h4', [_vm._v("\n    " + _vm._s(_vm.label) + "\n  ")]) : _vm._e(), _c('textarea', _vm._g(_vm._b({
    staticClass: "vs-textarea",
    domProps: {
      "value": _vm.value
    }
  }, 'textarea', _vm.$attrs, false), _vm.listeners)), _vm.counter ? _c('div', {
    staticClass: "count vs-textarea--count"
  }, [_vm._v("\n    " + _vm._s(_vm.value ? _vm.value.length : 0) + " / " + _vm._s(_vm.counter) + "\n  ")]) : _vm._e()]);
};
var vsTextareavue_type_template_id_663276b0_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsTextarea/vsTextarea.vue?vue&type=template&id=663276b0&lang=html

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTextarea/vsTextarea.vue?vue&type=script&lang=js



/* harmony default export */ var vsTextareavue_type_script_lang_js = ({
  name: "VsTextarea",
  inheritAttrs: false,
  props: {
    value: {},
    label: {
      default: null,
      type: String
    },
    color: {
      default: 'primary',
      type: String
    },
    counter: {
      default: null,
      type: [Number, String]
    },
    counterDanger: {
      default: false,
      type: Boolean
    },
    height: {
      default: null,
      type: String
    },
    width: {
      default: null,
      type: String
    }
  },
  data: function data() {
    return {
      isFocus: false
    };
  },
  computed: {
    style: function style() {
      var style = {};
      style.border = "1px solid ".concat(this.isFocus ? utils_color.getColor(this.color, 1) : 'rgba(0, 0, 0,.08)');
      style.height = this.height;
      style.width = this.width;
      return style;
    },
    listeners: function listeners() {
      var _this = this;
      return _objectSpread2(_objectSpread2({}, this.$listeners), {}, {
        input: function input(evt) {
          _this.$emit('input', evt.target.value);
        },
        focus: function focus() {
          _this.focus();
        },
        blur: function blur() {
          _this.blur();
        }
      });
    }
  },
  watch: {
    value: function value() {
      if (this.value && this.value.length > this.counter) {
        this.$emit('update:counterDanger', true);
      } else {
        this.$emit('update:counterDanger', false);
      }
    }
  },
  methods: {
    focus: function focus() {
      this.isFocus = true;
      this.$emit('focus');
    },
    blur: function blur() {
      this.isFocus = false;
      this.$emit('blur');
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsTextarea/vsTextarea.vue?vue&type=script&lang=js
 /* harmony default export */ var vsTextarea_vsTextareavue_type_script_lang_js = (vsTextareavue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsTextarea/vsTextarea.vue





/* normalize component */

var vsTextarea_component = normalizeComponent(
  vsTextarea_vsTextareavue_type_script_lang_js,
  vsTextareavue_type_template_id_663276b0_lang_html_render,
  vsTextareavue_type_template_id_663276b0_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsTextarea = (vsTextarea_component.exports);
// CONCATENATED MODULE: ./src/components/vsTextarea/index.js


/* harmony default export */ var components_vsTextarea = (function (Vue) {
  Vue.component(vsTextarea.name, vsTextarea);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsCollapse/vsCollapse.vue?vue&type=template&id=612664fc
var vsCollapsevue_type_template_id_612664fc_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vs-collapse",
    class: [_vm.type]
  }, [_vm._t("default")], 2);
};
var vsCollapsevue_type_template_id_612664fc_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsCollapse/vsCollapse.vue?vue&type=template&id=612664fc

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsCollapse/vsCollapse.vue?vue&type=script&lang=js

/* harmony default export */ var vsCollapsevue_type_script_lang_js = ({
  name: 'VsCollapse',
  props: {
    accordion: {
      default: false,
      type: Boolean
    },
    type: {
      default: 'default',
      type: String
    },
    openHover: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    emitChange: function emitChange() {
      this.$emit('change');
    },
    closeAllItems: function closeAllItems(el) {
      var children = this.$children;
      children.map(function (item) {
        if (item.$el !== el) {
          item.maxHeight = '0px';
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsCollapse/vsCollapse.vue?vue&type=script&lang=js
 /* harmony default export */ var vsCollapse_vsCollapsevue_type_script_lang_js = (vsCollapsevue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsCollapse/vsCollapse.vue





/* normalize component */

var vsCollapse_component = normalizeComponent(
  vsCollapse_vsCollapsevue_type_script_lang_js,
  vsCollapsevue_type_template_id_612664fc_render,
  vsCollapsevue_type_template_id_612664fc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsCollapse = (vsCollapse_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsCollapse/vsCollapseItem.vue?vue&type=template&id=fdc77458
var vsCollapseItemvue_type_template_id_fdc77458_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vs-collapse-item",
    class: {
      'open-item': _vm.maxHeight != '0px',
      'disabledx': _vm.disabled
    },
    on: {
      "mouseover": _vm.mouseover,
      "mouseout": _vm.mouseout
    }
  }, [_c('header', {
    staticClass: "vs-collapse-item--header",
    on: {
      "click": _vm.toggleContent
    }
  }, [_vm._t("header"), !_vm.notArrow ? _c('span', {
    staticClass: "icon-header vs-collapse-item--icon-header"
  }, [_c('vs-icon', {
    attrs: {
      "icon-pack": _vm.iconPack,
      "icon": _vm.iconArrow
    }
  })], 1) : _vm._e()], 2), _c('div', {
    ref: "content",
    staticClass: "vs-collapse-item--content",
    style: _vm.styleContent
  }, [_c('div', {
    staticClass: "con-content--item"
  }, [_vm._t("default")], 2)])]);
};
var vsCollapseItemvue_type_template_id_fdc77458_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsCollapse/vsCollapseItem.vue?vue&type=template&id=fdc77458

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsCollapse/vsCollapseItem.vue?vue&type=script&lang=js

/* harmony default export */ var vsCollapseItemvue_type_script_lang_js = ({
  name: 'VsCollapseItem',
  components: {
    vsicon: components_vsIcon
  },
  props: {
    open: {
      default: false,
      type: Boolean
    },
    disabled: {
      default: false,
      type: Boolean
    },
    notArrow: {
      default: false,
      type: Boolean
    },
    iconArrow: {
      default: 'keyboard_arrow_down',
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    sst: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      maxHeight: '0px',
      // only used for sst
      dataReady: false
    };
  },
  computed: {
    accordion: function accordion() {
      return this.$parent.accordion;
    },
    openHover: function openHover() {
      return this.$parent.openHover;
    },
    styleContent: function styleContent() {
      return {
        maxHeight: this.maxHeight
      };
    }
  },
  watch: {
    maxHeight: function maxHeight() {
      this.$parent.emitChange();
    },
    ready: function ready(newVal, oldVal) {
      if (oldVal != newVal && newVal) {
        this.initMaxHeight();
      }
    }
  },
  mounted: function mounted() {
    window.addEventListener('resize', this.changeHeight);
    var maxHeightx = this.$refs.content.scrollHeight;
    if (this.open) {
      this.maxHeight = "".concat(maxHeightx, "px");
    }
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.changeHeight);
  },
  methods: {
    changeHeight: function changeHeight() {
      var maxHeightx = this.$refs.content.scrollHeight;
      if (this.maxHeight != '0px') {
        this.maxHeight = "".concat(maxHeightx, "px");
      }
    },
    toggleContent: function toggleContent() {
      var _this = this;
      if (this.openHover || this.disabled) return;
      if (this.accordion) {
        this.$parent.closeAllItems(this.$el);
      }
      if (this.sst && !this.dataReady) {
        this.$emit('fetch', {
          done: function done() {
            _this.initMaxHeight();
            _this.dataReady = true;
          }
        });
      } else {
        this.initMaxHeight();
      }
    },
    initMaxHeight: function initMaxHeight() {
      var maxHeightx = this.$refs.content.scrollHeight;
      if (this.maxHeight == '0px') {
        this.maxHeight = "".concat(maxHeightx, "px");
      } else {
        this.maxHeight = "0px";
      }
    },
    mouseover: function mouseover() {
      if (this.disabled) return;
      var maxHeightx = this.$refs.content.scrollHeight;
      if (this.openHover) {
        this.maxHeight = "".concat(maxHeightx, "px");
      }
    },
    mouseout: function mouseout() {
      if (this.openHover) {
        this.maxHeight = "0px";
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsCollapse/vsCollapseItem.vue?vue&type=script&lang=js
 /* harmony default export */ var vsCollapse_vsCollapseItemvue_type_script_lang_js = (vsCollapseItemvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsCollapse/vsCollapseItem.vue





/* normalize component */

var vsCollapseItem_component = normalizeComponent(
  vsCollapse_vsCollapseItemvue_type_script_lang_js,
  vsCollapseItemvue_type_template_id_fdc77458_render,
  vsCollapseItemvue_type_template_id_fdc77458_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsCollapseItem = (vsCollapseItem_component.exports);
// CONCATENATED MODULE: ./src/components/vsCollapse/index.js



/* harmony default export */ var components_vsCollapse = (function (Vue) {
  Vue.component(vsCollapse.name, vsCollapse);
  Vue.component(vsCollapseItem.name, vsCollapseItem);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsImages/vsImages.vue?vue&type=template&id=436ca6f9&lang=html
var vsImagesvue_type_template_id_436ca6f9_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vs-component vs-images",
    class: ["vs-images-hover-".concat(_vm.hover), {
      'alternating': _vm.alternating,
      'notBorderRadius': _vm.notBorderRadius,
      'notMargin': _vm.notMargin
    }]
  }, [_c('ul', {
    staticClass: "vs-ul-images vs-images--ul"
  }, [_vm._t("default")], 2)]);
};
var vsImagesvue_type_template_id_436ca6f9_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsImages/vsImages.vue?vue&type=template&id=436ca6f9&lang=html

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsImages/vsImages.vue?vue&type=script&lang=js
/* harmony default export */ var vsImagesvue_type_script_lang_js = ({
  name: "VsImages",
  inheritAttrs: false,
  props: {
    hover: {
      default: 'default',
      type: String
    },
    alternating: {
      default: false,
      type: Boolean
    },
    notBorderRadius: {
      default: false,
      type: Boolean
    },
    notMargin: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/components/vsImages/vsImages.vue?vue&type=script&lang=js
 /* harmony default export */ var vsImages_vsImagesvue_type_script_lang_js = (vsImagesvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsImages/vsImages.vue





/* normalize component */

var vsImages_component = normalizeComponent(
  vsImages_vsImagesvue_type_script_lang_js,
  vsImagesvue_type_template_id_436ca6f9_lang_html_render,
  vsImagesvue_type_template_id_436ca6f9_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsImages = (vsImages_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsImages/vsImage.vue?vue&type=template&id=347c0686
var vsImagevue_type_template_id_347c0686_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('li', {
    staticClass: "vs-image"
  }, [_c('div', {
    staticClass: "con-vs-image"
  }, [_c('div', {
    staticClass: "vs-image--img",
    style: _vm.styleImage,
    attrs: {
      "v-bind": _vm.$attrs
    }
  })]), _c('img', {
    staticClass: "imag-blur",
    attrs: {
      "src": _vm.src,
      "alt": ""
    }
  })]);
};
var vsImagevue_type_template_id_347c0686_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsImages/vsImage.vue?vue&type=template&id=347c0686

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsImages/vsImage.vue?vue&type=script&lang=js
/* harmony default export */ var vsImagevue_type_script_lang_js = ({
  name: 'VsImage',
  inheritAttrs: false,
  props: {
    src: {
      default: null,
      type: String
    }
  },
  computed: {
    styleImage: function styleImage() {
      return {
        backgroundImage: "url(".concat(this.src, ")")
      };
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsImages/vsImage.vue?vue&type=script&lang=js
 /* harmony default export */ var vsImages_vsImagevue_type_script_lang_js = (vsImagevue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsImages/vsImage.vue





/* normalize component */

var vsImage_component = normalizeComponent(
  vsImages_vsImagevue_type_script_lang_js,
  vsImagevue_type_template_id_347c0686_render,
  vsImagevue_type_template_id_347c0686_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsImage = (vsImage_component.exports);
// CONCATENATED MODULE: ./src/components/vsImages/index.js



/* harmony default export */ var components_vsImages = (function (Vue) {
  Vue.component(vsImages.name, vsImages);
  Vue.component(vsImage.name, vsImage);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsEditableList/vsEditableList.vue?vue&type=template&id=240a7190&lang=html
var vsEditableListvue_type_template_id_240a7190_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vs-editable-list"
  }, [_vm._t("default")], 2);
};
var vsEditableListvue_type_template_id_240a7190_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsEditableList/vsEditableList.vue?vue&type=template&id=240a7190&lang=html

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsEditableList/vsEditableList.vue?vue&type=script&lang=js
/* harmony default export */ var vsEditableListvue_type_script_lang_js = ({
  name: 'VsEditableList'
});
// CONCATENATED MODULE: ./src/components/vsEditableList/vsEditableList.vue?vue&type=script&lang=js
 /* harmony default export */ var vsEditableList_vsEditableListvue_type_script_lang_js = (vsEditableListvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsEditableList/vsEditableList.vue





/* normalize component */

var vsEditableList_component = normalizeComponent(
  vsEditableList_vsEditableListvue_type_script_lang_js,
  vsEditableListvue_type_template_id_240a7190_lang_html_render,
  vsEditableListvue_type_template_id_240a7190_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsEditableList = (vsEditableList_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsEditableList/vsEditableListItem.vue?vue&type=template&id=2e5462e9
var vsEditableListItemvue_type_template_id_2e5462e9_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vs-list--item"
  }, [_vm.$slots.avatar ? _c('div', {
    staticClass: "vs-list--avatar"
  }, [_vm._t("avatar")], 2) : _vm._e(), _c('div', {
    staticClass: "list-titles"
  }, [_vm.isTitleEditing ? _c('div', {
    staticClass: "vs-list--title"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.editedTitle,
      expression: "editedTitle"
    }],
    ref: "titleEditInput",
    staticClass: "edit-input",
    domProps: {
      "value": _vm.editedTitle
    },
    on: {
      "blur": _vm.saveTitleEdit,
      "keydown": [function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.saveTitleEdit.apply(null, arguments);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) return null;
        return _vm.cancelTitleEdit.apply(null, arguments);
      }],
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.editedTitle = $event.target.value;
      }
    }
  })]) : _c('div', {
    staticClass: "vs-list--title",
    on: {
      "dblclick": _vm.startTitleEditing
    }
  }, [_vm.icon ? _c('vs-icon', {
    attrs: {
      "icon-pack": _vm.iconPack,
      "icon": _vm.icon
    }
  }) : _vm._e(), _vm._v("\n      " + _vm._s(_vm.editedTitle) + "\n    ")], 1), _vm.isSubtitleEditing ? _c('div', {
    staticClass: "vs-list--subtitle"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.editedSubtitle,
      expression: "editedSubtitle"
    }],
    ref: "subtitleEditInput",
    staticClass: "edit-input",
    domProps: {
      "value": _vm.editedSubtitle
    },
    on: {
      "blur": _vm.saveSubtitleEdit,
      "keydown": [function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.saveSubtitleEdit.apply(null, arguments);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) return null;
        return _vm.cancelSubtitleEdit.apply(null, arguments);
      }],
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.editedSubtitle = $event.target.value;
      }
    }
  })]) : _c('div', {
    staticClass: "vs-list--subtitle",
    on: {
      "dblclick": _vm.startSubtitleEditing
    }
  }, [_vm._v("\n      " + _vm._s(_vm.editedSubtitle) + "\n    ")])]), _c('div', {
    staticClass: "vs-list--slot"
  }, [_vm._t("default")], 2)]);
};
var vsEditableListItemvue_type_template_id_2e5462e9_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsEditableList/vsEditableListItem.vue?vue&type=template&id=2e5462e9

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsEditableList/vsEditableListItem.vue?vue&type=script&lang=js


/* harmony default export */ var vsEditableListItemvue_type_script_lang_js = ({
  name: 'VsEditableListItem',
  components: {
    VsIcon: vsIcon
  },
  props: {
    title: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    }
  },
  data: function data() {
    return {
      isTitleEditing: false,
      editedTitle: this.title,
      isSubtitleEditing: false,
      editedSubtitle: this.subtitle
    };
  },
  methods: {
    // Title Editing Methods
    startTitleEditing: function startTitleEditing() {
      var _this = this;
      this.isTitleEditing = true;
      this.$nextTick(function () {
        _this.$refs.titleEditInput.focus();
      });
    },
    saveTitleEdit: function saveTitleEdit() {
      if (this.editedTitle.trim() !== '') {
        this.$emit('update:title', this.editedTitle);
      }
      this.isTitleEditing = false;
    },
    cancelTitleEdit: function cancelTitleEdit() {
      this.editedTitle = this.title; // Revertir al título original
      this.isTitleEditing = false;
    },
    // Subtitle Editing Methods
    startSubtitleEditing: function startSubtitleEditing() {
      var _this2 = this;
      this.isSubtitleEditing = true;
      this.$nextTick(function () {
        _this2.$refs.subtitleEditInput.focus();
      });
    },
    saveSubtitleEdit: function saveSubtitleEdit() {
      if (this.editedSubtitle.trim() !== '') {
        this.$emit('update:subtitle', this.editedSubtitle);
      }
      this.isSubtitleEditing = false;
    },
    cancelSubtitleEdit: function cancelSubtitleEdit() {
      this.editedSubtitle = this.subtitle; // Revertir al subtítulo original
      this.isSubtitleEditing = false;
    }
  },
  watch: {
    // Actualizar valores editados si las props cambian desde el padre
    title: function title(newTitle) {
      this.editedTitle = newTitle;
    },
    subtitle: function subtitle(newSubtitle) {
      this.editedSubtitle = newSubtitle;
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsEditableList/vsEditableListItem.vue?vue&type=script&lang=js
 /* harmony default export */ var vsEditableList_vsEditableListItemvue_type_script_lang_js = (vsEditableListItemvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsEditableList/vsEditableListItem.vue





/* normalize component */

var vsEditableListItem_component = normalizeComponent(
  vsEditableList_vsEditableListItemvue_type_script_lang_js,
  vsEditableListItemvue_type_template_id_2e5462e9_render,
  vsEditableListItemvue_type_template_id_2e5462e9_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsEditableListItem = (vsEditableListItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsEditableList/vsEditableListHeader.vue?vue&type=template&id=1446e7d5
var vsEditableListHeadervue_type_template_id_1446e7d5_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: ['vs-list--header', {
      'with-icon': _vm.icon
    }, "vs-header-list-".concat(_vm.color)],
    style: _vm.styleHeader,
    on: {
      "dblclick": _vm.startEditing
    }
  }, [_vm.isEditing ? _c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.editedText,
      expression: "editedText"
    }],
    ref: "editInput",
    staticClass: "edit-input",
    domProps: {
      "value": _vm.editedText
    },
    on: {
      "blur": _vm.saveEdit,
      "keydown": [function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.saveEdit.apply(null, arguments);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) return null;
        return _vm.cancelEdit.apply(null, arguments);
      }],
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.editedText = $event.target.value;
      }
    }
  })]) : _c('div', [_vm.icon ? _c('div', {
    staticClass: "vs-list--icon"
  }, [_c('vs-icon', {
    attrs: {
      "icon-pack": _vm.iconPack,
      "icon": _vm.icon
    }
  })], 1) : _vm._e(), _c('div', {
    staticClass: "list-titles"
  }, [_c('div', {
    staticClass: "vs-list--title"
  }, [_vm._v(_vm._s(_vm.editedText))])])])]);
};
var vsEditableListHeadervue_type_template_id_1446e7d5_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/vsEditableList/vsEditableListHeader.vue?vue&type=template&id=1446e7d5

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vsEditableList/vsEditableListHeader.vue?vue&type=script&lang=js



/* harmony default export */ var vsEditableListHeadervue_type_script_lang_js = ({
  name: "VsEditableListHeader",
  components: {
    VsIcon: vsIcon
  },
  props: {
    title: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: "primary"
    },
    icon: {
      type: String,
      default: null
    },
    iconPack: {
      type: String,
      default: "material-icons"
    }
  },
  data: function data() {
    return {
      isEditing: false,
      editedText: this.title
    };
  },
  computed: {
    styleHeader: function styleHeader() {
      return {
        color: utils_color.getColor(this.color)
      };
    }
  },
  methods: {
    startEditing: function startEditing() {
      var _this = this;
      this.isEditing = true;
      this.editedText = this.title;
      this.$nextTick(function () {
        _this.$refs.editInput.focus();
      });
    },
    saveEdit: function saveEdit() {
      if (this.editedText.trim() !== "") {
        this.$emit("update:title", this.editedText); // Emitir evento para actualizar el título del encabezado
      }
      this.isEditing = false;
    },
    cancelEdit: function cancelEdit() {
      this.editedText = this.title; // Revertir al título original
      this.isEditing = false;
    }
  },
  watch: {
    // Actualizar el texto editado si la prop cambia
    title: function title(newTitle) {
      this.editedText = newTitle;
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsEditableList/vsEditableListHeader.vue?vue&type=script&lang=js
 /* harmony default export */ var vsEditableList_vsEditableListHeadervue_type_script_lang_js = (vsEditableListHeadervue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/vsEditableList/vsEditableListHeader.vue





/* normalize component */

var vsEditableListHeader_component = normalizeComponent(
  vsEditableList_vsEditableListHeadervue_type_script_lang_js,
  vsEditableListHeadervue_type_template_id_1446e7d5_render,
  vsEditableListHeadervue_type_template_id_1446e7d5_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsEditableListHeader = (vsEditableListHeader_component.exports);
// CONCATENATED MODULE: ./src/components/vsEditableList/index.js




/* harmony default export */ var components_vsEditableList = (function (Vue) {
  Vue.component(vsEditableList.name, vsEditableList);
  Vue.component(vsEditableListItem.name, vsEditableListItem);
  Vue.component(vsEditableListHeader.name, vsEditableListHeader);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layout/vsRow/vsRow.vue?vue&type=template&id=517f8bed&lang=html
var vsRowvue_type_template_id_517f8bed_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vs-row",
    style: {
      'align-items': _vm.vsAlign,
      'justify-content': _vm.vsJustify,
      'display': _vm.vsType,
      'overflow': _vm.vsType === 'block' ? 'hidden' : null,
      'width': _vm.vsW * 100 / 12 + '%'
    }
  }, [_vm._t("default")], 2);
};
var vsRowvue_type_template_id_517f8bed_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/layout/vsRow/vsRow.vue?vue&type=template&id=517f8bed&lang=html

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layout/vsRow/vsRow.vue?vue&type=script&lang=js

/* harmony default export */ var vsRowvue_type_script_lang_js = ({
  name: 'VsRow',
  props: {
    vsType: {
      default: 'flex',
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
// CONCATENATED MODULE: ./src/layout/vsRow/vsRow.vue?vue&type=script&lang=js
 /* harmony default export */ var vsRow_vsRowvue_type_script_lang_js = (vsRowvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/layout/vsRow/vsRow.vue?vue&type=style&index=0&id=517f8bed&prod&lang=css
var vsRowvue_type_style_index_0_id_517f8bed_prod_lang_css = __webpack_require__("71a1");

// CONCATENATED MODULE: ./src/layout/vsRow/vsRow.vue






/* normalize component */

var vsRow_component = normalizeComponent(
  vsRow_vsRowvue_type_script_lang_js,
  vsRowvue_type_template_id_517f8bed_lang_html_render,
  vsRowvue_type_template_id_517f8bed_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsRow = (vsRow_component.exports);
// CONCATENATED MODULE: ./src/layout/vsRow/index.js


/* harmony default export */ var layout_vsRow = (function (Vue) {
  Vue.component(vsRow.name, vsRow);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layout/vsCol/vsCol.vue?vue&type=template&id=61c2982a&lang=html
var vsColvue_type_template_id_61c2982a_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vs-col",
    class: ['vs-xs-' + _vm.vsXs, 'vs-sm-' + _vm.vsSm, 'vs-lg-' + _vm.vsLg],
    style: {
      'order': _vm.vsOrder,
      'justify-content': _vm.vsJustify,
      'display': _vm.vsType,
      'align-items': _vm.vsAlign,
      'margin-left': _vm.vsOffset * 100 / 12 + '%',
      'width': _vm.vsW * 100 / 12 + '%'
    }
  }, [_vm._t("default")], 2);
};
var vsColvue_type_template_id_61c2982a_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/layout/vsCol/vsCol.vue?vue&type=template&id=61c2982a&lang=html

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layout/vsCol/vsCol.vue?vue&type=script&lang=js

/* harmony default export */ var vsColvue_type_script_lang_js = ({
  name: 'VsCol',
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
      default: null,
      type: [String, Number]
    }
  }
});
// CONCATENATED MODULE: ./src/layout/vsCol/vsCol.vue?vue&type=script&lang=js
 /* harmony default export */ var vsCol_vsColvue_type_script_lang_js = (vsColvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/layout/vsCol/vsCol.vue?vue&type=style&index=0&id=61c2982a&prod&lang=css
var vsColvue_type_style_index_0_id_61c2982a_prod_lang_css = __webpack_require__("9ca4");

// CONCATENATED MODULE: ./src/layout/vsCol/vsCol.vue






/* normalize component */

var vsCol_component = normalizeComponent(
  vsCol_vsColvue_type_script_lang_js,
  vsColvue_type_template_id_61c2982a_lang_html_render,
  vsColvue_type_template_id_61c2982a_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsCol = (vsCol_component.exports);
// CONCATENATED MODULE: ./src/layout/vsCol/index.js


/* harmony default export */ var layout_vsCol = (function (Vue) {
  Vue.component(vsCol.name, vsCol);
});
// CONCATENATED MODULE: ./src/components/index.js
































//New Component import

//layout


// EXTERNAL MODULE: ./src/style/vuesax.styl
var vuesax = __webpack_require__("99c0");

// CONCATENATED MODULE: ./src/utils/theme.js





/* harmony default export */ var theme = ({
  name: 'theme',
  vsfunction: function vsfunction(json) {
    for (var clave in json) {
      var colorx = void 0;
      if (/^[rgb(]/g.test(json[clave])) {
        colorx = json[clave].replace(/[rgb()]/g, '');
      } else if (/[#]/g.test(json[clave])) {
        var rgbx = utils_color.hexToRgb(json[clave]);
        colorx = "".concat(rgbx.r, ",").concat(rgbx.g, ",").concat(rgbx.b);
      } else {
        colorx = json[clave];
      }
      utils_color.setCssVariable('--vs-' + clave, colorx);
    }
  }
});
// CONCATENATED MODULE: ./src/utils/rtl.js
/**
 * @injectDirectionClass
 * will inject 'vuesax-app-is-ltr' (ltr case) or 'vuexsax-app-is-rtl' (rtl case) in the html tag
 */

var injectDirectionClass = function injectDirectionClass(dir) {
  if (document) {
    if (dir) {
      document.documentElement.classList.remove("vuesax-app-is-ltr");
      document.documentElement.classList.add("vuesax-app-is-rtl");
    } else {
      document.documentElement.classList.add("vuesax-app-is-ltr");
      document.documentElement.classList.remove("vuesax-app-is-rtl");
    }
  }
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/functions/vsNotifications/index.vue?vue&type=template&id=96f60dd2&lang=html
var vsNotificationsvue_type_template_id_96f60dd2_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('transition', {
    attrs: {
      "name": "noti"
    },
    on: {
      "before-enter": _vm.beforeEnter,
      "enter": _vm.enter,
      "leave": _vm.leave
    }
  }, [_vm.active ? _c('div', {
    ref: "noti",
    staticClass: "vs-component vs-notifications",
    class: ["vs-noti-".concat(_vm.position), "vs-noti-".concat(_vm.color), {
      'activeNoti': _vm.active
    }],
    style: _vm.stylex,
    on: {
      "click": _vm.clickNoti
    }
  }, [_c('div', {
    staticClass: "content-noti"
  }, [_c('div', {
    staticClass: "con-text-noti"
  }, [_c('h3', {
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  }), _c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.text)
    }
  }), _vm._t("default")], 2), _vm.icon ? _c('vs-icon', {
    staticClass: "vs-icon-noti",
    attrs: {
      "icon": _vm.icon,
      "icon-pack": _vm.iconPack
    }
  }) : _vm._e()], 1), _c('span', {
    staticClass: "filling",
    style: _vm.fillingStyle
  })]) : _vm._e()]);
};
var vsNotificationsvue_type_template_id_96f60dd2_lang_html_staticRenderFns = [];

// CONCATENATED MODULE: ./src/functions/vsNotifications/index.vue?vue&type=template&id=96f60dd2&lang=html

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.fixed.js
var es_string_fixed = __webpack_require__("c7cd");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/functions/vsNotifications/index.vue?vue&type=script&lang=js





/* harmony default export */ var vsNotificationsvue_type_script_lang_js = ({
  components: {
    vsIcon: vsIcon
  },
  data: function data() {
    return {
      fullWidth: false,
      icon: null,
      iconPack: 'material-icons',
      color: 'primary',
      colorText: 'rgb(255, 255, 255)',
      active: true,
      text: null,
      title: null,
      position: 'bottom-right',
      time: 3000,
      cords: {
        top: null,
        left: null,
        right: null,
        bottom: null
      },
      widthx: 0,
      fixed: false
    };
  },
  computed: {
    fillingStyle: function fillingStyle() {
      return {
        left: this.cords.left ? '-100px' : null,
        right: this.cords.right ? '-100px' : null,
        background: this.color,
        height: "".concat(this.widthx * 2, "px"),
        width: "".concat(this.widthx * 2, "px")
      };
    },
    stylex: function stylex() {
      return _objectSpread2(_objectSpread2({}, this.cords), {}, {
        color: this.colorText,
        width: this.fullWidth ? "calc(100% - 14px)" : "",
        maxWidth: this.fullWidth ? 'none' : "350px"
      });
    }
  },
  created: function created() {
    var _this = this;
    setTimeout(function () {
      _this.moverNotis();
    }, 0);
    this.changeCords();
  },
  mounted: function mounted() {
    var _this2 = this;
    setTimeout(function () {
      _this2.widthx = _this2.$refs.noti.clientWidth;
    }, 0);
    if (!this.fixed) {
      setTimeout(function () {
        _this2.closeNoti();
      }, this.time);
    }
  },
  methods: {
    clickNoti: function clickNoti() {
      this.active = false;
      this.click ? this.click() : null;
    },
    beforeEnter: function beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter: function enter(el, done) {
      el.style.opacity = 1;
      done();
    },
    leave: function leave(el, done) {
      var _this3 = this;
      el.style.opacity = 0;
      var transformx = el.style.transform;
      if (this.cords.left == '50%' || this.fullWidth) {
        transformx += " translateY(".concat(this.cords.top ? '-' : '', "100%)");
      } else {
        transformx += " translateX(".concat(this.cords.left ? '-' : '', "100%)");
      }
      el.style.transform = transformx;
      setTimeout(function () {
        done();
        _this3.moverNotis();
      }, 150);
    },
    closeNoti: function closeNoti() {
      this.active = false;
    },
    changeCords: function changeCords() {
      var positions = this.position.split('-');
      var search = function search(text) {
        return positions.indexOf(text) != -1;
      };
      if (search('top')) {
        this.cords.top = '0px';
      }
      if (search('bottom')) {
        this.cords.bottom = '0px';
      }
      if (search('right')) {
        this.cords.right = '0px';
      }
      if (search('left')) {
        this.cords.left = '0px';
      }
      if (search('center')) {
        this.cords.left = '50%';
      }
    },
    moverNotis: function moverNotis() {
      var notisx = document.querySelectorAll('.vs-noti-' + this.position);
      for (var i = 0; i < notisx.length; i++) {
        var hx = 10;
        for (var i2 = 0; i2 < i; i2++) {
          hx += notisx[i2].clientHeight + 6;
        }
        if (this.position.search('center') == -1) {
          if (this.position.search('top') != -1) {
            notisx[i].style.transform = "translatey(".concat(hx, "px)");
          } else if (this.position.search('bottom') != -1) {
            notisx[i].style.transform = "translatey(-".concat(hx, "px)");
          }
        }
        if (this.position.search('top') != -1 && this.position.search('center') != -1) {
          notisx[i].style.transform = "translate(-50%,".concat(hx, "px)");
          notisx[i].style.zIndex = 10000 - i;
        }
        if (this.position.search('bottom') != -1 && this.position.search('center') != -1) {
          notisx[i].style.transform = "translate(-50%,-".concat(hx, "px)");
          notisx[i].style.zIndex = 10000 - i;
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/functions/vsNotifications/index.vue?vue&type=script&lang=js
 /* harmony default export */ var functions_vsNotificationsvue_type_script_lang_js = (vsNotificationsvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/functions/vsNotifications/index.vue





/* normalize component */

var vsNotifications_component = normalizeComponent(
  functions_vsNotificationsvue_type_script_lang_js,
  vsNotificationsvue_type_template_id_96f60dd2_lang_html_render,
  vsNotificationsvue_type_template_id_96f60dd2_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsNotifications = (vsNotifications_component.exports);
// CONCATENATED MODULE: ./src/functions/vsNotifications/index.js





var NotiConstructor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(vsNotifications);
var vsNotifications_instance;
/* harmony default export */ var functions_vsNotifications = ({
  name: 'notify',
  vsfunction: function vsfunction(parameters) {
    if (parameters.fullWidth) {
      if (parameters.position) {
        parameters.position = parameters.position.replace('right', 'left');
      }
    }
    vsNotifications_instance = new NotiConstructor({
      data: parameters
    });
    vsNotifications_instance.vm = vsNotifications_instance.$mount();
    parameters.click ? vsNotifications_instance.vm.$on('click', parameters.click) : null;
    utils.insertBody(vsNotifications_instance.vm.$el);
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("a630");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b37f73e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/functions/vsLoading/index.vue?vue&type=template&id=6dfeeb48
var vsLoadingvue_type_template_id_6dfeeb48_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_vm.active ? _c('div', {
    staticClass: "con-vs-loading",
    class: ["vs-loading-background-".concat(_vm.background), "vs-loading-color-".concat(_vm.color), {
      'textAfter': _vm.textAfter
    }],
    style: _vm.style,
    on: {
      "click": _vm.effectClick
    }
  }, [_c('transition', {
    attrs: {
      "name": "effect-click"
    }
  }, [_vm.activeEffectClick && _vm.clickEffect ? _c('div', {
    staticClass: "effect-click",
    style: _vm.styleEffectClick
  }) : _vm._e()]), _vm.text ? _c('h4', {
    staticClass: "title-loading"
  }, [_vm._v(_vm._s(_vm.text))]) : _vm._e(), _c('div', {
    staticClass: "vs-loading",
    class: [_vm.type],
    style: {
      transform: "scale(".concat(_vm.scale, ")")
    }
  }, [_vm.type != 'material' ? _c('div', {
    staticClass: "effect-1 effects",
    style: _vm.styleEffect1
  }) : _vm._e(), _vm.type != 'material' ? _c('div', {
    staticClass: "effect-2 effects",
    style: _vm.styleEffect2
  }) : _vm._e(), _vm.type != 'material' ? _c('div', {
    staticClass: "effect-3 effects",
    style: _vm.styleEffect3
  }) : _vm._e(), _c('img', {
    attrs: {
      "src": _vm.src
    }
  }), _vm.type == 'material' ? _c('svg', {
    staticClass: "spinner",
    attrs: {
      "width": "50px",
      "height": "50px",
      "viewBox": "0 0 66 66",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('circle', {
    staticClass: "path",
    attrs: {
      "fill": "none",
      "stroke-width": "5",
      "stroke-linecap": "round",
      "cx": "33",
      "cy": "33",
      "r": "30"
    }
  })]) : _vm._e()])], 1) : _vm._e()]);
};
var vsLoadingvue_type_template_id_6dfeeb48_staticRenderFns = [];

// CONCATENATED MODULE: ./src/functions/vsLoading/index.vue?vue&type=template&id=6dfeeb48

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/functions/vsLoading/index.vue?vue&type=script&lang=js

/* harmony default export */ var vsLoadingvue_type_script_lang_js = ({
  data: function data() {
    return {
      active: false,
      type: 'default',
      color: null,
      background: 'rgba(255,255,255,.6)',
      src: '',
      leftx: 0,
      topx: 0,
      clickEffect: false,
      activeEffectClick: false,
      scale: 1,
      textAfter: false,
      text: null
    };
  },
  computed: {
    styleEffectClick: function styleEffectClick() {
      return {
        left: "".concat(this.leftx, "px"),
        top: "".concat(this.topx, "px")
      };
    },
    styleEffect1: function styleEffect1() {
      var style = {
        borderLeft: "3px solid ".concat(utils_color.getColor(this.color, 1))
      };
      if (this.type == 'border') {
        style = {
          borderLeft: "1px solid ".concat(utils_color.getColor(this.color, 1))
        };
      }
      if (this.type == 'point') {
        style = {
          background: utils_color.getColor(this.color, .4)
        };
      }
      if (this.type == 'radius') {
        style = {
          border: "3px solid ".concat(utils_color.getColor(this.color, 1))
        };
      }
      if (this.type == 'corners') {
        style = {
          border: "3px solid ".concat(utils_color.getColor(this.color, 1))
        };
      }
      if (this.type == 'sound') {
        style = {
          background: utils_color.getColor(this.color, 1)
        };
      }
      return style;
    },
    styleEffect2: function styleEffect2() {
      var style = {
        borderLeft: "3px solid ".concat(utils_color.getColor(this.color, 1))
      };
      if (this.type == 'border') {
        style = {
          borderLeft: "1px solid ".concat(utils_color.getColor(this.color, 1))
        };
      }
      if (this.type == 'point') {
        style = {
          background: utils_color.getColor(this.color, .4)
        };
      }
      if (this.type == 'radius') {
        style = {
          border: "3px solid ".concat(utils_color.getColor(this.color, 1))
        };
      }
      if (this.type == 'corners') {
        style = {};
      }
      if (this.type == 'sound') {
        style = {
          background: utils_color.getColor(this.color, 1)
        };
      }
      return style;
    },
    styleEffect3: function styleEffect3() {
      var style = {
        borderLeft: "3px solid ".concat(utils_color.getColor(this.color, 1))
      };
      if (this.type == 'border') {
        style = {
          borderLeft: "1px solid ".concat(utils_color.getColor(this.color, 1))
        };
      }
      if (this.type == 'point') {
        style = {
          background: utils_color.getColor(this.color, .4)
        };
      }
      if (this.type == 'radius') {
        style = {
          border: "3px solid ".concat(utils_color.getColor(this.color, 1))
        };
      }
      if (this.type == 'corners') {
        style = {};
      }
      if (this.type == 'sound') {
        style = {
          background: utils_color.getColor(this.color, 1)
        };
      }
      return style;
    },
    style: function style() {
      return {
        background: utils_color.getColor(this.background, 1)
      };
    }
  },
  mounted: function mounted() {
    this.active = true;
  },
  methods: {
    effectClick: function effectClick(evt) {
      var _this = this;
      this.leftx = evt.offsetX;
      this.topx = evt.offsetY;
      this.activeEffectClick = true;
      setTimeout(function () {
        _this.activeEffectClick = false;
      }, 50);
    },
    close: function close() {
      this.active = false;
    }
  }
});
// CONCATENATED MODULE: ./src/functions/vsLoading/index.vue?vue&type=script&lang=js
 /* harmony default export */ var functions_vsLoadingvue_type_script_lang_js = (vsLoadingvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/functions/vsLoading/index.vue





/* normalize component */

var vsLoading_component = normalizeComponent(
  functions_vsLoadingvue_type_script_lang_js,
  vsLoadingvue_type_template_id_6dfeeb48_render,
  vsLoadingvue_type_template_id_6dfeeb48_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsLoading = (vsLoading_component.exports);
// CONCATENATED MODULE: ./src/functions/vsLoading/index.js







var loadingConstructor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(vsLoading);
/* harmony default export */ var functions_vsLoading = ({
  name: 'loading',
  vsfunction: function vsfunction(parameters) {
    var instance = new loadingConstructor();
    var containerx = document.body;
    if (parameters) {
      instance.$data.type = parameters.type || 'default';
      instance.$data.background = parameters.background;
      instance.$data.color = parameters.color;
      instance.$data.scale = parameters.scale;
      instance.$data.text = parameters.text;
      instance.$data.clickEffect = parameters.clickEffect;
      if (parameters.container) {
        containerx = parameters.container instanceof Element ? parameters.container : document.querySelector(parameters.container);
      }
    }
    instance.vm = instance.$mount();
    containerx.insertBefore(instance.vm.$el, containerx.firstChild);
  },
  close: function close(elx) {
    var loadings;
    if (elx instanceof Element) {
      // Mimicking the behavior of doing `elx.querySelectorAll('> con-vs-loading')` but `>` is not well supported.
      // We are doing this because we can only add the respective classes to .con-vs-loading
      loadings = Array.from(elx.children).filter(function (el) {
        return el.classList.contains('con-vs-loading');
      });
    } else {
      loadings = document.querySelectorAll(elx || 'body > .con-vs-loading');
    }
    loadings.forEach(function (loading) {
      loading.classList.add('beforeRemove');
      setTimeout(function () {
        loading.remove();
      }, 300);
    });
  }
});
// CONCATENATED MODULE: ./src/functions/vsDialog/index.js



var dialogConstructor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(vsDialog);
var vsDialog_instance;
/* harmony default export */ var functions_vsDialog = ({
  name: 'dialog',
  vsfunction: function vsfunction(props) {
    vsDialog_instance = new dialogConstructor();
    vsDialog_instance.$props.text = props.text;
    vsDialog_instance.$props.title = props.title || 'Dialog';
    vsDialog_instance.$props.color = props.color;
    vsDialog_instance.$props.type = props.type || 'alert';
    vsDialog_instance.$props.buttonAccept = props.buttonAccept || 'filled';
    vsDialog_instance.$props.buttonCancel = props.buttonCancel || 'flat';
    vsDialog_instance.$props.acceptText = props.acceptText || 'Accept';
    vsDialog_instance.$props.cancelText = props.cancelText || 'Cancel';
    vsDialog_instance.$props.closeIcon = props.closeIcon || 'close';
    vsDialog_instance.$props.iconPack = props.iconPack || 'material-icons';
    vsDialog_instance.$props.isValid = props.isValid || 'none';
    vsDialog_instance.$data.isPrompt = false;
    vsDialog_instance.vm = vsDialog_instance.$mount();
    props.accept ? vsDialog_instance.vm.$on('accept', props.accept) : null;
    props.cancel ? vsDialog_instance.vm.$on('cancel', props.cancel) : null;
    utils.insertBody(vsDialog_instance.vm.$el, props.parent);
    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(function () {
      vsDialog_instance.$data.fActive = true;
      vsDialog_instance.$data.parameters = props.parameters;
    });
  }
});
// CONCATENATED MODULE: ./src/functions/index.js




// Functions




//theme

var vsFunctions = {
  vsNotifications: functions_vsNotifications,
  vsLoading: functions_vsLoading,
  vsTheme: theme,
  vsDialog: functions_vsDialog
};
/* harmony default export */ var functions = (function (vm) {
  Object.values(vsFunctions).forEach(function (vsFunctions) {
    if (vsFunctions.hasOwnProperty('subName')) {
      vm.$vs[vsFunctions.name][vsFunctions.subName] = vsFunctions.vsfunction;
    } else {
      vm.$vs[vsFunctions.name] = vsFunctions.vsfunction;
    }
  });
  vm.$vs.loading.close = functions_vsLoading.close;
});
// CONCATENATED MODULE: ./src/defineGlobalMixin.js


/**
 * Vuesax global mixin, all vueasx functions and properties injected
 * in the @beforeCreate hook.
 */

/* harmony default export */ var defineGlobalMixin = (function (Vue, options) {
  Vue.mixin({
    watch: {
      '$vs.rtl': {
        handler: function handler(val) {
          injectDirectionClass(val);
        }
      }
    },
    beforeCreate: function beforeCreate() {
      // create $vs property if not exist
      if (!this.$vs) {
        // define $vs reactive properties
        this.$vs = Vue.observable(options);
        // define $vs functions
        functions(this);
      }
    },
    mounted: function mounted() {
      // inject the direction class for the initial options
      injectDirectionClass(this.$vs.rtl);
    }
  });
});
// CONCATENATED MODULE: ./src/utils/options.js
/**
 * All vuesax framework options listed here
 * all options listed here are reactive
 */
/* harmony default export */ var utils_options = ({
  rtl: false
});
// CONCATENATED MODULE: ./src/index.js








var src_install = function install(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // set default options
  for (var prop in utils_options) {
    if (!options[prop]) {
      options[prop] = utils_options[prop];
    }
  }
  // Use Components
  Object.values(components_namespaceObject).forEach(function (vsComponent) {
    Vue.use(vsComponent);
  });
  if (options) {
    if (options.hasOwnProperty('theme')) {
      if (options.theme.hasOwnProperty('colors')) {
        if (typeof window !== 'undefined') {
          theme.vsfunction(options.theme.colors, options.server);
        }
      }
    }
  }
  // Define vuesax functions and properties ($vs)
  defineGlobalMixin(Vue, options);
};
if (typeof window !== 'undefined' && window.Vue) {
  src_install(window.Vue);
}
/* harmony default export */ var src = (src_install);
































//New Component import

//layout


// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var isArray = __webpack_require__("e8b5");
var isConstructor = __webpack_require__("68ee");
var isObject = __webpack_require__("861d");
var toAbsoluteIndex = __webpack_require__("23cb");
var lengthOfArrayLike = __webpack_require__("07fa");
var toIndexedObject = __webpack_require__("fc6a");
var createProperty = __webpack_require__("8418");
var wellKnownSymbol = __webpack_require__("b622");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var nativeSlice = __webpack_require__("f36a");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var $Array = Array;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === $Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === $Array || Constructor === undefined) {
        return nativeSlice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? $Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fce3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");
var global = __webpack_require__("da84");

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.test('\n') && re.flags === 's');
});


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("04f8");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ });