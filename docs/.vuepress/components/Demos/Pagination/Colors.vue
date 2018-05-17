<template lang="html">
  <div class="centerx">
    <input v-model="colorx" type="color" name="" value="">
    <vs-pagination :vs-color="colorx" :vs-total="5" :vs-current="2" vs-type="filled"></vs-pagination>
  </div>
</template>

<script>
export default {
  data: ()=>({
    colorx: '#f91f43'
  })
}
</script>

<style lang="css">
</style>
