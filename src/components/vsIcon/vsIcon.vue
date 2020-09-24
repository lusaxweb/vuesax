<template>
  <i
    :style="iconStyle"
    :class="[iconPack, iconPack !='material-icons' ? icon : '',iconClass,getBg,getBgSize,{'round':round}]"
    v-bind="$attrs"
    class="vs-icon notranslate icon-scale"
    v-on="$listeners"
  >
    <slot>{{ iconPack == 'material-icons' ? icon : '' }}</slot>
  </i>
</template>
<script>
import _color from '../../utils/color.js'

export default {
  name:'VsIcon',
  props:{
    icon: {
      default: null,
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    color: {
      default: null,
      type: String
    },
    bg: {
      default: null,
      type: String
    },
    size: {
      default: null,
      type: String
    },
    round: {
      default: false,
      type: Boolean
    },

  },
  computed:{
    iconClass() {
      const classes = {}
      classes[this.size] = true
      if (_color.isColor(this.color)) {
        classes[`vs-icon-${this.color}`] = true
      }
      return classes
    },
    iconStyle() {
      const style = {
        width: /(px)/.test(this.size) ? this.size : /(em)/.test(this.size) ? this.size : null,
        height: /(px)/.test(this.size) ? this.size : /(em)/.test(this.size) ? this.size : null,
        'font-size': /(px)/.test(this.size) ? this.size : /(em)/.test(this.size) ? this.size : null,
        color: this.getColor,
        background: this.getBgColor
      }
      return style
    },
    getBg() {
      const classes = {}

      if (_color.isColor(this.bg)) {
        classes[`con-vs-icon-bg-${this.bg}`] = true
      }

      return classes
    },
    getBgSize() {
      const classes = {}
      if(['small','medium','large'].includes(this.size))  {
        classes[`bg-${this.size}`] = true;
        classes['vs-icon-bg'] = true;
      }

      return classes
    },
    getColor() {
      return _color.isColor(this.color) ? this.color : this.color;
    },
    getBgColor() {
      return _color.isColor(this.bg) ? this.bg : this.bg;
    },
  },
}
</script>
