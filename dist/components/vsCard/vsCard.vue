<template lang="html">
  <div
    @click="clickCard"
    class="vs-card"
    :style="{
      /* 'border-color':vsColor?/[#()]/.test(vsColor)?vsColor:`rgba(var(--${vsColor}),1)`:'rgb(255,255,255)' */
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
  },
  methods:{
    clickCard(){
      this.$emit('vs-click')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .vs-card
    width calc(100% - 10px)
    // border 1px solid rgba(0, 0, 0, 0.050);
    border-radius 8px
    box-shadow: 0 20px 40px -8px rgba(0,0,0,0.1);
    margin 5px
</style>

<style lang="stylus"> // cannot be scoped due to inheritance
  .vs-card
    > div
      border-top-right-radius 0 !important
      border-top-left-radius 0 !important
    > div:first-child
    > div:first-child > img
      border-top-right-radius 8px !important
      border-top-left-radius 8px !important
</style>
