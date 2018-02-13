// import Vue from 'vue'
import vsButton from './components/vsButton.vue'
import vsSelect from './components/vsSelect.vue'
import vsNoti from './components/vsNoti/vsNoti.js'
// import './css/index.css'
const Vuesax = {
  install(Vue, options) {
    //buttons
    Vue.component(vsButton.name,vsButton)
    //selects
    Vue.component(vsSelect.name,vsSelect)
  	Vue.mixin({
      methods:{
        vsNoti
      }
    });

  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vuesax)
}

// export default Vuesax;



// import * as vsComponents from './components'
//
// let vuesax = Vue => {
//   Object.values(vsComponents).forEach((vsComponent) => {
//     Vue.use(vsComponent)
//   })
// }

// Vuesax.version = '__VERSION__'
export default Vuesax
