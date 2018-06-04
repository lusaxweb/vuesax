import vsComponent from './vsEdit'
import vsComponent2 from './vsTable'
import vsComponent3 from './vsTableColum'

export default Vue => {
  Vue.component(vsComponent.name, vsComponent)
  Vue.component(vsComponent2.name, vsComponent2)
  Vue.component(vsComponent3.name, vsComponent3)
}
