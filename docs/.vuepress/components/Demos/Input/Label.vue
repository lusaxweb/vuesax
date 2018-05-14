<template lang="html">
  <div class="centerx">
    <vs-input vs-label="Label" vs-placeholder="Placeholder" v-model="value1"/>
    <vs-input disabled="true" vs-label="Label" vs-placeholder="Disabled" v-model="value2"/>
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

<style lang="css">
</style>
