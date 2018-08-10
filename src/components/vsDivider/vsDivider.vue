<template lang="html">
  <div class="vs-component vs-divider">
    <span
      class="vs-divider-border after"
      :class="borderClass"
      :style="afterStyle"
    />
    <span
      v-if=" vsIcon || $slots.default"
      :style="{
        'color': textColor
      }"
      class="vs-divider-text"
    >
      <template v-if="!vsIcon">
        <slot/>
      </template>

      <i
        v-else
        translate="no"
        class="material-icons icon-divider notranslate">
        {{ vsIcon }}
      </i>
    </span>
    <span
      :style="beforeStyle"
      class="vs-divider-border before"
      :class="borderClass"
    />
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
    },
    borderColor() {
      if (!_color.isColor(this.vsColor)) {
        return _color.getColor(this.vsColor)
      }
    },
    afterStyle() {
      const classes = {
        width: this.getWidthAfter,
        'border-top-width': this.vsBorderHeight,
        'border-top-style': this.vsStyle
      }
      if (!_color.isColor(this.vsColor)) {
        classes['border-top-color'] = this.borderColor
      }
      return classes
    },
    beforeStyle() {
      const classes = {
        width: this.getWidthBefore,
        'border-top-width': this.vsBorderHeight,
        'border-top-style': this.vsStyle
      }
      if (!_color.isColor(this.vsColor)) {
        classes['border-top-color'] = this.borderColor
      }
      return classes
    },
    borderClass() {
      const classes = {}
      if (_color.isColor(this.vsColor)) {
        classes[`vs-divider-border-${this.vsColor}`] = true
      }
      return classes
    },
    textColor() {
      if (!_color.isColor(this.vsColor)) {
        return _color.getColor(this.vsColor)
      }
    },
    textClass() {
      const classes = {}
      if (_color.isColor(this.vsColor)) {
        classes[`vs-divider-text-${this.vsColor}`] = true
      }
      return classes
    }
  }
}
</script>
