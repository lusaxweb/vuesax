import './css/index.css'
import {vsComponents} from './components'
import {vsFunctions} from './components'
import vsTooltip from './directives/vsTooltip/vsTooltip.js'
import easing from './utils/easing.js'

const Vuesax = {
  theme:{
    "primary-color":'rgb(51, 186, 77)'
  },
  install(Vue, options) {
    Object.values(vsComponents).forEach((vsComponent) => {
      Vue.component(vsComponent.name,vsComponent)
    })

    Vue.prototype.$vs = {}

    Object.values(vsFunctions).forEach((vsFunctions) => {
      if(vsFunctions.hasOwnProperty('subName')){
        Vue.prototype.$vs[vsFunctions.name][vsFunctions.subName] = vsFunctions.vsfunction
      } else {
        Vue.prototype.$vs[vsFunctions.name] = vsFunctions.vsfunction
      }
    })
    Vue.prototype.$vs.easing = easing
    Vue.directive('tooltip', vsTooltip)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vuesax)
}
export default Vuesax
