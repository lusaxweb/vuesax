import component from './component'
import vsAvatarGroup from './vsAvatarGroup'

component.install = vue => vue.component(component.name, component)
vsAvatarGroup.install = vue => vue.component(vsAvatarGroup.name, vsAvatarGroup)

export default component
export {
  vsAvatarGroup
}
