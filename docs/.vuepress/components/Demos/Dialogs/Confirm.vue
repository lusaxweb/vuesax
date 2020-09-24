<template lang="html">
  <div class="centerx">
    <vs-button @click="openConfirm()" color="danger" type="gradient">Alert Primary</vs-button>
  </div>
</template>

<script>
export default {
  data:()=>({
    activeConfirm:false
  }),
    methods:{
      openConfirm(){
      this.$vs.dialog({
        type:'confirm',
        color: 'danger',
        title: `Confirm`,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        accept:this.acceptAlert,
        parameters: ['hello']
      })
      },
      acceptAlert: function(parameters){
        this.$vs.notify({
          color:'danger',
          title:'Deleted image ' + parameters[0],
          text:'The selected image was successfully deleted'
        })
      },
    }
}
</script>

<style lang="css">
</style>
