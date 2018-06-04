<template lang="html">
  <div class="centerx">
    <vs-button @click="openLoading" vs-type="primary-filled">Loading Default</vs-button>
  </div>
</template>

<script>
export default {
  methods:{
    openLoading(){
      this.$vs.loading()
      setTimeout( ()=> {
        this.$vs.loading.close()
      }, 2000);
    },
  }
}
</script>

<style lang="css">
</style>
