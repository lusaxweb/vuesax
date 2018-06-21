<template lang="html">
  <button
    ref="btn"
    v-bind="$attrs"
    v-on="listeners"
    :class="[`vs-button-${isColor()?vsColor:null}`,`vs-button-${vsType}`,{
      'isActive':isActive,
      'includeIcon':vsIcon
      }]"
    :style="styles"
    class="vs-component vs-button"
    name="button">
      <span
      v-if="!is('line')&&!is('gradient')&&!is('relief')"
      ref="backgroundx"
      :style="stylesBackGround"
      class="vs-button-backgroundx"></span>

      <i :style="{
        'order':vsIconAfter?2:0,
        'margin-right':$slots.default&&!vsIconAfter?'5px':'0px',
        'margin-left':$slots.default&&vsIconAfter?'5px':'0px'
        }" class="material-icons vs-button-icon">
        {{vsIcon}}
      </i>

      <span v-if="$slots.default" class="vs-button-text">
        <slot>
        </slot>
      </span>

      <span
      class="vs-button-linex"
      :style="styleLine"
      ref="linex"></span>
  </button>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  inheritAttrs:false,
  name:'vs-button',
  props:{
    vsType:{
      default:'filled',
      type:String
    },
    vsColor:{
      default:'primary',
      type:String
    },
    vsColorText:{
      default:null,
      type:String
    },
    vsLineOrigin:{
      default:'center',
      type:String
    },
    vsLinePosition:{
      default:'bottom',
      type:String
    },
    vsGradientDirection:{
      default:'30deg',
      type:String
    },
    vsGradientColorSecondary:{
      default:'primary',
      type:String
    },
    vsIcon:{
      type:String,
      default:null
    },
    vsIconAfter:{
      default:false,
      type:Boolean
    }
  },
  data:()=>({
    isActive:false,
    hoverx:false,
    leftBackgorund:20,
    topBackgorund:20,
    radio:0,
    time:0.3,
    timeOpacity:0.3,
    opacity:1,
  }),
  computed:{
    listeners() {
      return {
        ...this.$listeners,
        click: (event) => this.clickButton(event),
        blur: (event) => this.blurButton(event),
        mouseover: (event) => this.mouseoverx(event),
        mouseout: (event) => this.mouseoutx(event)
      }
    },
    styles() {
      if(this.is('filled')){
        return {
          color: _color.getColor(this.vsColorText,1),
          background: _color.getColor(this.vsColor,1),
          boxShadow: this.hoverx?`0px 8px 25px -8px ${_color.getColor(this.vsColor,1)}`:null
        }
      } else if (this.is('border') || this.is('flat')){
        return {
          border: `${this.is('flat')?0:1}px solid ${_color.getColor(this.vsColor,1)}`,
          background: this.hoverx?_color.getColor(this.vsColor,.1):'transparent',
          color:_color.getColor(this.vsColorText,1) || _color.getColor(this.vsColor,1)
        }
      } else if (this.is('line')) {
        return {
          color:_color.getColor(this.vsColorText,1) || _color.getColor(this.vsColor,1),
          borderBottomWidth: this.vsLinePosition=='bottom'?`2px`:null,
          borderColor: `${_color.getColor(this.vsColor,.2)}`,
          borderTopWidth: this.vsLinePosition=='top'?`2px`:null,
        }
      } else if (this.is('gradient')) {
        let backgroundx = `linear-gradient(${this.vsGradientDirection}, ${_color.getColor(this.vsColor)} 0%, ${_color.getColor(this.vsGradientColorSecondary,1)} 100%)`
        return {
          background: backgroundx,
        }
      } else if (this.is('relief')) {
        let color = _color.getColor(this.vsColor,1)
        return {
          background: _color.getColor(this.vsColor,1),
          borderBottom: `3px solid ${_color.darken(color,-0.4)}`
        }
      }
    },
    stylesBackGround(){
      let styles = {
        background: this.is('flat') || this.is('border')?_color.getColor(this.vsColor,1,false):null,
        opacity:this.opacity,
        left: `${this.leftBackgorund}px`,
        top: `${this.topBackgorund}px`,
        width: `${this.radio}px`,
        height: `${this.radio}px`,
        transition: `width ${this.time}s ease, height ${this.time}s ease, opacity ${this.timeOpacity}s ease`
      }
      return styles

    },
    styleLine(){
      let lineOrigin = '50%'
      if(this.vsLineOrigin == 'left'){
        lineOrigin = '0%'
      } else if (this.vsLineOrigin == 'right') {
        lineOrigin = 'auto'
      }

      let styles = {
        top: this.vsLinePosition == 'top'?'-2px':'auto',
        bottom: this.vsLinePosition == 'bottom'?'-2px':'auto',
        background: _color.getColor(this.vsColor,1),
        left: lineOrigin,
        right: lineOrigin == 'auto'?'0px':null,
        transform: lineOrigin=='50%'?'translate(-50%)':null
      }
      return styles
    }
  },
  methods:{
    is(which){
      let type = this.vsType
      return type == which
    },
    mouseoverx(event){
      this.$emit('mouseover',event)
      this.hoverx = true
    },
    mouseoutx(event){
      this.$emit('mouseout',event)
      this.hoverx = false
    },
    blurButton(event){
      this.$emit('blur',event)
      if(this.vsType == 'border' || this.vsType == 'flat'){
        this.opacity = 0
        setTimeout( () => {
          this.radio = 0
        }, 150);
        this.isActive = false
      }
    },
    clickButton(event){
      this.$emit('click',event)
      if(this.isActive){
        return
      }
      this.isActive = true
      let btn = this.$refs.btn
      let xEvent = event.offsetX
      let yEvent = event.offsetY
      let radio = btn.clientWidth * 3
      this.time  = btn.clientWidth / (btn.clientWidth + (this.is('border') || this.is('flat')?70:20))
      if(this.is('filled')){
        this.timeOpacity = this.time
      }

      if(event.srcElement != btn) {
        xEvent += event.target.offsetLeft
        yEvent += event.target.offsetTop
      }
      this.leftBackgorund = xEvent
      this.topBackgorund = yEvent
      this.radio = radio
      if(this.is('filled')){
        this.opacity = 0
      } else {
        this.opacity = 1
      }

      if(this.is('filled')){
        setTimeout( () => {
          this.time = this.timeOpacity = this.radio = 0
          this.opacity = 1
          this.isActive = false
        }, this.time*1100);
      } else {
        setTimeout( () => {
          this.timeOpacity = .15
        }, this.time*1100);
      }

    },
    isColor(){
      return _color.isColor(this.vsColor)
    },
  }

}
</script>

<style lang="stylus">
@import '../../styles'

$vs-types := filled, border

.vs-button
  transition: all .2s ease;
  padding: 10px;
  border: 0px;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  color: rgb(255, 255, 255);
  box-sizing: border-box;
  background: transparent
  .vs-button-icon
    z-index: 100;
    display: block;
    position: relative;
    font-size: 18px;
    transition: all .2s ease;
  .vs-button-backgroundx
    border-radius: 50%;
    width: 10px;
    position: absolute;
    height: 10px;
    z-index: 0;
    transform: translate(-50%,-50%);
    box-shadow:inset 0px 0px 60px 0px rgba(255, 255, 255,.5);
  .vs-button-text
    position: relative;
    color: inherit
    display: inline-block;
    transition: all .2s ease;
&.vs-button-border
  padding: 9px;
&.vs-button-border,&.vs-button-flat
  &.isActive
    .vs-button-text,.vs-button-icon
      color: rgb(255, 255, 255) !important

&.vs-button-filled
  &:hover
    box-shadow: 0px 9px 28px -9px

&.vs-button-line
  padding: 9px 10px;
  border-radius: 0px
  overflow: visible;
  border-style: solid;
  .vs-button-linex
    transition: all .2s ease;
    width: 0%;
    position: absolute;
    left: 0px;
    bottom: -2px;
    height: 2px;
  &:hover
    .vs-button-text,.vs-button-icon
      transform: translate(0,2px);
    .vs-button-linex
      width: 100% !important

&.vs-button-gradient
  &:hover
    transform: translate(0,-2px);
    box-shadow: 0px 8px 25px -8px rgb(170, 170, 170)

&.vs-button-relief
  padding: 10px;
  &:active
    transform: translate(0,3px);
    border-bottom-width: 0px !important;

&.includeIcon
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
  padding-top: 9px;
  padding-bottom: 8px;

for colorx, i in $vs-colors
  .vs-button-{colorx}
    &.vs-button-filled //type filled
      background: $vs-colors[colorx]
      &:hover
        box-shadow: 0px 8px 25px -8px $vs-colors[colorx]
    &.vs-button-border,&.vs-button-flat //type border
     border: 1px solid $vs-colors[colorx]
     background: transparent !important
     color: $vs-colors[colorx]
     .vs-button-text
       &.isActive
         color: rgb(255, 255, 255) !important
     &:hover
       background: alpha($vs-colors[colorx],.08) !important
     .vs-button-backgroundx
       background: $vs-colors[colorx];
       box-shadow:inset 0px 0px 60px 0px $vs-colors[colorx];
    &.vs-button-flat //type flat
      border: none !important
    &.vs-button-line // type line
      color: $vs-colors[colorx]
      border-color: alpha($vs-colors[colorx],.2);
      .vs-button-linex
        background: $vs-colors[colorx]
    &.vs-button-gradient // type Gradient
      if colorx == 'danger' {
        background: linear-gradient(30deg, $vs-colors[colorx] 0%, darken(spin($vs-colors[colorx],-20deg),40%) 100%) !important
      }
      else if colorx == 'dark' {
        background: linear-gradient(30deg, $vs-colors[colorx] 0%, lighten($vs-colors[colorx],30%) 100%) !important
      }
      else {
        background: linear-gradient(30deg, $vs-colors[colorx] 0%, spin($vs-colors[colorx],30deg) 100%) !important
      }
      text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);

    &.vs-button-relief
      background: $vs-colors[colorx]
      if colorx == 'dark' {
        background: lighten($vs-colors[colorx], 20%)
      }
      border-bottom: 3px solid darken($vs-colors[colorx],30%)
</style>
