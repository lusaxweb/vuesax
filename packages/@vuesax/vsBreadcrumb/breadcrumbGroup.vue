

<script>
export default {
  name:'VsBreadcrumbGroup',

  props:{
    value:{
      type: Boolean,
      default: false
    }
  },



  updated() {
    if(this.$parent.$slots.divider) {
      this.$slots.divider = this.$parent.$slots.divider
    }
  },

  created() {
    if(this.$parent.$slots.divider) {
      this.$slots.divider = this.$parent.$slots.divider
    }
  },

  methods: {
    getDivider() {
      return this.$parent.getDivider()
    },
  },


  render(h) {
    let _this = this
    let content = h('span', {
      class: 'vs-breadcrumb-group__content',
      directives:[{
        name: 'show',
        value: _this.value,
      }]
    }, [this.$slots.default])

    let hidden = h('span', {
      class: 'vs-breadcrumb-group__content-hidden'
    }, [
      h('span',
        {
          class: 'vs-breadcrumb-group__content-hidden__points',
          on: {
            click() {
              _this.$emit('input', ! _this.value)
            }
          }
        },
        [ this.$slots.icon ? this.$slots.icon : '...' ]),
      h('span',
        {
          class: 'vs-breadcrumb-item__separator'
        },
        [ this.$parent.$slots.divider ? this.$parent.$slots.divider : '/' ])
      ])


    return h(
      'div',
      {
        class: ['vs-breadcrumb-group'],
        props: {
          ref: 'component'
        }
      },
      [ content , this.value ? null : hidden ]
    )
  },
}
</script>

<style lang="stylus">
  @import "../../vuesax/style/imports"
  @import "./main"
</style>
