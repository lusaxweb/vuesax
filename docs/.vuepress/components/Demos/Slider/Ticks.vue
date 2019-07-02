<template lang="html">
  <div class="">
    <vs-slider step=10 v-model="value1"/>
    <vs-slider ticks step=25 v-model="value2"/>
    <vs-slider ticks step=0.5 :step-decimals="true" v-model="value3"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 60,
      value2: 25,
      value3: 25.5
    };
  }
};
</script>

<style lang="css">
</style>
