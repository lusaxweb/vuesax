<template lang="html">
  <transition name="fadex">
    <div

      v-show="vsActive" 
      ref="conpopup" 
      class="con-popup">
      <div
        v-bind="$attrs"
        :style="{'background':vsBackgroundColor?/[#()]/.test(vsBackgroundColor)?vsBackgroundColor:`rgba(var(--${vsBackgroundColor}),1)`:'rgb(255,255,255)',
                 'color':colorx,
        }"
        :class="{'fullscreen':vsFullscreen}" 
        class="vs-popup">
        <header>
          <h2 v-if="vsTitle!=''">
            {{ vsTitle }}
          </h2>
          <div
            :style="{'background':vsCloseButtonColor?/[#()]/.test(vsCloseButtonColor)?vsCloseButtonColor:`rgba(var(--${vsCloseButtonColor}),1)`:'rgb(250, 250, 250)',
                     'color':colorButtonx
            }"
            class="vs-popup-cancel" 
            @click="$emit('vs-cancel')">
            <!-- <span class="flaticon-close"></span> -->
            <i class="material-icons">close</i>
          </div>
        </header>
        <div class="con-htmlx">
          <slot/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import color from '../../utils/color.js'
export default {
  name:'VsPopup',
  props:{
    vsTitle:{
      type:String,
      default:'',
    },
    vsActive:{
      type:Boolean,
      default:false,
    },
    vsFullscreen:{
      type:Boolean,
      default:false,
    },
    vsCloseButtonColor:{
      type:String,
    },
    vsBackgroundColor:{
      type:String,
    },
  },
  data(){
    return {

    }
  },
  computed:{
    colorx(){
      if(this.vsBackgroundColor){
        if(color.contrastColor(this.vsBackgroundColor)){
          return 'rgba(0, 0, 0,.7)'
        } else {
          return 'rgba(255, 255, 255,.8)'
        }
      } else {
        return 'rgba(0, 0, 0,.7)'
      }
    },
    colorButtonx(){
      if(this.vsCloseButtonColor){
        if(color.contrastColor(this.vsCloseButtonColor)){
          return 'rgba(0, 0, 0,.7)'
        } else {
          return 'rgba(255, 255, 255,.8)'
        }
      } else {
        return 'rgba(0, 0, 0,.7)'
      }
    }
  },
  mounted(){
    let popupx = this.$refs.conpopup
    document.body.insertBefore(popupx, document.body.firstChild);
  }
}
</script>

<style lang="css" scoped>
.fadex-enter-active, .fadex-leave-active {
  transition: opacity .3s;
}
.fadex-enter, .fadex-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fadex-enter-active .vs-popup {
  animation: bounce-in .3s;
}
.fadex-leave-active .vs-popup {
  /* animation: bounce-in .3s reverse; */
  transform: scale(1.050);
}
@keyframes bounce-in {
  0% {
    transform: scale(.8);
  }
  /* 55% {
    transform: scale(1.060);
  } */
  100% {
    transform: scale(1);
  }
}
.con-htmlx {
  padding: 20px;
  overflow: auto;
  max-height: calc(100vh - 100px);
}
.vs-popup {
  width: calc(100% - 30px);
  margin: 15px;
  max-width: 1000px;
  max-height: calc(100vh - 30px);
  background: rgb(255, 255, 255);
  /* padding: 20px; */
  border-radius: 10px;
  transform: scale(1);
  transition: all .3s ease;
}
.con-popup header {
  width: 100%;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.050);
}
.con-popup header h2{
  font-weight:lighter;
  width: 100%;
  padding: 10px;
  position: relative;
  padding-left: 20px;
  color: inherit;
}
.vs-popup-cancel {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  /* background: rgb(255, 255, 255); */
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0,.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all .3s ease;
}
.vs-popup-cancel:hover {
  transform: scale(1.1);
}
.vs-popup-cancel:hover span {
  color: rgb(255, 255, 255);
}
.con-popup {
  width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 20000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fullscreen {
  width: 100% !important;
  height: 100% !important;
  max-width: 100%;
}
</style>
