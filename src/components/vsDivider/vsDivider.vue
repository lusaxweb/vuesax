<template lang="html">
  <div class="vs-component vs-divider">
    <span
      :class="borderClass"
      :style="afterStyle"
      class="vs-divider-border after"
    />
    <span
      v-if=" icon || $slots.default"
      :style="{
        'color': textColor,
        'background': backgroundColor
      }"
      :class="textAndBackgroundClass"
      class="vs-divider--text"
    >
      <template v-if="!icon">
        <slot/>
      </template>

      <vs-icon
        v-else
        :icon-pack="iconPack"
        :icon="icon"
        class="icon-divider notranslate vs-divider--icon"
      ></vs-icon>
    </span>
    <span
      :style="beforeStyle"
      :class="borderClass"
      class="vs-divider-border before"
    />
  </div>
</template>

<script>
import _color from '../../utils/color.js'

export default {
  name: "VsDivider",
  props:{
    color:{
      type:String,
      default:'rgba(0, 0, 0,.1)'
    },
    background:{
      type:String,
      default:'transparent'
    },
    icon:{
      default:null,
      type:String
    },
    borderStyle:{
      default:'solid',
      type:String
    },
    borderHeight:{
      default:'1px',
      type:String
    },
    position:{
      default:'center',
      type:String
    },
    iconPack:{
      default:'material-icons',
      type:String
    },
  },
  computed:{
    getWidthAfter(){
      let widthx = '100%'
      if(this.position == 'left'){
        widthx = '0%'
      } else if (this.position == 'left-center') {
        widthx = '25%'
      } else if (this.position == 'right-center') {
        widthx = '75%'
      } else if (this.position == 'right') {
        widthx = '100%'
      }
      return widthx
    },
    getWidthBefore(){
      let widthx = '100%'
      if(this.position == 'left'){
        widthx = '100%'
      } else if (this.position == 'left-center') {
        widthx = '75%'
      } else if (this.position == 'right-center') {
        widthx = '25%'
      } else if (this.position == 'right') {
        widthx = '0%'
      }
      return widthx
    },
    borderColor() {
      if (!_color.isColor(this.color)) {
        return _color.getColor(this.color)
      }
    },
    afterStyle() {
      const classes = {
        width: this.getWidthAfter,
        'border-top-width': this.borderHeight,
        'border-top-style': this.borderStyle
      }
      if (!_color.isColor(this.color)) {
        classes['border-top-color'] = this.borderColor
      }
      return classes
    },
    beforeStyle() {
      const classes = {
        width: this.getWidthBefore,
        'border-top-width': this.borderHeight,
        'border-top-style': this.borderStyle
      }
      if (!_color.isColor(this.color)) {
        classes['border-top-color'] = this.borderColor
      }
      return classes
    },
    borderClass() {
      const classes = {}
      let borderColor = _color.isColor(this.color) ? this.color : "default"
      classes[`vs-divider-border-${borderColor}`] = true
      return classes
    },
    textColor() {
      if (!_color.isColor(this.color)) {
        return _color.getColor(this.color !== 'rgba(0, 0, 0,.1)' ? this.color : null)
      }
    },
    backgroundColor() {
      if (!_color.isColor(this.background)) {
        return _color.getColor(this.background)
      }
    },
    textAndBackgroundClass() {
      const classes = {}

      let textColor = _color.isColor(this.color) ? this.color : "default"
      classes[`vs-divider-text-${textColor}`] = true

      let backgroundColor = _color.isColor(this.background) ? this.background : "default"
      classes[`vs-divider-background-${backgroundColor}`] = true

      return classes
    }
  }
}
</script>
