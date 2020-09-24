<template lang="html">
  <div class="">
    <vs-slider color="warning" v-model="value1"/>
    <vs-slider color="danger" ticks step=10 v-model="value2"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:[60,90],
      value2:[30,40]
    }
  }
}
</script>

<style lang="css">
</style>
