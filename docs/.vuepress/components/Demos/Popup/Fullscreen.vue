<template lang="html">
  <div class="centerx">
    <vs-button @click="popupActivo4=true" vs-color="danger" vs-type="border">Open fullscreen popup</vs-button>
    <vs-popup vs-fullscreen vs-title="fullscreen" :vs-active="popupActivo4" @vs-cancel="popupActivo4=false">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </vs-popup>
  </div>
</template>

<script>
export default {
  data(){
    return {
      popupActivo4:false
    }
  }
}
</script>

<style lang="css">
</style>
