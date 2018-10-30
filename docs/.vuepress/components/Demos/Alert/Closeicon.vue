<template lang="html">
  <div class="centerx">
    <vs-button @click="active1=!active1" type="filled">{{!active1?'Open Alert':'Close Alert'}}</vs-button>
    <vs-alert :active.sync="active1" closable closeIcon='cancel'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
    </vs-alert>
  </div>
</template>

<script>
export default {
  data(){
    return {
      active1:true,
    }
  }
}
</script>

<style lang="css">
</style>
