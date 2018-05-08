import Vue from 'vue'
import App from './App.vue'
import Vuesax from './vuesax/index.js'
Vue.config.productionTip = false

Vue.use(Vuesax)

new Vue({
  render: h => h(App)
}).$mount('#app')
