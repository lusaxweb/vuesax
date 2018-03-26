

import './src/css/index.css'
import {vsComponents} from './src/components'
import {vsFunctions} from './src/components'
import vsTooltip from './src/directives/vsTooltip/vsTooltip.js'
import easing from './src/utils/easing.js'


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
// Vuesax.version = '__VERSION__'

export default Vuesax
