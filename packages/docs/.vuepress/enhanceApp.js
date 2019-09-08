import Vuesax from '../../vuesax/index.js'
import 'boxicons/css/boxicons.min.css'
// import { vsButton } from '../../src'
// import Vuesax from 'vuesax/vuesax.common.js'
// import 'vuesax/vuesax.css'
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData
}) => {
  // ...apply enhancements to the app
  Vue.use(Vuesax, {
    theme: 'loxo',
    globalClass: 'myClassComponentsVuesax',
    locale: 'en_EN',
    // locale: 'es_ES',
    customLocale: {
      locale: 'br',
      button: 'brasileano jaja xx',
      input: 'perro y gato'
    }
  })
}
