<template lang="html">
  <div class="centerx">
    <div class="modelx">
      {{val==null?'null':val}}
    </div>
     <vs-button @click="activePrompt = true" vs-color="primary" vs-type="border">Run prompt</vs-button>
     <div class="modelx">
       {{valMultipe.value1}}
       {{valMultipe.value2}}
     </div>
     <vs-button @click="activePrompt2 = true" vs-color="primary" vs-type="border">Run prompt inputs</vs-button>

     <vs-dialog
      @vs-cancel="val=''"
      vs-type="prompt"
      @vs-accept="acceptAlert"
      :vs-active.sync="activePrompt">
       Enter the security code
       <div slot="input">
         <vs-input vs-placeholder="Code" v-model="val"/>
       </div>
     </vs-dialog>

     <vs-dialog
      @vs-cancel="valMultipe.value1='',valMultipe.value2=''"
      vs-type="prompt"
      @vs-accept="acceptAlert"
      :vs-is-valid="validName"
      :vs-active.sync="activePrompt2">
       Enter your first and last name to continue
       <div slot="input">
         <vs-input vs-placeholder="Name" v-model="valMultipe.value1"/>
         <vs-input vs-placeholder="Last Name" v-model="valMultipe.value2"/>

         <vs-alert :vs-active="!validName" vs-color="danger" vs-icon="new_releases" >
           Fields can not be empty please enter the data
         </vs-alert>
       </div>
     </vs-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return {
      activePrompt:false,
      activePrompt2:false,
      val:'',
      valMultipe:{
        value1:'',
        value2:''
      },
    }
  },
  computed:{
    validName(){
      return (this.valMultipe.value1.length > 0 && this.valMultipe.value2.length > 0)
    }
  },
  methods:{
    acceptAlert(color){
      this.$vs.notify({
        color:'success',
        title:'Accept Selected',
        text:'Lorem ipsum dolor sit amet, consectetur'
      })
    },
  }
}
</script>

<style lang="css">
</style>
