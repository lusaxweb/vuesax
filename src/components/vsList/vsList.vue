<template lang="html">
  <div
    :style="{
      /* 'border-color':vsColor?/[#()]/.test(vsColor)?vsColor:`rgba(var(--${vsColor}),1)`:'rgb(255,255,255)' */
    }"
    class="vs-list">
    <slot/>
  </div>
</template>

<script>
import color from '../../utils/color.js'
export default {
  name:'VsList'
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

</style>
