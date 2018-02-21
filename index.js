// import Vue from 'vue'
import vsButton from './components/vsButton.vue'
import vsSelect from './components/vsSelect.vue'
import vsNoti from './components/vsNoti/vsNoti.js'
import vsSwitch from './components/vsSwitch.vue'
import vsCheckbox from './components/vsCheckBox.vue'
import vsRadio from './components/vsRadio.vue'
import vsInput from './components/vsInput.vue'
// import './css/index.css'
const Vuesax = {
  install(Vue, options) {
    Vue.prototype.$vsNotify = vsNoti
    Vue.prototype.$vsNotify.confirm = vsNoti
    //buttons
    Vue.component(vsButton.name,vsButton)
    //selects
    Vue.component(vsSelect.name,vsSelect)
    //switch
    Vue.component(vsSwitch.name,vsSwitch)
    //checkBox
    Vue.component(vsCheckbox.name,vsCheckbox)
    //radio
    Vue.component(vsRadio.name,vsRadio)
    //input
    Vue.component(vsInput.name,vsInput)
  	Vue.mixin({
      methods:{
        vsNoti
      }
    });

    // Register a global custom directive called `v-focus`
    Vue.directive('focus', {
      // When the bound element is inserted into the DOM...
      inserted: function (el) {
        // Focus the element
        el.focus()
      }
    })

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

//
// bind(el, binding, vnode) {
//   let interval = null;
//   let startTime;
//   const handler = () => vnode.context[binding.expression].apply();
//   const clear = () => {
//     if (new Date() - startTime < 100) {
//       handler();
//     }
//     clearInterval(interval);
//     interval = null;
//   };
//
//   on(el, 'mousedown', (e) => {
//     if (e.button !== 0) return;
//     startTime = new Date();
//     once(document, 'mouseup', clear);
//     clearInterval(interval);
//     interval = setInterval(handler, 100);
//   });
// }
