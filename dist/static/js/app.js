(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vuesax", [], factory);
	else if(typeof exports === 'object')
		exports["vuesax"] = factory();
	else
		root["vuesax"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "011j":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var components_namespaceObject = {};
__webpack_require__.d(components_namespaceObject, "vsButton", function() { return components_vsButton; });

// CONCATENATED MODULE: C:/Users/pc 01/Documents/vuesax/node_modules/babel-loader/lib!C:/Users/pc 01/Documents/vuesax/node_modules/vue-loader/lib/selector.js?type=script&index=0!./components/vsButton.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import '../css/index.css'
/* harmony default export */ var vsButton = ({
  name: 'vs-button',
  props: ['vsType'],
  data: function data() {
    return {
      clasex: 'vs-button-' + this.vsType
    };
  },
  mounted: function mounted() {
    var el = this.$el;
    el.addEventListener('click', function (event) {
      // console.log(event);
      var elSpan = document.createElement("span");
      elSpan.className = 'relleno';
      el.appendChild(elSpan);
      var x = event.offsetX;
      var y = event.offsetY;
      var spanx = this.querySelector('.relleno');
      // if(!this.classList.contains('activo')){
      var time = 0.7;
      if (this.classList.contains('filled') || event.target.clientWidth > 100) {
        var s = event.target.clientWidth - 10;
        time = event.target.clientWidth / s;
      }
      // console.log(time);
      spanx.style.transition = 'width ' + time + 's ease,height ' + time + 's ease,opacity ' + time / 1.5 + 's ease';
      spanx.style.left = x + 'px';
      spanx.style.top = y + 'px';
      spanx.style.width = event.target.clientWidth * 3 + 'px';
      spanx.style.height = event.target.clientWidth * 3 + 'px';
      spanx.style.opacity = '1';
      // spanx.style.borderRadius = '0px'
      this.classList.add('activo');
      // }
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
    btnBlur: function btnBlur(evt) {
      // console.log(evt);
      if (!evt.target.classList.contains('filled')) {
        evt.target.classList.remove('activo');
        var spanx = evt.target.querySelector('.relleno');
        spanx.style.opacity = '0';
        setTimeout(function () {
          spanx.style.width = '0px';
          spanx.style.height = '0px';
          spanx.remove();
        }, 300);
      }
    }
  }
});
// CONCATENATED MODULE: C:/Users/pc 01/Documents/vuesax/node_modules/vue-loader/lib/template-compiler?{"id":"data-v-66be7966","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!C:/Users/pc 01/Documents/vuesax/node_modules/vue-loader/lib/selector.js?type=template&index=0!./components/vsButton.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{class:[_vm.vsType?_vm.clasex:'vs-button-primary-filled',{'filled':_vm.vsType?_vm.vsType.search('filled')!=-1:false,'border':_vm.vsType?_vm.vsType.search('border')!=-1:false}],attrs:{"type":"button","name":"button"},on:{"click":function($event){_vm.$emit('click')},"blur":function($event){_vm.btnBlur($event)}}},[_c('span',{staticClass:"text"},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_components_vsButton = (esExports);
// CONCATENATED MODULE: ./components/vsButton.vue
function injectStyle (ssrContext) {
  __webpack_require__("011j")
}
var normalizeComponent = __webpack_require__("mUJo")
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
  selectortype_template_index_0_components_vsButton,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_vsButton = (Component.exports);

// CONCATENATED MODULE: ./components/index.js




// CONCATENATED MODULE: ./index.js
// import Vue from 'vue'
// import vsButton from './components/vsButton.vue'
// import vsSelect from './components/vsSelect.vue'
// import './css/index.css'
// export default {
//   install(Vue, options) {
//     //buttons
//     // Vue.component(vsButton.name,vsButton)
//     //selects
//     // Vue.component(vsSelect.name,vsSelect)
//   	Vue.mixin({
//       mounted() {
//         console.log('hola mundo')
//       }
//     });
//
//   }
// };

// export default Vuesax;





let vuesax = Vue => {
  Object.values(components_namespaceObject).forEach((vsComponent) => {
    Vue.use(vsComponent)
  })
}

// Vuesax.version = '__VERSION__'
/* harmony default export */ var index = __webpack_exports__["default"] = (vuesax);


/***/ }),

/***/ "mUJo":
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
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
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ })

/******/ });
});
//# sourceMappingURL=app.js.map