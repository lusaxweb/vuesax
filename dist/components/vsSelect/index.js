import vsComponent from './vsSelect'
import vsComponent2 from './vsSelectItem'

export default Vue => {
  Vue.component(vsComponent.name, vsComponent)
  Vue.component(vsComponent2.name, vsComponent2)
}
