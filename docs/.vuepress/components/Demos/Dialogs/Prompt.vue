<template lang="html">
  <div class="centerx">
    <div class="modelx">
      {{val==null?'null':val}}
    </div>
     <vs-button @click="prompt" vs-type="primary-border">Run prompt</vs-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      val:null,
    }
  },
  methods:{
    prompt(){
      this.$vs.prompt({
        title:'Dialog Confirm Default',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        color:'primary',
        input:{
          placeholder:'Name',
          value:this.val,
          maxLength:20,
          type:'text'
        },
        confirm:(value)=>{
          this.val = value
          this.$vs.notify({
            title:'Muy Bien',
            text:'Gracias '+value,
            color:'success',
          })
        },
        cancel:(value)=>{
          this.$vs.notify({
            title:'Cancel',
            text:'Gracias '+value,
            color:'danger',
          })
        }
      })
    },
  }
}
</script>

<style lang="css">
</style>
