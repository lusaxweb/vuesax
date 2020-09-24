import vsComponent from './vsTable'
import vsComponent2 from './vsTh'
import vsComponent3 from './vsTr'
import vsComponent4 from './vsTd'

export default Vue => {
  Vue.component(vsComponent.name, vsComponent)
  Vue.component(vsComponent2.name, vsComponent2)
  Vue.component(vsComponent3.name, vsComponent3)
  Vue.component(vsComponent4.name, vsComponent4)
}
