<template lang="html">
  <div class="centerx">
    <vs-slider v-tooltip="'Tooltip Default'" v-model="valueslider"/>
    <vs-input-number v-tooltip="'Tooltip Default'" v-model="number1"/>
    <vs-button v-tooltip="'Tooltip Default'" vs-color="primary" vs-type="border">Primary</vs-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      valueslider:24,
      number1:10,
    }
  }
}
</script>

<style lang="css">
</style>
