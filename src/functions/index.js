// Functions

import vsNotifications from './vsNotifications/index.js'
import {message} from './vsMessageBox/vsMessageBox.js'
import {confirm} from './vsMessageBox/vsMessageBox.js'
// import {prompt} from './vsMessageBox/vsMessageBox.js'
import {vsLoading} from './vsLoading/vsLoading.js'
import {vsLoadingClose} from './vsLoading/vsLoading.js'
//theme
import vsTheme from '../utils/theme.js'

const vsFunctions = {
  vsNotifications,
  message,
  confirm,
  // prompt,
  // vsDialog,
  vsLoading,
  vsLoadingClose,
  vsTheme,
}

export default Vue => {
  Vue.prototype.$vs = {}

  Object.values(vsFunctions).forEach((vsFunctions) => {
    if(vsFunctions.hasOwnProperty('subName')){
      Vue.prototype.$vs[vsFunctions.name][vsFunctions.subName] = vsFunctions.vsfunction
    } else {
      Vue.prototype.$vs[vsFunctions.name] = vsFunctions.vsfunction
    }
  })

}
