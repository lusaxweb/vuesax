<template lang="html">
  <div class="centerx">
    <vs-button @click="popupActivo2=true" vs-color="primary" vs-type="filled">Open Popup</vs-button>
    <vs-popup  vs-title="Lorem ipsum dolor sit amet" :vs-active="popupActivo2" @vs-cancel="popupActivo2=false">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
      </p>
      <vs-button @click="popupActivo3=true" vs-color="primary" vs-type="filled">Open Inner Popup</vs-button>
      <vs-popup vs-title="Inner popup" :vs-active="popupActivo3" @vs-cancel="popupActivo3=false">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br><br>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br><br>
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </vs-popup>
    </vs-popup>
  </div>
</template>

<script>
export default {
  data(){
    return {
      popupActivo2:false,
      popupActivo3:false
    }
  }
}
</script>

<style lang="css">
</style>
