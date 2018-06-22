<template lang="html">
  <div class="centerx">
    <vs-button @click="myFunction()" vs-color="primary" vs-type="flat">Run Example</vs-button>
  </div>
</template>

<script>
export default {
  methods:{
    myFunction(){
      this.$vs.notify({
        title:'Function click',
        text:'Click on me',
        color:'primary',
        fixed:true,
        click:()=>{
          // secondary function
          console.log("hola mundo paso");
          this.$vs.notify({
            title:'Secondary function',
            text:'Executed the function when clicking',
            color:'success',
            icon:'check_box'
          })
        },
      })
    },
  }
}
</script>

<style lang="css">
</style>
