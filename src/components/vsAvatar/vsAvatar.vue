<template lang="html">
  <div
    v-bind="$attrs"
    :style="avatarStyle"
    :class="avatarClass"
    class="con-vs-avatar"
    v-on="$listeners">
    <div
      v-if="vsBadge && vsBadge > 0"
      :style="badgeStyle"
      :class="badgeClass"
      class="dot-count">
      {{ typeof vsBadge != 'boolean' ? vsBadge : null }}
    </div>
    <div
      v-if="vsSrc"
      class="con-img">
      <img
        :src="vsSrc"
        alt="">
    </div>
    <span
      v-else
      :title="vsText"
      :style="textStyle"
      :class="textClass"
      translate="no"
      class="vs-avatar-text notranslate"
    >
      {{ vsText ? returnText : vsIcon }}
    </span>

  </div>
</template>

<script>
import _color from '../../utils/color.js'

export default {
  name: 'VsAvatar',
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
    avatarClass() {
      const classes = {}
      classes[this.vsSize] = true
      if (_color.isColor(this.vsColor)) {
        classes[`con-vs-avatar-${this.vsColor}`] = true
      }
      return classes
    },
    avatarStyle() {
      const style = {
        width: /[px]/.test(this.vsSize) ? this.vsSize : null,
        height: /[px]/.test(this.vsSize) ? this.vsSize : null
      }
      if (!_color.isColor(this.vsColor)) {
        style.background = _color.getColor(this.vsColor)
      }
      return style
    },
    badgeClass() {
      const classes = {
        badgeNumber: (typeof vsBadge != 'boolean')
      }
      if (_color.isColor(this.vsBadgeColor)) {
        classes[`dot-count-${this.vsBadgeColor}`] = true
      }
      return classes
    },
    badgeStyle() {
      const style = {}
      if (!_color.isColor(this.vsBadgeColor)) {
        style.background = _color.getColor(this.vsBadgeColor)
      }
      return style
    },
    textClass() {
      const classes = {
        'material-icons': !this.vsText
      }
      if (_color.isColor(this.vsTextColor)) {
        classes[`vs-avatar-text-${this.vsTextColor}`] = true
      }
      return classes
    },
    textStyle() {
      const style = {
        transform: `translate(-50%,-50%) scale(${this.returnScale})`
      }
      if (!_color.isColor(this.vsTextColor)) {
        style.color = _color.getColor(this.vsTextColor)
      }
      return style
    },
    returnText(){
      if(this.vsText.length <= 5) {
        return this.vsText
      }
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
    },
    returnScale(){
      if(!this.vsText){
        return 1
      }
      let lengthx = this.returnText.length
      if(lengthx <= 5 && lengthx > 1) {
        return lengthx / (lengthx * 1.50)
      } else {
        return 1
      }
    }
  }
}
</script>
