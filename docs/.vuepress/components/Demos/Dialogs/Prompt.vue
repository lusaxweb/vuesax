<template lang="html">
  <div class="centerx con-exemple-prompt">
    <!-- <vs-button @click="openPrompt" color="primary" type="border">Run prompt</vs-button> -->
    <div class="modelx">
      {{val==null?'null':val}}
    </div>
     <vs-button @click="activePrompt = true" color="primary" type="border">Run prompt</vs-button>
     <div class="modelx">
       {{valMultipe.value1}}
       {{valMultipe.value2}}
     </div>
     <vs-button @click="activePrompt2 = true" color="primary" type="border">Run prompt inputs</vs-button>

     <vs-prompt
      @vs-cancel="val=''"
      @vs-accept="acceptAlert"
      @vs-close="close"
      :vs-active.sync="activePrompt">
       <div class="con-exemple-prompt">
          Enter the security code
         <vs-input placeholder="Code" vs-placeholder="Code" v-model="val"/>
       </div>
     </vs-prompt>

     <vs-prompt
      @vs-cancel="valMultipe.value1='',valMultipe.value2=''"
      @vs-accept="acceptAlert"
      @vs-close="close"
      :vs-is-valid="validName"
      :vs-active.sync="activePrompt2">
       <div class="con-exemple-prompt">
       Enter your first and last name to <b>continue</b>.
         <vs-input placeholder="Name" v-model="valMultipe.value1"/>
         <vs-input placeholder="Last Name" v-model="valMultipe.value2"/>

         <vs-alert :vs-active="!validName" color="danger" vs-icon="new_releases" >
           Fields can not be empty please enter the data
         </vs-alert>
       </div>
     </vs-prompt>
  </div>
</template>

<script>
import Vue from 'vue'

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
    close(){
      this.$vs.notify({
        color:'danger',
        title:'Closed',
        text:'You close a dialog!'
      })
    },
  }
}
</script>

<style lang="stylus">
.con-exemple-prompt
  padding 10px;
  padding-bottom 0px;
  .vs-input
    width 100%
    margin-top 10px;
</style>
