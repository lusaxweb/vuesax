<template lang="html">
  <div class="centerx labelPlaceholder">
    <vs-input label-placeholder="Label-placeholder" v-model="value1"/>
    <vs-input disabled="true" label-placeholder="Label-placeholder-disabled" v-model="value2"/>
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
  .labelPlaceholder
    .vs-input
      margin 10px
</style>
