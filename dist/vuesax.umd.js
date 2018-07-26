(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vuesax"] = factory(require("vue"));
	else
		root["vuesax"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_i7_w__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "m/SN");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+hOW":
/***/ (function(module, exports, __webpack_require__) {

// @@search logic
__webpack_require__("uQXF")('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});


/***/ }),

/***/ "/85P":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("9Yck");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("6adc8048", content, true, {});

/***/ }),

/***/ "/fpy":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("hYiM");
var global = __webpack_require__("XL9B");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("Vxht") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "/kYV":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0/6w":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("BI7h");
var $includes = __webpack_require__("3QDW")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("JYON")('includes');


/***/ }),

/***/ "016R":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "05iV":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("3boE");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("1a36c090", content, true, {});

/***/ }),

/***/ "065J":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "11gz":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "1FdL":
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

/***/ "1K6q":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("BXK8");
var get = __webpack_require__("J6hA");
module.exports = __webpack_require__("hYiM").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "1Sho":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("P6eE");
var IE8_DOM_DEFINE = __webpack_require__("uqPa");
var toPrimitive = __webpack_require__("BmaU");
var dP = Object.defineProperty;

exports.f = __webpack_require__("m6pe") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

/***/ "1hSx":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("lz+/");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("26f7df1e", content, true, {});

/***/ }),

/***/ "1sQD":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("QfNg");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "23iW":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("rDDT");

/***/ }),

/***/ "2S0M":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("mibP");
var global = __webpack_require__("XL9B");
var hide = __webpack_require__("J3mi");
var Iterators = __webpack_require__("kluS");
var TO_STRING_TAG = __webpack_require__("Z+hs")('toStringTag');

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

/***/ "2tc/":
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__("uQXF")('replace', 2, function (defined, REPLACE, $replace) {
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

/***/ "2xrd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("JYON");
var step = __webpack_require__("11gz");
var Iterators = __webpack_require__("Rb8P");
var toIObject = __webpack_require__("ltqc");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("mISE")(Array, 'Array', function (iterated, kind) {
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

/***/ "32CY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("MVZn");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./src/utils/color.js
var color = __webpack_require__("Xp+x");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsInput/vsInput.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsInput = ({
  name: 'VsInput',
  inheritAttrs: false,
  props: {
    value: {},
    vsLabelPlaceholder: {
      default: null,
      type: [String, Number]
    },
    vsLabel: {
      default: null,
      type: [String, Number]
    },
    vsIcon: {
      default: null,
      type: String
    },
    vsIconAfter: {
      default: false,
      type: [Boolean, String]
    },
    vsIconPack: {
      default: 'material-icons',
      type: String
    },
    vsColor: {
      default: 'primary',
      type: String
    },
    vsSuccess: {
      default: false,
      type: Boolean
    },
    vsDanger: {
      default: false,
      type: Boolean
    },
    vsWarning: {
      default: false,
      type: Boolean
    },
    vsSuccessText: {
      default: null,
      type: String
    },
    vsDangerText: {
      default: null,
      type: String
    },
    vsWarningText: {
      default: null,
      type: String
    },
    vsDescriptionText: {
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
      return {
        border: "1px solid ".concat(this.isFocus ? color["a" /* default */].getColor(this.vsColor, 1) : 'rgba(0, 0, 0,.2)')
      };
    },
    styleLabel: function styleLabel() {
      return {
        color: this.isFocus ? color["a" /* default */].getColor(this.vsColor, 1) : null
      };
    },
    listeners: function listeners() {
      var _this = this;

      return objectSpread_default()({}, this.$listeners, {
        input: function input(evt) {
          _this.$emit('input', evt.target.value);
        },
        focus: function focus(evt) {
          _this.$emit('focus', evt);

          _this.isFocus = true;
        },
        blur: function blur(evt) {
          _this.$emit('blur', evt);

          _this.isFocus = false;
        }
      });
    },
    isValue: function isValue() {
      return this.vsLabelPlaceholder ? true : this.value == '';
    },
    getIcon: function getIcon() {
      var iconx = 'done';

      if (this.vsDanger) {
        iconx = 'clear';
      } else if (this.vsWarning) {
        iconx = 'warning';
      }

      return iconx;
    }
  },
  methods: {
    // animation
    beforeEnter: function beforeEnter(el) {
      el.style.height = 0;
    },
    enter: function enter(el, done) {
      var h = el.scrollHeight;
      el.style.height = h + 'px'; // this.$refs.coninput.style.paddingBottom += `${h}px`

      done();
    },
    leave: function leave(el, done) {
      var h = el.scrollHeight;
      el.style.height = 0 + 'px'; // this.$refs.coninput.style.paddingBottom -= `${h}px`
    },
    focusInput: function focusInput() {
      this.$refs.vsinput.focus();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-19f6d675","hasScoped":false,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsInput/vsInput.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"coninput",staticClass:"vs-component vs-con-input-label vs-input",class:[("vs-input-" + _vm.vsColor),{
    'isFocus':_vm.isFocus,
    'input-icon-validate-success':_vm.vsSuccess,
    'input-icon-validate-danger':_vm.vsDanger,
    'input-icon-validate-warning':_vm.vsWarning,
  }],style:(_vm.styleLabel)},[(_vm.vsLabelPlaceholder?false:_vm.vsLabel)?_c('label',{staticClass:"vs-input-label",attrs:{"for":""},on:{"click":_vm.focusInput}},[_vm._v(_vm._s(_vm.vsLabel))]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"vs-con-input"},[_c('input',_vm._g(_vm._b({ref:"vsinput",staticClass:"vs-inputx",class:{
        'hasValue':_vm.value != '',
        'hasIcon':_vm.vsIcon,
        'icon-after-input':_vm.vsIconAfter
      },style:(_vm.style),attrs:{"placeholder":null,"type":_vm.$attrs.type?_vm.$attrs.type:'text'},domProps:{"value":_vm.value}},'input',_vm.$attrs,false),_vm.listeners)),_vm._v(" "),_c('transition',{attrs:{"name":"placeholderx"}},[(_vm.isValue&&(_vm.vsLabelPlaceholder||_vm.$attrs.placeholder))?_c('span',{ref:"spanplaceholder",staticClass:"input-span-placeholder",class:{
          'vs-placeholder-label':_vm.vsLabelPlaceholder,
        },style:(_vm.styleLabel),on:{"click":_vm.focusInput}},[_vm._v("  \n        "+_vm._s(_vm.$attrs.placeholder || _vm.vsLabelPlaceholder)+"\n      ")]):_vm._e()]),_vm._v(" "),(_vm.vsIcon)?_c('i',{staticClass:"icon-inputx",class:[_vm.vsIconPack,_vm.vsIcon,{
        'icon-after':_vm.vsIconAfter,
      }],on:{"click":_vm.focusInput}},[_vm._v("\n      "+_vm._s(_vm.vsIcon)+"\n    ")]):_vm._e(),_vm._v(" "),_c('transition',{attrs:{"name":"icon-validate"}},[(_vm.vsSuccess || _vm.vsDanger || _vm.vsWarning)?_c('span',{staticClass:"input-icon-validate material-icons"},[_vm._v("\n        "+_vm._s(_vm.getIcon)+"    \n      ")]):_vm._e()])],1),_vm._v(" "),_c('transition-group',{on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"leave":_vm.leave}},[(_vm.vsSuccess)?_c('div',{key:"success",staticClass:"con-text-validation"},[_c('span',{staticClass:"span-text-validation span-text-validation-success"},[_vm._v("\n        "+_vm._s(_vm.vsSuccessText)+"\n      ")])]):(_vm.vsDanger)?_c('div',{key:"danger",staticClass:"con-text-validation span-text-validation-danger"},[_c('span',{staticClass:"span-text-validation"},[_vm._v("\n        "+_vm._s(_vm.vsDangerText)+"\n      ")])]):(_vm.vsWarning)?_c('div',{key:"warning",staticClass:"con-text-validation span-text-validation-warning"},[_c('span',{staticClass:"span-text-validation"},[_vm._v("\n        "+_vm._s(_vm.vsWarningText)+"\n      ")])]):_vm._e(),_vm._v(" "),(_vm.vsDescriptionText)?_c('div',{key:"description",staticClass:"con-text-validation span-text-validation"},[_c('span',{staticClass:"span-text-validation"},[_vm._v("\n        "+_vm._s(_vm.vsDescriptionText)+"\n      ")])]):_vm._e()])],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__("JFUb");

// CONCATENATED MODULE: ./src/components/vsInput/vsInput.vue
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
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

/***/ "3PVh":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("Vxpl");
var toIObject = __webpack_require__("ltqc");
var arrayIndexOf = __webpack_require__("3QDW")(false);
var IE_PROTO = __webpack_require__("hilu")('IE_PROTO');

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

/***/ "3QDW":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("ltqc");
var toLength = __webpack_require__("OP3+");
var toAbsoluteIndex = __webpack_require__("dSc3");
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

/***/ "3boE":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".con-vs-card-actions[data-v-1a8e5218]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:5px}", ""]);

// exports


/***/ }),

/***/ "46AW":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "47Mc":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("Vg2x");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("2141102e", content, true, {});

/***/ }),

/***/ "5WzD":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".vs-list>div[data-v-ff418a54]:first-of-type{border-radius:8px 8px 0 0;border-top:1px solid #ebebeb!important}.vs-list>div[data-v-ff418a54]:last-child{border-radius:0 0 8px 8px;border-bottom:1px solid #ebebeb!important}", ""]);

// exports


/***/ }),

/***/ "65oP":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("cyrI");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("2abb70d2", content, true, {});

/***/ }),

/***/ "6729":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "69xj":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("aRsT");
var anObject = __webpack_require__("BXK8");
var getKeys = __webpack_require__("KILR");

module.exports = __webpack_require__("GiQ9") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "6fhx":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".titlex[data-v-4163b330]{padding:15px;padding-bottom:0;font-weight:lighter}.con-icon[data-v-4163b330],.icon-alert[data-v-4163b330]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.icon-alert[data-v-4163b330]{position:relative;padding:10px;padding-right:0;padding-left:20px}.con-x[data-v-4163b330]{position:absolute;right:0;top:0;width:30px;height:30px;border-radius:50%;background:inherit;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:inherit;cursor:pointer;z-index:100;-webkit-transition:all .3s ease;transition:all .3s ease}.con-x[data-v-4163b330]:hover{background:inherit;background:rgba(0,0,0,.5);color:#fff}.con-x i[data-v-4163b330]{font-size:1.0625em;color:inherit}.fade-enter-active[data-v-4163b330],.fade-leave-active[data-v-4163b330]{-webkit-transition:all .3s;transition:all .3s}.fade-enter[data-v-4163b330],.fade-leave-to[data-v-4163b330]{max-height:0!important;margin-bottom:0!important;margin-top:0!important}.con-vs-alert[data-v-4163b330]{width:100%;background:rgba(var(--primary),.1);border-radius:10px;opacity:1;overflow:hidden;position:relative}.vs-alert[data-v-4163b330]{color:inherit;padding:15px;font-size:.9375em;position:relative}.vs-alert b[data-v-4163b330]{color:rgba(var(--primary),1)!important}", ""]);

// exports


/***/ }),

/***/ "6gWL":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "7SCD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("BI7h");
var context = __webpack_require__("ips4");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("GFCQ")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "7cJ5":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ww9l");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("623ad9b0", content, true, {});

/***/ }),

/***/ "8UWi":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("fqS3");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("65a85f06", content, true, {});

/***/ }),

/***/ "99Am":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__("aGrk");
var $getOwnPropertyDescriptor = __webpack_require__("Kj0F").f;

__webpack_require__("XTKf")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "9Kre":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("HkPn");

/***/ }),

/***/ "9Yck":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".vs-dropdown-item{z-index:100;text-align:left;border-radius:5px;width:calc(100% - 6px);margin:0 3px;list-style:none;font-weight:400!important;font-size:.9375em}.vs-dropdown-item,.vs-dropdown-item a{-webkit-transition:all .2s ease;transition:all .2s ease;position:relative}.vs-dropdown-item a{background:inherit!important;color:inherit!important;cursor:pointer;padding:5px;padding-left:10px;padding-right:10px;width:100%;display:block;color:rgba(0,0,0,.7)}.vs-dropdown-item a.disabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none!important;cursor:default;opacity:.3!important}.vs-dropdown-item.vsDivider{border-top:1px solid rgba(0,0,0,.08);margin-top:5px}", ""]);

// exports


/***/ }),

/***/ "9hsr":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ASdg":
/***/ (function(module, exports) {



/***/ }),

/***/ "AUK/":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("Qf+M");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("45ef5b0a", content, true, {});

/***/ }),

/***/ "B+Rz":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("uu7m");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "BI7h":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("mmCD");
var core = __webpack_require__("46AW");
var hide = __webpack_require__("We63");
var redefine = __webpack_require__("uspN");
var ctx = __webpack_require__("LrQF");
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

/***/ "BIcr":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("IY1P")('asyncIterator');


/***/ }),

/***/ "BXK8":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("k0IJ");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "BmaU":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("HS8k");
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

/***/ "Bnag":
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "CZ8J":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("UMRC");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "CnV9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("YAh5");

/***/ }),

/***/ "DZTM":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("krHm");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("ffcf0480", content, true, {});

/***/ }),

/***/ "DZjz":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "DnoV":
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__("mLe7");
var toIObject = __webpack_require__("ltqc");
var isEnum = __webpack_require__("Rard").f;
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

/***/ "ER0q":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "EbDI":
/***/ (function(module, exports, __webpack_require__) {

var _Array$from = __webpack_require__("Kgbp");

var _isIterable = __webpack_require__("iD3k");

function _iterableToArray(iter) {
  if (_isIterable(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _Array$from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "EdsP":
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),

/***/ "F5dI":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("Vxpl");
var toObject = __webpack_require__("CZ8J");
var IE_PROTO = __webpack_require__("hilu")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "G6OB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("pdbP");
var $export = __webpack_require__("prek");
var toObject = __webpack_require__("1sQD");
var call = __webpack_require__("Vzyb");
var isArrayIter = __webpack_require__("T84P");
var toLength = __webpack_require__("e9Gf");
var createProperty = __webpack_require__("Pcrl");
var getIterFn = __webpack_require__("J6hA");

$export($export.S + $export.F * !__webpack_require__("yZdz")(function (iter) { Array.from(iter); }), 'Array', {
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

/***/ "G91H":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("rwqN");
var toObject = __webpack_require__("1sQD");
var IE_PROTO = __webpack_require__("fEcV")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "GFCQ":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("JKqo")('match');
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

/***/ "GiQ9":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("yIdM")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "GrhR":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("2xrd");
var getKeys = __webpack_require__("mLe7");
var redefine = __webpack_require__("uspN");
var global = __webpack_require__("mmCD");
var hide = __webpack_require__("We63");
var Iterators = __webpack_require__("Rb8P");
var wks = __webpack_require__("JKqo");
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

/***/ "GzI1":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("wIja");
__webpack_require__("2S0M");
module.exports = __webpack_require__("SjeW").f('iterator');


/***/ }),

/***/ "HM0D":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".dropdownx-enter,.dropdownx-leave-to{opacity:0;-webkit-transform:translate(-100%,8px)!important;transform:translate(-100%,8px)!important}.con-vs-dropdown-menu{padding-top:10px;position:absolute;height:auto;width:auto;z-index:20000;-webkit-transform:translate(-100%);transform:translate(-100%);-webkit-transition:opacity .25s,width .3s ease,-webkit-transform .25s;transition:opacity .25s,width .3s ease,-webkit-transform .25s;transition:opacity .25s,transform .25s,width .3s ease;transition:opacity .25s,transform .25s,width .3s ease,-webkit-transform .25s}.vs-dropdown-menu{background:#fff;padding-left:0!important;border-radius:5px;-webkit-box-shadow:0 5px 25px 0 rgba(0,0,0,.1);box-shadow:0 5px 25px 0 rgba(0,0,0,.1);border:1px solid rgba(0,0,0,.1);padding-top:5px;padding-bottom:5px;position:relative}.vs-dropdown-menu .after{content:\"\";position:absolute;right:10px;top:0;width:10px;height:10px;display:block;background:#d72d13;-webkit-transform:rotate(45deg) translate(-7px);transform:rotate(45deg) translate(-7px);background:inherit;border-top:1px solid rgba(0,0,0,.1);border-left:1px solid rgba(0,0,0,.1);z-index:10}.notHeight .after{top:auto;bottom:0;border-top:1px solid transparent;border-left:1px solid transparent;border-bottom:1px solid rgba(0,0,0,.1);border-right:1px solid rgba(0,0,0,.1);-webkit-transform:rotate(45deg) translate(7px);transform:rotate(45deg) translate(7px)}.vs-dropdown-custom{padding:5px!important;padding-top:8px!important}", ""]);

// exports


/***/ }),

/***/ "HS8k":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "HYhf":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "HkPn":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("2S0M");
__webpack_require__("wIja");
module.exports = __webpack_require__("1K6q");


/***/ }),

/***/ "I1BE":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "IAT4":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "IQSt":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("aGrk");
var toLength = __webpack_require__("e9Gf");
var toAbsoluteIndex = __webpack_require__("TUO1");
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

/***/ "IY1P":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("XL9B");
var core = __webpack_require__("hYiM");
var LIBRARY = __webpack_require__("Vxht");
var wksExt = __webpack_require__("SjeW");
var defineProperty = __webpack_require__("aRsT").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "Ijbi":
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

/***/ "J3mi":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("aRsT");
var createDesc = __webpack_require__("1FdL");
module.exports = __webpack_require__("GiQ9") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "J4zp":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__("wTVA");

var iterableToArrayLimit = __webpack_require__("m0LI");

var nonIterableRest = __webpack_require__("wkBT");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "J6hA":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("x30W");
var ITERATOR = __webpack_require__("Z+hs")('iterator');
var Iterators = __webpack_require__("kluS");
module.exports = __webpack_require__("hYiM").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "JDZq":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("1Sho");
var anObject = __webpack_require__("P6eE");
var getKeys = __webpack_require__("mLe7");

module.exports = __webpack_require__("m6pe") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "JFUb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
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

/***/ "JKqo":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("auWe")('wks');
var uid = __webpack_require__("Mp6I");
var Symbol = __webpack_require__("mmCD").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "JYON":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("JKqo")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("We63")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "KEfp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("rb7q");
var descriptor = __webpack_require__("1FdL");
var setToStringTag = __webpack_require__("ZCy8");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("J3mi")(IteratorPrototype, __webpack_require__("Z+hs")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "KILR":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ZboS");
var enumBugKeys = __webpack_require__("ER0q");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "KNps":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("IY1P")('observable');


/***/ }),

/***/ "Kgbp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("chLf");

/***/ }),

/***/ "Kj0F":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("HYhf");
var createDesc = __webpack_require__("1FdL");
var toIObject = __webpack_require__("aGrk");
var toPrimitive = __webpack_require__("ePMb");
var has = __webpack_require__("rwqN");
var IE8_DOM_DEFINE = __webpack_require__("XlI8");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("GiQ9") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "L6r6":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".fadex-enter-active[data-v-74922580],.fadex-leave-active[data-v-74922580]{-webkit-transition:opacity .3s;transition:opacity .3s}.fadex-enter[data-v-74922580],.fadex-leave-to[data-v-74922580]{opacity:0}.fadex-enter-active .vs-popup[data-v-74922580]{-webkit-animation:bounce-in-data-v-74922580 .3s;animation:bounce-in-data-v-74922580 .3s}.fadex-leave-active .vs-popup[data-v-74922580]{-webkit-transform:scale(1.05);transform:scale(1.05)}@-webkit-keyframes bounce-in-data-v-74922580{0%{-webkit-transform:scale(.8);transform:scale(.8)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes bounce-in-data-v-74922580{0%{-webkit-transform:scale(.8);transform:scale(.8)}to{-webkit-transform:scale(1);transform:scale(1)}}.con-htmlx[data-v-74922580]{padding:20px;overflow:auto;max-height:calc(100vh - 100px)}.vs-popup[data-v-74922580]{width:calc(100% - 30px);margin:15px;max-width:1000px;max-height:calc(100vh - 30px);background:#fff;border-radius:10px;-webkit-transform:scale(1);transform:scale(1);-webkit-transition:all .3s ease;transition:all .3s ease}.con-popup header[data-v-74922580]{width:100%;position:relative;border-bottom:1px solid rgba(0,0,0,.05)}.con-popup header h2[data-v-74922580]{font-weight:lighter;width:100%;padding:10px;position:relative;padding-left:20px;color:inherit}.vs-popup-cancel[data-v-74922580]{position:absolute;top:-10px;right:-10px;width:50px;height:50px;border-radius:10px;-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,.2);box-shadow:0 2px 10px 0 rgba(0,0,0,.2);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;-webkit-transition:all .3s ease;transition:all .3s ease}.vs-popup-cancel[data-v-74922580]:hover{-webkit-transform:scale(1.1);transform:scale(1.1)}.vs-popup-cancel:hover span[data-v-74922580]{color:#fff}.con-popup[data-v-74922580]{width:100%;position:fixed;left:0;top:0;height:100%;background:rgba(0,0,0,.5);z-index:20000;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.fullscreen[data-v-74922580]{width:100%!important;height:100%!important;max-width:100%}", ""]);

// exports


/***/ }),

/***/ "LrQF":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("IAT4");
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

/***/ "MVZn":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("j1ok");

var _Object$getOwnPropertySymbols = __webpack_require__("r9tm");

var _Object$keys = __webpack_require__("iVxW");

var defineProperty = __webpack_require__("lSNA");

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

/***/ "Mp6I":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "Mrwf":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("bb+b")('meta');
var isObject = __webpack_require__("k0IJ");
var has = __webpack_require__("rwqN");
var setDesc = __webpack_require__("aRsT").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("yIdM")(function () {
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

/***/ "NByB":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("HS8k");
var cof = __webpack_require__("6729");
var MATCH = __webpack_require__("JKqo")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "NWrc":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("1Sho").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("m6pe") && dP(FProto, NAME, {
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

/***/ "NuEw":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ZR6H");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("0718ecb9", content, true, {});

/***/ }),

/***/ "OAUf":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "OP3+":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("016R");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "OX+m":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("2S0M");
__webpack_require__("wIja");
module.exports = __webpack_require__("URfo");


/***/ }),

/***/ "P6eE":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("HS8k");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "PbkF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("rsxx");
var descriptor = __webpack_require__("t/YF");
var setToStringTag = __webpack_require__("pgI9");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("We63")(IteratorPrototype, __webpack_require__("JKqo")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "Pcrl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("aRsT");
var createDesc = __webpack_require__("1FdL");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "Q9I0":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("sUDV");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("83bc4b64", content, true, {});

/***/ }),

/***/ "QewL":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".con-sidebar-group .labelx{padding:8px;padding-left:20px;-webkit-transition:all .25s ease;transition:all .25s ease;position:relative;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.con-sidebar-group .labelx.activeChild{background:#769f1d!important}.con-sidebar-group .labelx i.material-icons{margin-right:10px;font-size:1.25em}.con-sidebar-group .labelx .icon-arrowx{position:absolute;right:0;font-size:1.3125em;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:-webkit-transform .25s ease;transition:-webkit-transform .25s ease;transition:transform .25s ease;transition:transform .25s ease,-webkit-transform .25s ease}.con-sidebar-group ul{-webkit-transition:all .25s ease;transition:all .25s ease;overflow:hidden;padding-left:0;position:relative}.con-sidebar-group ul li{padding-left:10px}.con-sidebar-group a:hover{-webkit-transform:translate(0)!important;transform:translate(0)!important;border-radius:0!important;-webkit-box-shadow:none!important;box-shadow:none!important}.openx{border-bottom:1px solid rgba(0,0,0,.06)}.openx:last-child{border-bottom:0 solid rgba(0,0,0,.06)}.openx>.labelx{background:#f8f8f8}.openx>.labelx>.icon-arrowx{-webkit-transform:translateY(-50%) rotate(180deg);transform:translateY(-50%) rotate(180deg)}.openx .con-sidebar-group .labelx,.openx .con-sidebar-group a{padding-left:30px}", ""]);

// exports


/***/ }),

/***/ "Qf+M":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".vs-card>div{border-top-right-radius:0!important;border-top-left-radius:0!important}.vs-card>div:first-child,.vs-card>div:first-child>img{border-top-right-radius:8px!important;border-top-left-radius:8px!important}", ""]);

// exports


/***/ }),

/***/ "QfNg":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "RIqP":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__("Ijbi");

var iterableToArray = __webpack_require__("EbDI");

var nonIterableSpread = __webpack_require__("Bnag");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "Rard":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "Rb8P":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "Re+E":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("XC3U");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("60e19924", content, true, {});

/***/ }),

/***/ "SZ7m":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "SjeW":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("Z+hs");


/***/ }),

/***/ "T4Zd":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".vs-pagination li.goto .con-input{width:60px;margin-top:5px}", ""]);

// exports


/***/ }),

/***/ "T84P":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("kluS");
var ITERATOR = __webpack_require__("Z+hs")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "TUO1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("trsR");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "UMRC":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "UQJJ":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("uu7m");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "URfo":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("x30W");
var ITERATOR = __webpack_require__("Z+hs")('iterator');
var Iterators = __webpack_require__("kluS");
module.exports = __webpack_require__("hYiM").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "Vg2x":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".vs-list-header[data-v-2c87fd13]{border-left:3px solid red;background-color:#f4f4f4;border-left:3px solid rgba(0,0,0,.1);-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;font-weight:500;position:relative;white-space:nowrap}.vs-list-header .list-icon[data-v-2c87fd13],.vs-list-header[data-v-2c87fd13]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-list-header .list-icon i[data-v-2c87fd13]{font-size:1.5rem;margin:16px;margin-right:0}.vs-list-header .list-titles[data-v-2c87fd13]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:8px;margin-left:10px}.vs-list-header .list-titles .list-title[data-v-2c87fd13]{font-size:1rem}.vs-list-header .list-titles .list-subtitle[data-v-2c87fd13]{font-size:.8rem}", ""]);

// exports


/***/ }),

/***/ "Vxht":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "Vxpl":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "Vzyb":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("BXK8");
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

/***/ "We63":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("1Sho");
var createDesc = __webpack_require__("t/YF");
module.exports = __webpack_require__("m6pe") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "XC3U":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".vs-list-item[data-v-288a9c0b]{border-left:1px solid #ebebeb;border-right:1px solid #ebebeb;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;font-weight:500;position:relative;white-space:nowrap}.vs-list-item .list-avatar[data-v-288a9c0b],.vs-list-item[data-v-288a9c0b]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-list-item .list-avatar[data-v-288a9c0b]{margin-left:10px}.vs-list-item .list-icon[data-v-288a9c0b]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-list-item .list-icon i[data-v-288a9c0b]{font-size:1.5rem;margin:16px;margin-right:0}.vs-list-item .list-titles[data-v-288a9c0b]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:8px;margin-left:10px}.vs-list-item .list-titles .list-title[data-v-288a9c0b]{font-size:1rem}.vs-list-item .list-titles .list-subtitle[data-v-288a9c0b]{font-size:.8rem}.vs-list-item .list-slot[data-v-288a9c0b]{margin-left:auto}", ""]);

// exports


/***/ }),

/***/ "XL9B":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "XTKf":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("prek");
var core = __webpack_require__("hYiM");
var fails = __webpack_require__("yIdM");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "XlI8":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("GiQ9") && !__webpack_require__("yIdM")(function () {
  return Object.defineProperty(__webpack_require__("sert")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "Xp+x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0/6w");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2tc/");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+hOW");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rQ4u");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__);








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
          return "rgba(var(--".concat(colorx, "),").concat(opacity, ")");
        } else {
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

/***/ }),

/***/ "YAh5":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("YW0F");
var $Object = __webpack_require__("hYiM").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "YW0F":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("prek");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("GiQ9"), 'Object', { defineProperty: __webpack_require__("aRsT").f });


/***/ }),

/***/ "Z+hs":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("/fpy")('wks');
var uid = __webpack_require__("bb+b");
var Symbol = __webpack_require__("XL9B").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "ZCy8":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("aRsT").f;
var has = __webpack_require__("rwqN");
var TAG = __webpack_require__("Z+hs")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "ZR6H":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".vs-breadcrumb[data-v-51b6c581],ol[data-v-51b6c581]{display:-webkit-box;display:-ms-flexbox;display:flex}ol[data-v-51b6c581]{-ms-flex-wrap:wrap;flex-wrap:wrap;padding:.75rem 1rem}a[data-v-51b6c581]{-webkit-transition:all .2s ease;transition:all .2s ease;color:rgba(0,0,0,.4)}a[data-v-51b6c581]:focus,a[data-v-51b6c581]:hover{color:rgba(0,0,0,.7);text-decoration:none!important}li.vs-active[data-v-51b6c581]{cursor:default}.separator[data-v-51b6c581]{color:rgba(0,0,0,.4);padding:0 .5rem}.material-icons[data-v-51b6c581]{vertical-align:middle;margin-top:-2px;font-size:inherit}.vs-align-left[data-v-51b6c581]{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.vs-align-center[data-v-51b6c581]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-align-right[data-v-51b6c581]{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.disabled-link[data-v-51b6c581]{opacity:.5;pointer-events:none}", ""]);

// exports


/***/ }),

/***/ "ZboS":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("rwqN");
var toIObject = __webpack_require__("aGrk");
var arrayIndexOf = __webpack_require__("IQSt")(false);
var IE_PROTO = __webpack_require__("fEcV")('IE_PROTO');

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

/***/ "a82l":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("iNV5");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("68e307a6", content, true, {});

/***/ }),

/***/ "aGpG":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".sidebarx-enter-active,.sidebarx-enter-active .vs-sidebar,.sidebarx-leave-active,.sidebarx-leave-active .vs-sidebar{-webkit-transition:all .25s;transition:all .25s}.sidebarx-enter .vs-sidebar,.sidebarx-leave-to .vs-sidebar{-webkit-transform:translate(-100%)!important;transform:translate(-100%)!important}.sidebarx-enter-active .con-darkx,.sidebarx-leave-active .con-darkx{-webkit-transition:all .25s ease!important;transition:all .25s ease!important}.sidebarx-enter .con-darkx,.sidebarx-leave-to .con-darkx{opacity:0!important}.con-sidebar{-webkit-transition:all .25s;transition:all .25s;height:100%;position:absolute;left:0;top:0;width:100%;z-index:10000;overflow:hidden}.con-sidebar .expand-reduce{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;position:relative;width:100%}.con-sidebar .expand-reduce i{position:relative;display:block;padding:7px;cursor:pointer}.con-sidebar.body-sidebar{position:fixed!important}.con-sidebar .con-darkx{position:absolute;width:100%;height:100%;left:0;top:0;opacity:1;background:rgba(3,7,15,.2)}.con-sidebar .vs-sidebar{width:calc(100% - 20px);max-width:270px;height:100%;position:absolute;left:0;top:0;-webkit-box-shadow:5px 0 20px 0 rgba(0,0,0,.1);box-shadow:5px 0 20px 0 rgba(0,0,0,.1);background:#fff;display:block;-webkit-transform:translate(0);transform:translate(0);-webkit-transition:all .3s ease;transition:all .3s ease}.con-sidebar .vs-sidebar .ulx{padding:0;overflow:auto;height:100%}.con-sidebar .vs-sidebar header{padding-top:20px}.reducex{max-width:60px!important}.reducex .expand-reduce{width:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.reducex li{width:45px!important;height:45px!important;border-radius:10px;margin-left:7.5px;margin-top:5px!important;margin-bottom:5px!important;padding-left:0!important;-webkit-box-shadow:0 8px 30px 4px rgba(0,0,0,.08);box-shadow:0 8px 30px 4px rgba(0,0,0,.08)}.reducex li,.reducex li.active-item .vs-tagx{background:#fff}.reducex li.active-item a{color:#fff!important}.reducex li.active-item:after{border-radius:10px;width:4px;display:none;height:30px!important}.reducex li .vs-tagx{width:7px!important;height:7px!important;right:5px;padding:0!important;overflow:hidden;color:hsla(0,0%,100%,0)!important;top:5px!important;position:absolute!important;-webkit-transform:translate(0)!important;transform:translate(0)!important}.reducex li a{padding:0!important;position:absolute;width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;margin:0!important}.reducex li a .material-icons{margin-right:0!important}.reducex li .only-reduse{display:block!important}.reducex li .textx_span{display:none}.reducex li .icon-arrowx{font-size:.9375em!important;top:9px!important;right:1px!important;margin-right:0!important}.reducex .labelx{padding:0!important;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.reducex .labelx i{margin-right:0!important}.reducex .active-item{background:rgb(var(--primary))}.vsStatic{position:relative;display:block;width:100%;width:280px}.vsStatic .vs-sidebar{-webkit-box-sizing:border-box;box-sizing:border-box;border-right:1px solid rgba(0,0,0,.1);width:100%!important}", ""]);

// exports


/***/ }),

/***/ "aGrk":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("B+Rz");
var defined = __webpack_require__("QfNg");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "aRsT":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("BXK8");
var IE8_DOM_DEFINE = __webpack_require__("XlI8");
var toPrimitive = __webpack_require__("ePMb");
var dP = Object.defineProperty;

exports.f = __webpack_require__("GiQ9") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

/***/ "aW3o":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__("BI7h");

$export($export.S, 'Math', { sign: __webpack_require__("EdsP") });


/***/ }),

/***/ "auWe":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("46AW");
var global = __webpack_require__("mmCD");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("065J") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "bb+b":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cDf5":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("hBVl");

var _Symbol = __webpack_require__("23iW");

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

/***/ "chLf":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("wIja");
__webpack_require__("G6OB");
module.exports = __webpack_require__("hYiM").Array.from;


/***/ }),

/***/ "cyrI":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".indeterminate-bar[data-v-c0834778]{position:absolute;width:0;height:100%;background:#db1743;left:-100%;top:0;border-radius:2px;-webkit-animation:indeterminate-data-v-c0834778 1.2s ease infinite;animation:indeterminate-data-v-c0834778 1.2s ease infinite;border-radius:20px}@-webkit-keyframes indeterminate-data-v-c0834778{0%{width:30%;left:-40%}60%{left:100%;width:100%}to{left:100%;width:0}}@keyframes indeterminate-data-v-c0834778{0%{width:30%;left:-40%}60%{left:100%;width:100%}to{left:100%;width:0}}.vsIndeterminate[data-v-c0834778]{background:#dd7963}.vs-progress-background[data-v-c0834778]{width:100%;border-radius:18px;background-color:rgba(var(--primary),.1);z-index:50;position:relative;display:inline-block;overflow:hidden}.vs-progress-foreground[data-v-c0834778]{z-index:100;height:100%;border-radius:18px;-webkit-transition:all .5s ease;transition:all .5s ease}", ""]);

// exports


/***/ }),

/***/ "dSc3":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("016R");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "dsGv":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".con-chips{width:100%;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-shadow:0 2px 15px 0 rgba(0,0,0,.1);box-shadow:0 2px 15px 0 rgba(0,0,0,.1);border-radius:5px;overflow:hidden;padding:5px}.con-chips .con-vs-chip{margin-top:0;margin-bottom:0}.con-chips input{display:inline-block;-webkit-box-flex:1;-ms-flex:1;flex:1;padding:9px;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:80px;border:0;padding-left:2px}.x-global{position:absolute;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:5px;cursor:pointer;-webkit-transition:all .3s ease;transition:all .3s ease}.x-global:hover{color:rgb(var(--danger))}.no-items input{padding-left:10px!important}", ""]);

// exports


/***/ }),

/***/ "dybq":
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__("uQXF")('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});


/***/ }),

/***/ "e9Gf":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("trsR");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "ePMb":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("k0IJ");
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

/***/ "fEcV":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("/fpy")('keys');
var uid = __webpack_require__("bb+b");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "fqS3":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".vs-card[data-v-10306c91]{width:calc(100% - 10px);border-radius:8px;-webkit-box-shadow:0 20px 40px -8px rgba(0,0,0,.1);box-shadow:0 20px 40px -8px rgba(0,0,0,.1);margin:5px}.actionable[data-v-10306c91]{cursor:pointer;-webkit-transition-property:-webkit-box-shadow,-webkit-transform;transition-property:-webkit-box-shadow,-webkit-transform;transition-property:box-shadow,transform;transition-property:box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-duration:.15s;transition-duration:.15s}.actionable[data-v-10306c91]:hover{-webkit-transform:translateY(-2px);transform:translateY(-2px);-webkit-box-shadow:0 18px 35px rgba(50,50,93,.1),0 8px 15px rgba(0,0,0,.07);box-shadow:0 18px 35px rgba(50,50,93,.1),0 8px 15px rgba(0,0,0,.07)}", ""]);

// exports


/***/ }),

/***/ "gBtU":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("KILR");
var gOPS = __webpack_require__("uINm");
var pIE = __webpack_require__("HYhf");
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

/***/ "gEM8":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("trsR");
var defined = __webpack_require__("QfNg");
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

/***/ "gV0G":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".con-imgs{width:170px;height:170px;left:0;top:0;position:relative;float:left;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#e1e1e1;margin:5px;border-radius:10px;padding:5px}.con-multiples-imgs li{z-index:100;position:relative}.con-multiples-imgs li img{position:relative;top:0;right:0;bottom:0;left:0;margin:auto;max-width:100%;max-height:100%;border-radius:10px}.agregarx{width:150px;height:150px;background:#fff;position:relative;float:left;margin:15px;border-radius:10px;-webkit-box-shadow:0 6px 15px -3px transparent;box-shadow:0 6px 15px -3px transparent;-webkit-transition:all .3s ease;transition:all .3s ease;display:block}.agregarx,.agregarx input{cursor:pointer}.agregarx:hover{-webkit-box-shadow:0 6px 20px -3px rgba(0,0,0,.15);box-shadow:0 6px 20px -3px rgba(0,0,0,.15);-webkit-transform:translateY(-6px);transform:translateY(-6px)}.agregarx:after{width:60px;height:1px;-webkit-transform:translate(-50%);transform:translate(-50%)}.agregarx:after,.agregarx:before{background:rgba(0,0,0,.15);content:\"\";position:absolute;top:50%;left:50%;display:block}.agregarx:before{width:1px;height:60px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.con-multiples-imgs{width:auto;height:auto;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.3);box-shadow:0 0 0 0 rgba(0,0,0,.3);border-radius:10px;z-index:200}.con-multiple{width:100%;height:auto;background:#f0f0f0;border-radius:10px}.con-multiple-upload{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.fade-upload-enter-active img,.fade-upload-leave-active img{-webkit-transition:all .3s;transition:all .3s}.fade-upload-enter img,.fade-upload-leave-to img{-webkit-transform:scale(.6);transform:scale(.6)}.fade-upload-enter-active,.fade-upload-leave-active{-webkit-transition:all .3s;transition:all .3s}.fade-upload-enter,.fade-upload-leave-to{opacity:0}.x-view{width:45px;height:45px;position:absolute;top:10px;right:10px;background:#fff;-webkit-box-shadow:0 5px 12px 0 rgba(0,0,0,.1);box-shadow:0 5px 12px 0 rgba(0,0,0,.1);border-radius:50%;cursor:pointer}.view-upload,.x-view{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.view-upload{width:100%;height:100%;position:fixed;background:rgba(0,0,0,.4);z-index:100000;padding:15px}.view-upload img{position:relative;top:0;right:0;bottom:0;left:0;margin:auto;max-width:100%;max-height:100%;-webkit-box-shadow:0 2px 14px 0 rgba(0,0,0,.4)!important;box-shadow:0 2px 14px 0 rgba(0,0,0,.4)!important;border-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease}.upload-colorx{width:0;height:0;position:relative;position:absolute;top:0;z-index:10;border-radius:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.x-img{position:absolute;right:5px;top:5px;width:30px;height:30px;background:#fff;-webkit-box-shadow:0 3px 12px 0 rgba(0,0,0,.1);box-shadow:0 3px 12px 0 rgba(0,0,0,.1);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:50%;z-index:100;cursor:pointer}.x-img i{font-size:1.125em;color:rgba(0,0,0,.7)}.input-upload{position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;z-index:1000;cursor:pointer}.con-subir{background:#f0f0f0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:7px;margin-bottom:10px;border-radius:10px;color:rgba(0,0,0,.4);-webkit-transition:all .3s ease;transition:all .3s ease}.con-subir input{cursor:pointer}.con-subir h3{font-size:1em;font-weight:lighter}.con-upload:hover .con-subir{color:rgb(var(--primary))!important}.con-subir i{width:35px;height:35px;background:#e1e1e1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:50%;margin-left:10px;font-size:1.25em}.con-img-upload,.con-subir i{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.con-img-upload{height:auto;width:300px;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;position:relative;overflow:hidden;z-index:2000;-webkit-transition:all .3s ease,background 0s ease;transition:all .3s ease,background 0s ease;max-height:300px;border-radius:10px;opacity:1;-webkit-transform:scale(1);transform:scale(1)}.oculto{max-height:0;-webkit-transform:scale(.7);transform:scale(.7)}.con-img-upload img{position:relative;top:0;right:0;bottom:0;left:0;margin:auto;max-width:100%;max-height:100%;-webkit-box-shadow:0 2px 14px 0 rgba(0,0,0,.4)!important;box-shadow:0 2px 14px 0 rgba(0,0,0,.4)!important;border-radius:10px;overflow:hidden;z-index:20;margin:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:scale(1);transform:scale(1);display:block;cursor:pointer}.con-upload{position:relative}", ""]);

// exports


/***/ }),

/***/ "hBVl":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("GzI1");

/***/ }),

/***/ "hYiM":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "hilu":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("auWe")('keys');
var uid = __webpack_require__("Mp6I");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "hj2F":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("lpdM");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("67adfed6", content, true, {});

/***/ }),

/***/ "i3Zx":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("dsGv");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("84e65182", content, true, {});

/***/ }),

/***/ "i7/w":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_i7_w__;

/***/ }),

/***/ "iD3k":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("OX+m");

/***/ }),

/***/ "iKtQ":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("vnL8");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("06257530", content, true, {});

/***/ }),

/***/ "iNV5":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".vs-row{clear:both;overflow:hidden;-ms-flex-flow:wrap;flex-flow:wrap}", ""]);

// exports


/***/ }),

/***/ "iVxW":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("sMuz");

/***/ }),

/***/ "ips4":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("NByB");
var defined = __webpack_require__("UMRC");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "iumD":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("L6r6");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("4c25fd1e", content, true, {});

/***/ }),

/***/ "iyOG":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("BI7h");
var $values = __webpack_require__("DnoV")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "j1ok":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("nIcf");

/***/ }),

/***/ "jJ09":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("HS8k");
var document = __webpack_require__("mmCD").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "k0IJ":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "kKjQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("Vxht");
var $export = __webpack_require__("prek");
var redefine = __webpack_require__("rf3O");
var hide = __webpack_require__("J3mi");
var Iterators = __webpack_require__("kluS");
var $iterCreate = __webpack_require__("KEfp");
var setToStringTag = __webpack_require__("ZCy8");
var getPrototypeOf = __webpack_require__("G91H");
var ITERATOR = __webpack_require__("Z+hs")('iterator');
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

/***/ "kPcY":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  let i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "kdyF":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("uZKj");
module.exports = __webpack_require__("hYiM").Object.getOwnPropertySymbols;


/***/ }),

/***/ "kluS":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "krHm":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".con-vs-avatar{width:32px;height:32px;border-radius:50%;position:relative;cursor:pointer;display:inline-block;margin:5px}.con-vs-avatar.large{width:50px;height:50px}.con-vs-avatar.small{width:24px;height:24px}.con-vs-avatar.small .vs-avatar-text{font-size:.9375em}.con-vs-avatar .dot-count{position:absolute;top:1px;right:1px;width:7px;height:7px;border-radius:50%;z-index:100}.con-vs-avatar .dot-count.badgeNumber{width:auto;height:auto;top:-3px;right:0;border-radius:4px;padding-left:3px;padding-right:3px;font-size:.625em;color:#fff}.con-vs-avatar .vs-avatar-text{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.con-vs-avatar .con-img{position:absolute;width:100%;height:100%;overflow:hidden;border-radius:50%}", ""]);

// exports


/***/ }),

/***/ "ku7R":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".con-vs-card-media[data-v-611acd9a]{position:relative}.con-vs-card-media img[data-v-611acd9a]{width:100%;max-width:100%;min-width:100%;display:block;vertical-align:top}", ""]);

// exports


/***/ }),

/***/ "lBHY":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("vSL8");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("615d4d3c", content, true, {});

/***/ }),

/***/ "lSNA":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("CnV9");

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

/***/ "lpdM":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".vs-pagination[data-v-38031ed0]{display:-webkit-box;display:-ms-flexbox;display:flex;padding-left:0}.vs-pagination .vs-ellipsis[data-v-38031ed0],.vs-pagination button[data-v-38031ed0]{min-height:40px;min-width:40px;margin:3px;color:rgba(0,0,0,.7);padding:3px 10px;line-height:2;text-align:center;display:inline-block;text-decoration:none!important;border-radius:5px;background-color:transparent}.vs-pagination .vs-ellipsis.vs-active[data-v-38031ed0],.vs-pagination button.vs-active[data-v-38031ed0]{color:#1f74ff;font-weight:700;cursor:default}.vs-pagination .vs-ellipsis[data-v-38031ed0]:hover,.vs-pagination button[data-v-38031ed0]:hover{color:#1f74ff}.vs-pagination .vs-ellipsis[data-v-38031ed0]:active,.vs-pagination button[data-v-38031ed0]:active{opacity:.7}.vs-pagination .vs-ellipsis[data-v-38031ed0]:focus,.vs-pagination .vs-ellipsis[data-v-38031ed0]:hover{color:inherit;outline:none}.vs-pagination button i[data-v-38031ed0]{vertical-align:top}.vs-pager-flat button[data-v-38031ed0]{background-color:transparent}.vs-pager-flat button[data-v-38031ed0]:hover{background-color:rgba(30,30,30,.07)}.vs-pager-filled button[data-v-38031ed0]{background-color:#f4f4f5}.vs-pager-filled button[data-v-38031ed0]:hover{-webkit-box-shadow:0 8px 10px -4px rgba(0,0,0,.15);box-shadow:0 8px 10px -4px rgba(0,0,0,.15)}.vs-pager-filled button.vs-active[data-v-38031ed0]{color:#fff;background-color:#1f74ff;-webkit-box-shadow:none;box-shadow:none}.vs-pager-rounded button[data-v-38031ed0]{border-radius:50px}", ""]);

// exports


/***/ }),

/***/ "ltqc":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("sbe1");
var defined = __webpack_require__("UMRC");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "lz+/":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".vs-sidebar-item:after{background:rgb(var(--primary))}.only-reduse{display:none}.vs-sidebar-item{list-style:none;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;position:relative}.vs-sidebar-item:after{content:\"\";left:0;top:0;height:0%;position:absolute;width:4px;border-radius:0 6px 6px 0;-webkit-transition:all .3s ease;transition:all .3s ease;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.vs-sidebar-item a{color:rgba(0,0,0,.55);padding:8px;padding-left:15px;width:calc(100% - 6px);margin-left:3px;font-size:.9375em;-webkit-transition:all .2s ease;transition:all .2s ease;text-decoration:none!important}.vs-sidebar-item a,.vs-sidebar-item a .con-text-span{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-sidebar-item:not(.active-item).vs-sidebar-item a:hover{background:#fff;border-radius:10px;z-index:100}.vs-sidebar-item a .vs-tagx{position:relative;z-index:200;color:#fff;border-radius:8px;font-size:.625em;padding:0 5px;font-weight:400;-webkit-box-shadow:0 0 10px 0 rgba(0,0,0,.1);box-shadow:0 0 10px 0 rgba(0,0,0,.1)}.vs-sidebar-item a i.material-icons{margin-right:10px;font-size:1.125em}.con-tag a{-webkit-box-pack:justify!important;-ms-flex-pack:justify!important;justify-content:space-between!important;padding-right:5px}.active-item{background:#f8f8f8}.active-item a{font-weight:700}.active-item:after{height:100%!important}.vs-sidebar-item:not(.active-item) a:hover{color:rgb(var(--primary))}.vs-tagx{background:rgb(var(--primary))}.active-item a{color:rgb(var(--primary))}", ""]);

// exports


/***/ }),

/***/ "m/SN":
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
__webpack_require__.d(components_namespaceObject, "vsUpload", function() { return components_vsUpload; });
__webpack_require__.d(components_namespaceObject, "vsPopup", function() { return components_vsPopup; });
__webpack_require__.d(components_namespaceObject, "vsAlert", function() { return components_vsAlert; });
__webpack_require__.d(components_namespaceObject, "vsChip", function() { return components_vsChip; });
__webpack_require__.d(components_namespaceObject, "vsChips", function() { return components_vsChips; });
__webpack_require__.d(components_namespaceObject, "vsProgress", function() { return components_vsProgress; });
__webpack_require__.d(components_namespaceObject, "vsCard", function() { return components_vsCard; });
__webpack_require__.d(components_namespaceObject, "vsTopbar", function() { return components_vsTopbar; });
__webpack_require__.d(components_namespaceObject, "vsList", function() { return components_vsList; });
__webpack_require__.d(components_namespaceObject, "vsRow", function() { return layout_vsRow; });
__webpack_require__.d(components_namespaceObject, "vsCol", function() { return layout_vsCol; });
__webpack_require__.d(components_namespaceObject, "vsAvatar", function() { return components_vsAvatar; });
__webpack_require__.d(components_namespaceObject, "vsPagination", function() { return components_vsPagination; });
__webpack_require__.d(components_namespaceObject, "vsBreadcrumb", function() { return components_vsBreadcrumb; });
__webpack_require__.d(components_namespaceObject, "vsSideBar", function() { return components_vsSideBar; });
__webpack_require__.d(components_namespaceObject, "vsPrompt", function() { return vsPrompt; });
__webpack_require__.d(components_namespaceObject, "vsDropDown", function() { return components_vsDropDown; });
__webpack_require__.d(components_namespaceObject, "vsDivider", function() { return components_vsDivider; });
__webpack_require__.d(components_namespaceObject, "vsCollapse", function() { return components_vsCollapse; });
__webpack_require__.d(components_namespaceObject, "vsTooltip", function() { return components_vsTooltip; });

// EXTERNAL MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("kPcY");

// EXTERNAL MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es7.object.values.js
var es7_object_values = __webpack_require__("iyOG");

// EXTERNAL MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("2xrd");

// EXTERNAL MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("GrhR");

// EXTERNAL MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("NWrc");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("MVZn");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./src/utils/color.js
var utils_color = __webpack_require__("Xp+x");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsButton/vsButton.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'VsButton',
  inheritAttrs: false,
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
    vsSize: {
      type: String,
      default: null
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
          boxShadow: "0 3px 0 0 ".concat(utils_color["a" /* default */].darken(color, -0.4))
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1145ca5c","hasScoped":false,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsButton/vsButton.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',_vm._g(_vm._b({ref:"btn",staticClass:"vs-component vs-button",class:[("vs-button-" + (_vm.isColor()?_vm.vsColor:null)),("vs-button-" + _vm.vsType),{
    'isActive':_vm.isActive,
    'includeIcon':_vm.vsIcon
  }, _vm.vsSize],style:([_vm.styles,{
    'width':/[px]/.test(_vm.vsSize)?("" + _vm.vsSize):null,
    'height':/[px]/.test(_vm.vsSize)?("" + _vm.vsSize):null
  }]),attrs:{"name":"button"}},'button',_vm.$attrs,false),_vm.listeners),[(!_vm.is('line')&&!_vm.is('gradient')&&!_vm.is('relief'))?_c('span',{ref:"backgroundx",staticClass:"vs-button-backgroundx",style:(_vm.stylesBackGround)}):_vm._e(),_vm._v(" "),_c('i',{staticClass:"material-icons vs-button-icon",style:({
      'order':_vm.vsIconAfter?2:0,
      'margin-right':_vm.$slots.default&&!_vm.vsIconAfter?'5px':'0px',
      'margin-left':_vm.$slots.default&&_vm.vsIconAfter?'5px':'0px'
    })},[_vm._v("\n    "+_vm._s(_vm.vsIcon)+"\n  ")]),_vm._v(" "),(_vm.$slots.default)?_c('span',{staticClass:"vs-button-text"},[_vm._t("default")],2):_vm._e(),_vm._v(" "),_c('span',{ref:"linex",staticClass:"vs-button-linex",style:(_vm.styleLine)})])}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__("JFUb");

// CONCATENATED MODULE: ./src/components/vsButton/vsButton.vue
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
// EXTERNAL MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("2tc/");

// EXTERNAL MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("rQ4u");

// EXTERNAL MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("0/6w");

// EXTERNAL MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("7SCD");

// CONCATENATED MODULE: ./src/utils/index.js
/* harmony default export */ var utils = ({
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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsSelect/vsSelect.vue





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'VsSelect',
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
  computed: {
    listeners: function listeners() {
      var _this = this;

      return objectSpread_default()({}, this.$listeners, {
        blur: function blur(event) {
          if (_this.vsAutocomplete && event.relatedTarget ? !event.relatedTarget.closest('.vs-select-options') : false) {
            _this.closeOptions();
          }

          _this.$emit('blur', event);
        },
        focus: function focus(event) {
          _this.$emit('focus', event); // document.removeEventListener('click',this.clickBlur)


          _this.focus(event);
        },
        input: function input() {
          return;
        },
        keyup: function keyup(event) {
          if (event.key == 'ArrowDown' || event.key == 'ArrowUp') {
            event.preventDefault();

            var childrens = _this.$children.filter(function (item) {
              return item.visible;
            });

            childrens[0].$el.querySelector('.vs-select-item-btn').focus();
          } else {
            if (_this.vsAutocomplete) {
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
      this.$emit('change', event);
    },
    active: function active() {
      var _this2 = this;

      if (this.active) {
        this.$children.forEach(function (item) {
          item.focusValue();
        });
        setTimeout(function () {
          if (_this2.$refs.ulx.scrollHeight >= 260) _this2.scrollx = true;
        }, 100);
      }
    }
  },
  mounted: function mounted() {
    this.changeValue();
    utils.insertBody(this.$refs.vsSelectOptions); // console.log("this.$children>>>>>>",this.$children);
  },
  updated: function updated() {
    if (!this.active) {
      this.changeValue();
    }
  },
  methods: {
    addMultiple: function addMultiple(value) {
      var currentValues = this.value ? this.value : [];

      if (currentValues.includes(value)) {
        currentValues.splice(currentValues.indexOf(value), 1);
        this.$emit('input', currentValues);
        this.changeValue();

        if (this.vsAutocomplete) {
          this.$refs.inputselect.focus();
        }
      } else {
        if (this.vsAutocomplete) {
          currentValues.push(value);
          this.$emit('input', currentValues);
          this.filterItems('');
          this.changeValue(); // this.$refs.inputselect.value += ','

          this.$refs.inputselect.focus();
        } else {
          currentValues.push(value);
          this.$emit('input', currentValues);
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
        var values = this.value ? this.value : [];
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
    focus: function focus() {
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


      this.cords = utils.changePosition(this.$refs.inputselect, this.$refs.vsSelectOptions, this.vsAutocomplete);
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2e0b499c","hasScoped":false,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsSelect/vsSelect.vue
var vsSelect_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-select",class:{'autocompletex':_vm.vsAutocomplete,'activeOptions':_vm.active}},[_c('input',_vm._g(_vm._b({ref:"inputselect",staticClass:"input-select",attrs:{"readonly":!_vm.vsAutocomplete,"type":"text","name":"","value":""},on:{"click":function($event){$event.stopPropagation();},"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }$event.stopPropagation();$event.preventDefault();return _vm.closeOptions($event)}}},'input',_vm.$attrs,false),_vm.listeners)),_vm._v(" "),_c('i',{staticClass:"material-icons icon-select"},[_vm._v("\n    keyboard_arrow_down\n  ")]),_vm._v(" "),_c('transition',{attrs:{"name":"fade-select"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}],ref:"vsSelectOptions",staticClass:"vs-select-options",class:[("vs-select-" + _vm.vsColor),{'scrollx':_vm.scrollx}],style:(_vm.cords)},[_c('ul',{ref:"ulx"},[_vm._t("default")],2),_vm._v(" "),_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.clear),expression:"clear"}]},[_c('li',{on:{"click":function($event){_vm.filterItems(''),_vm.changeValue()}}},[_vm._v("\n          "+_vm._s(_vm.vsNoData)+"\n        ")])])])])],1)}
var vsSelect_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsSelect/vsSelect.vue
/* script */


/* template */

/* template functional */
var vsSelect_vue_template_functional_ = false
/* styles */
var vsSelect_vue_styles_ = null
/* scopeId */
var vsSelect_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var vsSelect_vue_module_identifier_ = null

var vsSelect_Component = Object(component_normalizer["a" /* default */])(
  vsSelect,
  vsSelect_render,
  vsSelect_staticRenderFns,
  vsSelect_vue_template_functional_,
  vsSelect_vue_styles_,
  vsSelect_vue_scopeId_,
  vsSelect_vue_module_identifier_
)

/* harmony default export */ var vsSelect_vsSelect = (vsSelect_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsSelect/vsSelectItem.vue



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'VsSelectItem',
  inheritAttrs: false,
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
        background: this.isActive ? utils_color["a" /* default */].getColor(this.$parent.vsColor, .1) : null,
        color: this.isActive ? utils_color["a" /* default */].getColor(this.$parent.vsColor, 1) : null,
        fontWeight: this.isActive ? 'bold' : null
      };
    },
    getValue: function getValue() {
      return this.$parent.value;
    }
  },
  watch: {
    valueInputx: function valueInputx() {
      if (this.visible) {
        var valueInputx = this.valueInputx.split(',');

        if (valueInputx[valueInputx.length - 1] == '') {
          this.getText = this.vsText;
          return;
        }

        var valuex = valueInputx[valueInputx.length - 1];
        var re = new RegExp(valuex, "i");

        if (this.vsText.toUpperCase().indexOf(valuex.toUpperCase()) == 0) {
          valuex = this.MaysPrimera(valuex);
        }

        var text = this.vsText.replace(re, "<span class=\"searchx\">".concat(valuex, "</span>"));
        this.getText = text;
      } else {
        this.getText = this.vsText;
      }
    }
  },
  created: function created() {
    this.putValue();
    this.getText = this.vsText;
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
    clickOption: function clickOption() {
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-10f24264","hasScoped":false,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsSelect/vsSelectItem.vue
var vsSelectItem_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"vs-component"},[_c('button',_vm._g(_vm._b({ref:"item",staticClass:"vs-select-item-btn",class:{
      'activex':_vm.$parent.vsMultiple?_vm.getValue.indexOf(_vm.vsValue) != -1:_vm.getValue == _vm.vsValue,
      'con-icon':_vm.$parent.vsMultiple
    },style:(_vm.styles),attrs:{"disabled":_vm.disabled?true:_vm.disabledx,"type":"button","name":"button"},on:{"keydown":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"backspace",undefined,$event.key,undefined)){ return null; }$event.preventDefault();return _vm.backspace($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();_vm.navigateOptions('next')},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();_vm.navigateOptions('prev')},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();_vm.clickOption()}]}},'button',_vm.$attrs,false),_vm.listeners),[(_vm.$parent.vsMultiple)?_c('i',{staticClass:"material-icons icon-item"},[_vm._v("\n      check_circle\n    ")]):_vm._e(),_vm._v(" "),_c('span',{domProps:{"innerHTML":_vm._s(_vm.getText)}})])])}
var vsSelectItem_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsSelect/vsSelectItem.vue
/* script */


/* template */

/* template functional */
var vsSelectItem_vue_template_functional_ = false
/* styles */
var vsSelectItem_vue_styles_ = null
/* scopeId */
var vsSelectItem_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var vsSelectItem_vue_module_identifier_ = null

var vsSelectItem_Component = Object(component_normalizer["a" /* default */])(
  vsSelectItem,
  vsSelectItem_render,
  vsSelectItem_staticRenderFns,
  vsSelectItem_vue_template_functional_,
  vsSelectItem_vue_styles_,
  vsSelectItem_vue_scopeId_,
  vsSelectItem_vue_module_identifier_
)

/* harmony default export */ var vsSelect_vsSelectItem = (vsSelectItem_Component.exports);

// CONCATENATED MODULE: ./src/components/vsSelect/index.js




/* harmony default export */ var components_vsSelect = (function (Vue) {
  Vue.component(vsSelect_vsSelect.name, vsSelect_vsSelect);
  Vue.component(vsSelect_vsSelectItem.name, vsSelect_vsSelectItem);
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsSwitch/vsSwitch.vue



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'VsSwitch',
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
      widthx: 42,
      checkboxClicked: false
    };
  },
  computed: {
    style: function style() {
      return {
        background: this.value ? utils_color["a" /* default */].getColor(this.vsColor, 1) : null,
        width: "".concat(this.widthx, "px")
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
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      var w = _this2.$refs.on.clientWidth > _this2.$refs.off.clientWidth ? _this2.$refs.on.clientWidth : _this2.$refs.off.clientWidth;
      _this2.widthx = w + 24;
    });
  },
  methods: {
    toggleCheckbox: function toggleCheckbox(event) {
      if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        this.$refs.inputCheckbox.checked = !this.$refs.inputCheckbox.checked;
        this.$emit('input', this.$refs.inputCheckbox.checked);
      }
    },
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-885c018e","hasScoped":false,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsSwitch/vsSwitch.vue
var vsSwitch_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',_vm._b({staticClass:"vs-component vs-switch",class:[
    ("vs-switch-" + _vm.vsColor),
    {
      'vs-switch-active':_vm.isChecked || _vm.$attrs.checked
    }
  ],style:(_vm.style),attrs:{"type":"button","name":"button"},on:{"click":function($event){_vm.toggleCheckbox($event)}}},'button',_vm.$attrs,false),[_c('input',_vm._g({ref:"inputCheckbox",staticClass:"input-switch",attrs:{"disabled":_vm.$attrs.disabled,"type":"checkbox","name":"","value":""},domProps:{"checked":_vm.value}},_vm.listeners)),_vm._v(" "),_c('span',{ref:"on",staticClass:"text-on text-switch",class:{'active-text':_vm.isChecked || _vm.$attrs.checked}},[_vm._t("on"),_vm._v(" "),_c('i',{staticClass:"material-icons icons-switch"},[_vm._v("\n      "+_vm._s(_vm.vsIconOn || _vm.vsIcon)+"\n    ")])],2),_vm._v(" "),_c('span',{ref:"off",staticClass:"text-off text-switch",class:{'active-text':!_vm.isChecked && !_vm.$attrs.checked}},[_vm._t("off"),_vm._v(" "),_c('i',{staticClass:"material-icons icons-switch"},[_vm._v("\n      "+_vm._s(_vm.vsIconOff || _vm.vsIcon)+"\n    ")])],2),_vm._v(" "),_c('span',{staticClass:"vs-circle-switch"})])}
var vsSwitch_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsSwitch/vsSwitch.vue
/* script */


/* template */

/* template functional */
var vsSwitch_vue_template_functional_ = false
/* styles */
var vsSwitch_vue_styles_ = null
/* scopeId */
var vsSwitch_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var vsSwitch_vue_module_identifier_ = null

var vsSwitch_Component = Object(component_normalizer["a" /* default */])(
  vsSwitch,
  vsSwitch_render,
  vsSwitch_staticRenderFns,
  vsSwitch_vue_template_functional_,
  vsSwitch_vue_styles_,
  vsSwitch_vue_scopeId_,
  vsSwitch_vue_module_identifier_
)

/* harmony default export */ var vsSwitch_vsSwitch = (vsSwitch_Component.exports);

// CONCATENATED MODULE: ./src/components/vsSwitch/index.js



/* harmony default export */ var components_vsSwitch = (function (Vue) {
  Vue.component(vsSwitch_vsSwitch.name, vsSwitch_vsSwitch);
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsCheckBox/vsCheckBox.vue



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'VsCheckbox',
  inheritAttrs: false,
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9f914946","hasScoped":false,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsCheckBox/vsCheckBox.vue
var vsCheckBox_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-component con-vs-checkbox",class:[("vs-checkbox-" + _vm.vsColor)]},[_c('input',_vm._g(_vm._b({attrs:{"type":"checkbox","value":""},domProps:{"checked":_vm.isChecked || _vm.$attrs.checked}},'input',_vm.$attrs,false),_vm.listeners)),_vm._v(" "),_c('span',{staticClass:"checkbox_x",style:(_vm.style)},[_c('span',{staticClass:"_check",style:(_vm.style_check)}),_vm._v(" "),_c('i',{staticClass:"material-icons"},[_vm._v("\n      "+_vm._s(_vm.vsIcon)+"\n    ")])]),_vm._v(" "),_c('span',{staticClass:"con-slot-label"},[_vm._t("default")],2)])}
var vsCheckBox_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsCheckBox/vsCheckBox.vue
/* script */


/* template */

/* template functional */
var vsCheckBox_vue_template_functional_ = false
/* styles */
var vsCheckBox_vue_styles_ = null
/* scopeId */
var vsCheckBox_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var vsCheckBox_vue_module_identifier_ = null

var vsCheckBox_Component = Object(component_normalizer["a" /* default */])(
  vsCheckBox,
  vsCheckBox_render,
  vsCheckBox_staticRenderFns,
  vsCheckBox_vue_template_functional_,
  vsCheckBox_vue_styles_,
  vsCheckBox_vue_scopeId_,
  vsCheckBox_vue_module_identifier_
)

/* harmony default export */ var vsCheckBox_vsCheckBox = (vsCheckBox_Component.exports);

// CONCATENATED MODULE: ./src/components/vsCheckBox/index.js



/* harmony default export */ var components_vsCheckBox = (function (Vue) {
  Vue.component(vsCheckBox_vsCheckBox.name, vsCheckBox_vsCheckBox);
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsRadio/vsRadio.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'VsRadio',
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
    },
    styles: function styles() {
      return {
        'border': "2px solid ".concat(this.isChecked ? utils_color["a" /* default */].getColor(this.vsColor, 1) : 'rgb(200, 200, 200)')
      };
    },
    styleCircle: function styleCircle() {
      return {
        'background': utils_color["a" /* default */].getColor(this.vsColor, 1),
        'box-shadow': "0px 3px 12px 0px ".concat(utils_color["a" /* default */].getColor(this.vsColor, .4))
      };
    }
  },
  methods: {
    giveColor: function giveColor(color, opacity) {
      return utils_color["a" /* default */].rColor(color, opacity);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-35db9128","hasScoped":false,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsRadio/vsRadio.vue
var vsRadio_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"vs-component con-vs-radio",class:[("vs-radio-" + _vm.vsColor)]},[_c('input',_vm._g(_vm._b({attrs:{"type":"radio","name":""},domProps:{"checked":_vm.isChecked}},'input',_vm.$attrs,false),_vm.listeners)),_vm._v(" "),_c('span',{staticClass:"vs-radiox"},[_c('span',{staticClass:"vs-radiox-borde",style:(_vm.styles)}),_vm._v(" "),_c('span',{staticClass:"vs-radiox-circle",style:(_vm.styleCircle)})]),_vm._v(" "),_c('span',{staticClass:"vs-radiox-labelx"},[_vm._t("default")],2)])}
var vsRadio_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsRadio/vsRadio.vue
/* script */


/* template */

/* template functional */
var vsRadio_vue_template_functional_ = false
/* styles */
var vsRadio_vue_styles_ = null
/* scopeId */
var vsRadio_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var vsRadio_vue_module_identifier_ = null

var vsRadio_Component = Object(component_normalizer["a" /* default */])(
  vsRadio,
  vsRadio_render,
  vsRadio_staticRenderFns,
  vsRadio_vue_template_functional_,
  vsRadio_vue_styles_,
  vsRadio_vue_scopeId_,
  vsRadio_vue_module_identifier_
)

/* harmony default export */ var vsRadio_vsRadio = (vsRadio_Component.exports);

// CONCATENATED MODULE: ./src/components/vsRadio/index.js



/* harmony default export */ var components_vsRadio = (function (Vue) {
  Vue.component(vsRadio_vsRadio.name, vsRadio_vsRadio);
});
// EXTERNAL MODULE: ./src/components/vsInput/vsInput.vue + 2 modules
var vsInput = __webpack_require__("32CY");

// CONCATENATED MODULE: ./src/components/vsInput/index.js



/* harmony default export */ var components_vsInput = (function (Vue) {
  Vue.component(vsInput["default"].name, vsInput["default"]);
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsTabs/vsTabs.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'VsTabs',
  components: {
    vsButton: vsButton_vsButton
  },
  props: {
    vsColor: {
      default: 'primary',
      type: String
    },
    vsAlignment: {
      default: 'left',
      type: String
    },
    vsPosition: {
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
    styleTabs: function styleTabs() {
      return {
        color: utils_color["a" /* default */].getColor(this.vsColor, 1)
      };
    },
    stylex: function stylex() {
      return {
        top: "".concat(this.topx, "px"),
        left: "".concat(this.leftx, "px"),
        width: "".concat(this.widthx, "px"),
        height: "".concat(this.heightx, "px"),
        background: "linear-gradient(30deg, ".concat(utils_color["a" /* default */].getColor(this.vsColor, 1), " 0%, ").concat(utils_color["a" /* default */].getColor(this.vsColor, .5), " 100%)"),
        boxShadow: "0px 0px 8px 0px ".concat(utils_color["a" /* default */].getColor(this.vsColor, .5)),
        transform: "scaleX(".concat(this.these ? 1.3 : 1, ")")
      };
    }
  },
  mounted: function mounted() {
    this.changePositionLineCreated();
    this.$children[this.childActive].active = true;

    if (this.vsPosition == 'left' || this.vsPosition == 'left') {
      this.$children[this.childActive].vertical = true;
    }
  },
  methods: {
    changePositionLineCreated: function changePositionLineCreated() {
      var _this = this;

      this.$nextTick(function () {
        var lix = _this.$refs.ul.querySelector('.activeChild');

        if (_this.vsPosition == 'left' || _this.vsPosition == 'right') {
          _this.topx = lix.offsetTop;
          _this.heightx = lix.offsetHeight;
          _this.widthx = 2;
        } else {
          setTimeout(function () {
            _this.leftx = lix.offsetLeft;
            _this.widthx = lix.offsetWidth;
          }, 100);
        }
      });
    },
    activeChild: function activeChild(evt, index) {
      var _this2 = this;

      if (this.childActive == index) {
        this.these = true;
        evt.target.classList.add('isActive');
        setTimeout(function () {
          evt.target.classList.remove('isActive');
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

      if (this.vsPosition == 'left' || this.vsPosition == 'right') {
        this.$children[index].vertical = true;
      }

      this.changePositionLine(evt);
    },
    changePositionLine: function changePositionLine(evt) {
      if (this.vsPosition == 'left' || this.vsPosition == 'right') {
        this.topx = evt.target.offsetTop;
        this.heightx = evt.target.offsetHeight;
        this.widthx = 2;
      } else {
        this.leftx = evt.target.offsetLeft;
        this.widthx = evt.target.offsetWidth;
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1b9df998","hasScoped":false,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsTabs/vsTabs.vue
var vsTabs_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-vs-tabs vs-tabs",class:[("vs-tabs-" + _vm.vsColor),("vs-tabs-position-" + _vm.vsPosition)]},[_c('div',{staticClass:"con-ul-tabs",style:(_vm.styleTabs)},[_c('ul',{ref:"ul",staticClass:"ul-tabs",class:[("ul-tabs-" + _vm.vsAlignment)]},_vm._l((_vm.children),function(child,index){return _c('li',{class:{'activeChild':_vm.childActive == index},on:{"mouseover":function($event){_vm.hover = true},"mouseout":function($event){_vm.hover = false},"click":function($event){_vm.activeChild($event,index)}}},[_c('button',_vm._g(_vm._b({attrs:{"type":"button"}},'button',child.attrs,false),child.listeners),[_vm._v("\n          "+_vm._s(child.label)+"\n        ")])])})),_vm._v(" "),_c('span',{staticClass:"line-vs-tabs",style:(_vm.stylex)})]),_vm._v(" "),_c('div',{staticClass:"con-slot-tabs"},[_vm._t("default")],2)])}
var vsTabs_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsTabs/vsTabs.vue
/* script */


/* template */

/* template functional */
var vsTabs_vue_template_functional_ = false
/* styles */
var vsTabs_vue_styles_ = null
/* scopeId */
var vsTabs_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var vsTabs_vue_module_identifier_ = null

var vsTabs_Component = Object(component_normalizer["a" /* default */])(
  vsTabs,
  vsTabs_render,
  vsTabs_staticRenderFns,
  vsTabs_vue_template_functional_,
  vsTabs_vue_styles_,
  vsTabs_vue_scopeId_,
  vsTabs_vue_module_identifier_
)

/* harmony default export */ var vsTabs_vsTabs = (vsTabs_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsTabs/vsTab.vue
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vsTab = ({
  name: 'VsTab',
  inheritAttrs: false,
  props: {
    vsLabel: {
      default: 'Label',
      type: String
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
  mounted: function mounted() {
    this.id = this.$parent.children.length;
    this.$parent.children.push({
      label: this.vsLabel,
      id: this.$parent.children.length,
      listeners: this.$listeners,
      attrs: this.$attrs
    });
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-26d12a7f","hasScoped":false,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsTabs/vsTab.vue
var vsTab_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":_vm.invert?_vm.vertical?'fade-tab-vertical-invert':'fade-tab-invert':_vm.vertical?'fade-tab-vertical':'fade-tab'}},[(_vm.active)?_c('div',{staticClass:"con-tab"},[_vm._t("default")],2):_vm._e()])}
var vsTab_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsTabs/vsTab.vue
/* script */


/* template */

/* template functional */
var vsTab_vue_template_functional_ = false
/* styles */
var vsTab_vue_styles_ = null
/* scopeId */
var vsTab_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var vsTab_vue_module_identifier_ = null

var vsTab_Component = Object(component_normalizer["a" /* default */])(
  vsTab,
  vsTab_render,
  vsTab_staticRenderFns,
  vsTab_vue_template_functional_,
  vsTab_vue_styles_,
  vsTab_vue_scopeId_,
  vsTab_vue_module_identifier_
)

/* harmony default export */ var vsTabs_vsTab = (vsTab_Component.exports);

// CONCATENATED MODULE: ./src/components/vsTabs/index.js




/* harmony default export */ var components_vsTabs = (function (Vue) {
  Vue.component(vsTabs_vsTabs.name, vsTabs_vsTabs);
  Vue.component(vsTabs_vsTab.name, vsTabs_vsTab);
});
// EXTERNAL MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.math.sign.js
var es6_math_sign = __webpack_require__("aW3o");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsSlider/vsSlider.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'VsSlider',
  props: {
    value: {},
    disabled: {
      default: false,
      type: [Boolean, String]
    },
    color: {
      default: 'primary',
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
    icon: {
      default: null,
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
    isIquals: function isIquals() {
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
        background: utils_color["a" /* default */].getColor(this.color, 1)
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
        background: utils_color["a" /* default */].getColor(this.color, 1)
      };
    },
    styleCircle: function styleCircle() {
      return {
        left: "".concat(this.leftx, "%"),
        border: "2px solid ".concat(utils_color["a" /* default */].getColor(this.color, 1))
      };
    },
    styleCircleTwo: function styleCircleTwo() {
      return {
        left: "".concat(this.leftTwo, "%"),
        border: "2px solid ".concat(utils_color["a" /* default */].getColor(this.color, 1))
      };
    },
    styleEfect: function styleEfect() {
      return {
        left: "".concat(this.leftx, "%"),
        background: utils_color["a" /* default */].getColor(this.color, 1)
      };
    },
    styleText: function styleText() {
      return {
        background: utils_color["a" /* default */].getColor(this.color, 1)
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
      this.$emit('change', this.value);
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
          var val = this.value + this.step;

          if (this.value >= this.max) {
            val = this.max;
          }

          this.leftx = val;
          this.$emit('input', val);
        } else {
          var _val = this.value - this.step;

          if (this.value <= this.min) {
            _val = this.min;
          }

          this.leftx = _val;
          this.$emit('input', _val);
        }
      }
    },
    keydownLeft: function keydownLeft() {
      if (!Array.isArray(this.value)) {
        var val = this.value - this.step;

        if (this.value == this.min) {
          val = this.min;
        }

        this.leftx = val;
        this.$emit('input', val);
      }
    },
    keydownRight: function keydownRight() {
      if (!Array.isArray(this.value)) {
        var val = this.value + this.step;

        if (this.value >= this.max) {
          val = this.max;
        }

        this.leftx = val;
        this.$emit('input', val);
      }
    },
    changePosition: function changePosition() {
      var lengthPerStep = 100 / ((this.max - this.min) / this.step);

      if (Array.isArray(this.value)) {
        this.leftx = Math.round((this.value[1] - this.min) / (this.max - this.min) * 100);
        this.leftTwo = Math.round((this.value[0] - this.min) / (this.max - this.min) * 100);
      } else {
        this.leftx = Math.round(this.value / lengthPerStep) * lengthPerStep;
      }
    },
    styleTicks: function styleTicks(index) {
      var lengthPerStep = 100 / ((this.max - this.min) / this.step);
      var steps = Math.round(index / lengthPerStep);
      return {
        left: steps * lengthPerStep + '%'
      };
    },
    activeFocus: function activeFocus() {
      window.addEventListener('mousemove', this.mouseMovex);
      window.addEventListener('mouseup', this.removeEvents);
      window.addEventListener('touchmove', this.mouseMovex);
      window.addEventListener('touchend', this.removeEvents);
    },
    mouseMovex: function mouseMovex(evt) {
      var slider = this.$refs.slider;
      var leftx;
      /*
      * change position left circle and bar
      */

      if (evt.type == 'touchmove') {
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
      window.removeEventListener('mouseup', this.removeEvents);
      window.removeEventListener('mousemove', this.mouseMovex);
      window.removeEventListener('touchmove', this.mouseMovex);
      window.removeEventListener('touchend', this.removeEvents);
    },
    clickSlider: function clickSlider(evt) {
      var _this2 = this;

      var slider = this.$refs.slider;
      var leftx = evt.clientX - slider.getBoundingClientRect().left;
      this.effect = true;
      setTimeout(function () {
        _this2.effect = false;
      }, 200);
      var obtenerPorcentaje = leftx / slider.clientWidth * 100;
      var porcentajex = Math.round(obtenerPorcentaje);

      if (Array.isArray(this.value)) {
        if (Math.abs(porcentajex - this.leftx) > Math.abs(porcentajex - this.leftTwo)) {
          this.two = true;
        } else {
          this.two = false;
        }
      }

      this.changeLeft(leftx);
    },
    changeLeft: function changeLeft(leftx) {
      var slider = this.$refs.slider;
      var obtenerPorcentaje = leftx / slider.clientWidth * 100;
      var porcentajex = Math.round(obtenerPorcentaje); // let val = Math.round(porcentajex / 100 * (this.max))

      var lengthPerStep = 100 / ((this.max - this.min) / this.step);
      var steps = Math.round(porcentajex / lengthPerStep);
      var val = steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min;
      val = Math.round(val); // let val = Math.round(porcentajex * (this.max - this.min) * 0.01 + this.min)

      if (this.ticks) {
        // val =  Math.round(porcentajex / 100 * (this.max / this.step)) * this.step
        if (val > this.max) {
          val = this.max;
          this[this.two ? 'leftTwo' : 'leftx'] = 100;
        } else {
          this[this.two ? 'leftTwo' : 'leftx'] = Math.round(steps * lengthPerStep);
        }
      } else {
        this[this.two ? 'leftTwo' : 'leftx'] = Math.round(steps * lengthPerStep);
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
            this.$emit('input', [valueNew, vals[1]]);
          } else if (min > max) {
            this.$emit('input', [vals[0], valueNew]);
          } else {
            this.$emit('input', [valueNew, valueNew]);
          }
        } else {
          if (min > max) {
            this.$emit('input', [valueNew, vals[1]]);
          } else if (min < max) {
            this.$emit('input', [vals[0], valueNew]);
          } else {
            this.$emit('input', [valueNew, valueNew]);
          }
        }
      } else {
        this.$emit('input', val);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-27398bfd","hasScoped":false,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsSlider/vsSlider.vue
var vsSlider_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-vs-slider",class:[
    ("vs-slider-" + _vm.color),
    {'disabledx':_vm.disabled}
  ],on:{"mousewheel":function($event){$event.preventDefault();return _vm.mousewheelx($event)},"keydown":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"])){ return null; }if('button' in $event && $event.button !== 0){ return null; }return _vm.keydownLeft($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"right",39,$event.key,["Right","ArrowRight"])){ return null; }if('button' in $event && $event.button !== 2){ return null; }return _vm.keydownRight($event)}]}},[_c('button',{ref:"slider",staticClass:"vs-slider",attrs:{"disabled":_vm.disabled},on:{"click":function($event){_vm.clickSlider($event),_vm.actived = true}}},[_c('span',{staticClass:"vs-slider-line-one",class:{'hasTransition':_vm.effect},style:(_vm.styleLineOne)}),_vm._v(" "),_c('span',{staticClass:"vs-slider-line-two"}),_vm._v(" "),_c('span',{staticClass:"vs-slider-line-efect",class:{'run-effect':_vm.effect},style:(_vm.styleEfect)}),_vm._v(" "),_vm._l((_vm.countTicks),function(tick,index){return (_vm.ticks&&tick)?_c('span',{staticClass:"vs-slider-ticks",class:{'isEnd':index == _vm.countTicks-1},style:(_vm.styleTicks(index))}):_vm._e()})],2),_vm._v(" "),_c('button',{ref:"circle1",staticClass:"vs-circle-slider vs-circles-slider",class:{
      'hasTransition':_vm.effect,
      'isIquals':_vm.isIquals,
      'changeValue':_vm.changeValue,
      'isEndValue':_vm.value == _vm.max
    },style:(_vm.styleCircle),attrs:{"disabled":_vm.disabled},on:{"touchstart":function($event){_vm.activeFocus($event),_vm.actived = true},"mousedown":function($event){_vm.activeFocus($event),_vm.actived = true}}},[_c('span',{staticClass:"text-circle-slider",style:(_vm.styleText)},[_vm._v("\n      "+_vm._s(_vm.valueCircle1)+"\n      "),(_vm.textFixed)?_c('span',[_vm._v("\n        "+_vm._s(_vm.textFixed)+"\n      ")]):_vm._e(),_vm._v(" "),(_vm.icon)?_c('i',{staticClass:"material-icons"},[_vm._v("\n        "+_vm._s(_vm.icon)+"\n      ")]):_vm._e()])]),_vm._v(" "),(Array.isArray(_vm.value))?_c('button',{ref:"circle2",staticClass:"vs-circle-slider-two vs-circles-slider",class:{
      'hasTransition':_vm.effect,
      'isIquals':_vm.isIquals,
      'changeValue':_vm.changeValue,
      'isEndValue':_vm.value == _vm.max
    },style:(_vm.styleCircleTwo),attrs:{"disabled":_vm.disabled},on:{"touchstart":function($event){_vm.activeFocus($event),_vm.two = true,_vm.actived = true},"mousedown":function($event){_vm.activeFocus($event),_vm.two = true,_vm.actived = true}}},[_c('span',{staticClass:"text-circle-slider",style:(_vm.styleText)},[_vm._v("\n      "+_vm._s(_vm.valueCircle2)+"\n      "),(_vm.textFixed)?_c('span',[_vm._v("\n        "+_vm._s(_vm.textFixed)+"\n      ")]):_vm._e(),_vm._v(" "),(_vm.icon)?_c('i',{staticClass:"material-icons"},[_vm._v("\n        "+_vm._s(_vm.icon)+"\n      ")]):_vm._e()])]):_vm._e()])}
var vsSlider_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsSlider/vsSlider.vue
/* script */


/* template */

/* template functional */
var vsSlider_vue_template_functional_ = false
/* styles */
var vsSlider_vue_styles_ = null
/* scopeId */
var vsSlider_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var vsSlider_vue_module_identifier_ = null

var vsSlider_Component = Object(component_normalizer["a" /* default */])(
  vsSlider,
  vsSlider_render,
  vsSlider_staticRenderFns,
  vsSlider_vue_template_functional_,
  vsSlider_vue_styles_,
  vsSlider_vue_scopeId_,
  vsSlider_vue_module_identifier_
)

/* harmony default export */ var vsSlider_vsSlider = (vsSlider_Component.exports);

// CONCATENATED MODULE: ./src/components/vsSlider/index.js



/* harmony default export */ var components_vsSlider = (function (Vue) {
  Vue.component(vsSlider_vsSlider.name, vsSlider_vsSlider);
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsInputNumber/vsInputNumber.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    }
  },
  data: function data() {
    return {
      isChangeValue: false
    };
  },
  computed: {
    getLength: function getLength() {
      if (this.value != '') {
        return this.value.length * 9.1;
      } else {
        return 0;
      }
    },
    getColor: function getColor() {
      return utils_color["a" /* default */].getColor(this.color, 1);
    },
    listeners: function listeners() {
      var _this = this;

      return objectSpread_default()({}, this.$listeners, {
        blur: function blur(evt) {
          if (parseInt(_this.value) > parseInt(_this.max)) {
            _this.$emit('input', _this.max);
          } else if (parseInt(_this.value) < parseInt(_this.min)) {
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

      if (this.value == '') {
        newValue = 0;
      }

      if (this.max ? parseInt(this.value) < parseInt(this.max) : true) {
        newValue = parseInt(this.value) + 1;
        this.$emit('input', newValue);
      }
    },
    less: function less() {
      var newValue;

      if (this.value == '') {
        newValue = 0;
      }

      if (this.min ? parseInt(this.value) > parseInt(this.min) : true) {
        newValue = parseInt(this.value) - 1;
        this.$emit('input', newValue);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2dd4fe12","hasScoped":false,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsInputNumber/vsInputNumber.vue
var vsInputNumber_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-input-number",class:[
    ("vs-input-number-size-" + _vm.size),
    ("vs-input-number-" + _vm.color),
    {'isChangeValue':_vm.isChangeValue}
  ]},[_c('button',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.less),expression:"less"}],staticClass:"btn-less",style:({
      background:_vm.getColor,
      opacity:(_vm.value == _vm.min?.5:1)
    }),attrs:{"disabled":_vm.$attrs.disabled,"type":"button"}},[_c('i',{staticClass:"material-icons"},[_vm._v("\n      remove\n    ")])]),_vm._v(" "),_c('input',_vm._g(_vm._b({ref:"input",style:({
      width:(_vm.getLength + "px")
    }),attrs:{"type":"number"},domProps:{"value":_vm.value}},'input',_vm.$attrs,false),_vm.listeners)),_vm._v(" "),_c('button',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.plus),expression:"plus"}],staticClass:"btn-plus",style:({
      background:_vm.getColor,
      opacity:_vm.value == _vm.max?.5:1
    }),attrs:{"disabled":_vm.$attrs.disabled,"type":"button"}},[_c('i',{staticClass:"material-icons"},[_vm._v("\n      add\n    ")])])])}
var vsInputNumber_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsInputNumber/vsInputNumber.vue
/* script */


/* template */

/* template functional */
var vsInputNumber_vue_template_functional_ = false
/* styles */
var vsInputNumber_vue_styles_ = null
/* scopeId */
var vsInputNumber_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var vsInputNumber_vue_module_identifier_ = null

var vsInputNumber_Component = Object(component_normalizer["a" /* default */])(
  vsInputNumber,
  vsInputNumber_render,
  vsInputNumber_staticRenderFns,
  vsInputNumber_vue_template_functional_,
  vsInputNumber_vue_styles_,
  vsInputNumber_vue_scopeId_,
  vsInputNumber_vue_module_identifier_
)

/* harmony default export */ var vsInputNumber_vsInputNumber = (vsInputNumber_Component.exports);

// CONCATENATED MODULE: ./src/components/vsInputNumber/index.js



/* harmony default export */ var components_vsInputNumber = (function (Vue) {
  Vue.component(vsInputNumber_vsInputNumber.name, vsInputNumber_vsInputNumber);
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsTooltip/vsTooltip.vue
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vsTooltip = ({
  name: 'VsTooltip',
  data: function data() {
    return {
      cords: {}
    };
  },
  computed: {
    style: function style() {
      return {
        left: this.cords.left,
        top: this.cords.top
      };
    }
  },
  mounted: function mounted() {
    utils.insertBody(this.$refs.vstooltip);
  },
  methods: {
    mouseoverx: function mouseoverx() {
      var cords = utils.changePosition(this.$refs.convstooltip, this.$refs.vstooltip, true);
      this.cords = cords;
      console.log(cords);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1d989cfd","hasScoped":false,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsTooltip/vsTooltip.vue
var vsTooltip_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"convstooltip",staticClass:"con-vs-tooltip",on:{"mouseover":_vm.mouseoverx}},[_c('div',{ref:"vstooltip",staticClass:"vs-tooltip",style:(_vm.style)},[_vm._v("\n    hola mundo "+_vm._s(this.cords.left)+"\n  ")]),_vm._v(" "),_vm._t("default")],2)}
var vsTooltip_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsTooltip/vsTooltip.vue
/* script */


/* template */

/* template functional */
var vsTooltip_vue_template_functional_ = false
/* styles */
var vsTooltip_vue_styles_ = null
/* scopeId */
var vsTooltip_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var vsTooltip_vue_module_identifier_ = null

var vsTooltip_Component = Object(component_normalizer["a" /* default */])(
  vsTooltip,
  vsTooltip_render,
  vsTooltip_staticRenderFns,
  vsTooltip_vue_template_functional_,
  vsTooltip_vue_styles_,
  vsTooltip_vue_scopeId_,
  vsTooltip_vue_module_identifier_
)

/* harmony default export */ var vsTooltip_vsTooltip = (vsTooltip_Component.exports);

// CONCATENATED MODULE: ./src/components/vsTooltip/index.js



/* harmony default export */ var components_vsTooltip = (function (Vue) {
  Vue.component(vsTooltip_vsTooltip.name, vsTooltip_vsTooltip);
});
// EXTERNAL MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("dybq");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsUpload/vsUpload.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'VsUpload',
  filter: {
    reverse: function reverse(value) {
      return value.slice().reverse();
    }
  },
  props: {
    title: {
      type: String,
      default: 'Upload file'
    },
    vsFile: {
      type: String,
      default: null
    },
    multiple: {
      type: Boolean,
      default: false
    },
    arrayFiles: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    vsFileList: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      url: '',
      colorx: 'rgb(255, 255, 255)',
      urlview: '',
      view: false
    };
  },
  computed: {
    reverseImgs: function reverseImgs() {
      if (this.arrayFiles.length > 0) {
        return this.arrayFiles.slice().reverse();
      }
    }
  },
  mounted: function mounted() {
    var elx = this.$refs.viewx;
    document.body.insertBefore(elx, document.body.firstChild);
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
    multipleUploadx: function multipleUploadx() {
      var _this4 = this;

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
      var file = this.$refs.inputx.files[0];
      var reader = new FileReader(); // obtener color

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
      reader.onload = uploadImage;
      reader.readAsDataURL(file); // this.$emit('file',e.target.value,e)
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4a5fbb2a","hasScoped":false,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsUpload/vsUpload.vue
var vsUpload_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contiene-upload",class:{'con-multiple':_vm.multiple}},[(!_vm.multiple)?_c('div',{staticClass:"con-upload"},[_c('div',{staticClass:"con-subir"},[_c('h3',[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('i',{staticClass:"material-icons"},[_vm._v("publish")])]),_vm._v(" "),_c('input',{ref:"inputx",staticClass:"input-upload",attrs:{"type":"file","name":"","value":""},on:{"change":function($event){_vm.uploadx($event)}}}),_vm._v(" "),_c('div',{}),_vm._v(" "),_c('div',{ref:"conimg",staticClass:"con-img-upload",class:{'oculto':_vm.url==''},style:({'background':_vm.colorx})},[_c('div',{staticClass:"header-upload"},[_c('div',{staticClass:"x-img",on:{"click":function($event){_vm.xUrl(),_vm.colorx='rgb(255, 255, 255)'}}},[_c('i',{staticClass:"material-icons"},[_vm._v("close")])])]),_vm._v(" "),_c('img',{ref:"imgx",attrs:{"src":_vm.url,"alt":""},on:{"click":_vm.verview}})])]):_vm._e(),_vm._v(" "),(_vm.multiple)?_c('div',{staticClass:"con-multiple-upload"},[_c('ul',{ref:"ulmultiple",staticClass:"con-multiples-imgs"},[_vm._l((_vm.reverseImgs),function(file,index){return _c('li',{staticClass:"con-imgs"},[_c('div',{staticClass:"x-img",on:{"click":function($event){_vm.quitarImage(index)}}},[_c('i',{staticClass:"material-icons"},[_vm._v("close")])]),_vm._v(" "),_c('img',{ref:'vs'+index,refInFor:true,attrs:{"src":file.src,"alt":""},on:{"click":function($event){_vm.view=true,_vm.urlview=file.src}}})])}),_vm._v(" "),_c('li',{staticClass:"agregarx"},[_c('input',{ref:"inputsx",staticClass:"input-upload",attrs:{"type":"file","name":"","value":""},on:{"change":function($event){_vm.multipleUploadx($event)}}})])],2)]):_vm._e(),_vm._v(" "),_c('transition',{attrs:{"name":"fade-upload"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.view),expression:"view"}],ref:"viewx",staticClass:"view-upload",on:{"click":function($event){_vm.quitarView($event)}}},[_c('div',{staticClass:"x-view",on:{"click":function($event){_vm.view=false}}},[_c('i',{staticClass:"material-icons"},[_vm._v("close")])]),_vm._v(" "),_c('img',{attrs:{"src":_vm.urlview,"alt":""}})])])],1)}
var vsUpload_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsUpload/vsUpload.vue
function injectStyle (context) {
  __webpack_require__("qEx5")
}
/* script */


/* template */

/* template functional */
var vsUpload_vue_template_functional_ = false
/* styles */
var vsUpload_vue_styles_ = injectStyle
/* scopeId */
var vsUpload_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var vsUpload_vue_module_identifier_ = null

var vsUpload_Component = Object(component_normalizer["a" /* default */])(
  vsUpload,
  vsUpload_render,
  vsUpload_staticRenderFns,
  vsUpload_vue_template_functional_,
  vsUpload_vue_styles_,
  vsUpload_vue_scopeId_,
  vsUpload_vue_module_identifier_
)

/* harmony default export */ var vsUpload_vsUpload = (vsUpload_Component.exports);

// CONCATENATED MODULE: ./src/components/vsUpload/index.js



/* harmony default export */ var components_vsUpload = (function (Vue) {
  Vue.component(vsUpload_vsUpload.name, vsUpload_vsUpload);
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsPopup/vsPopup.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'VsPopup',
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-74922580","hasScoped":true,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsPopup/vsPopup.vue
var vsPopup_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fadex"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.vsActive),expression:"vsActive"}],ref:"conpopup",staticClass:"con-popup"},[_c('div',_vm._b({staticClass:"vs-popup",class:{'fullscreen':_vm.vsFullscreen},style:({'background':_vm.vsBackgroundColor?/[#()]/.test(_vm.vsBackgroundColor)?_vm.vsBackgroundColor:("rgba(var(--" + _vm.vsBackgroundColor + "),1)"):'rgb(255,255,255)',
               'color':_vm.colorx,
      })},'div',_vm.$attrs,false),[_c('header',[(_vm.vsTitle!='')?_c('h2',[_vm._v("\n          "+_vm._s(_vm.vsTitle)+"\n        ")]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"vs-popup-cancel",style:({'background':_vm.vsCloseButtonColor?/[#()]/.test(_vm.vsCloseButtonColor)?_vm.vsCloseButtonColor:("rgba(var(--" + _vm.vsCloseButtonColor + "),1)"):'rgb(250, 250, 250)',
                   'color':_vm.colorButtonx
          }),on:{"click":function($event){_vm.$emit('vs-cancel')}}},[_c('i',{staticClass:"material-icons"},[_vm._v("close")])])]),_vm._v(" "),_c('div',{staticClass:"con-htmlx"},[_vm._t("default")],2)])])])}
var vsPopup_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsPopup/vsPopup.vue
function vsPopup_injectStyle (context) {
  __webpack_require__("iumD")
}
/* script */


/* template */

/* template functional */
var vsPopup_vue_template_functional_ = false
/* styles */
var vsPopup_vue_styles_ = vsPopup_injectStyle
/* scopeId */
var vsPopup_vue_scopeId_ = "data-v-74922580"
/* moduleIdentifier (server only) */
var vsPopup_vue_module_identifier_ = null

var vsPopup_Component = Object(component_normalizer["a" /* default */])(
  vsPopup,
  vsPopup_render,
  vsPopup_staticRenderFns,
  vsPopup_vue_template_functional_,
  vsPopup_vue_styles_,
  vsPopup_vue_scopeId_,
  vsPopup_vue_module_identifier_
)

/* harmony default export */ var vsPopup_vsPopup = (vsPopup_Component.exports);

// CONCATENATED MODULE: ./src/components/vsPopup/index.js



/* harmony default export */ var components_vsPopup = (function (Vue) {
  Vue.component(vsPopup_vsPopup.name, vsPopup_vsPopup);
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsAlert/vsAlert.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'VsAlert',
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4163b330","hasScoped":true,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsAlert/vsAlert.vue
var vsAlert_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[(_vm.vsActive)?_c('div',_vm._g(_vm._b({staticClass:"con-vs-alert",class:{
      'con-icon':_vm.vsIcon,
    },style:({
      'background':_vm.vsColor?/[#()]/.test(_vm.vsColor)?("rgba(" + (_vm.vsColor.replace(/[rgb()]/g,'')) + ",.1)"):("rgba(var(--" + _vm.vsColor + "),.1)"):'rgba(var(--primary),.1)',
      'color':_vm.vsColor?/[#()]/.test(_vm.vsColor)?_vm.vsColor:("rgba(var(--" + _vm.vsColor + "),1)"):'rgba(var(--primary),1)',
      'margin-top':_vm.vsMargin,
      'margin-bottom':_vm.vsMargin,
    })},'div',_vm.$attrs,false),_vm.$listeners),[(_vm.vsIcon)?_c('i',{staticClass:"material-icons icon-alert"},[_vm._v(_vm._s(_vm.vsIcon))]):_vm._e(),_vm._v(" "),(_vm.vsClosable)?_c('div',{staticClass:"con-x",on:{"click":function($event){_vm.$emit('update:vsActive',false)}}},[_c('i',{staticClass:"material-icons"},[_vm._v("close")])]):_vm._e(),_vm._v(" "),(_vm.vsTitle)?_c('h3',{staticClass:"titlex",style:({'background':'$primary'})},[_vm._v(_vm._s(_vm.vsTitle))]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"vs-alert"},[_vm._t("default")],2)]):_vm._e()])}
var vsAlert_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsAlert/vsAlert.vue
function vsAlert_injectStyle (context) {
  __webpack_require__("wK0f")
}
/* script */


/* template */

/* template functional */
var vsAlert_vue_template_functional_ = false
/* styles */
var vsAlert_vue_styles_ = vsAlert_injectStyle
/* scopeId */
var vsAlert_vue_scopeId_ = "data-v-4163b330"
/* moduleIdentifier (server only) */
var vsAlert_vue_module_identifier_ = null

var vsAlert_Component = Object(component_normalizer["a" /* default */])(
  vsAlert,
  vsAlert_render,
  vsAlert_staticRenderFns,
  vsAlert_vue_template_functional_,
  vsAlert_vue_styles_,
  vsAlert_vue_scopeId_,
  vsAlert_vue_module_identifier_
)

/* harmony default export */ var vsAlert_vsAlert = (vsAlert_Component.exports);

// CONCATENATED MODULE: ./src/components/vsAlert/index.js



/* harmony default export */ var components_vsAlert = (function (Vue) {
  Vue.component(vsAlert_vsAlert.name, vsAlert_vsAlert);
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsChip/vsChip.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'VsChip',
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-523dd0ee","hasScoped":true,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsChip/vsChip.vue
var vsChip_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.eliminado)?_c('div',{staticClass:"con-vs-chip",class:{
    'con-icon':_vm.vsIcon,
  },style:({
    'background':_vm.vsColor?/[#()]/.test(_vm.vsColor)?("rgba(" + (_vm.vsColor.replace(/[rgb()]/g,'')) + ",.1)"):("rgba(var(--" + _vm.vsColor + "),.1)"):'rgba(var(--primary),.1)',
    'color':_vm.vsColor?/[#()]/.test(_vm.vsColor)?_vm.vsColor:("rgba(var(--" + _vm.vsColor + "),1)"):'rgba(var(--primary),1)'
  })},[(_vm.vsIcon)?_c('i',{staticClass:"material-icons icon-chip"},[_vm._v(_vm._s(_vm.vsIcon))]):_vm._e(),_vm._v(" "),(_vm.vsText)?_c('h3',{staticClass:"textx"},[_vm._v(_vm._s(_vm.vsText))]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"vs-chip"},[_vm._t("default")],2),_vm._v(" "),(_vm.vsClosable)?_c('div',{staticClass:"con-x",on:{"click":_vm.remove}},[_c('i',{staticClass:"material-icons"},[_vm._v("close")])]):_vm._e()]):_vm._e()}
var vsChip_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsChip/vsChip.vue
function vsChip_injectStyle (context) {
  __webpack_require__("xOhX")
}
/* script */


/* template */

/* template functional */
var vsChip_vue_template_functional_ = false
/* styles */
var vsChip_vue_styles_ = vsChip_injectStyle
/* scopeId */
var vsChip_vue_scopeId_ = "data-v-523dd0ee"
/* moduleIdentifier (server only) */
var vsChip_vue_module_identifier_ = null

var vsChip_Component = Object(component_normalizer["a" /* default */])(
  vsChip,
  vsChip_render,
  vsChip_staticRenderFns,
  vsChip_vue_template_functional_,
  vsChip_vue_styles_,
  vsChip_vue_scopeId_,
  vsChip_vue_module_identifier_
)

/* harmony default export */ var vsChip_vsChip = (vsChip_Component.exports);

// CONCATENATED MODULE: ./src/components/vsChip/index.js



/* harmony default export */ var components_vsChip = (function (Vue) {
  Vue.component(vsChip_vsChip.name, vsChip_vsChip);
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsChips/vsChips.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'VsChips',
  components: {
    vsChip: vsChip_vsChip
  },
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-bad052d8","hasScoped":false,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsChips/vsChips.vue
var vsChips_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_c('div',{staticClass:"con-chips",class:{'no-items':_vm.itemsx.length==0}},[_vm._l((_vm.itemsx),function(item,index){return _c('vs-chip',{key:index,attrs:{"vs-color":_vm.vsColor,"item":"","vs-closable":""},on:{"vs-remove":function($event){_vm.removeItem(index)}}},[_vm._v("\n      "+_vm._s(item)+"\n    ")])}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.newChip),expression:"newChip"}],attrs:{"placeholder":_vm.itemsx.length>0?null:_vm.placeholder,"type":"text","name":"","value":""},domProps:{"value":(_vm.newChip)},on:{"keypress":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.addItem($event)},"input":function($event){if($event.target.composing){ return; }_vm.newChip=$event.target.value}}}),_vm._v(" "),_c('div',{staticClass:"x-global",on:{"click":_vm.removeTotalItems}},[_c('i',{staticClass:"material-icons"},[_vm._v("close")])])],2)])}
var vsChips_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsChips/vsChips.vue
function vsChips_injectStyle (context) {
  __webpack_require__("i3Zx")
}
/* script */


/* template */

/* template functional */
var vsChips_vue_template_functional_ = false
/* styles */
var vsChips_vue_styles_ = vsChips_injectStyle
/* scopeId */
var vsChips_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var vsChips_vue_module_identifier_ = null

var vsChips_Component = Object(component_normalizer["a" /* default */])(
  vsChips,
  vsChips_render,
  vsChips_staticRenderFns,
  vsChips_vue_template_functional_,
  vsChips_vue_styles_,
  vsChips_vue_scopeId_,
  vsChips_vue_module_identifier_
)

/* harmony default export */ var vsChips_vsChips = (vsChips_Component.exports);

// CONCATENATED MODULE: ./src/components/vsChips/index.js



/* harmony default export */ var components_vsChips = (function (Vue) {
  Vue.component(vsChips_vsChips.name, vsChips_vsChips);
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsProgress/vsProgress.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'VsProgress',
  props: {
    vsHeight: {
      type: [Number, String],
      default: 6
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
  watch: {
    vsPercent: function vsPercent() {
      this.percent = this.vsPercent;
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
  methods: {
    returnColorRGB: function returnColorRGB(vsColor) {
      var colorx = utils_color["a" /* default */].hexToRgb(vsColor);
      return "rgba(".concat(colorx.r, ",").concat(colorx.g, ",").concat(colorx.b, ",.1)");
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-c0834778","hasScoped":true,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsProgress/vsProgress.vue
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
    })}),_vm._v(" "),(_vm.vsIndeterminate)?_c('div',{staticClass:"indeterminate-bar",style:({
      'background':_vm.vsColor?/[#()]/.test(_vm.vsColor)?("rgba(" + (_vm.vsColor.replace(/[rgb()]/g,'')) + ",1)"):("rgba(var(--" + _vm.vsColor + "),1)"):'rgba(var(--primary),1)',
      'width':_vm.percent+'%'
    })}):_vm._e()])}
var vsProgress_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsProgress/vsProgress.vue
function vsProgress_injectStyle (context) {
  __webpack_require__("65oP")
}
/* script */


/* template */

/* template functional */
var vsProgress_vue_template_functional_ = false
/* styles */
var vsProgress_vue_styles_ = vsProgress_injectStyle
/* scopeId */
var vsProgress_vue_scopeId_ = "data-v-c0834778"
/* moduleIdentifier (server only) */
var vsProgress_vue_module_identifier_ = null

var vsProgress_Component = Object(component_normalizer["a" /* default */])(
  vsProgress,
  vsProgress_render,
  vsProgress_staticRenderFns,
  vsProgress_vue_template_functional_,
  vsProgress_vue_styles_,
  vsProgress_vue_scopeId_,
  vsProgress_vue_module_identifier_
)

/* harmony default export */ var vsProgress_vsProgress = (vsProgress_Component.exports);

// CONCATENATED MODULE: ./src/components/vsProgress/index.js



/* harmony default export */ var components_vsProgress = (function (Vue) {
  Vue.component(vsProgress_vsProgress.name, vsProgress_vsProgress);
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsCard/vsCard.vue
//
//
//
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
  name: 'VsCard',
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-10306c91","hasScoped":true,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsCard/vsCard.vue
var vsCard_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-card",class:{ actionable: _vm.actionable },style:({
    /* 'border-color':vsColor?/[#()]/.test(vsColor)?vsColor:`rgba(var(--${vsColor}),1)`:'rgb(255,255,255)' */
  }),on:{"click":_vm.clickCard}},[_vm._t("default")],2)}
var vsCard_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsCard/vsCard.vue
function vsCard_injectStyle (context) {
  __webpack_require__("8UWi")
  __webpack_require__("AUK/")
}
/* script */


/* template */

/* template functional */
var vsCard_vue_template_functional_ = false
/* styles */
var vsCard_vue_styles_ = vsCard_injectStyle
/* scopeId */
var vsCard_vue_scopeId_ = "data-v-10306c91"
/* moduleIdentifier (server only) */
var vsCard_vue_module_identifier_ = null

var vsCard_Component = Object(component_normalizer["a" /* default */])(
  vsCard,
  vsCard_render,
  vsCard_staticRenderFns,
  vsCard_vue_template_functional_,
  vsCard_vue_styles_,
  vsCard_vue_scopeId_,
  vsCard_vue_module_identifier_
)

/* harmony default export */ var vsCard_vsCard = (vsCard_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsCard/vsCardActions.vue
//
//
//
//
//
//
//
//

/* harmony default export */ var vsCardActions = ({
  name: 'VsCardActions'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1a8e5218","hasScoped":true,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsCard/vsCardActions.vue
var vsCardActions_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-vs-card-actions"},[_vm._t("default")],2)}
var vsCardActions_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsCard/vsCardActions.vue
function vsCardActions_injectStyle (context) {
  __webpack_require__("05iV")
}
/* script */


/* template */

/* template functional */
var vsCardActions_vue_template_functional_ = false
/* styles */
var vsCardActions_vue_styles_ = vsCardActions_injectStyle
/* scopeId */
var vsCardActions_vue_scopeId_ = "data-v-1a8e5218"
/* moduleIdentifier (server only) */
var vsCardActions_vue_module_identifier_ = null

var vsCardActions_Component = Object(component_normalizer["a" /* default */])(
  vsCardActions,
  vsCardActions_render,
  vsCardActions_staticRenderFns,
  vsCardActions_vue_template_functional_,
  vsCardActions_vue_styles_,
  vsCardActions_vue_scopeId_,
  vsCardActions_vue_module_identifier_
)

/* harmony default export */ var vsCard_vsCardActions = (vsCardActions_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsCard/vsCardBody.vue
//
//
//
//
//
//
//
//

/* harmony default export */ var vsCardBody = ({
  name: 'VsCardBody'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3f2c3147","hasScoped":true,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsCard/vsCardBody.vue
var vsCardBody_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-vs-card-body"},[_vm._t("default")],2)}
var vsCardBody_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsCard/vsCardBody.vue
function vsCardBody_injectStyle (context) {
  __webpack_require__("ul+m")
}
/* script */


/* template */

/* template functional */
var vsCardBody_vue_template_functional_ = false
/* styles */
var vsCardBody_vue_styles_ = vsCardBody_injectStyle
/* scopeId */
var vsCardBody_vue_scopeId_ = "data-v-3f2c3147"
/* moduleIdentifier (server only) */
var vsCardBody_vue_module_identifier_ = null

var vsCardBody_Component = Object(component_normalizer["a" /* default */])(
  vsCardBody,
  vsCardBody_render,
  vsCardBody_staticRenderFns,
  vsCardBody_vue_template_functional_,
  vsCardBody_vue_styles_,
  vsCardBody_vue_scopeId_,
  vsCardBody_vue_module_identifier_
)

/* harmony default export */ var vsCard_vsCardBody = (vsCardBody_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsCard/vsCardHeader.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'VsCardHeader',
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3838e486","hasScoped":true,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsCard/vsCardHeader.vue
var vsCardHeader_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-vs-card-header",style:({
    'background-color':_vm.vsFill?_vm.vsBackgroundColor?/[#()]/.test(_vm.vsBackgroundColor)?_vm.vsBackgroundColor:("rgba(var(--" + _vm.vsBackgroundColor + "),1)"):'rgb(244,244,244)':'rgb(244,244,244)',
    'color':_vm.vsFill?_vm.colorx:_vm.vsBackgroundColor?/[#()]/.test(_vm.vsBackgroundColor)?_vm.vsBackgroundColor:("rgba(var(--" + _vm.vsBackgroundColor + "),1)"):_vm.colorx,
    'border-color':!_vm.vsFill?_vm.vsBackgroundColor?/[#()]/.test(_vm.vsBackgroundColor)?_vm.vsBackgroundColor:("rgba(var(--" + _vm.vsBackgroundColor + "),1)"):'rgb(244,244,244)':'transparent',
    'border-left':!_vm.vsFill?'3px solid':'none',
    'border-top-left-radius':!_vm.vsFill?'5px':'inherit'
  })},[(this.$slots.default)?_c('div',{staticClass:"card-icon"},[_vm._t("default")],2):_vm._e(),_vm._v(" "),(_vm.vsIcon)?_c('div',{staticClass:"card-icon"},[_c('i',{staticClass:"material-icons"},[_vm._v(_vm._s(_vm.vsIcon))])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"card-titles"},[(_vm.vsTitle)?_c('div',{staticClass:"card-title"},[_vm._v(_vm._s(_vm.vsTitle))]):_vm._e(),_vm._v(" "),(_vm.vsSubtitle)?_c('div',{staticClass:"card-subtitle"},[_vm._v(_vm._s(_vm.vsSubtitle))]):_vm._e()])])}
var vsCardHeader_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsCard/vsCardHeader.vue
function vsCardHeader_injectStyle (context) {
  __webpack_require__("iKtQ")
}
/* script */


/* template */

/* template functional */
var vsCardHeader_vue_template_functional_ = false
/* styles */
var vsCardHeader_vue_styles_ = vsCardHeader_injectStyle
/* scopeId */
var vsCardHeader_vue_scopeId_ = "data-v-3838e486"
/* moduleIdentifier (server only) */
var vsCardHeader_vue_module_identifier_ = null

var vsCardHeader_Component = Object(component_normalizer["a" /* default */])(
  vsCardHeader,
  vsCardHeader_render,
  vsCardHeader_staticRenderFns,
  vsCardHeader_vue_template_functional_,
  vsCardHeader_vue_styles_,
  vsCardHeader_vue_scopeId_,
  vsCardHeader_vue_module_identifier_
)

/* harmony default export */ var vsCard_vsCardHeader = (vsCardHeader_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsCard/vsCardMedia.vue
//
//
//
//
//
//
//
//

/* harmony default export */ var vsCardMedia = ({
  name: 'VsCardMedia',
  props: {
    vsMedia: {
      type: String,
      default: null
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-611acd9a","hasScoped":true,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsCard/vsCardMedia.vue
var vsCardMedia_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-vs-card-media"},[_c('img',{attrs:{"src":_vm.vsMedia}})])}
var vsCardMedia_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsCard/vsCardMedia.vue
function vsCardMedia_injectStyle (context) {
  __webpack_require__("y78y")
}
/* script */


/* template */

/* template functional */
var vsCardMedia_vue_template_functional_ = false
/* styles */
var vsCardMedia_vue_styles_ = vsCardMedia_injectStyle
/* scopeId */
var vsCardMedia_vue_scopeId_ = "data-v-611acd9a"
/* moduleIdentifier (server only) */
var vsCardMedia_vue_module_identifier_ = null

var vsCardMedia_Component = Object(component_normalizer["a" /* default */])(
  vsCardMedia,
  vsCardMedia_render,
  vsCardMedia_staticRenderFns,
  vsCardMedia_vue_template_functional_,
  vsCardMedia_vue_styles_,
  vsCardMedia_vue_scopeId_,
  vsCardMedia_vue_module_identifier_
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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsTopbar/vsTopbar.vue
//
//
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
  name: 'VsTopbar',
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-65b7a84f","hasScoped":true,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsTopbar/vsTopbar.vue
var vsTopbar_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-topbar",style:({
    'background':_vm.vsColor?/[#()]/.test(_vm.vsColor)?_vm.vsColor:("rgba(var(--" + _vm.vsColor + "),1)"):'rgb(244,244,244)',
    'color':_vm.colorx
  })},[_vm._t("default")],2)}
var vsTopbar_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsTopbar/vsTopbar.vue
function vsTopbar_injectStyle (context) {
  __webpack_require__("lBHY")
}
/* script */


/* template */

/* template functional */
var vsTopbar_vue_template_functional_ = false
/* styles */
var vsTopbar_vue_styles_ = vsTopbar_injectStyle
/* scopeId */
var vsTopbar_vue_scopeId_ = "data-v-65b7a84f"
/* moduleIdentifier (server only) */
var vsTopbar_vue_module_identifier_ = null

var vsTopbar_Component = Object(component_normalizer["a" /* default */])(
  vsTopbar,
  vsTopbar_render,
  vsTopbar_staticRenderFns,
  vsTopbar_vue_template_functional_,
  vsTopbar_vue_styles_,
  vsTopbar_vue_scopeId_,
  vsTopbar_vue_module_identifier_
)

/* harmony default export */ var vsTopbar_vsTopbar = (vsTopbar_Component.exports);

// CONCATENATED MODULE: ./src/components/vsTopbar/index.js



/* harmony default export */ var components_vsTopbar = (function (Vue) {
  Vue.component(vsTopbar_vsTopbar.name, vsTopbar_vsTopbar);
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsList/vsList.vue
//
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
  name: 'VsList'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ff418a54","hasScoped":true,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsList/vsList.vue
var vsList_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-list",style:({
    /* 'border-color':vsColor?/[#()]/.test(vsColor)?vsColor:`rgba(var(--${vsColor}),1)`:'rgb(255,255,255)' */
  })},[_vm._t("default")],2)}
var vsList_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsList/vsList.vue
function vsList_injectStyle (context) {
  __webpack_require__("oLOE")
}
/* script */


/* template */

/* template functional */
var vsList_vue_template_functional_ = false
/* styles */
var vsList_vue_styles_ = vsList_injectStyle
/* scopeId */
var vsList_vue_scopeId_ = "data-v-ff418a54"
/* moduleIdentifier (server only) */
var vsList_vue_module_identifier_ = null

var vsList_Component = Object(component_normalizer["a" /* default */])(
  vsList,
  vsList_render,
  vsList_staticRenderFns,
  vsList_vue_template_functional_,
  vsList_vue_styles_,
  vsList_vue_scopeId_,
  vsList_vue_module_identifier_
)

/* harmony default export */ var vsList_vsList = (vsList_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsAvatar/vsAvatar.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'VsAvatar',
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-08d5bdfa","hasScoped":false,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsAvatar/vsAvatar.vue
var vsAvatar_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g(_vm._b({staticClass:"con-vs-avatar",class:[_vm.vsSize],style:({
    'width':/[px]/.test(_vm.vsSize)?("" + _vm.vsSize):null,
    'height':/[px]/.test(_vm.vsSize)?("" + _vm.vsSize):null,
    'background':_vm.vsColor?/[#()]/.test(_vm.vsColor)?_vm.vsColor:("rgba(var(--" + _vm.vsColor + "),1)"):'rgb(var(--primary))'
  })},'div',_vm.$attrs,false),_vm.$listeners),[(_vm.vsBadge && _vm.vsBadge > 0)?_c('div',{staticClass:"dot-count",class:{
      'badgeNumber':typeof _vm.vsBadge != 'boolean',
    },style:({
      'background':_vm.vsBadgeColor?/[#()]/.test(_vm.vsBadgeColor)?_vm.vsBadgeColor:("rgba(var(--" + _vm.vsBadgeColor + "),1)"):'rgb(var(--primary))'
    })},[_vm._v("\n    "+_vm._s(typeof _vm.vsBadge != 'boolean'?_vm.vsBadge:null)+"\n  ")]):_vm._e(),_vm._v(" "),(_vm.vsSrc)?_c('div',{staticClass:"con-img"},[_c('img',{attrs:{"src":_vm.vsSrc,"alt":""}})]):_c('span',{staticClass:"vs-avatar-text",class:{
      'material-icons':!_vm.vsText
    },style:({
      'transform':("translate(-50%,-50%) scale(" + _vm.returnScale + ")"),
      'color':_vm.vsTextColor?/[#()]/.test(_vm.vsTextColor)?_vm.vsTextColor:("rgba(var(--" + _vm.vsTextColor + "),1)"):'rgb(var(--primary))'
    }),attrs:{"title":_vm.vsText}},[_vm._v("\n    "+_vm._s(_vm.vsText?_vm.returnText:_vm.vsIcon)+"\n  ")])])}
var vsAvatar_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsAvatar/vsAvatar.vue
function vsAvatar_injectStyle (context) {
  __webpack_require__("DZTM")
}
/* script */


/* template */

/* template functional */
var vsAvatar_vue_template_functional_ = false
/* styles */
var vsAvatar_vue_styles_ = vsAvatar_injectStyle
/* scopeId */
var vsAvatar_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var vsAvatar_vue_module_identifier_ = null

var vsAvatar_Component = Object(component_normalizer["a" /* default */])(
  vsAvatar,
  vsAvatar_render,
  vsAvatar_staticRenderFns,
  vsAvatar_vue_template_functional_,
  vsAvatar_vue_styles_,
  vsAvatar_vue_scopeId_,
  vsAvatar_vue_module_identifier_
)

/* harmony default export */ var vsAvatar_vsAvatar = (vsAvatar_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsList/vsListItem.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'VsListItem',
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-288a9c0b","hasScoped":true,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsList/vsListItem.vue
var vsListItem_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-list-item"},[_c('div',{staticClass:"list-avatar"},[_vm._t("avatar")],2),_vm._v(" "),(_vm.vsIcon)?_c('div',{staticClass:"list-icon"},[_c('i',{staticClass:"material-icons"},[_vm._v(_vm._s(_vm.vsIcon))])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"list-titles"},[(_vm.vsTitle)?_c('div',{staticClass:"list-title"},[_vm._v(_vm._s(_vm.vsTitle))]):_vm._e(),_vm._v(" "),(_vm.vsSubtitle)?_c('div',{staticClass:"list-subtitle"},[_vm._v(_vm._s(_vm.vsSubtitle))]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"list-slot"},[_vm._t("default")],2)])}
var vsListItem_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsList/vsListItem.vue
function vsListItem_injectStyle (context) {
  __webpack_require__("Re+E")
}
/* script */


/* template */

/* template functional */
var vsListItem_vue_template_functional_ = false
/* styles */
var vsListItem_vue_styles_ = vsListItem_injectStyle
/* scopeId */
var vsListItem_vue_scopeId_ = "data-v-288a9c0b"
/* moduleIdentifier (server only) */
var vsListItem_vue_module_identifier_ = null

var vsListItem_Component = Object(component_normalizer["a" /* default */])(
  vsListItem,
  vsListItem_render,
  vsListItem_staticRenderFns,
  vsListItem_vue_template_functional_,
  vsListItem_vue_styles_,
  vsListItem_vue_scopeId_,
  vsListItem_vue_module_identifier_
)

/* harmony default export */ var vsList_vsListItem = (vsListItem_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsList/vsListHeader.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'VsListHeader',
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2c87fd13","hasScoped":true,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsList/vsListHeader.vue
var vsListHeader_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-list-header",class:{
    'with-icon':_vm.vsIcon,
  },style:({
    'color':_vm.vsColor?/[#()]/.test(_vm.vsColor)?_vm.vsColor:("rgba(var(--" + _vm.vsColor + "),1)"):'rgb(244,244,244)',
    'border-color':_vm.vsColor?/[#()]/.test(_vm.vsColor)?_vm.vsColor:("rgba(var(--" + _vm.vsColor + "),1)"):'rgb(244,244,244)',
  })},[(_vm.vsIcon)?_c('div',{staticClass:"list-icon"},[_c('i',{staticClass:"material-icons"},[_vm._v(_vm._s(_vm.vsIcon))])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"list-titles"},[(_vm.vsTitle)?_c('div',{staticClass:"list-title"},[_vm._v(_vm._s(_vm.vsTitle))]):_vm._e()])])}
var vsListHeader_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsList/vsListHeader.vue
function vsListHeader_injectStyle (context) {
  __webpack_require__("47Mc")
}
/* script */


/* template */

/* template functional */
var vsListHeader_vue_template_functional_ = false
/* styles */
var vsListHeader_vue_styles_ = vsListHeader_injectStyle
/* scopeId */
var vsListHeader_vue_scopeId_ = "data-v-2c87fd13"
/* moduleIdentifier (server only) */
var vsListHeader_vue_module_identifier_ = null

var vsListHeader_Component = Object(component_normalizer["a" /* default */])(
  vsListHeader,
  vsListHeader_render,
  vsListHeader_staticRenderFns,
  vsListHeader_vue_template_functional_,
  vsListHeader_vue_styles_,
  vsListHeader_vue_scopeId_,
  vsListHeader_vue_module_identifier_
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
var toConsumableArray = __webpack_require__("RIqP");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsPagination/vsPagination.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'VsPagination',
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
  },
  created: function created() {
    this.pagination;

    if (this.vsGoto) {
      var vsInput = function vsInput() {
        return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "32CY"));
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
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-38031ed0","hasScoped":true,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsPagination/vsPagination.vue
var vsPagination_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"vs-component",attrs:{"aria-label":"Page pagination","role":"navigation"}},[_c('ul',{class:['vs-pagination', _vm.vsType ? ("vs-pager-" + _vm.vsType) : '', _vm.vsRounded ? 'vs-pager-rounded' : '']},[_c('li',[_c('button',{attrs:{"disabled":_vm.onFirstPage() ? true : false},on:{"click":function($event){_vm.previousPage()}}},[_c('i',{staticClass:"material-icons"},[_vm._v(_vm._s(_vm.vsPrevIcon))])])]),_vm._v(" "),_vm._l((_vm.pages),function(page,index){return _c('li',{key:index},[_c('button',{class:_vm.onCurrentPage(page),style:({
          'background':_vm.onCurrentPage(page)&&_vm.vsType?_vm.vsColor?/[#()]/.test(_vm.vsColor)?_vm.vsColor:("rgba(var(--" + _vm.vsColor + "),1)"):'rgb(var(--primary))':null
        }),attrs:{"disabled":_vm.isEllipsis(page) ? true : false},on:{"click":function($event){_vm.goTo(page)}}},[_vm._v(_vm._s(page))])])}),_vm._v(" "),_c('li',[_c('button',{attrs:{"disabled":_vm.onLastPage() ? true : false},on:{"click":function($event){_vm.nextPage()}}},[_c('i',{staticClass:"material-icons"},[_vm._v(_vm._s(_vm.vsNextIcon))])])]),_vm._v(" "),(_vm.vsGoto)?_c('li',{staticClass:"goto"},[_c('vs-input',{attrs:{"max":_vm.vsTotal,"vs-type":"number","min":"1"},on:{"change":_vm.goTo},model:{value:(_vm.go),callback:function ($$v) {_vm.go=$$v},expression:"go"}})],1):_vm._e()],2)])}
var vsPagination_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsPagination/vsPagination.vue
function vsPagination_injectStyle (context) {
  __webpack_require__("hj2F")
  __webpack_require__("tcDe")
}
/* script */


/* template */

/* template functional */
var vsPagination_vue_template_functional_ = false
/* styles */
var vsPagination_vue_styles_ = vsPagination_injectStyle
/* scopeId */
var vsPagination_vue_scopeId_ = "data-v-38031ed0"
/* moduleIdentifier (server only) */
var vsPagination_vue_module_identifier_ = null

var vsPagination_Component = Object(component_normalizer["a" /* default */])(
  vsPagination,
  vsPagination_render,
  vsPagination_staticRenderFns,
  vsPagination_vue_template_functional_,
  vsPagination_vue_styles_,
  vsPagination_vue_scopeId_,
  vsPagination_vue_module_identifier_
)

/* harmony default export */ var vsPagination_vsPagination = (vsPagination_Component.exports);

// CONCATENATED MODULE: ./src/components/vsPagination/index.js



/* harmony default export */ var components_vsPagination = (function (Vue) {
  Vue.component(vsPagination_vsPagination.name, vsPagination_vsPagination);
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsBreadcrumb/vsBreadcrumb.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'VsBreadcrumb',
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-51b6c581","hasScoped":true,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsBreadcrumb/vsBreadcrumb.vue
var vsBreadcrumb_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',_vm._g(_vm._b({staticClass:"vs-breadcrumb",class:("vs-align-" + _vm.vsAlign),attrs:{"aria-label":"breadcrumb"}},'nav',_vm.$attrs,false),_vm.$listeners),[_c('ol',[_vm._t("default"),_vm._v(" "),_vm._l((_vm.vsItems),function(item){return (!_vm.hasSlot)?_c('li',{key:item.title,class:{'vs-active':item.active,'disabled-link':item.disabled},attrs:{"aria-current":item.active ? 'page' : null}},[(!item.active)?_c('a',{attrs:{"href":item.url ? item.url : '#',"title":item.title}},[_vm._v("\n        "+_vm._s(item.title)+"\n      ")]):[_c('span',{style:({
            'color':_vm.vsColor?/[#()]/.test(_vm.vsColor)?_vm.vsColor:("rgba(var(--" + _vm.vsColor + "),1)"):'rgb(var(--primary))'
        })},[_vm._v("\n          "+_vm._s(item.title)+"\n        ")])],_vm._v(" "),(!item.active)?_c('span',{staticClass:"separator",class:_vm.vsSeparator.length > 1 ? 'material-icons' : null,attrs:{"aria-hidden":"true"}},[_vm._v(_vm._s(_vm.vsSeparator))]):_vm._e()],2):_vm._e()})],2)])}
var vsBreadcrumb_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsBreadcrumb/vsBreadcrumb.vue
function vsBreadcrumb_injectStyle (context) {
  __webpack_require__("NuEw")
}
/* script */


/* template */

/* template functional */
var vsBreadcrumb_vue_template_functional_ = false
/* styles */
var vsBreadcrumb_vue_styles_ = vsBreadcrumb_injectStyle
/* scopeId */
var vsBreadcrumb_vue_scopeId_ = "data-v-51b6c581"
/* moduleIdentifier (server only) */
var vsBreadcrumb_vue_module_identifier_ = null

var vsBreadcrumb_Component = Object(component_normalizer["a" /* default */])(
  vsBreadcrumb,
  vsBreadcrumb_render,
  vsBreadcrumb_staticRenderFns,
  vsBreadcrumb_vue_template_functional_,
  vsBreadcrumb_vue_styles_,
  vsBreadcrumb_vue_scopeId_,
  vsBreadcrumb_vue_module_identifier_
)

/* harmony default export */ var vsBreadcrumb_vsBreadcrumb = (vsBreadcrumb_Component.exports);

// CONCATENATED MODULE: ./src/components/vsBreadcrumb/index.js



/* harmony default export */ var components_vsBreadcrumb = (function (Vue) {
  Vue.component(vsBreadcrumb_vsBreadcrumb.name, vsBreadcrumb_vsBreadcrumb);
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsSideBar/vsSideBar.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "VsSidebar",
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
    },
    vsBackgroundHidden: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      reduce: false
    };
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
  mounted: function mounted() {
    document.querySelector(this.vsParent).addEventListener("touchstart", this.onTouchStart);
    document.querySelector(this.vsParent).addEventListener("touchend", this.onTouchEnd); // @touchstart="onTouchStart"
    // @touchend="onTouchEnd"

    this.insertBody();
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4d30038a","hasScoped":false,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsSideBar/vsSideBar.vue
var vsSideBar_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"sidebarx"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.vsStatic?true:_vm.vsActive),expression:"vsStatic?true:vsActive"}],ref:"considebar",staticClass:"vs-component con-sidebar",class:{'vsStatic':_vm.vsStatic,'body-sidebar':_vm.vsParent=='body'}},[(_vm.vsBackgroundHidden?false:!_vm.vsStatic)?_c('div',{staticClass:"con-darkx",on:{"click":function($event){_vm.clickOut()}}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"vs-sidebar",class:{'reducex':_vm.reduce}},[(_vm.vsReduceExpand)?_c('div',{staticClass:"expand-reduce"},[_c('i',{staticClass:"material-icons",on:{"click":function($event){_vm.reduce=!_vm.reduce}}},[_vm._v("\n          "+_vm._s(_vm.reduce?'menu':'first_page')+"\n        ")])]):_vm._e(),_vm._v(" "),_c('header',[_vm._t("header")],2),_vm._v(" "),_c('ul',{staticClass:"ulx"},[_vm._t("default")],2),_vm._v(" "),_c('footer',[_vm._t("footer")],2)])])])}
var vsSideBar_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsSideBar/vsSideBar.vue
function vsSideBar_injectStyle (context) {
  __webpack_require__("wrDX")
}
/* script */


/* template */

/* template functional */
var vsSideBar_vue_template_functional_ = false
/* styles */
var vsSideBar_vue_styles_ = vsSideBar_injectStyle
/* scopeId */
var vsSideBar_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var vsSideBar_vue_module_identifier_ = null

var vsSideBar_Component = Object(component_normalizer["a" /* default */])(
  vsSideBar,
  vsSideBar_render,
  vsSideBar_staticRenderFns,
  vsSideBar_vue_template_functional_,
  vsSideBar_vue_styles_,
  vsSideBar_vue_scopeId_,
  vsSideBar_vue_module_identifier_
)

/* harmony default export */ var vsSideBar_vsSideBar = (vsSideBar_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsSideBar/vsSidebarItem.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'VsSidebarItem',
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2df50e1e","hasScoped":false,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsSideBar/vsSidebarItem.vue
var vsSidebarItem_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"vs-component vs-sidebar-item",class:{'con-tag':_vm.vsTag,'active-item':_vm.vsActive},on:{"click":_vm.clickItem}},[(_vm.to)?_c('router-link',_vm._g(_vm._b({attrs:{"title":_vm.reduce?_vm.$slots.default[0].text:null,"to":_vm.to}},'router-link',_vm.$attrs,false),_vm.$listeners),[_c('span',{staticClass:"con-text-span"},[(_vm.vsIcon)?_c('i',{staticClass:"material-icons"},[_vm._v("\n        "+_vm._s(_vm.vsIcon)+"\n      ")]):_vm._e(),_vm._v(" "),(_vm.vsIconReduce)?_c('i',{staticClass:"material-icons only-reduse"},[_vm._v("\n        "+_vm._s(_vm.vsIconReduce)+"\n      ")]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"textx_span"},[_vm._t("default")],2)]),_vm._v(" "),(_vm.vsTag)?_c('span',{staticClass:"vs-tagx",attrs:{"title":_vm.reduce?_vm.vsTag:null}},[_vm._v(_vm._s(_vm.vsTag))]):_vm._e()]):(_vm.vsSlot)?[_vm._t("default")]:_c('a',_vm._g(_vm._b({attrs:{"title":_vm.reduce?_vm.$slots.default[0].text:null,"href":_vm.href}},'a',_vm.$attrs,false),_vm.$listeners),[_c('span',{staticClass:"con-text-span"},[(_vm.vsIcon)?_c('i',{staticClass:"material-icons"},[_vm._v("\n        "+_vm._s(_vm.vsIcon)+"\n      ")]):_vm._e(),_vm._v(" "),(_vm.vsIconReduce)?_c('i',{staticClass:"material-icons only-reduse"},[_vm._v("\n        "+_vm._s(_vm.vsIconReduce)+"\n      ")]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"textx_span"},[_vm._t("default")],2)]),_vm._v(" "),(_vm.vsTag)?_c('span',{staticClass:"vs-tagx",attrs:{"title":_vm.reduce?_vm.vsTag:null}},[_vm._v(_vm._s(_vm.vsTag))]):_vm._e()])],2)}
var vsSidebarItem_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebarItem.vue
function vsSidebarItem_injectStyle (context) {
  __webpack_require__("1hSx")
}
/* script */


/* template */

/* template functional */
var vsSidebarItem_vue_template_functional_ = false
/* styles */
var vsSidebarItem_vue_styles_ = vsSidebarItem_injectStyle
/* scopeId */
var vsSidebarItem_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var vsSidebarItem_vue_module_identifier_ = null

var vsSidebarItem_Component = Object(component_normalizer["a" /* default */])(
  vsSidebarItem,
  vsSidebarItem_render,
  vsSidebarItem_staticRenderFns,
  vsSidebarItem_vue_template_functional_,
  vsSidebarItem_vue_styles_,
  vsSidebarItem_vue_scopeId_,
  vsSidebarItem_vue_module_identifier_
)

/* harmony default export */ var vsSideBar_vsSidebarItem = (vsSidebarItem_Component.exports);

// EXTERNAL MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.regexp.search.js
var es6_regexp_search = __webpack_require__("+hOW");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsSideBar/vsSidebarGroup.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'VsSidebarGroup',
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-49686a6d","hasScoped":false,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsSideBar/vsSidebarGroup.vue
var vsSidebarGroup_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"considebar",staticClass:"vs-component con-sidebar-group",class:{'openx':_vm.open}},[_c('li',{ref:"labelx",staticClass:"labelx",on:{"click":function($event){_vm.open=!_vm.open}}},[(_vm.vsIcon)?_c('i',{staticClass:"material-icons"},[_vm._v("\n      "+_vm._s(_vm.vsIcon)+"\n    ")]):_vm._e(),_vm._v(" "),(_vm.vsIconReduce)?_c('i',{staticClass:"material-icons only-reduse"},[_vm._v("\n      "+_vm._s(_vm.vsIconReduce)+"\n    ")]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"textx_span"},[_vm._v("\n      "+_vm._s(_vm.vsLabel)+"\n    ")]),_vm._v(" "),_c('i',{staticClass:"material-icons icon-arrowx"},[_vm._v("\n      keyboard_arrow_down\n    ")])]),_vm._v(" "),_c('transition',{on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"leave":_vm.leave}},[_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.open),expression:"open"}],ref:"ulx"},[_vm._t("default")],2)])],1)}
var vsSidebarGroup_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsSideBar/vsSidebarGroup.vue
function vsSidebarGroup_injectStyle (context) {
  __webpack_require__("vSd1")
}
/* script */


/* template */

/* template functional */
var vsSidebarGroup_vue_template_functional_ = false
/* styles */
var vsSidebarGroup_vue_styles_ = vsSidebarGroup_injectStyle
/* scopeId */
var vsSidebarGroup_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var vsSidebarGroup_vue_module_identifier_ = null

var vsSidebarGroup_Component = Object(component_normalizer["a" /* default */])(
  vsSidebarGroup,
  vsSidebarGroup_render,
  vsSidebarGroup_staticRenderFns,
  vsSidebarGroup_vue_template_functional_,
  vsSidebarGroup_vue_styles_,
  vsSidebarGroup_vue_scopeId_,
  vsSidebarGroup_vue_module_identifier_
)

/* harmony default export */ var vsSideBar_vsSidebarGroup = (vsSidebarGroup_Component.exports);

// CONCATENATED MODULE: ./src/components/vsSideBar/index.js





/* harmony default export */ var components_vsSideBar = (function (Vue) {
  Vue.component(vsSideBar_vsSideBar.name, vsSideBar_vsSideBar);
  Vue.component(vsSideBar_vsSidebarItem.name, vsSideBar_vsSidebarItem);
  Vue.component(vsSideBar_vsSidebarGroup.name, vsSideBar_vsSidebarGroup);
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/functions/vsDialog/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'VsPrompt',
  props: {
    vsColor: {
      default: 'primary',
      type: String
    },
    vsActive: {
      default: false,
      type: Boolean
    },
    vsTitle: {
      default: 'Dialog',
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
    vsIsValid: {
      default: 'none',
      type: [Boolean, String]
    },
    vsButtonsHidden: {
      default: false,
      type: Boolean
    },
    vsAcceptText: {
      default: 'Accept',
      type: String
    },
    vsCancelText: {
      default: 'Cancel',
      type: String
    }
  },
  data: function data() {
    return {
      isPrompt: true,
      active: false,
      type: 'alert',
      color: 'primary',
      text: null,
      title: null,
      buttonAccept: 'filled',
      buttonCancel: 'flat',
      acceptText: 'Accept',
      cancelText: 'Cancel'
    };
  },
  computed: {
    styleHeader: function styleHeader() {
      return {
        color: utils_color["a" /* default */].getColor(this.color, 1)
      };
    },
    styleAfter: function styleAfter() {
      return {
        background: utils_color["a" /* default */].getColor(this.color, 1)
      };
    }
  },
  mounted: function mounted() {
    this.insertBody();
  },
  methods: {
    giveColor: function giveColor(color) {
      return utils_color["a" /* default */].rColor(color);
    },
    acceptDialog: function acceptDialog() {
      if (!this.isPrompt) {
        this.accept ? this.accept() : null;
        this.active = false;
        this.$emit('update:vsActive', false);
        this.$emit('vs-accept');
      } else {
        if (this.vsIsValid || this.vsIsValid == 'none') {
          this.accept ? this.accept() : null;
          this.active = false;
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
        if (event.target.className.indexOf('vs-dialog-dark') != -1 && this.type == 'alert') {
          this.active = false;
          this.$emit('update:vsActive', false);
        } else if (event.target.className.indexOf('vs-dialog-dark') != -1) {
          this.rebound();
        }
      } else {
        if (event ? event.target.className.indexOf('vs-dialog-cancel') != -1 : false) {
          this.active = false;
          this.$emit('update:vsActive', false);
        }
      }
    },
    cancelClose: function cancelClose() {
      this.active = false;
      this.$emit('update:vsActive', false);
      this.$emit('vs-cancel');
      this.cancel ? this.cancel() : null;
    },
    insertBody: function insertBody() {
      var elx = this.$refs.con;
      document.body.insertBefore(elx, document.body.firstChild);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-09e708d6","hasScoped":false,"optionsId":"1","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/functions/vsDialog/index.vue
var vsDialog_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"dialog-t"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.active || _vm.vsActive),expression:"active || vsActive"}],ref:"con",staticClass:"vs-component con-vs-dialog",class:[("vs-dialog-" + (_vm.isPrompt?_vm.vsColor:_vm.color))],on:{"click":function($event){_vm.close($event,true)}}},[_c('div',{staticClass:"vs-dialog-dark"}),_vm._v(" "),_c('div',{ref:"dialogx",staticClass:"vs-dialog"},[_c('header',{style:(_vm.styleHeader)},[_c('div',{staticClass:"con-title-after"},[_c('span',{staticClass:"after",style:(_vm.styleAfter)}),_vm._v(" "),_c('h3',[_vm._v(_vm._s(_vm.title || _vm.vsTitle))])]),_vm._v(" "),(_vm.type=='alert')?_c('span',{staticClass:"vs-dialog-cancel material-icons",on:{"click":_vm.close}},[_vm._v("close")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"vs-dialog-text"},[_vm._t("default"),_vm._v("\n        "+_vm._s(_vm.text)+"\n      ")],2),_vm._v(" "),(_vm.vsButtonsHidden?false:_vm.isPrompt||_vm.type=='confirm')?_c('footer',[_c('vs-button',{attrs:{"disabled":_vm.vsIsValid=='none'?false:!_vm.vsIsValid,"vs-color":_vm.isPrompt?_vm.vsColor:_vm.color,"vs-type":_vm.isPrompt?_vm.vsButtonAccept:_vm.buttonAccept},on:{"click":_vm.acceptDialog}},[_vm._v(_vm._s(_vm.isPrompt?_vm.vsAcceptText:_vm.acceptText))]),_vm._v(" "),_c('vs-button',{attrs:{"vs-color":'rgb(0,0,0,.5)',"vs-type":_vm.isPrompt?_vm.vsButtonCancel:_vm.buttonCancel},on:{"click":_vm.cancelClose}},[_vm._v(_vm._s(_vm.isPrompt?_vm.vsCancelText:_vm.cancelText))])],1):_vm._e(),_vm._v(" "),(_vm.type=='alert'&&!_vm.isPrompt)?_c('footer',[_c('vs-button',{attrs:{"vs-color":_vm.isPrompt?_vm.vsColor:_vm.color,"vs-type":_vm.buttonAccept},on:{"click":_vm.acceptDialog}},[_vm._v(_vm._s(_vm.isPrompt?_vm.vsAcceptText:_vm.acceptText))])],1):_vm._e()])])])}
var vsDialog_staticRenderFns = []

// CONCATENATED MODULE: ./src/functions/vsDialog/index.vue
/* script */


/* template */

/* template functional */
var vsDialog_vue_template_functional_ = false
/* styles */
var vsDialog_vue_styles_ = null
/* scopeId */
var vsDialog_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var vsDialog_vue_module_identifier_ = null

var vsDialog_Component = Object(component_normalizer["a" /* default */])(
  vsDialog,
  vsDialog_render,
  vsDialog_staticRenderFns,
  vsDialog_vue_template_functional_,
  vsDialog_vue_styles_,
  vsDialog_vue_scopeId_,
  vsDialog_vue_module_identifier_
)

/* harmony default export */ var functions_vsDialog = (vsDialog_Component.exports);

// CONCATENATED MODULE: ./src/components/vsPrompt/index.js



/* harmony default export */ var vsPrompt = (function (Vue) {
  Vue.component(functions_vsDialog.name, functions_vsDialog);
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("J4zp");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsDropDown/vsDropDown.vue


//
//
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1fe9afd6","hasScoped":false,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsDropDown/vsDropDown.vue
var vsDropDown_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',_vm._g(_vm._b({ref:"dropdown",staticClass:"vs-con-dropdown parent-dropdown"},'button',_vm.$attrs,false),_vm.listeners),[_vm._t("default")],2)}
var vsDropDown_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDown.vue
function vsDropDown_injectStyle (context) {
  __webpack_require__("7cJ5")
}
/* script */


/* template */

/* template functional */
var vsDropDown_vue_template_functional_ = false
/* styles */
var vsDropDown_vue_styles_ = vsDropDown_injectStyle
/* scopeId */
var vsDropDown_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var vsDropDown_vue_module_identifier_ = null

var vsDropDown_Component = Object(component_normalizer["a" /* default */])(
  vsDropDown,
  vsDropDown_render,
  vsDropDown_staticRenderFns,
  vsDropDown_vue_template_functional_,
  vsDropDown_vue_styles_,
  vsDropDown_vue_scopeId_,
  vsDropDown_vue_module_identifier_
)

/* harmony default export */ var vsDropDown_vsDropDown = (vsDropDown_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsDropDown/vsDropDownMenu.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "VsDropdownMenu",
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
  mounted: function mounted() {
    this.insertBody();
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6c4cd1bd","hasScoped":false,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsDropDown/vsDropDownMenu.vue
var vsDropDownMenu_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"dropdownx"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.dropdownVisible),expression:"dropdownVisible"}],ref:"options",staticClass:"con-vs-dropdown-menu",class:{'rightx':_vm.rightx,'notHeight':_vm.notHeight},style:({
      'left':_vm.leftx+'px',
      'top':_vm.topx+'px'
    }),on:{"mouseover":function($event){_vm.toggleMenu($event)},"mouseout":function($event){_vm.toggleMenu($event)}}},[(!_vm.vsCustomContent)?_c('ul',{staticClass:"vs-component vs-dropdown-menu"},[_c('div',{staticClass:"after"}),_vm._v(" "),_vm._t("default")],2):_c('div',{staticClass:"vs-dropdown-custom vs-dropdown-menu"},[_vm._t("default")],2)])])}
var vsDropDownMenu_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownMenu.vue
function vsDropDownMenu_injectStyle (context) {
  __webpack_require__("vDYg")
}
/* script */


/* template */

/* template functional */
var vsDropDownMenu_vue_template_functional_ = false
/* styles */
var vsDropDownMenu_vue_styles_ = vsDropDownMenu_injectStyle
/* scopeId */
var vsDropDownMenu_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var vsDropDownMenu_vue_module_identifier_ = null

var vsDropDownMenu_Component = Object(component_normalizer["a" /* default */])(
  vsDropDownMenu,
  vsDropDownMenu_render,
  vsDropDownMenu_staticRenderFns,
  vsDropDownMenu_vue_template_functional_,
  vsDropDownMenu_vue_styles_,
  vsDropDownMenu_vue_scopeId_,
  vsDropDownMenu_vue_module_identifier_
)

/* harmony default export */ var vsDropDown_vsDropDownMenu = (vsDropDownMenu_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsDropDown/vsDropDownItem.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "VsDropdownItem",
  inheritAttrs: false,
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1e4539e6","hasScoped":false,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsDropDown/vsDropDownItem.vue
var vsDropDownItem_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"vs-component vs-dropdown-item",class:{vsDivider: _vm.vsDivider},style:({
    'color':_vm.hoverx?_vm.giveColor()+' !important':null,
    'background':_vm.hoverx?_vm.giveColor(.01)+' !important':null
  }),on:{"click":_vm.closeParent,"mouseover":function($event){_vm.hoverx=true},"mouseout":function($event){_vm.hoverx=false}}},[(_vm.to)?_c('router-link',_vm._g(_vm._b({class:{'disabled':_vm.disabled},attrs:{"to":_vm.to}},'router-link',_vm.$attrs,false),_vm.$listeners),[_vm._v("\n    "+_vm._s(_vm.$attrs.disabled)+"\n    "),_vm._t("default")],2):_c('a',_vm._g(_vm._b({class:{'disabled':_vm.disabled}},'a',_vm.$attrs,false),_vm.$listeners),[_vm._t("default")],2)],1)}
var vsDropDownItem_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownItem.vue
function vsDropDownItem_injectStyle (context) {
  __webpack_require__("/85P")
}
/* script */


/* template */

/* template functional */
var vsDropDownItem_vue_template_functional_ = false
/* styles */
var vsDropDownItem_vue_styles_ = vsDropDownItem_injectStyle
/* scopeId */
var vsDropDownItem_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var vsDropDownItem_vue_module_identifier_ = null

var vsDropDownItem_Component = Object(component_normalizer["a" /* default */])(
  vsDropDownItem,
  vsDropDownItem_render,
  vsDropDownItem_staticRenderFns,
  vsDropDownItem_vue_template_functional_,
  vsDropDownItem_vue_styles_,
  vsDropDownItem_vue_scopeId_,
  vsDropDownItem_vue_module_identifier_
)

/* harmony default export */ var vsDropDown_vsDropDownItem = (vsDropDownItem_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsDropDown/vsDropDownGroup.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'VsDropdownGroup',
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5e7b1b72","hasScoped":false,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsDropDown/vsDropDownGroup.vue
var vsDropDownGroup_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"vs-component vs-dropdown-group",class:{'marginIcon':_vm.vsCollapse, 'no-cascading':!_vm.vsCollapse, 'group-rightx':_vm.rightx},on:{"mouseout":function($event){_vm.toggleGroup($event)},"mouseover":function($event){_vm.toggleGroup($event)}}},[(_vm.vsCollapse)?_c('span',{staticClass:"span"},[_vm._v(_vm._s(_vm.vsLabel))]):_c('h3',[_vm._v(_vm._s(_vm.vsLabel))]),_vm._v(" "),(_vm.vsCollapse)?_c('i',{staticClass:"material-icons icon-group"},[_vm._v("\n    keyboard_arrow_right\n  ")]):_vm._e(),_vm._v(" "),_c('transition',{on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"leave":_vm.leave}},[(_vm.activeGroup||!_vm.vsCollapse)?_c('div',{ref:"ulx",staticClass:"con-dropdown-group",class:{'con-dropdown-group-no-cascading':!_vm.vsCollapse}},[_c('ul',[_vm._t("default")],2)]):_vm._e()])],1)}
var vsDropDownGroup_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsDropDown/vsDropDownGroup.vue
function vsDropDownGroup_injectStyle (context) {
  __webpack_require__("pMD/")
}
/* script */


/* template */

/* template functional */
var vsDropDownGroup_vue_template_functional_ = false
/* styles */
var vsDropDownGroup_vue_styles_ = vsDropDownGroup_injectStyle
/* scopeId */
var vsDropDownGroup_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var vsDropDownGroup_vue_module_identifier_ = null

var vsDropDownGroup_Component = Object(component_normalizer["a" /* default */])(
  vsDropDownGroup,
  vsDropDownGroup_render,
  vsDropDownGroup_staticRenderFns,
  vsDropDownGroup_vue_template_functional_,
  vsDropDownGroup_vue_styles_,
  vsDropDownGroup_vue_scopeId_,
  vsDropDownGroup_vue_module_identifier_
)

/* harmony default export */ var vsDropDown_vsDropDownGroup = (vsDropDownGroup_Component.exports);

// CONCATENATED MODULE: ./src/components/vsDropDown/index.js






/* harmony default export */ var components_vsDropDown = (function (Vue) {
  Vue.component(vsDropDown_vsDropDown.name, vsDropDown_vsDropDown);
  Vue.component(vsDropDown_vsDropDownMenu.name, vsDropDown_vsDropDownMenu);
  Vue.component(vsDropDown_vsDropDownItem.name, vsDropDown_vsDropDownItem);
  Vue.component(vsDropDown_vsDropDownGroup.name, vsDropDown_vsDropDownGroup);
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsDivider/vsDivider.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "VsDivider",
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f06ea54c","hasScoped":false,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsDivider/vsDivider.vue
var vsDivider_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-component vs-divider"},[_c('span',{staticClass:"after",style:({
      'width':_vm.getWidthAfter,
      'border-top':(_vm.vsBorderHeight + " " + _vm.vsStyle + " " + (_vm.giveColor()))
    })}),_vm._v(" "),(_vm.vsIcon?true:_vm.$slots.default)?_c('span',{staticClass:"vs-divider-text",style:({
      'color':_vm.giveColor(1,'text')
    })},[(!_vm.vsIcon)?[_vm._t("default")]:_c('i',{staticClass:"material-icons icon-divider"},[_vm._v("\n      "+_vm._s(_vm.vsIcon)+"\n    ")])],2):_vm._e(),_vm._v(" "),_c('span',{staticClass:"before",style:({
      'width':_vm.getWidthBefore,
      'border-top':(_vm.vsBorderHeight + " " + _vm.vsStyle + " " + (_vm.giveColor()))
    })})])}
var vsDivider_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsDivider/vsDivider.vue
function vsDivider_injectStyle (context) {
  __webpack_require__("Q9I0")
}
/* script */


/* template */

/* template functional */
var vsDivider_vue_template_functional_ = false
/* styles */
var vsDivider_vue_styles_ = vsDivider_injectStyle
/* scopeId */
var vsDivider_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var vsDivider_vue_module_identifier_ = null

var vsDivider_Component = Object(component_normalizer["a" /* default */])(
  vsDivider,
  vsDivider_render,
  vsDivider_staticRenderFns,
  vsDivider_vue_template_functional_,
  vsDivider_vue_styles_,
  vsDivider_vue_scopeId_,
  vsDivider_vue_module_identifier_
)

/* harmony default export */ var vsDivider_vsDivider = (vsDivider_Component.exports);

// CONCATENATED MODULE: ./src/components/vsDivider/index.js



/* harmony default export */ var components_vsDivider = (function (Vue) {
  Vue.component(vsDivider_vsDivider.name, vsDivider_vsDivider);
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vsCollapse/vsCollapse.vue
//
//
//
//
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
  name: "VsCollapse",
  inheritAttrs: false,
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
  mounted: function mounted() {// console.log("mounted>>>>>>",_color.getColor('rgb(189, 21, 74)'));
  },
  methods: {
    isColor: function isColor() {
      return utils_color["a" /* default */].isColor(this.vsColor);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-fbe636fc","hasScoped":false,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vsCollapse/vsCollapse.vue
var vsCollapse_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g(_vm._b({staticClass:"vs-component vs-collapse vs-collapse-",class:[("vs-collapse-" + (_vm.isColor()?_vm.vsColor:null))],style:(_vm.styles),on:{"mouseover":function($event){_vm.hoverx=true},"mouseout":function($event){_vm.hoverx=false}}},'div',_vm.$attrs,false),_vm.$listeners),[_vm._v("\n  Component vsCollapse\n")])}
var vsCollapse_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/vsCollapse/vsCollapse.vue
/* script */


/* template */

/* template functional */
var vsCollapse_vue_template_functional_ = false
/* styles */
var vsCollapse_vue_styles_ = null
/* scopeId */
var vsCollapse_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var vsCollapse_vue_module_identifier_ = null

var vsCollapse_Component = Object(component_normalizer["a" /* default */])(
  vsCollapse,
  vsCollapse_render,
  vsCollapse_staticRenderFns,
  vsCollapse_vue_template_functional_,
  vsCollapse_vue_styles_,
  vsCollapse_vue_scopeId_,
  vsCollapse_vue_module_identifier_
)

/* harmony default export */ var vsCollapse_vsCollapse = (vsCollapse_Component.exports);

// CONCATENATED MODULE: ./src/components/vsCollapse/index.js



/* harmony default export */ var components_vsCollapse = (function (Vue) {
  Vue.component(vsCollapse_vsCollapse.name, vsCollapse_vsCollapse);
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/layout/vsRow/vsRow.vue
//
//
//
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
  name: 'VsRow',
  props: {
    vsType: {
      default: 'block',
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-54092ffa","hasScoped":false,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/layout/vsRow/vsRow.vue
var vsRow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-row",style:({
    'align-items':_vm.vsAlign,
    'justify-content':_vm.vsJustify,
    'display':_vm.vsType,
    'width':_vm.vsW*100/12+'%'})},[_vm._t("default")],2)}
var vsRow_staticRenderFns = []

// CONCATENATED MODULE: ./src/layout/vsRow/vsRow.vue
function vsRow_injectStyle (context) {
  __webpack_require__("a82l")
}
/* script */


/* template */

/* template functional */
var vsRow_vue_template_functional_ = false
/* styles */
var vsRow_vue_styles_ = vsRow_injectStyle
/* scopeId */
var vsRow_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var vsRow_vue_module_identifier_ = null

var vsRow_Component = Object(component_normalizer["a" /* default */])(
  vsRow,
  vsRow_render,
  vsRow_staticRenderFns,
  vsRow_vue_template_functional_,
  vsRow_vue_styles_,
  vsRow_vue_scopeId_,
  vsRow_vue_module_identifier_
)

/* harmony default export */ var vsRow_vsRow = (vsRow_Component.exports);

// CONCATENATED MODULE: ./src/layout/vsRow/index.js



/* harmony default export */ var layout_vsRow = (function (Vue) {
  Vue.component(vsRow_vsRow.name, vsRow_vsRow);
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/layout/vsCol/vsCol.vue
//
//
//
//
//
//
//
//
//
//
//
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-75ea463f","hasScoped":true,"optionsId":"2","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/layout/vsCol/vsCol.vue
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
  __webpack_require__("tN8s")
}
/* script */


/* template */

/* template functional */
var vsCol_vue_template_functional_ = false
/* styles */
var vsCol_vue_styles_ = vsCol_injectStyle
/* scopeId */
var vsCol_vue_scopeId_ = "data-v-75ea463f"
/* moduleIdentifier (server only) */
var vsCol_vue_module_identifier_ = null

var vsCol_Component = Object(component_normalizer["a" /* default */])(
  vsCol,
  vsCol_render,
  vsCol_staticRenderFns,
  vsCol_vue_template_functional_,
  vsCol_vue_styles_,
  vsCol_vue_scopeId_,
  vsCol_vue_module_identifier_
)

/* harmony default export */ var vsCol_vsCol = (vsCol_Component.exports);

// CONCATENATED MODULE: ./src/layout/vsCol/index.js



/* harmony default export */ var layout_vsCol = (function (Vue) {
  Vue.component(vsCol_vsCol.name, vsCol_vsCol);
});
// CONCATENATED MODULE: ./src/components/index.js









 // component not soport SSR

















 //New Component import
//layout




// EXTERNAL MODULE: ./src/styles/index.styl
var src_styles = __webpack_require__("/kYV");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("i7/w");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/functions/vsNotifications/index.vue



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      return objectSpread_default()({}, this.cords, {
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-dbf2202a","hasScoped":false,"optionsId":"1","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/functions/vsNotifications/index.vue
var vsNotifications_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"noti"},on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"leave":_vm.leave}},[(_vm.active)?_c('div',{ref:"noti",staticClass:"vs-component vs-notifications",class:[("vs-noti-" + _vm.position),("vs-noti-" + _vm.color),{'activeNoti':_vm.active}],style:(_vm.stylex),on:{"click":_vm.clickNoti}},[_c('div',{staticClass:"content-noti"},[_c('div',{staticClass:"con-text-noti"},[_c('h3',{domProps:{"innerHTML":_vm._s(_vm.title)}}),_vm._v(" "),_c('p',{domProps:{"innerHTML":_vm._s(_vm.text)}}),_vm._v(" "),_vm._t("default")],2),_vm._v(" "),(_vm.icon)?_c('i',{staticClass:"vs-icon-noti material-icons"},[_vm._v("\n        "+_vm._s(_vm.icon)+"\n      ")]):_vm._e()]),_vm._v(" "),_c('span',{staticClass:"filling",style:(_vm.fillingStyle)})]):_vm._e()])}
var vsNotifications_staticRenderFns = []

// CONCATENATED MODULE: ./src/functions/vsNotifications/index.vue
/* script */


/* template */

/* template functional */
var vsNotifications_vue_template_functional_ = false
/* styles */
var vsNotifications_vue_styles_ = null
/* scopeId */
var vsNotifications_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var vsNotifications_vue_module_identifier_ = null

var vsNotifications_Component = Object(component_normalizer["a" /* default */])(
  vsNotifications,
  vsNotifications_render,
  vsNotifications_staticRenderFns,
  vsNotifications_vue_template_functional_,
  vsNotifications_vue_styles_,
  vsNotifications_vue_scopeId_,
  vsNotifications_vue_module_identifier_
)

/* harmony default export */ var functions_vsNotifications = (vsNotifications_Component.exports);

// CONCATENATED MODULE: ./src/functions/vsNotifications/index.js





var NotiConstructor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(functions_vsNotifications);
var instance;
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
    utils.insertBody(instance.vm.$el);
  }
});
// EXTERNAL MODULE: ./src/functions/vsLoading/vsLoading.css
var vsLoading = __webpack_require__("zaE7");

// CONCATENATED MODULE: ./src/functions/vsLoading/vsLoading.js


var vsLoading_vsLoading = {
  name: 'loading',
  vsfunction: function vsfunction(param) {
    var colorx = 'rgb(var(--primary))';
    var backgroundx = 'rgba(255, 255, 255,.8)';
    var containerx = document.body;
    var scalex = 1;

    if (param !== undefined) {
      if (param.hasOwnProperty('color')) {
        colorx = /(^#(([a-f]|[A-F]|[0-9]){3}|([a-f]|[A-F]|[0-9]){6})$|^rgb\((1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\)$|^rgba\((1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?(0?(\.\d+)?|1(\.0+)?)\)$|^transparent$)/.test(param.color) ? param.color : "rgb(var(--".concat(param.color, "))");
      }

      if (param.hasOwnProperty('background')) {
        backgroundx = /(^#(([a-f]|[A-F]|[0-9]){3}|([a-f]|[A-F]|[0-9]){6})$|^rgb\((1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\)$|^rgba\((1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?(0?(\.\d+)?|1(\.0+)?)\)$|^transparent$)/.test(param.background) ? param.background : "rgb(var(--".concat(param.background, "))");
      }

      if (param.hasOwnProperty('container')) {
        containerx = document.querySelectorAll(param.container);
      }

      if (param.hasOwnProperty('scale')) {
        scalex = /^\d+(\.\d+)?$/.test(param.scale) ? param.scale : 1;
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
  vsfunction: function vsfunction(param) {
    var conLoading = document.querySelector('.vs-con-loading');

    if (param !== undefined) {
      if (param.hasOwnProperty('loadingQuery')) {
        conLoading = document.querySelectorAll(param.loadingQuery);
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
// CONCATENATED MODULE: ./src/functions/vsDialog/index.js



var dialogConstructor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(functions_vsDialog);
var vsDialog_instance;
/* harmony default export */ var src_functions_vsDialog = ({
  name: 'dialog',
  vsfunction: function vsfunction(parameters) {
    vsDialog_instance = new dialogConstructor({
      data: parameters
    });
    vsDialog_instance.$data.isPrompt = false;
    vsDialog_instance.vm = vsDialog_instance.$mount();
    parameters.accept ? vsDialog_instance.vm.$on('accept', parameters.accept) : null;
    parameters.cancel ? vsDialog_instance.vm.$on('cancel', parameters.cancel) : null;
    utils.insertBody(vsDialog_instance.vm.$el);
    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(function () {
      vsDialog_instance.active = true;
    });
  }
});
// CONCATENATED MODULE: ./src/utils/theme.js



/* harmony default export */ var theme = ({
  name: 'theme',
  vsfunction: function vsfunction(json, isServer) {
    for (var clave in json) {
      var colorx = void 0;

      if (/^[rgb(]/g.test(json[clave])) {
        colorx = json[clave].replace(/[rgb()]/g, '');
      } else if (/[#]/g.test(json[clave])) {
        var rgbx = utils_color["a" /* default */].hexToRgb(json[clave]); // console.log(rgbx);

        colorx = "".concat(rgbx.r, ",").concat(rgbx.g, ",").concat(rgbx.b);
      } else {
        colorx = json[clave];
      }

      utils_color["a" /* default */].setCssVariable('--' + clave, colorx, isServer);
    }
  }
});
// CONCATENATED MODULE: ./src/functions/index.js






// Functions



 //theme


var vsFunctions = {
  vsNotifications: src_functions_vsNotifications,
  vsLoading: vsLoading_vsLoading,
  vsLoadingClose: vsLoadingClose,
  vsTheme: theme,
  vsDialog: src_functions_vsDialog
};
/* harmony default export */ var functions = (function (Vue) {
  Vue.prototype.$vs = {};
  Object.values(vsFunctions).forEach(function (vsFunctions) {
    if (vsFunctions.hasOwnProperty('subName')) {
      Vue.prototype.$vs[vsFunctions.name][vsFunctions.subName] = vsFunctions.vsfunction;
    } else {
      Vue.prototype.$vs[vsFunctions.name] = vsFunctions.vsfunction;
    }
  });
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__("cDf5");
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./src/directives/vsTooltip/vsTooltip.css
var directives_vsTooltip_vsTooltip = __webpack_require__("9hsr");

// CONCATENATED MODULE: ./src/directives/vsTooltip/vsTooltip.js


/* harmony default export */ var src_directives_vsTooltip_vsTooltip = ({
  update: function update(el, binding) {
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
  inserted: function inserted(el, binding) {
    var ramdomx = Math.floor(Math.random() * 1000 + 1);
    el.dataset.keyx = 'vs-tooltip' + ramdomx;
    var delayx = 0;
    var valuex = null;
    var colorx = 'rgb(70, 70, 70)';

    if (typeof_default()(binding.value) == 'object') {
      valuex = binding.value.text;
      delayx = binding.value.delay || 0;
      colorx = binding.value.color ? /[#()]/.test(binding.value.color) ? binding.value.color : "rgb(var(--".concat(binding.value.color, "))") : 'rgb(70, 70, 70)';
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
      var coords = event.target.getBoundingClientRect();
      var scrollTopx = window.pageYOffset || document.documentElement.scrollTop; // console.log(window.pageYOffset);

      document.body.insertBefore(tooltipx, document.body.firstChild);

      if (typeof_default()(binding.value) == 'object') {
        if (binding.value.position == 'left') {
          tooltipx.style.top = coords.top + event.target.clientHeight + scrollTopx + 'px';
          tooltipx.style.left = coords.left - (tooltipx.clientWidth + 8) + 'px';
        } else if (binding.value.position == 'right') {
          tooltipx.style.top = coords.top + event.target.clientHeight + scrollTopx + 'px';
          tooltipx.style.left = coords.left + (event.target.clientWidth + 8) + 'px';
        } else if (binding.value.position == 'bottom') {
          tooltipx.style.top = coords.top + (event.target.clientHeight * 2 + 8) + scrollTopx + 'px';
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

    var mousex = function mousex() {
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

    window.addEventListener('mousewheel', function () {
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
    window.addEventListener('touchmove', function () {
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
// CONCATENATED MODULE: ./src/utils/easing.js
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
// CONCATENATED MODULE: ./src/index.js










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
          if (typeof window !== 'undefined') {
            theme.vsfunction(options.theme.colors, options.server);
          }
        }
      }
    }

    Object.values(components_namespaceObject).forEach(function (vsComponent) {
      Vue.use(vsComponent);
    });
    functions(Vue);
    Vue.prototype.$vs.easing = easing;
    Vue.directive('tooltip', src_directives_vsTooltip_vsTooltip);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vuesax);
}

/* harmony default export */ var src = (Vuesax);
// CONCATENATED MODULE: C:/Users/DELL/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ }),

/***/ "m0LI":
/***/ (function(module, exports, __webpack_require__) {

var _getIterator = __webpack_require__("9Kre");

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

/***/ "m6pe":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("whO+")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "mISE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("065J");
var $export = __webpack_require__("BI7h");
var redefine = __webpack_require__("uspN");
var hide = __webpack_require__("We63");
var Iterators = __webpack_require__("Rb8P");
var $iterCreate = __webpack_require__("PbkF");
var setToStringTag = __webpack_require__("pgI9");
var getPrototypeOf = __webpack_require__("F5dI");
var ITERATOR = __webpack_require__("JKqo")('iterator');
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

/***/ "mLe7":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("3PVh");
var enumBugKeys = __webpack_require__("DZjz");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "mibP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("o7aK");
var step = __webpack_require__("OAUf");
var Iterators = __webpack_require__("kluS");
var toIObject = __webpack_require__("aGrk");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("kKjQ")(Array, 'Array', function (iterated, kind) {
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

/***/ "mmCD":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "n0b6":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("XL9B").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "nIcf":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("99Am");
var $Object = __webpack_require__("hYiM").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "o7aK":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "oLOE":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("5WzD");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("167f04b4", content, true, {});

/***/ }),

/***/ "pMD/":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("vHQA");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("32e2c694", content, true, {});

/***/ }),

/***/ "pdbP":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("6gWL");
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

/***/ "pgI9":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("1Sho").f;
var has = __webpack_require__("Vxpl");
var TAG = __webpack_require__("JKqo")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "prek":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("XL9B");
var core = __webpack_require__("hYiM");
var ctx = __webpack_require__("pdbP");
var hide = __webpack_require__("J3mi");
var has = __webpack_require__("rwqN");
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

/***/ "q/wX":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".con-vs-card-body[data-v-3f2c3147]{padding:16px}", ""]);

// exports


/***/ }),

/***/ "qEx5":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("gV0G");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("684b52d5", content, true, {});

/***/ }),

/***/ "qwy/":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("aGrk");
var gOPN = __webpack_require__("zRZm").f;
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

/***/ "r9tm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("kdyF");

/***/ }),

/***/ "rDDT":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("uZKj");
__webpack_require__("ASdg");
__webpack_require__("BIcr");
__webpack_require__("KNps");
module.exports = __webpack_require__("hYiM").Symbol;


/***/ }),

/***/ "rQ4u":
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__("uQXF")('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = __webpack_require__("NByB");
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

/***/ "rb7q":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("BXK8");
var dPs = __webpack_require__("69xj");
var enumBugKeys = __webpack_require__("ER0q");
var IE_PROTO = __webpack_require__("fEcV")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("sert")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("n0b6").appendChild(iframe);
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

/***/ "rf3O":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3mi");


/***/ }),

/***/ "rsxx":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("P6eE");
var dPs = __webpack_require__("JDZq");
var enumBugKeys = __webpack_require__("DZjz");
var IE_PROTO = __webpack_require__("hilu")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("jJ09")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("wgw1").appendChild(iframe);
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

/***/ "rwqN":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "sMuz":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("vbmC");
module.exports = __webpack_require__("hYiM").Object.keys;


/***/ }),

/***/ "sUDV":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".vs-divider{width:100%;position:relative;display:block;margin:15px 0;clear:both;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-divider .after,.vs-divider .before{position:relative;display:block;width:100%}.vs-divider .vs-divider-text{cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;white-space:nowrap;background:#fff;padding-left:12px;padding-right:12px;font-size:.9375em}.vs-divider i.icon-divider{font-size:1.25em}", ""]);

// exports


/***/ }),

/***/ "sbe1":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("6729");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "sert":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("k0IJ");
var document = __webpack_require__("XL9B").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "t/YF":
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

/***/ "tN8s":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("vAbG");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("2e00a83b", content, true, {});

/***/ }),

/***/ "tcDe":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("T4Zd");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("05b18880", content, true, {});

/***/ }),

/***/ "trsR":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "uINm":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "uQXF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__("We63");
var redefine = __webpack_require__("uspN");
var fails = __webpack_require__("whO+");
var defined = __webpack_require__("UMRC");
var wks = __webpack_require__("JKqo");

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

/***/ "uZKj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("XL9B");
var has = __webpack_require__("rwqN");
var DESCRIPTORS = __webpack_require__("GiQ9");
var $export = __webpack_require__("prek");
var redefine = __webpack_require__("rf3O");
var META = __webpack_require__("Mrwf").KEY;
var $fails = __webpack_require__("yIdM");
var shared = __webpack_require__("/fpy");
var setToStringTag = __webpack_require__("ZCy8");
var uid = __webpack_require__("bb+b");
var wks = __webpack_require__("Z+hs");
var wksExt = __webpack_require__("SjeW");
var wksDefine = __webpack_require__("IY1P");
var enumKeys = __webpack_require__("gBtU");
var isArray = __webpack_require__("UQJJ");
var anObject = __webpack_require__("BXK8");
var isObject = __webpack_require__("k0IJ");
var toIObject = __webpack_require__("aGrk");
var toPrimitive = __webpack_require__("ePMb");
var createDesc = __webpack_require__("1FdL");
var _create = __webpack_require__("rb7q");
var gOPNExt = __webpack_require__("qwy/");
var $GOPD = __webpack_require__("Kj0F");
var $DP = __webpack_require__("aRsT");
var $keys = __webpack_require__("KILR");
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
  __webpack_require__("zRZm").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("HYhf").f = $propertyIsEnumerable;
  __webpack_require__("uINm").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("Vxht")) {
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("J3mi")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "ul+m":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("q/wX");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("f0541fbc", content, true, {});

/***/ }),

/***/ "uqPa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("m6pe") && !__webpack_require__("whO+")(function () {
  return Object.defineProperty(__webpack_require__("jJ09")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "uspN":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("mmCD");
var hide = __webpack_require__("We63");
var has = __webpack_require__("Vxpl");
var SRC = __webpack_require__("Mp6I")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("46AW").inspectSource = function (it) {
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

/***/ "uu7m":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "vAbG":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".vs-col[data-v-75ea463f]{float:left}.vs-lg-12[data-v-75ea463f]{width:100%!important}.vs-lg-11[data-v-75ea463f]{width:91.66666666666667%!important}.vs-lg-10[data-v-75ea463f]{width:83.33333333333333%!important}.vs-lg-9[data-v-75ea463f]{width:75%!important}.vs-lg-8[data-v-75ea463f]{width:66.66666666666667%!important}.vs-lg-7[data-v-75ea463f]{width:58.33333333333333%!important}.vs-lg-6[data-v-75ea463f]{width:50%!important}.vs-lg-5[data-v-75ea463f]{width:41.66666666666667%!important}.vs-lg-4[data-v-75ea463f]{width:33.33333333333333%!important}.vs-lg-3[data-v-75ea463f]{width:25%!important}.vs-lg-2[data-v-75ea463f]{width:16.66666666666667%!important}.vs-lg-1[data-v-75ea463f]{width:8.333333333333332%!important}@media only screen and (max-width:900px){.vs-sm-12[data-v-75ea463f]{width:100%!important}.vs-sm-11[data-v-75ea463f]{width:91.66666666666667%!important}.vs-sm-10[data-v-75ea463f]{width:83.33333333333333%!important}.vs-sm-9[data-v-75ea463f]{width:75%!important}.vs-sm-8[data-v-75ea463f]{width:66.66666666666667%!important}.vs-sm-7[data-v-75ea463f]{width:58.33333333333333%!important}.vs-sm-6[data-v-75ea463f]{width:50%!important}.vs-sm-5[data-v-75ea463f]{width:41.66666666666667%!important}.vs-sm-4[data-v-75ea463f]{width:33.33333333333333%!important}.vs-sm-3[data-v-75ea463f]{width:25%!important}.vs-sm-2[data-v-75ea463f]{width:16.66666666666667%!important}.vs-sm-1[data-v-75ea463f]{width:8.333333333333332%!important}}@media only screen and (max-width:600px){.vs-xs-12[data-v-75ea463f]{width:100%!important}.vs-xs-11[data-v-75ea463f]{width:91.66666666666667%!important}.vs-xs-10[data-v-75ea463f]{width:83.33333333333333%!important}.vs-xs-9[data-v-75ea463f]{width:75%!important}.vs-xs-8[data-v-75ea463f]{width:66.66666666666667%!important}.vs-xs-7[data-v-75ea463f]{width:58.33333333333333%!important}.vs-xs-6[data-v-75ea463f]{width:50%!important}.vs-xs-5[data-v-75ea463f]{width:41.66666666666667%!important}.vs-xs-4[data-v-75ea463f]{width:33.33333333333333%!important}.vs-xs-3[data-v-75ea463f]{width:25%!important}.vs-xs-2[data-v-75ea463f]{width:16.66666666666667%!important}.vs-xs-1[data-v-75ea463f]{width:8.333333333333332%!important}}", ""]);

// exports


/***/ }),

/***/ "vDYg":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("HM0D");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("5d89d4c8", content, true, {});

/***/ }),

/***/ "vHQA":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".dropdown-group-enter-active,.dropdown-group-leave-active{-webkit-transition:opacity .25s;transition:opacity .25s}.dropdown-group-enter,.dropdown-group-leave-to{opacity:0}.vs-dropdown-group{position:relative;list-style:none;width:calc(100% - 6px);margin-left:3px;width:auto;display:block;padding:5px;padding-left:10px;padding-right:10px;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;-webkit-transition:all .3s ease;transition:all .3s ease}.vs-dropdown-group .span{font-size:.9375em;font-weight:400}.vs-dropdown-group.marginIcon{padding-right:25px}.vs-dropdown-group.marginIcon:hover .con-dropdown-group{border-left:1px solid rgba(0,0,0,.1)}.vs-dropdown-group.marginIcon:hover>.icon-group{-webkit-transform:translateY(-50%) rotate(-180deg);transform:translateY(-50%) rotate(-180deg);opacity:0}.vs-dropdown-group .icon-group{position:absolute;right:4px;font-size:1.125em;top:50%;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.vs-dropdown-group .con-dropdown-group{padding-left:3px;position:relative;right:0;top:0;min-width:130px;width:auto;z-index:1000;background:inherit;overflow:hidden;-webkit-transition:all .3s ease;transition:all .3s ease;border-left:1px solid rgba(0,0,0,.1)}.vs-dropdown-group .con-dropdown-group ul{padding-top:5px;padding-left:0;position:relative;background:#fff;border-radius:5px}.no-cascading{font-weight:700;border-top:1px solid rgba(0,0,0,.05);padding-left:0!important;padding-right:0!important;margin-top:5px!important;margin-left:0}.no-cascading>h3{padding:0 10px;font-size:.9375em;padding-top:6px;padding-bottom:6px;cursor:default}.no-cascading .con-dropdown-group-no-cascading{width:100%!important;font-weight:700;height:auto!important;opacity:1!important;border-left:1px solid transparent!important}.no-cascading .con-dropdown-group-no-cascading ul{width:100%;-webkit-box-shadow:0 5px 20px 0 transparent!important;box-shadow:0 5px 20px 0 transparent!important;padding-left:0!important}", ""]);

// exports


/***/ }),

/***/ "vSL8":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".vs-topbar[data-v-65b7a84f]{width:100%;height:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom-left-radius:8px;border-bottom-right-radius:8px;-webkit-box-shadow:0 20px 40px -8px rgba(0,0,0,.1);box-shadow:0 20px 40px -8px rgba(0,0,0,.1)}", ""]);

// exports


/***/ }),

/***/ "vSd1":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("QewL");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("5e34e893", content, true, {});

/***/ }),

/***/ "vbmC":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("1sQD");
var $keys = __webpack_require__("KILR");

__webpack_require__("XTKf")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "vnL8":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".con-vs-card-header[data-v-3838e486]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;font-weight:500;position:relative;white-space:nowrap}.con-vs-card-header .card-icon[data-v-3838e486],.con-vs-card-header[data-v-3838e486]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.con-vs-card-header .card-icon[data-v-3838e486]{margin:10px}.con-vs-card-header .card-icon i[data-v-3838e486]{font-size:1.5rem;margin-right:0}.con-vs-card-header .card-titles[data-v-3838e486]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:8px;margin-left:10px}.con-vs-card-header .card-titles .card-title[data-v-3838e486]{font-size:1.5rem}.con-vs-card-header .card-titles .card-subtitle[data-v-3838e486]{font-size:.8rem}", ""]);

// exports


/***/ }),

/***/ "wIja":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("gEM8")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("kKjQ")(String, 'String', function (iterated) {
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

/***/ "wK0f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6fhx");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("9565e46c", content, true, {});

/***/ }),

/***/ "wTVA":
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "wgw1":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("mmCD").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "whO+":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "wkBT":
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "wrDX":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("aGpG");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("380dce11", content, true, {});

/***/ }),

/***/ "ww9l":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".vs-con-dropdown{position:relative;display:inline-block;border:0;background:transparent}.vs-con-dropdown a{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.vs-con-dropdown:active{opacity:1!important}", ""]);

// exports


/***/ }),

/***/ "x30W":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("uu7m");
var TAG = __webpack_require__("Z+hs")('toStringTag');
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

/***/ "xOhX":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("xSQb");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("ba2cc4f4", content, true, {});

/***/ }),

/***/ "xSQb":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".inactive[data-v-523dd0ee]{opacity:.1!important}.textx[data-v-523dd0ee]{padding:0;font-weight:lighter}.con-icon[data-v-523dd0ee]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.icon-chip[data-v-523dd0ee]{padding:0;-ms-flex-pack:distribute;justify-content:space-around}.con-x[data-v-523dd0ee],.icon-chip[data-v-523dd0ee]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.con-x[data-v-523dd0ee]{width:22px;height:22px;margin:5px;margin-left:0;border-radius:50%;background:inherit;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:inherit;cursor:pointer;z-index:100;-webkit-transition:all .3s ease;transition:all .3s ease}.con-x[data-v-523dd0ee]:hover{background:inherit;background:rgba(var(--danger));color:#fff}.con-x i[data-v-523dd0ee]{font-size:1.0625em;color:inherit}.fade-enter-active[data-v-523dd0ee],.fade-leave-active[data-v-523dd0ee]{-webkit-transition:all .3s;transition:all .3s}.fade-enter[data-v-523dd0ee],.fade-leave-to[data-v-523dd0ee]{max-height:0!important;margin-bottom:0!important;margin-top:0!important}.con-vs-chip[data-v-523dd0ee]{width:auto;background:rgba(var(--primary),.1);border-radius:20px;opacity:1;overflow:hidden;position:relative;margin:5px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;cursor:default;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-chip[data-v-523dd0ee]{color:inherit;padding:5px 10px;font-size:.75em;position:relative}.vs-chip b[data-v-523dd0ee]{color:rgb(var(--primary))!important}", ""]);

// exports


/***/ }),

/***/ "y78y":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ku7R");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("4195afea", content, true, {});

/***/ }),

/***/ "yIdM":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "yZdz":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("Z+hs")('iterator');
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

/***/ "zRZm":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ZboS");
var hiddenKeys = __webpack_require__("ER0q").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "zaE7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
});
//# sourceMappingURL=vuesax.umd.js.map