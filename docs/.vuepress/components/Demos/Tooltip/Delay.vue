<template lang="html">
  <div class="centerx">
    <vs-button v-tooltip="{text:'Tooltip default delay'}">Delay default</vs-button>
    <vs-button v-tooltip="{text:'Tooltip delay 0.5s',delay:500}">Delay 0.5s</vs-button>
    <vs-button v-tooltip="{text:'Tooltip delay 3s',delay:3000}">Delay 3s</vs-button>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
