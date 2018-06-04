import vsComponent from './vsCard'
import vsComponent2 from './vsCardActions'
import vsComponent3 from './vsCardBody'
import vsComponent4 from './vsCardHeader'
import vsComponent5 from './vsCardMedia'

export default Vue => {
  Vue.component(vsComponent.name, vsComponent)
  Vue.component(vsComponent2.name, vsComponent2)
  Vue.component(vsComponent3.name, vsComponent3)
  Vue.component(vsComponent4.name, vsComponent4)
  Vue.component(vsComponent5.name, vsComponent5)
}
