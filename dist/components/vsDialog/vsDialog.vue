<template lang="html">
  <transition name="dialog-t">
  <div @click="close($event,true)"  ref="con" v-show="vsActive" class="vs-component con-vs-dialog">
    <div class="vs-dialog-dark"></div>
    <div ref="dialogx" class="vs-dialog">
      <!-- //header -->
      <header :style="{
          'color':giveColor(vsColor)
        }">
        <div class="con-title-after">
          <span :style="{
            'background':giveColor(vsColor)
            }" class="after"></span>
            <h3>{{vsTitle}}</h3>
        </div>
        <span v-if="vsType=='alert'" @click="close" class="vs-dialog-cancel material-icons">close</span>
      </header>

      <!-- // slots  -->
      <div class="vs-dialog-text">
        <slot></slot>
      </div>
      <div v-if="vsType=='prompt'" class="vs-dialog-text">
        <slot  name="input">

        </slot>
      </div>

      <!-- footer buttons -->
      <footer v-if="vsType=='prompt'||vsType=='confirm'">
        <vs-button :vs-color="vsColor" @click="accept" :vs-type="vsButtonAccept">Accept</vs-button>
        <vs-button @click="close" :vs-type="vsButtonCancel">Cancel</vs-button>
      </footer>

      <footer v-else >
        <vs-button :vs-color="vsColor" @click="accept" :vs-type="vsButtonAccept">Accept</vs-button>
      </footer>
    </div>
  </div>
  </transition>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name:'vs-dialog',
  props:{
    vsTitle:{
      default:'Dialog',
      type:String
    },
    vsColor:{
      default:'primary',
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
    vsType:{
      default:'alert',
      type:String
    },
    vsIsValid:{
      default:'none',
      type:[Boolean,String]
    },
    vsActive:{
      default:false,
      type:Boolean
    }
  },
  data:()=>({
    active:true
  }),
  mounted(){
    this.insertBody()
  },
  methods:{
    giveColor(color){
      return _color.rColor(color)
    },
    accept(){
      if(this.vsType != 'prompt'){
        this.$emit('update:vsActive', false)
        this.$emit('vs-accept')
      } else {
        if (this.vsIsValid || this.vsIsValid == 'none') {
          this.$emit('update:vsActive', false)
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
        if(event.target.className.indexOf('vs-dialog-dark')!=-1 && this.vsType == 'alert'){
          this.$emit('update:vsActive', false)
        } else if (this.vsType != 'alert') {
          this.rebound()
        }
      } else {
        if(event?event.target.className.indexOf('vs-dialog-cancel')!=-1:false){
          this.$emit('update:vsActive', false)
        } else {
          this.$emit('update:vsActive', false)
          this.$emit('vs-cancel')
        }

      }
    },
    insertBody(){
      let elx = this.$refs.con
      document.body.insertBefore(elx, document.body.firstChild)
    },
  }
}
</script>

<style lang="stylus">
//animations
.dialog-t-enter, .dialog-t-leave-to /* .dialog-t-leave-active below version 2.1.8 */ {
  opacity: 0 !important;
}

//box dialog
.dialog-t-enter .vs-dialog/* .fade-leave-active below version 2.1.8 */ {
  transform: scale(.9) !important;

}
.dialog-t-leave-to .vs-dialog/* .fade-leave-active below version 2.1.8 */ {
  transform: scale(.9) !important;
  // animation: rebound .3s;
}

@keyframes rebound {
    0%   {transform: scale(.9)}
    50%   {transform: scale(1.08)}
    100% {transform: scale(1)}
}


// cancel / text
.dialog-t-enter .vs-dialog-cancel, .dialog-t-leave-to .vs-dialog-cancel {
  border-radius: 50% !important;
  transform: translate(8px,-8px) scale(.5) !important;
}
.dialog-t-enter .vs-dialog-text, .dialog-t-leave-to .vs-dialog-text {
  opacity: 0;
  transform: translate(-15px) !important;
}

// line after
.dialog-t-enter .after, .dialog-t-leave-to .after {
  height: 0% !important
}
.dialog-t-enter header h3, .dialog-t-leave-to header h3 {
  transform: translate(-50px);
  opacity: 0;
}

// buttons
.dialog-t-enter footer button, .dialog-t-leave-to footer button {
  transform: translate(0,10px);
  opacity: 0;
}



.con-vs-dialog
  transition: all .2s;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 100px;
  top: 100px;
  left: 0px;
  top: 0px;
  z-index: 200000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  .vs-dialog-dark
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    z-index: 10;
    transition: all .250s ease;
    opacity: 1;
  .vs-dialog
    transition: all .2s;
    z-index: 100;
    width: calc(100% - 20px);
    margin: 10px;
    max-width: 400px;
    border-radius: 6px;
    box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.1)
    background: rgb(255, 255, 255);
    animation: rebound .3s;
    &.locked
      // background: rgb(3, 41, 203) !important;
      transform: scale(1.02);
    .vs-dialog-text
      padding: 10px;
      font-size: 14px;
      transition: all .23s ease .1s;
    header
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgb(248, 248, 248)
      border-radius: 5px 5px;
      position: relative;
      .con-title-after
        width: 100%;
        position: relative;
        overflow: hidden;
        border-radius: 5px 5px 0px 0px;
      span.after
        transition: all .23s ease .1s;
        position: absolute;
        left: 0px;
        top: 50%;
        transform: translate(0,-50%);
        width: 3px;
        height: 100%;
        background: rgb(10, 149, 42);
        display: block;
      h3
        transition: all .23s ease .1s;
        padding: 8px;
        padding-left: 12px;
        font-size: 20px;
      .vs-dialog-cancel
        transition: all .23s ease .1s;
        position: relative;
        padding: 8px;
        cursor: pointer;
        box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.1)
        border-radius: 5px;
        transform: translate(8px,-8px);
        background: rgb(255, 255, 255);
        font-size: 20px;
    footer
      display: flex;
      align-items: center;
      justify-content: flex-end;
      position: relative;
      button
        margin-left: 0px;
        
      &:before
        content: '';
        top: 0px;
        left: 0px;
        position: absolute;
        width: 90%;
        margin-left: 5%;
        height: 1px;
        background: rgba(0, 0, 0, 0.05);
</style>
