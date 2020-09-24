<template lang="html">
  <header
    :style="[styleNavbar]"
    :class="[`vs-navbar-${type}`, `vs-navbar-color-${color}`, {'collapse':collapse}]"
    class="vs-navbar">
    <div class="vs-navbar--header">
      <button
        :class="{'active-menu' : activeMenuResponsive}"
        class="vs-navbar--btn-responsive"
        @click="activeMenuResponsive = !activeMenuResponsive">
        <span class="btn-responsive-line line--1"/>
        <span class="btn-responsive-line line--2"/>
        <span class="btn-responsive-line line--3"/>
      </button>

      <slot name="title">
      </slot>
    </div>

    <div
      :class="{'activeMenuResponsive' : activeMenuResponsive}"
      class="vs-con-items">
      <slot></slot>
    </div>
  </header>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name:'VsNavbar',

  props:{
    value:{},
    type:{
      default: null,
      type: String
    },
    collapse:{
      default:false,
      type: Boolean
    },
    color:{
      type:String,
      default:'transparent',
    },
    activeTextColor: {
      type:String,
      default:'primary',
    },
    textColor: {
      type:String,
      default:'rgb(40,40,40)',
    }
  },

  data:() => ({
    activeMenuResponsive: false
  }),

  computed:{
    styleNavbar () {
      if(_color.isColor(this.color)) {
        return {
          background: `rgb(${_color.changeColor(this.color)})`
        }
      }
      return {
        background: _color.getColor(this.color)
      }
    }
  },
  methods: {
    changeIndex (index) {
      this.$emit('input', index)
    }
  }
}
</script>
