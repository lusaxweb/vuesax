// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from 'vuex'
import 'prefixfree'
import {store} from './store.js'
import prism from 'prismjs';
import messages from './lang'
import InstantSearch from 'vue-instantsearch';
import marked from 'marked'
import VueI18n from 'vue-i18n'

const markedx = {}
markedx.install = function (Vue, options) {
  // 4. add an instance method
  Vue.prototype.$marked = function (valuex) {
    return marked(valuex)
  }
}

Vue.use(markedx);
Vue.use(VueI18n);
const defaultLang = 'en'
const i18n = new VueI18n({
  locale: defaultLang, // set locale
  messages
})

import Vuesax from '../../index.js'
// import '../../dist/vuesax.css'
// import Vuesax from 'vuesax'
Vue.use(Vuesax);
// console.log(Vuesax);
Vue.use(InstantSearch);

Vue.config.productionTip = false

import './assets/app.css'

Vue.mixin({
  mounted(){
    let lang = this.$route.params.lang || defaultLang;
    if(!isSupportedLang(lang)){
      lang = defaultLang
    }
    i18n.locale = lang;
  }
})

function isSupportedLang(lang){
  return messages[lang] !== undefined;
}
/* eslint-disable no-new */
var vm = new Vue({
  store,
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>',
})


// console.log(vm);
router.beforeEach((to, from, next) => {
  let lang = to.params.lang;
  if(!isSupportedLang(lang) && lang){
    let path = to.fullPath.substring(lang.length + 1)
    next({path: `/${defaultLang}${path}`, params: {lang: defaultLang}})
  } else {
    next()
  }
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
