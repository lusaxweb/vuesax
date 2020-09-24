<template lang="html">
  <div class="con-notifications-position">
    <vs-button @click="$vs.notify({title:'Position Default',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary'})" color="primary" type="flat">Position Default</vs-button>
    <vs-button @click="$vs.notify({title:'Position top-right',text:'Lorem ipsum dolor sit amet, consectetur',color:'success',position:'top-right'})" color="success" type="flat">Position Top Right</vs-button>
    <vs-button @click="$vs.notify({title:'Position top-left',text:'Lorem ipsum dolor sit amet, consectetur',color:'danger',position:'top-left'})" color="danger" type="flat">Position Top Left</vs-button>
    <vs-button @click="$vs.notify({title:'Position bottom-left',text:'Lorem ipsum dolor sit amet, consectetur',color:'warning',position:'bottom-left'})" color="warning" type="flat">Position Bottom Left</vs-button>
    <vs-button @click="$vs.notify({title:'Position bottom-center',text:'Lorem ipsum dolor sit amet, consectetur',color:'dark',position:'bottom-center'})" color="dark" type="flat"> Position Bottom Center</vs-button>
    <vs-button @click="randomCenter()" color="success" type="gradient">Position Top Center Random Color</vs-button>
  </div>
</template>

<script>
export default {
  methods:{
   randomCenter(){
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`
      this.$vs.notify({title:'Position top-center',text:'Lorem ipsum dolor sit amet, consectetur',color:color,position:'top-center'})
    }
  }
}
</script>

<style lang="css">
.con-notifications-position {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
