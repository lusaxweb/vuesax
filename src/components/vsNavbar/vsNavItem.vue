<template>
  <li
    :style="[styleHover]"
    :class="[{'is-active-item': isActiveItem}, `vs-navbar-item-${getActiveTextColor}`]"
    class="vs-navbar--item"
    @click="clickItem()"
    @mouseout="mouseout"
    @mouseover="mouseover">
    <slot></slot>
    <span
      :style="[styleAfter]"
      class="vs-navbar-after"></span>
  </li>
</template>
<script>
import _color from '../../utils/color.js'
export default {
  name:'VsNavbarItem',
  props:{
    index: {
      type: [Number, String],
      default: null
    }
  },
  data:()=>({
    hover: false
  }),
  computed:{
    getActiveTextColor () {
      return this.$parent.$props.activeTextColor
    },
    isActiveItem () {
      return this.$parent.value == this.index
    },
    styleAfter () {
      return {
        background: _color.getColor(this.getActiveTextColor)
      }
    },
    styleHover () {
      if (this.isActiveItem) {
        return {
          color: _color.getColor(this.getActiveTextColor)
        }
      } else {
        return {
          color: this.hover?_color.getColor(this.getActiveTextColor) : _color.getColor(this.$parent.$props.textColor)
        }
      }

    }
  },
  methods:{
    clickItem () {
      this.$parent.changeIndex(this.index)
    },
    mouseout () {
      this.hover = false
    },
    mouseover () {
      this.hover = true
    }
  }
}
</script>
