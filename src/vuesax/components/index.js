import vsButton from './vsButton/vsButton.vue'
import vsSelect from './vsSelect/vsSelect.vue'
import vsNotifications from './vsNotifications/vsNotifications.js'
import vsSwitch from './vsSwitch/vsSwitch.vue'
import vsCheckbox from './vsCheckBox/vsCheckBox.vue'
import vsRadio from './vsRadio/vsRadio.vue'
import vsInput from './vsInput/vsInput.vue'
import {message} from './vsMessageBox/vsMessageBox.js'
import {confirm} from './vsMessageBox/vsMessageBox.js'
import {prompt} from './vsMessageBox/vsMessageBox.js'
import vsTabs from './vsTabs/vsTabs.vue'
import vsTab from './vsTabs/vsTab.vue'
import vsSlider from './vsSlider/vsSlider.vue'
import vsInputNumber from './vsInputNumber/vsInputNumber.vue'
import vsUpload from './vsUpload/vsUpload.vue'
import {vsLoading} from './vsLoading/vsLoading.js'
import {vsLoadingClose} from './vsLoading/vsLoading.js'

// nuevos si terminar
import vsPopup from './vsPopup/vsPopup.vue'
import vsDropdown from './vsDropDown/vsDropDown.vue'
import vsDropdownItem from './vsDropDown/vsDropDownItem.vue'
import vsAnchor from './vsAnchor/vsAnchor.vue'
import vsLink from './vsAnchor/vsLink.vue'
import vsAlert from './vsAlert/vsAlert.vue'
import vsChip from './vsChip/vsChip.vue'
import vsChips from './vsChip/vsChips.vue'

//layout
import vsRow from '../layout/vsRow.vue'
import vsCol from '../layout/vsCol.vue'

//theme
import vsTheme from '../utils/theme.js'

export const vsComponents = {
  vsButton,
  vsSelect,
  vsSwitch,
  vsCheckbox,
  vsRadio,
  vsInput,
  vsTabs,
  vsTab,
  vsSlider,
  vsInputNumber,
  vsUpload,

  //nuevos sin terminar
  vsPopup,
  vsDropdown,
  vsDropdownItem,
  vsAnchor,
  vsLink,
  vsAlert,
  vsChip,
  vsChips,
  
  //layout
  vsRow,
  vsCol,
}

export const vsFunctions = {
  vsNotifications,
  message,
  confirm,
  prompt,
  vsLoading,
  vsLoadingClose,
  vsTheme,
}
