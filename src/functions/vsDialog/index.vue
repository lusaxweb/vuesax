<template lang="html">
  <transition name="dialog-t">
  <div
    :class="[`vs-dialog-${isPrompt?vsColor:color}`]"
    @click="close($event,true)"  
    ref="con" 
    v-show="active || vsActive"
    class="vs-component con-vs-dialog">
    <div class="vs-dialog-dark"></div>
    <div ref="dialogx" class="vs-dialog">

      <!-- //header -->
      <header :style="styleHeader">
        <div class="con-title-after">
          <span :style="styleAfter" class="after"></span>
          <h3>{{title || vsTitle}}</h3>
        </div>
        <span v-if="type=='alert'" @click="close" class="vs-dialog-cancel material-icons">close</span>
      </header>

      <!-- // slots  -->
      <div class="vs-dialog-text">
        <slot></slot>
        {{text}}
      </div>

      <!-- footer buttons -->
      <footer v-if="vsButtonsHidden?false:isPrompt||type=='confirm'">
        <vs-button :disabled="vsIsValid=='none'?false:!vsIsValid" :vs-color="isPrompt?vsColor:color" @click="acceptDialog" :vs-type="isPrompt?vsButtonAccept:buttonAccept">Accept</vs-button>
        <vs-button :vs-color="'rgb(0,0,0,.5)'" @click="cancelClose" :vs-type="isPrompt?vsButtonCancel:buttonCancel">Cancel</vs-button>
      </footer>

      <footer v-if="type=='alert'&&!isPrompt" >
        <vs-button :vs-color="isPrompt?vsColor:color" @click="acceptDialog" :vs-type="buttonAccept">Accept</vs-button>
      </footer>
    </div>
  </div>
  </transition>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name:'vs-prompt',
  props:{
    vsColor:{
      default:'primary',
      type:String
    },
    vsActive:{
      default:false,
      type: Boolean
    },
    vsTitle:{
      default:'Dialog',
      type:String
    },
    vsButtonAccept:{
      default:'filled',
      type:String,
    },
    vsButtonCancel:{
      default:'flat',
      type:String,
    },
    vsIsValid:{
      default:'none',
      type:[Boolean,String]
    },
    vsButtonsHidden:{
      default:false,
      type:Boolean
    }
  },
  data:()=>({
    isPrompt:true,
    active:false,
    type:'alert',
    color:'primary',
    text:null,
    title:null,
    buttonAccept:'filled',
    buttonCancel:'flat'
  }),
  mounted(){
    this.insertBody()
  },
  computed:{
    styleHeader(){
      return {
        color: _color.getColor(this.color,1),
      }
    },
    styleAfter(){
      return {
        background: _color.getColor(this.color,1)   
      }
    }
  },
  methods:{
    giveColor(color){
      return _color.rColor(color)
    },
    acceptDialog(){
      if(!this.isPrompt){
        this.accept?this.accept():null
        this.active = false
        this.$emit('update:vsActive',false)
        this.$emit('vs-accept')
      } else {
        if (this.vsIsValid || this.vsIsValid == 'none') {
          this.accept?this.accept():null
          this.active = false
          this.$emit('update:vsActive',false)
          this.$emit('vs-accept')
        } else {
          this.rebound()
        }
      }
      
    },
    // accept(){

    // },
    rebound(){
      this.$refs.dialogx.classList.add('locked')
      setTimeout( () => {
        this.$refs.dialogx.classList.remove('locked')
      }, 200);
    },
    close(event,con){
      console.log(event)
      if(con){
        if(event.target.className.indexOf('vs-dialog-dark')!=-1 && this.type == 'alert'){
          this.active = false
          this.$emit('update:vsActive',false)
        } else if (event.target.className.indexOf('vs-dialog-dark')!=-1) {
          this.rebound()
        }
      } else {
        if(event?event.target.className.indexOf('vs-dialog-cancel')!=-1:false ){
          this.active = false
          this.$emit('update:vsActive',false)
        }

      }
    },
    cancelClose(){
      this.active = false
      this.$emit('update:vsActive',false)
      this.$emit('vs-cancel')
      this.cancel?this.cancel():null
    },
    insertBody(){
      let elx = this.$refs.con
      document.body.insertBefore(elx, document.body.firstChild)
    },
  }
}
</script>
