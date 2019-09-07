<template lang="html">
  <div class="centerx">
    <vs-button @click="active=!active" type="filled">{{!active?'Open Alert':'Close Alert'}}</vs-button>
    <vs-alert :active.sync="active" closable closeIcon='close'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
    </vs-alert>
  </div>
</template>

<script>
export default {
  data(){
    return {
      active:true,
    }
  }
}
</script>

<style lang="css">
</style>
