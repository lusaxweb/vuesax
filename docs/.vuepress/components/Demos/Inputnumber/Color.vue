<template lang="html">
  <div class="centerx">
    <vs-input-number vs-color="danger" v-model="number1"/>
    <vs-input-number vs-color="success" v-model="number2"/>
    <vs-input-number vs-color="warning" v-model="number3"/>
    <vs-input-number vs-color="dark" v-model="number4"/>
    <vs-input-number vs-color="rgb(218, 24, 94)" v-model="number5"/>
    <vs-input-number vs-color="#ad3af9" v-model="number6"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      number1:196,
      number2:88,
      number3:25,
      number4:12,
      number5:590,
      number6:32,
    }
  }
}
</script>

<style lang="css">
</style>
