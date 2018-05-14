import './css/index.css'
import * as vsComponents from './components'
import vsFunctions from './functions'
import vsTooltip from './directives/vsTooltip/vsTooltip.js'
import easing from './utils/easing.js'
import vsTheme from './utils/theme.js'

const Vuesax = {
  install(Vue, options) {
    //change defaults colors
    if(options.hasOwnProperty('theme')){
      if(options.theme.hasOwnProperty('colors')){
        vsTheme.vsfunction(options.theme.colors)
      }
    }

    Object.values(vsComponents).forEach((vsComponent) => {
      Vue.use(vsComponent)
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
