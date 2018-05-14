<template lang="html">
  <div class="centerx">
    <vs-button @click="$vs.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary',icon:'mail'})" vs-type="primary-flat">Icon Mail</vs-button>

    <vs-button @click="$vs.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'success',icon:'check_box'})" vs-type="success-flat">Icon check_box</vs-button>

    <vs-button @click="$vs.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'danger',icon:'favorite'})" vs-type="danger-flat">Icon favorite</vs-button>

    <vs-button @click="$vs.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'warning',icon:'error'})" vs-type="warning-flat">Icon error</vs-button>

    <vs-button @click="$vs.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:'dark',icon:'chat'})" vs-type="dark-flat">Icon chat</vs-button>

    <vs-button @click="notiAzarIcon()" vs-type="success-gradient">Icon Color Al Azar</vs-button>
  </div>
</template>

<script>
export default {
  methods:{
    notiAzarIcon(){
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`

      // this.vsNoti('Lorem ipsum dolor sit amet, consectetur',color,null,'verified_user')
      this.$vs.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:color,icon:'verified_user'})
    }
  }
}
</script>

<style lang="css">
.centerx {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
