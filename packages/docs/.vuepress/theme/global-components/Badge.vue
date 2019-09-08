<template>
  <span :class="['badge', type, vertical]">
    {{ text || $slots.default }}
  </span>
</template>

<script>
export default {
  // functional: true,
  props: {
    type: {
      type: String,
      default: 'tip'
    },
    text: String,
    vertical: {
      type: String,
      default: 'top'
    }
  },

  mounted() {
    let h = this.$el.closest('h2') || this.$el.closest('h1')
    let idx = h.id
    let link = document.querySelector(`.link-${idx}`)
    let badge = document.createElement('span')
    badge.className = 'badge-link'
    badge.classList.add(this.type)

    if(this.$el.closest('h1')) {
      badge.innerHTML = this.text
      badge.classList.add('header-badge-link')
    }

    if (!link.querySelector('.badge-link')) {
      link.appendChild(badge)
    }

  }
  // render (h, { props, slots }) {
  //   return h('span', {
  //     class: ['badge', props.type, props.vertical]
  //   }, props.text || slots().default)
  // }
}
</script>

<style lang="stylus" scoped>
.badge
  display inline-block
  font-size .7rem
  // height 16px
  // line-height 18px
  border-radius 5px
  padding 1px 5px
  color white
  margin-right 5px
  background-color #42b983
  cursor default
  pointer-events none
  user-select none
  // font-weight 600
  &.middle
    vertical-align middle
  &.top
    vertical-align top

  &.accent
    background $accentColor
  &.tip, &.green, &.success
    background-color alpha(#42b983,.1)
    color #42b983
    // background #42b983
  &.error, &.danger
    background alpha(rgb(255, 71, 87),.1) //#f66
    color rgb(255, 71, 87) //#f66
    border 0px
  &.warning, &.warn, &.yellow
    background alpha(rgb(255, 186, 0),.1)
    color rgb(255, 186, 0)
    // background-color darken(#ffe564, 35%)
</style>
