import vsComponent from './vsSideBar'
import vsComponent2 from './vsSidebarItem'
import vsComponent3 from './vsSidebarGroup'

export default Vue => {
  Vue.component(vsComponent.name, vsComponent)
  Vue.component(vsComponent2.name, vsComponent2)
  Vue.component(vsComponent3.name, vsComponent3)
}
