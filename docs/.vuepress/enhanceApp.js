import Vuesax from '../../src'
import Vuecode from './vuecode.js/dist/vuecode.common.js'
import './vuecode.js/dist/vuecode.css'
import demo from './theme/demo.vue'
import Box from './theme/box.vue'
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData
}) => {
  // ...apply enhancements to the app
  Vue.use(Vuesax, {
    theme:{
      // colors:{
      //   primary:'#5b3cc4',
      //   success:'rgb(23, 201, 100)',
      //   danger:'rgb(242, 19, 93)',
      //   warning:'rgb(255, 130, 0)',
      //   dark:'rgb(36, 33, 69)'
      // }
    }
  })
  Vue.use(Vuecode,{
    theme:'flat'
  })
  Vue.component('Demo',demo)
  Vue.component('Box',Box)
}
