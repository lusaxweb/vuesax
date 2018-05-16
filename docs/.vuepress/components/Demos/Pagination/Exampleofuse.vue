<template lang="html">
  <div class="centerx">
    <vs-input vs-label="Enter only numbers" vs-placeholder="0123456789" v-model="value1"/>

    <vs-alert :vs-active="inputValido" vs-color="danger" vs-icon="new_releases" >
      the value is <b>invalid</b> you can only enter numbers
    </vs-alert>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:'',
    }
  },
  computed:{
    inputValido(){
      if(/^\d+$/.test(this.value1)){
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style lang="css">
</style>
