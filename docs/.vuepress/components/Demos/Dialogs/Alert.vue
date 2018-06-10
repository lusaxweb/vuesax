<template lang="html">
  <div class="centerx">
    <vs-button @click="openAlert('primary')" vs-type="primary-flat">Alert Primary</vs-button>
    <vs-button @click="openAlert('success')" vs-type="success-flat">Alert success</vs-button>
    <vs-button @click="openAlert('danger')" vs-type="danger-flat">Alert Danger</vs-button>
    <vs-button @click="openAlert('warning')" vs-type="warning-flat">Alert Warning</vs-button>
    <vs-button @click="openAlert('dark')" vs-type="dark-flat">Alert Dark</vs-button>
    <vs-button @click="openAlert(null)" vs-type="primary-gradient">Alert Color RGB | HEX</vs-button>

    <!-- Component Dialog - alert -->
    <vs-dialog
      :vs-color="colorAlert"
      :vs-title="titleAlert"
      @vs-accept="acceptAlert"
      :vs-active.sync="activeAlert">
      <!-- Text in Alert -->
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </vs-dialog>

  </div>
</template>

<script>
export default {
  data:()=>({
    colorAlert:'primary',
    titleAlert:'Alert',
    activeAlert:false,
    valueInput:'',
  }),
  methods:{
    openAlert(color){
      this.activeAlert = true
      this.titleAlert = 'Alert ' + color || this.getColorRandom()
      this.colorAlert = color || this.getColorRandom()
    },
    getColorRandom(){
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      return `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`
    },
    acceptAlert(color){
      this.$vs.notify({
        color:this.colorAlert,
        title:'Accept Selected',
        text:'Lorem ipsum dolor sit amet, consectetur'
      })
    },
  }
}
</script>

<style lang="css">
</style>
