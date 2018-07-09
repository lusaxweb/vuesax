<template lang="html">
  <div class="centerx">
    <input v-model="colorx" type="color" name="" value="">
    <vs-topbar :vs-color="colorx">
      <vs-button vs-color-text="rgb(255, 255, 255)" vs-color="rgba(255, 255, 255, 0.1)" vs-type="flat" vs-radius="50%" vs-icon="menu"></vs-button>
      <h4>This is my cool application topbar title</h4>
      <vs-button vs-color-text="rgb(255, 255, 255)" vs-color="rgba(255, 255, 255, 0.1)" vs-type="flat" >Home</vs-button>
      <vs-button vs-color-text="rgb(255, 255, 255)" vs-color="rgba(255, 255, 255, 0.1)" vs-type="flat" >Documents</vs-button>
      <vs-button vs-color-text="rgb(255, 255, 255)" vs-color="rgba(255, 255, 255, 0.1)" vs-type="flat" vs-radius="50%" vs-icon="more_vert" style="margin-left: auto;"></vs-button>
    </vs-topbar>
  </div>
</template>

<script>
export default {
  data: ()=>({
    colorx:'#1db952'
  })
}
</script>

<style lang="css">
</style>
