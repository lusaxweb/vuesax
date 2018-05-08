<template lang="html">
  <div class="centerx">
    <vs-button @click="alert('primary')" vs-type="primary-flat">Alert Primary</vs-button>
    <vs-button @click="alert('success')" vs-type="success-flat">Alert success</vs-button>
    <vs-button @click="alert('danger')" vs-type="danger-flat">Alert Danger</vs-button>
    <vs-button @click="alert('warning')" vs-type="warning-flat">Alert Warning</vs-button>
    <vs-button @click="alert('dark')" vs-type="dark-flat">Alert dark</vs-button>
    <vs-button @click="alertColor()" vs-type="primary-gradient">Alert Color RGB || HEX</vs-button>
  </div>
</template>

<script>
export default {
  methods:{
    alert(color){
      this.$vs.alert({
        title:'Dialog alert Default',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        textConfirm:'Aceptar',
        color:color,
        confirm:()=>{

        },
      })
    },
    alertColor(){
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`

      this.$vs.alert({
        title:'Dialog alert Default',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        textConfirm:'Aceptar',
        color:color,
        confirm:function(){
          // console.log("hola esto esta en confirm");
        },
      })
    },
  }
}
</script>

<style lang="css">
</style>
