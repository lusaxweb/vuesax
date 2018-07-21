<template lang="html">
  <div class="">
    <vs-slider v-model="value1"/>
    <vs-slider disabled="true" v-model="value2"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:67,
      value2:34
    }
  }
}
</script>

<style lang="css">
</style>
