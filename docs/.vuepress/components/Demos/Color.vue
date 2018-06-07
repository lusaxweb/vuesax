<template lang="html">
  <div class="">
    <input type="color" v-model="colorx" name="" value="">
    <input type="color" v-model="colorx2" name="" value="">
    <vs-button :vs-color="colorx" vs-type="primary-filled">Color</vs-button>
    <vs-button :vs-color="colorx" vs-type="primary-border">Color</vs-button>
    <vs-button :vs-color="colorx" vs-type="primary-flat">Color</vs-button>
    <vs-button :vs-color="colorx" vs-type="primary-line-down">Color</vs-button>
    <vs-button :vs-color="colorx+'/'+colorx2" vs-type="primary-gradient">Color</vs-button>
    <vs-button :vs-color="colorx" vs-type="primary-relief">Color</vs-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      colorx:'#c72a75',
      colorx2:'#5252e8'
    }
  },
}
</script>

<style lang="css">
</style>
