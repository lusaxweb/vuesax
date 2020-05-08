<template lang="html">
  <div class="centerx">
    <vs-input-number v-model="number0" :step="1.43" size="large" :max-decimal="2" />
  </div>
</template>

<script>
export default {
  data(){
    return {
      number0:1.98
    }
  }
}
</script>

<style lang="css">
</style>
