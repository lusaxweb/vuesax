<template>
  <button
    ref="component"
    :class="Class"
    class="vs vs-button"
    v-bind="$props"
    v-on="Listeners"
  >
    <span class="vs-button__content">
      <slot />
    </span>

    <span
      v-if="loading"
      class="vs-button__loading"
    />
    <span
      v-if="upload"
      class="vs-button__upload"
    />
    <span
      v-if="$slots.animate && !animateInactive"
      class="vs-button__animate"
    >
      <slot name="animate" />
    </span>
  </button>
</template>
<script>
import globalProps from '../../vuesax/mixins/props'
import { isColor } from '../../vuesax/utils'
import { setColor } from '../../vuesax/vsFunctions'
import Color from 'color'

export default {
  name: 'VsButton',
  mixins: [globalProps],
  inheritAttrs: false,
  props:{
    active: {
      default: false,
      type: Boolean
    },
    upload: {
      default: false,
      type: Boolean
    },
    iconAfter:{
      default: false,
      type: Boolean
    },
    to:{
      default: null,
      type: String
    },
    href:{
      default: null,
      type:String
    },
    blank:{
      default:false,
      type:Boolean
    },
    icon:{
      default: false,
      type: Boolean
    },
    circle:{
      default: false,
      type: Boolean
    },
    square:{
      default: false,
      type: Boolean
    },
    block:{
      default: false,
      type: Boolean
    },
    animationType:{
      default: null,
      type: String
    },
    animateInactive:{
      default: false,
      type: Boolean
    },
    /*
     * type button
     */
     flat: {
       default: false,
       type: Boolean
     },
     border: {
       default: false,
       type: Boolean
     },
     gradient: {
       default: false,
       type: Boolean
     },
     transparent: {
       default: false,
       type: Boolean
     },
     dashed: {
       default: false,
       type: Boolean
     },
     shadow: {
       default: false,
       type: Boolean
     },
     relief: {
       default: false,
       type: Boolean
     },
     floating: {
       default: false,
       type: Boolean
     }
  },

  data:() => ({
    ripple: false
  }),

  computed: {
    Class() {
      return [
        { 'vs-button__active' : this.active },
        { 'vs-button__disabled' : this.disabled },
        { 'vs-button--loading' : this.loading },
        { 'vs-button--upload' : this.upload },
        { [`vs-button--${this.size}`] : !!this.size },
        { [`vs-button--${this.$vsTheme}`]: !!this.$vsTheme },
        { [`vs-button--block`] : !!this.block },
        { [`vs-button--animate`] : !!this.$slots.animate && !this.animateInactive },
        { [`vs-button--${this.animationType}`] : !!this.animationType },

        { [`vs-button--default`] :
          !this.flat &&
          !this.border &&
          !this.gradient &&
          !this.transparent &&
          !this.dashed &&
          !this.shadow &&
          !this.relief &&
          !this.floating
        },
        { [`vs-button--flat`] : !!this.flat },
        { [`vs-button--border`] : !!this.border },
        { [`vs-button--gradient`] : !!this.gradient },
        { [`vs-button--transparent`] : !!this.transparent },
        { [`vs-button--dashed`] : !!this.dashed },
        { [`vs-button--shadow`] : !!this.shadow },
        { [`vs-button--relief`] : !!this.relief },
        { [`vs-button--icon`] : !!this.icon },
        { [`vs-button--circle`] : !!this.circle },
        { [`vs-button--square`] : !!this.square },
        { [`vs-button--ripple`] : !!this.ripple },
        { [`vs-button--floating`] : !!this.floating },
        this.$vsGlobalClass,
      ]
    },
    Listeners() {
      return {
        ...this.$listeners,
        click: (evt) => {
          this.handleClick(evt)
        },
        mouseenter: (evt) => {
          this.handleMouseenter(evt)
        },
        mousedown: (evt) => {
          this.effectClick(evt)
        }
      }
    }
  },

  watch:{
    color() {
      this.setColors()
    }
  },

  mounted() {
    this.setColors()
  },

  methods:{
    setColors() {
      let _color = this.color

      if(!this.color) {
        _color = 'primary'
      }

      if(!isColor(_color)) {
        let colorDarken = Color(_color).darken(0.2).rgb().string()
        setColor('color-darken', colorDarken, this.$refs.component)

        let colorRotate = Color(_color).rotate(25).rgb().string()
        setColor('color-rotate', colorRotate, this.$refs.component)

      } else {
        let vsColor = `rgb(${getComputedStyle(this.$refs.component).getPropertyValue('--vs-color')})`

        let colorDarken = Color(vsColor).darken(0.2).rgb().string()
        setColor('color-darken', colorDarken, this.$refs.component)

        let colorRotate = Color(vsColor).rotate(25).rgb().string()
        setColor('color-rotate', colorRotate, this.$refs.component)
      }
    },
    handleMouseenter(evt) {
      // this.$vs.sticky(evt)
    },
    handleClick(evt) {
      this.$emit('click',event)
      /**
       * soporte para el uso de vue-router y links html
       */
      if(this.to) {
        this.routerPush()
      } else if (this.href) {
        this.openHref()
      }

    },
    effectClick(evt) {
      if(this.border) {

        this.$vs.ripple(evt, this.$refs.component, this.color || 'primary')
        this.ripple = true

        setTimeout(() => {
          this.ripple = false
        }, 400);

      } else {

        this.$vs.ripple(evt, this.$refs.component)

      }
    },
    routerPush() {
      this.$router.push(this.to)
    },
    openHref() {
      this.blank ? window.open(this.href) : window.location.href = this.href
    }
  }
}
</script>

<style lang="stylus">
  @import "../../vuesax/style/imports"
  @import "./main"
</style>
