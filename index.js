// import Vue from 'vue'
import vsButton from './components/vsButton.vue'
import vsSelect from './components/vsSelect.vue'
import vsNoti from './components/vsNoti/vsNoti.js'
import vsSwitch from './components/vsSwitch.vue'
import vsCheckbox from './components/vsCheckBox.vue'
import vsRadio from './components/vsRadio.vue'
import vsInput from './components/vsInput.vue'
import {message} from './components/vsMessageBox/vsMessageBox.js'
import {confirm} from './components/vsMessageBox/vsMessageBox.js'
import {prompt} from './components/vsMessageBox/vsMessageBox.js'
import vsTabs from './components/tabs/tabs.vue'
import vsTab from './components/tabs/tab.vue'
import vsSlider from './components/slider/slider.vue'
import vsInputNumber from './components/vsInputNumber/vsInputNumber.vue'
import tooltip from './src/directives/vsTooltip.js'
import vsUpload from './components/upload/vsUpload.vue'

// import 'prefixfree'
// import './css/index.css'
const Vuesax = {
  install(Vue, options) {
    Vue.prototype.$vsNotify = vsNoti
    Vue.prototype.$vs = {}
    Vue.prototype.$vs.alert = message
    Vue.prototype.$vs.confirm = confirm
    Vue.prototype.$vs.prompt = prompt
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
    //tabs
    Vue.component(vsTabs.name,vsTabs)
    //tab
    Vue.component(vsTab.name,vsTab)
    //slider
    Vue.component(vsSlider.name,vsSlider)
    //InputNumber
    Vue.component(vsInputNumber.name,vsInputNumber)
    //upload
    Vue.component(vsUpload.name,vsUpload)


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
    Vue.directive('tooltip', tooltip)
// Vue.directive('vs-repeat-click', {
//   bind(el, binding, vnode) {
//     let interval = null;
//     let startTime;
//     const handler = () => vnode.context[binding.expression].apply();
//     const clear = () => {
//       if (new Date() - startTime < 100) {
//         handler();
//       }
//       clearInterval(interval);
//       interval = null;
//     };
//
//     on(el, 'mousedown', (e) => {
//       if (e.button !== 0) return;
//       startTime = new Date();
//       once(document, 'mouseup', clear);
//       clearInterval(interval);
//       interval = setInterval(handler, 100);
//     });
//   }
// })
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
