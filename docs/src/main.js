// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from 'vuex'
import 'prefixfree'
import {store} from './store.js'
import prism from 'prismjs';
import InstantSearch from 'vue-instantsearch';
import marked from 'marked'
import lang from './lang/index.js'

const markedx = {}
markedx.install = function (Vue, options) {
  // 4. add an instance method
  Vue.prototype.$marked = function (valuex) {
    return marked(valuex)
  }
  Vue.prototype.$lang = lang

}
Vue.use(markedx);

import Vuesax from '../../index.js'
// import '../../dist/vuesax.css'
// import Vuesax from 'vuesax'
console.log(Vuesax.theme);
Vue.use(Vuesax);
// console.log(Vuesax);
Vue.use(InstantSearch);

Vue.config.productionTip = false

import './assets/app.css'

Vue.mixin({
  data() {
    return {
      lang:this.$lang[this.$route.params.lang],
    }
  }
})

/* eslint-disable no-new */
var vm = new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})

console.log(vm.lang);

// console.log(vm);
router.beforeEach((to, from, next) => {
  if(from.params.lang != to.params.lang){
    router.go()
  }
    next()
})
//
// var setDocumentVariable = function(propertyName, value) {
//
// };

// document.documentElement.style.setProperty('--primary', "255, 0, 153");
//
// router.afterEach((to)=>{
//   vm.$store.state.estas = to.fullPath
// })
