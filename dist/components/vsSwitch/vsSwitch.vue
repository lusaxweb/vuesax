<template lang="html">
  <button
    :class="[
      `vs-switch-${vsColor}`,
      {
        'vs-switch-active':isChecked || $attrs.checked
      }
      ]"
    class="vs-component vs-switch"
    :style="style"
    v-bind="$attrs"
    type="button" name="button">
    <input
    class="input-switch"
    :checked="value"
    :disabled="$attrs.disabled"
    v-on="listeners"
    type="checkbox" name="" value="">

    <span ref="on" :class="{'active-text':isChecked || $attrs.checked}" class="text-on text-switch">
      <slot name="on">
      </slot>
      <!-- perro -->
      <i class="material-icons icons-switch">
        {{vsIconOn || vsIcon}}
      </i>
    </span>
    <span ref="off" :class="{'active-text':!isChecked && !$attrs.checked}" class="text-off text-switch">
      <!-- gato con botas -->
      <slot name="off">
      </slot>
      <i class="material-icons icons-switch">
        {{vsIconOff || vsIcon}}
      </i>
    </span>
    <span class="vs-circle-switch"></span>
  </button>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name:'vs-switch',
  inheritAttrs:false,
  props:{
    value:{},
    vsColor:{
      default:'primary',
      type:String
    },
    vsIcon:{
      default:null,
      type:String
    },
    vsIconOn:{
      default:null,
      type:String
    },
    vsIconOff:{
      default:null,
      type:String
    },
    vsValue:{}
  },
  data:()=>({
    widthx:42
  }),
  mounted(){
    this.$nextTick(()=>{
      let w = this.$refs.on.clientWidth>this.$refs.off.clientWidth?this.$refs.on.clientWidth:this.$refs.off.clientWidth
      this.widthx = w + 24
    })

  },
  computed:{
    style(){
      return {
        background: this.value?_color.getColor(this.vsColor,1):null,
        width: `${this.widthx}px`
      }
    },
    listeners(){
      return {
        ...this.$listeners,
        change: (evt) => {
          this.toggleValue(evt)
        }
      }
    },
    isChecked(){
      return this.isArrayx() ? this.isArrayIncludes() : this.value
    },
  },
  methods:{
    toggleValue(evt){
      if(this.isArrayx()){
        this.setArray(evt)
      }
      else {
        this.$emit('input',evt.target.checked)
        this.$emit('change',evt)
      }
    },
    setArray(evt){
      const value = this.value.slice(0) // Copy Array.
      if(this.isArrayIncludes()){
        value.splice(value.indexOf(this.vsValue),1) // delete value
        this.$emit('input', value)
        this.$emit('change', evt)
      } else {
        value.push(this.vsValue) // add value new
        this.$emit('input', value)
        this.$emit('change', evt)
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
  },
}
</script>

<style lang="stylus">

@import '../../styles'

.vs-switch
  border-radius: 12px;
  border: 0px;
  min-width: 42px;
  height: 22px;
  position: relative;
  cursor: pointer;
  transition: all .2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  .input-switch
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 200;
    opacity: 0;
    cursor: pointer;
  .text-switch
    position: absolute;
    display: block;
    font-size: 10px;
    opacity: 0;
    transition: all .2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    overflow: hidden;
    .icons-switch
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      max-width: 16px;
      padding: 0px 2px;
    &.text-on
      padding-left: 6px;
      left: 0px;
      color: rgb(255, 255, 255);
      transform: translate(10px);
    &.text-off
      right: 0px;
      padding-right: 5px;
      color: rgb(160, 160, 160)
      transform: translate(-10px);
    &.active-text
      opacity: 1
      transform: translate(0px);
  &:disabled
    opacity: .5;
  .vs-circle-switch
    display: block;
    width: 18px;
    height: 18px;
    position: absolute;
    background: rgb(255, 255, 255);
    left: 2px;
    top: 2px;
    border-radius: 50%;
    transition: all .25s ease;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1)
  &:active:not(.vs-circle-switch)
    .vs-circle-switch
      width: 24px;
      border-radius: 15px
  &.vs-switch-active
    &:active
      .vs-circle-switch
        width: 24px;
        margin-left: calc(100% - 29px);
    .vs-circle-switch
      margin-left: calc(100% - 22px);
for colorx, i in $vs-colors
  .vs-switch-{colorx}
    background: rgb(226, 226, 226)
    &.vs-switch-active
      background: $vs-colors[colorx]
</style>
