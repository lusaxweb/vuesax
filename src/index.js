import './css/index.css'
import * as vsComponents from './components'
import vsFunctions from './functions'
import vsTooltip from './directives/vsTooltip/vsTooltip.js'
import easing from './utils/easing.js'

const Vuesax = {
  theme:{
    "primary-color":'rgb(51, 186, 77)'
  },
  install(Vue, options) {

    Object.values(vsComponents).forEach((vsComponent) => {
      Vue.use(vsComponent)
      // Vue.component(vsComponent.name,vsComponent)
    })

    vsFunctions(Vue)

    Vue.prototype.$vs.easing = easing
    Vue.directive('tooltip', vsTooltip)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vuesax)
}
export default Vuesax
