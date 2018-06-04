<template lang="html">
  <div class="centerx">
    <vs-input-number v-model="number"/>
    <vs-input-number :disabled="true" v-model="number1"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      number:34,
      number1:48
    }
  }
}
</script>

<style lang="css">
</style>
