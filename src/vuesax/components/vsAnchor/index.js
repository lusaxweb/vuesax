import vsComponent from './vsAnchor'
import vsLink from './vsLink'

export default Vue => {
  Vue.component(vsComponent.name, vsComponent)
  Vue.component(vsLink.name, vsLink)
}
