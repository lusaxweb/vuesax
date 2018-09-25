import vsComponent from './vsNavbar'
import vsComponent2 from './vsNavItem'
import vsComponent3 from './vsNavGroup'
import vsComponent4 from './vsNavbarTitle'
import vsComponent5 from './vsNavbarItems'

export default Vue => {
  Vue.component(vsComponent.name, vsComponent)
  Vue.component(vsComponent2.name, vsComponent2)
  Vue.component(vsComponent3.name, vsComponent3)
  Vue.component(vsComponent4.name, vsComponent4)
  Vue.component(vsComponent5.name, vsComponent5)
}
