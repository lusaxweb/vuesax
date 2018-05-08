<template lang="html">
  <div class="">
    <input v-model="color" type="color" name="" value="">
    <label for="">Color: <span>{{color}}</span></label>
    <vs-switch :vs-type="color" v-model="switch1"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      color:'#5a3cc4',
      switch1:true,
    }
  }
}
</script>

<style lang="css">
</style>
