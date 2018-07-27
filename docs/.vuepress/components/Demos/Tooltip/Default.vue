<template lang="html">
  <div class="centerx">
    <vs-tooltip text="Tooltip Default">
       <vs-switch v-model="switch1"/>
    </vs-tooltip>
    <vs-tooltip text="Tooltip Default">
      <vs-input-number v-model="number1"/>
    </vs-tooltip>
    <vs-tooltip text="Tooltip Default">
      <vs-button vs-color="primary" vs-type="border">Button</vs-button>
    </vs-tooltip>
  </div>
</template>

<script>
export default {
  data(){
    return {
      switch1:true,
      number1:10,
    }
  }
}
</script>

<style lang="css">
</style>
