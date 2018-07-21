<template lang="html">
  <div class="">
    <vs-slider color="success" text-fixed=% v-model="value1"/>
    <vs-slider color="danger" text-fixed=Min ticks step=25 v-model="value2"/>
    <vs-slider color="dark" text-fixed=K ticks max=5 v-model="value3"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:60,
      value2:25,
      value3:[2,4]
    }
  }
}
</script>

<style lang="css">
</style>
