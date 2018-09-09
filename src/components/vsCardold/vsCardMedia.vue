<template lang="html">
  <div
    class="con-vs-card-media"
  >
    <img :src="vsMedia">
  </div>
</template>

<script>
export default {
  name:'VsCardMedia',
  props:{
    vsMedia:{
      type:String,
      default:null,
    }
  }
}
</script>

<style lang="stylus" scoped>
  .con-vs-card-media
    position relative
    img
      width: 100%;
      max-width: 100%;
      min-width: 100%;
      display: block;
      vertical-align: top;
</style>
