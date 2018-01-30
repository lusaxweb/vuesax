import vsButton from './components/vsBoton.vue'
import vsSelect from './components/vsSelect.vue'
import './css/index.css'
const vuesax = {
  install(Vue, options) {
    //buttons
    Vue.component(vsButton.name,vsButton)
    //selects
    Vue.component(vsSelect.name,vsSelect)
  	Vue.mixin({
      mounted() {

      }
    });

  }
};

export default vuesax;
