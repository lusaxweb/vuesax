<template lang="html">
  <div class="total">
    <div class="modelx">
      {{chips}}
    </div>
    <vs-chips vs-color="rgb(145, 32, 159)" placeholder="Nuevos Elementos" :items="chips"></vs-chips>
  </div>
</template>

<script>
export default {
  data(){
    return {
      chips:[
        "luis",
        "carols",
        "summer"
      ]
    }
  }
}
</script>

<style lang="css">
.total {
  width: 100%
}
</style>
