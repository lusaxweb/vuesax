<template lang="html">
  <div class="centerx default-input">
     <vs-input class="inputx" placeholder="Placeholder" v-model="value1"/>
     <vs-input disabled class="inputx" placeholder="Disabled" v-model="value2"/>
   </div>
</template>

<script>
export default {
  data(){
    return {
      value1:'',
      value2:''
    }
  },
}
</script>

<style lang="stylus">
.default-input
  .inputx
    margin 10px
</style>
