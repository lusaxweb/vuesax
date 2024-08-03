import vsEditableList from './vsEditableList'
import vsEditableListItem from './vsEditableListItem'
import vsEditableListHeader from './vsEditableListHeader'

export default Vue => {
  Vue.component(vsEditableList.name, vsEditableList)
  Vue.component(vsEditableListItem.name, vsEditableListItem)
  Vue.component(vsEditableListHeader.name, vsEditableListHeader)
}
