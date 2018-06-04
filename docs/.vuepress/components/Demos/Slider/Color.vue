<template lang="html">
  <div class="centerx">
    <input type="color" v-model="colorx" name="" >
    <vs-slider :vs-color="colorx" v-model="value1"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      colorx:'#db7d12',
      value1:24
    }
  }
}
</script>

<style lang="css">
</style>
