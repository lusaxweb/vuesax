import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
Vue.config.productionTip = false
import Vuecode from './vuecode/index.js'

Vue.use(Vuex)
Vue.use(Vuecode,{
  // open:true,
  // theme:'line'
})

const store = new Vuex.Store({
  state: {
    myName:'Change my text from vuenut'
  },
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
