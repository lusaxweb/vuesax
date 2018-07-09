import vsComponent from './vsTabs'
import vsComponent2 from './vsTab'

export default Vue => {
  Vue.component(vsComponent.name, vsComponent)
  Vue.component(vsComponent2.name, vsComponent2)
}
