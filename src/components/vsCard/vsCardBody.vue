<template lang="html">
  <div
    class="con-vs-card-body"
  >
    <slot/>
  </div>
</template>

<script>
import color from '../../utils/color.js'
export default {
  name:'VsCardBody'
}
</script>

<style lang="stylus" scoped>
  .con-vs-card-body
    padding 16px
</style>
