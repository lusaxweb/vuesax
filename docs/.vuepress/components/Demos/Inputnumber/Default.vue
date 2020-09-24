<template lang="html">
  <div class="centerx">
    <vs-input-number v-model="number"/>
    <vs-input-number :disabled="true" v-model="number1"/>
    <vs-input-number :is-disabled="true" v-model="number2"/>
    <vs-input-number v-model="number3" icon-inc="expand_less" icon-dec="expand_more"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      number:34,
      number1:48,
      number2:50,
      number3:55,
    }
  }
}
</script>

<style lang="css">
</style>
