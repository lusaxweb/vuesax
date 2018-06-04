<template lang="html">
  <div class="centerx">
    <vs-input vs-icon="search" vs-placeholder="Search" v-model="value1"/>
    <vs-input vs-icon-after="true" vs-label="Icon after" vs-icon="mode_edit" vs-placeholder="Nombre" v-model="value2"/>
    <vs-input vs-icon="add" vs-label-placeholder="Label-placeholder" v-model="value3"/>
    <vs-input vs-icon-after="true"  vs-icon="shopping_cart" vs-label-placeholder="Label-placeholder" v-model="value4"/>
    <vs-input disabled="true" vs-icon="error_outline" vs-label-placeholder="icon-disabled" v-model="value5"/>
    <vs-input vs-icon-after="true" disabled="true" vs-icon="email" vs-label-placeholder="icon-disabled" v-model="value6"/>
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
      value6:''
    }
  }
}
</script>

<style lang="css">
</style>
