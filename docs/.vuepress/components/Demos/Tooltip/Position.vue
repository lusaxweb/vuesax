<template lang="html">
  <div class="centerx">
    <vs-button v-tooltip="{text:'Tooltip position top'}">Position Top</vs-button>
    <vs-button v-tooltip="{text:'Tooltip position bottom',position:'bottom'}">Position bottom</vs-button>
    <vs-button v-tooltip="{text:'Tooltip position left',position:'left'}">Position left</vs-button>
    <vs-button v-tooltip="{text:'Tooltip position right',position:'right'}">Position right</vs-button>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
