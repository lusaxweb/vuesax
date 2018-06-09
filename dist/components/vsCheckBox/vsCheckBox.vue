<template lang="html">
  <div class="vs-component con-vs-checkbox">
    <input
      v-bind="$attrs"
      v-on="listeners"
      type="checkbox"
      :checked="isChecked || $attrs.checked"
      value="">
    <span
      :style="{
        'border': `2px solid ${$attrs.checked?$attrs.checked?giveColor(vsColor):'rgb(180, 180, 180)':isChecked?giveColor(vsColor):'rgb(180, 180, 180)'}`
        }"
      class="checkbox_x">
      <span :style="{
        'background':giveColor(vsColor)
        }" class="_check"></span>
      <i
        :style="{
          'color':giveColor(vsColor)
        }"
        class="material-icons">
        {{vsIcon}}
      </i>
    </span>
    <span class="con-slot-label">
      <slot>
      </slot>
    </span>
  </div>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  inheritAttrs: false,
  name:'vs-checkbox',
  props:{
    vsColor:{
      default:'primary',
      type:String,
    },
    value:{},
    vsIcon:{
      default:'check',
      type:String
    },
    vsValue:{
      type:[Boolean,Array,String,Number,Object],
      default:false
    }
  },
  computed:{
    listeners(){
      return {
        ...this.$listeners,
        change: (event) => {
          this.toggleValue()
        }
      }
    },
    isChecked(){
      return this.isArrayx() ? this.isArrayIncludes() : this.value
    },
  },
  methods:{
    giveColor(color){
      return _color.rColor(color)
    },
    toggleValue(){
      if(this.isArrayx()){
        this.setArray()
      } else if (typeof(this.vsValue) == 'string' ) {
        this.setValueString()
      }
      else {
        this.$emit('input',!this.value)
        this.$emit('change',!this.value)
      }
    },
    setArray(){
      const value = this.value.slice(0) // Copy Array.
      if(this.isArrayIncludes()){
        value.splice(value.indexOf(this.vsValue),1) // delete value
        this.$emit('input', value)
        this.$emit('change', value)
      } else {
        value.push(this.vsValue) // add value new
        this.$emit('input', value)
        this.$emit('change', value)
      }
    },
    setValueString(){
      if(this.value == this.vsValue){
        this.$emit('input', null)
        this.$emit('change', null)
      } else {
        this.$emit('input', this.vsValue)
        this.$emit('change', this.vsValue)
      }
    },
    isArrayIncludes(){
      let modelx = this.value
      let value = this.vsValue
      return modelx.includes(value)
    },
    isArrayx(){
      return Array.isArray(this.value)
    }
  }
}
</script>

<style lang="stylus">
.con-vs-checkbox
  position: relative;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  margin-right: 5px;
  input[type="checkbox"]
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 200;
    cursor: pointer;
    background: rgb(85, 215, 117);
    &:active:checked
      & + span.checkbox_x
        span._check
          transform: translate(3px) !important;
        i
          transform: translate(6px) !important;
    // &:active:not(:checked)
    //   & + span.checkbox_x
    //     span._check
    //       transform: translate(70%) !important;
    &:checked
      & + span.checkbox_x
        transform: rotate(0deg) !important;
        span._check
          transform: translate(0);
        i
          opacity: 1;
          transform: translate(0) !important;
          color: rgb(255, 255, 255) !important;
  span.checkbox_x
    transition: all .2s ease;
    cursor: pointer;
    position: relative;
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(-90deg);
    overflow: hidden;
    box-sizing: border-box;
    margin-right: 5px;
    span._check {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0px;
      transform: translate(100%);
      transform-origin: right;
      transition: all .20s ease
      z-index: 10;
    }
    i
      backface-visibility: visible;
      transition: all .2s ease-out;
      z-index: 100;
      font-size: 18px;
      opacity: 0;
      transform: translate(30px);
      transform-origin: center;
</style>
