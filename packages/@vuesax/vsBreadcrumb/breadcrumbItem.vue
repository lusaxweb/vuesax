

<script>
import globalProps from '../../vuesax/mixins/props'
export default {
  name: 'VsBreadcrumbItem',

  mixins: [globalProps],

  props:{
    active:{
      default: false,
      type: Boolean
    }
  },

  computed:{
    Class() {
      return [
        {'vs-breadcrumb-item--active': !!this.active},
        {'vs-breadcrumb-item--disabled': !!this.disabled},
      ]
    },
    getDivider() {
      return this.$parent.getDivider
    }
  },

  render(h) {
    let content = h('span', {
      class: 'vs-breadcrumb-item__content'
    }, [this.$slots.default])

    let divider = h('span', {
      class: 'vs-breadcrumb-item__separator'
    }, [ this.getDivider() ])

    return h(
      'div',
      {
        class: ['vs-breadcrumb-item', this.Class]
      },
      [content, divider]
    )
  },
}
</script>

<style lang="stylus">
  @import "../../vuesax/style/imports"
  @import "./main"
</style>
