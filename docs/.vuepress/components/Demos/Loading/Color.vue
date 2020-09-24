<template lang="html">
  <div class="centerx">
    <input type="color" v-model="colorLoading" name="" value="">
    <vs-button @click="openLoadingColor" type="gradient" color="danger">Danger</vs-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      colorLoading:'#7d0c3f',
    }
  },
  methods:{
    openLoadingColor(){
      this.$vs.loading({color:this.colorLoading})
      setTimeout( ()=> {
        this.$vs.loading.close()
      }, 2000);
    },
  }
}
</script>

<style lang="css">
</style>
