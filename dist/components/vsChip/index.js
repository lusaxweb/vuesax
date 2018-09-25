import vsComponent from './vsChip'
import vsComponent2 from './vsChips'

export default Vue => {
  Vue.component(vsComponent.name, vsComponent)
  Vue.component(vsComponent2.name, vsComponent2)
}
