<template lang="html">
  <div class="vs-component vs-divider">
    <span
      :style="{
        'width':getWidthAfter,
        'border-top':`${vsBorderHeight} ${vsStyle} ${giveColor()}`
      }"
      class="after"/>
    <span
      v-if="vsIcon?true:$slots.default"
      :style="{
        'color':giveColor(1,'text')
      }" 
      class="vs-divider-text">
      <template v-if="!vsIcon">
        <slot/>
      </template>

      <i 
        v-else 
        class="material-icons icon-divider">
        {{ vsIcon }}
      </i>
    </span>
    <span
      :style="{
        'width':getWidthBefore,
        'border-top':`${vsBorderHeight} ${vsStyle} ${giveColor()}`
      }"
      class="before"/>
  </div>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name: "VsDivider",
  props:{
    vsColor:{
      type:String,
      default:'rgba(0, 0, 0,.1)'
    },
    vsIcon:{
      default:null,
      type:String
    },
    vsStyle:{
      default:'solid',
      type:String
    },
    vsBorderHeight:{
      default:'1px',
      type:String
    },
    vsPosition:{
      default:'center',
      type:String
    }
  },
  computed:{
    getWidthAfter(){
      let widthx = '100%'
      if(this.vsPosition == 'left'){
        widthx = '0%'
      } else if (this.vsPosition == 'left-center') {
        widthx = '25%'
      } else if (this.vsPosition == 'right-center') {
        widthx = '75%'
      } else if (this.vsPosition == 'right') {
        widthx = '100%'
      }
      return widthx
    },
    getWidthBefore(){
      let widthx = '100%'
      if(this.vsPosition == 'left'){
        widthx = '100%'
      } else if (this.vsPosition == 'left-center') {
        widthx = '75%'
      } else if (this.vsPosition == 'right-center') {
        widthx = '25%'
      } else if (this.vsPosition == 'right') {
        widthx = '0%'
      }
      return widthx
    }
  },
  methods:{
    giveColor(opacity=1,type){
      if(this.vsColor == 'rgba(0, 0, 0,.1)' && type=='text'){
        let color = this.vsColor.replace('.1','.8');
        return _color.rColor(color,opacity)
      } else {
        return _color.rColor(this.vsColor,opacity)

      }

    },
  }
}
</script>

<style lang="stylus">
.vs-divider
  width: 100%;
  position: relative;
  display: block;
  margin: 15px 0px;
  clear: both;
  display: flex;
  align-items: center;
  justify-content: center;
  .after,.before
    position: relative;
    display: block;
    width: 100%;
  .vs-divider-text
    cursor: default;
    user-select: none;
    position: relative;
    white-space: nowrap;
    background: rgb(255, 255, 255);
    padding-left: 12px;
    padding-right: 12px;
    font-size: 0.9375em;
  i.icon-divider
    font-size: 1.25em;

</style>
