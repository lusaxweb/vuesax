<template lang="html">
  <div class="centerx">
    <input class="input-color" v-model="colorx" type="color">
    <vs-pagination :color="colorx" :total="20" v-model="currentx"></vs-pagination>
  </div>
</template>

<script>
export default {
  data: ()=>({
    colorx: '#f91f43',
    currentx: 7
  })
}
</script>

<style lang="stylus">
.input-color
  margin-right 5px
</style>
