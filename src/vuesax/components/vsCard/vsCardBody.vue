<template lang="html">
  <div
    class="con-vs-card-body"
    >
      <slot></slot>
  </div>
</template>

<script>
import color from '../../utils/color.js'
export default {
  name:'vs-card-body'
}
</script>

<style lang="stylus" scoped>
  .con-vs-card-body
    padding 16px
</style>
