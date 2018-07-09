<template lang="html">
  <div
  v-bind="$attrs"
  v-on="$listeners"
  :class="[vsSize]"
  :style="{
    'width':/[px]/.test(vsSize)?`${vsSize}`:null,
    'height':/[px]/.test(vsSize)?`${vsSize}`:null,
    'background':vsColor?/[#()]/.test(vsColor)?vsColor:`rgba(var(--${vsColor}),1)`:'rgb(var(--primary))'
  }"
  class="con-vs-avatar">
    <div
    v-if="vsBadge && vsBadge > 0"
    :class="{
      'badgeNumber':typeof vsBadge != 'boolean',
      }"
    :style="{
      'background':vsBadgeColor?/[#()]/.test(vsBadgeColor)?vsBadgeColor:`rgba(var(--${vsBadgeColor}),1)`:'rgb(var(--primary))'
    }"
     class="dot-count">
     {{typeof vsBadge != 'boolean'?vsBadge:null}}
    </div>
    <div v-if="vsSrc" class="con-img">
      <img :src="vsSrc" alt="">
    </div>
    <span
    v-else
    :title="vsText"
    :class="{
      'material-icons':!vsText
      }"
    :style="{
      'transform':`translate(-50%,-50%) scale(${returnScale})`,
      'color':vsTextColor?/[#()]/.test(vsTextColor)?vsTextColor:`rgba(var(--${vsTextColor}),1)`:'rgb(var(--primary))'
    }"
    class="vs-avatar-text">
    {{vsText?returnText:vsIcon}}
    </span>

  </div>
</template>

<script>
export default {
  name: 'vs-avatar',
  props:{
    vsBadge:{
      type:[Boolean,String,Number],
      default:false,
    },
    vsBadgeColor:{
      default:'danger',
      type:String,
    },
    vsSize:{
      type:String,
      default:null,
    },
    vsSrc:{
      type:String,
      default:null
    },
    vsIcon:{
      type:String,
      default:'person'
    },
    vsTextColor:{
      type:String,
      default:'rgb(255, 255, 255)',
    },
    vsText:{
      type:[String,Number],
      default: null,
    },
    vsColor:{
      type:String,
      default:'rgb(195, 195, 195)',
    }
  },
  computed:{
    returnText(){
      if(this.vsText.length <= 5) {
        return this.vsText
      } else {
        let exp = /\s/g
        var letras = ''
        if(exp.test(this.vsText)){
          this.vsText.split(exp).forEach((word)=>{
            letras += word[0].toUpperCase()
          })
        } else {
          letras = this.vsText[0].toUpperCase()
        }
        return letras.length>5?letras[0]:letras
      }
    },
    returnScale(){
      if(this.vsText){
        let lengthx = this.returnText.length
        if(lengthx <= 5 && lengthx > 1) {
          return lengthx / (lengthx * 1.50)
        } else {
          return 1
        }
      } else {
        return 1
      }

    }
  }
}
</script>

<style lang="stylus">
  .con-vs-avatar
    width: 32px;
    height: 32px;
    border-radius: 50%;
    position: relative;
    cursor: pointer;

    display: inline-block;
    margin: 5px;
    &.large
      width: 50px;
      height: 50px;
    &.small
      width: 24px;
      height: 24px;
      .vs-avatar-text
        font-size: 0.9375em;
    .dot-count
      position: absolute;
      top: 1px;
      right: 1px;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      z-index: 100;
      &.badgeNumber
        width: auto;
        height: auto;
        top: -3px;
        right: 0px;
        border-radius: 4px;
        padding-left: 3px;
        padding-right: 3px
        font-size: 0.625em;
        color: rgb(255, 255, 255);
    .vs-avatar-text
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    .con-img
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 50%;
</style>
