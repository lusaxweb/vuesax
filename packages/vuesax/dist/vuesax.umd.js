/*!
  * Vuesax vundefined 🖖 (https://lusaxweb.github.io/vuesax/)
  * Forged by Luis Daniel Rovira
  * Released under the MIT License.
  * Donate: https://www.patreon.com/bePatron?c=1567892
  * © 2019, Lusaxweb. (https://lusaxweb.net)
  */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vuesax"] = factory();
	else
		root["vuesax"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "366d");
/******/ })
/************************************************************************/
/******/ ({

/***/ "027b":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "03b9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("b514")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "0575":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("3bcb");
var aFunction = __webpack_require__("7156");
var SPECIES = __webpack_require__("7ac9")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "065a":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("027b").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "06a2":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("4aca");
var anObject = __webpack_require__("3bcb");
var getKeys = __webpack_require__("c489");

module.exports = __webpack_require__("99db") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "06f3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("aae3");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "09e0":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("7156");
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

/***/ "09eb":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "0a6c":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "0bff":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("09eb")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "0ef4":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__("9d5f");
var $getOwnPropertyDescriptor = __webpack_require__("2273").f;

__webpack_require__("5ee7")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "1078":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("ef76");
var has = __webpack_require__("ece4");
var DESCRIPTORS = __webpack_require__("0bff");
var $export = __webpack_require__("3c4f");
var redefine = __webpack_require__("6f18");
var META = __webpack_require__("2689").KEY;
var $fails = __webpack_require__("09eb");
var shared = __webpack_require__("9091");
var setToStringTag = __webpack_require__("2594");
var uid = __webpack_require__("a390");
var wks = __webpack_require__("a11f");
var wksExt = __webpack_require__("d59d");
var wksDefine = __webpack_require__("2af8");
var enumKeys = __webpack_require__("75e1");
var isArray = __webpack_require__("76b2");
var anObject = __webpack_require__("9db9");
var isObject = __webpack_require__("b6b1");
var toIObject = __webpack_require__("9d5f");
var toPrimitive = __webpack_require__("c398");
var createDesc = __webpack_require__("9278");
var _create = __webpack_require__("4d52");
var gOPNExt = __webpack_require__("3dfd");
var $GOPD = __webpack_require__("2273");
var $DP = __webpack_require__("3ec9");
var $keys = __webpack_require__("e2de");
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
  __webpack_require__("4627").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("6fb5").f = $propertyIsEnumerable;
  __webpack_require__("de0e").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("f220")) {
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("204f")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "1161":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("f108");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "1201":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "137e":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("0ef4");
var $Object = __webpack_require__("c63f").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "15f3":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "16cb":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("4aca");
var createDesc = __webpack_require__("379d");
module.exports = __webpack_require__("99db") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "1859":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("09e0");
var IObject = __webpack_require__("6969");
var toObject = __webpack_require__("8fb1");
var toLength = __webpack_require__("e5fa");
var asc = __webpack_require__("22ee");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "1917":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("c5c3");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "1961":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4ba4");
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1ab9":
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var colorNames = __webpack_require__("4f4d");
var swizzle = __webpack_require__("2514");

var reverseNames = {};

// create a list of reverse color names
for (var name in colorNames) {
	if (colorNames.hasOwnProperty(name)) {
		reverseNames[colorNames[name]] = name;
	}
}

var cs = module.exports = {
	to: {},
	get: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var keyword = /(\D+)/;

	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		rgb = colorNames[match[1]];

		if (!rgb) {
			return null;
		}

		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	var hsl = /^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = (parseFloat(match[1]) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function () {
	var rgba = swizzle(arguments);

	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function () {
	var rgba = swizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = swizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = swizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = swizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = num.toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}


/***/ }),

/***/ "1ca4":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("24b1");
var toLength = __webpack_require__("e5fa");
var toAbsoluteIndex = __webpack_require__("1917");
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

/***/ "1e75":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__("3a30");
var anObject = __webpack_require__("3bcb");
var speciesConstructor = __webpack_require__("0575");
var advanceStringIndex = __webpack_require__("03b9");
var toLength = __webpack_require__("e5fa");
var callRegExpExec = __webpack_require__("06f3");
var regexpExec = __webpack_require__("a036");
var fails = __webpack_require__("6f53");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__("b8e3")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
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
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
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
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
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
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
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
});


/***/ }),

/***/ "204f":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("3ec9");
var createDesc = __webpack_require__("9278");
module.exports = __webpack_require__("0bff") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "2238":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("f70d");

/***/ }),

/***/ "2273":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("6fb5");
var createDesc = __webpack_require__("9278");
var toIObject = __webpack_require__("9d5f");
var toPrimitive = __webpack_require__("c398");
var has = __webpack_require__("ece4");
var IE8_DOM_DEFINE = __webpack_require__("3817");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("0bff") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "22ee":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("6ef8");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "24b1":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("6969");
var defined = __webpack_require__("493c");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "2514":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArrayish = __webpack_require__("b8fa");

var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

var swizzle = module.exports = function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};


/***/ }),

/***/ "2594":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("3ec9").f;
var has = __webpack_require__("ece4");
var TAG = __webpack_require__("a11f")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "2689":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("a390")('meta');
var isObject = __webpack_require__("b6b1");
var has = __webpack_require__("ece4");
var setDesc = __webpack_require__("3ec9").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("09eb")(function () {
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

/***/ "2af8":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ef76");
var core = __webpack_require__("c63f");
var LIBRARY = __webpack_require__("f220");
var wksExt = __webpack_require__("d59d");
var defineProperty = __webpack_require__("3ec9").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "2d98":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("e041");
var descriptor = __webpack_require__("379d");
var setToStringTag = __webpack_require__("5440");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("16cb")(IteratorPrototype, __webpack_require__("7ac9")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "3340":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "34c6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("8abb");
var $forEach = __webpack_require__("1859")(0);
var STRICT = __webpack_require__("cdd3")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "3664":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("f0cd");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "366d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "vsAvatar", function() { return vsAvatar; });
__webpack_require__.d(components_namespaceObject, "vsAvatarGroup", function() { return vsAvatarGroup; });
__webpack_require__.d(components_namespaceObject, "vsAlert", function() { return vsAlert; });
__webpack_require__.d(components_namespaceObject, "vsBreadcrumb", function() { return vsBreadcrumb; });
__webpack_require__.d(components_namespaceObject, "vsBreadcrumbItem", function() { return breadcrumbItem; });
__webpack_require__.d(components_namespaceObject, "vsBreadcrumbGroup", function() { return breadcrumbGroup; });
__webpack_require__.d(components_namespaceObject, "vsButton", function() { return vsButton; });
__webpack_require__.d(components_namespaceObject, "vsButtonGroup", function() { return vsButtonGroup; });

// CONCATENATED MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("a5d0")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("adc6");

// EXTERNAL MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es7.object.values.js
var es7_object_values = __webpack_require__("bbec");

// EXTERNAL MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("d9ab");

// EXTERNAL MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__("34c6");

// EXTERNAL MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7b47");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1afd6008-vue-loader-template"}!C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/@vuesax/vsAvatar/component.vue?vue&type=template&id=69e6cf6a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g(_vm._b({ref:"component",staticClass:"vs vs-avatar",class:_vm.Class,style:(_vm.Style)},'div',_vm.$props,false),_vm.Listeners),[(!_vm.$slots.default)?_c('svg',{staticClass:"vs-avatar__svg-user",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24"}},[_c('circle',{attrs:{"fill":"none","cx":"12","cy":"7","r":"3"}}),_c('path',{attrs:{"d":"M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z"}})]):_vm._e(),(_vm.history)?_c('div',{staticClass:"vs-avatar__history"}):_vm._e(),(!_vm.text)?_vm._t("default"):_c('span',[_vm._v("\n    "+_vm._s(_vm.text)+"\n  ")]),(_vm.$slots.badge || _vm.badge)?_c('span',{staticClass:"vs-avatar__badge",class:{
      'vs-avatar__badge--content': _vm.$slots.badge
    }},[_vm._t("badge")],2):_vm._e(),(_vm.typing)?_c('span',{staticClass:"vs-avatar__typing"},[_c('span',{staticClass:"vs-avatar__typing-circle vs-avatar__typing-circle--1"}),_c('span',{staticClass:"vs-avatar__typing-circle vs-avatar__typing-circle--2"}),_c('span',{staticClass:"vs-avatar__typing-circle vs-avatar__typing-circle--3"})]):_vm._e(),(_vm.loading)?_c('span',{staticClass:"vs-avatar__loading"},[_c('span',{staticClass:"vs-avatar__loading-effect--1 vs-avatar__loading-effect"}),_c('span',{staticClass:"vs-avatar__loading-effect--2 vs-avatar__loading-effect"})]):_vm._e(),(_vm.$slots.verified || _vm.verified)?_c('span',{staticClass:"vs-avatar__verified"},[(_vm.verified)?_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24"}},[_c('path',{attrs:{"d":"M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"}})]):_vm._t("verified")],2):_vm._e(),(_vm.$slots.social)?_c('span',{staticClass:"vs-avatar__social"},[_vm._t("social")],2):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/@vuesax/vsAvatar/component.vue?vue&type=template&id=69e6cf6a&

// EXTERNAL MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("1e75");

// EXTERNAL MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.string.trim.js
var es6_string_trim = __webpack_require__("57aa");

// EXTERNAL MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("7b9b");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4f7a");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("2238");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("f5d7");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
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
// CONCATENATED MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = keys_default()(source);

    if (typeof get_own_property_symbols_default.a === 'function') {
      ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
        return get_own_property_descriptor_default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}
// EXTERNAL MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("8bbd");

// CONCATENATED MODULE: ./packages/vuesax/vsFunctions/setVar.js
var setVar = function setVar(propertyName, value, el) {
  if (!el) {
    document.documentElement.style.setProperty("--vs-".concat(propertyName), value);
  } else {
    el.style.setProperty("--vs-".concat(propertyName), value);
  }
};

/* harmony default export */ var vsFunctions_setVar = (setVar);
// EXTERNAL MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("f5cd");

// EXTERNAL MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("47e1");

// CONCATENATED MODULE: ./packages/vuesax/utils/index.js


var insertBody = function insertBody(el, _this) {
  _this.$root.$el.insertBefore(el, _this.$root.$el.firstChild);
};

var removeBody = function removeBody(el, _this) {
  _this.$root.$el.removeChild(el);
};

var setPosition = function setPosition(parent, el, under) {
  var box = window.innerHeight + el.clientHeight + window.pageYOffset;
  var top = parent.offsetTop + el.clientHeight;
  var isColapse = box - top < el.clientHeight;

  if (!isColapse) {
    el.style.left = "".concat(parent.offsetLeft, "px");
    el.style.top = "".concat(under ? parent.offsetTop + parent.clientHeight : parent.offsetTop, "px");
  } else {
    el.style.left = "".concat(parent.offsetLeft, "px");
    el.style.top = "".concat(under ? parent.offsetTop - el.clientHeight - parent.clientHeight : parent.offsetTop - el.clientHeight + parent.clientHeight, "px");
  }
};

var css = function css(el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  var win = el.ownerDocument.defaultView; // null means not to return pseudo styles

  return win.getComputedStyle(el, null)[property];
};

var isColor = function isColor(color) {
  var vsColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'dark', 'light', // social colors
  'facebook', 'twitter', 'youtube', 'pinterest', 'linkedin', 'snapchat', 'whatsapp', 'tumblr', 'reddit', 'spotify', 'amazon', 'medium', 'vimeo', 'skype', 'dribbble', 'slack', 'yahoo', 'twitch', 'discord', 'telegram', 'google-plus', 'messenger'];
  return vsColors.includes(color);
};

var getVsColors = function getVsColors() {
  // let vsColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'dark', 'light']
  return document.documentElement.style;
};


// CONCATENATED MODULE: ./packages/vuesax/vsFunctions/setColor.js





var setColor_setColor = function setColor(colorName, color, el) {
  function hexToRgb(hex) {
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
  }

  var isRGB = /^(rgb|rgba)/.test(color);
  var isHEX = /^(#)/.test(color);
  var newColor;

  if (isRGB) {
    var arrayColor = color.replace(/[rgba()]/g, '').split(',');
    newColor = "".concat(arrayColor[0], ",").concat(arrayColor[1], ",").concat(arrayColor[2]);
    vsFunctions_setVar(colorName, newColor, el);
  } else if (isHEX) {
    var rgb = hexToRgb(color);
    newColor = "".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b);
    vsFunctions_setVar(colorName, newColor, el);
  } else if (isColor(color)) {
    var style = getComputedStyle(el);
    newColor = style.getPropertyValue('--vs-' + color);
    vsFunctions_setVar(colorName, newColor, el);
  }
};

/* harmony default export */ var vsFunctions_setColor = (setColor_setColor);
// CONCATENATED MODULE: ./packages/vuesax/vsFunctions/sticky.js


function handleMousemove(evt) {
  var x = evt.offsetX - evt.target.clientWidth / 2;
  var y = evt.offsetY - evt.target.clientHeight / 2;
  var el = evt.target;
  var child = el.querySelector('.sticky-el');
  el.style.transform = "translate(".concat(x / 8, "px, ").concat(y / 7, "px)");
  child.style.transform = "translate(".concat(x / 8.5, "px, ").concat(y / 7.5, "px)");
}

function handleMouseleave(evt) {
  var el = evt.target;
  var child = el.querySelector('.sticky-el');
  el.removeEventListener('mousemove', handleMousemove);
  el.removeEventListener('mouseleave', handleMouseleave);
  el.style.transition = 'transform .2s ease';
  child.style.transition = 'transform .25s ease';
  setTimeout(function () {
    el.style.transition = el.dataset.transitionOld;
    child.style.transition = child.dataset.transitionOld;
  }, 250);
  el.style.transform = "translate(0px, 0px)";
  child.style.transform = "translate(0px, 0px)";
}

/* harmony default export */ var sticky = (function (evt, options) {
  var el = evt.target;
  var child = el.querySelector('.sticky-el');
  el.dataset.transitionOld = css(el, 'transition');
  child.dataset.transitionOld = css(child, 'transition');
  el.style.transition = el.dataset.transitionOld + ',transform .2s ease';
  child.style.transition = child.dataset.transitionOld + ',transform .25s ease';
  setTimeout(function () {
    el.style.transition = el.dataset.transitionOld + ',transform 0s';
    child.style.transition = child.dataset.transitionOld + ',transform .05s';
  }, 250);
  el.addEventListener('mousemove', handleMousemove);
  el.addEventListener('mouseleave', handleMouseleave);
});
// CONCATENATED MODULE: ./packages/vuesax/vsFunctions/ripple.js



var ripple_ripple = function ripple(evt, component) {
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var el = evt.currentTarget;
  var offset = el.getBoundingClientRect();
  var x = evt.clientX - offset.left;
  var y = evt.clientY - offset.top;
  var time = 0.6;

  if (component.clientWidth > 150) {
    time = 1.2;
  }

  var effectContent = document.createElement('div');
  effectContent.className = 'vs-ripple__effect-content';
  var effect = document.createElement('div');
  effect.className = 'vs-ripple__effect';
  effect.style.transition = "all ".concat(time, "s ease");

  if (color) {
    effect.classList.add('vs-ripple__effect--color');
    console.log(effect);

    var _color = color || 'primary';

    if (!isColor(_color)) {
      vsFunctions_setColor('color', color, effect);
    } else {
      var vsColor = "rgb(".concat(getComputedStyle(component).getPropertyValue('--vs-color'), ")");
      vsFunctions_setColor('color', vsColor, effect);
    }
  }

  effect.style.left = "".concat(x, "px");
  effect.style.top = "".concat(y, "px");
  component.appendChild(effectContent);
  effectContent.appendChild(effect);
  effect.style.width = "".concat(component.clientWidth * 2.5, "px");
  effect.style.height = "".concat(component.clientWidth * 2.5, "px");
  effect.style.opacity = "1";

  function removeEffect() {
    effect.style.transition = "all .3s ease";
    setTimeout(function () {
      effect.style.opacity = "0";
      setTimeout(function () {
        component.removeChild(effectContent);
      }, time * 600);
    }, time * 600);
    evt.target.removeEventListener('mouseup', removeEffect);
    evt.target.removeEventListener('mouseleave', removeEffect);
  }

  evt.target.addEventListener('mouseup', removeEffect);
  evt.target.addEventListener('mouseleave', removeEffect);
};

/* harmony default export */ var vsFunctions_ripple = (ripple_ripple);
// CONCATENATED MODULE: ./packages/vuesax/vsFunctions/clipboard.js
var clipboard = function clipboard(text) {
  var aux = document.createElement("textarea");
  aux.value = text;
  aux.className = "vs-clipboard";
  document.body.appendChild(aux);
  aux.focus();
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
};

/* harmony default export */ var vsFunctions_clipboard = (clipboard);
// CONCATENATED MODULE: ./packages/vuesax/vsFunctions/index.js





// CONCATENATED MODULE: ./packages/vuesax/mixins/props.js

 // const Props = {
//   size: new Set(['x-large', 'large', 'small', 'mini'])
// }

/* harmony default export */ var props = ({
  props: {
    color: {
      default: null,
      type: String
    },
    type: {
      default: null,
      type: String
    },
    size: {
      default: null,
      type: [String, Number]
    },
    icon: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    color: function color() {
      if (this.color) {
        vsFunctions_setColor('color', this.color, this.$refs.component);
      }
    }
  },
  mounted: function mounted() {
    if (this.color) {
      vsFunctions_setColor('color', this.color, this.$refs.component);
    }
  }
});
// CONCATENATED MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/@vuesax/vsAvatar/component.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var componentvue_type_script_lang_js_ = ({
  name: 'VsAvatar',
  mixins: [props],
  inheritAttrs: false,
  props: {
    badge: {
      default: null,
      type: String
    },
    to: {
      default: null,
      type: String
    },
    href: {
      default: null,
      type: String
    },
    blank: {
      default: false,
      type: Boolean
    },
    circle: {
      default: false,
      type: Boolean
    },
    verified: {
      default: false,
      type: Boolean
    },
    history: {
      default: null,
      type: [String, Boolean]
    },
    typing: {
      default: false,
      type: [Boolean, String]
    }
  },
  data: function data() {
    return {
      hasImg: false,
      text: null,
      fontSize: null
    };
  },
  computed: {
    Style: function Style() {
      return {
        width: "".concat(this.size, "px"),
        height: "".concat(this.size, "px")
      };
    },
    Class: function Class() {
      return [{
        'vs-avatar--social': this.$slots.social
      }, {
        'vs-avatar--disabled': this.disabled
      }, {
        'vs-avatar--loading': this.loading
      }, {
        'vs-avatar--content': this.$slots.default
      }, {
        'vs-avatar--img': this.hasImg
      }, {
        'vs-avatar--circle': this.circle
      }, _defineProperty({}, "vs-avatar--".concat(this.size), !!this.size), _defineProperty({}, "vs-avatar--".concat(this.$vsTheme), !!this.$vsTheme), _defineProperty({}, "vs-avatar--".concat(this.kind), !!this.kind), _defineProperty({}, "vs-avatar--".concat(this.fontSize), !!this.fontSize), this.$vsGlobalClass];
    },
    Listeners: function Listeners() {
      var _this = this;

      return _objectSpread({}, this.$listeners, {
        click: function click(evt) {
          _this.handleClick(evt);
        },
        mousedown: function mousedown(evt) {
          _this.$vs.ripple(evt, _this.$refs.component);
        }
      });
    }
  },
  watch: {
    badge: function badge() {
      this.setBadge();
    },
    history: function history() {
      this.setHistory();
    },
    typing: function typing() {
      this.setTyping();
    }
  },
  mounted: function mounted() {
    this.changeFontSize();
    this.setBadge();
    this.setHistory();
    this.setTyping();
    var img = this.$refs.component.querySelector('img');

    if (img) {
      this.hasImg = true;
      this.cloneImage(img);
    }
  },
  methods: {
    changeFontSize: function changeFontSize() {
      if (this.$slots.hasOwnProperty('default')) {
        if (typeof this.$slots.default[0].text == 'string') {
          var text = this.$slots.default[0].text.trim();

          if (text.length <= 5) {
            this.text = text;
            this.fontSize = text.length;
          } else {
            var exp = /\s/g;
            var letras = '';

            if (exp.test(text)) {
              text.split(exp).forEach(function (word) {
                letras += word[0].toUpperCase();
              });
            } else {
              letras = text[0].toUpperCase();
            }

            this.text = letras.length > 5 ? letras[0] : letras;
            this.fontSize = letras.length > 5 ? 0 : letras.length;
          }
        }
      }
    },
    setBadge: function setBadge() {
      vsFunctions_setColor('badge', this.badge, this.$refs.component);
    },
    setHistory: function setHistory() {
      // if(typeof this.history == 'boolean') this.history = 'primary'
      vsFunctions_setColor('history', this.history, this.$refs.component);
    },
    setTyping: function setTyping() {
      vsFunctions_setColor('typing', this.typing, this.$refs.component);
    },
    cloneImage: function cloneImage(img) {
      var cloneImg = img.cloneNode(true);
      cloneImg.classList.add('vs-avatar__clone-img');
      this.$refs.component.appendChild(cloneImg);
    },
    handleClick: function handleClick(evt) {
      this.$emit('click', event);
      /**
       * soporte para el uso de vue-router y links html
       */

      if (this.to) {
        this.routerPush();
      } else if (this.href) {
        this.openHref();
      }
    },
    routerPush: function routerPush() {
      this.$router.push(this.to);
    },
    openHref: function openHref() {
      this.blank ? window.open(this.href) : window.location.href = this.href;
    }
  }
});
// CONCATENATED MODULE: ./packages/@vuesax/vsAvatar/component.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsAvatar_componentvue_type_script_lang_js_ = (componentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/@vuesax/vsAvatar/component.vue?vue&type=style&index=0&lang=stylus&
var componentvue_type_style_index_0_lang_stylus_ = __webpack_require__("1961");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
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

// CONCATENATED MODULE: ./packages/@vuesax/vsAvatar/component.vue






/* normalize component */

var component_component = normalizeComponent(
  vsAvatar_componentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsAvatar_component = (component_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1afd6008-vue-loader-template"}!C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/@vuesax/vsAvatar/vsAvatarGroup.vue?vue&type=template&id=4771b53c&
var vsAvatarGroupvue_type_template_id_4771b53c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-avatar-group",class:_vm.Class},[_vm._t("default"),_vm._t("more")],2)}
var vsAvatarGroupvue_type_template_id_4771b53c_staticRenderFns = []


// CONCATENATED MODULE: ./packages/@vuesax/vsAvatar/vsAvatarGroup.vue?vue&type=template&id=4771b53c&

// CONCATENATED MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/@vuesax/vsAvatar/vsAvatarGroup.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsAvatarGroupvue_type_script_lang_js_ = ({
  name: 'VsAvatarGroup',
  props: {
    float: {
      default: false,
      type: Boolean
    },
    maxItemsRow: {
      default: null,
      type: [Number, String]
    }
  },
  computed: {
    Class: function Class() {
      return {
        'vs-avatar-group--float': this.float
      };
    }
  },
  mounted: function mounted() {
    this.setMaxItemsRow();
  },
  methods: {
    setMaxItemsRow: function setMaxItemsRow() {
      vsFunctions_setVar('max-items-row', "".concat(this.maxItemsRow * 38, "px"), this.$el);
    }
  }
});
// CONCATENATED MODULE: ./packages/@vuesax/vsAvatar/vsAvatarGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsAvatar_vsAvatarGroupvue_type_script_lang_js_ = (vsAvatarGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/@vuesax/vsAvatar/vsAvatarGroup.vue





/* normalize component */

var vsAvatarGroup_component = normalizeComponent(
  vsAvatar_vsAvatarGroupvue_type_script_lang_js_,
  vsAvatarGroupvue_type_template_id_4771b53c_render,
  vsAvatarGroupvue_type_template_id_4771b53c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsAvatarGroup = (vsAvatarGroup_component.exports);
// CONCATENATED MODULE: ./packages/@vuesax/vsAvatar/index.js




vsAvatar_component.install = function (vue) {
  return vue.component(vsAvatar_component.name, vsAvatar_component);
};

vsAvatarGroup.install = function (vue) {
  return vue.component(vsAvatarGroup.name, vsAvatarGroup);
};

/* harmony default export */ var vsAvatar = (vsAvatar_component);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1afd6008-vue-loader-template"}!C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/@vuesax/vsAlert/component.vue?vue&type=template&id=8d71ef38&
var componentvue_type_template_id_8d71ef38_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"leave":_vm.leave}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(typeof _vm.value == 'boolean' ? _vm.value : true),expression:"typeof value == 'boolean' ? value : true"}],ref:"component",staticClass:"vs-alert",class:_vm.Class,on:{"click":_vm.handleClick}},[_c('div',{ref:"content",staticClass:"vs-alert__content"},[(_vm.$slots.icon)?_c('div',{staticClass:"vs-alert__icon"},[_vm._t("icon")],2):_vm._e(),_c('div',{staticClass:"vs-alert__content__text"},[(_vm.$slots.header)?_c('header',[_vm._t("header"),(_vm.contentHidden)?_c('div',[(_vm.$slots['hidden-icon'])?_vm._t("hidden-icon"):_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24"}},[_c('path',{attrs:{"d":"M16.293 9.293L12 13.586 7.707 9.293 6.293 10.707 12 16.414 17.707 10.707z"}})])],2):_vm._e()],2):_vm._e(),_c('transition',{on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"leave":_vm.leave}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(typeof _vm.contentHidden == 'boolean' ? _vm.contentHidden ? _vm.hidden : true :  true && _vm.$slots.default),expression:"typeof contentHidden == 'boolean' ? contentHidden ? hidden : true : true && $slots.default"}]},[_vm._t("default")],2)])],1),(_vm.$slots.header2 || _vm.$slots.content2 || _vm.$slots.footer2)?_c('div',{staticClass:"vs-alert__content__text"},[(_vm.$slots.header2)?_c('header',[_vm._t("header2"),(_vm.contentHidden)?_c('div',[(_vm.$slots['hidden-icon'])?_vm._t("hidden-icon"):_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24"}},[_c('path',{attrs:{"d":"M16.293 9.293L12 13.586 7.707 9.293 6.293 10.707 12 16.414 17.707 10.707z"}})])],2):_vm._e()],2):_vm._e(),_c('transition',{on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"leave":_vm.leave}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(typeof _vm.contentHidden == 'boolean' ? _vm.contentHidden ? _vm.hidden : true :  true && _vm.$slots.default),expression:"typeof contentHidden == 'boolean' ? contentHidden ? hidden : true : true && $slots.default"}]},[_vm._t("content2")],2)])],1):_vm._e()]),(_vm.$slots.footer)?_c('footer',[_vm._t("footer")],2):_vm._e(),(_vm.$slots.footer2)?_c('footer',[_vm._t("footer2")],2):_vm._e(),(_vm.closable)?_c('div',{staticClass:"vs-alert__close"},[(_vm.$slots.close)?_vm._t("close"):_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24"},on:{"click":_vm.handleClose}},[_c('path',{attrs:{"d":"M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"}})])],2):_vm._e()])])}
var componentvue_type_template_id_8d71ef38_staticRenderFns = []


// CONCATENATED MODULE: ./packages/@vuesax/vsAlert/component.vue?vue&type=template&id=8d71ef38&

// EXTERNAL MODULE: ./node_modules/color/index.js
var node_modules_color = __webpack_require__("6929");
var color_default = /*#__PURE__*/__webpack_require__.n(node_modules_color);

// CONCATENATED MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/@vuesax/vsAlert/component.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var vsAlert_componentvue_type_script_lang_js_ = ({
  name: 'VsAlert',
  mixins: [props],
  props: {
    value: {
      default: null,
      type: [Boolean]
    },
    contentHidden: {
      default: null,
      type: [Boolean]
    },
    closable: {
      default: false,
      type: [Boolean]
    }
  },
  data: function data() {
    return {
      hidden: false
    };
  },
  computed: {
    Class: function Class() {
      return [_defineProperty({}, "vs-alert--content__footer", this.$slots.footer || this.$slots.footer2), _defineProperty({}, "vs-alert--content-hidden", !!this.contentHidden), _defineProperty({}, "vs-alert--content-hidden-open", this.hidden), _defineProperty({}, "vs-alert--closable", typeof this.value == 'boolean'), _defineProperty({}, "vs-alert--two__content", this.$slots.header2 || this.$slots.content2 || this.$slots.footer2)];
    }
  },
  mounted: function mounted() {
    if (this.$el && this.value && !this.contentHidden) {
      var h = this.$el.scrollHeight;
      this.$el.style.maxHeight = h + 'px';
    }

    var _color = this.color;

    if (!this.color) {
      _color = 'primary';
    }

    if (!isColor(_color)) {
      var colorDarken = color_default()(_color).darken(0.2).rgb().string();
      vsFunctions_setColor('text', colorDarken, this.$refs.component);
    } else {
      var vsColor = "rgb(".concat(getComputedStyle(this.$refs.component).getPropertyValue('--vs-color'), ")");

      var _colorDarken = color_default()(vsColor).darken(0.2).rgb().string();

      vsFunctions_setColor('text', _colorDarken, this.$refs.component);
    }
  },
  methods: {
    handleClick: function handleClick(evt) {
      this.$emit('click', evt);

      if (this.contentHidden) {
        this.hidden = !this.hidden;
      }
    },
    handleClose: function handleClose() {
      this.$emit('input', false);
      this.$emit('change', false);
    },
    // animation
    beforeEnter: function beforeEnter(el) {
      el.style.maxHeight = '0px';
    },
    enter: function enter(el, done) {
      var h = el.scrollHeight;

      if (el != this.$el) {
        el.style.maxHeight = h + 'px';
        this.$el.style.maxHeight = this.$el.scrollHeight + h + 'px';
      } else {
        el.style.maxHeight = h + 'px';
      }

      done();
    },
    leave: function leave(el, done) {
      el.style.maxHeight = '0px';
      setTimeout(function () {
        done();
      }, 250);
    }
  }
});
// CONCATENATED MODULE: ./packages/@vuesax/vsAlert/component.vue?vue&type=script&lang=js&
 /* harmony default export */ var _vuesax_vsAlert_componentvue_type_script_lang_js_ = (vsAlert_componentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/@vuesax/vsAlert/component.vue?vue&type=style&index=0&lang=stylus&
var vsAlert_componentvue_type_style_index_0_lang_stylus_ = __webpack_require__("503b");

// CONCATENATED MODULE: ./packages/@vuesax/vsAlert/component.vue






/* normalize component */

var vsAlert_component_component = normalizeComponent(
  _vuesax_vsAlert_componentvue_type_script_lang_js_,
  componentvue_type_template_id_8d71ef38_render,
  componentvue_type_template_id_8d71ef38_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsAlert_component = (vsAlert_component_component.exports);
// CONCATENATED MODULE: ./packages/@vuesax/vsAlert/index.js



vsAlert_component.install = function (vue) {
  return vue.component(vsAlert_component.name, vsAlert_component);
};

/* harmony default export */ var vsAlert = (vsAlert_component);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1afd6008-vue-loader-template"}!C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/@vuesax/vsBreadcrumb/component.vue?vue&type=template&id=8621bbd6&
var componentvue_type_template_id_8621bbd6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"component",staticClass:"vs-breadcrumb"},[_c('div',{staticClass:"vs-breadcrumb__divider"},[_vm._t("divider")],2),_vm._t("default")],2)}
var componentvue_type_template_id_8621bbd6_staticRenderFns = []


// CONCATENATED MODULE: ./packages/@vuesax/vsBreadcrumb/component.vue?vue&type=template&id=8621bbd6&

// CONCATENATED MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/@vuesax/vsBreadcrumb/component.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsBreadcrumb_componentvue_type_script_lang_js_ = ({
  name: 'VsBreadcrumb',
  mixins: [props],
  methods: {
    getDivider: function getDivider() {
      return this.$slots.divider || '/';
    }
  }
});
// CONCATENATED MODULE: ./packages/@vuesax/vsBreadcrumb/component.vue?vue&type=script&lang=js&
 /* harmony default export */ var _vuesax_vsBreadcrumb_componentvue_type_script_lang_js_ = (vsBreadcrumb_componentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/@vuesax/vsBreadcrumb/component.vue?vue&type=style&index=0&lang=stylus&
var vsBreadcrumb_componentvue_type_style_index_0_lang_stylus_ = __webpack_require__("e63a");

// CONCATENATED MODULE: ./packages/@vuesax/vsBreadcrumb/component.vue






/* normalize component */

var vsBreadcrumb_component_component = normalizeComponent(
  _vuesax_vsBreadcrumb_componentvue_type_script_lang_js_,
  componentvue_type_template_id_8621bbd6_render,
  componentvue_type_template_id_8621bbd6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsBreadcrumb_component = (vsBreadcrumb_component_component.exports);
// CONCATENATED MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/@vuesax/vsBreadcrumb/breadcrumbItem.vue?vue&type=script&lang=js&
//
//

/* harmony default export */ var breadcrumbItemvue_type_script_lang_js_ = ({
  name: 'VsBreadcrumbItem',
  mixins: [props],
  props: {
    active: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    Class: function Class() {
      return [{
        'vs-breadcrumb-item--active': !!this.active
      }, {
        'vs-breadcrumb-item--disabled': !!this.disabled
      }];
    },
    getDivider: function getDivider() {
      return this.$parent.getDivider;
    }
  },
  render: function render(h) {
    var content = h('span', {
      class: 'vs-breadcrumb-item__content'
    }, [this.$slots.default]);
    var divider = h('span', {
      class: 'vs-breadcrumb-item__separator'
    }, [this.getDivider()]);
    return h('div', {
      class: ['vs-breadcrumb-item', this.Class]
    }, [content, divider]);
  }
});
// CONCATENATED MODULE: ./packages/@vuesax/vsBreadcrumb/breadcrumbItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsBreadcrumb_breadcrumbItemvue_type_script_lang_js_ = (breadcrumbItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/@vuesax/vsBreadcrumb/breadcrumbItem.vue?vue&type=style&index=0&lang=stylus&
var breadcrumbItemvue_type_style_index_0_lang_stylus_ = __webpack_require__("6539");

// CONCATENATED MODULE: ./packages/@vuesax/vsBreadcrumb/breadcrumbItem.vue
var breadcrumbItem_render, breadcrumbItem_staticRenderFns





/* normalize component */

var breadcrumbItem_component = normalizeComponent(
  vsBreadcrumb_breadcrumbItemvue_type_script_lang_js_,
  breadcrumbItem_render,
  breadcrumbItem_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var breadcrumbItem = (breadcrumbItem_component.exports);
// CONCATENATED MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/@vuesax/vsBreadcrumb/breadcrumbGroup.vue?vue&type=script&lang=js&
//
//
/* harmony default export */ var breadcrumbGroupvue_type_script_lang_js_ = ({
  name: 'VsBreadcrumbGroup',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  updated: function updated() {
    if (this.$parent.$slots.divider) {
      this.$slots.divider = this.$parent.$slots.divider;
    }
  },
  created: function created() {
    if (this.$parent.$slots.divider) {
      this.$slots.divider = this.$parent.$slots.divider;
    }
  },
  methods: {
    getDivider: function getDivider() {
      return this.$parent.getDivider();
    }
  },
  render: function render(h) {
    var _this = this;

    var content = h('span', {
      class: 'vs-breadcrumb-group__content',
      directives: [{
        name: 'show',
        value: _this.value
      }]
    }, [this.$slots.default]);
    var hidden = h('span', {
      class: 'vs-breadcrumb-group__content-hidden'
    }, [h('span', {
      class: 'vs-breadcrumb-group__content-hidden__points',
      on: {
        click: function click() {
          _this.$emit('input', !_this.value);
        }
      }
    }, [this.$slots.icon ? this.$slots.icon : '...']), h('span', {
      class: 'vs-breadcrumb-item__separator'
    }, [this.$parent.$slots.divider ? this.$parent.$slots.divider : '/'])]);
    return h('div', {
      class: ['vs-breadcrumb-group'],
      props: {
        ref: 'component'
      }
    }, [content, this.value ? null : hidden]);
  }
});
// CONCATENATED MODULE: ./packages/@vuesax/vsBreadcrumb/breadcrumbGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsBreadcrumb_breadcrumbGroupvue_type_script_lang_js_ = (breadcrumbGroupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/@vuesax/vsBreadcrumb/breadcrumbGroup.vue?vue&type=style&index=0&lang=stylus&
var breadcrumbGroupvue_type_style_index_0_lang_stylus_ = __webpack_require__("d3a1");

// CONCATENATED MODULE: ./packages/@vuesax/vsBreadcrumb/breadcrumbGroup.vue
var breadcrumbGroup_render, breadcrumbGroup_staticRenderFns





/* normalize component */

var breadcrumbGroup_component = normalizeComponent(
  vsBreadcrumb_breadcrumbGroupvue_type_script_lang_js_,
  breadcrumbGroup_render,
  breadcrumbGroup_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var breadcrumbGroup = (breadcrumbGroup_component.exports);
// CONCATENATED MODULE: ./packages/@vuesax/vsBreadcrumb/index.js





vsBreadcrumb_component.install = function (vue) {
  return vue.component(vsBreadcrumb_component.name, vsBreadcrumb_component);
};

breadcrumbItem.install = function (vue) {
  return vue.component(breadcrumbItem.name, breadcrumbItem);
};

breadcrumbGroup.install = function (vue) {
  return vue.component(breadcrumbGroup.name, breadcrumbGroup);
};

/* harmony default export */ var vsBreadcrumb = (vsBreadcrumb_component);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1afd6008-vue-loader-template"}!C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/@vuesax/vsButton/component.vue?vue&type=template&id=7be65a0d&
var componentvue_type_template_id_7be65a0d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',_vm._g(_vm._b({ref:"component",staticClass:"vs vs-button",class:_vm.Class},'button',_vm.$props,false),_vm.Listeners),[_c('span',{staticClass:"vs-button__content"},[_vm._t("default")],2),(_vm.loading)?_c('span',{staticClass:"vs-button__loading"}):_vm._e(),(_vm.upload)?_c('span',{staticClass:"vs-button__upload"}):_vm._e(),(_vm.$slots.animate && !_vm.animateInactive)?_c('span',{staticClass:"vs-button__animate"},[_vm._t("animate")],2):_vm._e()])}
var componentvue_type_template_id_7be65a0d_staticRenderFns = []


// CONCATENATED MODULE: ./packages/@vuesax/vsButton/component.vue?vue&type=template&id=7be65a0d&

// CONCATENATED MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/@vuesax/vsButton/component.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var vsButton_componentvue_type_script_lang_js_ = ({
  name: 'VsButton',
  mixins: [props],
  inheritAttrs: false,
  props: {
    active: {
      default: false,
      type: Boolean
    },
    upload: {
      default: false,
      type: Boolean
    },
    iconAfter: {
      default: false,
      type: Boolean
    },
    to: {
      default: null,
      type: String
    },
    href: {
      default: null,
      type: String
    },
    blank: {
      default: false,
      type: Boolean
    },
    icon: {
      default: false,
      type: Boolean
    },
    circle: {
      default: false,
      type: Boolean
    },
    square: {
      default: false,
      type: Boolean
    },
    block: {
      default: false,
      type: Boolean
    },
    animationType: {
      default: null,
      type: String
    },
    animateInactive: {
      default: false,
      type: Boolean
    },

    /*
     * type button
     */
    flat: {
      default: false,
      type: Boolean
    },
    border: {
      default: false,
      type: Boolean
    },
    gradient: {
      default: false,
      type: Boolean
    },
    transparent: {
      default: false,
      type: Boolean
    },
    dashed: {
      default: false,
      type: Boolean
    },
    shadow: {
      default: false,
      type: Boolean
    },
    relief: {
      default: false,
      type: Boolean
    },
    floating: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      ripple: false
    };
  },
  computed: {
    Class: function Class() {
      return [{
        'vs-button__active': this.active
      }, {
        'vs-button__disabled': this.disabled
      }, {
        'vs-button--loading': this.loading
      }, {
        'vs-button--upload': this.upload
      }, _defineProperty({}, "vs-button--".concat(this.size), !!this.size), _defineProperty({}, "vs-button--".concat(this.$vsTheme), !!this.$vsTheme), _defineProperty({}, "vs-button--block", !!this.block), _defineProperty({}, "vs-button--animate", !!this.$slots.animate && !this.animateInactive), _defineProperty({}, "vs-button--".concat(this.animationType), !!this.animationType), _defineProperty({}, "vs-button--default", !this.flat && !this.border && !this.gradient && !this.transparent && !this.dashed && !this.shadow && !this.relief && !this.floating), _defineProperty({}, "vs-button--flat", !!this.flat), _defineProperty({}, "vs-button--border", !!this.border), _defineProperty({}, "vs-button--gradient", !!this.gradient), _defineProperty({}, "vs-button--transparent", !!this.transparent), _defineProperty({}, "vs-button--dashed", !!this.dashed), _defineProperty({}, "vs-button--shadow", !!this.shadow), _defineProperty({}, "vs-button--relief", !!this.relief), _defineProperty({}, "vs-button--icon", !!this.icon), _defineProperty({}, "vs-button--circle", !!this.circle), _defineProperty({}, "vs-button--square", !!this.square), _defineProperty({}, "vs-button--ripple", !!this.ripple), _defineProperty({}, "vs-button--floating", !!this.floating), this.$vsGlobalClass];
    },
    Listeners: function Listeners() {
      var _this = this;

      return _objectSpread({}, this.$listeners, {
        click: function click(evt) {
          _this.handleClick(evt);
        },
        mouseenter: function mouseenter(evt) {
          _this.handleMouseenter(evt);
        },
        mousedown: function mousedown(evt) {
          _this.effectClick(evt);
        }
      });
    }
  },
  watch: {
    color: function color() {
      this.setColors();
    }
  },
  mounted: function mounted() {
    this.setColors();
  },
  methods: {
    setColors: function setColors() {
      var _color = this.color;

      if (!this.color) {
        _color = 'primary';
      }

      if (!isColor(_color)) {
        var colorDarken = color_default()(_color).darken(0.2).rgb().string();
        vsFunctions_setColor('color-darken', colorDarken, this.$refs.component);
        var colorRotate = color_default()(_color).rotate(25).rgb().string();
        vsFunctions_setColor('color-rotate', colorRotate, this.$refs.component);
      } else {
        var vsColor = "rgb(".concat(getComputedStyle(this.$refs.component).getPropertyValue('--vs-color'), ")");

        var _colorDarken = color_default()(vsColor).darken(0.2).rgb().string();

        vsFunctions_setColor('color-darken', _colorDarken, this.$refs.component);

        var _colorRotate = color_default()(vsColor).rotate(25).rgb().string();

        vsFunctions_setColor('color-rotate', _colorRotate, this.$refs.component);
      }
    },
    handleMouseenter: function handleMouseenter(evt) {// this.$vs.sticky(evt)
    },
    handleClick: function handleClick(evt) {
      this.$emit('click', event);
      /**
       * soporte para el uso de vue-router y links html
       */

      if (this.to) {
        this.routerPush();
      } else if (this.href) {
        this.openHref();
      }
    },
    effectClick: function effectClick(evt) {
      var _this2 = this;

      if (this.border) {
        this.$vs.ripple(evt, this.$refs.component, this.color || 'primary');
        this.ripple = true;
        setTimeout(function () {
          _this2.ripple = false;
        }, 400);
      } else {
        this.$vs.ripple(evt, this.$refs.component);
      }
    },
    routerPush: function routerPush() {
      this.$router.push(this.to);
    },
    openHref: function openHref() {
      this.blank ? window.open(this.href) : window.location.href = this.href;
    }
  }
});
// CONCATENATED MODULE: ./packages/@vuesax/vsButton/component.vue?vue&type=script&lang=js&
 /* harmony default export */ var _vuesax_vsButton_componentvue_type_script_lang_js_ = (vsButton_componentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/@vuesax/vsButton/component.vue?vue&type=style&index=0&lang=stylus&
var vsButton_componentvue_type_style_index_0_lang_stylus_ = __webpack_require__("6a2e");

// CONCATENATED MODULE: ./packages/@vuesax/vsButton/component.vue






/* normalize component */

var vsButton_component_component = normalizeComponent(
  _vuesax_vsButton_componentvue_type_script_lang_js_,
  componentvue_type_template_id_7be65a0d_render,
  componentvue_type_template_id_7be65a0d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsButton_component = (vsButton_component_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1afd6008-vue-loader-template"}!C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/@vuesax/vsButton/vsButtonGroup.vue?vue&type=template&id=61864bfd&
var vsButtonGroupvue_type_template_id_61864bfd_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-button-group"},[_vm._t("default")],2)}
var vsButtonGroupvue_type_template_id_61864bfd_staticRenderFns = []


// CONCATENATED MODULE: ./packages/@vuesax/vsButton/vsButtonGroup.vue?vue&type=template&id=61864bfd&

// CONCATENATED MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/@vuesax/vsButton/vsButtonGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var vsButtonGroupvue_type_script_lang_js_ = ({
  name: 'VsButtonGroup'
});
// CONCATENATED MODULE: ./packages/@vuesax/vsButton/vsButtonGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var vsButton_vsButtonGroupvue_type_script_lang_js_ = (vsButtonGroupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/@vuesax/vsButton/vsButtonGroup.vue?vue&type=style&index=0&lang=stylus&
var vsButtonGroupvue_type_style_index_0_lang_stylus_ = __webpack_require__("9a96");

// CONCATENATED MODULE: ./packages/@vuesax/vsButton/vsButtonGroup.vue






/* normalize component */

var vsButtonGroup_component = normalizeComponent(
  vsButton_vsButtonGroupvue_type_script_lang_js_,
  vsButtonGroupvue_type_template_id_61864bfd_render,
  vsButtonGroupvue_type_template_id_61864bfd_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vsButtonGroup = (vsButtonGroup_component.exports);
// CONCATENATED MODULE: ./packages/@vuesax/vsButton/index.js




vsButton_component.install = function (vue) {
  return vue.component(vsButton_component.name, vsButton_component);
};

vsButtonGroup.install = function (vue) {
  return vue.component(vsButtonGroup.name, vsButtonGroup);
};

/* harmony default export */ var vsButton = (vsButton_component);

// CONCATENATED MODULE: ./packages/vuesax/components.js







 // export { default as vsCard } from '../@vuesax/vsCard/index.js'
// export { vsCardMediaGroup } from '../@vuesax/vsCard/index.js'
// export { vsCardMediaGroupItem } from '../@vuesax/vsCard/index.js'
// CONCATENATED MODULE: ./packages/vuesax/locales/index.js
/* harmony default export */ var locales = ({
  es_ES: {
    locale: 'es',
    button: 'Hola mundo Español',
    input: 'placeholder ES'
  },
  en_EN: {
    locale: 'en',
    button: 'Hello world',
    input: 'placeholder EN'
  }
});
// EXTERNAL MODULE: ./packages/vuesax/package.json
var vuesax_package = __webpack_require__("6ec4");

// CONCATENATED MODULE: ./packages/vuesax/vs.js




/* harmony default export */ var vs = (function (Vue, options) {
  /**
   * Vue.prototype.$vs
   *
   * @description  : opciones por defecto de vuesax y sus funciones
   * @props {
   *  version      : version vuesax -> @constant
   *  theme        : tema del framework -> @String
   *  globalClass  : class que se asignara en todos los componentes -> @String
   *  locale       : idioma que se asignara a todos los componentes -> @String
   *  customLocale : un objeto json personalizado para un idioma en especifico -> @object
   *  setColor     : cambia el color de una variable css con el prefijo --vs-{varColorName} -> @function
   *  setVar       : Cambia una variable css con el prefijo --vs-{varName} -> @function
   *  clipboard    : copia el texto al portapapeles del usuario
   * }
   */
  Vue.prototype.$vs = {
    // props
    version: vuesax_package.version,
    theme: options.theme || 'default',
    globalClass: options.globalClass || null,
    locale: options.customLocale ? _objectSpread({}, locales[options.locale], options.customLocale) : locales[options.locale] || 'es_ES',
    // functions
    setColor: vsFunctions_setColor,
    setVar: vsFunctions_setVar,
    sticky: sticky,
    ripple: vsFunctions_ripple,
    clipboard: vsFunctions_clipboard
  };
});
// CONCATENATED MODULE: ./packages/vuesax/index.js







var vuesax_install = function install(Vue, options) {
  Object.values(components_namespaceObject).forEach(function (vsComponent) {
    Vue.use(vsComponent);
  });
  vs(Vue, options);
};

if (typeof window !== 'undefined' && window.Vue) {
  vuesax_install(window.Vue);
}

/* harmony default export */ var vuesax = (vuesax_install);

// CONCATENATED MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport vsAvatar */__webpack_require__.d(__webpack_exports__, "vsAvatar", function() { return vsAvatar; });
/* concated harmony reexport vsAvatarGroup */__webpack_require__.d(__webpack_exports__, "vsAvatarGroup", function() { return vsAvatarGroup; });
/* concated harmony reexport vsAlert */__webpack_require__.d(__webpack_exports__, "vsAlert", function() { return vsAlert; });
/* concated harmony reexport vsBreadcrumb */__webpack_require__.d(__webpack_exports__, "vsBreadcrumb", function() { return vsBreadcrumb; });
/* concated harmony reexport vsBreadcrumbItem */__webpack_require__.d(__webpack_exports__, "vsBreadcrumbItem", function() { return breadcrumbItem; });
/* concated harmony reexport vsBreadcrumbGroup */__webpack_require__.d(__webpack_exports__, "vsBreadcrumbGroup", function() { return breadcrumbGroup; });
/* concated harmony reexport vsButton */__webpack_require__.d(__webpack_exports__, "vsButton", function() { return vsButton; });
/* concated harmony reexport vsButtonGroup */__webpack_require__.d(__webpack_exports__, "vsButtonGroup", function() { return vsButtonGroup; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (vuesax);



/***/ }),

/***/ "379d":
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

/***/ "3817":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("0bff") && !__webpack_require__("09eb")(function () {
  return Object.defineProperty(__webpack_require__("cced")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "38bb":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "3a30":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("c7e2");
var cof = __webpack_require__("f108");
var MATCH = __webpack_require__("7ac9")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "3bcb":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("c7e2");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "3c4f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ef76");
var core = __webpack_require__("c63f");
var ctx = __webpack_require__("9c81");
var hide = __webpack_require__("204f");
var has = __webpack_require__("ece4");
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

/***/ "3dfd":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("9d5f");
var gOPN = __webpack_require__("4627").f;
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

/***/ "3ec9":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("9db9");
var IE8_DOM_DEFINE = __webpack_require__("3817");
var toPrimitive = __webpack_require__("c398");
var dP = Object.defineProperty;

exports.f = __webpack_require__("0bff") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

/***/ "4169":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("c7e2");
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

/***/ "416f":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("b9af");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "427f":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "42ae":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("38bb");
var toObject = __webpack_require__("8fb1");
var IE_PROTO = __webpack_require__("b184")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "4627":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("7db8");
var hiddenKeys = __webpack_require__("866d").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "47e1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("8abb");
var $includes = __webpack_require__("1ca4")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("a19f")('includes');


/***/ }),

/***/ "4909":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("8abb");
var defined = __webpack_require__("493c");
var fails = __webpack_require__("6f53");
var spaces = __webpack_require__("427f");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "493c":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "49a8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4aca":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("3bcb");
var IE8_DOM_DEFINE = __webpack_require__("8904");
var toPrimitive = __webpack_require__("4169");
var dP = Object.defineProperty;

exports.f = __webpack_require__("99db") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

/***/ "4ba4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4d52":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("9db9");
var dPs = __webpack_require__("ec4a");
var enumBugKeys = __webpack_require__("866d");
var IE_PROTO = __webpack_require__("9e09")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("cced")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("52c4").appendChild(iframe);
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

/***/ "4ed6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4f4d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),

/***/ "4f7a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("bf76");

/***/ }),

/***/ "503b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5250");
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5250":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "52c4":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("ef76").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "5440":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("4aca").f;
var has = __webpack_require__("38bb");
var TAG = __webpack_require__("7ac9")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "57aa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__("4909")('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),

/***/ "5ee7":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("3c4f");
var core = __webpack_require__("c63f");
var fails = __webpack_require__("09eb");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "62c8":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("c7e2");
var document = __webpack_require__("027b").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "6539":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breadcrumbItem_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("49a8");
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breadcrumbItem_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breadcrumbItem_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breadcrumbItem_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6929":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var colorString = __webpack_require__("1ab9");
var convert = __webpack_require__("bb15");

var _slice = [].slice;

var skippedModels = [
	// to be honest, I don't really feel like keyword belongs in color convert, but eh.
	'keyword',

	// gray conflicts with some method names, and has its own method defined.
	'gray',

	// shouldn't really be in color-convert either...
	'hex'
];

var hashedModelKeys = {};
Object.keys(convert).forEach(function (model) {
	hashedModelKeys[_slice.call(convert[model].labels).sort().join('')] = model;
});

var limiters = {};

function Color(obj, model) {
	if (!(this instanceof Color)) {
		return new Color(obj, model);
	}

	if (model && model in skippedModels) {
		model = null;
	}

	if (model && !(model in convert)) {
		throw new Error('Unknown model: ' + model);
	}

	var i;
	var channels;

	if (obj == null) { // eslint-disable-line no-eq-null,eqeqeq
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (obj instanceof Color) {
		this.model = obj.model;
		this.color = obj.color.slice();
		this.valpha = obj.valpha;
	} else if (typeof obj === 'string') {
		var result = colorString.get(obj);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + obj);
		}

		this.model = result.model;
		channels = convert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (obj.length) {
		this.model = model || 'rgb';
		channels = convert[this.model].channels;
		var newArr = _slice.call(obj, 0, channels);
		this.color = zeroArray(newArr, channels);
		this.valpha = typeof obj[channels] === 'number' ? obj[channels] : 1;
	} else if (typeof obj === 'number') {
		// this is always RGB - can be converted later on.
		obj &= 0xFFFFFF;
		this.model = 'rgb';
		this.color = [
			(obj >> 16) & 0xFF,
			(obj >> 8) & 0xFF,
			obj & 0xFF
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;

		var keys = Object.keys(obj);
		if ('alpha' in obj) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof obj.alpha === 'number' ? obj.alpha : 0;
		}

		var hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
		}

		this.model = hashedModelKeys[hashedKeys];

		var labels = convert[this.model].labels;
		var color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(obj[labels[i]]);
		}

		this.color = zeroArray(color);
	}

	// perform limitations (clamping, etc.)
	if (limiters[this.model]) {
		channels = convert[this.model].channels;
		for (i = 0; i < channels; i++) {
			var limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}

	this.valpha = Math.max(0, Math.min(1, this.valpha));

	if (Object.freeze) {
		Object.freeze(this);
	}
}

Color.prototype = {
	toString: function () {
		return this.string();
	},

	toJSON: function () {
		return this[this.model]();
	},

	string: function (places) {
		var self = this.model in colorString.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to[self.model](args);
	},

	percentString: function (places) {
		var self = this.rgb().round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to.rgb.percent(args);
	},

	array: function () {
		return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
	},

	object: function () {
		var result = {};
		var channels = convert[this.model].channels;
		var labels = convert[this.model].labels;

		for (var i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}

		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}

		return result;
	},

	unitArray: function () {
		var rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;

		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}

		return rgb;
	},

	unitObject: function () {
		var rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;

		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}

		return rgb;
	},

	round: function (places) {
		places = Math.max(places || 0, 0);
		return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
	},

	alpha: function (val) {
		if (arguments.length) {
			return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
		}

		return this.valpha;
	},

	// rgb
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),

	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) { return ((val % 360) + 360) % 360; }), // eslint-disable-line brace-style

	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),

	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),

	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),

	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),

	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),

	x: getset('xyz', 0, maxfn(100)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(100)),

	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),

	keyword: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return convert[this.model].keyword(this.color);
	},

	hex: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return colorString.to.hex(this.rgb().round().color);
	},

	rgbNumber: function () {
		var rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.rgb().color;

		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}

		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();

		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}

		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	isDark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.rgb().color;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	isLight: function () {
		return !this.isDark();
	},

	negate: function () {
		var rgb = this.rgb();
		for (var i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}
		return rgb;
	},

	lighten: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},

	darken: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},

	saturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},

	desaturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},

	whiten: function (ratio) {
		var hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},

	blacken: function (ratio) {
		var hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},

	grayscale: function () {
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var rgb = this.rgb().color;
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(val, val, val);
	},

	fade: function (ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},

	opaquer: function (ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},

	rotate: function (degrees) {
		var hsl = this.hsl();
		var hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},

	mix: function (mixinColor, weight) {
		// ported from sass implementation in C
		// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		if (!mixinColor || !mixinColor.rgb) {
			throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
		}
		var color1 = mixinColor.rgb();
		var color2 = this.rgb();
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return Color.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue(),
				color1.alpha() * p + color2.alpha() * (1 - p));
	}
};

// model conversion methods and static constructors
Object.keys(convert).forEach(function (model) {
	if (skippedModels.indexOf(model) !== -1) {
		return;
	}

	var channels = convert[model].channels;

	// conversion methods
	Color.prototype[model] = function () {
		if (this.model === model) {
			return new Color(this);
		}

		if (arguments.length) {
			return new Color(arguments, model);
		}

		var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
		return new Color(assertArray(convert[this.model][model].raw(this.color)).concat(newAlpha), model);
	};

	// 'static' construction methods
	Color[model] = function (color) {
		if (typeof color === 'number') {
			color = zeroArray(_slice.call(arguments), channels);
		}
		return new Color(color, model);
	};
});

function roundTo(num, places) {
	return Number(num.toFixed(places));
}

function roundToPlace(places) {
	return function (num) {
		return roundTo(num, places);
	};
}

function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];

	model.forEach(function (m) {
		(limiters[m] || (limiters[m] = []))[channel] = modifier;
	});

	model = model[0];

	return function (val) {
		var result;

		if (arguments.length) {
			if (modifier) {
				val = modifier(val);
			}

			result = this[model]();
			result.color[channel] = val;
			return result;
		}

		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}

		return result;
	};
}

function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}

function assertArray(val) {
	return Array.isArray(val) ? val : [val];
}

function zeroArray(arr, length) {
	for (var i = 0; i < length; i++) {
		if (typeof arr[i] !== 'number') {
			arr[i] = 0;
		}
	}

	return arr;
}

module.exports = Color;


/***/ }),

/***/ "6969":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("f108");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "69c5":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("74a0");
var $Object = __webpack_require__("c63f").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "6a2e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4ed6");
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6ec4":
/***/ (function(module) {

module.exports = {"name":"vuesax","version":"4.0.0-alpha.0","private":false,"description":"Framework Components for Vue js","author":"ldrovira <luisdanielrovira8@gmail.com>","homepage":"https://lusaxweb.github.io/vuesax/","repository":"lusaxweb/vuesax","bugs":{"url":"https://github.com/lusaxweb/vuesax/issues"},"scripts":{"build":"node build/index.js","publish":"npm publish --tag next","docs:build":"vuepress build docs","dev":"vuepress dev docs"},"main":"dist/vuesax.common.js","unpkg":"dist/vuesax.umd.min.js","jsdelivr":"dist/vuesax.umd.min.js","devDependencies":{"@vue/cli-plugin-eslint":"^3.7.0","@vue/eslint-config-standard":"^4.0.0","babel-eslint":"^10.0.1","babel-minify-webpack-plugin":"^0.3.1","eslint":"^5.16.0","eslint-plugin-vue":"^5.0.0","fs-extra":"^8.0.1","lerna":"^3.15.0","stylus":"^0.54.5","stylus-loader":"^3.0.2","vuepress":"^1.0.0-alpha.47","vuepress-plugin-container":"^2.0.1","webpack":"^4.33.0"},"keywords":["vuesax","vue","vuejs","vue-components","components","component","javascript","css","framework","ui","frontend","responsive","stylus"],"license":"MIT"};

/***/ }),

/***/ "6ef8":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("c7e2");
var isArray = __webpack_require__("1161");
var SPECIES = __webpack_require__("7ac9")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "6f18":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("204f");


/***/ }),

/***/ "6f53":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "6fb5":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "7156":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "7268":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "74a0":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("3c4f");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("0bff"), 'Object', { defineProperty: __webpack_require__("3ec9").f });


/***/ }),

/***/ "75e1":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("e2de");
var gOPS = __webpack_require__("de0e");
var pIE = __webpack_require__("6fb5");
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

/***/ "76b2":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("f0cd");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "7a0d":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "7a39":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7a5d":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("e23d");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "7ac9":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("a88f")('wks');
var uid = __webpack_require__("15f3");
var Symbol = __webpack_require__("027b").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "7b47":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("4aca").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("99db") && dP(FProto, NAME, {
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

/***/ "7b9b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("137e");

/***/ }),

/***/ "7db8":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("ece4");
var toIObject = __webpack_require__("9d5f");
var arrayIndexOf = __webpack_require__("8db2")(false);
var IE_PROTO = __webpack_require__("9e09")('IE_PROTO');

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

/***/ "866d":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "8904":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("99db") && !__webpack_require__("6f53")(function () {
  return Object.defineProperty(__webpack_require__("62c8")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "8abb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("027b");
var core = __webpack_require__("e987");
var hide = __webpack_require__("16cb");
var redefine = __webpack_require__("b75e");
var ctx = __webpack_require__("09e0");
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

/***/ "8bbd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("027b");
var has = __webpack_require__("38bb");
var cof = __webpack_require__("f108");
var inheritIfRequired = __webpack_require__("b844");
var toPrimitive = __webpack_require__("4169");
var fails = __webpack_require__("6f53");
var gOPN = __webpack_require__("f9cb").f;
var gOPD = __webpack_require__("9425").f;
var dP = __webpack_require__("4aca").f;
var $trim = __webpack_require__("4909").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("e041")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("99db") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("b75e")(global, NUMBER, $Number);
}


/***/ }),

/***/ "8db2":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("9d5f");
var toLength = __webpack_require__("a315");
var toAbsoluteIndex = __webpack_require__("7a5d");
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

/***/ "8fb1":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("493c");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "9091":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("c63f");
var global = __webpack_require__("ef76");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("f220") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "9278":
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

/***/ "9425":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("0a6c");
var createDesc = __webpack_require__("379d");
var toIObject = __webpack_require__("24b1");
var toPrimitive = __webpack_require__("4169");
var has = __webpack_require__("38bb");
var IE8_DOM_DEFINE = __webpack_require__("8904");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("99db") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "99db":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("6f53")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "9a96":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vsButtonGroup_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7a39");
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vsButtonGroup_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vsButtonGroup_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vsButtonGroup_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9c81":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d786");
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

/***/ "9d5f":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("3664");
var defined = __webpack_require__("b9af");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "9db9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("b6b1");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "9e09":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("9091")('keys');
var uid = __webpack_require__("a390");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "a036":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("bfbf");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
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
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
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

/***/ "a11f":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("9091")('wks');
var uid = __webpack_require__("a390");
var Symbol = __webpack_require__("ef76").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "a19f":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("7ac9")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("16cb")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "a279":
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__("b753");

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	var graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	var models = Object.keys(conversions);

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

module.exports = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};



/***/ }),

/***/ "a315":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("e23d");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "a390":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "a5d0":
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

/***/ "a88f":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("e987");
var global = __webpack_require__("027b");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("3340") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("f108");
var TAG = __webpack_require__("7ac9")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "adc6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("a19f");
var step = __webpack_require__("7a0d");
var Iterators = __webpack_require__("ba06");
var toIObject = __webpack_require__("24b1");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("d689")(Array, 'Array', function (iterated, kind) {
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

/***/ "ade9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("a88f")('native-function-to-string', Function.toString);


/***/ }),

/***/ "b184":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("a88f")('keys');
var uid = __webpack_require__("15f3");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "b514":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("c5c3");
var defined = __webpack_require__("493c");
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

/***/ "b6b1":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "b753":
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var cssKeywords = __webpack_require__("4f4d");

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in cssKeywords) {
	if (cssKeywords.hasOwnProperty(key)) {
		reverseKeywords[cssKeywords[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var rdif;
	var gdif;
	var bdif;
	var h;
	var s;

	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var v = Math.max(r, g, b);
	var diff = v - Math.min(r, g, b);
	var diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}
		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in cssKeywords) {
		if (cssKeywords.hasOwnProperty(keyword)) {
			var value = cssKeywords[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};


/***/ }),

/***/ "b75e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("027b");
var hide = __webpack_require__("16cb");
var has = __webpack_require__("38bb");
var SRC = __webpack_require__("15f3")('src');
var $toString = __webpack_require__("ade9");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("e987").inspectSource = function (it) {
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

/***/ "b844":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("c7e2");
var setPrototypeOf = __webpack_require__("f6b3").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "b8e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("eda3");
var redefine = __webpack_require__("b75e");
var hide = __webpack_require__("16cb");
var fails = __webpack_require__("6f53");
var defined = __webpack_require__("493c");
var wks = __webpack_require__("7ac9");
var regexpExec = __webpack_require__("a036");

var SPECIES = wks('species');

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

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
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
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

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

/***/ "b8fa":
/***/ (function(module, exports) {

module.exports = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};


/***/ }),

/***/ "b9af":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "ba06":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "bb15":
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__("b753");
var route = __webpack_require__("a279");

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

module.exports = convert;


/***/ }),

/***/ "bbec":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("8abb");
var $values = __webpack_require__("c5c5")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "bebf":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("416f");
var $keys = __webpack_require__("e2de");

__webpack_require__("5ee7")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "bf76":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1078");
module.exports = __webpack_require__("c63f").Object.getOwnPropertySymbols;


/***/ }),

/***/ "bfbf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("3bcb");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "c398":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("b6b1");
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

/***/ "c489":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("e774");
var enumBugKeys = __webpack_require__("d8f8");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "c5c3":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "c5c5":
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__("c489");
var toIObject = __webpack_require__("24b1");
var isEnum = __webpack_require__("0a6c").f;
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

/***/ "c63f":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "c7e2":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "cced":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("b6b1");
var document = __webpack_require__("ef76").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "cdd3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("6f53");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "d3a1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breadcrumbGroup_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7268");
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breadcrumbGroup_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breadcrumbGroup_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breadcrumbGroup_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d59d":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("a11f");


/***/ }),

/***/ "d689":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("3340");
var $export = __webpack_require__("8abb");
var redefine = __webpack_require__("b75e");
var hide = __webpack_require__("16cb");
var Iterators = __webpack_require__("ba06");
var $iterCreate = __webpack_require__("2d98");
var setToStringTag = __webpack_require__("5440");
var getPrototypeOf = __webpack_require__("42ae");
var ITERATOR = __webpack_require__("7ac9")('iterator');
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

/***/ "d786":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "d8f8":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "d9ab":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("adc6");
var getKeys = __webpack_require__("c489");
var redefine = __webpack_require__("b75e");
var global = __webpack_require__("027b");
var hide = __webpack_require__("16cb");
var Iterators = __webpack_require__("ba06");
var wks = __webpack_require__("7ac9");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "de0e":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "e041":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("3bcb");
var dPs = __webpack_require__("06a2");
var enumBugKeys = __webpack_require__("d8f8");
var IE_PROTO = __webpack_require__("b184")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("62c8")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("065a").appendChild(iframe);
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

/***/ "e23d":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "e2de":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("7db8");
var enumBugKeys = __webpack_require__("866d");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "e5fa":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("c5c3");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "e63a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1201");
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e774":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("38bb");
var toIObject = __webpack_require__("24b1");
var arrayIndexOf = __webpack_require__("1ca4")(false);
var IE_PROTO = __webpack_require__("b184")('IE_PROTO');

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

/***/ "e987":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "ec4a":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("3ec9");
var anObject = __webpack_require__("9db9");
var getKeys = __webpack_require__("e2de");

module.exports = __webpack_require__("0bff") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "ece4":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "eda3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("a036");
__webpack_require__("8abb")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "ef76":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "f0cd":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "f108":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "f220":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "f5cd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("3bcb");
var toObject = __webpack_require__("8fb1");
var toLength = __webpack_require__("e5fa");
var toInteger = __webpack_require__("c5c3");
var advanceStringIndex = __webpack_require__("03b9");
var regExpExec = __webpack_require__("06f3");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("b8e3")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
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
    return $replace.call(replacement, symbols, function (match, ch) {
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

/***/ "f5d7":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("69c5");

/***/ }),

/***/ "f6b3":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("c7e2");
var anObject = __webpack_require__("3bcb");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("09e0")(Function.call, __webpack_require__("9425").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "f70d":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("bebf");
module.exports = __webpack_require__("c63f").Object.keys;


/***/ }),

/***/ "f9cb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("e774");
var hiddenKeys = __webpack_require__("d8f8").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ })

/******/ });
});