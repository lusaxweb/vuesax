<template lang="html">
  <div class="centerx default-input">
     <vs-input size="large" class="inputx" placeholder="Size large" v-model="value1"/>
     <vs-input class="inputx" placeholder="Size Default" v-model="value2"/>
     <vs-input size="small" class="inputx" placeholder="Size small" v-model="value3"/>
   </div>
</template>

<script>
export default {
  data(){
    return {
      value1:'',
      value2:'',
      value3:''
    }
  }
}
</script>

<style lang="stylus">
.default-input
  .inputx
    margin 10px
</style>
