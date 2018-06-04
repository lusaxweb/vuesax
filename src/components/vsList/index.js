import vsComponent from './vsList'
import vsComponent2 from './vsListItem'
import vsComponent3 from './vsListHeader'

export default Vue => {
  Vue.component(vsComponent.name, vsComponent)
  Vue.component(vsComponent2.name, vsComponent2)
  Vue.component(vsComponent3.name, vsComponent3)
}
