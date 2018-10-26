<template lang="html">
  <div class="">
    <input type="color" v-model="colorx" name="" value="">
    <input type="color" v-model="colorx2" name="" value="">
    <vs-button :color="colorx" type="filled">Color</vs-button>
    <vs-button :color="colorx" type="border">Color</vs-button>
    <vs-button :color="colorx" type="flat">Color</vs-button>
    <vs-button :color="colorx" type="line">Color</vs-button>
    <vs-button :color="colorx" :gradient-color-secondary="colorx2" type="gradient">Color</vs-button>
    <vs-button :color="colorx"  type="relief">Color</vs-button>

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
