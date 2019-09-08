<template>
  <div class="vs-card-media-group">
    <div
      @click="active--"
      class="vs-card-media-group__count">
      {{ active > 10 ? active : '0' + (active + 1) }} / {{ total > 10 ? total : '0' + total }}
    </div>
    <slot />
    <div
      @click="active++"
      class="vs-card-media-group__icon-next">
      <i class='bx bx-right-arrow-alt' ></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VsCardMediaGroup',
  data:() => ({
    active: 0,
    total: 0
  }),

  mounted() {
    this.total = this.$children.length
    this.$children.forEach((item, index) => {
      item.$data.index = index
    })
  },
}
</script>
<style lang="stylus">
  @import "../../vuesax/style/imports"
  @import "./main"
</style>
