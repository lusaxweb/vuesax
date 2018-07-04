<template lang="html">
  <div class="centerx default-input">
     <vs-input class="inputx" v-model="value1"/>
     <vs-input class="inputx" vs-label="prueba" placeholder="Password" v-model="value2"/>
   </div>
</template>

<script>
export default {
  data(){
    return {
      value1:'',
      value2:''
    }
  }
}
</script>

<style lang="stylus">
.default-input
  .inputx
    margin 10px
    color rgb(0,100,0)
</style>
