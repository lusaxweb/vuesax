<template lang="html">
  <div class="con-notifications">
    <vs-button @click="$vs.notify({title:'Default',text:'Lorem ipsum dolor sit amet, consectetur'})" vs-type="primary-border">Notificacion white</vs-button>
    <vs-button @click="$vs.notify({title:'Primary',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary'})" vs-type="primary-flat">Notificacion Primary</vs-button>
    <vs-button @click="$vs.notify({title:'Success',text:'Lorem ipsum dolor sit amet, consectetur',color:'success'})" vs-type="success-flat">Notificacion Success</vs-button>
    <vs-button @click="$vs.notify({title:'Danger',text:'Lorem ipsum dolor sit amet, consectetur',color:'danger'})" vs-type="danger-flat">Notificacion Danger</vs-button>
    <vs-button @click="$vs.notify({title:'Warning',text:'Lorem ipsum dolor sit amet, consectetur',color:'warning'})" vs-type="warning-flat">Notificacion Warning</vs-button>
    <vs-button @click="$vs.notify({title:'dark',text:'Lorem ipsum dolor sit amet, consectetur',color:'dark'})" vs-type="dark-flat">Notificacion Dark</vs-button>
    <vs-button @click="notiAzar()" vs-type="success-gradient">Notificacion Color Al Azar</vs-button>
  </div>
</template>

<script>
export default {
  methods:{
    notiAzar(){
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`

      this.$vs.notify({
        title:'Color',
        text:'Lorem ipsum dolor sit amet, consectetur',
        color:color
      })

    },
  }
}
</script>

<style lang="css">
  .con-notifications {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
