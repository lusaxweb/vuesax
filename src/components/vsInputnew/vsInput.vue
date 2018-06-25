<template lang="html">
  <div class="vs-component vs-con-input">
    <label class="vs-input-label" for="">nuevo elemento</label>
    <input class="vs-input" type="text">
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name:'vs-input',
}
</script>

<style lang="stylus" scoped>
.vs-con-input
  display flex
  align-items flex-start
  flex-direction column
  .vs-input
    position relative
    padding 10px
    border-radius 5px
    border 1px solid #008080
  .vs-input-label
    padding-left 5px;
</style>
