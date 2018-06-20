<template lang="html">
  <div class="centerx">
    <input type="color" v-model="backgroundLoading" name="" value="">
    <vs-button @click="openLoadingBackground" vs-type="gradient" vs-color="success">Success</vs-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      backgroundLoading:'#22c16b',
    }
  },
  methods:{
    openLoadingBackground(){
      this.$vs.loading({background:this.backgroundLoading,color:'rgb(255, 255, 255)'})
      setTimeout( ()=> {
        this.$vs.loading.close()
      }, 2000);
    },
  }
}
</script>

<style lang="css">
</style>
