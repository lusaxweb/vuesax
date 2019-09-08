import component from './component'
import vsBreadcrumbItem from './breadcrumbItem'
import vsBreadcrumbGroup from './breadcrumbGroup'

component.install = vue => vue.component(component.name, component)
vsBreadcrumbItem.install = vue => vue.component(vsBreadcrumbItem.name, vsBreadcrumbItem)
vsBreadcrumbGroup.install = vue => vue.component(vsBreadcrumbGroup.name, vsBreadcrumbGroup)

export default component
export {
  vsBreadcrumbItem,
  vsBreadcrumbGroup
}
