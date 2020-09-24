<template lang="html">
  <div class="centerx">
    <input v-model="colorx" type="color" name="" value="">
    <vs-button :color="colorx" @click="popupActivo5=true" type="filled">Open background popup</vs-button>

    <vs-popup
      style="color:rgb(255,255,255)"
      background-color="rgba(255,255,255,.6)"
      :background-color-popup="colorx" title="background" :active.sync="popupActivo5">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <br>
        <br>
        e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </vs-popup>
  </div>
</template>

<script>
export default {
  data(){
    return {
      colorx:"#4a5153",
      popupActivo5:false
    }
  }
}
</script>

<style lang="css">
</style>
