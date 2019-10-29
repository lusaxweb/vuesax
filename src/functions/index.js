// Functions

import vsNotifications from './vsNotifications/index.js'
import vsLoading from './vsLoading/index.js'
import vsDialog from './vsDialog/index.js'
//theme
import vsTheme from '../utils/theme.js'


const vsFunctions = {
  vsNotifications,
  vsLoading,
  vsTheme,
  vsDialog
}

export default vm => {
  Object.values(vsFunctions).forEach((vsFunctions) => {
    if(vsFunctions.hasOwnProperty('subName')){
      vm.$vs[vsFunctions.name][vsFunctions.subName] = vsFunctions.vsfunction
    } else {
      vm.$vs[vsFunctions.name] = vsFunctions.vsfunction
    }
  })

  vm.$vs.loading.close = vsLoading.close
}
