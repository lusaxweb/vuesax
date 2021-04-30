<template lang="html">
  <transition name="dialog-t">
    <div
      v-if="isPrompt ? active : fActive"
      ref="con"
      :class="[`vs-dialog-${color}`]"
      class="vs-component con-vs-dialog">
      <div
        class="vs-dialog-dark"
        @click="handleClose($event,true)"/>
      <div
        ref="dialogx"
        class="vs-dialog">

        <!-- //header -->
        <header
          :style="styleHeader"
          class="vs-dialog-header">
          <div class="con-title-after">
            <span
              :style="styleAfter"
              class="after"/>
            <h3 class="dialog-title">{{ title }} </h3>
          </div>
          <vs-icon
            v-if="type=='alert'"
            :icon="closeIcon"
            :icon-pack="iconPack"
            class="vs-dialog-cancel vs-dialog-cancel--icon notranslate"
            @click.native="handleClose"
          />
        </header>     <!-- // slots  -->
        <div class="vs-dialog-text">
          <slot/>
          {{ text }}
        </div>
        <!-- footer buttons -->
        <footer v-if="buttonsHidden?false:isPrompt||type=='confirm'">
          <vs-button
            :disabled="isValid=='none'?false:!isValid"
            :color="color"
            :type="buttonAccept"
            class="vs-dialog-accept-button"
            @click.native="acceptDialog">{{ acceptText }}</vs-button>
          <vs-button
            :text-color="'rgba(0,0,0,.5)'"
            :type="buttonCancel"
            class="vs-dialog-cancel-button"
            @click.native="cancelClose">{{ cancelText }}</vs-button>
        </footer>

        <footer v-if="type=='alert'&&!isPrompt" >
          <vs-button
            :color="color"
            :type="buttonAccept"
            class="vs-dialog-accept-button"
            @click.native="acceptDialog">{{ acceptText }}</vs-button>
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
    color:{
      default:'primary',
      type:String
    },
    active:{
      default:false,
      type: Boolean
    },
    buttonAccept:{
      default:'filled',
      type:String,
    },
    buttonCancel:{
      default:'flat',
      type:String,
    },
    isValid:{
      default:'none',
      type:[Boolean,String]
    },
    buttonsHidden:{
      default:false,
      type:Boolean
    },
    acceptText:{
      default:'Accept',
      type:String
    },
    cancelText:{
      default:'Cancel',
      type:String
    },
    iconPack:{
      default:'material-icons',
      type:String
    },
    closeIcon:{
      default:'close',
      type:String
    },
    text:{
      default: null,
      type: String
    },
    title:{
      default: 'Dialog',
      type: String
    },
    type:{
      default: 'alert',
      type: String
    },
    parent:{
      default: null,
    }
  },
  data:()=>({
    isPrompt:true,
    fActive: false,
    parameters: null,
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
    active() {
      this.$nextTick(() => {
        if (this.active) {
          this.insertBody()
        }
      })
    },
    fActive() {
      this.$nextTick(() => {
        if (this.fActive) {
          this.insertBody()
        }
      })
    }
  },
  mounted () {
    if (this.active && this.isPrompt) {
      this.insertBody()
    }
    this.fActive = this.active
  },
  beforeDestroy() {
    // close the left open prompt
    let elx = this.$refs.con
    let parentx = this.parent ? this.parent : document.body
    if (elx) {
      parentx.removeChild(elx)
    }
  },
  methods:{
    giveColor(color){
      return _color.rColor(color)
    },
    acceptDialog () {
      if(!this.isPrompt){
        this.accept?this.accept(this.parameters):null
        this.fActive = false
        this.$emit('update:active',false)
        this.$emit('accept', this.parameters)
      } else {
        if (this.isValid || this.isValid == 'none') {
          this.accept?this.accept():null
          this.fActive = false
          this.$emit('update:active',false)
          this.$emit('accept', this.parameters)
        }
      }
    },
    rebound(){
      this.$refs.dialogx.classList.add('locked')
      setTimeout( () => {
        this.$refs.dialogx.classList.remove('locked')
      }, 200);
    },
    handleClose(event,con){
      if(con){
        if(event.target.className.indexOf('vs-dialog-dark')!=-1 && this.type == 'alert'){
          this.fActive = false
          this.$emit('update:active',false)
        } else if (event.target.className.indexOf('vs-dialog-dark')!=-1) {
          this.rebound()
        }
      } else {
        if(event?event.target.className.indexOf('vs-dialog-cancel')!=-1:event?event.target.className.indexOf('vs-dialog-cancel--icon')!=-1:false ){
          this.fActive = false
          this.$emit('update:active',false)
        }
      }
      this.$emit('close')
    },
    cancelClose(){
      this.fActive = false
      this.$emit('update:active',false)
      this.$emit('cancel')
      // this.$emit('cancel')
      this.cancel?this.cancel(this.parameters):null

    },
    insertBody(){
      let elx = this.$refs.con
      let parentx = this.parent ? this.parent : document.body
      parentx.insertBefore(elx, parentx.firstChild)
    },
  },
}
</script>
