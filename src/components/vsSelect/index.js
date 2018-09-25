import vsComponent from './vsSelect'
import vsComponent2 from './vsSelectItem'
import vsComponent3 from './vsSelectGroup'

export default Vue => {
  Vue.component(vsComponent.name, vsComponent)
  Vue.component(vsComponent2.name, vsComponent2)
  Vue.component(vsComponent3.name, vsComponent3)
}
