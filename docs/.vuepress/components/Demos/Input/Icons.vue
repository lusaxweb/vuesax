<template lang="html">
  <div class="centerx icons-example">
    <vs-input icon="search" placeholder="Search" v-model="value1" icon-after="true" icon-no-border />
    <vs-input icon="search" placeholder="Search" v-model="value1"/>
    <vs-input icon-after="true" label-placeholder="icon-after" icon="mode_edit" vs-placeholder="Nombre" v-model="value2"/>
    <vs-input icon="add" label-placeholder="Label-placeholder" v-model="value3"/>
    <vs-input icon-after="true"  icon="shopping_cart" label-placeholder="Label-placeholder" v-model="value4"/>
    <vs-input disabled="true" icon="error_outline" label-placeholder="icon-disabled" v-model="value5"/>
    <vs-input icon-after="true" disabled="true" icon="email" label-placeholder="icon-disabled" v-model="value6"/>
    <vs-input icon-no-border icon="account_circle" label-placeholder="icon-no-border" v-model="value7"/>
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
      value7:'',
      value8: ''
    }
  }
}
</script>

<style lang="stylus">
.icons-example
  .vs-input
    margin 15px
</style>
