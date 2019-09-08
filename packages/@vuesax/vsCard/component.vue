<template>
  <div
    ref="component"
    :class="Class"
    class="vs-card"
  >
    <header
      v-if="$slots.header"
      class="vs-card__header"
    >
      <slot name="header" />
    </header>

    <div
      v-if="$slots.media"
      class="vs-card__media"
    >
      <slot name="media" />
    </div>

    <div
      v-if="$slots.default"
      class="vs-card__content"
    >
      <slot />
    </div>

    <footer
      v-if="$slots.footer"
      class="vs-card__footer"
    >
      <slot name="footer" />
    </footer>
  </div>
</template>
<script>
import globalProps from '../../vuesax/mixins/props'

export default {
  name: 'VsCard',
  mixins: [globalProps],
  inheritAttrs: false,
  props:{
    active: {
      default: false,
      type: Boolean
    },
  },

  computed: {
    Class() {
      return [
        { 'vs-card__active' : this.active },
        { 'vs-card__disabled' : this.disabled },
        { 'vs-card--loading' : this.loading },
        { 'vs-card--upload' : this.upload },
        { [`vs-card--${this.size}`] : !!this.size },
        { [`vs-card--${this.$vsTheme}`]: !!this.$vsTheme },
        this.$vsGlobalClass,
      ]
    },
    Listeners() {
      return {
        ...this.$listeners,
        click: (evt) => {
          this.handleClick(evt)
        },
        mousedown: (evt) => {
          this.effectClick(evt)
        }
      }
    }
  },

  methods:{
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
        this.$vs.ripple(evt, this.$refs.component)
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
