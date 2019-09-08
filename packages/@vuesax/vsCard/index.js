import component from './component'
import vsCardMediaGroup from './vsCardMediaGroup'
import vsCardMediaGroupItem from './vsCardMediaGroupItem'

component.install = vue => vue.component(component.name, component)
vsCardMediaGroup.install = vue => vue.component(vsCardMediaGroup.name, vsCardMediaGroup)
vsCardMediaGroupItem.install = vue => vue.component(vsCardMediaGroupItem.name, vsCardMediaGroupItem)

export default component
export {
  vsCardMediaGroup,
  vsCardMediaGroupItem
}

