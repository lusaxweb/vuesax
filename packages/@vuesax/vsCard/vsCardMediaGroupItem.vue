<template>
  <transition name="fade">
    <div
      v-show="isActive"
      class="vs-card-media-group-item">
      <slot />
    </div>
  </transition>
</template>
<script>
export default {
  name: 'VsCardMediaGroupItem',
  data:() => ({
    active: false,
    index: null
  }),

  computed:{
    isActive () {
      return this.$parent.active == this.index
    }
  }

}
</script>
<style lang="stylus">
  @import "../../vuesax/style/imports"
  @import "./main"
</style>
