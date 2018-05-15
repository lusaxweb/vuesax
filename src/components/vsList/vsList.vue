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
      border-top-left-radius 8px
</style>
