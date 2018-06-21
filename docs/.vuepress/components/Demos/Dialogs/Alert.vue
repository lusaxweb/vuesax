<template lang="html">
  <div class="centerx">
    <vs-button @click="openAlert('primary')" vs-color="primary" vs-type="flat">Alert Primary</vs-button>
    <vs-button @click="openAlert('success')" vs-color="success" vs-type="flat">Alert success</vs-button>
    <vs-button @click="openAlert('danger')" vs-color="danger" vs-type="flat">Alert Danger</vs-button>
    <vs-button @click="openAlert('warning')" vs-color="warning" vs-type="flat">Alert Warning</vs-button>
    <vs-button @click="openAlert('dark')" vs-color="dark" vs-type="flat">Alert Dark</vs-button>
    <vs-button @click="openAlert(null)" vs-color="primary" vs-type="gradient">Alert Color RGB | HEX</vs-button>

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
