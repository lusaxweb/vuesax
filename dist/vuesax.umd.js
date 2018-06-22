(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vuesax"] = factory(require("vue"));
	else
		root["vuesax"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_lRwf__) {
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

/***/ "/AIR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("Biqn");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsInput/vsInput.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    if (!min && min !== 0 || !max) return !isNaN(value);
    return Number(value) <= Number(max) && Number(value) >= Number(min);
  },
  default: function _default(value) {
    return true;
  }
};
/* harmony default export */ var vsInput = ({
  inheritAttrs: false,
  name: 'vs-input',
  props: ['vsWidth', 'value', 'vsLabelPlaceholder', 'vsPlaceholder', 'vsLabel', 'disabled', 'vsIcon', 'vsIconPack', 'vsIconAfter', 'vsColor', 'vsType', 'vsDangerText', 'vsSuccessText', 'vsMax', 'vsMin', 'vsValid', 'vsValidationFunction', 'vsRequired'],
  data: function data() {
    return {
      focusx: false
    };
  },
  mounted: function mounted() {
    if (this.value == undefined) {
      console.warn("Vuesax: The property of the input v-model is necessary to function properly vs-input component", this.$el);
    }
  },
  computed: {
    isRequired: function isRequired() {
      return this.vsRequired === true || this.vsRequired === 'true';
    },
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
      // Check if field is required first
      if (this.isRequired) {
        if (this.value.length === 0) {
          this.$emit('update:vsValid', false);
          return false;
        }
      } else {
        if (this.value === undefined || this.value === null || this.value.length === 0) {
          this.$emit('update:vsValid', true);
          return true;
        }
      }

      if (this.vsType) {
        //email
        if (this.value.length > 0 || typeof this.value === 'number') {
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

          if (evt.key != 'Backspace' && evt.key != 'Delete' && evt.key != 'Tab') {
            if (!rgx.test(evt.key)) {
              evt.preventDefault();
            }
          }
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-98481af8","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsInput/vsInput.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-input",class:[_vm.validar,{'con-focus':_vm.focusx,'vsIconx':_vm.vsIcon, 'vs-icon-after':_vm.vsIconAfter, 'disabledx':_vm.disabled}],style:({
  'width':_vm.vsWidth
})},[_c('label',{staticClass:"label",class:{'focusLabel':_vm.focusx, 'disabledxlabel':_vm.disabled},attrs:{"for":""}},[_vm._v(_vm._s(_vm.vsLabel))]),_c('input',_vm._g(_vm._b({ref:"inputx",staticClass:"vs-input",style:({'border':("1px solid " + (_vm.focusx?_vm.backgroundx:'rgba(0, 0, 0, 0.150)')),'caretColor': _vm.backgroundx}),attrs:{"type":_vm.vsType ? _vm.vsType :'text',"disabled":_vm.disabled},domProps:{"value":_vm.value}},'input',_vm.$attrs,false),_vm.listeners)),(!_vm.vsLabelPlaceholder)?_c('span',{staticClass:"placeholder",class:{'noPlaceholder':_vm.value?(_vm.value.length>0 || typeof _vm.value === 'number'):false?true:_vm.focusx},on:{"click":function($event){_vm.$refs.inputx.focus()}}},[_vm._v(_vm._s(_vm.vsPlaceholder))]):_vm._e(),(_vm.vsLabelPlaceholder)?_c('span',{staticClass:"placeholder",class:{'noPlaceholderLabel':_vm.value.length>0?true:_vm.focusx},style:({'color':_vm.focusx?_vm.backgroundx:'rgba(0, 0, 0, 0.30)'}),on:{"click":function($event){_vm.$refs.inputx.focus()}}},[_vm._v(_vm._s(_vm.vsLabelPlaceholder))]):_vm._e(),(_vm.vsIcon)?_c('span',{staticClass:"iconx"},[(_vm.vsIconPack == null)?_c('i',{staticClass:"material-icons"},[_vm._v(_vm._s(_vm.vsIcon))]):_c('i',{class:[_vm.vsIconPack, _vm.vsIcon]})]):_vm._e(),_c('div',{staticClass:"icon-validar-mal",attrs:{"title":_vm.validar=='input-mal'?_vm.vsDangerText:null}},[_c('i',{staticClass:"material-icons"},[_vm._v("error")])]),_c('div',{staticClass:"icon-validar-bien",attrs:{"title":_vm.validar=='input-bien'?_vm.vsSuccessText:null}},[_c('i',{staticClass:"material-icons"},[_vm._v("check_circle")])])])}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__("XyMi");

// CONCATENATED MODULE: ./src/components/vsInput/vsInput.vue
function injectStyle (context) {
  __webpack_require__("h1ML")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-98481af8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  vsInput,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var vsInput_vsInput = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "/d2Y":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("Bgvs");
var ITERATOR = __webpack_require__("9vqU")('iterator');
var Iterators = __webpack_require__("6dI7");
module.exports = __webpack_require__("ReUz").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "/pvz":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lVK7");


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

/***/ "0Lb0":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
	setTimeout(fn, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("1jrK");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


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

/***/ "0xDb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  insertBody: function insertBody(elx) {
    document.body.insertBefore(elx, document.body.firstChild);
  },
  changePosition: function changePosition(elx, content, conditional) {
    var topx = 0;
    var leftx = 0;
    var widthx = 0;
    var scrollTopx = window.pageYOffset || document.documentElement.scrollTop;

    if (elx.getBoundingClientRect().top + 300 >= window.innerHeight) {
      setTimeout(function () {
        if (conditional) {
          topx = elx.getBoundingClientRect().top - content.$el.clientHeight + scrollTopx;
        } else {
          topx = elx.getBoundingClientRect().top - content.$el.clientHeight + elx.clientHeight + scrollTopx;
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

/***/ "1jrK":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("0Lb0")))

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

/***/ "2GAV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ "2sbx":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "2x5d":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("nJNB");
module.exports = __webpack_require__("ReUz").Object.getOwnPropertySymbols;


/***/ }),

/***/ "3T7U":
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

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

/***/ "5PDp":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ "5mz/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("wpHI");
var $export = __webpack_require__("ZVp1");
var toObject = __webpack_require__("8IVJ");
var call = __webpack_require__("iCuG");
var isArrayIter = __webpack_require__("gUSI");
var toLength = __webpack_require__("6jnJ");
var createProperty = __webpack_require__("qdiF");
var getIterFn = __webpack_require__("/d2Y");

$export($export.S + $export.F * !__webpack_require__("nx0Z")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


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

/***/ "7AxY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "7UU1":
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "7Yfw":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ "9umH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
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

/***/ "A9i9":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("jEwU");
var hiddenKeys = __webpack_require__("wdcL").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "AG8I":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ArFY":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "AuYl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Bgvs":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("iOGI");
var TAG = __webpack_require__("9vqU")('toStringTag');
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

/***/ "C9Az":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "D7v/":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "DRbS":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "DSKJ":
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),

/***/ "DV1v":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Dbz9":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ "EV4j":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("r4Vc");
var defined = __webpack_require__("gYvx");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "EzrT":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Fuxb":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "GUqB":
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

/***/ "J2cS":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


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

/***/ "Ls/m":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ "MPHU":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "MhjW":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("tfnZ");
__webpack_require__("NQB/");
module.exports = __webpack_require__("zdWb");


/***/ }),

/***/ "Mpo0":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NA0R":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NM/j":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__("7UU1");

var iterableToArrayLimit = __webpack_require__("cXIJ");

var nonIterableRest = __webpack_require__("3T7U");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "NNME":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("NQB/");
__webpack_require__("5mz/");
module.exports = __webpack_require__("ReUz").Array.from;


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

/***/ "NqgJ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "OGwZ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ "PXDP":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ "RteB":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Ryeo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_vuesax_node_modules_babel_runtime_helpers_typeof__ = __webpack_require__("Oy1H");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_vuesax_node_modules_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_vuesax_node_modules_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vsTooltip_css__ = __webpack_require__("ZWqm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vsTooltip_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vsTooltip_css__);


/* harmony default export */ __webpack_exports__["a"] = ({
  update: function update(el, binding, vnode) {
    var valuex = null;
    var keyx = el.dataset.keyx;

    if (__WEBPACK_IMPORTED_MODULE_0_C_vuesax_node_modules_babel_runtime_helpers_typeof___default()(binding.value) == 'object') {
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

    if (__WEBPACK_IMPORTED_MODULE_0_C_vuesax_node_modules_babel_runtime_helpers_typeof___default()(binding.value) == 'object') {
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

    if (__WEBPACK_IMPORTED_MODULE_0_C_vuesax_node_modules_babel_runtime_helpers_typeof___default()(binding.value) == 'object') {
      if (binding.value.hasOwnProperty('position')) {
        tooltipx.classList.add('vs-tooltip-' + binding.value.position);
      }
    }

    tooltipx.classList.add('vs-tooltip' + ramdomx);
    tooltipx.innerHTML = "\n      <p>\n      ".concat(valuex, "\n      </p>\n    ");
    tooltipx.style.background = colorx;

    var mouseEnterx = function mouseEnterx(event) {
      var coords = event.toElement.getBoundingClientRect();
      var scrollTopx = window.pageYOffset || document.documentElement.scrollTop; // console.log(window.pageYOffset);

      document.body.insertBefore(tooltipx, document.body.firstChild);

      if (__WEBPACK_IMPORTED_MODULE_0_C_vuesax_node_modules_babel_runtime_helpers_typeof___default()(binding.value) == 'object') {
        if (binding.value.position == 'left') {
          tooltipx.style.top = coords.top + event.target.clientHeight + scrollTopx + 'px';
          tooltipx.style.left = coords.left - (tooltipx.clientWidth + 8) + 'px';
        } else if (binding.value.position == 'right') {
          tooltipx.style.top = coords.top + event.target.clientHeight + scrollTopx + 'px';
          tooltipx.style.left = coords.left + (event.target.clientWidth + 8) + 'px';
        } else if (binding.value.position == 'bottom') {
          tooltipx.style.top = coords.top + (event.target.clientHeight * 2 + 5) + scrollTopx + 'px';
          tooltipx.style.left = coords.left - (tooltipx.clientWidth / 2 - event.target.clientWidth / 2) + 'px';
        } else if (binding.value.position == 'top' || binding.value.position == undefined) {
          tooltipx.style.top = coords.top + scrollTopx + 'px';
          tooltipx.style.left = coords.left - (tooltipx.clientWidth / 2 - event.target.clientWidth / 2) + 'px';
        }
      } else {
        tooltipx.style.top = coords.top + scrollTopx + 'px';
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

/***/ "SLrA":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ "Tgw5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_modules_es6_regexp_replace__ = __webpack_require__("e5kn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_modules_es6_regexp_replace___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_modules_es6_regexp_replace__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color_js__ = __webpack_require__("n5ki");



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'theme',
  vsfunction: function vsfunction(json, isServer) {
    for (var clave in json) {
      var colorx = void 0;

      if (/^[rgb(]/g.test(json[clave])) {
        colorx = json[clave].replace(/[rgb()]/g, '');
      } else if (/[#]/g.test(json[clave])) {
        var rgbx = __WEBPACK_IMPORTED_MODULE_1__color_js__["a" /* default */].hexToRgb(json[clave]); // console.log(rgbx);

        colorx = "".concat(rgbx.r, ",").concat(rgbx.g, ",").concat(rgbx.b);
      } else {
        colorx = json[clave];
      }

      __WEBPACK_IMPORTED_MODULE_1__color_js__["a" /* default */].setCssVariable('--' + clave, colorx, isServer);
    }
  }
});

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

/***/ "VI0S":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("tfnZ");
__webpack_require__("NQB/");
module.exports = __webpack_require__("bvvC");


/***/ }),

/***/ "VmK7":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ "XAb2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "XZrW":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("A6jq");


/***/ }),

/***/ "XyMi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
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

/***/ "Z539":
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

/***/ "ZWqm":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ "bGai":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../Users/pc 01/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("bnAT");
var es6_function_name_default = /*#__PURE__*/__webpack_require__.n(es6_function_name);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("Biqn");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./src/utils/color.js
var utils_color = __webpack_require__("n5ki");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsButton/vsButton.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  inheritAttrs: false,
  name: 'vs-button',
  props: {
    vsType: {
      default: 'filled',
      type: String
    },
    vsColor: {
      default: 'primary',
      type: String
    },
    vsColorText: {
      default: null,
      type: String
    },
    vsLineOrigin: {
      default: 'center',
      type: String
    },
    vsLinePosition: {
      default: 'bottom',
      type: String
    },
    vsGradientDirection: {
      default: '30deg',
      type: String
    },
    vsGradientColorSecondary: {
      default: 'primary',
      type: String
    },
    vsIcon: {
      type: String,
      default: null
    },
    vsIconAfter: {
      default: false,
      type: Boolean
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

      return objectSpread_default()({}, this.$listeners, {
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
          color: utils_color["a" /* default */].getColor(this.vsColorText, 1),
          background: utils_color["a" /* default */].getColor(this.vsColor, 1),
          boxShadow: this.hoverx ? "0px 8px 25px -8px ".concat(utils_color["a" /* default */].getColor(this.vsColor, 1)) : null
        };
      } else if (this.is('border') || this.is('flat')) {
        return {
          border: "".concat(this.is('flat') ? 0 : 1, "px solid ").concat(utils_color["a" /* default */].getColor(this.vsColor, 1)),
          background: this.hoverx ? utils_color["a" /* default */].getColor(this.vsColor, .1) : 'transparent',
          color: utils_color["a" /* default */].getColor(this.vsColorText, 1) || utils_color["a" /* default */].getColor(this.vsColor, 1)
        };
      } else if (this.is('line')) {
        return {
          color: utils_color["a" /* default */].getColor(this.vsColorText, 1) || utils_color["a" /* default */].getColor(this.vsColor, 1),
          borderBottomWidth: this.vsLinePosition == 'bottom' ? "2px" : null,
          borderColor: "".concat(utils_color["a" /* default */].getColor(this.vsColor, .2)),
          borderTopWidth: this.vsLinePosition == 'top' ? "2px" : null
        };
      } else if (this.is('gradient')) {
        var backgroundx = "linear-gradient(".concat(this.vsGradientDirection, ", ").concat(utils_color["a" /* default */].getColor(this.vsColor), " 0%, ").concat(utils_color["a" /* default */].getColor(this.vsGradientColorSecondary, 1), " 100%)");
        return {
          background: backgroundx
        };
      } else if (this.is('relief')) {
        var color = utils_color["a" /* default */].getColor(this.vsColor, 1);

        return {
          background: utils_color["a" /* default */].getColor(this.vsColor, 1),
          borderBottom: "3px solid ".concat(utils_color["a" /* default */].darken(color, -0.4))
        };
      }
    },
    stylesBackGround: function stylesBackGround() {
      var styles = {
        background: this.is('flat') || this.is('border') ? utils_color["a" /* default */].getColor(this.vsColor, 1, false) : null,
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

      if (this.vsLineOrigin == 'left') {
        lineOrigin = '0%';
      } else if (this.vsLineOrigin == 'right') {
        lineOrigin = 'auto';
      }

      var styles = {
        top: this.vsLinePosition == 'top' ? '-2px' : 'auto',
        bottom: this.vsLinePosition == 'bottom' ? '-2px' : 'auto',
        background: utils_color["a" /* default */].getColor(this.vsColor, 1),
        left: lineOrigin,
        right: lineOrigin == 'auto' ? '0px' : null,
        transform: lineOrigin == '50%' ? 'translate(-50%)' : null
      };
      return styles;
    }
  },
  methods: {
    is: function is(which) {
      var type = this.vsType;
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
      var _this2 = this;

      this.$emit('blur', event);

      if (this.vsType == 'border' || this.vsType == 'flat') {
        this.opacity = 0;
        setTimeout(function () {
          _this2.radio = 0;
        }, 150);
        this.isActive = false;
      }
    },
    clickButton: function clickButton(event) {
      var _this3 = this;

      this.$emit('click', event);

      if (this.isActive) {
        return;
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

      if (event.srcElement != btn) {
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
          _this3.time = _this3.timeOpacity = _this3.radio = 0;
          _this3.opacity = 1;
          _this3.isActive = false;
        }, this.time * 1100);
      } else {
        setTimeout(function () {
          _this3.timeOpacity = .15;
        }, this.time * 1100);
      }
    },
    isColor: function isColor() {
      return utils_color["a" /* default */].isColor(this.vsColor);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-77a08054","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsButton/vsButton.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',_vm._g(_vm._b({ref:"btn",staticClass:"vs-component vs-button",class:[("vs-button-" + (_vm.isColor()?_vm.vsColor:null)),("vs-button-" + _vm.vsType),{
    'isActive':_vm.isActive,
    'includeIcon':_vm.vsIcon
    }],style:(_vm.styles),attrs:{"name":"button"}},'button',_vm.$attrs,false),_vm.listeners),[(!_vm.is('line')&&!_vm.is('gradient')&&!_vm.is('relief'))?_c('span',{ref:"backgroundx",staticClass:"vs-button-backgroundx",style:(_vm.stylesBackGround)}):_vm._e(),_c('i',{staticClass:"material-icons vs-button-icon",style:({
      'order':_vm.vsIconAfter?2:0,
      'margin-right':_vm.$slots.default&&!_vm.vsIconAfter?'5px':'0px',
      'margin-left':_vm.$slots.default&&_vm.vsIconAfter?'5px':'0px'
      })},[_vm._v("\n      "+_vm._s(_vm.vsIcon)+"\n    ")]),(_vm.$slots.default)?_c('span',{staticClass:"vs-button-text"},[_vm._t("default")],2):_vm._e(),_c('span',{ref:"linex",staticClass:"vs-button-linex",style:(_vm.styleLine)})])}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__("XyMi");

// CONCATENATED MODULE: ./src/components/vsButton/vsButton.vue
function injectStyle (context) {
  __webpack_require__("vY7A")
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

var Component = Object(component_normalizer["a" /* default */])(
  vsButton,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var vsButton_vsButton = (Component.exports);

// CONCATENATED MODULE: ./src/components/vsButton/index.js



/* harmony default export */ var components_vsButton = (function (Vue) {
  Vue.component(vsButton_vsButton.name, vsButton_vsButton);
});
// EXTERNAL MODULE: ../Users/pc 01/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("e5kn");
var es6_regexp_replace_default = /*#__PURE__*/__webpack_require__.n(es6_regexp_replace);

// EXTERNAL MODULE: ../Users/pc 01/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("iiot");
var es6_regexp_split_default = /*#__PURE__*/__webpack_require__.n(es6_regexp_split);

// EXTERNAL MODULE: ../Users/pc 01/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("LZLU");
var es7_array_includes_default = /*#__PURE__*/__webpack_require__.n(es7_array_includes);

// EXTERNAL MODULE: ../Users/pc 01/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("kXha");
var es6_string_includes_default = /*#__PURE__*/__webpack_require__.n(es6_string_includes);

// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__("0xDb");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsSelect/vsSelect.vue









//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    value: {},
    vsNoData: {
      default: 'data no available',
      type: String
    },
    vsMaxSelected: {
      default: null,
      type: [Number, String]
    },
    vsAutocomplete: {
      default: false,
      type: Boolean
    },
    vsColor: {
      default: 'primary',
      type: String
    },
    vsMultiple: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      active: false,
      valuex: '',
      clear: false,
      scrollx: false,
      cords: {},
      filterx: false
    };
  },
  mounted: function mounted() {
    this.changeValue();
    utils["a" /* default */].insertBody(this.$refs.vsSelectOptions);
    console.log("this.$children>>>>>>", this.$children);
  },
  updated: function updated() {
    //
    if (!this.active) {
      this.changeValue();
    }
  },
  watch: {
    value: function value() {
      this.$emit('change', event);
    },
    active: function active() {
      var _this = this;

      if (this.active) {
        this.$children.forEach(function (item) {
          item.focusValue();
        });
        setTimeout(function () {
          if (_this.$refs.ulx.scrollHeight >= 260) _this.scrollx = true;
        }, 100);
      }
    }
  },
  computed: {
    listeners: function listeners() {
      var _this2 = this;

      return objectSpread_default()({}, this.$listeners, {
        blur: function blur(event) {
          if (_this2.vsAutocomplete && event.relatedTarget ? !event.relatedTarget.closest('.vs-select-options') : false) {
            _this2.closeOptions();
          }

          _this2.$emit('blur', event);
        },
        focus: function focus(event) {
          _this2.$emit('focus', event); // document.removeEventListener('click',this.clickBlur)


          _this2.focus(event);
        },
        input: function input(event) {
          return;
        },
        keyup: function keyup(event) {
          if (event.key == 'ArrowDown' || event.key == 'ArrowUp') {
            event.preventDefault();

            var childrens = _this2.$children.filter(function (item) {
              return item.visible;
            });

            childrens[0].$el.querySelector('.vs-select-item-btn').focus();
          } else {
            if (_this2.vsAutocomplete) {
              _this2.filterItems(event.target.value);
            }
          }

          _this2.$children.map(function (item) {
            item.valueInputx = _this2.$refs.inputselect.value;
          });
        }
      });
    }
  },
  methods: {
    addMultiple: function addMultiple(value) {
      if (this.value.includes(value)) {
        this.value.splice(this.value.indexOf(value), 1);
        this.changeValue();

        if (this.vsAutocomplete) {
          this.$refs.inputselect.focus();
        }
      } else {
        if (this.vsAutocomplete) {
          this.value.push(value);
          this.filterItems('');
          this.changeValue(); // this.$refs.inputselect.value += ','

          this.$refs.inputselect.focus();
        } else {
          this.value.push(value);
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
      items.map(function (item) {
        // let text = item.$el.innerText.replace('check_circle','')
        var text = item.vsText;

        if (_this3.vsMultiple) {
          var valuesx = value.split(',');
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
    },
    changeValue: function changeValue() {
      if (this.vsMultiple) {
        var values = this.value;
        var options = this.$children;
        var optionsValues = [];
        values.forEach(function (item) {
          options.forEach(function (item_option) {
            if (item_option.vsValue == item) {
              var text = item_option.vsText;
              text = text.replace('check_circle', '');
              optionsValues.push(text.trim());
            }
          });
        });
        this.$refs.inputselect.value = optionsValues.toString();
      } else {
        this.$refs.inputselect.value = this.valuex;
      }
    },
    focus: function focus(event) {
      var _this4 = this;

      this.active = true;
      var inputx = this.$refs.inputselect;
      setTimeout(function () {
        document.addEventListener('click', _this4.clickBlur);
      }, 100);

      if (this.vsAutocomplete && this.vsMultiple) {
        setTimeout(function () {
          if (inputx.value) {
            _this4.$refs.inputselect.value = inputx.value += ',';
          }

          inputx.selectionStart = inputx.selectionEnd = 10000;
        }, 10);
      } else if (this.vsAutocomplete && !this.vsMultiple) {
        this.$refs.inputselect.select();
      }

      if (!this.vsAutocomplete) {
        if (this.vsMultiple ? this.value.length == 0 : !this.value || this.vsMultiple) {
          setTimeout(function () {
            _this4.$children[0].$el.querySelector('.vs-select-item-btn').focus();
          }, 50);
        }
      } // this.changePosition()


      this.cords = utils["a" /* default */].changePosition(this.$refs.inputselect, this.$refs.vsSelectOptions, this.vsAutocomplete);
    },
    clickBlur: function clickBlur(event) {
      var closestx = event.target.closest('.vs-select-options');

      if (!closestx) {
        this.closeOptions();
        this.filterItems('');
        this.changeValue();
      }
    },
    closeOptions: function closeOptions() {
      // this.$refs.inputselect.blur()
      this.active = false;
      document.removeEventListener('click', this.clickBlur);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ff978926","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsSelect/vsSelect.vue
var vsSelect_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-select",class:{'autocompletex':_vm.vsAutocomplete,'activeOptions':_vm.active}},[_c('input',_vm._g(_vm._b({ref:"inputselect",staticClass:"input-select",attrs:{"readonly":!_vm.vsAutocomplete,"type":"text","name":"","value":""},on:{"click":function($event){$event.stopPropagation();},"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }$event.stopPropagation();$event.preventDefault();return _vm.closeOptions($event)}}},'input',_vm.$attrs,false),_vm.listeners)),_c('i',{staticClass:"material-icons icon-select"},[_vm._v("\n      keyboard_arrow_down\n    ")]),_c('transition',{attrs:{"name":"fade-select"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}],ref:"vsSelectOptions",staticClass:"vs-select-options",class:[("vs-select-" + _vm.vsColor),{'scrollx':this.scrollx}],style:(_vm.cords)},[_c('ul',{ref:"ulx"},[_vm._t("default")],2),_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.clear),expression:"clear"}]},[_c('li',{on:{"click":function($event){_vm.filterItems(''),_vm.changeValue()}}},[_vm._v("\n          "+_vm._s(_vm.vsNoData)+"\n        ")])])])])],1)}
var vsSelect_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsSelect/vsSelect.vue
function vsSelect_injectStyle (context) {
  __webpack_require__("SLrA")
}
/* script */


/* template */

/* template functional */
var vsSelect___vue_template_functional__ = false
/* styles */
var vsSelect___vue_styles__ = vsSelect_injectStyle
/* scopeId */
var vsSelect___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var vsSelect___vue_module_identifier__ = null

var vsSelect_Component = Object(component_normalizer["a" /* default */])(
  vsSelect,
  vsSelect_render,
  vsSelect_staticRenderFns,
  vsSelect___vue_template_functional__,
  vsSelect___vue_styles__,
  vsSelect___vue_scopeId__,
  vsSelect___vue_module_identifier__
)

/* harmony default export */ var vsSelect_vsSelect = (vsSelect_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsSelect/vsSelectItem.vue





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsSelectItem = ({
  inheritAttrs: false,
  name: 'vs-select-item',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    vsValue: {
      default: null
    },
    vsText: {
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
  created: function created() {
    this.putValue();
    this.getText = this.vsText;
  },
  updated: function updated() {
    this.putValue();
  },
  watch: {
    valueInputx: function valueInputx() {
      if (this.visible) {
        var MaysPrimera = function MaysPrimera(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
        };

        var valueInputx = this.valueInputx.split(',');

        if (valueInputx[valueInputx.length - 1] == '') {
          this.getText = this.vsText;
          return;
        }

        var valuex = valueInputx[valueInputx.length - 1];
        var re = new RegExp(valuex, "i");

        if (this.vsText.toUpperCase().indexOf(valuex.toUpperCase()) == 0) {
          console.log('primera letra');
          valuex = MaysPrimera(valuex);
        }

        var text = this.vsText.replace(re, "<span class=\"searchx\">".concat(valuex, "</span>"));
        this.getText = text;
      } else {
        this.getText = this.vsText;
      }
    }
  },
  computed: {
    disabledx: function disabledx() {
      if (this.$parent.vsMultiple) {
        if (this.isActive) {
          return false;
        } else {
          return this.$parent.vsMaxSelected == this.$parent.value.length;
        }
      } else {
        return false;
      }
    },
    isActive: function isActive() {
      return this.$parent.vsMultiple ? this.getValue.indexOf(this.vsValue) != -1 : this.getValue == this.vsValue;
    },
    listeners: function listeners() {
      var _this = this;

      return objectSpread_default()({}, this.$listeners, {
        blur: function blur(event) {
          if (event.relatedTarget ? !event.relatedTarget.closest('.vs-select-options') : true) {
            _this.$parent.closeOptions();
          }
        },
        click: function click(event) {
          return _this.clickOption(event);
        },
        mouseover: function mouseover(event) {
          return _this.hoverx = true;
        },
        mouseout: function mouseout(event) {
          return _this.hoverx = false;
        }
      });
    },
    styles: function styles() {
      return {
        background: this.isActive ? utils_color["a" /* default */].getColor(this.$parent.vsColor, .1) : null,
        color: this.isActive ? utils_color["a" /* default */].getColor(this.$parent.vsColor, 1) : null,
        fontWeight: this.isActive ? 'bold' : null
      };
    },
    getValue: function getValue() {
      return this.$parent.value;
    }
  },
  methods: {
    backspace: function backspace() {
      console.dir(this.$parent.$refs.inputselect);

      if (this.$parent.vsAutocomplete) {
        var valueInput = this.$parent.$refs.inputselect.value;
        this.$parent.$refs.inputselect.value = valueInput.substr(0, valueInput.length - 1);
        this.$parent.$refs.inputselect.focus();
      }
    },
    navigateOptions: function navigateOptions(orientation) {
      var orientationObject = 'nextSibling',
          lengthx = 0;

      function getNextLi(li, orientationObject) {
        if (li) {
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

      if (orientation == 'prev') {
        orientationObject = 'previousSibling';
        lengthx = this.$parent.$children.length - 1;
      }

      var nextElement = getNextLi(this.$el[orientationObject], orientationObject);

      if (nextElement) {
        nextElement.querySelector('.vs-select-item-btn').focus();
      } else {
        getNextLi(this.$parent.$children[lengthx].$el, orientationObject).querySelector('.vs-select-item-btn').focus();
      }
    },
    focusValue: function focusValue() {
      var _this2 = this;

      if (this.$parent.vsMultiple ? this.$parent.value.indexOf(this.vsValue) != -1 : this.vsValue == this.$parent.value) {
        if (!this.$parent.vsAutocomplete) {
          setTimeout(function () {
            _this2.$refs.item.focus();
          }, 50);
        }
      }
    },
    putValue: function putValue() {
      if (this.vsValue == this.$parent.value) {
        this.$parent.valuex = this.vsText;
      }
    },
    clickOption: function clickOption(event) {
      var text = this.vsText;

      if (!this.$parent.vsMultiple) {
        this.$parent.active = false;
        document.removeEventListener('click', this.$parent.clickBlur);
        this.$parent.valuex = text;
        this.$parent.$emit('input', this.vsValue);
        this.$parent.changeValue();
      } else if (this.$parent.vsMultiple) {
        this.$parent.valuex = text;
        this.$parent.addMultiple(this.vsValue);
      }

      this.$parent.$children.map(function (item) {
        item.valueInputx = '';
      });
    },
    // methods colors
    isColor: function isColor() {
      return utils_color["a" /* default */].isColor(this.vsColor);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-48eba2b8","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsSelect/vsSelectItem.vue
var vsSelectItem_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"vs-component"},[_c('button',_vm._g(_vm._b({ref:"item",staticClass:"vs-select-item-btn",class:{
      'activex':_vm.$parent.vsMultiple?_vm.getValue.indexOf(_vm.vsValue) != -1:_vm.getValue == _vm.vsValue,
      'con-icon':_vm.$parent.vsMultiple
     },style:(_vm.styles),attrs:{"disabled":_vm.disabled?true:_vm.disabledx,"type":"button","name":"button"},on:{"keydown":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"backspace",undefined,$event.key,undefined)){ return null; }$event.preventDefault();return _vm.backspace($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();_vm.navigateOptions('next')},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();_vm.navigateOptions('prev')},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();_vm.clickOption()}]}},'button',_vm.$attrs,false),_vm.listeners),[(_vm.$parent.vsMultiple)?_c('i',{staticClass:"material-icons icon-item"},[_vm._v("\n      check_circle\n    ")]):_vm._e(),_c('span',{domProps:{"innerHTML":_vm._s(_vm.getText)}})])])}
var vsSelectItem_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsSelect/vsSelectItem.vue
function vsSelectItem_injectStyle (context) {
  __webpack_require__("yjdV")
}
/* script */


/* template */

/* template functional */
var vsSelectItem___vue_template_functional__ = false
/* styles */
var vsSelectItem___vue_styles__ = vsSelectItem_injectStyle
/* scopeId */
var vsSelectItem___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var vsSelectItem___vue_module_identifier__ = null

var vsSelectItem_Component = Object(component_normalizer["a" /* default */])(
  vsSelectItem,
  vsSelectItem_render,
  vsSelectItem_staticRenderFns,
  vsSelectItem___vue_template_functional__,
  vsSelectItem___vue_styles__,
  vsSelectItem___vue_scopeId__,
  vsSelectItem___vue_module_identifier__
)

/* harmony default export */ var vsSelect_vsSelectItem = (vsSelectItem_Component.exports);

// CONCATENATED MODULE: ./src/components/vsSelect/index.js




/* harmony default export */ var components_vsSelect = (function (Vue) {
  Vue.component(vsSelect_vsSelect.name, vsSelect_vsSelect);
  Vue.component(vsSelect_vsSelectItem.name, vsSelect_vsSelectItem);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsSwitch/vsSwitch.vue





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  inheritAttrs: false,
  props: {
    value: {},
    vsColor: {
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
    vsValue: {}
  },
  data: function data() {
    return {
      widthx: 42
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      var w = _this.$refs.on.clientWidth > _this.$refs.off.clientWidth ? _this.$refs.on.clientWidth : _this.$refs.off.clientWidth;
      _this.widthx = w + 24;
    });
  },
  computed: {
    style: function style() {
      return {
        background: this.value ? utils_color["a" /* default */].getColor(this.vsColor, 1) : null,
        width: "".concat(this.widthx, "px")
      };
    },
    listeners: function listeners() {
      var _this2 = this;

      return objectSpread_default()({}, this.$listeners, {
        change: function change(evt) {
          _this2.toggleValue(evt);
        }
      });
    },
    isChecked: function isChecked() {
      return this.isArrayx() ? this.isArrayIncludes() : this.value;
    }
  },
  methods: {
    toggleValue: function toggleValue(evt) {
      if (this.isArrayx()) {
        this.setArray(evt);
      } else {
        this.$emit('input', evt.target.checked);
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4bbe98ff","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsSwitch/vsSwitch.vue
var vsSwitch_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',_vm._b({staticClass:"vs-component vs-switch",class:[
    ("vs-switch-" + _vm.vsColor),
    {
      'vs-switch-active':_vm.isChecked || _vm.$attrs.checked
    }
    ],style:(_vm.style),attrs:{"type":"button","name":"button"}},'button',_vm.$attrs,false),[_c('input',_vm._g({staticClass:"input-switch",attrs:{"disabled":_vm.$attrs.disabled,"type":"checkbox","name":"","value":""},domProps:{"checked":_vm.value}},_vm.listeners)),_c('span',{ref:"on",staticClass:"text-on text-switch",class:{'active-text':_vm.isChecked || _vm.$attrs.checked}},[_vm._t("on"),_c('i',{staticClass:"material-icons icons-switch"},[_vm._v("\n      "+_vm._s(_vm.vsIconOn || _vm.vsIcon)+"\n    ")])],2),_c('span',{ref:"off",staticClass:"text-off text-switch",class:{'active-text':!_vm.isChecked && !_vm.$attrs.checked}},[_vm._t("off"),_c('i',{staticClass:"material-icons icons-switch"},[_vm._v("\n      "+_vm._s(_vm.vsIconOff || _vm.vsIcon)+"\n    ")])],2),_c('span',{staticClass:"vs-circle-switch"})])}
var vsSwitch_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsSwitch/vsSwitch.vue
function vsSwitch_injectStyle (context) {
  __webpack_require__("buCQ")
}
/* script */


/* template */

/* template functional */
var vsSwitch___vue_template_functional__ = false
/* styles */
var vsSwitch___vue_styles__ = vsSwitch_injectStyle
/* scopeId */
var vsSwitch___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var vsSwitch___vue_module_identifier__ = null

var vsSwitch_Component = Object(component_normalizer["a" /* default */])(
  vsSwitch,
  vsSwitch_render,
  vsSwitch_staticRenderFns,
  vsSwitch___vue_template_functional__,
  vsSwitch___vue_styles__,
  vsSwitch___vue_scopeId__,
  vsSwitch___vue_module_identifier__
)

/* harmony default export */ var vsSwitch_vsSwitch = (vsSwitch_Component.exports);

// CONCATENATED MODULE: ./src/components/vsSwitch/index.js



/* harmony default export */ var components_vsSwitch = (function (Vue) {
  Vue.component(vsSwitch_vsSwitch.name, vsSwitch_vsSwitch);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsCheckBox/vsCheckBox.vue





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  inheritAttrs: false,
  name: 'vs-checkbox',
  props: {
    vsColor: {
      default: 'primary',
      type: String
    },
    value: {},
    vsIcon: {
      default: 'check',
      type: String
    },
    vsValue: {
      type: [Boolean, Array, String, Number, Object],
      default: false
    }
  },
  computed: {
    style_check: function style_check() {
      return {
        background: this.isChecked ? utils_color["a" /* default */].getColor(this.vsColor, 1) : null
      };
    },
    style: function style() {
      return {
        border: "2px solid ".concat(this.isChecked ? utils_color["a" /* default */].getColor(this.vsColor, 1) : 'rgb(180, 180, 180)')
      };
    },
    listeners: function listeners() {
      var _this = this;

      return objectSpread_default()({}, this.$listeners, {
        change: function change(evt) {
          _this.toggleValue(evt);
        }
      });
    },
    isChecked: function isChecked() {
      return this.isArrayx() ? this.isArrayIncludes() : this.value;
    }
  },
  methods: {
    giveColor: function giveColor(color) {
      return utils_color["a" /* default */].rColor(color);
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
      var value = this.value.slice(0); // Copy Array.

      if (this.isArrayIncludes()) {
        value.splice(value.indexOf(this.vsValue), 1); // delete value

        this.$emit('input', value);
        this.$emit('change', value);
      } else {
        value.push(this.vsValue); // add value new

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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-c141c96e","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsCheckBox/vsCheckBox.vue
var vsCheckBox_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-component con-vs-checkbox",class:[("vs-checkbox-" + _vm.vsColor)]},[_c('input',_vm._g(_vm._b({attrs:{"type":"checkbox","value":""},domProps:{"checked":_vm.isChecked || _vm.$attrs.checked}},'input',_vm.$attrs,false),_vm.listeners)),_c('span',{staticClass:"checkbox_x",style:(_vm.style)},[_c('span',{staticClass:"_check",style:(_vm.style_check)}),_c('i',{staticClass:"material-icons"},[_vm._v("\n      "+_vm._s(_vm.vsIcon)+"\n    ")])]),_c('span',{staticClass:"con-slot-label"},[_vm._t("default")],2)])}
var vsCheckBox_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsCheckBox/vsCheckBox.vue
function vsCheckBox_injectStyle (context) {
  __webpack_require__("7AxY")
}
/* script */


/* template */

/* template functional */
var vsCheckBox___vue_template_functional__ = false
/* styles */
var vsCheckBox___vue_styles__ = vsCheckBox_injectStyle
/* scopeId */
var vsCheckBox___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var vsCheckBox___vue_module_identifier__ = null

var vsCheckBox_Component = Object(component_normalizer["a" /* default */])(
  vsCheckBox,
  vsCheckBox_render,
  vsCheckBox_staticRenderFns,
  vsCheckBox___vue_template_functional__,
  vsCheckBox___vue_styles__,
  vsCheckBox___vue_scopeId__,
  vsCheckBox___vue_module_identifier__
)

/* harmony default export */ var vsCheckBox_vsCheckBox = (vsCheckBox_Component.exports);

// CONCATENATED MODULE: ./src/components/vsCheckBox/index.js



/* harmony default export */ var components_vsCheckBox = (function (Vue) {
  Vue.component(vsCheckBox_vsCheckBox.name, vsCheckBox_vsCheckBox);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsRadio/vsRadio.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  inheritAttrs: false,
  props: {
    value: {},
    vsValue: {},
    vsColor: {
      default: 'primary',
      type: String
    }
  },
  computed: {
    listeners: function listeners() {
      var _this = this;

      return objectSpread_default()({}, this.$listeners, {
        input: function input(event) {
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
    }
  },
  methods: {
    giveColor: function giveColor(color, opacity) {
      return utils_color["a" /* default */].rColor(color, opacity);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7da63933","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsRadio/vsRadio.vue
var vsRadio_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"vs-component con-vs-radio"},[_c('input',_vm._g(_vm._b({attrs:{"type":"radio","name":""},domProps:{"checked":_vm.isChecked}},'input',_vm.$attrs,false),_vm.listeners)),_c('span',{staticClass:"vs-radiox"},[_c('span',{staticClass:"vs-radiox-borde",style:({
            'border': ("2px solid " + (_vm.isChecked?_vm.giveColor(_vm.vsColor):'rgb(200, 200, 200)'))
          })}),_c('span',{staticClass:"vs-radiox-circle",style:({
          'background': _vm.giveColor(_vm.vsColor),
          'box-shadow': ("0px 3px 12px 0px " + (_vm.giveColor(_vm.vsColor,.4)))
        })})]),_c('span',{staticClass:"vs-radiox-labelx"},[_vm._t("default")],2)])}
var vsRadio_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsRadio/vsRadio.vue
function vsRadio_injectStyle (context) {
  __webpack_require__("Fuxb")
}
/* script */


/* template */

/* template functional */
var vsRadio___vue_template_functional__ = false
/* styles */
var vsRadio___vue_styles__ = vsRadio_injectStyle
/* scopeId */
var vsRadio___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var vsRadio___vue_module_identifier__ = null

var vsRadio_Component = Object(component_normalizer["a" /* default */])(
  vsRadio,
  vsRadio_render,
  vsRadio_staticRenderFns,
  vsRadio___vue_template_functional__,
  vsRadio___vue_styles__,
  vsRadio___vue_scopeId__,
  vsRadio___vue_module_identifier__
)

/* harmony default export */ var vsRadio_vsRadio = (vsRadio_Component.exports);

// CONCATENATED MODULE: ./src/components/vsRadio/index.js



/* harmony default export */ var components_vsRadio = (function (Vue) {
  Vue.component(vsRadio_vsRadio.name, vsRadio_vsRadio);
});
// EXTERNAL MODULE: ./src/components/vsInput/vsInput.vue + 2 modules
var vsInput = __webpack_require__("/AIR");

// CONCATENATED MODULE: ./src/components/vsInput/index.js



/* harmony default export */ var components_vsInput = (function (Vue) {
  Vue.component(vsInput["default"].name, vsInput["default"]);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsTabs/vsTabs.vue
//
//
//
//
//
//
//
//
//
//
//
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
      for (var i = 0; i < this.vsTabs.length; i++) {
        this.vsTabs[i]._data.activo = false;
      }

      tab._data.activo = true;
    }
  },
  mounted: function mounted() {
    this.vsTabs[0]._data.activo = true;
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-19ca85a6","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsTabs/vsTabs.vue
var vsTabs_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-tabs",class:[_vm.vsType?_vm.vsType:'','vs-'+_vm.vsPosition]},[_c('ul',{staticClass:"ul-tabs"},_vm._l((_vm.vsTabs),function(vsTab,index){return _c('li',{class:{'tab-disabledx':vsTab._props.disabled,'tab-activo':vsTab._data.activo},on:{"click":function($event){_vm.clickLiTab(vsTab,index)}}},[_c('span',{staticClass:"tabtext",style:({'color':vsTab._data.activo?_vm.vsColor?_vm.vsColor:'rgb(var(--primary))':''})},[_vm._v("\n        "+_vm._s(vsTab.vsLabel)+"\n      ")]),_c('span',{staticClass:"cuadro",style:({'border-bottom':_vm.vsType=='border-bottom'?'2px solid '+_vm.vsColor:'','background':vsTab._data.activo?_vm.vsColor?_vm.vsColor:'rgb(var(--primary))':''})})])})),_c('div',{staticClass:"contiene-tabs"},[_vm._t("default")],2)])}
var vsTabs_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsTabs/vsTabs.vue
function vsTabs_injectStyle (context) {
  __webpack_require__("RteB")
}
/* script */


/* template */

/* template functional */
var vsTabs___vue_template_functional__ = false
/* styles */
var vsTabs___vue_styles__ = vsTabs_injectStyle
/* scopeId */
var vsTabs___vue_scopeId__ = "data-v-19ca85a6"
/* moduleIdentifier (server only) */
var vsTabs___vue_module_identifier__ = null

var vsTabs_Component = Object(component_normalizer["a" /* default */])(
  vsTabs,
  vsTabs_render,
  vsTabs_staticRenderFns,
  vsTabs___vue_template_functional__,
  vsTabs___vue_styles__,
  vsTabs___vue_scopeId__,
  vsTabs___vue_module_identifier__
)

/* harmony default export */ var vsTabs_vsTabs = (vsTabs_Component.exports);

// CONCATENATED MODULE: ./src/components/vsTabs/index.js



/* harmony default export */ var components_vsTabs = (function (Vue) {
  Vue.component(vsTabs_vsTabs.name, vsTabs_vsTabs);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsTab/vsTab.vue
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
    this.$parent.vsTabs.push(this);
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8ae948d0","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsTab/vsTab.vue
var vsTab_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[(_vm.activo)?_c('div',{staticClass:"con-tab"},[_vm._t("default")],2):_vm._e()])}
var vsTab_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsTab/vsTab.vue
function vsTab_injectStyle (context) {
  __webpack_require__("iuwz")
}
/* script */


/* template */

/* template functional */
var vsTab___vue_template_functional__ = false
/* styles */
var vsTab___vue_styles__ = vsTab_injectStyle
/* scopeId */
var vsTab___vue_scopeId__ = "data-v-8ae948d0"
/* moduleIdentifier (server only) */
var vsTab___vue_module_identifier__ = null

var vsTab_Component = Object(component_normalizer["a" /* default */])(
  vsTab,
  vsTab_render,
  vsTab_staticRenderFns,
  vsTab___vue_template_functional__,
  vsTab___vue_styles__,
  vsTab___vue_scopeId__,
  vsTab___vue_module_identifier__
)

/* harmony default export */ var vsTab_vsTab = (vsTab_Component.exports);

// CONCATENATED MODULE: ./src/components/vsTab/index.js



/* harmony default export */ var components_vsTab = (function (Vue) {
  Vue.component(vsTab_vsTab.name, vsTab_vsTab);
});
// EXTERNAL MODULE: ../Users/pc 01/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.math.sign.js
var es6_math_sign = __webpack_require__("58SC");
var es6_math_sign_default = /*#__PURE__*/__webpack_require__.n(es6_math_sign);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsSlider/vsSlider.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      var x;

      if (event.type == 'touchmove') {
        x = event.targetTouches[0].clientX;
      } else {
        x = event.clientX;
      }

      var valorx = x - (linea.getBoundingClientRect().left - circle.offsetWidth / 2);

      if (this.vsMin) {
        if (valorx / this.ancho * 100 <= this.vsMin) {
          valorx = valorx;
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-32cb5fb0","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsSlider/vsSlider.vue
var vsSlider_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-slider",class:{'s-d':_vm.disabled}},[_c('div',{ref:"lineaSlider",staticClass:"linea-slider",on:{"click":_vm.clickLinea}},[_c('div',{ref:"lineaPintada",staticClass:"linea-pintada",style:({'background':_vm.vsColor,'width':_vm.sliderValue+'%','max-width':_vm.ancho?_vm.ancho+'px':'auto'})},[_c('div',{ref:"circle",staticClass:"circle-slider",style:({'background':_vm.vsColor}),attrs:{"tabindex":"0"},on:{"mouseenter":function($event){_vm.showToolTip=true},"mouseleave":function($event){_vm.showToolTip=false},"mousedown":_vm.mousedownx,"touchstart":function($event){_vm.mousedownx($event)},"focus":function($event){_vm.showToolTip=true},"blur":function($event){_vm.showToolTip=false},"keydown":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"])){ return null; }if('button' in $event && $event.button !== 0){ return null; }return _vm.onLeftKeyDown($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"right",39,$event.key,["Right","ArrowRight"])){ return null; }if('button' in $event && $event.button !== 2){ return null; }return _vm.onRightKeyDown($event)}]}},[_c('span',{staticClass:"circle-interno",style:({'border':'2px solid '+_vm.vsColor})},[_c('span')]),_c('div',{staticClass:"con-numero-slider",class:{'hoverx':_vm.showToolTip},style:({'background':_vm.vsColor})},[_c('span',[_vm._v(_vm._s(Math.round(_vm.sliderValue)>100?100:Math.round(_vm.sliderValue))+_vm._s(_vm.vsNotPercentage?'':'%'))])])])])])])}
var vsSlider_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsSlider/vsSlider.vue
function vsSlider_injectStyle (context) {
  __webpack_require__("Dbz9")
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

var vsSlider_Component = Object(component_normalizer["a" /* default */])(
  vsSlider,
  vsSlider_render,
  vsSlider_staticRenderFns,
  vsSlider___vue_template_functional__,
  vsSlider___vue_styles__,
  vsSlider___vue_scopeId__,
  vsSlider___vue_module_identifier__
)

/* harmony default export */ var vsSlider_vsSlider = (vsSlider_Component.exports);

// CONCATENATED MODULE: ./src/components/vsSlider/index.js



/* harmony default export */ var components_vsSlider = (function (Vue) {
  Vue.component(vsSlider_vsSlider.name, vsSlider_vsSlider);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsInputNumber/vsInputNumber.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        this.$emit('input', this.vsMin);
        this.$emit('change', this.vsMin);
      } else if (parseInt(this.value) > parseInt(this.vsMax)) {
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4321e182","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsInputNumber/vsInputNumber.vue
var vsInputNumber_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:'vs-'+_vm.vsSize},[_c('div',{staticClass:"con-input-number",class:[{'con-plus':_vm.pulsandoPlus,'con-menos':_vm.pulsandoMenos,'disabledx':_vm.disabled}],style:({'color':_vm.vsColor?/[#()]/.test(_vm.vsColor)?_vm.vsColor:("rgb(var(--" + _vm.vsColor + "))"):'rgb(var(--primary))','background':_vm.vsColor?/[#()]/.test(_vm.vsColor)?_vm.vsColor:("rgb(var(--" + _vm.vsColor + "))"):'rgb(var(--primary))'})},[_c('button',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.menos),expression:"menos"}],class:{'no-mas':_vm.vsMin?_vm.value<=_vm.vsMin:false},attrs:{"type":"button","name":"button"},on:{"mousedown":function($event){_vm.pulsandoMenos=true},"mouseup":function($event){_vm.pulsandoMenos=false},"mouseleave":function($event){_vm.pulsandoMenos=false}}},[_c('i',{staticClass:"material-icons"},[_vm._v("remove")])]),_c('div',{staticClass:"numberx"},[_c('input',{class:{'plus':_vm.pulsandoPlus,'menos':_vm.pulsandoMenos},style:({'width':_vm.value.toString().length*17+'px'}),attrs:{"type":"text","name":"","value":""},domProps:{"value":_vm.value},on:{"blur":_vm.blurx,"keydown":function($event){_vm.validarKeypress($event,$event.target.value)},"input":function($event){_vm.$emit('input',$event.target.value)},"change":function($event){_vm.$emit('change',$event.target.value)}}})]),_c('div',{},[_c('button',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.mas),expression:"mas"}],class:{'no-mas':_vm.vsMax?_vm.value>=_vm.vsMax:false},attrs:{"type":"button","name":"button"},on:{"mousedown":function($event){_vm.pulsandoPlus=true},"mouseup":function($event){_vm.pulsandoPlus=false},"mouseleave":function($event){_vm.pulsandoPlus=false}}},[_c('i',{staticClass:"material-icons"},[_vm._v("add")])])])])])}
var vsInputNumber_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsInputNumber/vsInputNumber.vue
function vsInputNumber_injectStyle (context) {
  __webpack_require__("2GAV")
}
/* script */


/* template */

/* template functional */
var vsInputNumber___vue_template_functional__ = false
/* styles */
var vsInputNumber___vue_styles__ = vsInputNumber_injectStyle
/* scopeId */
var vsInputNumber___vue_scopeId__ = "data-v-4321e182"
/* moduleIdentifier (server only) */
var vsInputNumber___vue_module_identifier__ = null

var vsInputNumber_Component = Object(component_normalizer["a" /* default */])(
  vsInputNumber,
  vsInputNumber_render,
  vsInputNumber_staticRenderFns,
  vsInputNumber___vue_template_functional__,
  vsInputNumber___vue_styles__,
  vsInputNumber___vue_scopeId__,
  vsInputNumber___vue_module_identifier__
)

/* harmony default export */ var vsInputNumber_vsInputNumber = (vsInputNumber_Component.exports);

// CONCATENATED MODULE: ./src/components/vsInputNumber/index.js



/* harmony default export */ var components_vsInputNumber = (function (Vue) {
  Vue.component(vsInputNumber_vsInputNumber.name, vsInputNumber_vsInputNumber);
});
// EXTERNAL MODULE: ../Users/pc 01/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("re1x");
var es6_regexp_match_default = /*#__PURE__*/__webpack_require__.n(es6_regexp_match);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsUpload/vsUpload.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    agregarImg: function agregarImg() {},
    quitarView: function quitarView(evt) {
      var _this2 = this;

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


        filesx.push({
          file: file
        });

        _this4.$emit('update:vsFileList', filesx);
      };

      if (file) {
        reader.readAsDataURL(file);
      } else {// preview.src = this.url;
      }

      this.$refs.inputsx.value = '';
    },
    uploadx: function uploadx(e) {
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7b9d1f49","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsUpload/vsUpload.vue
var vsUpload_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contiene-upload",class:{'con-multiple':_vm.multiple}},[(!_vm.multiple)?_c('div',{staticClass:"con-upload"},[_vm._m(0),_c('input',{ref:"inputx",staticClass:"input-upload",attrs:{"type":"file","name":"","value":""},on:{"change":function($event){_vm.uploadx($event)}}}),_c('div',{}),_c('div',{ref:"conimg",staticClass:"con-img-upload",class:{'oculto':_vm.url==''},style:({'background':_vm.colorx})},[_c('div',{staticClass:"header-upload"},[_c('div',{staticClass:"x-img",on:{"click":function($event){_vm.xUrl(),_vm.colorx='rgb(255, 255, 255)'}}},[_c('i',{staticClass:"material-icons"},[_vm._v("close")])])]),_c('img',{ref:"imgx",attrs:{"src":_vm.url,"alt":""},on:{"click":_vm.verview}})])]):_vm._e(),(_vm.multiple)?_c('div',{staticClass:"con-multiple-upload"},[_c('ul',{ref:"ulmultiple",staticClass:"con-multiples-imgs"},[_vm._l((_vm.reverseImgs),function(file,index){return _c('li',{staticClass:"con-imgs"},[_c('div',{staticClass:"x-img",on:{"click":function($event){_vm.quitarImage(index)}}},[_c('i',{staticClass:"material-icons"},[_vm._v("close")])]),_c('img',{ref:'vs'+index,refInFor:true,attrs:{"src":file.src,"alt":""},on:{"click":function($event){_vm.view=true,_vm.urlview=file.src}}})])}),_c('li',{staticClass:"agregarx"},[_c('input',{ref:"inputsx",staticClass:"input-upload",attrs:{"type":"file","name":"","value":""},on:{"change":function($event){_vm.multipleUploadx($event)}}})])],2)]):_vm._e(),_c('transition',{attrs:{"name":"fade-upload"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.view),expression:"view"}],ref:"viewx",staticClass:"view-upload",on:{"click":function($event){_vm.quitarView($event)}}},[_c('div',{staticClass:"x-view",on:{"click":function($event){_vm.view=false}}},[_c('i',{staticClass:"material-icons"},[_vm._v("close")])]),_c('img',{attrs:{"src":_vm.urlview,"alt":""}})])])],1)}
var vsUpload_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-subir"},[_c('h3',[_vm._v("Subir Archivo")]),_c('i',{staticClass:"material-icons"},[_vm._v("publish")])])}]

// CONCATENATED MODULE: ./src/components/vsUpload/vsUpload.vue
function vsUpload_injectStyle (context) {
  __webpack_require__("DV1v")
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

var vsUpload_Component = Object(component_normalizer["a" /* default */])(
  vsUpload,
  vsUpload_render,
  vsUpload_staticRenderFns,
  vsUpload___vue_template_functional__,
  vsUpload___vue_styles__,
  vsUpload___vue_scopeId__,
  vsUpload___vue_module_identifier__
)

/* harmony default export */ var vsUpload_vsUpload = (vsUpload_Component.exports);

// CONCATENATED MODULE: ./src/components/vsUpload/index.js



/* harmony default export */ var components_vsUpload = (function (Vue) {
  Vue.component(vsUpload_vsUpload.name, vsUpload_vsUpload);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsPopup/vsPopup.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        if (utils_color["a" /* default */].contrastColor(this.vsBackgroundColor)) {
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
        if (utils_color["a" /* default */].contrastColor(this.vsCloseButtonColor)) {
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0aa0f93d","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsPopup/vsPopup.vue
var vsPopup_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fadex"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.vsActive),expression:"vsActive"}],ref:"conpopup",staticClass:"con-popup"},[_c('div',_vm._b({staticClass:"vs-popup",class:{'fullscreen':_vm.vsFullscreen},style:({'background':_vm.vsBackgroundColor?/[#()]/.test(_vm.vsBackgroundColor)?_vm.vsBackgroundColor:("rgba(var(--" + _vm.vsBackgroundColor + "),1)"):'rgb(255,255,255)',
    'color':_vm.colorx,
    })},'div',_vm.$attrs,false),[_c('header',[(_vm.vsTitle!='')?_c('h2',[_vm._v("\n        "+_vm._s(_vm.vsTitle)+"\n      ")]):_vm._e(),_c('div',{staticClass:"vs-popup-cancel",style:({'background':_vm.vsCloseButtonColor?/[#()]/.test(_vm.vsCloseButtonColor)?_vm.vsCloseButtonColor:("rgba(var(--" + _vm.vsCloseButtonColor + "),1)"):'rgb(250, 250, 250)',
      'color':_vm.colorButtonx
      }),on:{"click":function($event){_vm.$emit('vs-cancel')}}},[_c('i',{staticClass:"material-icons"},[_vm._v("close")])])]),_c('div',{staticClass:"con-htmlx"},[_vm._t("default")],2)])])])}
var vsPopup_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsPopup/vsPopup.vue
function vsPopup_injectStyle (context) {
  __webpack_require__("VmK7")
}
/* script */


/* template */

/* template functional */
var vsPopup___vue_template_functional__ = false
/* styles */
var vsPopup___vue_styles__ = vsPopup_injectStyle
/* scopeId */
var vsPopup___vue_scopeId__ = "data-v-0aa0f93d"
/* moduleIdentifier (server only) */
var vsPopup___vue_module_identifier__ = null

var vsPopup_Component = Object(component_normalizer["a" /* default */])(
  vsPopup,
  vsPopup_render,
  vsPopup_staticRenderFns,
  vsPopup___vue_template_functional__,
  vsPopup___vue_styles__,
  vsPopup___vue_scopeId__,
  vsPopup___vue_module_identifier__
)

/* harmony default export */ var vsPopup_vsPopup = (vsPopup_Component.exports);

// CONCATENATED MODULE: ./src/components/vsPopup/index.js



/* harmony default export */ var components_vsPopup = (function (Vue) {
  Vue.component(vsPopup_vsPopup.name, vsPopup_vsPopup);
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("NM/j");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsDropDown/vsDropDown.vue


//
//
//
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
  inheritAttrs: false,
  name: "vs-dropdown",
  props: {
    vsTriggerClick: {
      default: false,
      type: Boolean
    },
    vsTriggerContextmenu: {
      default: false,
      type: Boolean
    },
    vsColor: {
      default: 'primary',
      type: String
    },
    vsCustomContent: {
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
  watch: {
    vsDropdownVisible: function vsDropdownVisible() {
      this.changePositionMenu();

      if (this.vsDropdownVisible) {
        this.$emit('focus');
      } else {
        this.$emit('blur');
      }
    }
  },
  mounted: function mounted() {
    var _this$$children$filte = this.$children.filter(function (item) {
      return item.hasOwnProperty('dropdownVisible');
    }),
        _this$$children$filte2 = slicedToArray_default()(_this$$children$filte, 1),
        dropdownMenu = _this$$children$filte2[0];

    dropdownMenu.vsCustomContent = this.vsCustomContent;
    dropdownMenu.vsTriggerClick = this.vsTriggerClick;
    this.changeColor();
  },
  computed: {
    listeners: function listeners() {
      var _this = this;

      return objectSpread_default()({}, this.$listeners, {
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
  methods: {
    changeColor: function changeColor() {
      var _this2 = this;

      var child = this.$children;
      child.forEach(function (item) {
        if (item.$vnode.tag.indexOf('dropdown') != -1) {
          item.vsColor = _this2.vsColor;
        }
      });
    },
    changePositionMenu: function changePositionMenu() {
      var _this3 = this;

      var _this$$children$filte3 = this.$children.filter(function (item) {
        return item.hasOwnProperty('dropdownVisible');
      }),
          _this$$children$filte4 = slicedToArray_default()(_this$$children$filte3, 1),
          dropdownMenu = _this$$children$filte4[0];

      var scrollTopx = window.pageYOffset || document.documentElement.scrollTop;
      console.dir();

      if (this.$refs.dropdown.getBoundingClientRect().top + 300 >= window.innerHeight) {
        this.$nextTick(function () {
          dropdownMenu.topx = _this3.$refs.dropdown.getBoundingClientRect().top - dropdownMenu.$el.clientHeight + scrollTopx;
          dropdownMenu.notHeight = true;
        });
      } else {
        dropdownMenu.notHeight = false;
        dropdownMenu.topx = this.$refs.dropdown.getBoundingClientRect().top + this.$refs.dropdown.clientHeight + scrollTopx;
      }

      this.$nextTick(function () {
        var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (_this3.$refs.dropdown.getBoundingClientRect().left + dropdownMenu.$el.offsetWidth >= w - 20) {
          _this3.rightx = true;
        }

        dropdownMenu.leftx = _this3.$refs.dropdown.getBoundingClientRect().left + _this3.$refs.dropdown.clientWidth;
      });
    },
    clickToogleMenu: function clickToogleMenu(evt, isContextmenu) {
      var _this4 = this;

      if (evt.type == 'contextmenu') {
        evt.preventDefault();
      }

      var _this$$children$filte5 = this.$children.filter(function (item) {
        return item.hasOwnProperty('dropdownVisible');
      }),
          _this$$children$filte6 = slicedToArray_default()(_this$$children$filte5, 1),
          dropdownMenu = _this$$children$filte6[0];

      if (this.vsTriggerClick || this.vsTriggerContextmenu) {
        if (this.vsDropdownVisible && !evt.target.closest('.vs-dropdown-menu')) {
          dropdownMenu.dropdownVisible = this.vsDropdownVisible = false;
        } else {
          dropdownMenu.dropdownVisible = this.vsDropdownVisible = true;
          window.addEventListener('click', function () {
            if (!evt.target.closest('.vs-con-dropdown') && !evt.target.closest('.vs-dropdown-menu')) {
              dropdownMenu.dropdownVisible = _this4.vsDropdownVisible = false;
            }
          });
        }
      }
    },
    toggleMenu: function toggleMenu(typex, event) {
      var _this$$children$filte7 = this.$children.filter(function (item) {
        return item.hasOwnProperty('dropdownVisible');
      }),
          _this$$children$filte8 = slicedToArray_default()(_this$$children$filte7, 1),
          dropdownMenu = _this$$children$filte8[0];

      if (!this.vsTriggerClick && !this.vsTriggerContextmenu) {
        if (typex == 'over') {
          dropdownMenu.dropdownVisible = this.vsDropdownVisible = true;
        } else {
          dropdownMenu.dropdownVisible = this.vsDropdownVisible = false;
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5fdd1acc","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsDropDown/vsDropDown.vue
var vsDropDown_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',_vm._g(_vm._b({ref:"dropdown",staticClass:"vs-con-dropdown parent-dropdown"},'button',_vm.$attrs,false),_vm.listeners),[_vm._t("default")],2)}
var vsDropDown_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDown.vue
function vsDropDown_injectStyle (context) {
  __webpack_require__("d4Yu")
}
/* script */


/* template */

/* template functional */
var vsDropDown___vue_template_functional__ = false
/* styles */
var vsDropDown___vue_styles__ = vsDropDown_injectStyle
/* scopeId */
var vsDropDown___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var vsDropDown___vue_module_identifier__ = null

var vsDropDown_Component = Object(component_normalizer["a" /* default */])(
  vsDropDown,
  vsDropDown_render,
  vsDropDown_staticRenderFns,
  vsDropDown___vue_template_functional__,
  vsDropDown___vue_styles__,
  vsDropDown___vue_scopeId__,
  vsDropDown___vue_module_identifier__
)

/* harmony default export */ var vsDropDown_vsDropDown = (vsDropDown_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsDropDown/vsDropDownMenu.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsDropDownMenu = ({
  name: "vs-dropdown-menu",
  data: function data() {
    return {
      dropdownVisible: false,
      leftAfter: 20,
      leftx: 0,
      topx: 0,
      rightx: true,
      vsTriggerClick: false,
      widthx: 0,
      notHeight: false,
      vsCustomContent: false
    };
  },
  mounted: function mounted() {
    this.insertBody();
  },
  watch: {
    dropdownVisible: function dropdownVisible() {
      var dropdownGroup = this.$children.filter(function (item) {
        return item.hasOwnProperty('activeGroup');
      });
      dropdownGroup.forEach(function (item_group) {
        item_group.activeGroup = false;
      });
    }
  },
  methods: {
    toggleMenu: function toggleMenu(event) {
      if (event.type == 'mouseover' && !this.vsTriggerClick) {
        this.dropdownVisible = true;
      } else if (!this.vsTriggerClick) {
        this.dropdownVisible = false;
      }

      this.widthx = this.$el.clientWidth;
    },
    insertBody: function insertBody() {
      var elx = this.$refs.options;
      document.body.insertBefore(elx, document.body.firstChild);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7fc5612c","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsDropDown/vsDropDownMenu.vue
var vsDropDownMenu_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"dropdownx"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.dropdownVisible),expression:"dropdownVisible"}],ref:"options",staticClass:"con-vs-dropdown-menu",class:{'rightx':_vm.rightx,'notHeight':_vm.notHeight},style:({
  'left':_vm.leftx+'px',
  'top':_vm.topx+'px'
}),on:{"mouseover":function($event){_vm.toggleMenu($event)},"mouseout":function($event){_vm.toggleMenu($event)}}},[(!_vm.vsCustomContent)?_c('ul',{staticClass:"vs-component vs-dropdown-menu"},[_c('div',{staticClass:"after"}),_vm._t("default")],2):_c('div',{staticClass:"vs-dropdown-custom vs-dropdown-menu"},[_vm._t("default")],2)])])}
var vsDropDownMenu_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownMenu.vue
function vsDropDownMenu_injectStyle (context) {
  __webpack_require__("AuYl")
}
/* script */


/* template */

/* template functional */
var vsDropDownMenu___vue_template_functional__ = false
/* styles */
var vsDropDownMenu___vue_styles__ = vsDropDownMenu_injectStyle
/* scopeId */
var vsDropDownMenu___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var vsDropDownMenu___vue_module_identifier__ = null

var vsDropDownMenu_Component = Object(component_normalizer["a" /* default */])(
  vsDropDownMenu,
  vsDropDownMenu_render,
  vsDropDownMenu_staticRenderFns,
  vsDropDownMenu___vue_template_functional__,
  vsDropDownMenu___vue_styles__,
  vsDropDownMenu___vue_scopeId__,
  vsDropDownMenu___vue_module_identifier__
)

/* harmony default export */ var vsDropDown_vsDropDownMenu = (vsDropDownMenu_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsDropDown/vsDropDownItem.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  inheritAttrs: false,
  name: "vs-dropdown-item",
  props: {
    to: {},
    disabled: {
      default: false,
      type: Boolean
    },
    vsDivider: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      hoverx: false,
      vsDropDownItem: true,
      vsColor: null
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

      var _self = this;

      searchParent(this);

      function searchParent(_this) {
        var parent = _this.$parent;

        if (parent.$el.className.indexOf('parent-dropdown') == -1) {
          searchParent(parent);
        } else {
          var _parent$$children$fil = parent.$children.filter(function (item) {
            return item.hasOwnProperty('dropdownVisible');
          }),
              _parent$$children$fil2 = slicedToArray_default()(_parent$$children$fil, 1),
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

        if (parent.$el.className.indexOf('parent-dropdown') == -1) {
          searchParent(parent);
        } else {
          _self.vsColor = parent.vsColor;
        }
      }
    },
    giveColor: function giveColor() {
      var opacity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return utils_color["a" /* default */].rColor(this.vsColor, opacity);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-02bfb13e","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsDropDown/vsDropDownItem.vue
var vsDropDownItem_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"vs-component vs-dropdown-item",class:{vsDivider: _vm.vsDivider},style:({
    'color':_vm.hoverx?_vm.giveColor()+' !important':null,
    'background':_vm.hoverx?_vm.giveColor(.01)+' !important':null
    }),on:{"click":_vm.closeParent,"mouseover":function($event){_vm.hoverx=true},"mouseout":function($event){_vm.hoverx=false}}},[(_vm.to)?_c('router-link',_vm._g(_vm._b({class:{'disabled':_vm.disabled},attrs:{"to":_vm.to}},'router-link',_vm.$attrs,false),_vm.$listeners),[_vm._v("\n    "+_vm._s(_vm.$attrs.disabled)+"\n    "),_vm._t("default")],2):_c('a',_vm._g(_vm._b({class:{'disabled':_vm.disabled}},'a',_vm.$attrs,false),_vm.$listeners),[_vm._t("default")],2)],1)}
var vsDropDownItem_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownItem.vue
function vsDropDownItem_injectStyle (context) {
  __webpack_require__("eKRk")
}
/* script */


/* template */

/* template functional */
var vsDropDownItem___vue_template_functional__ = false
/* styles */
var vsDropDownItem___vue_styles__ = vsDropDownItem_injectStyle
/* scopeId */
var vsDropDownItem___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var vsDropDownItem___vue_module_identifier__ = null

var vsDropDownItem_Component = Object(component_normalizer["a" /* default */])(
  vsDropDownItem,
  vsDropDownItem_render,
  vsDropDownItem_staticRenderFns,
  vsDropDownItem___vue_template_functional__,
  vsDropDownItem___vue_styles__,
  vsDropDownItem___vue_scopeId__,
  vsDropDownItem___vue_module_identifier__
)

/* harmony default export */ var vsDropDown_vsDropDownItem = (vsDropDownItem_Component.exports);

// EXTERNAL MODULE: ../Users/pc 01/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.regexp.search.js
var es6_regexp_search = __webpack_require__("YjWS");
var es6_regexp_search_default = /*#__PURE__*/__webpack_require__.n(es6_regexp_search);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsDropDown/vsDropDownGroup.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsDropDownGroup = ({
  name: 'vs-dropdown-group',
  props: {
    vsLabel: {
      default: 'Options',
      type: String
    },
    vsCollapse: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      activeGroup: false,
      rightx: false,
      widthx: 0
    };
  },
  methods: {
    beforeEnter: function beforeEnter(el) {
      el.style.height = 0;
      el.style.opacity = 0;
    },
    enter: function enter(el, done) {
      var h = this.$refs.ulx.scrollHeight;
      this.$refs.ulx.style.height = h + 'px';
      el.style.opacity = 1;
      parents(this);

      function parents(_this) {
        if (_this.$parent.$el.className.search('vs-dropdown-group') != -1) {
          // this.$parent.$el
          var hp = _this.$parent.$refs.ulx.scrollHeight;
          _this.$parent.$refs.ulx.style.height = hp + h + 'px';
          parents(_this.$parent);
        } else {}
      }

      done();
    },
    leave: function leave(el, done) {
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
        var hp = this.$refs.ulx.scrollHeight;
        this.$refs.ulx.style.height = 0 + 'px';
      }

      this.$refs.ulx.style.height = 0 + 'px';
      el.style.opacity = 0;
    },
    toggleGroup: function toggleGroup(event) {
      var parentx;

      var _self = this;

      searchParent(this);

      function searchParent(_this) {
        var parent = _this.$parent;

        if (parent.$el.className.indexOf('con-vs-dropdown-menu') == -1) {
          searchParent(parent);
        } else {
          parentx = parent;
        }
      }

      this.activeGroup = !this.activeGroup;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-640bfefa","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsDropDown/vsDropDownGroup.vue
var vsDropDownGroup_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"vs-component vs-dropdown-group",class:{'marginIcon':_vm.vsCollapse, 'no-cascading':!_vm.vsCollapse, 'group-rightx':_vm.rightx},on:{"mouseout":function($event){_vm.toggleGroup($event)},"mouseover":function($event){_vm.toggleGroup($event)}}},[(_vm.vsCollapse)?_c('span',{staticClass:"span"},[_vm._v(_vm._s(_vm.vsLabel))]):_c('h3',[_vm._v(_vm._s(_vm.vsLabel))]),(_vm.vsCollapse)?_c('i',{staticClass:"material-icons icon-group"},[_vm._v("\n    keyboard_arrow_right\n  ")]):_vm._e(),_c('transition',{on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"leave":_vm.leave}},[(_vm.activeGroup||!_vm.vsCollapse)?_c('div',{ref:"ulx",staticClass:"con-dropdown-group",class:{'con-dropdown-group-no-cascading':!_vm.vsCollapse}},[_c('ul',[_vm._t("default")],2)]):_vm._e()])],1)}
var vsDropDownGroup_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownGroup.vue
function vsDropDownGroup_injectStyle (context) {
  __webpack_require__("gtSe")
}
/* script */


/* template */

/* template functional */
var vsDropDownGroup___vue_template_functional__ = false
/* styles */
var vsDropDownGroup___vue_styles__ = vsDropDownGroup_injectStyle
/* scopeId */
var vsDropDownGroup___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var vsDropDownGroup___vue_module_identifier__ = null

var vsDropDownGroup_Component = Object(component_normalizer["a" /* default */])(
  vsDropDownGroup,
  vsDropDownGroup_render,
  vsDropDownGroup_staticRenderFns,
  vsDropDownGroup___vue_template_functional__,
  vsDropDownGroup___vue_styles__,
  vsDropDownGroup___vue_scopeId__,
  vsDropDownGroup___vue_module_identifier__
)

/* harmony default export */ var vsDropDown_vsDropDownGroup = (vsDropDownGroup_Component.exports);

// CONCATENATED MODULE: ./src/components/vsDropDown/index.js






/* harmony default export */ var components_vsDropDown = (function (Vue) {
  Vue.component(vsDropDown_vsDropDown.name, vsDropDown_vsDropDown);
  Vue.component(vsDropDown_vsDropDownMenu.name, vsDropDown_vsDropDownMenu);
  Vue.component(vsDropDown_vsDropDownItem.name, vsDropDown_vsDropDownItem);
  Vue.component(vsDropDown_vsDropDownGroup.name, vsDropDown_vsDropDownGroup);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsAlert/vsAlert.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-c9aaae18","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsAlert/vsAlert.vue
var vsAlert_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[(_vm.vsActive)?_c('div',_vm._g(_vm._b({staticClass:"con-vs-alert",class:{
  'con-icon':_vm.vsIcon,
  },style:({
    'background':_vm.vsColor?/[#()]/.test(_vm.vsColor)?("rgba(" + (_vm.vsColor.replace(/[rgb()]/g,'')) + ",.1)"):("rgba(var(--" + _vm.vsColor + "),.1)"):'rgba(var(--primary),.1)',
    'color':_vm.vsColor?/[#()]/.test(_vm.vsColor)?_vm.vsColor:("rgba(var(--" + _vm.vsColor + "),1)"):'rgba(var(--primary),1)',
    'margin-top':_vm.vsMargin,
    'margin-bottom':_vm.vsMargin,
    })},'div',_vm.$attrs,false),_vm.$listeners),[(_vm.vsIcon)?_c('i',{staticClass:"material-icons icon-alert"},[_vm._v(_vm._s(_vm.vsIcon))]):_vm._e(),(_vm.vsClosable)?_c('div',{staticClass:"con-x",on:{"click":function($event){_vm.$emit('update:vsActive',false)}}},[_c('i',{staticClass:"material-icons"},[_vm._v("close")])]):_vm._e(),(_vm.vsTitle)?_c('h3',{staticClass:"titlex",style:({'background':'$primary'})},[_vm._v(_vm._s(_vm.vsTitle))]):_vm._e(),_c('div',{staticClass:"vs-alert"},[_vm._t("default")],2)]):_vm._e()])}
var vsAlert_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsAlert/vsAlert.vue
function vsAlert_injectStyle (context) {
  __webpack_require__("PXDP")
}
/* script */


/* template */

/* template functional */
var vsAlert___vue_template_functional__ = false
/* styles */
var vsAlert___vue_styles__ = vsAlert_injectStyle
/* scopeId */
var vsAlert___vue_scopeId__ = "data-v-c9aaae18"
/* moduleIdentifier (server only) */
var vsAlert___vue_module_identifier__ = null

var vsAlert_Component = Object(component_normalizer["a" /* default */])(
  vsAlert,
  vsAlert_render,
  vsAlert_staticRenderFns,
  vsAlert___vue_template_functional__,
  vsAlert___vue_styles__,
  vsAlert___vue_scopeId__,
  vsAlert___vue_module_identifier__
)

/* harmony default export */ var vsAlert_vsAlert = (vsAlert_Component.exports);

// CONCATENATED MODULE: ./src/components/vsAlert/index.js



/* harmony default export */ var components_vsAlert = (function (Vue) {
  Vue.component(vsAlert_vsAlert.name, vsAlert_vsAlert);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsChip/vsChip.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsChip = ({
  name: 'vs-chip',
  props: {
    item: {
      type: Boolean
    },
    value: {},
    vsActive: {
      type: Boolean,
      default: true
    },
    vsText: {
      type: String,
      default: null
    },
    vsClosable: {
      type: [Boolean, String],
      default: false
    },
    vsColor: {
      type: String,
      default: 'primary'
    },
    vsIcon: {
      type: String,
      default: null
    }
  },
  computed: {
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
    remove: function remove() {
      this.$emit('vs-remove', false);
      this.$emit('input', false);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5805a566","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsChip/vsChip.vue
var vsChip_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.eliminado)?_c('div',{staticClass:"con-vs-chip",class:{
    'con-icon':_vm.vsIcon,
  },style:({
    'background':_vm.vsColor?/[#()]/.test(_vm.vsColor)?("rgba(" + (_vm.vsColor.replace(/[rgb()]/g,'')) + ",.1)"):("rgba(var(--" + _vm.vsColor + "),.1)"):'rgba(var(--primary),.1)',
    'color':_vm.vsColor?/[#()]/.test(_vm.vsColor)?_vm.vsColor:("rgba(var(--" + _vm.vsColor + "),1)"):'rgba(var(--primary),1)'
  })},[(_vm.vsIcon)?_c('i',{staticClass:"material-icons icon-chip"},[_vm._v(_vm._s(_vm.vsIcon))]):_vm._e(),(_vm.vsText)?_c('h3',{staticClass:"textx"},[_vm._v(_vm._s(_vm.vsText))]):_vm._e(),_c('div',{staticClass:"vs-chip"},[_vm._t("default")],2),(_vm.vsClosable)?_c('div',{staticClass:"con-x",on:{"click":_vm.remove}},[_c('i',{staticClass:"material-icons"},[_vm._v("close")])]):_vm._e()]):_vm._e()}
var vsChip_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsChip/vsChip.vue
function vsChip_injectStyle (context) {
  __webpack_require__("kxMS")
}
/* script */


/* template */

/* template functional */
var vsChip___vue_template_functional__ = false
/* styles */
var vsChip___vue_styles__ = vsChip_injectStyle
/* scopeId */
var vsChip___vue_scopeId__ = "data-v-5805a566"
/* moduleIdentifier (server only) */
var vsChip___vue_module_identifier__ = null

var vsChip_Component = Object(component_normalizer["a" /* default */])(
  vsChip,
  vsChip_render,
  vsChip_staticRenderFns,
  vsChip___vue_template_functional__,
  vsChip___vue_styles__,
  vsChip___vue_scopeId__,
  vsChip___vue_module_identifier__
)

/* harmony default export */ var vsChip_vsChip = (vsChip_Component.exports);

// CONCATENATED MODULE: ./src/components/vsChip/index.js



/* harmony default export */ var components_vsChip = (function (Vue) {
  Vue.component(vsChip_vsChip.name, vsChip_vsChip);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsChips/vsChips.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsChips = ({
  name: 'vs-chips',
  props: {
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
    }
  },
  components: {
    vsChip: vsChip_vsChip
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
      this.itemsx.push(this.newChip);
      this.newChip = '';
    },
    removeItem: function removeItem(index) {
      this.itemsx.splice(index, 1);
    },
    removeTotalItems: function removeTotalItems() {
      // this.itemsx = []
      this.itemsx.splice(0, this.itemsx.length);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3db26371","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsChips/vsChips.vue
var vsChips_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_c('div',{staticClass:"con-chips",class:{'no-items':_vm.itemsx.length==0}},[_vm._l((_vm.itemsx),function(item,index){return _c('vs-chip',{key:index,attrs:{"vs-color":_vm.vsColor,"item":"","vs-closable":""},on:{"vs-remove":function($event){_vm.removeItem(index)}}},[_vm._v("\n      "+_vm._s(item)+"\n    ")])}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.newChip),expression:"newChip"}],attrs:{"placeholder":_vm.itemsx.length>0?null:_vm.placeholder,"type":"text","name":"","value":""},domProps:{"value":(_vm.newChip)},on:{"keypress":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.addItem($event)},"input":function($event){if($event.target.composing){ return; }_vm.newChip=$event.target.value}}}),_c('div',{staticClass:"x-global",on:{"click":_vm.removeTotalItems}},[_c('i',{staticClass:"material-icons"},[_vm._v("close")])])],2)])}
var vsChips_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsChips/vsChips.vue
function vsChips_injectStyle (context) {
  __webpack_require__("GUqB")
}
/* script */


/* template */

/* template functional */
var vsChips___vue_template_functional__ = false
/* styles */
var vsChips___vue_styles__ = vsChips_injectStyle
/* scopeId */
var vsChips___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var vsChips___vue_module_identifier__ = null

var vsChips_Component = Object(component_normalizer["a" /* default */])(
  vsChips,
  vsChips_render,
  vsChips_staticRenderFns,
  vsChips___vue_template_functional__,
  vsChips___vue_styles__,
  vsChips___vue_scopeId__,
  vsChips___vue_module_identifier__
)

/* harmony default export */ var vsChips_vsChips = (vsChips_Component.exports);

// CONCATENATED MODULE: ./src/components/vsChips/index.js



/* harmony default export */ var components_vsChips = (function (Vue) {
  Vue.component(vsChips_vsChips.name, vsChips_vsChips);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsProgress/vsProgress.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsProgress = ({
  name: 'vs-progress',
  props: {
    vsHeight: {
      type: [Number, String],
      default: 8
    },
    vsIndeterminate: {
      type: Boolean,
      default: false
    },
    vsPercent: {
      type: Number,
      default: 0
    },
    vsColor: {
      type: String,
      default: 'primary'
    }
  },
  data: function data() {
    return {
      percent: 0
    };
  },
  created: function created() {
    this.percent = 0;
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      _this.percent = _this.vsPercent; // to force animation
    }, 1000);
  },
  computed: {
    colorx: function colorx() {
      if (this.vsColor) {
        if (utils_color["a" /* default */].contrastColor(this.vsColor)) {
          return 'rgba(0, 0, 0,.7)';
        } else {
          return 'rgba(255, 255, 255,.8)';
        }
      } else {
        return 'rgba(0, 0, 0,.7)';
      }
    }
  },
  methods: {
    returnColorRGB: function returnColorRGB(vsColor) {
      var colorx = utils_color["a" /* default */].hexToRgb(vsColor);
      return "rgba(".concat(colorx.r, ",").concat(colorx.g, ",").concat(colorx.b, ",.1)");
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1a5b1cb4","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsProgress/vsProgress.vue
var vsProgress_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-progress-background",class:{
    'vsIndeterminate':_vm.vsIndeterminate,
    },style:({
    'height':(_vm.vsHeight + "px"),
    'background':_vm.vsColor
    ?/[#()]/.test(_vm.vsColor)
    ?("rgba(" + (/[#]/.test(_vm.vsColor)?_vm.returnColorRGB(_vm.vsColor):_vm.vsColor.replace(/[rgb()]/g,'')) + ",.1)")
    :("rgba(var(--" + _vm.vsColor + "),.1)")
    :'rgba(var(--primary),.1)',

  })},[_c('div',{staticClass:"vs-progress-foreground",style:({
      'background':_vm.vsColor
      ?/[#()]/.test(_vm.vsColor)
      ?_vm.vsColor
      :("rgba(var(--" + _vm.vsColor + "),1)")
      :'rgba(var(--primary),1)',
      'width':_vm.percent+'%'
    })}),(_vm.vsIndeterminate)?_c('div',{staticClass:"indeterminate-bar",style:({
    'background':_vm.vsColor?/[#()]/.test(_vm.vsColor)?("rgba(" + (_vm.vsColor.replace(/[rgb()]/g,'')) + ",1)"):("rgba(var(--" + _vm.vsColor + "),1)"):'rgba(var(--primary),1)',
    'width':_vm.percent+'%'
  })}):_vm._e()])}
var vsProgress_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsProgress/vsProgress.vue
function vsProgress_injectStyle (context) {
  __webpack_require__("j9N/")
}
/* script */


/* template */

/* template functional */
var vsProgress___vue_template_functional__ = false
/* styles */
var vsProgress___vue_styles__ = vsProgress_injectStyle
/* scopeId */
var vsProgress___vue_scopeId__ = "data-v-1a5b1cb4"
/* moduleIdentifier (server only) */
var vsProgress___vue_module_identifier__ = null

var vsProgress_Component = Object(component_normalizer["a" /* default */])(
  vsProgress,
  vsProgress_render,
  vsProgress_staticRenderFns,
  vsProgress___vue_template_functional__,
  vsProgress___vue_styles__,
  vsProgress___vue_scopeId__,
  vsProgress___vue_module_identifier__
)

/* harmony default export */ var vsProgress_vsProgress = (vsProgress_Component.exports);

// CONCATENATED MODULE: ./src/components/vsProgress/index.js



/* harmony default export */ var components_vsProgress = (function (Vue) {
  Vue.component(vsProgress_vsProgress.name, vsProgress_vsProgress);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsCard/vsCard.vue
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsCard = ({
  name: 'vs-card',
  props: {
    vsColor: {
      type: String,
      default: 'primary'
    },
    actionable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clickCard: function clickCard() {
      this.$emit('vs-click');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-a4671794","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsCard/vsCard.vue
var vsCard_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-card",class:{ actionable: _vm.actionable },style:({
    /* 'border-color':vsColor?/[#()]/.test(vsColor)?vsColor:`rgba(var(--${vsColor}),1)`:'rgb(255,255,255)' */
  }),on:{"click":_vm.clickCard}},[_vm._t("default")],2)}
var vsCard_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsCard/vsCard.vue
function vsCard_injectStyle (context) {
  __webpack_require__("NqgJ")
  __webpack_require__("q3hB")
}
/* script */


/* template */

/* template functional */
var vsCard___vue_template_functional__ = false
/* styles */
var vsCard___vue_styles__ = vsCard_injectStyle
/* scopeId */
var vsCard___vue_scopeId__ = "data-v-a4671794"
/* moduleIdentifier (server only) */
var vsCard___vue_module_identifier__ = null

var vsCard_Component = Object(component_normalizer["a" /* default */])(
  vsCard,
  vsCard_render,
  vsCard_staticRenderFns,
  vsCard___vue_template_functional__,
  vsCard___vue_styles__,
  vsCard___vue_scopeId__,
  vsCard___vue_module_identifier__
)

/* harmony default export */ var vsCard_vsCard = (vsCard_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsCard/vsCardActions.vue
//
//
//
//
//
//
//
//

/* harmony default export */ var vsCardActions = ({
  name: 'vs-card-actions'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-24bbaf10","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsCard/vsCardActions.vue
var vsCardActions_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-vs-card-actions"},[_vm._t("default")],2)}
var vsCardActions_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsCard/vsCardActions.vue
function vsCardActions_injectStyle (context) {
  __webpack_require__("5PDp")
}
/* script */


/* template */

/* template functional */
var vsCardActions___vue_template_functional__ = false
/* styles */
var vsCardActions___vue_styles__ = vsCardActions_injectStyle
/* scopeId */
var vsCardActions___vue_scopeId__ = "data-v-24bbaf10"
/* moduleIdentifier (server only) */
var vsCardActions___vue_module_identifier__ = null

var vsCardActions_Component = Object(component_normalizer["a" /* default */])(
  vsCardActions,
  vsCardActions_render,
  vsCardActions_staticRenderFns,
  vsCardActions___vue_template_functional__,
  vsCardActions___vue_styles__,
  vsCardActions___vue_scopeId__,
  vsCardActions___vue_module_identifier__
)

/* harmony default export */ var vsCard_vsCardActions = (vsCardActions_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsCard/vsCardBody.vue
//
//
//
//
//
//
//
//

/* harmony default export */ var vsCardBody = ({
  name: 'vs-card-body'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-655bbe32","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsCard/vsCardBody.vue
var vsCardBody_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-vs-card-body"},[_vm._t("default")],2)}
var vsCardBody_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsCard/vsCardBody.vue
function vsCardBody_injectStyle (context) {
  __webpack_require__("EzrT")
}
/* script */


/* template */

/* template functional */
var vsCardBody___vue_template_functional__ = false
/* styles */
var vsCardBody___vue_styles__ = vsCardBody_injectStyle
/* scopeId */
var vsCardBody___vue_scopeId__ = "data-v-655bbe32"
/* moduleIdentifier (server only) */
var vsCardBody___vue_module_identifier__ = null

var vsCardBody_Component = Object(component_normalizer["a" /* default */])(
  vsCardBody,
  vsCardBody_render,
  vsCardBody_staticRenderFns,
  vsCardBody___vue_template_functional__,
  vsCardBody___vue_styles__,
  vsCardBody___vue_scopeId__,
  vsCardBody___vue_module_identifier__
)

/* harmony default export */ var vsCard_vsCardBody = (vsCardBody_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsCard/vsCardHeader.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsCardHeader = ({
  name: 'vs-card-header',
  props: {
    vsTitle: {
      type: String,
      default: null
    },
    vsSubtitle: {
      type: String,
      default: null
    },
    vsIcon: {
      type: String,
      default: null
    },
    vsBackgroundColor: {
      type: String,
      default: null
    },
    vsFill: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    colorx: function colorx() {
      if (this.vsBackgroundColor) {
        if (utils_color["a" /* default */].contrastColor(this.vsBackgroundColor)) {
          return 'rgba(0, 0, 0,.7)';
        } else {
          return 'rgba(255, 255, 255,.8)';
        }
      } else {
        return 'rgba(0, 0, 0,.7)';
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1e9c0ab4","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsCard/vsCardHeader.vue
var vsCardHeader_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-vs-card-header",style:({
    'background-color':_vm.vsFill?_vm.vsBackgroundColor?/[#()]/.test(_vm.vsBackgroundColor)?_vm.vsBackgroundColor:("rgba(var(--" + _vm.vsBackgroundColor + "),1)"):'rgb(244,244,244)':'rgb(244,244,244)',
    'color':_vm.vsFill?_vm.colorx:_vm.vsBackgroundColor?/[#()]/.test(_vm.vsBackgroundColor)?_vm.vsBackgroundColor:("rgba(var(--" + _vm.vsBackgroundColor + "),1)"):_vm.colorx,
    'border-color':!_vm.vsFill?_vm.vsBackgroundColor?/[#()]/.test(_vm.vsBackgroundColor)?_vm.vsBackgroundColor:("rgba(var(--" + _vm.vsBackgroundColor + "),1)"):'rgb(244,244,244)':'transparent',
    'border-left':!_vm.vsFill?'3px solid':'none',
    'border-top-left-radius':!_vm.vsFill?'5px':'inherit'
  })},[(this.$slots.default)?_c('div',{staticClass:"card-icon"},[_vm._t("default")],2):_vm._e(),(_vm.vsIcon)?_c('div',{staticClass:"card-icon"},[_c('i',{staticClass:"material-icons"},[_vm._v(_vm._s(_vm.vsIcon))])]):_vm._e(),_c('div',{staticClass:"card-titles"},[(_vm.vsTitle)?_c('div',{staticClass:"card-title"},[_vm._v(_vm._s(_vm.vsTitle))]):_vm._e(),(_vm.vsSubtitle)?_c('div',{staticClass:"card-subtitle"},[_vm._v(_vm._s(_vm.vsSubtitle))]):_vm._e()])])}
var vsCardHeader_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsCard/vsCardHeader.vue
function vsCardHeader_injectStyle (context) {
  __webpack_require__("zix/")
}
/* script */


/* template */

/* template functional */
var vsCardHeader___vue_template_functional__ = false
/* styles */
var vsCardHeader___vue_styles__ = vsCardHeader_injectStyle
/* scopeId */
var vsCardHeader___vue_scopeId__ = "data-v-1e9c0ab4"
/* moduleIdentifier (server only) */
var vsCardHeader___vue_module_identifier__ = null

var vsCardHeader_Component = Object(component_normalizer["a" /* default */])(
  vsCardHeader,
  vsCardHeader_render,
  vsCardHeader_staticRenderFns,
  vsCardHeader___vue_template_functional__,
  vsCardHeader___vue_styles__,
  vsCardHeader___vue_scopeId__,
  vsCardHeader___vue_module_identifier__
)

/* harmony default export */ var vsCard_vsCardHeader = (vsCardHeader_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsCard/vsCardMedia.vue
//
//
//
//
//
//
//
//

/* harmony default export */ var vsCardMedia = ({
  name: 'vs-card-media',
  props: {
    vsMedia: {
      type: String,
      default: null
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-033117b1","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsCard/vsCardMedia.vue
var vsCardMedia_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-vs-card-media"},[_c('img',{attrs:{"src":_vm.vsMedia}})])}
var vsCardMedia_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsCard/vsCardMedia.vue
function vsCardMedia_injectStyle (context) {
  __webpack_require__("Ls/m")
}
/* script */


/* template */

/* template functional */
var vsCardMedia___vue_template_functional__ = false
/* styles */
var vsCardMedia___vue_styles__ = vsCardMedia_injectStyle
/* scopeId */
var vsCardMedia___vue_scopeId__ = "data-v-033117b1"
/* moduleIdentifier (server only) */
var vsCardMedia___vue_module_identifier__ = null

var vsCardMedia_Component = Object(component_normalizer["a" /* default */])(
  vsCardMedia,
  vsCardMedia_render,
  vsCardMedia_staticRenderFns,
  vsCardMedia___vue_template_functional__,
  vsCardMedia___vue_styles__,
  vsCardMedia___vue_scopeId__,
  vsCardMedia___vue_module_identifier__
)

/* harmony default export */ var vsCard_vsCardMedia = (vsCardMedia_Component.exports);

// CONCATENATED MODULE: ./src/components/vsCard/index.js







/* harmony default export */ var components_vsCard = (function (Vue) {
  Vue.component(vsCard_vsCard.name, vsCard_vsCard);
  Vue.component(vsCard_vsCardActions.name, vsCard_vsCardActions);
  Vue.component(vsCard_vsCardBody.name, vsCard_vsCardBody);
  Vue.component(vsCard_vsCardHeader.name, vsCard_vsCardHeader);
  Vue.component(vsCard_vsCardMedia.name, vsCard_vsCardMedia);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsTopbar/vsTopbar.vue
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsTopbar = ({
  name: 'vs-topbar',
  props: {
    vsColor: {
      type: String,
      default: null
    }
  },
  computed: {
    colorx: function colorx() {
      if (this.vsColor) {
        if (utils_color["a" /* default */].contrastColor(this.vsColor)) {
          return 'rgba(0, 0, 0,.7)';
        } else {
          return 'rgba(255, 255, 255,.8)';
        }
      } else {
        return 'rgba(0, 0, 0,.7)';
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-14c6605b","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsTopbar/vsTopbar.vue
var vsTopbar_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-topbar",style:({
    'background':_vm.vsColor?/[#()]/.test(_vm.vsColor)?_vm.vsColor:("rgba(var(--" + _vm.vsColor + "),1)"):'rgb(244,244,244)',
    'color':_vm.colorx
  })},[_vm._t("default")],2)}
var vsTopbar_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsTopbar/vsTopbar.vue
function vsTopbar_injectStyle (context) {
  __webpack_require__("XAb2")
}
/* script */


/* template */

/* template functional */
var vsTopbar___vue_template_functional__ = false
/* styles */
var vsTopbar___vue_styles__ = vsTopbar_injectStyle
/* scopeId */
var vsTopbar___vue_scopeId__ = "data-v-14c6605b"
/* moduleIdentifier (server only) */
var vsTopbar___vue_module_identifier__ = null

var vsTopbar_Component = Object(component_normalizer["a" /* default */])(
  vsTopbar,
  vsTopbar_render,
  vsTopbar_staticRenderFns,
  vsTopbar___vue_template_functional__,
  vsTopbar___vue_styles__,
  vsTopbar___vue_scopeId__,
  vsTopbar___vue_module_identifier__
)

/* harmony default export */ var vsTopbar_vsTopbar = (vsTopbar_Component.exports);

// CONCATENATED MODULE: ./src/components/vsTopbar/index.js



/* harmony default export */ var components_vsTopbar = (function (Vue) {
  Vue.component(vsTopbar_vsTopbar.name, vsTopbar_vsTopbar);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsList/vsList.vue
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsList = ({
  name: 'vs-list'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3215f126","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsList/vsList.vue
var vsList_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-list",style:({
    /* 'border-color':vsColor?/[#()]/.test(vsColor)?vsColor:`rgba(var(--${vsColor}),1)`:'rgb(255,255,255)' */
  })},[_vm._t("default")],2)}
var vsList_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsList/vsList.vue
function vsList_injectStyle (context) {
  __webpack_require__("dqKj")
}
/* script */


/* template */

/* template functional */
var vsList___vue_template_functional__ = false
/* styles */
var vsList___vue_styles__ = vsList_injectStyle
/* scopeId */
var vsList___vue_scopeId__ = "data-v-3215f126"
/* moduleIdentifier (server only) */
var vsList___vue_module_identifier__ = null

var vsList_Component = Object(component_normalizer["a" /* default */])(
  vsList,
  vsList_render,
  vsList_staticRenderFns,
  vsList___vue_template_functional__,
  vsList___vue_styles__,
  vsList___vue_scopeId__,
  vsList___vue_module_identifier__
)

/* harmony default export */ var vsList_vsList = (vsList_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsAvatar/vsAvatar.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsAvatar = ({
  name: 'vs-avatar',
  props: {
    vsBadge: {
      type: [Boolean, String, Number],
      default: false
    },
    vsBadgeColor: {
      default: 'danger',
      type: String
    },
    vsSize: {
      type: String,
      default: null
    },
    vsSrc: {
      type: String,
      default: null
    },
    vsIcon: {
      type: String,
      default: 'person'
    },
    vsTextColor: {
      type: String,
      default: 'rgb(255, 255, 255)'
    },
    vsText: {
      type: [String, Number],
      default: null
    },
    vsColor: {
      type: String,
      default: 'rgb(195, 195, 195)'
    }
  },
  computed: {
    returnText: function returnText() {
      if (this.vsText.length <= 5) {
        return this.vsText;
      } else {
        var exp = /\s/g;
        var letras = '';

        if (exp.test(this.vsText)) {
          this.vsText.split(exp).forEach(function (word) {
            letras += word[0].toUpperCase();
          });
        } else {
          letras = this.vsText[0].toUpperCase();
        }

        return letras.length > 5 ? letras[0] : letras;
      }
    },
    returnScale: function returnScale() {
      if (this.vsText) {
        var lengthx = this.returnText.length;

        if (lengthx <= 5 && lengthx > 1) {
          return lengthx / (lengthx * 1.50);
        } else {
          return 1;
        }
      } else {
        return 1;
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5c6f31c3","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsAvatar/vsAvatar.vue
var vsAvatar_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g(_vm._b({staticClass:"con-vs-avatar",class:[_vm.vsSize],style:({
  'width':/[px]/.test(_vm.vsSize)?("" + _vm.vsSize):null,
  'height':/[px]/.test(_vm.vsSize)?("" + _vm.vsSize):null,
  'background':_vm.vsColor?/[#()]/.test(_vm.vsColor)?_vm.vsColor:("rgba(var(--" + _vm.vsColor + "),1)"):'rgb(var(--primary))'
})},'div',_vm.$attrs,false),_vm.$listeners),[(_vm.vsBadge && _vm.vsBadge > 0)?_c('div',{staticClass:"dot-count",class:{
    'badgeNumber':typeof _vm.vsBadge != 'boolean',
    },style:({
    'background':_vm.vsBadgeColor?/[#()]/.test(_vm.vsBadgeColor)?_vm.vsBadgeColor:("rgba(var(--" + _vm.vsBadgeColor + "),1)"):'rgb(var(--primary))'
  })},[_vm._v("\n   "+_vm._s(typeof _vm.vsBadge != 'boolean'?_vm.vsBadge:null)+"\n  ")]):_vm._e(),(_vm.vsSrc)?_c('div',{staticClass:"con-img"},[_c('img',{attrs:{"src":_vm.vsSrc,"alt":""}})]):_c('span',{staticClass:"vs-avatar-text",class:{
    'material-icons':!_vm.vsText
    },style:({
    'transform':("translate(-50%,-50%) scale(" + _vm.returnScale + ")"),
    'color':_vm.vsTextColor?/[#()]/.test(_vm.vsTextColor)?_vm.vsTextColor:("rgba(var(--" + _vm.vsTextColor + "),1)"):'rgb(var(--primary))'
  }),attrs:{"title":_vm.vsText}},[_vm._v("\n  "+_vm._s(_vm.vsText?_vm.returnText:_vm.vsIcon)+"\n  ")])])}
var vsAvatar_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsAvatar/vsAvatar.vue
function vsAvatar_injectStyle (context) {
  __webpack_require__("Mpo0")
}
/* script */


/* template */

/* template functional */
var vsAvatar___vue_template_functional__ = false
/* styles */
var vsAvatar___vue_styles__ = vsAvatar_injectStyle
/* scopeId */
var vsAvatar___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var vsAvatar___vue_module_identifier__ = null

var vsAvatar_Component = Object(component_normalizer["a" /* default */])(
  vsAvatar,
  vsAvatar_render,
  vsAvatar_staticRenderFns,
  vsAvatar___vue_template_functional__,
  vsAvatar___vue_styles__,
  vsAvatar___vue_scopeId__,
  vsAvatar___vue_module_identifier__
)

/* harmony default export */ var vsAvatar_vsAvatar = (vsAvatar_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsList/vsListItem.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var vsListItem = ({
  name: 'vs-list-item',
  props: {
    vsAvatar: {
      type: [Boolean, String],
      default: false
    },
    vsTitle: {
      type: String,
      default: null
    },
    vsSubtitle: {
      type: String,
      default: null
    },
    vsIcon: {
      type: String,
      default: null
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-210943ea","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsList/vsListItem.vue
var vsListItem_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-list-item"},[_c('div',{staticClass:"list-avatar"},[_vm._t("avatar")],2),(_vm.vsIcon)?_c('div',{staticClass:"list-icon"},[_c('i',{staticClass:"material-icons"},[_vm._v(_vm._s(_vm.vsIcon))])]):_vm._e(),_c('div',{staticClass:"list-titles"},[(_vm.vsTitle)?_c('div',{staticClass:"list-title"},[_vm._v(_vm._s(_vm.vsTitle))]):_vm._e(),(_vm.vsSubtitle)?_c('div',{staticClass:"list-subtitle"},[_vm._v(_vm._s(_vm.vsSubtitle))]):_vm._e()]),_c('div',{staticClass:"list-slot"},[_vm._t("default")],2)])}
var vsListItem_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsList/vsListItem.vue
function vsListItem_injectStyle (context) {
  __webpack_require__("bHj3")
}
/* script */


/* template */

/* template functional */
var vsListItem___vue_template_functional__ = false
/* styles */
var vsListItem___vue_styles__ = vsListItem_injectStyle
/* scopeId */
var vsListItem___vue_scopeId__ = "data-v-210943ea"
/* moduleIdentifier (server only) */
var vsListItem___vue_module_identifier__ = null

var vsListItem_Component = Object(component_normalizer["a" /* default */])(
  vsListItem,
  vsListItem_render,
  vsListItem_staticRenderFns,
  vsListItem___vue_template_functional__,
  vsListItem___vue_styles__,
  vsListItem___vue_scopeId__,
  vsListItem___vue_module_identifier__
)

/* harmony default export */ var vsList_vsListItem = (vsListItem_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsList/vsListHeader.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsListHeader = ({
  name: 'vs-list-header',
  props: {
    vsColor: {
      type: String,
      default: 'primary'
    },
    vsTitle: {
      type: String,
      default: null
    },
    vsSubtitle: {
      type: String,
      default: null
    },
    vsIcon: {
      type: String,
      default: null
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-16d39a33","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsList/vsListHeader.vue
var vsListHeader_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-list-header",class:{
    'with-icon':_vm.vsIcon,
  },style:({
    'color':_vm.vsColor?/[#()]/.test(_vm.vsColor)?_vm.vsColor:("rgba(var(--" + _vm.vsColor + "),1)"):'rgb(244,244,244)',
    'border-color':_vm.vsColor?/[#()]/.test(_vm.vsColor)?_vm.vsColor:("rgba(var(--" + _vm.vsColor + "),1)"):'rgb(244,244,244)',
  })},[(_vm.vsIcon)?_c('div',{staticClass:"list-icon"},[_c('i',{staticClass:"material-icons"},[_vm._v(_vm._s(_vm.vsIcon))])]):_vm._e(),_c('div',{staticClass:"list-titles"},[(_vm.vsTitle)?_c('div',{staticClass:"list-title"},[_vm._v(_vm._s(_vm.vsTitle))]):_vm._e()])])}
var vsListHeader_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsList/vsListHeader.vue
function vsListHeader_injectStyle (context) {
  __webpack_require__("2sbx")
}
/* script */


/* template */

/* template functional */
var vsListHeader___vue_template_functional__ = false
/* styles */
var vsListHeader___vue_styles__ = vsListHeader_injectStyle
/* scopeId */
var vsListHeader___vue_scopeId__ = "data-v-16d39a33"
/* moduleIdentifier (server only) */
var vsListHeader___vue_module_identifier__ = null

var vsListHeader_Component = Object(component_normalizer["a" /* default */])(
  vsListHeader,
  vsListHeader_render,
  vsListHeader_staticRenderFns,
  vsListHeader___vue_template_functional__,
  vsListHeader___vue_styles__,
  vsListHeader___vue_scopeId__,
  vsListHeader___vue_module_identifier__
)

/* harmony default export */ var vsList_vsListHeader = (vsListHeader_Component.exports);

// CONCATENATED MODULE: ./src/components/vsList/index.js





/* harmony default export */ var components_vsList = (function (Vue) {
  Vue.component(vsList_vsList.name, vsList_vsList);
  Vue.component(vsList_vsListItem.name, vsList_vsListItem);
  Vue.component(vsList_vsListHeader.name, vsList_vsListHeader);
});
// CONCATENATED MODULE: ./src/components/vsAvatar/index.js



/* harmony default export */ var components_vsAvatar = (function (Vue) {
  Vue.component(vsAvatar_vsAvatar.name, vsAvatar_vsAvatar);
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("rzQm");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsPagination/vsPagination.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsPagination = ({
  name: 'vs-pagination',
  props: {
    vsColor: {
      type: String,
      default: 'primary'
    },
    vsTotal: {
      type: Number,
      required: true
    },
    vsCurrent: {
      type: Number,
      required: true
    },
    vsMax: {
      type: Number,
      default: 9
    },
    vsGoto: {
      type: Boolean
    },
    vsType: {
      type: String
    },
    vsRounded: {
      type: Boolean
    },
    vsPrevIcon: {
      type: String,
      default: 'chevron_left'
    },
    vsNextIcon: {
      type: String,
      default: 'chevron_right'
    }
  },
  data: function data() {
    return {
      pages: [],
      current: this.vsCurrent,
      go: this.vsCurrent,
      prevRange: '',
      nextRange: ''
    };
  },
  created: function created() {
    this.pagination;

    if (this.vsGoto) {
      var vsInput = function vsInput() {
        return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "/AIR"));
      };
    }
  },
  methods: {
    onFirstPage: function onFirstPage() {
      return this.current === 1;
    },
    previousPage: function previousPage() {
      this.current--;
    },
    onCurrentPage: function onCurrentPage(page) {
      return page === this.current ? 'vs-active' : '';
    },
    isEllipsis: function isEllipsis(page) {
      return page === '...';
    },
    onLastPage: function onLastPage() {
      return this.current === this.vsTotal;
    },
    nextPage: function nextPage() {
      this.current++;
    },
    goTo: function goTo(page) {
      if (typeof page.target === 'undefined') {
        this.current = page;
      } else {
        var value = parseInt(page.target.value, 10);
        this.go = value < 1 ? 1 : value <= this.vsTotal ? value : this.vsTotal;
        this.current = this.go;
      }
    },
    setPages: function setPages(start, end) {
      var setPages = [];

      for (start > 0 ? start : 1; start <= end; start++) {
        setPages.push(start);
      }

      return setPages;
    }
  },
  computed: {
    pagination: function pagination() {
      if (this.vsTotal <= this.vsMax) {
        return this.pages = this.setPages(1, this.vsTotal);
      }

      var even = this.vsMax % 2 === 0 ? 1 : 0;
      this.prevRange = Math.floor(this.vsMax / 2);
      this.nextRange = this.vsTotal - this.prevRange + 1 + even;

      if (this.current >= this.prevRange && this.current <= this.nextRange) {
        var start = this.current - this.prevRange + 2;
        var end = this.current + this.prevRange - 2 - even;
        return this.pages = [1, '...'].concat(toConsumableArray_default()(this.setPages(start, end)), ['...', this.vsTotal]);
      } else {
        return this.pages = toConsumableArray_default()(this.setPages(1, this.prevRange)).concat(['...'], toConsumableArray_default()(this.setPages(this.nextRange, this.vsTotal)));
      }
    }
  },
  watch: {
    current: function current() {
      this.pagination;
      this.$emit('page', this.current);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9d375c8a","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsPagination/vsPagination.vue
var vsPagination_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"vs-component",attrs:{"aria-label":"Page pagination","role":"navigation"}},[_c('ul',{class:['vs-pagination', _vm.vsType ? ("vs-pager-" + _vm.vsType) : '', _vm.vsRounded ? 'vs-pager-rounded' : '']},[_c('li',[_c('button',{attrs:{"disabled":_vm.onFirstPage() ? true : false},on:{"click":function($event){_vm.previousPage()}}},[_c('i',{staticClass:"material-icons"},[_vm._v(_vm._s(_vm.vsPrevIcon))])])]),_vm._l((_vm.pages),function(page,index){return _c('li',{key:index},[_c('button',{class:_vm.onCurrentPage(page),style:({
        'background':_vm.onCurrentPage(page)&&_vm.vsType?_vm.vsColor?/[#()]/.test(_vm.vsColor)?_vm.vsColor:("rgba(var(--" + _vm.vsColor + "),1)"):'rgb(var(--primary))':null
        }),attrs:{"disabled":_vm.isEllipsis(page) ? true : false},on:{"click":function($event){_vm.goTo(page)}}},[_vm._v(_vm._s(page))])])}),_c('li',[_c('button',{attrs:{"disabled":_vm.onLastPage() ? true : false},on:{"click":function($event){_vm.nextPage()}}},[_c('i',{staticClass:"material-icons"},[_vm._v(_vm._s(_vm.vsNextIcon))])])]),(_vm.vsGoto)?_c('li',{staticClass:"goto"},[_c('vs-input',{attrs:{"vs-type":"number","min":"1","max":_vm.vsTotal},on:{"change":_vm.goTo},model:{value:(_vm.go),callback:function ($$v) {_vm.go=$$v},expression:"go"}})],1):_vm._e()],2)])}
var vsPagination_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsPagination/vsPagination.vue
function vsPagination_injectStyle (context) {
  __webpack_require__("hfZT")
  __webpack_require__("Z539")
}
/* script */


/* template */

/* template functional */
var vsPagination___vue_template_functional__ = false
/* styles */
var vsPagination___vue_styles__ = vsPagination_injectStyle
/* scopeId */
var vsPagination___vue_scopeId__ = "data-v-9d375c8a"
/* moduleIdentifier (server only) */
var vsPagination___vue_module_identifier__ = null

var vsPagination_Component = Object(component_normalizer["a" /* default */])(
  vsPagination,
  vsPagination_render,
  vsPagination_staticRenderFns,
  vsPagination___vue_template_functional__,
  vsPagination___vue_styles__,
  vsPagination___vue_scopeId__,
  vsPagination___vue_module_identifier__
)

/* harmony default export */ var vsPagination_vsPagination = (vsPagination_Component.exports);

// CONCATENATED MODULE: ./src/components/vsPagination/index.js



/* harmony default export */ var components_vsPagination = (function (Vue) {
  Vue.component(vsPagination_vsPagination.name, vsPagination_vsPagination);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsBreadcrumb/vsBreadcrumb.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsBreadcrumb = ({
  name: 'vs-breadcrumb',
  props: {
    vsItems: {
      type: Array
    },
    vsSeparator: {
      type: String,
      default: '/'
    },
    vsColor: {
      type: String,
      default: null
    },
    vsAlign: {
      type: String,
      default: 'left'
    }
  },
  computed: {
    hasSlot: function hasSlot() {
      return !!this.$slots.default;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6ab32726","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsBreadcrumb/vsBreadcrumb.vue
var vsBreadcrumb_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',_vm._g(_vm._b({staticClass:"vs-breadcrumb",class:("vs-align-" + _vm.vsAlign),attrs:{"aria-label":"breadcrumb"}},'nav',_vm.$attrs,false),_vm.$listeners),[_c('ol',[_vm._t("default"),_vm._l((_vm.vsItems),function(item){return (!_vm.hasSlot)?_c('li',{key:item.title,class:{'vs-active':item.active,'disabled-link':item.disabled},attrs:{"aria-current":item.active ? 'page' : null}},[(!item.active)?_c('a',{attrs:{"href":item.url ? item.url : '#',"title":item.title}},[_vm._v("\n        "+_vm._s(item.title)+"\n      ")]):[_c('span',{style:({
          'color':_vm.vsColor?/[#()]/.test(_vm.vsColor)?_vm.vsColor:("rgba(var(--" + _vm.vsColor + "),1)"):'rgb(var(--primary))'
        })},[_vm._v("\n        "+_vm._s(item.title)+"\n      ")])],(!item.active)?_c('span',{staticClass:"separator",class:_vm.vsSeparator.length > 1 ? 'material-icons' : null,attrs:{"aria-hidden":"true"}},[_vm._v(_vm._s(_vm.vsSeparator))]):_vm._e()],2):_vm._e()})],2)])}
var vsBreadcrumb_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsBreadcrumb/vsBreadcrumb.vue
function vsBreadcrumb_injectStyle (context) {
  __webpack_require__("jbFm")
}
/* script */


/* template */

/* template functional */
var vsBreadcrumb___vue_template_functional__ = false
/* styles */
var vsBreadcrumb___vue_styles__ = vsBreadcrumb_injectStyle
/* scopeId */
var vsBreadcrumb___vue_scopeId__ = "data-v-6ab32726"
/* moduleIdentifier (server only) */
var vsBreadcrumb___vue_module_identifier__ = null

var vsBreadcrumb_Component = Object(component_normalizer["a" /* default */])(
  vsBreadcrumb,
  vsBreadcrumb_render,
  vsBreadcrumb_staticRenderFns,
  vsBreadcrumb___vue_template_functional__,
  vsBreadcrumb___vue_styles__,
  vsBreadcrumb___vue_scopeId__,
  vsBreadcrumb___vue_module_identifier__
)

/* harmony default export */ var vsBreadcrumb_vsBreadcrumb = (vsBreadcrumb_Component.exports);

// CONCATENATED MODULE: ./src/components/vsBreadcrumb/index.js



/* harmony default export */ var components_vsBreadcrumb = (function (Vue) {
  Vue.component(vsBreadcrumb_vsBreadcrumb.name, vsBreadcrumb_vsBreadcrumb);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsSideBar/vsSideBar.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsSideBar = ({
  name: "vs-sidebar",
  props: {
    vsColor: {
      default: null,
      type: String
    },
    vsBlur: {
      default: false,
      type: Boolean
    },
    vsClickClose: {
      default: false,
      type: Boolean
    },
    vsActive: {
      default: false,
      type: [Boolean, String]
    },
    vsParent: {
      default: 'body',
      type: String
    },
    vsReduce: {
      default: false,
      type: Boolean
    },
    vsReduceExpand: {
      default: false,
      type: Boolean
    },
    vsStatic: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      reduce: false
    };
  },
  mounted: function mounted() {
    document.querySelector(this.vsParent).addEventListener("touchstart", this.onTouchStart);
    document.querySelector(this.vsParent).addEventListener("touchend", this.onTouchEnd); // @touchstart="onTouchStart"
    // @touchend="onTouchEnd"

    this.insertBody();
  },
  watch: {
    vsReduce: function vsReduce() {
      this.reduce = this.vsReduce;
    },
    reduce: function reduce() {
      var _this = this;

      this.$slots.default.forEach(function (item) {
        if (item.componentInstance) {
          item.componentInstance.reduce = _this.reduce;
        }
      });
    },
    vsActive: function vsActive() {
      if (this.vsBlur && this.vsParent == 'body') {
        var elx = document.querySelector('#app');

        if (this.vsActive) {
          elx.style.filter = 'blur(8px)';
        } else {
          elx.style.filter = 'none';
        }
      }
    }
  },
  methods: {
    onTouchStart: function onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      };
    },
    onTouchEnd: function onTouchEnd(e) {
      var dx = e.changedTouches[0].clientX - this.touchStart.x;
      var dy = e.changedTouches[0].clientY - this.touchStart.y;

      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.$emit('update:vsActive', true);
        } else {
          this.$emit('update:vsActive', false);
        }
      }
    },
    clickItem: function clickItem() {
      if (this.vsClickClose) {
        this.clickOut();
      }
    },
    clickOut: function clickOut() {
      this.$emit('update:vsActive', false);
    },
    insertBody: function insertBody() {
      var elx = this.$refs.considebar;
      var parentx = document.querySelector(this.vsParent);
      parentx.insertBefore(elx, parentx.firstChild);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-74bb4a83","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsSideBar/vsSideBar.vue
var vsSideBar_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"sidebarx"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.vsStatic?true:_vm.vsActive),expression:"vsStatic?true:vsActive"}],ref:"considebar",staticClass:"vs-component con-sidebar",class:{'vsStatic':_vm.vsStatic,'body-sidebar':_vm.vsParent=='body'}},[_c('div',{staticClass:"con-darkx",on:{"click":function($event){_vm.clickOut()}}}),_c('div',{staticClass:"vs-sidebar",class:{'reducex':_vm.reduce}},[(_vm.vsReduceExpand)?_c('div',{staticClass:"expand-reduce"},[_c('i',{staticClass:"material-icons",on:{"click":function($event){_vm.reduce=!_vm.reduce}}},[_vm._v("\n          "+_vm._s(_vm.reduce?'menu':'first_page')+"\n        ")])]):_vm._e(),_c('header',[_vm._t("header")],2),_c('ul',{staticClass:"ulx"},[_vm._t("default")],2),_c('footer',[_vm._t("footer")],2)])])])}
var vsSideBar_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsSideBar/vsSideBar.vue
function vsSideBar_injectStyle (context) {
  __webpack_require__("C9Az")
}
/* script */


/* template */

/* template functional */
var vsSideBar___vue_template_functional__ = false
/* styles */
var vsSideBar___vue_styles__ = vsSideBar_injectStyle
/* scopeId */
var vsSideBar___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var vsSideBar___vue_module_identifier__ = null

var vsSideBar_Component = Object(component_normalizer["a" /* default */])(
  vsSideBar,
  vsSideBar_render,
  vsSideBar_staticRenderFns,
  vsSideBar___vue_template_functional__,
  vsSideBar___vue_styles__,
  vsSideBar___vue_scopeId__,
  vsSideBar___vue_module_identifier__
)

/* harmony default export */ var vsSideBar_vsSideBar = (vsSideBar_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsSideBar/vsSidebarItem.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsSidebarItem = ({
  name: 'vs-sidebar-item',
  props: {
    to: {},
    href: {},
    vsIcon: {
      default: null,
      type: String
    },
    vsIconReduce: {
      default: null,
      type: String
    },
    vsSlot: {
      type: Boolean,
      default: false
    },
    vsActive: {
      default: false,
      type: Boolean
    },
    vsTag: {
      default: null,
      type: [String, Number]
    }
  },
  data: function data() {
    return {
      reduce: false
    };
  },
  methods: {
    clickItem: function clickItem() {
      this.$parent.clickItem(this.vsActive);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9c298bca","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsSideBar/vsSidebarItem.vue
var vsSidebarItem_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"vs-component vs-sidebar-item",class:{'con-tag':_vm.vsTag,'active-item':_vm.vsActive},on:{"click":_vm.clickItem}},[(_vm.to)?_c('router-link',_vm._g(_vm._b({attrs:{"title":_vm.reduce?_vm.$slots.default[0].text:null,"to":_vm.to}},'router-link',_vm.$attrs,false),_vm.$listeners),[_c('span',{staticClass:"con-text-span"},[(_vm.vsIcon)?_c('i',{staticClass:"material-icons"},[_vm._v("\n      "+_vm._s(_vm.vsIcon)+"\n    ")]):_vm._e(),(_vm.vsIconReduce)?_c('i',{staticClass:"material-icons only-reduse"},[_vm._v("\n      "+_vm._s(_vm.vsIconReduce)+"\n    ")]):_vm._e(),_c('span',{staticClass:"textx_span"},[_vm._t("default")],2)]),(_vm.vsTag)?_c('span',{staticClass:"vs-tagx",attrs:{"title":_vm.reduce?_vm.vsTag:null}},[_vm._v(_vm._s(_vm.vsTag))]):_vm._e()]):(_vm.vsSlot)?[_vm._t("default")]:_c('a',_vm._g(_vm._b({attrs:{"title":_vm.reduce?_vm.$slots.default[0].text:null,"href":_vm.href}},'a',_vm.$attrs,false),_vm.$listeners),[_c('span',{staticClass:"con-text-span"},[(_vm.vsIcon)?_c('i',{staticClass:"material-icons"},[_vm._v("\n      "+_vm._s(_vm.vsIcon)+"\n    ")]):_vm._e(),(_vm.vsIconReduce)?_c('i',{staticClass:"material-icons only-reduse"},[_vm._v("\n      "+_vm._s(_vm.vsIconReduce)+"\n    ")]):_vm._e(),_c('span',{staticClass:"textx_span"},[_vm._t("default")],2)]),(_vm.vsTag)?_c('span',{staticClass:"vs-tagx",attrs:{"title":_vm.reduce?_vm.vsTag:null}},[_vm._v(_vm._s(_vm.vsTag))]):_vm._e()])],2)}
var vsSidebarItem_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebarItem.vue
function vsSidebarItem_injectStyle (context) {
  __webpack_require__("MPHU")
}
/* script */


/* template */

/* template functional */
var vsSidebarItem___vue_template_functional__ = false
/* styles */
var vsSidebarItem___vue_styles__ = vsSidebarItem_injectStyle
/* scopeId */
var vsSidebarItem___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var vsSidebarItem___vue_module_identifier__ = null

var vsSidebarItem_Component = Object(component_normalizer["a" /* default */])(
  vsSidebarItem,
  vsSidebarItem_render,
  vsSidebarItem_staticRenderFns,
  vsSidebarItem___vue_template_functional__,
  vsSidebarItem___vue_styles__,
  vsSidebarItem___vue_scopeId__,
  vsSidebarItem___vue_module_identifier__
)

/* harmony default export */ var vsSideBar_vsSidebarItem = (vsSidebarItem_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsSideBar/vsSidebarGroup.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsSidebarGroup = ({
  name: 'vs-sidebar-group',
  props: {
    vsIcon: {
      default: null,
      type: String
    },
    vsIconReduce: {
      default: null,
      type: String
    },
    vsOpen: {
      default: false,
      type: Boolean
    },
    vsLabel: {
      default: 'items',
      type: String
    }
  },
  data: function data() {
    return {
      open: false
    };
  },
  created: function created() {
    if (this.vsOpen) {
      this.open = true;
    }
  },
  methods: {
    na: function na() {
      var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10000;
      return Math.round(Math.random() * (max - min) + min);
    },
    clickItem: function clickItem(active) {
      this.$parent.clickItem();
    },
    beforeEnter: function beforeEnter(el) {
      this.$refs.ulx.style.height = 0;
    },
    enter: function enter(el, done) {
      var h = this.$refs.ulx.scrollHeight;
      this.$refs.ulx.style.height = h + 'px';
      parents(this);

      function parents(_this) {
        if (_this.$parent.$el.className.search('con-sidebar-group') != -1) {
          // this.$parent.$el
          var hp = _this.$parent.$refs.ulx.scrollHeight;
          _this.$parent.$refs.ulx.style.height = hp + h + 'px';
          parents(_this.$parent);
        } else {}
      }

      done();
    },
    leave: function leave(el, done) {
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
        var hp = this.$refs.ulx.scrollHeight;
        this.$refs.ulx.style.height = 0 + 'px';
      }

      this.$refs.ulx.style.height = 0 + 'px';
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3566f488","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsSideBar/vsSidebarGroup.vue
var vsSidebarGroup_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"considebar",staticClass:"vs-component con-sidebar-group",class:{'openx':_vm.open}},[_c('li',{ref:"labelx",staticClass:"labelx",on:{"click":function($event){_vm.open=!_vm.open}}},[(_vm.vsIcon)?_c('i',{staticClass:"material-icons"},[_vm._v("\n      "+_vm._s(_vm.vsIcon)+"\n    ")]):_vm._e(),(_vm.vsIconReduce)?_c('i',{staticClass:"material-icons only-reduse"},[_vm._v("\n      "+_vm._s(_vm.vsIconReduce)+"\n    ")]):_vm._e(),_c('span',{staticClass:"textx_span"},[_vm._v("\n      "+_vm._s(_vm.vsLabel)+"\n    ")]),_c('i',{staticClass:"material-icons icon-arrowx"},[_vm._v("\n      keyboard_arrow_down\n    ")])]),_c('transition',{on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"leave":_vm.leave}},[_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.open),expression:"open"}],ref:"ulx"},[_vm._t("default")],2)])],1)}
var vsSidebarGroup_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebarGroup.vue
function vsSidebarGroup_injectStyle (context) {
  __webpack_require__("NA0R")
}
/* script */


/* template */

/* template functional */
var vsSidebarGroup___vue_template_functional__ = false
/* styles */
var vsSidebarGroup___vue_styles__ = vsSidebarGroup_injectStyle
/* scopeId */
var vsSidebarGroup___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var vsSidebarGroup___vue_module_identifier__ = null

var vsSidebarGroup_Component = Object(component_normalizer["a" /* default */])(
  vsSidebarGroup,
  vsSidebarGroup_render,
  vsSidebarGroup_staticRenderFns,
  vsSidebarGroup___vue_template_functional__,
  vsSidebarGroup___vue_styles__,
  vsSidebarGroup___vue_scopeId__,
  vsSidebarGroup___vue_module_identifier__
)

/* harmony default export */ var vsSideBar_vsSidebarGroup = (vsSidebarGroup_Component.exports);

// CONCATENATED MODULE: ./src/components/vsSideBar/index.js





/* harmony default export */ var components_vsSideBar = (function (Vue) {
  Vue.component(vsSideBar_vsSideBar.name, vsSideBar_vsSideBar);
  Vue.component(vsSideBar_vsSidebarItem.name, vsSideBar_vsSidebarItem);
  Vue.component(vsSideBar_vsSidebarGroup.name, vsSideBar_vsSidebarGroup);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsDialog/vsDialog.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsDialog = ({
  name: 'vs-dialog',
  props: {
    vsTitle: {
      default: 'Dialog',
      type: String
    },
    vsColor: {
      default: 'primary',
      type: String
    },
    vsButtonAccept: {
      default: 'filled',
      type: String
    },
    vsButtonCancel: {
      default: 'flat',
      type: String
    },
    vsType: {
      default: 'alert',
      type: String
    },
    vsIsValid: {
      default: 'none',
      type: [Boolean, String]
    },
    vsActive: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      active: true
    };
  },
  mounted: function mounted() {
    this.insertBody();
  },
  methods: {
    giveColor: function giveColor(color) {
      return utils_color["a" /* default */].rColor(color);
    },
    accept: function accept() {
      if (this.vsType != 'prompt') {
        this.$emit('update:vsActive', false);
        this.$emit('vs-accept');
      } else {
        if (this.vsIsValid || this.vsIsValid == 'none') {
          this.$emit('update:vsActive', false);
          this.$emit('vs-accept');
        } else {
          this.rebound();
        }
      }
    },
    rebound: function rebound() {
      var _this = this;

      this.$refs.dialogx.classList.add('locked');
      setTimeout(function () {
        _this.$refs.dialogx.classList.remove('locked');
      }, 200);
    },
    close: function close(event, con) {
      if (con) {
        if (event.target.className.indexOf('vs-dialog-dark') != -1 && this.vsType == 'alert') {
          this.$emit('update:vsActive', false);
        } else if (this.vsType != 'alert') {
          this.rebound();
        }
      } else {
        if (event ? event.target.className.indexOf('vs-dialog-cancel') != -1 : false) {
          this.$emit('update:vsActive', false);
        } else {
          this.$emit('update:vsActive', false);
          this.$emit('vs-cancel');
        }
      }
    },
    insertBody: function insertBody() {
      var elx = this.$refs.con;
      document.body.insertBefore(elx, document.body.firstChild);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-c25446ea","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsDialog/vsDialog.vue
var vsDialog_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"dialog-t"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.vsActive),expression:"vsActive"}],ref:"con",staticClass:"vs-component con-vs-dialog",on:{"click":function($event){_vm.close($event,true)}}},[_c('div',{staticClass:"vs-dialog-dark"}),_c('div',{ref:"dialogx",staticClass:"vs-dialog"},[_c('header',{style:({
        'color':_vm.giveColor(_vm.vsColor)
      })},[_c('div',{staticClass:"con-title-after"},[_c('span',{staticClass:"after",style:({
          'background':_vm.giveColor(_vm.vsColor)
          })}),_c('h3',[_vm._v(_vm._s(_vm.vsTitle))])]),(_vm.vsType=='alert')?_c('span',{staticClass:"vs-dialog-cancel material-icons",on:{"click":_vm.close}},[_vm._v("close")]):_vm._e()]),_c('div',{staticClass:"vs-dialog-text"},[_vm._t("default")],2),(_vm.vsType=='prompt')?_c('div',{staticClass:"vs-dialog-text"},[_vm._t("input")],2):_vm._e(),(_vm.vsType=='prompt'||_vm.vsType=='confirm')?_c('footer',[_c('vs-button',{attrs:{"vs-color":_vm.vsColor,"vs-type":_vm.vsButtonAccept},on:{"click":_vm.accept}},[_vm._v("Accept")]),_c('vs-button',{attrs:{"vs-type":_vm.vsButtonCancel},on:{"click":_vm.close}},[_vm._v("Cancel")])],1):_c('footer',[_c('vs-button',{attrs:{"vs-color":_vm.vsColor,"vs-type":_vm.vsButtonAccept},on:{"click":_vm.accept}},[_vm._v("Accept")])],1)])])])}
var vsDialog_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsDialog/vsDialog.vue
function vsDialog_injectStyle (context) {
  __webpack_require__("7Yfw")
}
/* script */


/* template */

/* template functional */
var vsDialog___vue_template_functional__ = false
/* styles */
var vsDialog___vue_styles__ = vsDialog_injectStyle
/* scopeId */
var vsDialog___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var vsDialog___vue_module_identifier__ = null

var vsDialog_Component = Object(component_normalizer["a" /* default */])(
  vsDialog,
  vsDialog_render,
  vsDialog_staticRenderFns,
  vsDialog___vue_template_functional__,
  vsDialog___vue_styles__,
  vsDialog___vue_scopeId__,
  vsDialog___vue_module_identifier__
)

/* harmony default export */ var vsDialog_vsDialog = (vsDialog_Component.exports);

// CONCATENATED MODULE: ./src/components/vsDialog/index.js



/* harmony default export */ var components_vsDialog = (function (Vue) {
  Vue.component(vsDialog_vsDialog.name, vsDialog_vsDialog);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsDivider/vsDivider.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsDivider = ({
  name: "vs-divider",
  props: {
    vsColor: {
      type: String,
      default: 'rgba(0, 0, 0,.1)'
    },
    vsIcon: {
      default: null,
      type: String
    },
    vsStyle: {
      default: 'solid',
      type: String
    },
    vsBorderHeight: {
      default: '1px',
      type: String
    },
    vsPosition: {
      default: 'center',
      type: String
    }
  },
  computed: {
    getWidthAfter: function getWidthAfter() {
      var widthx = '100%';

      if (this.vsPosition == 'left') {
        widthx = '0%';
      } else if (this.vsPosition == 'left-center') {
        widthx = '25%';
      } else if (this.vsPosition == 'right-center') {
        widthx = '75%';
      } else if (this.vsPosition == 'right') {
        widthx = '100%';
      }

      return widthx;
    },
    getWidthBefore: function getWidthBefore() {
      var widthx = '100%';

      if (this.vsPosition == 'left') {
        widthx = '100%';
      } else if (this.vsPosition == 'left-center') {
        widthx = '75%';
      } else if (this.vsPosition == 'right-center') {
        widthx = '25%';
      } else if (this.vsPosition == 'right') {
        widthx = '0%';
      }

      return widthx;
    }
  },
  methods: {
    giveColor: function giveColor() {
      var opacity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var type = arguments.length > 1 ? arguments[1] : undefined;

      if (this.vsColor == 'rgba(0, 0, 0,.1)' && type == 'text') {
        var color = this.vsColor.replace('.1', '.8');
        return utils_color["a" /* default */].rColor(color, opacity);
      } else {
        return utils_color["a" /* default */].rColor(this.vsColor, opacity);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-35d65264","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsDivider/vsDivider.vue
var vsDivider_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-component vs-divider"},[_c('span',{staticClass:"after",style:({
      'width':_vm.getWidthAfter,
      'border-top':(_vm.vsBorderHeight + " " + _vm.vsStyle + " " + (_vm.giveColor()))
      })}),(_vm.vsIcon?true:_vm.$slots.default)?_c('span',{staticClass:"vs-divider-text",style:({
      'color':_vm.giveColor(1,'text')
      })},[(!_vm.vsIcon)?[_vm._t("default")]:_c('i',{staticClass:"material-icons icon-divider"},[_vm._v("\n      "+_vm._s(_vm.vsIcon)+"\n    ")])],2):_vm._e(),_c('span',{staticClass:"before",style:({
    'width':_vm.getWidthBefore,
    'border-top':(_vm.vsBorderHeight + " " + _vm.vsStyle + " " + (_vm.giveColor()))
    })})])}
var vsDivider_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsDivider/vsDivider.vue
function vsDivider_injectStyle (context) {
  __webpack_require__("D7v/")
}
/* script */


/* template */

/* template functional */
var vsDivider___vue_template_functional__ = false
/* styles */
var vsDivider___vue_styles__ = vsDivider_injectStyle
/* scopeId */
var vsDivider___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var vsDivider___vue_module_identifier__ = null

var vsDivider_Component = Object(component_normalizer["a" /* default */])(
  vsDivider,
  vsDivider_render,
  vsDivider_staticRenderFns,
  vsDivider___vue_template_functional__,
  vsDivider___vue_styles__,
  vsDivider___vue_scopeId__,
  vsDivider___vue_module_identifier__
)

/* harmony default export */ var vsDivider_vsDivider = (vsDivider_Component.exports);

// CONCATENATED MODULE: ./src/components/vsDivider/index.js



/* harmony default export */ var components_vsDivider = (function (Vue) {
  Vue.component(vsDivider_vsDivider.name, vsDivider_vsDivider);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsCollapse/vsCollapse.vue
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsCollapse = ({
  inheritAttrs: false,
  name: "vs-collapse",
  props: {
    vsColor: {
      default: 'primary',
      type: String
    }
  },
  data: function data() {
    return {
      hoverx: false
    };
  },
  mounted: function mounted() {// console.log("mounted>>>>>>",_color.getColor('rgb(189, 21, 74)'));
  },
  computed: {
    styles: function styles() {
      if (!this.isColor()) {
        return {
          color: this.vsColor,
          background: this.hoverx ? utils_color["a" /* default */].getColor(this.vsColor, .1) : null
        };
      }
    }
  },
  methods: {
    isColor: function isColor() {
      return utils_color["a" /* default */].isColor(this.vsColor);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-230717e1","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsCollapse/vsCollapse.vue
var vsCollapse_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g(_vm._b({staticClass:"vs-component vs-collapse vs-collapse-",class:[("vs-collapse-" + (_vm.isColor()?_vm.vsColor:null))],style:(_vm.styles),on:{"mouseover":function($event){_vm.hoverx=true},"mouseout":function($event){_vm.hoverx=false}}},'div',_vm.$attrs,false),_vm.$listeners),[_vm._v("\n  Component vsCollapse\n")])}
var vsCollapse_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsCollapse/vsCollapse.vue
function vsCollapse_injectStyle (context) {
  __webpack_require__("eNHC")
}
/* script */


/* template */

/* template functional */
var vsCollapse___vue_template_functional__ = false
/* styles */
var vsCollapse___vue_styles__ = vsCollapse_injectStyle
/* scopeId */
var vsCollapse___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var vsCollapse___vue_module_identifier__ = null

var vsCollapse_Component = Object(component_normalizer["a" /* default */])(
  vsCollapse,
  vsCollapse_render,
  vsCollapse_staticRenderFns,
  vsCollapse___vue_template_functional__,
  vsCollapse___vue_styles__,
  vsCollapse___vue_scopeId__,
  vsCollapse___vue_module_identifier__
)

/* harmony default export */ var vsCollapse_vsCollapse = (vsCollapse_Component.exports);

// CONCATENATED MODULE: ./src/components/vsCollapse/index.js



/* harmony default export */ var components_vsCollapse = (function (Vue) {
  Vue.component(vsCollapse_vsCollapse.name, vsCollapse_vsCollapse);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/layout/vsRow/vsRow.vue
//
//
//
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-76095863","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/layout/vsRow/vsRow.vue
var vsRow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-row",style:({
  'align-items':_vm.vsAlign,
  'justify-content':_vm.vsJustify,
  'display':_vm.vsType,
  'width':_vm.vsW*100/12+'%'})},[_vm._t("default")],2)}
var vsRow_staticRenderFns = []

// CONCATENATED MODULE: ./src/layout/vsRow/vsRow.vue
function vsRow_injectStyle (context) {
  __webpack_require__("lIGR")
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

var vsRow_Component = Object(component_normalizer["a" /* default */])(
  vsRow,
  vsRow_render,
  vsRow_staticRenderFns,
  vsRow___vue_template_functional__,
  vsRow___vue_styles__,
  vsRow___vue_scopeId__,
  vsRow___vue_module_identifier__
)

/* harmony default export */ var vsRow_vsRow = (vsRow_Component.exports);

// CONCATENATED MODULE: ./src/layout/vsRow/index.js



/* harmony default export */ var layout_vsRow = (function (Vue) {
  Vue.component(vsRow_vsRow.name, vsRow_vsRow);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/layout/vsCol/vsCol.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9c4ca36e","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/layout/vsCol/vsCol.vue
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

// CONCATENATED MODULE: ./src/layout/vsCol/vsCol.vue
function vsCol_injectStyle (context) {
  __webpack_require__("tDJV")
}
/* script */


/* template */

/* template functional */
var vsCol___vue_template_functional__ = false
/* styles */
var vsCol___vue_styles__ = vsCol_injectStyle
/* scopeId */
var vsCol___vue_scopeId__ = "data-v-9c4ca36e"
/* moduleIdentifier (server only) */
var vsCol___vue_module_identifier__ = null

var vsCol_Component = Object(component_normalizer["a" /* default */])(
  vsCol,
  vsCol_render,
  vsCol_staticRenderFns,
  vsCol___vue_template_functional__,
  vsCol___vue_styles__,
  vsCol___vue_scopeId__,
  vsCol___vue_module_identifier__
)

/* harmony default export */ var vsCol_vsCol = (vsCol_Component.exports);

// CONCATENATED MODULE: ./src/layout/vsCol/index.js



/* harmony default export */ var layout_vsCol = (function (Vue) {
  Vue.component(vsCol_vsCol.name, vsCol_vsCol);
});
// CONCATENATED MODULE: ./src/components/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "vsButton", function() { return components_vsButton; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "vsSelect", function() { return components_vsSelect; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "vsSwitch", function() { return components_vsSwitch; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "vsCheckbox", function() { return components_vsCheckBox; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "vsRadio", function() { return components_vsRadio; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "vsInput", function() { return components_vsInput; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "vsTabs", function() { return components_vsTabs; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "vsTab", function() { return components_vsTab; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "vsSlider", function() { return components_vsSlider; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "vsInputNumber", function() { return components_vsInputNumber; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "vsUpload", function() { return components_vsUpload; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "vsPopup", function() { return components_vsPopup; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "vsAlert", function() { return components_vsAlert; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "vsChip", function() { return components_vsChip; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "vsChips", function() { return components_vsChips; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "vsProgress", function() { return components_vsProgress; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "vsCard", function() { return components_vsCard; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "vsTopbar", function() { return components_vsTopbar; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "vsList", function() { return components_vsList; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "vsRow", function() { return layout_vsRow; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "vsCol", function() { return layout_vsCol; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "vsAvatar", function() { return components_vsAvatar; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "vsPagination", function() { return components_vsPagination; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "vsBreadcrumb", function() { return components_vsBreadcrumb; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "vsSideBar", function() { return components_vsSideBar; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "vsDialog", function() { return components_vsDialog; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "vsDropDown", function() { return components_vsDropDown; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "vsDivider", function() { return components_vsDivider; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "vsCollapse", function() { return components_vsCollapse; });




























 //New Component import
// import vsAnchor from './vsAnchor'
// import vsLink from './vsAnchor'
//layout





/***/ }),

/***/ "bHj3":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ "buCQ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "bvvC":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("Bgvs");
var ITERATOR = __webpack_require__("9vqU")('iterator');
var Iterators = __webpack_require__("6dI7");
module.exports = __webpack_require__("ReUz").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "cXIJ":
/***/ (function(module, exports, __webpack_require__) {

var _getIterator = __webpack_require__("xgqT");

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "d4Yu":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ "dqKj":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ "eKRk":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "eNHC":
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

/***/ "gUSI":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("6dI7");
var ITERATOR = __webpack_require__("9vqU")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


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

/***/ "gtSe":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "h1ML":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ "hfZT":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "i+Fi":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("NNME");

/***/ }),

/***/ "iCuG":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("+lEw");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
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

/***/ "iuwz":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "j9GS":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("tsgq");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "j9N/":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ "jbFm":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "kAgk":
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

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

/***/ "kxMS":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "lIGR":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "lRwf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lRwf__;

/***/ }),

/***/ "lVK7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_modules_es7_object_values__ = __webpack_require__("0+C+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_modules_es7_object_values___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_modules_es7_object_values__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_index_css__ = __webpack_require__("OGwZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_config_styl__ = __webpack_require__("yDTz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_config_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_config_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__("bGai");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__functions__ = __webpack_require__("xsKA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_vsTooltip_vsTooltip_js__ = __webpack_require__("Ryeo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_easing_js__ = __webpack_require__("9umH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_theme_js__ = __webpack_require__("Tgw5");









var Vuesax = {
  install: function install(Vue, options) {
    // Register a global custom directive called `v-focus`
    Vue.directive('focus', {
      // When the bound element is inserted into the DOM...
      inserted: function inserted(el) {
        // Focus the element
        el.focus();
      }
    }); //change defaults colors

    if (options) {
      if (options.hasOwnProperty('theme')) {
        if (options.theme.hasOwnProperty('colors')) {
          if (typeof window !== 'undefined' || process.browser) {
            __WEBPACK_IMPORTED_MODULE_7__utils_theme_js__["a" /* default */].vsfunction(options.theme.colors, options.server);
          }
        }
      }
    }

    Object.values(__WEBPACK_IMPORTED_MODULE_3__components__).forEach(function (vsComponent) {
      Vue.use(vsComponent);
    });
    Object(__WEBPACK_IMPORTED_MODULE_4__functions__["a" /* default */])(Vue);
    Vue.prototype.$vs.easing = __WEBPACK_IMPORTED_MODULE_6__utils_easing_js__["a" /* default */];
    Vue.directive('tooltip', __WEBPACK_IMPORTED_MODULE_5__directives_vsTooltip_vsTooltip_js__["a" /* default */]);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vuesax);
}

/* harmony default export */ __webpack_exports__["default"] = (Vuesax);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("0Lb0")))

/***/ }),

/***/ "mNwb":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("NQB/");
__webpack_require__("tfnZ");
module.exports = __webpack_require__("q+MV").f('iterator');


/***/ }),

/***/ "n5ki":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_modules_es7_array_includes__ = __webpack_require__("LZLU");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_modules_es7_array_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_modules_es7_array_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_modules_es6_regexp_replace__ = __webpack_require__("e5kn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_modules_es6_regexp_replace___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_modules_es6_regexp_replace__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_modules_es6_regexp_search__ = __webpack_require__("YjWS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_modules_es6_regexp_search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_modules_es6_regexp_search__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_modules_es6_regexp_split__ = __webpack_require__("iiot");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_modules_es6_regexp_split___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_modules_es6_regexp_split__);








/* harmony default export */ __webpack_exports__["a"] = ({
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
      if (alphax == 1) {} else {
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
          return "rgba(var(--".concat(colorx, "),").concat(opacity, ")");
        } else {
          console.warn("[Vuesax] : The color of the component can not be processed, only colors are accepted (RGB or HEX), or the color is not one of the main ones ".concat(JSON.stringify(vscolors), " The unprocessed color is > ").concat(colorx));
          return "rgba(var(--primary),".concat(opacity, ")");
        }
      }
    } else {
      return "rgba(var(--primary),".concat(opacity, ")");
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
  setCssVariable: function setCssVariable(propertyName, value, isServer) {
    // if(!isServer || process.browser){
    if (typeof window !== 'undefined' || process.browser) {
      document.documentElement.style.setProperty(propertyName, value);
    } // }

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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("0Lb0")))

/***/ }),

/***/ "n62D":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


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

/***/ "nx0Z":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("9vqU")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "o3KC":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


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

/***/ "pwgQ":
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "q+MV":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("9vqU");


/***/ }),

/***/ "q3hB":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "qO4g":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("+euK");

/***/ }),

/***/ "qdiF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("f61C");
var createDesc = __webpack_require__("WXTh");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


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

/***/ "rzQm":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__("pwgQ");

var iterableToArray = __webpack_require__("uJO0");

var nonIterableSpread = __webpack_require__("kAgk");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "tDJV":
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

/***/ "uJO0":
/***/ (function(module, exports, __webpack_require__) {

var _Array$from = __webpack_require__("i+Fi");

var _isIterable = __webpack_require__("vzVI");

function _iterableToArray(iter) {
  if (_isIterable(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _Array$from(iter);
}

module.exports = _iterableToArray;

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

/***/ "vY7A":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "vzVI":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("VI0S");

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

/***/ "xgqT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("MhjW");

/***/ }),

/***/ "xsKA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../Users/pc 01/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("bnAT");
var es6_function_name_default = /*#__PURE__*/__webpack_require__.n(es6_function_name);

// EXTERNAL MODULE: ../Users/pc 01/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es7.object.values.js
var es7_object_values = __webpack_require__("0+C+");
var es7_object_values_default = /*#__PURE__*/__webpack_require__.n(es7_object_values);

// EXTERNAL MODULE: ../Users/pc 01/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("e5kn");
var es6_regexp_replace_default = /*#__PURE__*/__webpack_require__.n(es6_regexp_replace);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external___commonjs___vue___commonjs2___vue___root___Vue__ = __webpack_require__("lRwf");
var external___commonjs___vue___commonjs2___vue___root___Vue___default = /*#__PURE__*/__webpack_require__.n(external___commonjs___vue___commonjs2___vue___root___Vue__);

// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__("0xDb");

// EXTERNAL MODULE: ../Users/pc 01/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.regexp.search.js
var es6_regexp_search = __webpack_require__("YjWS");
var es6_regexp_search_default = /*#__PURE__*/__webpack_require__.n(es6_regexp_search);

// EXTERNAL MODULE: ../Users/pc 01/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("iiot");
var es6_regexp_split_default = /*#__PURE__*/__webpack_require__.n(es6_regexp_split);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("Biqn");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://vuesax//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib?{"presets":["C://Users//pc 01//AppData//Roaming//npm//node_modules//@vue//cli-service-global//node_modules//@vue//babel-preset-app//index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/functions/vsNotifications/index.vue





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsNotifications = ({
  data: function data() {
    return {
      fullWidth: false,
      icon: null,
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
  computed: {
    fillingStyle: function fillingStyle() {
      return {
        left: this.cords.left ? '-100px' : null,
        right: this.cords.right ? '-100px' : null,
        background: this.color,
        height: "".concat(this.widthx * 2, "px"),
        width: "".concat(this.widthx * 2, "px") // transform: `translate(${this.widthx/1.5}px,${this.widthx/1.5}px)`

      };
    },
    stylex: function stylex() {
      return objectSpread_default()({}, this.cords, {
        color: this.colorText,
        width: this.fullWidth ? "calc(100% - 14px)" : "",
        maxWidth: this.fullWidth ? 'none' : "350px"
      });
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
      var h = el.scrollHeight;
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
      } // console.log(hx);

    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8272d8b8","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/functions/vsNotifications/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"noti"},on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"leave":_vm.leave}},[(_vm.active)?_c('div',{ref:"noti",staticClass:"vs-component vs-notifications",class:[("vs-noti-" + _vm.position),("vs-noti-" + _vm.color),{'activeNoti':_vm.active}],style:(_vm.stylex),on:{"click":_vm.clickNoti}},[_c('div',{staticClass:"content-noti"},[_c('div',{staticClass:"con-text-noti"},[_c('h3',{domProps:{"innerHTML":_vm._s(_vm.title)}}),_c('p',{domProps:{"innerHTML":_vm._s(_vm.text)}}),_vm._t("default")],2),(_vm.icon)?_c('i',{staticClass:"vs-icon-noti material-icons"},[_vm._v("\n         "+_vm._s(_vm.icon)+"\n       ")]):_vm._e()]),_c('span',{staticClass:"filling",style:(_vm.fillingStyle)})]):_vm._e()])}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__("XyMi");

// CONCATENATED MODULE: ./src/functions/vsNotifications/index.vue
function injectStyle (context) {
  __webpack_require__("/pvz")
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

var Component = Object(component_normalizer["a" /* default */])(
  vsNotifications,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var functions_vsNotifications = (Component.exports);

// CONCATENATED MODULE: ./src/functions/vsNotifications/index.js





var NotiConstructor = external___commonjs___vue___commonjs2___vue___root___Vue___default.a.extend(functions_vsNotifications);
var instance;

var _this;

/* harmony default export */ var src_functions_vsNotifications = ({
  name: 'notify',
  vsfunction: function vsfunction(parameters) {
    if (parameters.fullWidth) {
      if (parameters.position) {
        parameters.position = parameters.position.replace('right', 'left');
      }
    }

    instance = new NotiConstructor({
      data: parameters
    });
    instance.vm = instance.$mount();
    parameters.click ? instance.vm.$on('click', parameters.click) : null;
    utils["a" /* default */].insertBody(instance.vm.$el);
  }
});
// EXTERNAL MODULE: ./src/functions/vsMessageBox/vsMessageBox.css
var vsMessageBox = __webpack_require__("AG8I");
var vsMessageBox_default = /*#__PURE__*/__webpack_require__.n(vsMessageBox);

// CONCATENATED MODULE: ./src/functions/vsMessageBox/vsMessageBox.js



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
// EXTERNAL MODULE: ./src/functions/vsLoading/vsLoading.css
var vsLoading = __webpack_require__("DRbS");
var vsLoading_default = /*#__PURE__*/__webpack_require__.n(vsLoading);

// CONCATENATED MODULE: ./src/functions/vsLoading/vsLoading.js

var vsLoading_vsLoading = {
  name: 'loading',
  vsfunction: function vsfunction(parameters) {
    var colorx = 'rgb(var(--primary))';
    var backgroundx = 'rgba(255, 255, 255,.8)';
    var containerx = document.body;
    var scalex = 1;

    if (parameters !== undefined) {
      if (parameters.hasOwnProperty('color')) {
        colorx = /(^#(([a-f]|[A-F]|[0-9]){3}|([a-f]|[A-F]|[0-9]){6})$|^rgb\((1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\)$|^rgba\((1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?(0?(\.\d+)?|1(\.0+)?)\)$|^transparent$)/.test(parameters.color) ? parameters.color : "rgb(var(--".concat(parameters.color, "))");
      }

      if (parameters.hasOwnProperty('background')) {
        backgroundx = /(^#(([a-f]|[A-F]|[0-9]){3}|([a-f]|[A-F]|[0-9]){6})$|^rgb\((1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\)$|^rgba\((1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?(0?(\.\d+)?|1(\.0+)?)\)$|^transparent$)/.test(parameters.background) ? parameters.background : "rgb(var(--".concat(parameters.background, "))");
      }

      if (parameters.hasOwnProperty('container')) {
        containerx = document.querySelectorAll(parameters.container);
      }

      if (parameters.hasOwnProperty('scale')) {
        scalex = /^\d+(\.\d+)?$/.test(parameters.scale) ? parameters.scale : 1;
      }
    }

    var conLoading = document.createElement('div');
    conLoading.classList.add('vs-con-loading');
    conLoading.setAttribute('style', "background: ".concat(backgroundx, ";"));
    conLoading.innerHTML = "\n      <div class=\"vs-loading-default\" style=\"transform: scale(".concat(scalex, ");\">\n        <div style=\"border-left: 4px solid ").concat(colorx, ";\" class=\"linea1\"></div>\n        <div style=\"border-left: 4px solid ").concat(colorx, ";\" class=\"linea2\"></div>\n        <div style=\"border-left: 4px solid ").concat(colorx, ";\" class=\"linea3\"></div>\n      </div>\n  ");
    var loaders = [];

    if (containerx.nodeType !== 1) {
      containerx.forEach(function (containerEl) {
        var conLoadClone = conLoading.cloneNode(true);
        containerEl.insertBefore(conLoadClone, containerEl.firstChild);
        loaders.push(conLoadClone);
      });
    } else {
      loaders.push(conLoading);
      containerx.insertBefore(conLoading, containerx.firstChild);
    }

    setTimeout(function () {
      loaders.forEach(function (loader) {
        loader.classList.add('loading-activo');
      });
    }, 10);
  }
};
var vsLoadingClose = {
  name: 'loading',
  subName: 'close',
  vsfunction: function vsfunction(parameters) {
    var conLoading = document.querySelector('.vs-con-loading');

    if (parameters !== undefined) {
      if (parameters.hasOwnProperty('loadingQuery')) {
        conLoading = document.querySelectorAll(parameters.loadingQuery);
      }
    }

    if (conLoading.nodeType !== 1) {
      conLoading.forEach(function (loadingNode) {
        loadingNode.style.opacity = 0;
      });
    } else {
      conLoading.style.opacity = 0;
    }

    setTimeout(function () {
      if (conLoading.nodeType !== 1) {
        conLoading.forEach(function (loadingNode) {
          loadingNode.remove();
        });
      } else {
        conLoading.remove();
      }
    }, 300);
  }
};
// EXTERNAL MODULE: ./src/utils/theme.js
var theme = __webpack_require__("Tgw5");

// CONCATENATED MODULE: ./src/functions/index.js




// Functions


 // import {prompt} from './vsMessageBox/vsMessageBox.js'


 //theme


var vsFunctions = {
  vsNotifications: src_functions_vsNotifications,
  message: message,
  confirm: vsMessageBox_confirm,
  // prompt,
  // vsDialog,
  vsLoading: vsLoading_vsLoading,
  vsLoadingClose: vsLoadingClose,
  vsTheme: theme["a" /* default */]
};
/* harmony default export */ var functions = __webpack_exports__["a"] = (function (Vue) {
  Vue.prototype.$vs = {};
  Object.values(vsFunctions).forEach(function (vsFunctions) {
    if (vsFunctions.hasOwnProperty('subName')) {
      Vue.prototype.$vs[vsFunctions.name][vsFunctions.subName] = vsFunctions.vsfunction;
    } else {
      Vue.prototype.$vs[vsFunctions.name] = vsFunctions.vsfunction;
    }
  });
});

/***/ }),

/***/ "yDTz":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ "yjdV":
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

/***/ "zdWb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("+lEw");
var get = __webpack_require__("/d2Y");
module.exports = __webpack_require__("ReUz").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "zix/":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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
});
//# sourceMappingURL=vuesax.umd.js.map