<template lang="html">
  <div class="centerx labelx">
    <vs-input label="Name" placeholder="Placeholder" v-model="value1"/>
    <vs-input type="password" label="Password" placeholder="Disabled" v-model="value2"/>
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
  .labelx
    .vs-input
      margin 10px;
</style>
