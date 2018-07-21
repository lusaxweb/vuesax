<template lang="html">
  <div class="centerx">
    <input type="color" v-model="colorx" name="" >
    <vs-slider :color="colorx" v-model="value1"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      colorx:'#10c094',
      value1:24
    }
  }
}
</script>

<style lang="css">
</style>
