<template lang="html">
  <div class="centerx colors-example">
    <vs-input label-placeholder="Default" v-model="value1"/>
    <vs-input color="success" label-placeholder="Success" v-model="value2"/>
    <vs-input color="danger" label-placeholder="Danger" v-model="value3"/>
    <vs-input color="warning" label-placeholder="Warning" v-model="value4"/>
    <vs-input color="dark" label-placeholder="Dark" v-model="value5"/>
    <vs-input color="rgb(213, 14, 151)" label-placeholder="RGB: rgb(213, 14, 151)" v-model="value6"/>
    <vs-input color="#11e988" label-placeholder="HEX: #11e988" v-model="value7"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:'',
      value2:'',
      value3:'',
      value4:'',
      value5:'',
      value6:'',
      value7:''
    }
  }
}
</script>

<style lang="stylus">
.colors-example
  .vs-input
    margin 5px
    margin-top 20px;
</style>
