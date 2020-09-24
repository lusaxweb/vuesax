import vsComponent from './vsCollapse'
import vsComponent2 from './vsCollapseItem'

export default Vue => {
  Vue.component(vsComponent.name, vsComponent)
  Vue.component(vsComponent2.name, vsComponent2)
}
