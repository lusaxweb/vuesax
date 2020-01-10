(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vuesax"] = factory(require("vue"));
	else
		root["vuesax"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "1a79");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0143":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "0205":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f6df");
var trim = __webpack_require__("2588").trim;
var whitespaces = __webpack_require__("0143");

var nativeParseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = nativeParseInt(whitespaces + '08') !== 8 || nativeParseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return nativeParseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : nativeParseInt;


/***/ }),

/***/ "0218":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("903b");
var global = __webpack_require__("f6df");
var isForced = __webpack_require__("2f20");
var redefine = __webpack_require__("f92b");
var has = __webpack_require__("cbe9");
var classof = __webpack_require__("3eab");
var inheritIfRequired = __webpack_require__("d193");
var toPrimitive = __webpack_require__("9a1c");
var fails = __webpack_require__("3c50");
var create = __webpack_require__("99a3");
var getOwnPropertyNames = __webpack_require__("4d84").f;
var getOwnPropertyDescriptor = __webpack_require__("8005").f;
var defineProperty = __webpack_require__("79b1").f;
var trim = __webpack_require__("2588").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "02e0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("59a3");
var $filter = __webpack_require__("46f7").filter;
var fails = __webpack_require__("3c50");
var arrayMethodHasSpeciesSupport = __webpack_require__("4eed");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = HAS_SPECIES_SUPPORT && !fails(function () {
  [].filter.call({ length: -1, 0: 1 }, function (it) { throw it; });
});

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "04ca":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("0f1f");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "051a":
/***/ (function(module, exports) {

// `Math.sign` method implementation
// https://tc39.github.io/ecma262/#sec-math.sign
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),

/***/ "072a":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("3c50");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "098e":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("59a3");
var $values = __webpack_require__("220d").values;

// `Object.values` method
// https://tc39.github.io/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ }),

/***/ "0bb0":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("2e8b");
var has = __webpack_require__("cbe9");
var wrappedWellKnownSymbolModule = __webpack_require__("1a22");
var defineProperty = __webpack_require__("79b1").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "0cde":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("59a3");
var global = __webpack_require__("f6df");
var getBuiltIn = __webpack_require__("e00e");
var IS_PURE = __webpack_require__("ea48");
var DESCRIPTORS = __webpack_require__("903b");
var NATIVE_SYMBOL = __webpack_require__("072a");
var USE_SYMBOL_AS_UID = __webpack_require__("d823");
var fails = __webpack_require__("3c50");
var has = __webpack_require__("cbe9");
var isArray = __webpack_require__("5ce7");
var isObject = __webpack_require__("57cd");
var anObject = __webpack_require__("0f1f");
var toObject = __webpack_require__("d48d");
var toIndexedObject = __webpack_require__("55fe");
var toPrimitive = __webpack_require__("9a1c");
var createPropertyDescriptor = __webpack_require__("0ff4");
var nativeObjectCreate = __webpack_require__("99a3");
var objectKeys = __webpack_require__("7511");
var getOwnPropertyNamesModule = __webpack_require__("4d84");
var getOwnPropertyNamesExternal = __webpack_require__("9803");
var getOwnPropertySymbolsModule = __webpack_require__("6b93");
var getOwnPropertyDescriptorModule = __webpack_require__("8005");
var definePropertyModule = __webpack_require__("79b1");
var propertyIsEnumerableModule = __webpack_require__("a970");
var createNonEnumerableProperty = __webpack_require__("5469");
var redefine = __webpack_require__("f92b");
var shared = __webpack_require__("d5b0");
var sharedKey = __webpack_require__("e7a4");
var hiddenKeys = __webpack_require__("622b");
var uid = __webpack_require__("f7fe");
var wellKnownSymbol = __webpack_require__("83e9");
var wrappedWellKnownSymbolModule = __webpack_require__("1a22");
var defineWellKnownSymbol = __webpack_require__("0bb0");
var setToStringTag = __webpack_require__("2c5a");
var InternalStateModule = __webpack_require__("df9b");
var $forEach = __webpack_require__("46f7").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = NATIVE_SYMBOL && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

if (!USE_SYMBOL_AS_UID) {
  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "0f1f":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("57cd");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "0ff4":
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

/***/ "1428":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("e00e");
var getOwnPropertyNamesModule = __webpack_require__("4d84");
var getOwnPropertySymbolsModule = __webpack_require__("6b93");
var anObject = __webpack_require__("0f1f");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "1492":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("903b");
var global = __webpack_require__("f6df");
var isForced = __webpack_require__("2f20");
var inheritIfRequired = __webpack_require__("d193");
var defineProperty = __webpack_require__("79b1").f;
var getOwnPropertyNames = __webpack_require__("4d84").f;
var isRegExp = __webpack_require__("d425");
var getFlags = __webpack_require__("04ca");
var redefine = __webpack_require__("f92b");
var fails = __webpack_require__("3c50");
var setSpecies = __webpack_require__("570c");
var wellKnownSymbol = __webpack_require__("83e9");

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var FORCED = DESCRIPTORS && isForced('RegExp', (!CORRECT_NEW || fails(function () {
  re2[MATCH] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
})));

// `RegExp` constructor
// https://tc39.github.io/ecma262/#sec-regexp-constructor
if (FORCED) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = this instanceof RegExpWrapper;
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    return !thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined ? pattern
      : inheritIfRequired(CORRECT_NEW
        ? new NativeRegExp(patternIsRegExp && !flagsAreUndefined ? pattern.source : pattern, flags)
        : NativeRegExp((patternIsRegExp = pattern instanceof RegExpWrapper)
          ? pattern.source
          : pattern, patternIsRegExp && flagsAreUndefined ? getFlags.call(pattern) : flags)
      , thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);
  };
  var proxy = function (key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function () { return NativeRegExp[key]; },
      set: function (it) { NativeRegExp[key] = it; }
    });
  };
  var keys = getOwnPropertyNames(NativeRegExp);
  var index = 0;
  while (keys.length > index) proxy(keys[index++]);
  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

// https://tc39.github.io/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),

/***/ "183e":
/***/ (function(module, exports) {

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

/***/ "18f5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__("464f");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "1939":
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

/***/ "1a22":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("83e9");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "1a79":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
__webpack_require__.d(components_namespaceObject, "vsRow", function() { return layout_vsRow; });
__webpack_require__.d(components_namespaceObject, "vsCol", function() { return layout_vsCol; });

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("81bd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("9f21");

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.object.values.js
var es_object_values = __webpack_require__("098e");

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("4f11");

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("4831");

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsButton/vsButton.vue?vue&type=template&id=c639e014&lang=html&
var render = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',_vm._g(_vm._b({ref:"btn",staticClass:"vs-component vs-button",class:[("vs-button-" + (_vm.isColor()?_vm.color:null)),("vs-button-" + _vm.type),{
    'isActive':_vm.isActive,
    'includeIcon':_vm.icon,
    'includeIconOnly':_vm.icon && !_vm.$slots.default,
    'vs-radius':_vm.radius
  }, _vm.size],style:([_vm.styles,{
    'width':/[px]/.test(_vm.size)?("" + _vm.size):null,
    'height':/[px]/.test(_vm.size)?("" + _vm.size):null
  }]),attrs:{"type":_vm.button,"name":"button"}},'button',_vm.$attrs,false),_vm.listeners),[(!_vm.is('line')&&!_vm.is('gradient')&&!_vm.is('relief'))?_c('span',{ref:"backgroundx",staticClass:"vs-button-backgroundx vs-button--background",style:(_vm.stylesBackGround)}):_vm._e(),(_vm.icon)?_c('vs-icon',{staticClass:"vs-button--icon ",style:(( _obj = {
      'order':_vm.iconAfter?2:0
    }, _obj['margin-' + _vm.isRTL('left')] = _vm.$slots.default&&!_vm.iconAfter?'5px':'0px', _obj['margin-' + _vm.isRTL('right')] = _vm.$slots.default&&_vm.iconAfter?'5px':'0px', _obj )),attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon}}):_vm._e(),(_vm.$slots.default)?_c('span',{staticClass:"vs-button-text vs-button--text"},[_vm._t("default")],2):_vm._e(),_c('span',{ref:"linex",staticClass:"vs-button-linex",style:(_vm.styleLine)})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsButton/vsButton.vue?vue&type=template&id=c639e014&lang=html&

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("0cde");

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("f90f");

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("02e0");

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("82f8");

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("c9be");

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("3c13");

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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
// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("a92f");

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fead");

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.parse-int.js
var es_parse_int = __webpack_require__("eb54");

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("1d52");

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("d713");

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__("4654");

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("716b");

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("1c97");

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

    return colorx; // this.setCssVariable('--vs-'+clave,colorx)
  }
});
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsButton/vsButton.vue?vue&type=script&lang=js&










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsButtonvue_type_script_lang_js_ = ({
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

      return _objectSpread({}, this.$listeners, {
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

      if (this.type == 'border' || this.type == 'flat') {
        this.opacity = 0;
        setTimeout(function () {
          _this3.radio = 0;
        }, 150);
        this.isActive = false;
      }
    },
    clickButton: function clickButton(event) {
      var _this4 = this;

      this.$emit('click', event);

      if (this.isActive) {
        return;
      }

      if (this.to) {
        this.routerPush();
      }

      if (this.href) {
        if (typeof this.href == 'string') {
          this.target ? window.open(this.href) : window.location.href = this.href;
        } else {
          this.target ? window.open(this.href.url) : window.location.href = this.href.url;
        }
      }

      this.isActive = true;
      var btn = this.$refs.btn;
      var xEvent = event.offsetX;
      var yEvent = event.offsetY;
      var radio = btn.clientWidth * 3;
      this.time = btn.clientWidth / (btn.clientWidth + (this.is('border') || this.is('flat') ? 70 : 20));

      if (this.is('filled')) {
        this.timeOpacity = this.time;
      }

      if (event.srcElement ? event.srcElement != btn : false) {
        xEvent += event.target.offsetLeft;
        yEvent += event.target.offsetTop;
      }

      this.leftBackgorund = xEvent;
      this.topBackgorund = yEvent;
      this.radio = radio;

      if (this.is('filled')) {
        this.opacity = 0;
      } else {
        this.opacity = 1;
      }

      if (this.is('filled')) {
        setTimeout(function () {
          _this4.time = _this4.timeOpacity = _this4.radio = 0;
          _this4.opacity = 1;
          _this4.isActive = false;
        }, this.time * 1100);
      } else {
        setTimeout(function () {
          _this4.timeOpacity = .15;
        }, this.time * 1100);
      }
    },
    isColor: function isColor() {
      return utils_color.isColor(this.color);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsButton/vsButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsButton_vsButtonvue_type_script_lang_js_ = (vsButtonvue_type_script_lang_js_); 
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/runtime/componentNormalizer.js
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
    options._scopeId = 'data-v-' + scopeId
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

// CONCATENATED MODULE: ./src/components/vsButton/vsButton.vue





/* normalize component */

var component = normalizeComponent(
  vsButton_vsButtonvue_type_script_lang_js_,
  render,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSelect/vsSelect.vue?vue&type=template&id=642ca932&lang=html&
var vsSelectvue_type_template_id_642ca932_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-select",class:{
    'autocompletex':_vm.autocomplete,
    'activeOptions':_vm.active,
    'input-select-validate-success':_vm.success,
    'input-select-validate-danger':_vm.danger,
    'input-select-validate-warning':_vm.warning},style:(_vm.getWidth)},[(_vm.label)?_c('label',{ref:"inputSelectLabel",staticClass:"vs-select--label",attrs:{"for":""}},[_vm._v(_vm._s(_vm.label))]):_vm._e(),_c('div',{staticClass:"input-select-con"},[_c('input',_vm._g(_vm._b({ref:"inputselect",staticClass:"input-select vs-select--input",attrs:{"readonly":!_vm.autocomplete,"type":"text"},on:{"click":function($event){$event.stopPropagation();},"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }$event.stopPropagation();$event.preventDefault();return _vm.closeOptions($event)}}},'input',_vm.$attrs,false),_vm.listeners)),_c('button',{staticClass:"icon-select-clear vs-select--icon-clear",class:{'activeBtnClear': _vm.activeBtnClear},on:{"click":_vm.clearValue}},[_c('i',{staticClass:"material-icons"},[_vm._v(" close ")])]),(!_vm.activeBtnClear)?_c('vs-icon',{staticClass:"icon-select vs-select--icon",attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon},on:{"~click":function($event){}}}):_vm._e(),_c('transition',{attrs:{"name":"fadeselect"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}],ref:"vsSelectOptions",staticClass:"vs-select--options",class:[("vs-select-" + _vm.color),{'scrollx':_vm.scrollx}],style:(_vm.cords)},[_c('ul',{ref:"ulx"},[_vm._t("default")],2),_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.clear),expression:"clear"}]},[_c('li',{on:{"click":function($event){_vm.filterItems(''),_vm.changeValue()}}},[_vm._v(" "+_vm._s(_vm.noData)+" ")])])])])],1),_c('transition-group',{on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"leave":_vm.leave}},[(_vm.success)?_c('div',{key:"success",staticClass:"con-text-validation"},[_c('span',{staticClass:"span-text-validation span-text-validation-success"},[_vm._v(" "+_vm._s(_vm.successText)+" ")])]):(_vm.danger)?_c('div',{key:"danger",staticClass:"con-text-validation span-text-validation-danger"},[_c('span',{staticClass:"span-text-validation"},[_vm._v(" "+_vm._s(_vm.dangerText)+" ")])]):(_vm.warning)?_c('div',{key:"warning",staticClass:"con-text-validation span-text-validation-warning"},[_c('span',{staticClass:"span-text-validation"},[_vm._v(" "+_vm._s(_vm.warningText)+" ")])]):_vm._e(),(_vm.descriptionText)?_c('div',{key:"description",staticClass:"con-text-validation span-text-validation"},[_c('span',{staticClass:"span-text-validation"},[_vm._v(" "+_vm._s(_vm.descriptionText)+" ")])]):_vm._e()])],1)}
var vsSelectvue_type_template_id_642ca932_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsSelect/vsSelect.vue?vue&type=template&id=642ca932&lang=html&

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("2378");

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("7244");

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("c080");

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("0218");

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("7cde");

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("1f8e");

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@babel/runtime/helpers/esm/slicedToArray.js



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSelect/vsSelect.vue?vue&type=script&lang=js&























function vsSelectvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function vsSelectvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { vsSelectvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { vsSelectvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsSelectvue_type_script_lang_js_ = ({
  name: "VsSelect",
  props: {
    value: {},
    noData: {
      default: "data no available",
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

      return vsSelectvue_type_script_lang_js_objectSpread({}, this.$listeners, {
        blur: function blur(event) {
          if (_this.autocomplete && event.relatedTarget ? !event.relatedTarget.closest(".vs-select--options") : false) {
            _this.closeOptions();
          }

          _this.$emit("blur", event);
        },
        focus: function focus(event) {
          _this.$emit("focus", event); //document.removeEventListener('click',this.clickBlur)


          _this.focus(event);
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
          this.changeValue(); // this.$refs.inputselect.value += ','

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
      this.setLabelClass(this.$refs.inputSelectLabel, true);
      var inputx = this.$refs.inputselect;
      setTimeout(function () {
        document.addEventListener("click", _this4.clickBlur);
      }, 250);

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
      var closestx = event.target.closest(".vs-select--options");

      if (!closestx) {
        this.closeOptions();

        if (this.autocomplete) {
          this.filterItems("");
        }

        this.changeValue();
      }
    },
    closeOptions: function closeOptions() {
      // this.$refs.inputselect.blur()
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
// CONCATENATED MODULE: ./src/components/vsSelect/vsSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsSelect_vsSelectvue_type_script_lang_js_ = (vsSelectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsSelect/vsSelect.vue





/* normalize component */

var vsSelect_component = normalizeComponent(
  vsSelect_vsSelectvue_type_script_lang_js_,
  vsSelectvue_type_template_id_642ca932_lang_html_render,
  vsSelectvue_type_template_id_642ca932_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsSelect = (vsSelect_component.exports);
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSelect/vsSelectItem.vue?vue&type=template&id=681b8e3f&lang=html&
var vsSelectItemvue_type_template_id_681b8e3f_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',_vm._g({directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"vs-component",attrs:{"data-text":_vm.text}},_vm.listeners),[_c('button',_vm._b({ref:"item",staticClass:"vs-select--item",class:{
      'activex':_vm.$parent.parent.multiple?_vm.getValue.indexOf(_vm.value) != -1:_vm.getValue == _vm.value,
      'con-icon':_vm.$parent.parent.multiple,
      'disabledx':_vm.disabledx
    },style:(_vm.styles),attrs:{"disabled":_vm.disabled,"type":"button","name":"button"},on:{"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"backspace",undefined,$event.key,undefined)){ return null; }$event.preventDefault();return _vm.backspace($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();return _vm.navigateOptions('next')},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();return _vm.navigateOptions('prev')},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();return _vm.clickOption()}]}},'button',_vm.$attrs,false),[(_vm.$parent.parent.multiple)?_c('vs-icon',{staticClass:"icon-item vs-select--item-icon",attrs:{"icon":"check_circle"}}):_vm._e(),_c('span',{domProps:{"innerHTML":_vm._s(_vm.getText)}})],1)])}
var vsSelectItemvue_type_template_id_681b8e3f_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsSelect/vsSelectItem.vue?vue&type=template&id=681b8e3f&lang=html&

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __webpack_require__("1492");

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("2ace");

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSelect/vsSelectItem.vue?vue&type=script&lang=js&



















function vsSelectItemvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function vsSelectItemvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { vsSelectItemvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { vsSelectItemvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsSelectItemvue_type_script_lang_js_ = ({
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

      return vsSelectItemvue_type_script_lang_js_objectSpread({}, this.$listeners, {
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
// CONCATENATED MODULE: ./src/components/vsSelect/vsSelectItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsSelect_vsSelectItemvue_type_script_lang_js_ = (vsSelectItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsSelect/vsSelectItem.vue





/* normalize component */

var vsSelectItem_component = normalizeComponent(
  vsSelect_vsSelectItemvue_type_script_lang_js_,
  vsSelectItemvue_type_template_id_681b8e3f_lang_html_render,
  vsSelectItemvue_type_template_id_681b8e3f_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsSelectItem = (vsSelectItem_component.exports);
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSelect/vsSelectGroup.vue?vue&type=template&id=a11ab50e&
var vsSelectGroupvue_type_template_id_a11ab50e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-select-group"},[(!_vm.filterx)?_c('h4',[_vm._v(_vm._s(_vm.title))]):_vm._e(),_vm._t("default")],2)}
var vsSelectGroupvue_type_template_id_a11ab50e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsSelect/vsSelectGroup.vue?vue&type=template&id=a11ab50e&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSelect/vsSelectGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var vsSelectGroupvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/components/vsSelect/vsSelectGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsSelect_vsSelectGroupvue_type_script_lang_js_ = (vsSelectGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsSelect/vsSelectGroup.vue





/* normalize component */

var vsSelectGroup_component = normalizeComponent(
  vsSelect_vsSelectGroupvue_type_script_lang_js_,
  vsSelectGroupvue_type_template_id_a11ab50e_render,
  vsSelectGroupvue_type_template_id_a11ab50e_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSwitch/vsSwitch.vue?vue&type=template&id=1c63889c&lang=html&
var vsSwitchvue_type_template_id_1c63889c_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',_vm._b({staticClass:"vs-component vs-switch",class:[
    ("vs-switch-" + _vm.color),
    {
      'vs-switch-active':_vm.isChecked || _vm.$attrs.checked
    }
  ],style:(_vm.style)},'button',_vm.$attrs,false),[_c('input',_vm._g(_vm._b({ref:"inputCheckbox",staticClass:"input-switch vs-switch--input",attrs:{"disabled":_vm.$attrs.disabled,"type":"checkbox"},domProps:{"value":_vm.value}},'input',_vm.$attrs,false),_vm.listeners)),_c('span',{ref:"on",staticClass:"text-on text-switch vs-switch--text",class:{'active-text':_vm.isChecked || _vm.$attrs.checked}},[_vm._t("on"),_c('vs-icon',{staticClass:"icons-switch vs-switch--icon",attrs:{"icon-pack":_vm.iconPack,"icon":_vm.vsIconOn || _vm.vsIcon}})],2),_c('span',{ref:"off",staticClass:"text-off text-switch vs-switch--text",class:{'active-text':!_vm.isChecked && !_vm.$attrs.checked}},[_vm._t("off"),_c('vs-icon',{staticClass:"icons-switch vs-switch--icon",attrs:{"icon-pack":_vm.iconPack,"icon":_vm.vsIconOff || _vm.vsIcon}})],2),_c('span',{staticClass:"vs-circle-switch vs-switch--circle"})])}
var vsSwitchvue_type_template_id_1c63889c_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsSwitch/vsSwitch.vue?vue&type=template&id=1c63889c&lang=html&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSwitch/vsSwitch.vue?vue&type=script&lang=js&














function vsSwitchvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function vsSwitchvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { vsSwitchvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { vsSwitchvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsSwitchvue_type_script_lang_js_ = ({
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

      return vsSwitchvue_type_script_lang_js_objectSpread({}, this.$listeners, {
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
// CONCATENATED MODULE: ./src/components/vsSwitch/vsSwitch.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsSwitch_vsSwitchvue_type_script_lang_js_ = (vsSwitchvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsSwitch/vsSwitch.vue





/* normalize component */

var vsSwitch_component = normalizeComponent(
  vsSwitch_vsSwitchvue_type_script_lang_js_,
  vsSwitchvue_type_template_id_1c63889c_lang_html_render,
  vsSwitchvue_type_template_id_1c63889c_lang_html_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsCheckBox/vsCheckBox.vue?vue&type=template&id=5410a43c&lang=html&
var vsCheckBoxvue_type_template_id_5410a43c_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-component con-vs-checkbox",class:[("vs-checkbox-" + _vm.color), ("vs-checkbox-" + _vm.size)]},[_c('input',_vm._g(_vm._b({staticClass:"vs-checkbox--input",attrs:{"type":"checkbox"},domProps:{"checked":_vm.isChecked || _vm.$attrs.checked,"value":_vm.value}},'input',_vm.$attrs,false),_vm.listeners)),_c('span',{staticClass:"checkbox_x vs-checkbox",style:(_vm.style)},[_c('span',{staticClass:"vs-checkbox--check",style:(_vm.style_check)},[_c('vs-icon',{staticClass:"vs-checkbox--icon ",attrs:{"icon":_vm.icon,"icon-pack":_vm.iconPack}})],1)]),_c('span',{staticClass:"con-slot-label"},[_vm._t("default")],2)])}
var vsCheckBoxvue_type_template_id_5410a43c_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsCheckBox/vsCheckBox.vue?vue&type=template&id=5410a43c&lang=html&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsCheckBox/vsCheckBox.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsCheckBoxvue_type_script_lang_js_ = ({
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
        } // input: (evt) => {
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
// CONCATENATED MODULE: ./src/components/vsCheckBox/vsCheckBox.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsCheckBox_vsCheckBoxvue_type_script_lang_js_ = (vsCheckBoxvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsCheckBox/vsCheckBox.vue





/* normalize component */

var vsCheckBox_component = normalizeComponent(
  vsCheckBox_vsCheckBoxvue_type_script_lang_js_,
  vsCheckBoxvue_type_template_id_5410a43c_lang_html_render,
  vsCheckBoxvue_type_template_id_5410a43c_lang_html_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsRadio/vsRadio.vue?vue&type=template&id=a06cc310&lang=html&
var vsRadiovue_type_template_id_a06cc310_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"vs-component con-vs-radio",class:[("vs-radio-" + _vm.color)]},[_c('input',_vm._g(_vm._b({staticClass:"vs-radio--input",attrs:{"name":_vm.vsName || _vm.value,"type":"radio"},domProps:{"checked":_vm.isChecked,"value":_vm.value}},'input',_vm.$attrs,false),_vm.listeners)),_c('span',{staticClass:"vs-radio"},[_c('span',{staticClass:"vs-radio--borde",style:(_vm.styles)}),_c('span',{staticClass:"vs-radio--circle",style:(_vm.styleCircle)})]),_c('span',{staticClass:"vs-radio--label"},[_vm._t("default")],2)])}
var vsRadiovue_type_template_id_a06cc310_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsRadio/vsRadio.vue?vue&type=template&id=a06cc310&lang=html&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsRadio/vsRadio.vue?vue&type=script&lang=js&









function vsRadiovue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function vsRadiovue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { vsRadiovue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { vsRadiovue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsRadiovue_type_script_lang_js_ = ({
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

      return vsRadiovue_type_script_lang_js_objectSpread({}, this.$listeners, {
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
// CONCATENATED MODULE: ./src/components/vsRadio/vsRadio.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsRadio_vsRadiovue_type_script_lang_js_ = (vsRadiovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsRadio/vsRadio.vue





/* normalize component */

var vsRadio_component = normalizeComponent(
  vsRadio_vsRadiovue_type_script_lang_js_,
  vsRadiovue_type_template_id_a06cc310_lang_html_render,
  vsRadiovue_type_template_id_a06cc310_lang_html_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsInput/vsInput.vue?vue&type=template&id=556e299f&lang=html&
var vsInputvue_type_template_id_556e299f_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"coninput",staticClass:"vs-component vs-con-input-label vs-input",class:[
    ("vs-input-" + _vm.color),
    {
      isFocus: _vm.isFocus,
      'input-icon-validate-success': _vm.success,
      'input-icon-validate-danger': _vm.danger,
      'input-icon-validate-warning': _vm.warning,
      'is-label-placeholder': _vm.labelPlaceholder
    }
  ],style:(_vm.styleLabel)},[(_vm.labelPlaceholder ? false : _vm.label)?_c('label',{staticClass:"vs-input--label",attrs:{"for":""},on:{"click":_vm.focusInput}},[_vm._v(_vm._s(_vm.label))]):_vm._e(),_c('div',{staticClass:"vs-con-input"},[_c('input',_vm._g(_vm._b({ref:"vsinput",staticClass:"vs-inputx vs-input--input",class:[
        _vm.size,
        {
          hasValue: _vm.value !== '',
          hasIcon: _vm.icon,
          'icon-after-input': _vm.iconAfter
        }
      ],style:(_vm.style),attrs:{"autofocus":_vm.autofocus,"placeholder":null,"type":_vm.$attrs.type ? _vm.$attrs.type : 'text'},domProps:{"value":_vm.value}},'input',_vm.$attrs,false),_vm.listeners)),_c('transition',{attrs:{"name":"placeholderx"}},[(_vm.isValue && (_vm.labelPlaceholder || _vm.$attrs.placeholder))?_c('span',{ref:"spanplaceholder",staticClass:"input-span-placeholder vs-input--placeholder",class:[
          _vm.labelPlaceholder && _vm.size,
          _vm.size,
          {
            'vs-placeholder-label': _vm.labelPlaceholder
          }
        ],style:(_vm.styleLabel),on:{"click":_vm.focusInput}},[_vm._v(" "+_vm._s(_vm.$attrs.placeholder || _vm.labelPlaceholder)+" ")]):_vm._e()]),(_vm.icon)?_c('vs-icon',{staticClass:"icon-inputx notranslate vs-input--icon",class:{ 'icon-after': _vm.iconAfter, 'icon-no-border': _vm.iconNoBorder },attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon},on:{"click":_vm.focusInput}}):_vm._e(),_c('transition',{attrs:{"name":"icon-validate"}},[(_vm.success || _vm.danger || _vm.warning)?_c('span',{staticClass:"input-icon-validate vs-input--icon-validate",class:{ 'icon-before': _vm.iconAfter }},[_c('vs-icon',{class:{ 'icon-before': _vm.iconAfter },attrs:{"val-icon-pack":_vm.valIconPack,"icon":_vm.getIcon}})],1):_vm._e()])],1),_c('transition-group',{on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"leave":_vm.leave}},[(_vm.success)?_c('div',{key:"success",staticClass:"con-text-validation vs-input--text-validation"},[_c('span',{staticClass:"span-text-validation span-text-validation-success vs-input--text-validation-span"},[_vm._v(" "+_vm._s(_vm.successText)+" ")])]):(_vm.danger)?_c('div',{key:"danger",staticClass:"con-text-validation span-text-validation-danger vs-input--text-validation-span"},[_c('span',{staticClass:"span-text-validation"},[_vm._v(" "+_vm._s(_vm.dangerText)+" ")])]):(_vm.warning)?_c('div',{key:"warning",staticClass:"con-text-validation span-text-validation-warning vs-input--text-validation-span"},[_c('span',{staticClass:"span-text-validation"},[_vm._v(" "+_vm._s(_vm.warningText)+" ")])]):_vm._e(),(_vm.descriptionText)?_c('div',{key:"description",staticClass:"con-text-validation span-text-validation vs-input--text-validation-span"},[_c('span',{staticClass:"span-text-validation"},[_vm._v(" "+_vm._s(_vm.descriptionText)+" ")])]):_vm._e()])],1)}
var vsInputvue_type_template_id_556e299f_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsInput/vsInput.vue?vue&type=template&id=556e299f&lang=html&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsInput/vsInput.vue?vue&type=script&lang=js&










function vsInputvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function vsInputvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { vsInputvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { vsInputvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsInputvue_type_script_lang_js_ = ({
  name: "VsInput",
  inheritAttrs: false,
  props: {
    value: {
      default: "",
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
      default: "material-icons",
      type: String
    },
    color: {
      default: "primary",
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
      default: "normal",
      type: String
    },
    valIconPack: {
      default: "material-icons",
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
      default: ""
    },
    elFormItem: {
      default: ""
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
        border: "1px solid ".concat(this.isFocus ? utils_color.getColor(this.color, 1) : "rgba(0, 0, 0,.2)")
      };
    },
    styleLabel: function styleLabel() {
      return {
        color: this.isFocus ? utils_color.getColor(this.color, 1) : null
      };
    },
    listeners: function listeners() {
      var _this = this;

      return vsInputvue_type_script_lang_js_objectSpread({}, this.$listeners, {
        input: function input(evt) {
          _this.$emit("input", evt.target.value);
        },
        focus: function focus(evt) {
          _this.$emit("focus", evt);

          _this.changeFocus(true);
        },
        blur: function blur(evt) {
          _this.$emit("blur", evt);

          _this.changeFocus(false);
        }
      });
    },
    isValue: function isValue() {
      return this.labelPlaceholder ? true : !this.value;
    },
    getIcon: function getIcon() {
      return this.danger ? this.valIconDanger : this.warning ? this.valIconWarning : this.success ? this.valIconSuccess : "";
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
      el.style.height = h + "px";
      done();
    },
    leave: function leave(el) {
      el.style.height = 0 + "px";
    },
    focusInput: function focusInput() {
      this.$refs.vsinput.focus();
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsInput/vsInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsInput_vsInputvue_type_script_lang_js_ = (vsInputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsInput/vsInput.vue





/* normalize component */

var vsInput_component = normalizeComponent(
  vsInput_vsInputvue_type_script_lang_js_,
  vsInputvue_type_template_id_556e299f_lang_html_render,
  vsInputvue_type_template_id_556e299f_lang_html_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTabs/vsTabs.vue?vue&type=template&id=768052da&lang=html&
var vsTabsvue_type_template_id_768052da_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-vs-tabs vs-tabs",class:[("vs-tabs-" + _vm.color),("vs-tabs-position-" + _vm.position)]},[_c('div',{staticClass:"con-ul-tabs"},[_c('ul',{ref:"ul",staticClass:"ul-tabs vs-tabs--ul",class:[("ul-tabs-" + _vm.alignment)]},_vm._l((_vm.children),function(child,index){return _c('li',{ref:"li",refInFor:true,staticClass:"vs-tabs--li",class:{'activeChild':_vm.childActive == index},style:(_vm.childActive == index ? _vm.styleTab : {}),on:{"mouseover":function($event){_vm.hover = true},"mouseout":function($event){_vm.hover = false}}},[_c('button',_vm._g(_vm._b({staticClass:"vs-tabs--btn",style:(_vm.styleAlignIcon(child.icon)),attrs:{"type":"button"},on:{"click":function($event){return _vm.activeChild(index)}}},'button',child.attrs,false),child.listeners),[(child.icon)?_c('vs-icon',{staticClass:"vs-tabs--btn-icon",attrs:{"icon-pack":child.iconPack,"icon":child.icon,"color":_vm.color}}):_vm._e(),(child.label)?_c('span',[_vm._v(_vm._s(child.label))]):_vm._e()],1),(child.tag)?_c('button',{staticClass:"vs-tabs--btn-tag",on:{"click":function($event){return _vm.clickTag(child)}}},[_c('vs-icon',{attrs:{"icon-pack":child.iconPack,"icon":child.tag,"color":child.tagColor}})],1):_vm._e()])}),0),_c('span',{staticClass:"line-vs-tabs",style:(_vm.stylex)})]),_c('div',{staticClass:"con-slot-tabs"},[_vm._t("default")],2)])}
var vsTabsvue_type_template_id_768052da_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsTabs/vsTabs.vue?vue&type=template&id=768052da&lang=html&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsIcon/vsIcon.vue?vue&type=template&id=3c591b9c&
var vsIconvue_type_template_id_3c591b9c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',_vm._g(_vm._b({staticClass:"vs-icon notranslate icon-scale",class:[_vm.iconPack, _vm.iconPack !='material-icons' ? _vm.icon : '',_vm.iconClass,_vm.getBg,_vm.getBgSize,{'round':_vm.round}],style:(_vm.iconStyle)},'i',_vm.$attrs,false),_vm.$listeners),[_vm._t("default",[_vm._v(_vm._s(_vm.iconPack == 'material-icons' ? _vm.icon : ''))])],2)}
var vsIconvue_type_template_id_3c591b9c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsIcon/vsIcon.vue?vue&type=template&id=3c591b9c&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsIcon/vsIcon.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsIconvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/components/vsIcon/vsIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsIcon_vsIconvue_type_script_lang_js_ = (vsIconvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsIcon/vsIcon.vue





/* normalize component */

var vsIcon_component = normalizeComponent(
  vsIcon_vsIconvue_type_script_lang_js_,
  vsIconvue_type_template_id_3c591b9c_render,
  vsIconvue_type_template_id_3c591b9c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsIcon = (vsIcon_component.exports);
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTabs/vsTabs.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var vsTabsvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/components/vsTabs/vsTabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsTabs_vsTabsvue_type_script_lang_js_ = (vsTabsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsTabs/vsTabs.vue





/* normalize component */

var vsTabs_component = normalizeComponent(
  vsTabs_vsTabsvue_type_script_lang_js_,
  vsTabsvue_type_template_id_768052da_lang_html_render,
  vsTabsvue_type_template_id_768052da_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsTabs = (vsTabs_component.exports);
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTabs/vsTab.vue?vue&type=template&id=25c49680&lang=html&
var vsTabvue_type_template_id_25c49680_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":_vm.invert?_vm.vertical?'fade-tab-vertical-invert':'fade-tab-invert':_vm.vertical?'fade-tab-vertical':'fade-tab'}},[(_vm.active)?_c('div',{staticClass:"con-tab vs-tabs--content"},[_vm._t("default")],2):_vm._e()])}
var vsTabvue_type_template_id_25c49680_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsTabs/vsTab.vue?vue&type=template&id=25c49680&lang=html&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTabs/vsTab.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsTabvue_type_script_lang_js_ = ({
  name: "VsTab",
  inheritAttrs: false,
  props: {
    label: {
      default: "Label",
      type: String
    },
    icon: {
      default: "",
      type: String
    },
    tag: {
      default: "",
      type: String
    },
    iconPack: {
      type: String,
      default: "material-icons"
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
    $attrs: function $attrs(val) {
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
// CONCATENATED MODULE: ./src/components/vsTabs/vsTab.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsTabs_vsTabvue_type_script_lang_js_ = (vsTabvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsTabs/vsTab.vue





/* normalize component */

var vsTab_component = normalizeComponent(
  vsTabs_vsTabvue_type_script_lang_js_,
  vsTabvue_type_template_id_25c49680_lang_html_render,
  vsTabvue_type_template_id_25c49680_lang_html_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSlider/vsSlider.vue?vue&type=template&id=7c7ae4d2&lang=html&
var vsSlidervue_type_template_id_7c7ae4d2_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-vs-slider",class:[
    ("vs-slider-" + _vm.color),
    {'disabledx':_vm.disabled}
  ],on:{"mousewheel":function($event){$event.preventDefault();return _vm.mousewheelx($event)},"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"])){ return null; }if('button' in $event && $event.button !== 0){ return null; }return _vm.keydownLeft($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"right",39,$event.key,["Right","ArrowRight"])){ return null; }if('button' in $event && $event.button !== 2){ return null; }return _vm.keydownRight($event)}]}},[_c('button',{ref:"slider",staticClass:"vs-slider",attrs:{"disabled":_vm.disabled},on:{"click":function($event){_vm.clickSlider($event),_vm.actived = true}}},[_c('span',{staticClass:"vs-slider-line-one",class:{'hasTransition':_vm.effect},style:(_vm.styleLineOne)}),_c('span',{staticClass:"vs-slider-line-two"}),_c('span',{staticClass:"vs-slider-line-efect",class:{'run-effect':_vm.effect},style:(_vm.styleEfect)}),_vm._l((_vm.countTicks),function(tick,index){return (_vm.ticks&&tick)?_c('span',{staticClass:"vs-slider--tick",class:{'isEnd':index == _vm.countTicks-1},style:(_vm.styleTicks(index))}):_vm._e()})],2),_c('button',{ref:"circle1",staticClass:"vs-circle-slider vs-circles-slider vs-slider--circles vs-slider--circle",class:{
      'hasTransition':_vm.effect,
      'isEquals':_vm.isEquals,
      'changeValue':_vm.changeValue,
      'isEndValue':_vm.value == _vm.max
    },style:(_vm.styleCircle),attrs:{"disabled":_vm.disabled},on:{"touchstart":function($event){_vm.activeFocus($event),_vm.actived = true},"mousedown":function($event){_vm.activeFocus($event),_vm.actived = true}}},[_c('span',{staticClass:"text-circle-slider vs-slider--circle-text",style:(_vm.styleText)},[_vm._v(" "+_vm._s(_vm.valueCircle1)+" "),(_vm.textFixed)?_c('span',[_vm._v(" "+_vm._s(_vm.textFixed)+" ")]):_vm._e(),_c('vs-icon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon}})],1)]),(Array.isArray(_vm.value))?_c('button',{ref:"circle2",staticClass:"vs-circle-slider-two vs-circles-slider vs-slider--circles vs-slider--circle-two",class:{
      'hasTransition':_vm.effect,
      'isEquals':_vm.isEquals,
      'changeValue':_vm.changeValue,
      'isEndValue':_vm.value == _vm.max
    },style:(_vm.styleCircleTwo),attrs:{"disabled":_vm.disabled},on:{"touchstart":function($event){_vm.activeFocus($event),_vm.two = true,_vm.actived = true},"mousedown":function($event){_vm.activeFocus($event),_vm.two = true,_vm.actived = true}}},[_c('span',{staticClass:"text-circle-slider vs-slider--circle-text",style:(_vm.styleText)},[_vm._v(" "+_vm._s(_vm.valueCircle2)+" "),(_vm.textFixed)?_c('span',[_vm._v(" "+_vm._s(_vm.textFixed)+" ")]):_vm._e(),(_vm.icon)?_c('i',{staticClass:"material-icons notranslate",attrs:{"translate":"no"}},[_vm._v(" "+_vm._s(_vm.icon)+" ")]):_vm._e()])]):_vm._e()])}
var vsSlidervue_type_template_id_7c7ae4d2_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsSlider/vsSlider.vue?vue&type=template&id=7c7ae4d2&lang=html&

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.math.sign.js
var es_math_sign = __webpack_require__("5fa1");

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__("ac5d");

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.parse-float.js
var es_parse_float = __webpack_require__("77be");

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSlider/vsSlider.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsSlidervue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/components/vsSlider/vsSlider.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsSlider_vsSlidervue_type_script_lang_js_ = (vsSlidervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsSlider/vsSlider.vue





/* normalize component */

var vsSlider_component = normalizeComponent(
  vsSlider_vsSlidervue_type_script_lang_js_,
  vsSlidervue_type_template_id_7c7ae4d2_lang_html_render,
  vsSlidervue_type_template_id_7c7ae4d2_lang_html_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsInputNumber/vsInputNumber.vue?vue&type=template&id=6f7c008c&lang=html&
var vsInputNumbervue_type_template_id_6f7c008c_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-input-number",class:[
    ("vs-input-number-size-" + _vm.size),
    ("vs-input-number-" + _vm.color),
    {'isChangeValue':_vm.isChangeValue}
  ]},[_c('button',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.less),expression:"less"}],staticClass:"btn-less vs-input-number--button-less",class:{
      limit:_vm.value <= _vm.min
    },style:({
      background:_vm.getColor
    }),attrs:{"disabled":_vm.$attrs.disabled,"type":"button"}},[_c('vs-icon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.iconDec}})],1),(_vm.label)?_c('span',[_vm._v(_vm._s(_vm.label))]):_vm._e(),_c('input',_vm._g(_vm._b({ref:"input",staticClass:"vs-input-number--input",style:(_vm.styleInput),attrs:{"disabled":_vm.isDisabled,"min":_vm.min,"max":_vm.max,"type":"number"},domProps:{"value":_vm.value}},'input',_vm.$attrs,false),_vm.listeners)),_c('button',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.plus),expression:"plus"}],staticClass:"btn-plus vs-input-number--button-plus",class:{
      limit:_vm.value >= _vm.max && _vm.max !== null
    },style:({
      background:_vm.getColor
    }),attrs:{"disabled":_vm.$attrs.disabled,"type":"button"}},[_c('vs-icon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.iconInc}})],1)])}
var vsInputNumbervue_type_template_id_6f7c008c_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsInputNumber/vsInputNumber.vue?vue&type=template&id=6f7c008c&lang=html&

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.date.to-string.js
var es_date_to_string = __webpack_require__("26d0");

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/os-browserify/browser.js
var browser = __webpack_require__("3b24");

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsInputNumber/vsInputNumber.vue?vue&type=script&lang=js&














function vsInputNumbervue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function vsInputNumbervue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { vsInputNumbervue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { vsInputNumbervue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var vsInputNumbervue_type_script_lang_js_ = ({
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

      return vsInputNumbervue_type_script_lang_js_objectSpread({}, this.$listeners, {
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
        this.$emit('input', newValue);
      } else {
        if (this.max ? parseFloat(this.value) < parseFloat(this.max) : true) {
          newValue = parseFloat(this.value) + parseFloat(this.step);
          this.$emit('input', newValue);
        }
      }
    },
    less: function less() {
      var newValue;

      if (this.value === '') {
        newValue = 0;
        this.$emit('input', newValue);
      } else {
        if (this.min ? parseFloat(this.value) > parseFloat(this.min) : true) {
          newValue = parseFloat(this.value) - parseFloat(this.step);
          this.$emit('input', newValue);
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsInputNumber/vsInputNumber.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsInputNumber_vsInputNumbervue_type_script_lang_js_ = (vsInputNumbervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsInputNumber/vsInputNumber.vue





/* normalize component */

var vsInputNumber_component = normalizeComponent(
  vsInputNumber_vsInputNumbervue_type_script_lang_js_,
  vsInputNumbervue_type_template_id_6f7c008c_lang_html_render,
  vsInputNumbervue_type_template_id_6f7c008c_lang_html_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTooltip/vsTooltip.vue?vue&type=template&id=482beb62&
var vsTooltipvue_type_template_id_482beb62_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"convstooltip",staticClass:"con-vs-tooltip",on:{"mouseleave":_vm.mouseleavex,"mouseenter":_vm.mouseenterx}},[_c('transition',{attrs:{"name":"tooltip-fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.activeTooltip),expression:"activeTooltip"}],ref:"vstooltip",staticClass:"vs-tooltip",class:[("vs-tooltip-" + (_vm.positionx || _vm.position)),("vs-tooltip-" + _vm.color), {'after-none': _vm.noneAfter}],style:(_vm.style)},[(_vm.title)?_c('h4',[_vm._v(_vm._s(_vm.title))]):_vm._e(),_vm._v(" "+_vm._s(_vm.text)+" ")])]),_vm._t("default")],2)}
var vsTooltipvue_type_template_id_482beb62_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsTooltip/vsTooltip.vue?vue&type=template&id=482beb62&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTooltip/vsTooltip.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var vsTooltipvue_type_script_lang_js_ = ({
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
    }
  },
  data: function data() {
    return {
      cords: {},
      activeTooltip: false,
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
  mounted: function mounted() {// utils.insertBody(this.$refs.vstooltip)
  },
  updated: function updated() {
    var nodes = this.$refs.convstooltip.childNodes.length;

    if (nodes === 1) {
      this.activeTooltip = false;
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
// CONCATENATED MODULE: ./src/components/vsTooltip/vsTooltip.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsTooltip_vsTooltipvue_type_script_lang_js_ = (vsTooltipvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsTooltip/vsTooltip.vue





/* normalize component */

var vsTooltip_component = normalizeComponent(
  vsTooltip_vsTooltipvue_type_script_lang_js_,
  vsTooltipvue_type_template_id_482beb62_render,
  vsTooltipvue_type_template_id_482beb62_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsUpload/vsUpload.vue?vue&type=template&id=4c2b5e72&
var vsUploadvue_type_template_id_4c2b5e72_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-upload"},[(_vm.viewActive)?_c('view-upload',{attrs:{"src":_vm.viewSrc}}):_vm._e(),_c('div',{staticClass:"con-img-upload"},[_vm._l((_vm.getFilesFilter),function(img,index){return _c('div',{key:index,staticClass:"img-upload",class:{
        'fileError':img.error,
        'removeItem':_vm.itemRemove.includes(index)
      }},[_c('button',{staticClass:"btn-x-file",attrs:{"type":"button"},on:{"click":function($event){return _vm.removeFile(index)}}},[_c('i',{staticClass:"material-icons notranslate",attrs:{"translate":"no"}},[_vm._v(" clear ")])]),(_vm.showUploadButton)?_c('button',{staticClass:"btn-upload-file",class:{
          'on-progress':img.percent,
          'ready-progress':img.percent >= 100
        },style:({
          height: ((img.percent) + "%")
        }),on:{"click":function($event){return _vm.upload(index)}}},[_c('i',{staticClass:"material-icons notranslate",attrs:{"translate":"no"}},[_vm._v(" "+_vm._s(img.percent >= 100?img.error?'report_problem':'cloud_done':'cloud_upload')+" ")]),_c('span',[_vm._v(_vm._s(img.percent)+" %")])]):_vm._e(),(img.src)?_c('img',{key:index,style:({
          maxWidth:img.orientation == 'h'?'100%':'none',
          maxHeight:img.orientation == 'w'?'100%':'none'
        }),attrs:{"src":img.src},on:{"touchend":function($event){return _vm.viewImage(img.src,$event)},"click":function($event){return _vm.viewImage(img.src,$event)}}}):_vm._e(),(!img.src)?_c('h4',{staticClass:"text-archive"},[_c('i',{staticClass:"material-icons notranslate",attrs:{"translate":"no"}},[_vm._v(" description ")]),_c('span',[_vm._v(" "+_vm._s(img.name)+" ")])]):_vm._e()])}),_c('div',{staticClass:"con-input-upload",class:{
        'on-progress-all-upload':_vm.percent != 0,
        'is-ready-all-upload':_vm.percent >= 100,
        'disabled-upload':_vm.$attrs.hasOwnProperty('disabled') || _vm.limit?(_vm.srcs.length - _vm.itemRemove.length) >= Number(_vm.limit):false
      }},[_c('input',_vm._b({ref:"fileInput",attrs:{"disabled":_vm.$attrs.disabled || _vm.limit?(_vm.srcs.length - _vm.itemRemove.length) >= Number(_vm.limit):false,"type":"file"},on:{"change":_vm.getFiles}},'input',_vm.$attrs,false)),_c('span',{staticClass:"text-input"},[_vm._v(" "+_vm._s(_vm.text)+" ")]),_c('span',{staticClass:"input-progress",style:({
          width:(_vm.percent + "%")
        })}),(_vm.showUploadButton)?_c('button',{staticClass:"btn-upload-all vs-upload--button-upload",attrs:{"disabled":_vm.filesx.length == 0,"type":"button","title":"Upload"},on:{"click":function($event){return _vm.upload('all')}}},[_c('i',{staticClass:"material-icons notranslate",attrs:{"translate":"no"}},[_vm._v(" cloud_upload ")])]):_vm._e()])],2)],1)}
var vsUploadvue_type_template_id_4c2b5e72_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsUpload/vsUpload.vue?vue&type=template&id=4c2b5e72&

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.math.trunc.js
var es_math_trunc = __webpack_require__("5ca3");

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsUpload/viewUpload.vue?vue&type=template&id=59baff2a&
var viewUploadvue_type_template_id_59baff2a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"view-upload"}},[_c('div',{ref:"view",staticClass:"view-upload",on:{"click":_vm.closeView}},[_c('img',{attrs:{"src":_vm.src,"alt":"image"}})])])}
var viewUploadvue_type_template_id_59baff2a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsUpload/viewUpload.vue?vue&type=template&id=59baff2a&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsUpload/viewUpload.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var viewUploadvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/components/vsUpload/viewUpload.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsUpload_viewUploadvue_type_script_lang_js_ = (viewUploadvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsUpload/viewUpload.vue





/* normalize component */

var viewUpload_component = normalizeComponent(
  vsUpload_viewUploadvue_type_script_lang_js_,
  viewUploadvue_type_template_id_59baff2a_render,
  viewUploadvue_type_template_id_59baff2a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var viewUpload = (viewUpload_component.exports);
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsUpload/vsUpload.vue?vue&type=script&lang=js&








//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var lastTap = 0;
/* harmony default export */ var vsUploadvue_type_script_lang_js_ = ({
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
        return !item.hasOwnProperty('remove');
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
          return !item.hasOwnProperty('remove');
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
// CONCATENATED MODULE: ./src/components/vsUpload/vsUpload.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsUpload_vsUploadvue_type_script_lang_js_ = (vsUploadvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsUpload/vsUpload.vue





/* normalize component */

var vsUpload_component = normalizeComponent(
  vsUpload_vsUploadvue_type_script_lang_js_,
  vsUploadvue_type_template_id_4c2b5e72_render,
  vsUploadvue_type_template_id_4c2b5e72_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsPopup/vsPopup.vue?vue&type=template&id=3a9785ac&lang=html&
var vsPopupvue_type_template_id_3a9785ac_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"popup-t"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}],ref:"con",staticClass:"vs-component con-vs-popup",class:[("vs-popup-" + _vm.color),{'fullscreen':_vm.fullscreen}],on:{"click":function($event){return _vm.close($event,true)}}},[_c('div',{staticClass:"vs-popup--background",style:(_vm.styleCon)}),_c('div',{ref:"popupx",staticClass:"vs-popup",style:(_vm.stylePopup)},[_c('header',{staticClass:"vs-popup--header",style:(_vm.styleHeader)},[_c('div',{staticClass:"vs-popup--title"},[_c('h3',[_vm._v(_vm._s(_vm.title))])]),(!_vm.buttonCloseHidden)?_c('vs-icon',{ref:"btnclose",staticClass:"vs-popup--close vs-popup--close--icon",style:(_vm.stylePopup),attrs:{"icon-pack":_vm.iconPack,"icon":_vm.iconClose},on:{"click":_vm.close}}):_vm._e()],1),_c('div',{staticClass:"vs-popup--content",class:_vm.classContent,style:(_vm.styleContent)},[_vm._t("default")],2)])])])}
var vsPopupvue_type_template_id_3a9785ac_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsPopup/vsPopup.vue?vue&type=template&id=3a9785ac&lang=html&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsPopup/vsPopup.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsPopupvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/components/vsPopup/vsPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsPopup_vsPopupvue_type_script_lang_js_ = (vsPopupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsPopup/vsPopup.vue





/* normalize component */

var vsPopup_component = normalizeComponent(
  vsPopup_vsPopupvue_type_script_lang_js_,
  vsPopupvue_type_template_id_3a9785ac_lang_html_render,
  vsPopupvue_type_template_id_3a9785ac_lang_html_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsAlert/vsAlert.vue?vue&type=template&id=863593c0&lang=html&
var vsAlertvue_type_template_id_863593c0_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"leave":_vm.leave}},[(_vm.active)?_c('div',_vm._g(_vm._b({ref:"alert",staticClass:"con-vs-alert",class:[("con-vs-alert-" + _vm.color),{
      'con-icon':_vm.icon,
    }],style:(_vm.styleAlert)},'div',_vm.$attrs,false),_vm.$listeners),[(_vm.closable)?_c('div',{staticClass:"con-x vs-alert--close",on:{"click":function($event){return _vm.$emit('update:active',false)}}},[_c('vs-icon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.closeIcon}})],1):_vm._e(),(_vm.title)?_c('h4',{staticClass:"titlex vs-alert--title",style:(_vm.styleTitle)},[_vm._v(_vm._s(_vm.title))]):_vm._e(),_c('div',{staticClass:"vs-alert",class:{'con-icon': _vm.icon}},[(_vm.icon)?_c('vs-icon',{staticClass:"icon-alert",attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon}}):_vm._e(),_vm._t("default")],2)]):_vm._e()])}
var vsAlertvue_type_template_id_863593c0_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsAlert/vsAlert.vue?vue&type=template&id=863593c0&lang=html&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsAlert/vsAlert.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsAlertvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/components/vsAlert/vsAlert.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsAlert_vsAlertvue_type_script_lang_js_ = (vsAlertvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsAlert/vsAlert.vue





/* normalize component */

var vsAlert_component = normalizeComponent(
  vsAlert_vsAlertvue_type_script_lang_js_,
  vsAlertvue_type_template_id_863593c0_lang_html_render,
  vsAlertvue_type_template_id_863593c0_lang_html_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsChip/vsChip.vue?vue&type=template&id=4cec4c83&lang=html&
var vsChipvue_type_template_id_4cec4c83_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-vs-chip",class:[
    ("vs-chip-" + _vm.color),
    {
      'closable': _vm.closable,
      'con-color': _vm.color,
      'bg-chip-transparent': _vm.transparent
    }
  ],style:(_vm.styleChip)},[_c('span',{staticClass:"text-chip vs-chip--text"},[_vm._t("default")],2),(_vm.closable)?_c('button',{staticClass:"btn-close vs-chip--close",attrs:{"type":"button"},on:{"click":_vm.closeChip}},[_c('vs-icon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.closeIcon}})],1):_vm._e()])}
var vsChipvue_type_template_id_4cec4c83_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsChip/vsChip.vue?vue&type=template&id=4cec4c83&lang=html&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsChip/vsChip.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsChipvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/components/vsChip/vsChip.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsChip_vsChipvue_type_script_lang_js_ = (vsChipvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsChip/vsChip.vue





/* normalize component */

var vsChip_component = normalizeComponent(
  vsChip_vsChipvue_type_script_lang_js_,
  vsChipvue_type_template_id_4cec4c83_lang_html_render,
  vsChipvue_type_template_id_4cec4c83_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsChip = (vsChip_component.exports);
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsChip/vsChips.vue?vue&type=template&id=5a8a51d4&lang=html&
var vsChipsvue_type_template_id_5a8a51d4_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_c('div',{staticClass:"con-chips",class:{'no-items':_vm.value.length==0}},[_vm._t("default"),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.newChip),expression:"newChip"}],staticClass:"con-chips--input",attrs:{"placeholder":_vm.value.length>0?null:_vm.placeholder,"type":"text"},domProps:{"value":(_vm.newChip)},on:{"keypress":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.addItem($event)},"input":function($event){if($event.target.composing){ return; }_vm.newChip=$event.target.value}}}),_c('div',{staticClass:"x-global con-chips--remove-all",on:{"click":_vm.removeTotalItems}},[_c('vs-icon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.removeIcon}})],1)],2)])}
var vsChipsvue_type_template_id_5a8a51d4_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsChip/vsChips.vue?vue&type=template&id=5a8a51d4&lang=html&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsChip/vsChips.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsChipsvue_type_script_lang_js_ = ({
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
      chip1: true,
      itemsx: this.items
    };
  },
  methods: {
    addItem: function addItem() {
      // this.itemsx.push(this.newChip)
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
// CONCATENATED MODULE: ./src/components/vsChip/vsChips.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsChip_vsChipsvue_type_script_lang_js_ = (vsChipsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsChip/vsChips.vue





/* normalize component */

var vsChips_component = normalizeComponent(
  vsChip_vsChipsvue_type_script_lang_js_,
  vsChipsvue_type_template_id_5a8a51d4_lang_html_render,
  vsChipsvue_type_template_id_5a8a51d4_lang_html_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsProgress/vsProgress.vue?vue&type=template&id=4dadb927&lang=html&
var vsProgressvue_type_template_id_4dadb927_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-progress--background",class:[("vs-progress-" + _vm.color),{
    'indeterminate':_vm.indeterminate,
  }],style:(_vm.styleConProgress)},[_c('div',{staticClass:"vs-progress--foreground",style:(_vm.styleProgress)}),(_vm.indeterminate)?_c('div',{staticClass:"vs-progress--indeterminate",style:(_vm.styleProgress)}):_vm._e()])}
var vsProgressvue_type_template_id_4dadb927_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsProgress/vsProgress.vue?vue&type=template&id=4dadb927&lang=html&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsProgress/vsProgress.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsProgressvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/components/vsProgress/vsProgress.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsProgress_vsProgressvue_type_script_lang_js_ = (vsProgressvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsProgress/vsProgress.vue





/* normalize component */

var vsProgress_component = normalizeComponent(
  vsProgress_vsProgressvue_type_script_lang_js_,
  vsProgressvue_type_template_id_4dadb927_lang_html_render,
  vsProgressvue_type_template_id_4dadb927_lang_html_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsCard/vsCard.vue?vue&type=template&id=05c15e2e&
var vsCardvue_type_template_id_05c15e2e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-vs-card",class:{'withHover': _vm.actionable, 'fixedHeight': _vm.fixedHeight }},[(_vm.hasSlot('header'))?_c('header',{staticClass:"vs-card--header"},[_vm._t("header")],2):_vm._e(),(_vm.hasSlot('media'))?_c('div',{staticClass:"vs-card--media"},[_vm._t("media")],2):_vm._e(),(_vm.hasSlot('default'))?_c('div',{staticClass:"vs-card--content",class:{'fixedHeight': _vm.fixedHeight }},[_vm._t("default")],2):_vm._e(),(_vm.hasSlot('extra-content'))?_c('div',{staticClass:"vs-card-extra--content"},[_vm._t("extra-content")],2):_vm._e(),(_vm.hasSlot('footer'))?_c('footer',{staticClass:"vs-card--footer",class:{'fixedHeight': _vm.fixedHeight }},[_vm._t("footer")],2):_vm._e()])}
var vsCardvue_type_template_id_05c15e2e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsCard/vsCard.vue?vue&type=template&id=05c15e2e&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsCard/vsCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsCardvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/components/vsCard/vsCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsCard_vsCardvue_type_script_lang_js_ = (vsCardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsCard/vsCard.vue





/* normalize component */

var vsCard_component = normalizeComponent(
  vsCard_vsCardvue_type_script_lang_js_,
  vsCardvue_type_template_id_05c15e2e_render,
  vsCardvue_type_template_id_05c15e2e_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsList/vsList.vue?vue&type=template&id=7d090653&lang=html&
var vsListvue_type_template_id_7d090653_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-list"},[_vm._t("default")],2)}
var vsListvue_type_template_id_7d090653_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsList/vsList.vue?vue&type=template&id=7d090653&lang=html&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsList/vsList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var vsListvue_type_script_lang_js_ = ({
  name: 'VsList'
});
// CONCATENATED MODULE: ./src/components/vsList/vsList.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsList_vsListvue_type_script_lang_js_ = (vsListvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsList/vsList.vue





/* normalize component */

var vsList_component = normalizeComponent(
  vsList_vsListvue_type_script_lang_js_,
  vsListvue_type_template_id_7d090653_lang_html_render,
  vsListvue_type_template_id_7d090653_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsList = (vsList_component.exports);
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsList/vsListItem.vue?vue&type=template&id=790e6aea&lang=html&
var vsListItemvue_type_template_id_790e6aea_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-list--item"},[(_vm.$slots.avatar)?_c('div',{staticClass:"vs-list--avatar"},[_vm._t("avatar")],2):_vm._e(),(_vm.icon)?_c('div',{staticClass:"vs-list--icon"},[_c('vs-icon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon}})],1):_vm._e(),_c('div',{staticClass:"list-titles"},[(_vm.title)?_c('div',{staticClass:"vs-list--title"},[_vm._v(_vm._s(_vm.title))]):_vm._e(),(_vm.subtitle)?_c('div',{staticClass:"vs-list--subtitle"},[_vm._v(_vm._s(_vm.subtitle))]):_vm._e()]),_c('div',{staticClass:"vs-list--slot"},[_vm._t("default")],2)])}
var vsListItemvue_type_template_id_790e6aea_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsList/vsListItem.vue?vue&type=template&id=790e6aea&lang=html&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsList/vsListItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsListItemvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/components/vsList/vsListItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsList_vsListItemvue_type_script_lang_js_ = (vsListItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsList/vsListItem.vue





/* normalize component */

var vsListItem_component = normalizeComponent(
  vsList_vsListItemvue_type_script_lang_js_,
  vsListItemvue_type_template_id_790e6aea_lang_html_render,
  vsListItemvue_type_template_id_790e6aea_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsListItem = (vsListItem_component.exports);
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsList/vsListHeader.vue?vue&type=template&id=c17f0c74&lang=html&
var vsListHeadervue_type_template_id_c17f0c74_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-list--header",class:[("vs-header-list-" + _vm.color),{
    'with-icon':_vm.icon,
  }],style:(_vm.styleHeader)},[(_vm.icon)?_c('div',{staticClass:"vs-list--icon"},[_c('vs-icon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon}})],1):_vm._e(),_c('div',{staticClass:"list-titles"},[(_vm.title)?_c('div',{staticClass:"vs-list--title"},[_vm._v(_vm._s(_vm.title))]):_vm._e()])])}
var vsListHeadervue_type_template_id_c17f0c74_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsList/vsListHeader.vue?vue&type=template&id=c17f0c74&lang=html&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsList/vsListHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsListHeadervue_type_script_lang_js_ = ({
  name: 'VsListHeader',
  props: {
    color: {
      type: String,
      default: 'primary'
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
  },
  computed: {
    styleHeader: function styleHeader() {
      return {
        color: utils_color.getColor(this.color)
      };
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsList/vsListHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsList_vsListHeadervue_type_script_lang_js_ = (vsListHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsList/vsListHeader.vue





/* normalize component */

var vsListHeader_component = normalizeComponent(
  vsList_vsListHeadervue_type_script_lang_js_,
  vsListHeadervue_type_template_id_c17f0c74_lang_html_render,
  vsListHeadervue_type_template_id_c17f0c74_lang_html_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsAvatar/vsAvatar.vue?vue&type=template&id=330149ee&lang=html&
var vsAvatarvue_type_template_id_330149ee_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g(_vm._b({staticClass:"con-vs-avatar",class:_vm.avatarClass,style:(_vm.avatarStyle)},'div',_vm.$attrs,false),_vm.$listeners),[(_vm.badge && _vm.badge > 0)?_c('div',{staticClass:"dot-count vs-avatar--count",class:_vm.badgeClass,style:(_vm.badgeStyle)},[_vm._v(" "+_vm._s(typeof _vm.badge != 'boolean' ? _vm.badge : null)+" ")]):_vm._e(),(_vm.src)?_c('div',{staticClass:"con-img vs-avatar--con-img"},[_c('img',{attrs:{"src":_vm.src,"alt":""}})]):_c('span',{staticClass:"vs-avatar--text notranslate",class:[_vm.text ? '' : _vm.iconPack, _vm.text ? '' : _vm.icon, _vm.textClass],style:(_vm.textStyle),attrs:{"title":_vm.text,"translate":"no"}},[_vm._v(" "+_vm._s(_vm.text ? _vm.returnText : _vm.iconPack == 'material-icons' ? _vm.icon : '')+" ")])])}
var vsAvatarvue_type_template_id_330149ee_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsAvatar/vsAvatar.vue?vue&type=template&id=330149ee&lang=html&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsAvatar/vsAvatar.vue?vue&type=script&lang=js&





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsAvatarvue_type_script_lang_js_ = ({
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
      if (!this.text) {
        return 1;
      }

      var lengthx = this.returnText.length;

      if (lengthx <= 5 && lengthx > 1) {
        return lengthx / (lengthx * 1.50);
      } else {
        return 1;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsAvatar/vsAvatar.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsAvatar_vsAvatarvue_type_script_lang_js_ = (vsAvatarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsAvatar/vsAvatar.vue





/* normalize component */

var vsAvatar_component = normalizeComponent(
  vsAvatar_vsAvatarvue_type_script_lang_js_,
  vsAvatarvue_type_template_id_330149ee_lang_html_render,
  vsAvatarvue_type_template_id_330149ee_lang_html_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsPagination/vsPagination.vue?vue&type=template&id=2e2de276&
var vsPaginationvue_type_template_id_2e2de276_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('vs-row',{attrs:{"vs-type":"flex","vs-justify":"space-between","vs-w":"12"}},[_c('vs-col',{staticClass:"vs-pagination--mb",attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-lg":"6","vs-sm":"12","vs-xs":"12"}},[(_vm.description)?_c('div',[_c('nav',{staticClass:"vs-pagination--nav"},[_c('vs-dropdown',{staticClass:"vs-description--button",attrs:{"vs-trigger-click":""}},[_c('span',{staticClass:"vs-description--span"},[_vm._v(" "+_vm._s(_vm.descriptionTitle)+" "+_vm._s(_vm.minRows)+" - "+_vm._s(_vm.maxRows)+" "+_vm._s(_vm.descriptionConnector)+" "+_vm._s(_vm.sizeArray)+" ")]),_c('vs-icon',{attrs:{"icon":"expand_more"}}),_c('vs-dropdown-menu',_vm._l((_vm.descriptionItems),function(row,index){return _c('vs-dropdown-item',{key:index,on:{"click":function($event){return _vm.changeRowMaxItems(index)}}},[_vm._v(_vm._s(row))])}),1)],1)],1)]):_vm._e()]),_c('vs-col',{staticClass:"vs-pagination--mb",attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-lg":"6","vs-sm":"12","vs-xs":"12"}},[_c('div',{staticClass:"con-vs-pagination",class:[("vs-pagination-" + _vm.color)],style:(_vm.stylePagination)},[_c('nav',{staticClass:"vs-pagination--nav"},[_c('button',{staticClass:"vs-pagination--buttons btn-prev-pagination vs-pagination--button-prev",class:{disabled:_vm.current <= 1 ? 'disabled' : null},attrs:{"disabled":_vm.current === 1},on:{"click":_vm.prevPage}},[_c('vs-icon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.prevIcon}})],1),_c('ul',{staticClass:"vs-pagination--ul"},_vm._l((_vm.pages),function(page,index){return _c('li',{key:index,staticClass:"item-pagination vs-pagination--li",class:{'is-current': page == _vm.current},on:{"click":function($event){return _vm.goTo(page)}}},[_c('span',[_vm._v(_vm._s(page))]),_c('div',{staticClass:"effect"})])}),0),_c('button',{staticClass:"vs-pagination--buttons btn-next-pagination vs-pagination--button-next",class:{disabled:_vm.current === _vm.total ? 'disabled' : null},attrs:{"disabled":_vm.current === _vm.total},on:{"click":_vm.nextPage}},[_c('vs-icon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.nextIcon}})],1),(_vm.goto)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.go),expression:"go"}],staticClass:"vs-pagination--input-goto",attrs:{"max":_vm.total,"min":"1","type":"number"},domProps:{"value":(_vm.go)},on:{"change":_vm.goTo,"input":function($event){if($event.target.composing){ return; }_vm.go=$event.target.value}}}):_vm._e()])])])],1)}
var vsPaginationvue_type_template_id_2e2de276_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsPagination/vsPagination.vue?vue&type=template&id=2e2de276&

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("931d");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("a34a");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("3bf4");

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsPagination/vsPagination.vue?vue&type=script&lang=js&










//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsPaginationvue_type_script_lang_js_ = ({
  name: "VsPagination",
  props: {
    color: {
      type: String,
      default: "primary"
    },
    total: {
      type: Number,
      required: true
    },
    sizeArray: {
      type: Number,
      required: true
    },
    maxItems: {
      type: [Number, String],
      required: true
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
      type: String,
      default: "keyboard_arrow_left"
    },
    nextIcon: {
      type: String,
      default: "keyboard_arrow_right"
    },
    iconPack: {
      type: String,
      default: "material-icons"
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
      default: "Registries"
    },
    descriptionConnector: {
      type: String,
      default: "of"
    },
    descriptionBody: {
      type: String,
      default: "Pages"
    }
  },
  data: function data() {
    return {
      pages: [],
      current: 0,
      go: 0,
      prevRange: "",
      nextRange: "",
      hoverBtn1: false,
      minRows: 0,
      maxRows: 0,
      indexRows: 0
    };
  },
  computed: {
    defaultNextIcon: function defaultNextIcon() {
      if (this.$vs.rtl) return "chevron_left";
      return "chevron_right";
    },
    defaultPrevIcon: function defaultPrevIcon() {
      if (this.$vs.rtl) return "chevron_right";
      return "chevron_left";
    },
    stylePagination: function stylePagination() {
      var style = {};

      if (!utils_color.isColor(this.color)) {
        style = {
          "--vs-color-pagination": utils_color.getColor(this.color),
          "--vs-color-pagination-alpha": utils_color.getColor(this.color, 0.5)
        };
      }

      return style;
    },
    styleDescription: function styleDescription() {
      return {
        cursor: "pointer"
      };
    }
  },
  watch: {
    current: function current(val) {
      this.getPages();
      this.calculateMinMax(val);
      this.$emit("input", this.current);
      this.$emit("change", this.current);
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
  mounted: function () {
    var _mounted = _asyncToGenerator(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.current = this.go = this.value;
              _context.next = 3;
              return this.calculateMinMax(this.current);

            case 3:
              this.indexRows = this.descriptionItems.indexOf(this.maxItems);
              this.getPages();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _mounted.apply(this, arguments);
    }

    return mounted;
  }(),
  methods: {
    changeRowMaxItems: function () {
      var _changeRowMaxItems = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(index) {
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.indexRows = index;
                _context2.next = 3;
                return this.$emit("changeMaxItems", index);

              case 3:
                _context2.next = 5;
                return this.calculateMinMax(this.current);

              case 5:
                this.current = 1;

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function changeRowMaxItems(_x) {
        return _changeRowMaxItems.apply(this, arguments);
      }

      return changeRowMaxItems;
    }(),
    calculateMinMax: function () {
      var _calculateMinMax = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3(val) {
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.maxRows = val * this.maxItems <= this.sizeArray ? val * this.maxItems : this.sizeArray;
                this.minRows = val * this.maxItems <= this.sizeArray ? this.maxRows - this.maxItems + 1 : (this.current - 1) * this.maxItems + 1;

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function calculateMinMax(_x2) {
        return _calculateMinMax.apply(this, arguments);
      }

      return calculateMinMax;
    }(),
    isEllipsis: function isEllipsis(page) {
      return page === "...";
    },
    goTo: function goTo(page) {
      if (page === "...") {
        return;
      }

      if (typeof page.target === "undefined") {
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
        this.pages = [1, "..."].concat(_toConsumableArray(this.setPages(start, end)), ["...", this.total]);
      } else if (this.total < 6) {
        this.pages = _toConsumableArray(this.setPages(1, this.total));
      } else {
        this.pages = [].concat(_toConsumableArray(this.setPages(1, this.prevRange)), ["..."], _toConsumableArray(this.setPages(this.nextRange, this.total)));
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
// CONCATENATED MODULE: ./src/components/vsPagination/vsPagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsPagination_vsPaginationvue_type_script_lang_js_ = (vsPaginationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsPagination/vsPagination.vue





/* normalize component */

var vsPagination_component = normalizeComponent(
  vsPagination_vsPaginationvue_type_script_lang_js_,
  vsPaginationvue_type_template_id_2e2de276_render,
  vsPaginationvue_type_template_id_2e2de276_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsBreadcrumb/vsBreadcrumb.vue?vue&type=template&id=abaf758e&lang=html&
var vsBreadcrumbvue_type_template_id_abaf758e_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',_vm._g(_vm._b({staticClass:"vs-breadcrumb",class:("vs-align-" + _vm.align),attrs:{"aria-label":"breadcrumb"}},'nav',_vm.$attrs,false),_vm.$listeners),[_c('ol',{staticClass:"vs-breadcrumb--ol"},[_vm._t("default"),_vm._l((_vm.items),function(item){return _c('li',{directives:[{name:"show",rawName:"v-show",value:(!_vm.hasSlot),expression:"!hasSlot"}],key:item.title,class:{'vs-active':item.active,'disabled-link':item.disabled},attrs:{"aria-current":item.active ? 'page' : null}},[(!item.active)?_c('a',{staticClass:"vs-breadcrumb--link",attrs:{"href":item.url ? item.url : '#',"title":item.title}},[_vm._v(" "+_vm._s(item.title)+" ")]):[_c('span',{staticClass:"vs-breadcrumb--text",class:_vm.textClass,style:(_vm.textStyle)},[_vm._v(" "+_vm._s(item.title)+" ")])],(!item.active)?_c('span',{staticClass:"separator notranslate vs-breadcrum--separator",class:_vm.separator.length > 1 ? 'material-icons' : null,attrs:{"translate":"no","aria-hidden":"true"}},[_vm._v(_vm._s(_vm.separator))]):_vm._e()],2)})],2)])}
var vsBreadcrumbvue_type_template_id_abaf758e_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsBreadcrumb/vsBreadcrumb.vue?vue&type=template&id=abaf758e&lang=html&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsBreadcrumb/vsBreadcrumb.vue?vue&type=script&lang=js&










function vsBreadcrumbvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function vsBreadcrumbvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { vsBreadcrumbvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { vsBreadcrumbvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsBreadcrumbvue_type_script_lang_js_ = ({
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
          return vsBreadcrumbvue_type_script_lang_js_objectSpread({}, item, {
            title: item.title(_this.$route.params)
          });
        }

        return item;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsBreadcrumb/vsBreadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsBreadcrumb_vsBreadcrumbvue_type_script_lang_js_ = (vsBreadcrumbvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsBreadcrumb/vsBreadcrumb.vue





/* normalize component */

var vsBreadcrumb_component = normalizeComponent(
  vsBreadcrumb_vsBreadcrumbvue_type_script_lang_js_,
  vsBreadcrumbvue_type_template_id_abaf758e_lang_html_render,
  vsBreadcrumbvue_type_template_id_abaf758e_lang_html_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/functions/vsDialog/index.vue?vue&type=template&id=20923623&lang=html&
var vsDialogvue_type_template_id_20923623_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"dialog-t"}},[(_vm.isPrompt ? _vm.active : _vm.fActive)?_c('div',{ref:"con",staticClass:"vs-component con-vs-dialog",class:[("vs-dialog-" + _vm.color)]},[_c('div',{staticClass:"vs-dialog-dark",on:{"click":function($event){return _vm.handleClose($event,true)}}}),_c('div',{ref:"dialogx",staticClass:"vs-dialog"},[_c('header',{staticClass:"vs-dialog-header",style:(_vm.styleHeader)},[_c('div',{staticClass:"con-title-after"},[_c('span',{staticClass:"after",style:(_vm.styleAfter)}),_c('h3',{staticClass:"dialog-title"},[_vm._v(_vm._s(_vm.title)+" ")])]),(_vm.type=='alert')?_c('vs-icon',{staticClass:"vs-dialog-cancel vs-dialog-cancel--icon notranslate",attrs:{"icon":_vm.closeIcon,"icon-pack":_vm.iconPack},nativeOn:{"click":function($event){return _vm.handleClose($event)}}}):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"vs-dialog-text"},[_vm._t("default"),_vm._v(" "+_vm._s(_vm.text)+" ")],2),(_vm.buttonsHidden?false:_vm.isPrompt||_vm.type=='confirm')?_c('footer',[_c('vs-button',{staticClass:"vs-dialog-accept-button",attrs:{"disabled":_vm.isValid=='none'?false:!_vm.isValid,"color":_vm.color,"type":_vm.buttonAccept},on:{"click":_vm.acceptDialog}},[_vm._v(_vm._s(_vm.acceptText))]),_c('vs-button',{staticClass:"vs-dialog-cancel-button",attrs:{"text-color":'rgba(0,0,0,.5)',"type":_vm.buttonCancel},on:{"click":_vm.cancelClose}},[_vm._v(_vm._s(_vm.cancelText))])],1):_vm._e(),(_vm.type=='alert'&&!_vm.isPrompt)?_c('footer',[_c('vs-button',{staticClass:"vs-dialog-accept-button",attrs:{"color":_vm.color,"type":_vm.buttonAccept},on:{"click":_vm.acceptDialog}},[_vm._v(_vm._s(_vm.acceptText))])],1):_vm._e()])]):_vm._e()])}
var vsDialogvue_type_template_id_20923623_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/functions/vsDialog/index.vue?vue&type=template&id=20923623&lang=html&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/functions/vsDialog/index.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsDialogvue_type_script_lang_js_ = ({
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
      var _this2 = this;

      this.$nextTick(function () {
        if (_this2.active) {
          _this2.insertBody();
        }
      });
    },
    fActive: function fActive() {
      var _this3 = this;

      this.$nextTick(function () {
        if (_this3.fActive) {
          _this3.insertBody();
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
  methods: {
    giveColor: function giveColor(color) {
      return utils_color.rColor(color);
    },
    acceptDialog: function acceptDialog() {
      var _this = this;

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
      var _this4 = this;

      this.$refs.dialogx.classList.add('locked');
      setTimeout(function () {
        _this4.$refs.dialogx.classList.remove('locked');
      }, 200);
    },
    handleClose: function handleClose(event, con) {
      if (con) {
        if (event.target.className.indexOf('vs-dialog-dark') != -1 && this.type == 'alert') {
          this.factive = false;
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
      this.$emit('cancel'); // this.$emit('cancel')

      this.cancel ? this.cancel(this.parameters) : null;
    },
    insertBody: function insertBody() {
      var elx = this.$refs.con;
      var parentx = this.parent ? this.parent : document.body;
      parentx.insertBefore(elx, parentx.firstChild);
    }
  }
});
// CONCATENATED MODULE: ./src/functions/vsDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var functions_vsDialogvue_type_script_lang_js_ = (vsDialogvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/functions/vsDialog/index.vue





/* normalize component */

var vsDialog_component = normalizeComponent(
  functions_vsDialogvue_type_script_lang_js_,
  vsDialogvue_type_template_id_20923623_lang_html_render,
  vsDialogvue_type_template_id_20923623_lang_html_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsDivider/vsDivider.vue?vue&type=template&id=a1d9d280&lang=html&
var vsDividervue_type_template_id_a1d9d280_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-component vs-divider"},[_c('span',{staticClass:"vs-divider-border after",class:_vm.borderClass,style:(_vm.afterStyle)}),(_vm.icon || _vm.$slots.default)?_c('span',{staticClass:"vs-divider--text",class:_vm.textAndBackgroundClass,style:({
      color: _vm.textColor,
      background: _vm.backgroundColor
    })},[(!_vm.icon)?[_vm._t("default")]:_c('vs-icon',{staticClass:"icon-divider notranslate vs-divider--icon",attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon}})],2):_vm._e(),_c('span',{staticClass:"vs-divider-border before",class:_vm.borderClass,style:(_vm.beforeStyle)})])}
var vsDividervue_type_template_id_a1d9d280_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsDivider/vsDivider.vue?vue&type=template&id=a1d9d280&lang=html&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsDivider/vsDivider.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsDividervue_type_script_lang_js_ = ({
  name: "VsDivider",
  props: {
    color: {
      type: String,
      default: "rgba(0, 0, 0,.1)"
    },
    background: {
      type: String,
      default: "transparent"
    },
    icon: {
      default: null,
      type: String
    },
    borderStyle: {
      default: "solid",
      type: String
    },
    borderHeight: {
      default: "1px",
      type: String
    },
    position: {
      default: "center",
      type: String
    },
    iconPack: {
      default: "material-icons",
      type: String
    }
  },
  computed: {
    getWidthAfter: function getWidthAfter() {
      var widthx = "100%";

      if (this.position == "left") {
        widthx = "0%";
      } else if (this.position == "left-center") {
        widthx = "25%";
      } else if (this.position == "right-center") {
        widthx = "75%";
      } else if (this.position == "right") {
        widthx = "100%";
      }

      return widthx;
    },
    getWidthBefore: function getWidthBefore() {
      var widthx = "100%";

      if (this.position == "left") {
        widthx = "100%";
      } else if (this.position == "left-center") {
        widthx = "75%";
      } else if (this.position == "right-center") {
        widthx = "25%";
      } else if (this.position == "right") {
        widthx = "0%";
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
        "border-top-width": this.borderHeight,
        "border-top-style": this.borderStyle
      };

      if (!utils_color.isColor(this.color)) {
        classes["border-top-color"] = this.borderColor;
      }

      return classes;
    },
    beforeStyle: function beforeStyle() {
      var classes = {
        width: this.getWidthBefore,
        "border-top-width": this.borderHeight,
        "border-top-style": this.borderStyle
      };

      if (!utils_color.isColor(this.color)) {
        classes["border-top-color"] = this.borderColor;
      }

      return classes;
    },
    borderClass: function borderClass() {
      var classes = {};
      var borderColor = utils_color.isColor(this.color) ? this.color : "default";
      classes["vs-divider-border-".concat(borderColor)] = true;
      return classes;
    },
    textColor: function textColor() {
      if (!utils_color.isColor(this.color)) {
        return utils_color.getColor(this.color === "rgba(0, 0, 0,.1)" ? "rgba(0,0,0,0.8)" : this.color);
      }
    },
    backgroundColor: function backgroundColor() {
      if (!utils_color.isColor(this.background)) {
        return utils_color.getColor(this.background);
      }
    },
    textAndBackgroundClass: function textAndBackgroundClass() {
      var classes = {};
      var textColor = utils_color.isColor(this.color) ? this.color : "default";
      classes["vs-divider-text-".concat(textColor)] = true;
      var backgroundColor = utils_color.isColor(this.background) ? this.background : "default";
      classes["vs-divider-background-".concat(backgroundColor)] = true;
      return classes;
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsDivider/vsDivider.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsDivider_vsDividervue_type_script_lang_js_ = (vsDividervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsDivider/vsDivider.vue





/* normalize component */

var vsDivider_component = normalizeComponent(
  vsDivider_vsDividervue_type_script_lang_js_,
  vsDividervue_type_template_id_a1d9d280_lang_html_render,
  vsDividervue_type_template_id_a1d9d280_lang_html_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSpacer/vsSpacer.vue?vue&type=template&id=6108203a&
var vsSpacervue_type_template_id_6108203a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-spacer"})}
var vsSpacervue_type_template_id_6108203a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsSpacer/vsSpacer.vue?vue&type=template&id=6108203a&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSpacer/vsSpacer.vue?vue&type=script&lang=js&
//
//
//
/* harmony default export */ var vsSpacervue_type_script_lang_js_ = ({
  name: 'VsSpacer'
});
// CONCATENATED MODULE: ./src/components/vsSpacer/vsSpacer.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsSpacer_vsSpacervue_type_script_lang_js_ = (vsSpacervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsSpacer/vsSpacer.vue





/* normalize component */

var vsSpacer_component = normalizeComponent(
  vsSpacer_vsSpacervue_type_script_lang_js_,
  vsSpacervue_type_template_id_6108203a_render,
  vsSpacervue_type_template_id_6108203a_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsNavbar/vsNavbar.vue?vue&type=template&id=3b912420&lang=html&
var vsNavbarvue_type_template_id_3b912420_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"vs-navbar",class:[("vs-navbar-" + _vm.type), ("vs-navbar-color-" + _vm.color), {'collapse':_vm.collapse}],style:([_vm.styleNavbar])},[_c('div',{staticClass:"vs-navbar--header"},[_c('button',{staticClass:"vs-navbar--btn-responsive",class:{'active-menu' : _vm.activeMenuResponsive},on:{"click":function($event){_vm.activeMenuResponsive = !_vm.activeMenuResponsive}}},[_c('span',{staticClass:"btn-responsive-line line--1"}),_c('span',{staticClass:"btn-responsive-line line--2"}),_c('span',{staticClass:"btn-responsive-line line--3"})]),_vm._t("title")],2),_c('div',{staticClass:"vs-con-items",class:{'activeMenuResponsive' : _vm.activeMenuResponsive}},[_vm._t("default")],2)])}
var vsNavbarvue_type_template_id_3b912420_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbar.vue?vue&type=template&id=3b912420&lang=html&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsNavbar/vsNavbar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsNavbarvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsNavbar_vsNavbarvue_type_script_lang_js_ = (vsNavbarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbar.vue





/* normalize component */

var vsNavbar_component = normalizeComponent(
  vsNavbar_vsNavbarvue_type_script_lang_js_,
  vsNavbarvue_type_template_id_3b912420_lang_html_render,
  vsNavbarvue_type_template_id_3b912420_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsNavbar = (vsNavbar_component.exports);
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsNavbar/vsNavItem.vue?vue&type=template&id=779d00bb&
var vsNavItemvue_type_template_id_779d00bb_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"vs-navbar--item",class:[{'is-active-item': _vm.isActiveItem}, ("vs-navbar-item-" + _vm.getActiveTextColor)],style:([_vm.styleHover]),on:{"click":function($event){return _vm.clickItem()},"mouseout":_vm.mouseout,"mouseover":_vm.mouseover}},[_vm._t("default"),_c('span',{staticClass:"vs-navbar-after",style:([_vm.styleAfter])})],2)}
var vsNavItemvue_type_template_id_779d00bb_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavItem.vue?vue&type=template&id=779d00bb&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsNavbar/vsNavItem.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsNavItemvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsNavbar_vsNavItemvue_type_script_lang_js_ = (vsNavItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavItem.vue





/* normalize component */

var vsNavItem_component = normalizeComponent(
  vsNavbar_vsNavItemvue_type_script_lang_js_,
  vsNavItemvue_type_template_id_779d00bb_render,
  vsNavItemvue_type_template_id_779d00bb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsNavItem = (vsNavItem_component.exports);
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsNavbar/vsNavGroup.vue?vue&type=template&id=2a595bb2&
var vsNavGroupvue_type_template_id_2a595bb2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"vs-nav-item"},[_c('div',{staticClass:"vs-nav-item-slot"},[_vm._t("default")],2),_c('ul',{staticClass:"vs-nav-submenu"},[_vm._t("submenu")],2)])}
var vsNavGroupvue_type_template_id_2a595bb2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavGroup.vue?vue&type=template&id=2a595bb2&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsNavbar/vsNavGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsNavGroupvue_type_script_lang_js_ = ({
  name: 'VsNavbarGroup'
});
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsNavbar_vsNavGroupvue_type_script_lang_js_ = (vsNavGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavGroup.vue





/* normalize component */

var vsNavGroup_component = normalizeComponent(
  vsNavbar_vsNavGroupvue_type_script_lang_js_,
  vsNavGroupvue_type_template_id_2a595bb2_render,
  vsNavGroupvue_type_template_id_2a595bb2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsNavGroup = (vsNavGroup_component.exports);
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsNavbar/vsNavbarTitle.vue?vue&type=template&id=216c9b3f&
var vsNavbarTitlevue_type_template_id_216c9b3f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{staticClass:"vs-navbar--title"},[_vm._t("default")],2)}
var vsNavbarTitlevue_type_template_id_216c9b3f_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbarTitle.vue?vue&type=template&id=216c9b3f&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsNavbar/vsNavbarTitle.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var vsNavbarTitlevue_type_script_lang_js_ = ({
  name: 'VsNavbarTitle'
});
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbarTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsNavbar_vsNavbarTitlevue_type_script_lang_js_ = (vsNavbarTitlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbarTitle.vue





/* normalize component */

var vsNavbarTitle_component = normalizeComponent(
  vsNavbar_vsNavbarTitlevue_type_script_lang_js_,
  vsNavbarTitlevue_type_template_id_216c9b3f_render,
  vsNavbarTitlevue_type_template_id_216c9b3f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsNavbarTitle = (vsNavbarTitle_component.exports);
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsNavbar/vsNavbarItems.vue?vue&type=template&id=8148bbb6&
var vsNavbarItemsvue_type_template_id_8148bbb6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-navbar--items"},[_vm._t("default")],2)}
var vsNavbarItemsvue_type_template_id_8148bbb6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbarItems.vue?vue&type=template&id=8148bbb6&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsNavbar/vsNavbarItems.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var vsNavbarItemsvue_type_script_lang_js_ = ({
  name: 'VsNavbarItems'
});
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbarItems.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsNavbar_vsNavbarItemsvue_type_script_lang_js_ = (vsNavbarItemsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsNavbar/vsNavbarItems.vue





/* normalize component */

var vsNavbarItems_component = normalizeComponent(
  vsNavbar_vsNavbarItemsvue_type_script_lang_js_,
  vsNavbarItemsvue_type_template_id_8148bbb6_render,
  vsNavbarItemsvue_type_template_id_8148bbb6_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSideBar/vsSidebar.vue?vue&type=template&id=34bcd80a&
var vsSidebarvue_type_template_id_34bcd80a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"vs-sidebar-animate"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.staticPosition || _vm.value),expression:"staticPosition || value"}],ref:"sidebarbackground",staticClass:"vs-content-sidebar"},[(!_vm.hiddenBackground)?_c('div',{staticClass:"vs-sidebar--background"}):_vm._e(),_c('div',{ref:"sidebarContainer",staticClass:"vs-sidebar",class:[
        ("vs-sidebar-" + _vm.color),
        {
          'vs-sidebar-parent': _vm.parent != 'body',
          'vs-sidebar-staticPosition': _vm.staticPosition,
          'vs-sidebar-position-right': _vm.positionRight,
          'vs-sidebar-reduce': _vm.reduce,
          'vs-sidebar-reduceNotRebound': _vm.reduceNotRebound,
          'vs-sidebar-reduceNotHoverExpand': _vm.reduceNotHoverExpand
        }
      ]},[(_vm.$slots.header)?_c('header',{staticClass:"vs-sidebar--header"},[_vm._t("header")],2):_vm._e(),_c('div',{staticClass:"vs-sidebar--items"},[_vm._t("default")],2),(_vm.spacer)?_c('vs-spacer'):_vm._e(),(_vm.$slots.footer)?_c('footer',{staticClass:"vs-sidebar--footer"},[_vm._t("footer")],2):_vm._e()],1)])])}
var vsSidebarvue_type_template_id_34bcd80a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebar.vue?vue&type=template&id=34bcd80a&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSideBar/vsSidebar.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsSidebarvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsSideBar_vsSidebarvue_type_script_lang_js_ = (vsSidebarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebar.vue





/* normalize component */

var vsSidebar_component = normalizeComponent(
  vsSideBar_vsSidebarvue_type_script_lang_js_,
  vsSidebarvue_type_template_id_34bcd80a_render,
  vsSidebarvue_type_template_id_34bcd80a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsSidebar = (vsSidebar_component.exports);
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSideBar/vsSidebarItem.vue?vue&type=template&id=74ad8ff9&
var vsSidebarItemvue_type_template_id_74ad8ff9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-sidebar--item",class:{'vs-sidebar-item-active':_vm.getActive},on:{"click":_vm.setIndexActive}},[(_vm.to)?_c('router-link',{attrs:{"to":_vm.to}},[_c('vs-icon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon}}),_vm._t("default")],2):_c('a',{attrs:{"href":_vm.href}},[_c('vs-icon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon}}),_vm._t("default")],2)],1)}
var vsSidebarItemvue_type_template_id_74ad8ff9_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebarItem.vue?vue&type=template&id=74ad8ff9&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSideBar/vsSidebarItem.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsSidebarItemvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebarItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsSideBar_vsSidebarItemvue_type_script_lang_js_ = (vsSidebarItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebarItem.vue





/* normalize component */

var vsSidebarItem_component = normalizeComponent(
  vsSideBar_vsSidebarItemvue_type_script_lang_js_,
  vsSidebarItemvue_type_template_id_74ad8ff9_render,
  vsSidebarItemvue_type_template_id_74ad8ff9_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsSidebarItem = (vsSidebarItem_component.exports);
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSideBar/vsSidebarGroup.vue?vue&type=template&id=0a83ccd1&
var vsSidebarGroupvue_type_template_id_0a83ccd1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-sidebar-group",class:{'vs-sidebar-group-open' : _vm.openItems},on:{"mouseover":_vm.mouseover,"mouseout":_vm.mouseout}},[_c('h4',{on:{"click":_vm.clickGroup}},[_vm._v(_vm._s(_vm.title)+" "),_c('vs-icon',[_vm._v("keyboard_arrow_down")])],1),_c('span',{staticClass:"vs-sidebar--tooltip"},[_vm._v(_vm._s(_vm.title))]),_c('ul',{ref:"items",staticClass:"vs-sidebar--group-items",style:(_vm.styleItems)},[_vm._t("default")],2)])}
var vsSidebarGroupvue_type_template_id_0a83ccd1_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebarGroup.vue?vue&type=template&id=0a83ccd1&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsSideBar/vsSidebarGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsSidebarGroupvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebarGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsSideBar_vsSidebarGroupvue_type_script_lang_js_ = (vsSidebarGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebarGroup.vue





/* normalize component */

var vsSidebarGroup_component = normalizeComponent(
  vsSideBar_vsSidebarGroupvue_type_script_lang_js_,
  vsSidebarGroupvue_type_template_id_0a83ccd1_render,
  vsSidebarGroupvue_type_template_id_0a83ccd1_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsDropDown/vsDropDown.vue?vue&type=template&id=1bcaa21b&lang=html&
var vsDropDownvue_type_template_id_1bcaa21b_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',_vm._g(_vm._b({ref:"dropdown",staticClass:"vs-con-dropdown parent-dropdown",attrs:{"type":"button"}},'button',_vm.$attrs,false),_vm.listeners),[_vm._t("default")],2)}
var vsDropDownvue_type_template_id_1bcaa21b_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDown.vue?vue&type=template&id=1bcaa21b&lang=html&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsDropDown/vsDropDown.vue?vue&type=script&lang=js&











function vsDropDownvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function vsDropDownvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { vsDropDownvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { vsDropDownvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsDropDownvue_type_script_lang_js_ = ({
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

      return vsDropDownvue_type_script_lang_js_objectSpread({}, this.$listeners, {
        contextmenu: function contextmenu(evt) {
          return _this.vsTriggerContextmenu ? _this.clickToogleMenu(evt, true) : {};
        },
        click: function click(evt) {
          return _this.vsTriggerContextmenu ? {} : _this.clickToogleMenu(evt);
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

        if (_this3.$refs.dropdown.getBoundingClientRect().left + dropdownMenu.$el.offsetWidth >= w - 25) {// this.rightx = true
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
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDown.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsDropDown_vsDropDownvue_type_script_lang_js_ = (vsDropDownvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDown.vue





/* normalize component */

var vsDropDown_component = normalizeComponent(
  vsDropDown_vsDropDownvue_type_script_lang_js_,
  vsDropDownvue_type_template_id_1bcaa21b_lang_html_render,
  vsDropDownvue_type_template_id_1bcaa21b_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsDropDown = (vsDropDown_component.exports);
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsDropDown/vsDropDownMenu.vue?vue&type=template&id=b955708e&lang=html&
var vsDropDownMenuvue_type_template_id_b955708e_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"dropdownx"}},[(_vm.dropdownVisible)?_c('div',{ref:"options",staticClass:"con-vs-dropdown--menu vs-dropdown-menu",class:{'rightx':_vm.vsDropRight || _vm.$parent.rightx,'notHeight':_vm.notHeight},style:({
      'left':_vm.leftx+'px',
      'top':_vm.topx+'px'
    }),on:{"mouseleave":_vm.mouseleavex,"mouseenter":_vm.mouseenterx}},[(!_vm.vsCustomContent)?_c('ul',{staticClass:"vs-component vs-dropdown--menu"},[_vm._t("default")],2):_c('div',{staticClass:"vs-dropdown--custom vs-dropdown--menu"},[_vm._t("default")],2),_c('div',{ref:"menuAfter",class:[ _vm.vsDropRight ? 'vs-dropdown-right--menu--after' : 'vs-dropdown--menu--after']})]):_vm._e()])}
var vsDropDownMenuvue_type_template_id_b955708e_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownMenu.vue?vue&type=template&id=b955708e&lang=html&

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("6e7c");

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsDropDown/vsDropDownMenu.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsDropDownMenuvue_type_script_lang_js_ = ({
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
          var hasGroup = _this.$children.find(function (it) {
            return it.hasOwnProperty('activeGroup');
          });

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
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsDropDown_vsDropDownMenuvue_type_script_lang_js_ = (vsDropDownMenuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownMenu.vue





/* normalize component */

var vsDropDownMenu_component = normalizeComponent(
  vsDropDown_vsDropDownMenuvue_type_script_lang_js_,
  vsDropDownMenuvue_type_template_id_b955708e_lang_html_render,
  vsDropDownMenuvue_type_template_id_b955708e_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsDropDownMenu = (vsDropDownMenu_component.exports);
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsDropDown/vsDropDownItem.vue?vue&type=template&id=39d056c0&lang=html&
var vsDropDownItemvue_type_template_id_39d056c0_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"vs-component vs-dropdown--item",class:{'divider':_vm.divider},style:({
    'color':_vm.hoverx?_vm.giveColor()+' !important':null,
    'background':_vm.hoverx?_vm.giveColor(.01)+' !important':null
  }),on:{"click":_vm.closeParent,"mouseover":function($event){_vm.hoverx=true},"mouseout":function($event){_vm.hoverx=false}}},[(_vm.to)?_c('router-link',_vm._g(_vm._b({staticClass:"vs-dropdown--item-link",class:{'disabled':_vm.disabled},attrs:{"to":_vm.to}},'router-link',_vm.$attrs,false),_vm.$listeners),[_vm._v(" "+_vm._s(_vm.$attrs.disabled)+" "),_vm._t("default")],2):_c('a',_vm._g(_vm._b({staticClass:"vs-dropdown--item-link",class:{'disabled':_vm.disabled}},'a',_vm.$attrs,false),_vm.$listeners),[_vm._t("default")],2)],1)}
var vsDropDownItemvue_type_template_id_39d056c0_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownItem.vue?vue&type=template&id=39d056c0&lang=html&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsDropDown/vsDropDownItem.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsDropDownItemvue_type_script_lang_js_ = ({
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
      if (this.disabled) {
        return;
      }

      searchParent(this);

      function searchParent(_this) {
        var parent = _this.$parent;

        if (!parent.$el.className) {
          return;
        }

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
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsDropDown_vsDropDownItemvue_type_script_lang_js_ = (vsDropDownItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownItem.vue





/* normalize component */

var vsDropDownItem_component = normalizeComponent(
  vsDropDown_vsDropDownItemvue_type_script_lang_js_,
  vsDropDownItemvue_type_template_id_39d056c0_lang_html_render,
  vsDropDownItemvue_type_template_id_39d056c0_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsDropDownItem = (vsDropDownItem_component.exports);
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsDropDown/vsDropDownGroup.vue?vue&type=template&id=164ea646&lang=html&
var vsDropDownGroupvue_type_template_id_164ea646_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{ref:"group",staticClass:"vs-component vs-dropdown--group",class:{'marginIcon':_vm.vsCollapse, 'no-cascading':!_vm.vsCollapse, 'group-rightx':_vm.rightx},on:{"click":_vm.clickGroup}},[(_vm.vsCollapse)?_c('span',{staticClass:"span vs-dropdown--group-label"},[_vm._v(_vm._s(_vm.vsLabel))]):_c('h3',[_vm._v(_vm._s(_vm.vsLabel))]),(_vm.vsCollapse)?_c('vs-icon',{staticClass:"icon-group notranslate vs-dropdown--group-icon",attrs:{"icon-pack":_vm.iconPack,"icon":_vm.vsIcon}}):_vm._e(),_c('div',{ref:"ulx",staticClass:"con-dropdown--group-con-ul",class:{'con-dropdown-group-no-cascading':!_vm.vsCollapse},style:(_vm.styleItems)},[_c('ul',{staticClass:"con-dropdown--group-ul"},[_vm._t("default")],2)])],1)}
var vsDropDownGroupvue_type_template_id_164ea646_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownGroup.vue?vue&type=template&id=164ea646&lang=html&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsDropDown/vsDropDownGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsDropDownGroupvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsDropDown_vsDropDownGroupvue_type_script_lang_js_ = (vsDropDownGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownGroup.vue





/* normalize component */

var vsDropDownGroup_component = normalizeComponent(
  vsDropDown_vsDropDownGroupvue_type_script_lang_js_,
  vsDropDownGroupvue_type_template_id_164ea646_lang_html_render,
  vsDropDownGroupvue_type_template_id_164ea646_lang_html_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTable/vsTable.vue?vue&type=template&id=755d315c&
var vsTablevue_type_template_id_755d315c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-component vs-con-table",class:[{ stripe: _vm.stripe, hoverFlat: _vm.hoverFlat }, ("vs-table-" + _vm.color)]},[_c('header',{staticClass:"header-table vs-table--header"},[_vm._t("header"),(_vm.search)?_c('div',{staticClass:"con-input-search vs-table--search"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchx),expression:"searchx"}],staticClass:"input-search vs-table--search-input",attrs:{"type":"text"},domProps:{"value":(_vm.searchx)},on:{"input":function($event){if($event.target.composing){ return; }_vm.searchx=$event.target.value}}}),_c('vs-icon',{attrs:{"icon":"search"}})],1):_vm._e()],2),_c('div',{staticClass:"con-tablex vs-table--content"},[_c('div',{staticClass:"vs-con-tbody vs-table--tbody",style:(_vm.styleConTbody)},[_c('table',{ref:"table",staticClass:"vs-table vs-table--tbody-table"},[_c('thead',{ref:"thead",staticClass:"vs-table--thead"},[_c('tr',[(_vm.multiple || _vm.hasExpadableData)?_c('th',{staticClass:"td-check"},[(_vm.multiple)?_c('span',{staticClass:"con-td-check"},[_c('vs-checkbox',{key:_vm.isCheckedLine ? 'remove' : 'check',attrs:{"icon":_vm.isCheckedLine ? 'remove' : 'check',"checked":_vm.isCheckedMultiple,"size":"small"},on:{"click":_vm.changeCheckedMultiple}})],1):_vm._e()]):_vm._e(),_vm._t("thead")],2)]),_vm._t("default",null,{"data":_vm.datax})],2)]),(_vm.isNoData)?_c('div',{staticClass:"not-data-table vs-table--not-data"},[_vm._v(" "+_vm._s(_vm.noDataText)+" ")]):_vm._e(),(_vm.pagination)?_c('div',{staticClass:"con-pagination-table vs-table--pagination"},[_c('vs-pagination',{attrs:{"total":_vm.searchx && !_vm.sst ? _vm.getTotalPagesSearch : _vm.getTotalPages,"size-array":_vm.data.length,"max-items":_vm.maxItemsx,"description":_vm.description,"description-items":_vm.descriptionItems,"description-title":_vm.descriptionTitle,"description-body":_vm.descriptionBody,"description-connector":_vm.descriptionConnector},on:{"changeMaxItems":_vm.changeMaxItems},model:{value:(_vm.currentx),callback:function ($$v) {_vm.currentx=$$v},expression:"currentx"}})],1):_vm._e()])])}
var vsTablevue_type_template_id_755d315c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsTable/vsTable.vue?vue&type=template&id=755d315c&

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("bbfe");

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__("621b");

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTable/vsTable.vue?vue&type=script&lang=js&






















//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsTablevue_type_script_lang_js_ = ({
  name: "VsTable",
  props: {
    value: {},
    color: {
      default: "primary",
      type: String
    },
    descriptionTitle: {
      type: String,
      default: "Registries"
    },
    descriptionConnector: {
      type: String,
      default: "of"
    },
    descriptionBody: {
      type: String,
      default: "Pages"
    },
    noDataText: {
      default: "No data Available",
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
      default: "auto",
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
    }
  },
  data: function data() {
    return {
      headerWidth: "100%",
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
      return Math.ceil(this.data.length / this.maxItemsx);
    },
    getTotalPagesSearch: function getTotalPagesSearch() {
      var _this = this;

      var search = this.normalize(this.searchx);
      var filterx = this.data.filter(function (tr) {
        return _this.normalize(_this.getValues(tr).toString()).indexOf(search) != -1;
      });
      return Math.ceil(this.queriedResults.length / this.maxItems);
    },
    queriedResults: function queriedResults() {
      var _this2 = this;

      var queriedResults = this.data;

      if (this.searchx && this.search) {
        var dataBase = this.data;
        queriedResults = dataBase.filter(function (tr) {
          var values = _this2.getValues(tr).toString().toLowerCase();

          return values.indexOf(_this2.searchx.toLowerCase()) != -1;
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
        overflow: this.maxHeight != "auto" ? "auto" : null
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
        this.$emit("change-page", this.currentx);
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
      var _this3 = this;

      this.loadData();
      this.$nextTick(function () {
        if (_this3.datax.length > 0) {
          _this3.changeTdsWidth();
        }
      });
    },
    searchx: function searchx() {
      if (this.sst) {
        this.$emit("search", this.searchx);
      } else {
        this.loadData();
        this.currentx = 1;
      }
    }
  },
  mounted: function mounted() {
    window.addEventListener("resize", this.listenerChangeWidth);
    this.maxItemsx = this.maxItems;
    this.loadData(); // this.$nextTick(() => {
    //   if(this.datax.length > 0) {
    //     this.changeTdsWidth()
    //   }
    // })
  },
  destroyed: function destroyed() {
    window.removeEventListener("resize", this.listenerChangeWidth);
  },
  methods: {
    loadData: function loadData() {
      var max = Math.ceil(this.currentx * this.maxItemsx);
      var min = max - this.maxItemsx;

      if (!this.searchx || this.sst) {
        this.datax = this.pagination ? this.getItems(min, max) : this.data || [];
      } else {
        this.datax = this.pagination ? this.getItemsSearch(true, min, max) : this.getItemsSearch(false, min, max) || [];
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
        if (a[currentSortKey] < b[currentSortKey]) return currentSortType == "desc" ? 1 : -1;
        if (a[currentSortKey] > b[currentSortKey]) return currentSortType == "desc" ? -1 : 1;
        return 0;
      }

      return currentSortType !== null ? _toConsumableArray(data).sort(compare) : _toConsumableArray(data);
    },
    getItemsSearch: function getItemsSearch() {
      var _this4 = this;

      var pagination = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var min = arguments.length > 1 ? arguments[1] : undefined;
      var max = arguments.length > 2 ? arguments[2] : undefined;
      var search = this.normalize(this.searchx);
      return this.sortItems(this.data).filter(function (tr) {
        return _this4.normalize(_this4.getValues(tr).toString()).indexOf(search) != -1;
      }).filter(function (_, index) {
        return index >= min && index < max;
      });
    },
    sort: function sort(key, sortType) {
      this.currentSortKey = key;
      this.currentSortType = sortType;

      if (this.sst) {
        this.$emit("sort", key, sortType);
        return;
      }

      this.loadData();
    },
    normalize: function normalize(string) {
      return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    },
    getValues: function getValues(obj) {
      function flattenDeep(val) {
        return Object.values(val || []).reduce(function (acc, val) {
          return _typeof(val) === "object" ? acc.concat(flattenDeep(val)) : acc.concat(val);
        }, []);
      }

      return flattenDeep(obj).filter(function (item) {
        return typeof item === "string" || typeof item === "number";
      });
    },
    getStrings: function getStrings(obj, valuesx) {
      var stringsx = Object.values(obj);
      valuesx.forEach(function (item) {
        if (item && _typeof(item) == "object") {
          valuesx = [].concat(_toConsumableArray(valuesx), _toConsumableArray(Object.values(item)));
        }
      }); // return [...valuesx,...Object.values(item)]

      return stringsx;
    },
    changeCheckedMultiple: function changeCheckedMultiple() {
      var lengthx = this.data.length;
      var lengthSelected = this.value.length;
      var selectedx = lengthx - lengthSelected;

      if (selectedx == 0) {
        this.$emit("input", []);
      } else {
        this.$emit("input", this.data);
      }
    },
    clicktr: function clicktr(tr, isTr) {
      if (this.multiple && isTr) {
        var val = this.value.slice(0);

        if (val.includes(tr)) {
          val.splice(val.indexOf(tr), 1);
        } else {
          val.push(tr);
        }

        this.$emit("input", val);
        this.$emit("selected", tr);
      } else if (isTr) {
        this.$emit("input", tr);
        this.$emit("selected", tr);
      }
    },
    dblclicktr: function dblclicktr(tr, isTr) {
      if (isTr) {
        this.$emit("dblSelection", tr);
      }
    },
    listenerChangeWidth: function listenerChangeWidth() {
      this.headerWidth = "".concat(this.$refs.table.offsetWidth, "px");
      this.changeTdsWidth();
    },
    changeTdsWidth: function changeTdsWidth() {
      if (!this.value) return;
      var tbody = this.$refs.table.querySelector("tbody"); // Adding condition removes querySelector none error - if tbody isnot present

      if (tbody) {
        var trvs = tbody.querySelector(".tr-values");
        if (trvs === undefined || trvs === null) return;
        var tds = trvs.querySelectorAll(".td");
        var tdsx = [];
        tds.forEach(function (td, index) {
          tdsx.push({
            index: index,
            widthx: td.offsetWidth
          });
        });
        var colgrouptable = this.$refs.colgrouptable;

        if (colgrouptable !== undefined && colgrouptable !== null) {
          var colsTable = colgrouptable.querySelectorAll(".col");
          colsTable.forEach(function (col, index) {
            col.setAttribute("width", tdsx[index].widthx);
          });
        }
      }
    },
    changeMaxItems: function changeMaxItems(index) {
      this.maxItemsx = this.descriptionItems[index];
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsTable/vsTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsTable_vsTablevue_type_script_lang_js_ = (vsTablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsTable/vsTable.vue





/* normalize component */

var vsTable_component = normalizeComponent(
  vsTable_vsTablevue_type_script_lang_js_,
  vsTablevue_type_template_id_755d315c_render,
  vsTablevue_type_template_id_755d315c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsTable = (vsTable_component.exports);
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTable/vsTh.vue?vue&type=template&id=6448e05a&
var vsThvue_type_template_id_6448e05a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('th',{attrs:{"colspan":"1","rowspan":"1"},on:{"click":function($event){return _vm.sortValue()}}},[_c('div',{staticClass:"vs-table-text"},[_vm._t("default"),(_vm.isColumnSelectedForSort && _vm.currentSort != 0)?_c('span',{staticClass:"sort-th"},[_c('vs-icon',{staticClass:"th-sort-icon",attrs:{"icon":_vm.currentSort == 1 ? 'expand_less' : 'expand_more'}})],1):_vm._e()],2)])}
var vsThvue_type_template_id_6448e05a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsTable/vsTh.vue?vue&type=template&id=6448e05a&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTable/vsTh.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsThvue_type_script_lang_js_ = ({
  name: "VsTh",
  props: {
    sortKey: {
      default: null,
      type: String
    }
  },
  data: function data() {
    return {
      thIndex: 0,
      thwidth: "100%",
      currentSort: 0,
      sortStatuses: [null, "asc", "desc"]
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
// CONCATENATED MODULE: ./src/components/vsTable/vsTh.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsTable_vsThvue_type_script_lang_js_ = (vsThvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsTable/vsTh.vue





/* normalize component */

var vsTh_component = normalizeComponent(
  vsTable_vsThvue_type_script_lang_js_,
  vsThvue_type_template_id_6448e05a_render,
  vsThvue_type_template_id_6448e05a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsTh = (vsTh_component.exports);
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTable/vsTr.vue?vue&type=template&id=69197972&
var vsTrvue_type_template_id_69197972_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',{ref:"tableTr",staticClass:"tr-values vs-table--tr",class:[("tr-table-state-" + _vm.state), {'is-selected':_vm.isSelected, 'selected': _vm.data, 'is-expand': _vm.maxHeight != '0px', 'activeEdit': _vm.activeEdit, 'hoverFlat': _vm.$parent.hoverFlat}],on:{"click":_vm.clicktr,"dblclick":_vm.dblclicktr}},[(_vm.$parent.multiple || _vm.$slots.expand)?_c('td',{staticClass:"td-check",class:{'active-expanded': this.expanded}},[(_vm.$parent.multiple)?_c('vs-checkbox',{attrs:{"checked":_vm.isSelected,"size":"small"}}):_vm._e(),(_vm.$slots.expand)?_c('vs-icon',[_vm._v("keyboard_arrow_down")]):_vm._e()],1):_vm._e(),_vm._t("default")],2)}
var vsTrvue_type_template_id_69197972_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsTable/vsTr.vue?vue&type=template&id=69197972&

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTable/vsTrExpand.vue?vue&type=template&id=03010586&
var vsTrExpandvue_type_template_id_03010586_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"tr-expand"}},[(_vm.active)?_c('tr',{staticClass:"tr-expand"},[_c('td',{attrs:{"colspan":_vm.colspan}},[_c('div',{staticClass:"content-tr-expand"},[_vm._t("default"),(_vm.close)?_c('button',{staticClass:"tr-expand--close",on:{"click":function($event){return _vm.$emit('click', $event)}}},[_c('i',{staticClass:"material-icons"},[_vm._v(" clear ")])]):_vm._e()],2)])]):_vm._e()])}
var vsTrExpandvue_type_template_id_03010586_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsTable/vsTrExpand.vue?vue&type=template&id=03010586&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTable/vsTrExpand.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsTrExpandvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/components/vsTable/vsTrExpand.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsTable_vsTrExpandvue_type_script_lang_js_ = (vsTrExpandvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsTable/vsTrExpand.vue





/* normalize component */

var vsTrExpand_component = normalizeComponent(
  vsTable_vsTrExpandvue_type_script_lang_js_,
  vsTrExpandvue_type_template_id_03010586_render,
  vsTrExpandvue_type_template_id_03010586_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsTrExpand = (vsTrExpand_component.exports);
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTable/vsTr.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var vsTrvue_type_script_lang_js_ = ({
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
      if (this.$parent.multiple && this.$parent.value) {
        return this.data ? this.$parent.value.includes(this.data) : false;
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
    var _this = this;

    this.$nextTick(function () {
      _this.colspan = _this.$parent.$refs.thead.querySelectorAll('th').length;

      if (_this.$slots.expand) {
        _this.colspan++;
      }
    });
  },
  created: function created() {
    if (this.$slots.expand) this.$parent.hasExpadableData = true;
  },
  methods: {
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
    dblclicktr: function dblclicktr(evt) {
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
        var instance = new trx();
        instance.$props.colspan = this.colspan;
        instance.$slots.default = this.$slots.expand;
        instance.vm = instance.$mount();
        var newTR = document.createElement('tr').appendChild(instance.vm.$el);
        this.insertAfter(tr, newTR);
        this.expanded = true;
      } // this.$parent.clicktr(this.data, false)
      // if(this.$parent.multiple) {
      //   return
      // }
      // let scrollHeight = this.$refs.td.scrollHeight
      // if(this.maxHeight == '0px') {
      //   this.maxHeight = `${scrollHeight}px`
      //   setTimeout(() => {
      //     this.maxHeight = 'none'
      //   },300)
      // } else {
      //   this.maxHeight = `${scrollHeight}px`
      //   setTimeout(() => {
      //     this.maxHeight = `${0}px`
      //   }, 50)
      // }

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
// CONCATENATED MODULE: ./src/components/vsTable/vsTr.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsTable_vsTrvue_type_script_lang_js_ = (vsTrvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsTable/vsTr.vue





/* normalize component */

var vsTr_component = normalizeComponent(
  vsTable_vsTrvue_type_script_lang_js_,
  vsTrvue_type_template_id_69197972_render,
  vsTrvue_type_template_id_69197972_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsTr = (vsTr_component.exports);
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTable/vsTd.vue?vue&type=template&id=7e7ea6c0&
var vsTdvue_type_template_id_7e7ea6c0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{ref:"td",staticClass:"td vs-table--td",class:{'td-edit': _vm.$slots.edit}},[_c('span',{on:{"click":_vm.clicktd}},[(_vm.$slots.edit)?_c('vs-icon',{staticClass:"icon-edit",attrs:{"icon":"edit"}}):_vm._e(),_vm._t("default"),(_vm.$slots.edit)?_c('span',{staticClass:"empty"},[_vm._v(" "+_vm._s(_vm.data ? '' : 'Empty')+" ")]):_vm._e()],2)])}
var vsTdvue_type_template_id_7e7ea6c0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsTable/vsTd.vue?vue&type=template&id=7e7ea6c0&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTable/vsTd.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var vsTdvue_type_script_lang_js_ = ({
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
          var instance = new trx();
          instance.$props.colspan = 5;
          instance.$props.close = true;
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
// CONCATENATED MODULE: ./src/components/vsTable/vsTd.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsTable_vsTdvue_type_script_lang_js_ = (vsTdvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsTable/vsTd.vue





/* normalize component */

var vsTd_component = normalizeComponent(
  vsTable_vsTdvue_type_script_lang_js_,
  vsTdvue_type_template_id_7e7ea6c0_render,
  vsTdvue_type_template_id_7e7ea6c0_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTextarea/vsTextarea.vue?vue&type=template&id=553f4f6c&lang=html&
var vsTextareavue_type_template_id_553f4f6c_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.label)?_c('p',{staticClass:"vs-textarea--label"},[_vm._v(" "+_vm._s(_vm.label)+" ")]):_vm._e(),_c('div',{staticClass:"vs-component vs-con-textarea",class:[("vs-textarea-" + _vm.color), {'textarea-danger': _vm.counter ? (_vm.value && _vm.value.length > _vm.counter) : false, 'focusx': _vm.isFocus}],style:(_vm.style)},[_c('textarea',_vm._g(_vm._b({staticClass:"vs-textarea",domProps:{"value":_vm.value}},'textarea',_vm.$attrs,false),_vm.listeners)),(_vm.counter)?_c('div',{staticClass:"count vs-textarea--count"},[_vm._v(" "+_vm._s(_vm.value ? _vm.value.length : 0)+" / "+_vm._s(_vm.counter)+" ")]):_vm._e()])])}
var vsTextareavue_type_template_id_553f4f6c_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsTextarea/vsTextarea.vue?vue&type=template&id=553f4f6c&lang=html&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsTextarea/vsTextarea.vue?vue&type=script&lang=js&










function vsTextareavue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function vsTextareavue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { vsTextareavue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { vsTextareavue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsTextareavue_type_script_lang_js_ = ({
  name: "VsTextarea",
  inheritAttrs: false,
  props: {
    value: {},
    label: {
      default: null,
      type: String
    },
    color: {
      default: "primary",
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
      style.border = "1px solid ".concat(this.isFocus ? utils_color.getColor(this.color, 1) : "rgba(0, 0, 0,.08)");
      style.height = this.height;
      style.width = this.width;
      return style;
    },
    listeners: function listeners() {
      var _this = this;

      return vsTextareavue_type_script_lang_js_objectSpread({}, this.$listeners, {
        input: function input(evt) {
          _this.$emit("input", evt.target.value);
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
        this.$emit("update:counterDanger", true);
      } else {
        this.$emit("update:counterDanger", false);
      }
    }
  },
  methods: {
    focus: function focus() {
      this.isFocus = true;
      this.$emit("focus");
    },
    blur: function blur() {
      this.isFocus = false;
      this.$emit("blur");
    }
  }
});
// CONCATENATED MODULE: ./src/components/vsTextarea/vsTextarea.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsTextarea_vsTextareavue_type_script_lang_js_ = (vsTextareavue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsTextarea/vsTextarea.vue





/* normalize component */

var vsTextarea_component = normalizeComponent(
  vsTextarea_vsTextareavue_type_script_lang_js_,
  vsTextareavue_type_template_id_553f4f6c_lang_html_render,
  vsTextareavue_type_template_id_553f4f6c_lang_html_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsCollapse/vsCollapse.vue?vue&type=template&id=0a380da9&
var vsCollapsevue_type_template_id_0a380da9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-collapse",class:[_vm.type]},[_vm._t("default")],2)}
var vsCollapsevue_type_template_id_0a380da9_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsCollapse/vsCollapse.vue?vue&type=template&id=0a380da9&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsCollapse/vsCollapse.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
/* harmony default export */ var vsCollapsevue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/components/vsCollapse/vsCollapse.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsCollapse_vsCollapsevue_type_script_lang_js_ = (vsCollapsevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsCollapse/vsCollapse.vue





/* normalize component */

var vsCollapse_component = normalizeComponent(
  vsCollapse_vsCollapsevue_type_script_lang_js_,
  vsCollapsevue_type_template_id_0a380da9_render,
  vsCollapsevue_type_template_id_0a380da9_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsCollapse = (vsCollapse_component.exports);
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsCollapse/vsCollapseItem.vue?vue&type=template&id=f8e73bdc&
var vsCollapseItemvue_type_template_id_f8e73bdc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-collapse-item",class:{'open-item': _vm.maxHeight != '0px', 'disabledx': _vm.disabled},on:{"mouseover":_vm.mouseover,"mouseout":_vm.mouseout}},[_c('header',{staticClass:"vs-collapse-item--header",on:{"click":_vm.toggleContent}},[_vm._t("header"),(!_vm.notArrow)?_c('span',{staticClass:"icon-header vs-collapse-item--icon-header"},[_c('vs-icon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.iconArrow}})],1):_vm._e()],2),_c('div',{ref:"content",staticClass:"vs-collapse-item--content",style:(_vm.styleContent)},[_c('div',{staticClass:"con-content--item"},[_vm._t("default")],2)])])}
var vsCollapseItemvue_type_template_id_f8e73bdc_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsCollapse/vsCollapseItem.vue?vue&type=template&id=f8e73bdc&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsCollapse/vsCollapseItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsCollapseItemvue_type_script_lang_js_ = ({
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
  methods: {
    changeHeight: function changeHeight() {
      var maxHeightx = this.$refs.content.scrollHeight;

      if (this.maxHeight != '0px') {
        this.maxHeight = "".concat(maxHeightx, "px");
      }
    },
    toggleContent: function toggleContent() {
      var _this = this;

      if (this.openHover || this.disabled) {
        return;
      }

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
      if (this.disabled) {
        return;
      }

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
// CONCATENATED MODULE: ./src/components/vsCollapse/vsCollapseItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsCollapse_vsCollapseItemvue_type_script_lang_js_ = (vsCollapseItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsCollapse/vsCollapseItem.vue





/* normalize component */

var vsCollapseItem_component = normalizeComponent(
  vsCollapse_vsCollapseItemvue_type_script_lang_js_,
  vsCollapseItemvue_type_template_id_f8e73bdc_render,
  vsCollapseItemvue_type_template_id_f8e73bdc_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsImages/vsImages.vue?vue&type=template&id=035ce50a&lang=html&
var vsImagesvue_type_template_id_035ce50a_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-component vs-images",class:[("vs-images-hover-" + _vm.hover), {'alternating': _vm.alternating, 'notBorderRadius': _vm.notBorderRadius, 'notMargin': _vm.notMargin}]},[_c('ul',{staticClass:"vs-ul-images vs-images--ul"},[_vm._t("default")],2)])}
var vsImagesvue_type_template_id_035ce50a_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsImages/vsImages.vue?vue&type=template&id=035ce50a&lang=html&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsImages/vsImages.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsImagesvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/components/vsImages/vsImages.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsImages_vsImagesvue_type_script_lang_js_ = (vsImagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsImages/vsImages.vue





/* normalize component */

var vsImages_component = normalizeComponent(
  vsImages_vsImagesvue_type_script_lang_js_,
  vsImagesvue_type_template_id_035ce50a_lang_html_render,
  vsImagesvue_type_template_id_035ce50a_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsImages = (vsImages_component.exports);
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsImages/vsImage.vue?vue&type=template&id=f6a3672a&
var vsImagevue_type_template_id_f6a3672a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"vs-image"},[_c('div',{staticClass:"con-vs-image"},[_c('div',{staticClass:"vs-image--img",style:(_vm.styleImage),attrs:{"v-bind":_vm.$attrs}})]),_c('img',{staticClass:"imag-blur",attrs:{"src":_vm.src,"alt":""}})])}
var vsImagevue_type_template_id_f6a3672a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vsImages/vsImage.vue?vue&type=template&id=f6a3672a&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/vsImages/vsImage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsImagevue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/components/vsImages/vsImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsImages_vsImagevue_type_script_lang_js_ = (vsImagevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vsImages/vsImage.vue





/* normalize component */

var vsImage_component = normalizeComponent(
  vsImages_vsImagevue_type_script_lang_js_,
  vsImagevue_type_template_id_f6a3672a_render,
  vsImagevue_type_template_id_f6a3672a_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/layout/vsRow/vsRow.vue?vue&type=template&id=512757c0&lang=html&
var vsRowvue_type_template_id_512757c0_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-row",style:({
    'align-items':_vm.vsAlign,
    'justify-content':_vm.vsJustify,
    'display':_vm.vsType,
    'overflow': _vm.vsType === 'block' ? 'hidden' : null,
    'width':_vm.vsW*100/12+'%'})},[_vm._t("default")],2)}
var vsRowvue_type_template_id_512757c0_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/layout/vsRow/vsRow.vue?vue&type=template&id=512757c0&lang=html&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/layout/vsRow/vsRow.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsRowvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/layout/vsRow/vsRow.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsRow_vsRowvue_type_script_lang_js_ = (vsRowvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layout/vsRow/vsRow.vue?vue&type=style&index=0&lang=css&
var vsRowvue_type_style_index_0_lang_css_ = __webpack_require__("dc51");

// CONCATENATED MODULE: ./src/layout/vsRow/vsRow.vue






/* normalize component */

var vsRow_component = normalizeComponent(
  vsRow_vsRowvue_type_script_lang_js_,
  vsRowvue_type_template_id_512757c0_lang_html_render,
  vsRowvue_type_template_id_512757c0_lang_html_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/layout/vsCol/vsCol.vue?vue&type=template&id=68e4485c&lang=html&
var vsColvue_type_template_id_68e4485c_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-col",class:[
    'vs-xs-'+_vm.vsXs,
    'vs-sm-'+_vm.vsSm,
    'vs-lg-'+_vm.vsLg ],style:({
    'order':_vm.vsOrder,
    'justify-content':_vm.vsJustify,
    'display':_vm.vsType,
    'align-items':_vm.vsAlign,
    'margin-left':_vm.vsOffset*100/12+'%',
    'width':_vm.vsW*100/12+'%'})},[_vm._t("default")],2)}
var vsColvue_type_template_id_68e4485c_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/layout/vsCol/vsCol.vue?vue&type=template&id=68e4485c&lang=html&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/layout/vsCol/vsCol.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsColvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/layout/vsCol/vsCol.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsCol_vsColvue_type_script_lang_js_ = (vsColvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layout/vsCol/vsCol.vue?vue&type=style&index=0&lang=css&
var vsColvue_type_style_index_0_lang_css_ = __webpack_require__("f2fe");

// CONCATENATED MODULE: ./src/layout/vsCol/vsCol.vue






/* normalize component */

var vsCol_component = normalizeComponent(
  vsCol_vsColvue_type_script_lang_js_,
  vsColvue_type_template_id_68e4485c_lang_html_render,
  vsColvue_type_template_id_68e4485c_lang_html_staticRenderFns,
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
// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/functions/vsNotifications/index.vue?vue&type=template&id=a13c05d4&lang=html&
var vsNotificationsvue_type_template_id_a13c05d4_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"noti"},on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"leave":_vm.leave}},[(_vm.active)?_c('div',{ref:"noti",staticClass:"vs-component vs-notifications",class:[("vs-noti-" + _vm.position),("vs-noti-" + _vm.color),{'activeNoti':_vm.active}],style:(_vm.stylex),on:{"click":_vm.clickNoti}},[_c('div',{staticClass:"content-noti"},[_c('div',{staticClass:"con-text-noti"},[_c('h3',{domProps:{"innerHTML":_vm._s(_vm.title)}}),_c('p',{domProps:{"innerHTML":_vm._s(_vm.text)}}),_vm._t("default")],2),(_vm.icon)?_c('vs-icon',{staticClass:"vs-icon-noti",attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon}}):_vm._e()],1),_c('span',{staticClass:"filling",style:(_vm.fillingStyle)})]):_vm._e()])}
var vsNotificationsvue_type_template_id_a13c05d4_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/functions/vsNotifications/index.vue?vue&type=template&id=a13c05d4&lang=html&

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.string.fixed.js
var es_string_fixed = __webpack_require__("8e08");

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/functions/vsNotifications/index.vue?vue&type=script&lang=js&














function vsNotificationsvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function vsNotificationsvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { vsNotificationsvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { vsNotificationsvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsNotificationsvue_type_script_lang_js_ = ({
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
      return vsNotificationsvue_type_script_lang_js_objectSpread({}, this.cords, {
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
// CONCATENATED MODULE: ./src/functions/vsNotifications/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var functions_vsNotificationsvue_type_script_lang_js_ = (vsNotificationsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/functions/vsNotifications/index.vue





/* normalize component */

var vsNotifications_component = normalizeComponent(
  functions_vsNotificationsvue_type_script_lang_js_,
  vsNotificationsvue_type_template_id_a13c05d4_lang_html_render,
  vsNotificationsvue_type_template_id_a13c05d4_lang_html_staticRenderFns,
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
// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("fcf2");

// EXTERNAL MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("5dc0");

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b32c161-vue-loader-template"}!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/functions/vsLoading/index.vue?vue&type=template&id=5ba0e5fe&
var vsLoadingvue_type_template_id_5ba0e5fe_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[(_vm.active)?_c('div',{staticClass:"con-vs-loading",class:[("vs-loading-background-" + _vm.background),("vs-loading-color-" + _vm.color),{'textAfter':_vm.textAfter}],style:(_vm.style),on:{"click":_vm.effectClick}},[_c('transition',{attrs:{"name":"effect-click"}},[(_vm.activeEffectClick&&_vm.clickEffect)?_c('div',{staticClass:"effect-click",style:(_vm.styleEffectClick)}):_vm._e()]),(_vm.text)?_c('h4',{staticClass:"title-loading"},[_vm._v(_vm._s(_vm.text))]):_vm._e(),_c('div',{staticClass:"vs-loading",class:[_vm.type],style:({
        transform:("scale(" + _vm.scale + ")")
      })},[(_vm.type!='material')?_c('div',{staticClass:"effect-1 effects",style:(_vm.styleEffect1)}):_vm._e(),(_vm.type!='material')?_c('div',{staticClass:"effect-2 effects",style:(_vm.styleEffect2)}):_vm._e(),(_vm.type!='material')?_c('div',{staticClass:"effect-3 effects",style:(_vm.styleEffect3)}):_vm._e(),_c('img',{attrs:{"src":_vm.src}}),(_vm.type=='material')?_c('svg',{staticClass:"spinner",attrs:{"width":"50px","height":"50px","viewBox":"0 0 66 66","xmlns":"http://www.w3.org/2000/svg"}},[_c('circle',{staticClass:"path",attrs:{"fill":"none","stroke-width":"5","stroke-linecap":"round","cx":"33","cy":"33","r":"30"}})]):_vm._e()])],1):_vm._e()])}
var vsLoadingvue_type_template_id_5ba0e5fe_staticRenderFns = []


// CONCATENATED MODULE: ./src/functions/vsLoading/index.vue?vue&type=template&id=5ba0e5fe&

// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/functions/vsLoading/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsLoadingvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/functions/vsLoading/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var functions_vsLoadingvue_type_script_lang_js_ = (vsLoadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/functions/vsLoading/index.vue





/* normalize component */

var vsLoading_component = normalizeComponent(
  functions_vsLoadingvue_type_script_lang_js_,
  vsLoadingvue_type_template_id_5ba0e5fe_render,
  vsLoadingvue_type_template_id_5ba0e5fe_staticRenderFns,
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
        this.$vs = Vue.observable(options); // define $vs functions

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
  } // Use Components


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
  } // Define vuesax functions and properties ($vs)


  defineGlobalMixin(Vue, options);
};

if (typeof window !== 'undefined' && window.Vue) {
  src_install(window.Vue);
}

/* harmony default export */ var src = (src_install);






























 //New Component import
//layout



// CONCATENATED MODULE: C:/Users/tiago/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport vsButton */__webpack_require__.d(__webpack_exports__, "vsButton", function() { return components_vsButton; });
/* concated harmony reexport vsSelect */__webpack_require__.d(__webpack_exports__, "vsSelect", function() { return components_vsSelect; });
/* concated harmony reexport vsSwitch */__webpack_require__.d(__webpack_exports__, "vsSwitch", function() { return components_vsSwitch; });
/* concated harmony reexport vsCheckbox */__webpack_require__.d(__webpack_exports__, "vsCheckbox", function() { return components_vsCheckBox; });
/* concated harmony reexport vsRadio */__webpack_require__.d(__webpack_exports__, "vsRadio", function() { return components_vsRadio; });
/* concated harmony reexport vsInput */__webpack_require__.d(__webpack_exports__, "vsInput", function() { return components_vsInput; });
/* concated harmony reexport vsTabs */__webpack_require__.d(__webpack_exports__, "vsTabs", function() { return components_vsTabs; });
/* concated harmony reexport vsSlider */__webpack_require__.d(__webpack_exports__, "vsSlider", function() { return components_vsSlider; });
/* concated harmony reexport vsInputNumber */__webpack_require__.d(__webpack_exports__, "vsInputNumber", function() { return components_vsInputNumber; });
/* concated harmony reexport vsTooltip */__webpack_require__.d(__webpack_exports__, "vsTooltip", function() { return components_vsTooltip; });
/* concated harmony reexport vsUpload */__webpack_require__.d(__webpack_exports__, "vsUpload", function() { return components_vsUpload; });
/* concated harmony reexport vsPopup */__webpack_require__.d(__webpack_exports__, "vsPopup", function() { return components_vsPopup; });
/* concated harmony reexport vsAlert */__webpack_require__.d(__webpack_exports__, "vsAlert", function() { return components_vsAlert; });
/* concated harmony reexport vsChip */__webpack_require__.d(__webpack_exports__, "vsChip", function() { return components_vsChip; });
/* concated harmony reexport vsProgress */__webpack_require__.d(__webpack_exports__, "vsProgress", function() { return components_vsProgress; });
/* concated harmony reexport vsCard */__webpack_require__.d(__webpack_exports__, "vsCard", function() { return components_vsCard; });
/* concated harmony reexport vsList */__webpack_require__.d(__webpack_exports__, "vsList", function() { return components_vsList; });
/* concated harmony reexport vsAvatar */__webpack_require__.d(__webpack_exports__, "vsAvatar", function() { return components_vsAvatar; });
/* concated harmony reexport vsPagination */__webpack_require__.d(__webpack_exports__, "vsPagination", function() { return components_vsPagination; });
/* concated harmony reexport vsBreadcrumb */__webpack_require__.d(__webpack_exports__, "vsBreadcrumb", function() { return components_vsBreadcrumb; });
/* concated harmony reexport vsPrompt */__webpack_require__.d(__webpack_exports__, "vsPrompt", function() { return vsPrompt; });
/* concated harmony reexport vsDivider */__webpack_require__.d(__webpack_exports__, "vsDivider", function() { return components_vsDivider; });
/* concated harmony reexport vsSpacer */__webpack_require__.d(__webpack_exports__, "vsSpacer", function() { return components_vsSpacer; });
/* concated harmony reexport vsIcon */__webpack_require__.d(__webpack_exports__, "vsIcon", function() { return components_vsIcon; });
/* concated harmony reexport vsNavbar */__webpack_require__.d(__webpack_exports__, "vsNavbar", function() { return components_vsNavbar; });
/* concated harmony reexport vsSideBar */__webpack_require__.d(__webpack_exports__, "vsSideBar", function() { return vsSideBar; });
/* concated harmony reexport vsDropDown */__webpack_require__.d(__webpack_exports__, "vsDropDown", function() { return components_vsDropDown; });
/* concated harmony reexport vsTable */__webpack_require__.d(__webpack_exports__, "vsTable", function() { return components_vsTable; });
/* concated harmony reexport vsTextarea */__webpack_require__.d(__webpack_exports__, "vsTextarea", function() { return components_vsTextarea; });
/* concated harmony reexport vsCollapse */__webpack_require__.d(__webpack_exports__, "vsCollapse", function() { return components_vsCollapse; });
/* concated harmony reexport vsImages */__webpack_require__.d(__webpack_exports__, "vsImages", function() { return components_vsImages; });
/* concated harmony reexport vsRow */__webpack_require__.d(__webpack_exports__, "vsRow", function() { return layout_vsRow; });
/* concated harmony reexport vsCol */__webpack_require__.d(__webpack_exports__, "vsCol", function() { return layout_vsCol; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ }),

/***/ "1c97":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("59a3");
var $trim = __webpack_require__("2588").trim;
var forcedStringTrimMethod = __webpack_require__("40ba");

// `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "1d52":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("59a3");
var exec = __webpack_require__("a8df");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "1f8e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("59a3");
var notARegExp = __webpack_require__("b0d0");
var requireObjectCoercible = __webpack_require__("3ca2");
var correctIsRegExpLogic = __webpack_require__("400a");

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "220d":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("903b");
var objectKeys = __webpack_require__("7511");
var toIndexedObject = __webpack_require__("55fe");
var propertyIsEnumerable = __webpack_require__("a970").f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.github.io/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.github.io/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "2344":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("e168");

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "2378":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("59a3");
var $indexOf = __webpack_require__("f4ed").indexOf;
var sloppyArrayMethod = __webpack_require__("ca2c");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var SLOPPY_METHOD = sloppyArrayMethod('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || SLOPPY_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "2587":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f6df");
var fails = __webpack_require__("3c50");
var classof = __webpack_require__("3eab");
var bind = __webpack_require__("c552");
var html = __webpack_require__("a42c");
var createElement = __webpack_require__("f92c");
var IS_IOS = __webpack_require__("2344");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classof(process) == 'process') {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts && !fails(post)) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "2588":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("3ca2");
var whitespaces = __webpack_require__("0143");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "25a7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("46f7").forEach;
var sloppyArrayMethod = __webpack_require__("ca2c");

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "26d0":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("f92b");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "2ace":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__("f92b");
var anObject = __webpack_require__("0f1f");
var fails = __webpack_require__("3c50");
var flags = __webpack_require__("04ca");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "2c5a":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("79b1").f;
var has = __webpack_require__("cbe9");
var wellKnownSymbol = __webpack_require__("83e9");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "2d99":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var createNonEnumerableProperty = __webpack_require__("5469");
var redefine = __webpack_require__("f92b");
var fails = __webpack_require__("3c50");
var wellKnownSymbol = __webpack_require__("83e9");
var regexpExec = __webpack_require__("a8df");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
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

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
    if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
  }
};


/***/ }),

/***/ "2e8b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f6df");

module.exports = global;


/***/ }),

/***/ "2f20":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("3c50");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
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

/***/ "3b24":
/***/ (function(module, exports) {

exports.endianness = function () { return 'LE' };

exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname
    }
    else return '';
};

exports.loadavg = function () { return [] };

exports.uptime = function () { return 0 };

exports.freemem = function () {
    return Number.MAX_VALUE;
};

exports.totalmem = function () {
    return Number.MAX_VALUE;
};

exports.cpus = function () { return [] };

exports.type = function () { return 'Browser' };

exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};

exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} };

exports.arch = function () { return 'javascript' };

exports.platform = function () { return 'browser' };

exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};

exports.EOL = '\n';

exports.homedir = function () {
	return '/'
};


/***/ }),

/***/ "3bf4":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "3c13":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("59a3");
var toObject = __webpack_require__("d48d");
var nativeKeys = __webpack_require__("7511");
var fails = __webpack_require__("3c50");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "3c50":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "3ca2":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "3ced":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("0f1f");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "3da8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("59a3");
var createIteratorConstructor = __webpack_require__("95fa");
var getPrototypeOf = __webpack_require__("fe6a");
var setPrototypeOf = __webpack_require__("8a98");
var setToStringTag = __webpack_require__("2c5a");
var createNonEnumerableProperty = __webpack_require__("5469");
var redefine = __webpack_require__("f92b");
var wellKnownSymbol = __webpack_require__("83e9");
var IS_PURE = __webpack_require__("ea48");
var Iterators = __webpack_require__("6a4d");
var IteratorsCore = __webpack_require__("e940");

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
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "3dc6":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("3eab");

// `thisNumberValue` abstract operation
// https://tc39.github.io/ecma262/#sec-thisnumbervalue
module.exports = function (value) {
  if (typeof value != 'number' && classof(value) != 'Number') {
    throw TypeError('Incorrect invocation');
  }
  return +value;
};


/***/ }),

/***/ "3e3f":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("903b");
var definePropertyModule = __webpack_require__("79b1");
var anObject = __webpack_require__("0f1f");
var objectKeys = __webpack_require__("7511");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3eab":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "400a":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("83e9");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "40a4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f6df");
var inspectSource = __webpack_require__("a749");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "40ba":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("3c50");
var whitespaces = __webpack_require__("0143");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ "464f":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "4654":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("2d99");
var anObject = __webpack_require__("0f1f");
var requireObjectCoercible = __webpack_require__("3ca2");
var sameValue = __webpack_require__("ed02");
var regExpExec = __webpack_require__("5fb4");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', 1, function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : regexp[SEARCH];
      return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative(nativeSearch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "46f7":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("c552");
var IndexedObject = __webpack_require__("b412");
var toObject = __webpack_require__("d48d");
var toLength = __webpack_require__("8598");
var arraySpeciesCreate = __webpack_require__("cbe7");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
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
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "4831":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("903b");
var defineProperty = __webpack_require__("79b1").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "4d84":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("d11d");
var enumBugKeys = __webpack_require__("9990");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "4eb0":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("0f1f");
var isArrayIteratorMethod = __webpack_require__("6bac");
var toLength = __webpack_require__("8598");
var bind = __webpack_require__("c552");
var getIteratorMethod = __webpack_require__("69a1");
var callWithSafeIterationClosing = __webpack_require__("3ced");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),

/***/ "4eed":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("3c50");
var wellKnownSymbol = __webpack_require__("83e9");
var V8_VERSION = __webpack_require__("92f3");

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

/***/ "4f11":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f6df");
var DOMIterables = __webpack_require__("183e");
var forEach = __webpack_require__("25a7");
var createNonEnumerableProperty = __webpack_require__("5469");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "50ed":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("c4b2").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "53f3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("c552");
var toObject = __webpack_require__("d48d");
var callWithSafeIterationClosing = __webpack_require__("3ced");
var isArrayIteratorMethod = __webpack_require__("6bac");
var toLength = __webpack_require__("8598");
var createProperty = __webpack_require__("9c9b");
var getIteratorMethod = __webpack_require__("69a1");

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var index = 0;
  var iteratorMethod = getIteratorMethod(O);
  var length, result, step, iterator, next;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      createProperty(result, index, mapping
        ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true)
        : step.value
      );
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "5469":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("903b");
var definePropertyModule = __webpack_require__("79b1");
var createPropertyDescriptor = __webpack_require__("0ff4");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "5473":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("83e9");
var create = __webpack_require__("99a3");
var createNonEnumerableProperty = __webpack_require__("5469");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  createNonEnumerableProperty(ArrayPrototype, UNSCOPABLES, create(null));
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "55fe":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("b412");
var requireObjectCoercible = __webpack_require__("3ca2");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "570c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("e00e");
var definePropertyModule = __webpack_require__("79b1");
var wellKnownSymbol = __webpack_require__("83e9");
var DESCRIPTORS = __webpack_require__("903b");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "57cd":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "59a3":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f6df");
var getOwnPropertyDescriptor = __webpack_require__("8005").f;
var createNonEnumerableProperty = __webpack_require__("5469");
var redefine = __webpack_require__("f92b");
var setGlobal = __webpack_require__("ff39");
var copyConstructorProperties = __webpack_require__("a0d1");
var isForced = __webpack_require__("2f20");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "5ca3":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("59a3");

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.github.io/ecma262/#sec-math.trunc
$({ target: 'Math', stat: true }, {
  trunc: function trunc(it) {
    return (it > 0 ? floor : ceil)(it);
  }
});


/***/ }),

/***/ "5ce7":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("3eab");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "5dc0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("c4b2").charAt;
var InternalStateModule = __webpack_require__("df9b");
var defineIterator = __webpack_require__("3da8");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "5fa1":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("59a3");
var sign = __webpack_require__("051a");

// `Math.sign` method
// https://tc39.github.io/ecma262/#sec-math.sign
$({ target: 'Math', stat: true }, {
  sign: sign
});


/***/ }),

/***/ "5fb4":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("3eab");
var regexpExec = __webpack_require__("a8df");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "5ff6":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("6d50");
var classofRaw = __webpack_require__("3eab");
var wellKnownSymbol = __webpack_require__("83e9");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

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
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "621b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("59a3");
var aFunction = __webpack_require__("464f");
var toObject = __webpack_require__("d48d");
var fails = __webpack_require__("3c50");
var sloppyArrayMethod = __webpack_require__("ca2c");

var test = [];
var nativeSort = test.sort;

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var SLOPPY_METHOD = sloppyArrayMethod('sort');

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || SLOPPY_METHOD;

// `Array.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? nativeSort.call(toObject(this))
      : nativeSort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "622b":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "6338":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f6df");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "633d":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("464f");
var toObject = __webpack_require__("d48d");
var IndexedObject = __webpack_require__("b412");
var toLength = __webpack_require__("8598");

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
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
        throw TypeError('Reduce of empty array with no initial value');
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
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "68f7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6960":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "69a1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("5ff6");
var Iterators = __webpack_require__("6a4d");
var wellKnownSymbol = __webpack_require__("83e9");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "6a4d":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "6b93":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "6bac":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("83e9");
var Iterators = __webpack_require__("6a4d");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "6bf3":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f6df");

module.exports = global.Promise;


/***/ }),

/***/ "6d50":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("83e9");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "6e7c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("59a3");
var $find = __webpack_require__("46f7").find;
var addToUnscopables = __webpack_require__("5473");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "716b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("2d99");
var isRegExp = __webpack_require__("d425");
var anObject = __webpack_require__("0f1f");
var requireObjectCoercible = __webpack_require__("3ca2");
var speciesConstructor = __webpack_require__("ac14");
var advanceStringIndex = __webpack_require__("50ed");
var toLength = __webpack_require__("8598");
var callRegExpExec = __webpack_require__("5fb4");
var regexpExec = __webpack_require__("a8df");
var fails = __webpack_require__("3c50");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "7244":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("59a3");
var $map = __webpack_require__("46f7").map;
var fails = __webpack_require__("3c50");
var arrayMethodHasSpeciesSupport = __webpack_require__("4eed");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = HAS_SPECIES_SUPPORT && !fails(function () {
  [].map.call({ length: -1, 0: 1 }, function (it) { throw it; });
});

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "7511":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("d11d");
var enumBugKeys = __webpack_require__("9990");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "77be":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("59a3");
var parseFloatImplementation = __webpack_require__("d01b");

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat != parseFloatImplementation }, {
  parseFloat: parseFloatImplementation
});


/***/ }),

/***/ "79b1":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("903b");
var IE8_DOM_DEFINE = __webpack_require__("ae7b");
var anObject = __webpack_require__("0f1f");
var toPrimitive = __webpack_require__("9a1c");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "7bb2":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("57cd");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "7c7a":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("f92b");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "7cde":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("6d50");
var redefine = __webpack_require__("f92b");
var toString = __webpack_require__("e516");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "8005":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("903b");
var propertyIsEnumerableModule = __webpack_require__("a970");
var createPropertyDescriptor = __webpack_require__("0ff4");
var toIndexedObject = __webpack_require__("55fe");
var toPrimitive = __webpack_require__("9a1c");
var has = __webpack_require__("cbe9");
var IE8_DOM_DEFINE = __webpack_require__("ae7b");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "81bd":
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

/***/ "8272":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("8d4c");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "82f8":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("59a3");
var fails = __webpack_require__("3c50");
var toIndexedObject = __webpack_require__("55fe");
var nativeGetOwnPropertyDescriptor = __webpack_require__("8005").f;
var DESCRIPTORS = __webpack_require__("903b");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "83e9":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f6df");
var shared = __webpack_require__("d5b0");
var has = __webpack_require__("cbe9");
var uid = __webpack_require__("f7fe");
var NATIVE_SYMBOL = __webpack_require__("072a");
var USE_SYMBOL_AS_UID = __webpack_require__("d823");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "8598":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("8d4c");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "8a98":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("0f1f");
var aPossiblePrototype = __webpack_require__("7bb2");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "8d4c":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "8e08":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("59a3");
var createHTML = __webpack_require__("a90d");
var forcedStringHTMLMethod = __webpack_require__("fb4e");

// `String.prototype.fixed` method
// https://tc39.github.io/ecma262/#sec-string.prototype.fixed
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('fixed') }, {
  fixed: function fixed() {
    return createHTML(this, 'tt', '', '');
  }
});


/***/ }),

/***/ "903b":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("3c50");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "92f3":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f6df");
var userAgent = __webpack_require__("e168");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "931d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("59a3");
var IS_PURE = __webpack_require__("ea48");
var global = __webpack_require__("f6df");
var getBuiltIn = __webpack_require__("e00e");
var NativePromise = __webpack_require__("6bf3");
var redefine = __webpack_require__("f92b");
var redefineAll = __webpack_require__("7c7a");
var setToStringTag = __webpack_require__("2c5a");
var setSpecies = __webpack_require__("570c");
var isObject = __webpack_require__("57cd");
var aFunction = __webpack_require__("464f");
var anInstance = __webpack_require__("6960");
var classof = __webpack_require__("3eab");
var inspectSource = __webpack_require__("a749");
var iterate = __webpack_require__("4eb0");
var checkCorrectnessOfIteration = __webpack_require__("cad9");
var speciesConstructor = __webpack_require__("ac14");
var task = __webpack_require__("2587").set;
var microtask = __webpack_require__("fd93");
var promiseResolve = __webpack_require__("962f");
var hostReportErrors = __webpack_require__("6338");
var newPromiseCapabilityModule = __webpack_require__("18f5");
var perform = __webpack_require__("e86b");
var InternalStateModule = __webpack_require__("df9b");
var isForced = __webpack_require__("2f20");
var wellKnownSymbol = __webpack_require__("83e9");
var V8_VERSION = __webpack_require__("92f3");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && typeof PromiseRejectionEvent != 'function') return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (handler = global['on' + name]) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task.call(global, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "95fa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("e940").IteratorPrototype;
var create = __webpack_require__("99a3");
var createPropertyDescriptor = __webpack_require__("0ff4");
var setToStringTag = __webpack_require__("2c5a");
var Iterators = __webpack_require__("6a4d");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "962f":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("0f1f");
var isObject = __webpack_require__("57cd");
var newPromiseCapability = __webpack_require__("18f5");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "9803":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("55fe");
var nativeGetOwnPropertyNames = __webpack_require__("4d84").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "9990":
/***/ (function(module, exports) {

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

/***/ "99a3":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("0f1f");
var defineProperties = __webpack_require__("3e3f");
var enumBugKeys = __webpack_require__("9990");
var hiddenKeys = __webpack_require__("622b");
var html = __webpack_require__("a42c");
var documentCreateElement = __webpack_require__("f92c");
var sharedKey = __webpack_require__("e7a4");
var IE_PROTO = sharedKey('IE_PROTO');

var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

hiddenKeys[IE_PROTO] = true;


/***/ }),

/***/ "99c0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9a1c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("57cd");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "9c9b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("9a1c");
var definePropertyModule = __webpack_require__("79b1");
var createPropertyDescriptor = __webpack_require__("0ff4");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "9f21":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("59a3");
var forEach = __webpack_require__("25a7");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "a026":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f6df");
var setGlobal = __webpack_require__("ff39");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "a0d1":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("cbe9");
var ownKeys = __webpack_require__("1428");
var getOwnPropertyDescriptorModule = __webpack_require__("8005");
var definePropertyModule = __webpack_require__("79b1");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "a34a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("3bf4");


/***/ }),

/***/ "a42c":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("e00e");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "a749":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("d5b0");

var functionToString = Function.toString;

module.exports = shared('inspectSource', function (it) {
  return functionToString.call(it);
});


/***/ }),

/***/ "a8df":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("04ca");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "a90d":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("3ca2");

var quot = /"/g;

// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
// https://tc39.github.io/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = String(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "a92f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("59a3");
var $includes = __webpack_require__("f4ed").includes;
var addToUnscopables = __webpack_require__("5473");

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "a970":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "ac14":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("0f1f");
var aFunction = __webpack_require__("464f");
var wellKnownSymbol = __webpack_require__("83e9");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "ac5d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("59a3");
var toInteger = __webpack_require__("8d4c");
var thisNumberValue = __webpack_require__("3dc6");
var repeat = __webpack_require__("d484");
var fails = __webpack_require__("3c50");

var nativeToFixed = 1.0.toFixed;
var floor = Math.floor;

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

var FORCED = nativeToFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed.call({});
});

// `Number.prototype.toFixed` method
// https://tc39.github.io/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  // eslint-disable-next-line max-statements
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toInteger(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    var multiply = function (n, c) {
      var index = -1;
      var c2 = c;
      while (++index < 6) {
        c2 += n * data[index];
        data[index] = c2 % 1e7;
        c2 = floor(c2 / 1e7);
      }
    };

    var divide = function (n) {
      var index = 6;
      var c = 0;
      while (--index >= 0) {
        c += data[index];
        data[index] = floor(c / n);
        c = (c % n) * 1e7;
      }
    };

    var dataToString = function () {
      var index = 6;
      var s = '';
      while (--index >= 0) {
        if (s !== '' || index === 0 || data[index] !== 0) {
          var t = String(data[index]);
          s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
        }
      } return s;
    };

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);
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
        multiply(0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        result = dataToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        result = dataToString() + repeat.call('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat.call('0', fractDigits - k) + result
        : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ }),

/***/ "ae7b":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("903b");
var fails = __webpack_require__("3c50");
var createElement = __webpack_require__("f92c");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "b0d0":
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__("d425");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "b412":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("3c50");
var classof = __webpack_require__("3eab");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "b7d5":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("3c50");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "bbfa":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bbfe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("59a3");
var $reduce = __webpack_require__("633d").left;
var sloppyArrayMethod = __webpack_require__("ca2c");

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: sloppyArrayMethod('reduce') }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "c080":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("59a3");
var toAbsoluteIndex = __webpack_require__("8272");
var toInteger = __webpack_require__("8d4c");
var toLength = __webpack_require__("8598");
var toObject = __webpack_require__("d48d");
var arraySpeciesCreate = __webpack_require__("cbe7");
var createProperty = __webpack_require__("9c9b");
var arrayMethodHasSpeciesSupport = __webpack_require__("4eed");

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('splice') }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
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
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
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
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "c4b2":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("8d4c");
var requireObjectCoercible = __webpack_require__("3ca2");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "c552":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("464f");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
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

/***/ "c9be":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("59a3");
var DESCRIPTORS = __webpack_require__("903b");
var ownKeys = __webpack_require__("1428");
var toIndexedObject = __webpack_require__("55fe");
var getOwnPropertyDescriptorModule = __webpack_require__("8005");
var createProperty = __webpack_require__("9c9b");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "ca2c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("3c50");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !method || !fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "cad9":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("83e9");

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
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
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

/***/ "cbe7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("57cd");
var isArray = __webpack_require__("5ce7");
var wellKnownSymbol = __webpack_require__("83e9");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "cbe9":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "d01b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f6df");
var trim = __webpack_require__("2588").trim;
var whitespaces = __webpack_require__("0143");

var nativeParseFloat = global.parseFloat;
var FORCED = 1 / nativeParseFloat(whitespaces + '-0') !== -Infinity;

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(String(string));
  var result = nativeParseFloat(trimmedString);
  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : nativeParseFloat;


/***/ }),

/***/ "d11d":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("cbe9");
var toIndexedObject = __webpack_require__("55fe");
var indexOf = __webpack_require__("f4ed").indexOf;
var hiddenKeys = __webpack_require__("622b");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d193":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("57cd");
var setPrototypeOf = __webpack_require__("8a98");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "d425":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("57cd");
var classof = __webpack_require__("3eab");
var wellKnownSymbol = __webpack_require__("83e9");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "d484":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__("8d4c");
var requireObjectCoercible = __webpack_require__("3ca2");

// `String.prototype.repeat` method implementation
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
module.exports = ''.repeat || function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "d48d":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("3ca2");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "d5b0":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("ea48");
var store = __webpack_require__("a026");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.4.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "d713":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("2d99");
var anObject = __webpack_require__("0f1f");
var toObject = __webpack_require__("d48d");
var toLength = __webpack_require__("8598");
var toInteger = __webpack_require__("8d4c");
var requireObjectCoercible = __webpack_require__("3ca2");
var advanceStringIndex = __webpack_require__("50ed");
var regExpExec = __webpack_require__("5fb4");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "d823":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("072a");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol() == 'symbol';


/***/ }),

/***/ "dc51":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_vsRow_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("68f7");
/* harmony import */ var _Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_vsRow_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_vsRow_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_vsRow_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "df9b":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("40a4");
var global = __webpack_require__("f6df");
var isObject = __webpack_require__("57cd");
var createNonEnumerableProperty = __webpack_require__("5469");
var objectHas = __webpack_require__("cbe9");
var sharedKey = __webpack_require__("e7a4");
var hiddenKeys = __webpack_require__("622b");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
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

/***/ "e00e":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("2e8b");
var global = __webpack_require__("f6df");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "e168":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("e00e");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "e516":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("6d50");
var classof = __webpack_require__("5ff6");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "e7a4":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("d5b0");
var uid = __webpack_require__("f7fe");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "e86b":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "e940":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__("fe6a");
var createNonEnumerableProperty = __webpack_require__("5469");
var has = __webpack_require__("cbe9");
var wellKnownSymbol = __webpack_require__("83e9");
var IS_PURE = __webpack_require__("ea48");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "ea48":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "eb54":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("59a3");
var parseIntImplementation = __webpack_require__("0205");

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ }),

/***/ "ed02":
/***/ (function(module, exports) {

// `SameValue` abstract operation
// https://tc39.github.io/ecma262/#sec-samevalue
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "f2fe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_vsCol_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bbfa");
/* harmony import */ var _Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_vsCol_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_vsCol_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_Users_tiago_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_vsCol_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f4ed":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("55fe");
var toLength = __webpack_require__("8598");
var toAbsoluteIndex = __webpack_require__("8272");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
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
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "f6df":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("1939")))

/***/ }),

/***/ "f7fe":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "f90f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("59a3");
var fails = __webpack_require__("3c50");
var isArray = __webpack_require__("5ce7");
var isObject = __webpack_require__("57cd");
var toObject = __webpack_require__("d48d");
var toLength = __webpack_require__("8598");
var createProperty = __webpack_require__("9c9b");
var arraySpeciesCreate = __webpack_require__("cbe7");
var arrayMethodHasSpeciesSupport = __webpack_require__("4eed");
var wellKnownSymbol = __webpack_require__("83e9");
var V8_VERSION = __webpack_require__("92f3");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "f92b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f6df");
var createNonEnumerableProperty = __webpack_require__("5469");
var has = __webpack_require__("cbe9");
var setGlobal = __webpack_require__("ff39");
var inspectSource = __webpack_require__("a749");
var InternalStateModule = __webpack_require__("df9b");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "f92c":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f6df");
var isObject = __webpack_require__("57cd");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "fb4e":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("3c50");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "fcf2":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("59a3");
var from = __webpack_require__("53f3");
var checkCorrectnessOfIteration = __webpack_require__("cad9");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "fd93":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f6df");
var getOwnPropertyDescriptor = __webpack_require__("8005").f;
var classof = __webpack_require__("3eab");
var macrotask = __webpack_require__("2587").set;
var IS_IOS = __webpack_require__("2344");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !IS_IOS) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "fe6a":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("cbe9");
var toObject = __webpack_require__("d48d");
var sharedKey = __webpack_require__("e7a4");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("b7d5");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "fead":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("59a3");
var isObject = __webpack_require__("57cd");
var isArray = __webpack_require__("5ce7");
var toAbsoluteIndex = __webpack_require__("8272");
var toLength = __webpack_require__("8598");
var toIndexedObject = __webpack_require__("55fe");
var createProperty = __webpack_require__("9c9b");
var arrayMethodHasSpeciesSupport = __webpack_require__("4eed");
var wellKnownSymbol = __webpack_require__("83e9");

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('slice') }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "ff39":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f6df");
var createNonEnumerableProperty = __webpack_require__("5469");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ })

/******/ });
});