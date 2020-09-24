import vsComponent from './vsImages'
import vsComponent2 from './vsImage'

export default Vue => {
  Vue.component(vsComponent.name, vsComponent)
  Vue.component(vsComponent2.name, vsComponent2)
}
