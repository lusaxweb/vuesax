<template lang="html">
  <transition name="dialog-t">
    <div
      v-if="active || vsActive"
      ref="con"
      :class="[`vs-dialog-${isPrompt?vsColor:color}`]"
      class="vs-component con-vs-dialog">
      <div
        class="vs-dialog-dark"
        @click="close($event,true)"/>
      <div
        ref="dialogx"
        class="vs-dialog">

        <!-- //header -->
        <header :style="styleHeader">
          <div class="con-title-after">
            <span
              :style="styleAfter"
              class="after"/>
            <h3>{{ title || vsTitle }}</h3>
          </div>
          <span
            v-if="type=='alert'"
            translate="no"
            class="vs-dialog-cancel material-icons notranslate"
            @click="close">close</span>
        </header>

        <!-- // slots  -->
        <div class="vs-dialog-text">
          <slot/>
          {{ text }}
        </div>
        <!-- footer buttons -->
        <footer v-if="vsButtonsHidden?false:isPrompt||type=='confirm'">
          <vs-button
            :disabled="vsIsValid=='none'?false:!vsIsValid"
            :color="isPrompt?vsColor:color"
            :vs-type="isPrompt?vsButtonAccept:buttonAccept"
            @click="acceptDialog">{{ isPrompt?vsAcceptText:acceptText }}</vs-button>
          <vs-button
            :color="'rgb(0,0,0,.5)'"
            :vs-type="isPrompt?vsButtonCancel:buttonCancel"
            @click="cancelClose">{{ isPrompt?vsCancelText:cancelText }}</vs-button>
        </footer>

        <footer v-if="type=='alert'&&!isPrompt" >
          <vs-button
            :color="isPrompt?vsColor:color"
            :vs-type="buttonAccept"
            @click="acceptDialog">{{ isPrompt?vsAcceptText:acceptText }}</vs-button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name:'VsPrompt',
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
    },
    vsAcceptText:{
      default:'Accept',
      type:String
    },
    vsCancelText:{
      default:'Cancel',
      type:String
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
    buttonCancel:'flat',
    acceptText:'Accept',
    cancelText:'Cancel'
  }),
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
  watch:{
    vsActive() {
      this.$nextTick(() => {
        if (this.vsActive) {
          this.insertBody()
        }
      })
    }
  },
  mounted () {
    if (this.active && this.isPrompt) {
      this.insertBody()
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
    rebound(){
      this.$refs.dialogx.classList.add('locked')
      setTimeout( () => {
        this.$refs.dialogx.classList.remove('locked')
      }, 200);
    },
    close(event,con){
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
      this.$emit('vs-close')
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
