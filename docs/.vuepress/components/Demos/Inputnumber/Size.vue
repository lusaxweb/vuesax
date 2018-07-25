<template lang="html">
  <div class="centerx">
    <vs-input-number v-model="number0"/>
    <vs-input-number size="medium" v-model="number1"/>
    <vs-input-number size="small" v-model="number2"/>
    <vs-input-number size="mini" v-model="number3"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      number0:95,
      number1:21,
      number2:67,
      number3:2
    }
  }
}
</script>

<style lang="css">
</style>
