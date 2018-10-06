<template lang="html">
  <div class="centerx">
    <vs-button @click="openAlert('primary')" color="primary" vs-type="flat">Alert Primary</vs-button>
    <vs-button @click="openAlert('success')" color="success" vs-type="flat">Alert success</vs-button>
    <vs-button @click="openAlert('danger')" color="danger" vs-type="flat">Alert Danger</vs-button>
    <vs-button @click="openAlert('warning')" color="warning" vs-type="flat">Alert Warning</vs-button>
    <vs-button @click="openAlert('dark')" color="dark" vs-type="flat">Alert Dark</vs-button>
    <vs-button @click="openAlert(null)" color="primary" vs-type="gradient">Alert Color RGB | HEX</vs-button>
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
      this.colorAlert = color || this.getColorRandom()
      this.$vs.dialog({
        color:this.colorAlert,
        title: `Dialog - ${this.colorAlert}`,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        accept:this.acceptAlert
      })
    },
    acceptAlert(){
      this.$vs.notify({
        color:this.colorAlert,
        title:'Accept Selected',
        text:'Lorem ipsum dolor sit amet, consectetur'
      })
    },
    getColorRandom(){
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      return `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`
    },
  }
}
</script>

<style lang="css">
</style>
