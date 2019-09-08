import component from './component'
import vsButtonGroup from './vsButtonGroup'

component.install = vue => vue.component(component.name, component)
vsButtonGroup.install = vue => vue.component(vsButtonGroup.name, vsButtonGroup)

export default component
export {
  vsButtonGroup
}
