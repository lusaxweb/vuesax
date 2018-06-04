<template lang="html">
  <div class="centerx">
    <vs-button @click="confirm" vs-type="danger-gradient">Run Confirm</vs-button>
  </div>
</template>

<script>
export default {
  methods:{
    confirm(){
      this.$vs.confirm({
        title:'Dialog Confirm Default',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        color:'danger',
        confirm:()=>{
          // console.log("hola esto esta en confirm");
          this.$vs.notify({
            title:'Eliminado',
            text:'Lorem ipsum dolor sit amet',
            color:'danger',
          })
        },
        cancel:()=>{
          console.log("cancel click");
          this.$vs.notify({
            title:'Cancel',
            text:'Lorem ipsum dolor sit amet',
          })
        }
      })
    },
  }
}
</script>

<style lang="css">
</style>
