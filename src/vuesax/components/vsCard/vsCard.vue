<template lang="html">
  <div
    class="vs-card"
    :style="{
      'border-color':vsColor?/[#()]/.test(vsColor)?vsColor:`rgba(var(--${vsColor}),1)`:'rgb(255,255,255)'
    }">
      <slot></slot>
  </div>
</template>

<script>
import color from '../../utils/color.js'
export default {
  name:'vs-card',
  props:{
    vsColor:{
      type:String,
      default:'primary'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .vs-card
    width 100%
    border 1px solid black
    border-radius 6px
    box-shadow: 0 20px 40px -15px rgba(0,0,0,0.13);
    margin 5px
</style>

<style lang="stylus"> // cannot be scoped due to inheritance
  .vs-card
    > div:first-child
    > div:first-child > img
      border-top-right-radius 6px
      border-top-left-radius 6px
</style>
