<template lang="html">
  <div
    class="con-vs-card-actions"
    >
      <slot></slot>
  </div>
</template>

<script>
import color from '../../utils/color.js'
export default {
  name:'vs-card-actions'
}
</script>

<style lang="stylus" scoped>
  .con-vs-card-actions
    display flex
    justify-content flex-end
    align-items center
</style>
