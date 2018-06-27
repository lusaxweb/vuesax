<template lang="html">
  <label :class="[`vs-radio-${vsColor}`]" class="vs-component con-vs-radio">
    <input
      v-on="listeners"
      v-bind="$attrs"
      :checked="isChecked"
      type="radio" name="">
      <span
        class="vs-radiox">
        <span
          :style="styles"
          class="vs-radiox-borde"></span>
        <span
        :style="styleCircle"
          class="vs-radiox-circle">
        </span>
      </span>
      <span class="vs-radiox-labelx">
        <slot>
        </slot>
      </span>
  </label>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name:'vs-radio',
  inheritAttrs:false,
  props:{
    value:{},
    vsValue:{},
    vsColor:{
      default:'primary',
      type:String
    }
  },
  computed:{
    listeners(){
      return {
        ...this.$listeners,
        input: (event) => this.$emit('input', this.vsValue)
      }
    },
    attrs(){
      let attrsx = JSON.parse(JSON.stringify(this.$attrs))
      return {
        attrsx
      }
    },
    isChecked(){
      return this.vsValue == this.value
    },
    styles(){
      return {
        'border': `2px solid ${this.isChecked?_color.getColor(this.vsColor,1):'rgb(200, 200, 200)'}`  
      }
    },
    styleCircle(){
      return {
        'background': _color.getColor(this.vsColor,1),
        'box-shadow': `0px 3px 12px 0px ${_color.getColor(this.vsColor,.4)}`
      }
    }
  },
  methods:{
    giveColor(color,opacity){
      return _color.rColor(color,opacity)
    },
  }
}
</script>

<style lang="stylus">

@import '../../styles'

.con-vs-radio
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover
    .vs-radiox-borde
      border: 2px solid rgb(160, 160, 160) !important;
  .vs-radiox-labelx
    margin-left: 5px;
  input[type="radio"]
    position: absolute;
    left: 0px;
    opacity: 0;
    width: 20px;
    width: 20px;
    &:checked
      + .vs-radiox
        cursor: default;
        .vs-radiox-circle
          transform: scale(1) !important;
          opacity: 1 !important;
        .vs-radiox-borde
          opacity: 0;
          transform: scale(.3) !important;
    &:active
      + .vs-radiox
        .vs-radiox-circle
          // transform: scale(1.1) !important;
        .vs-radiox-borde
          transform: scale(1.1) !important;
    &:disabled
      + .vs-radiox
        opacity: .4 !important;
        .vs-radiox-circle
          pointer-events: none;
        .vs-radiox-borde
          border: 2px solid rgb(180, 180, 180) !important
          background: rgb(210, 210, 210)
          pointer-events: none;
  .vs-radiox
    width: 18px;
    height: 18px;
    position: relative;
    display: block;
    border-radius: 50%;
    cursor: pointer;
    .vs-radiox-borde
      border-radius: 50%;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0px;
      transition: all .25s ease;
      background: transparent;
      top: 0px;
    .vs-radiox-circle
      transition: all .25s ease;
      transform: scale(.1);
      opacity: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      position: absolute;
      left: 0px;
      top: 0px;
      


for colorx, i in $vs-colors
  .vs-radio-{colorx}
    .vs-radiox-circle
      background: $vs-colors[colorx]
      box-shadow: 0px 3px 12px 0px alpha($vs-colors[colorx],.4)
</style>
