<template lang="html">
  <div class="centerx">
    <input v-model="colorx2" type="color" name="" value="">
    <vs-button :color="colorx2" @click="popupActivo6=true" color="dark" type="border">Open color button popup</vs-button>

    <vs-popup :close-button-color="colorx2" title="Color Button" :active="popupActivo6" @cancel="popupActivo6=false">
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
      popupActivo6:false,
      colorx2:'#dd7617',
    }
  }
}
</script>

<style lang="css">
</style>
