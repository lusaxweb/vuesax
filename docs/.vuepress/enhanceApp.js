import Vuesax from '../../src'
import Vuecode from './vc/dist/vuecode.common.js'
import './vc/dist/vuecode.css'
import demo from './theme/demo.vue'
import Box from './theme/box.vue'
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData
}) => {
  // ...apply enhancements to the app
  Vue.use(Vuesax)
  Vue.use(Vuecode,{
    theme:'flat'
  })
  Vue.component('Demo',demo)
  Vue.component('Box',Box)
}
