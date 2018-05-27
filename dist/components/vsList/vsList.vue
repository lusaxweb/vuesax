<template lang="html">
  <div
    class="vs-list"
    :style="{
      /* 'border-color':vsColor?/[#()]/.test(vsColor)?vsColor:`rgba(var(--${vsColor}),1)`:'rgb(255,255,255)' */
    }">
      <slot></slot>
  </div>
</template>

<script>
import color from '../../utils/color.js'
export default {
  name:'vs-list'
}
</script>

<style lang="stylus" scoped>
  .vs-list
    > div:first-of-type
      border-radius 8px 8px 0px 0px
      border-top: 1px solid rgb(235, 235, 235) !important
    > div:last-child
      border-radius 0px 0px 8px 8px
      border-bottom: 1px solid rgb(235, 235, 235) !important

  .vs-list .vs-list-item {
    border-top 1px solid rgb(235,235,235)
  }
</style>
