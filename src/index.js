import './css/index.css'
import './styles/config.styl'
import * as vsComponents from './components'
import vsFunctions from './functions'
import vsTooltip from './directives/vsTooltip/vsTooltip.js'
import easing from './utils/easing.js'
import vsTheme from './utils/theme.js'

const Vuesax = {
  install(Vue, options) {
    // Register a global custom directive called `v-focus`
    Vue.directive('focus', {
      // When the bound element is inserted into the DOM...
      inserted: function (el) {
        // Focus the element
        el.focus()
      }
    })
    //change defaults colors
    if(options){
      if(options.hasOwnProperty('theme')){
        if(options.theme.hasOwnProperty('colors')){
          if (typeof window !== 'undefined' || process.browser) {
            vsTheme.vsfunction(options.theme.colors, options.server)
          }
        }
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
