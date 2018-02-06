// import Vue from 'vue'
import vsButton from './components/vsButton.vue'
// import vsSelect from './components/vsSelect.vue'
// import './css/index.css'
export const vuesax = {
  install(Vue, options) {
    //buttons
    Vue.component(vsButton.name,vsButton)
    //selects
    // Vue.component(vsSelect.name,vsSelect)
  	Vue.mixin({
      mounted() {
        console.log('hola mundo')
      }
    });

  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vuesax)
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
export default vuesax
