import vsComponent from './vsDropDown'
import vsComponent2 from './vsDropDownMenu'
import vsComponent3 from './vsDropDownItem'
import vsComponent4 from './vsDropDownGroup'

export default Vue => {
  Vue.component(vsComponent.name, vsComponent)
  Vue.component(vsComponent2.name, vsComponent2)
  Vue.component(vsComponent3.name, vsComponent3)
  Vue.component(vsComponent4.name, vsComponent4)
}
