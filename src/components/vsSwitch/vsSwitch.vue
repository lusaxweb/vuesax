<template lang="html">
  <button
    :class="[
      `vs-switch-${color}`,
      {
        'vs-switch-active':isChecked || $attrs.checked
      }
    ]"
    :style="style"
    v-bind="$attrs"
    class="vs-component vs-switch">
    <input
      ref="inputCheckbox"
      v-bind="$attrs"
      :disabled="$attrs.disabled"
      class="input-switch vs-switch--input"
      type="checkbox"
      :value="value"
      v-on="listeners">

    <span
      ref="on"
      :class="{'active-text':isChecked || $attrs.checked}"
      class="text-on text-switch vs-switch--text">
      <slot name="on"/>

      <vs-icon
        class="icons-switch vs-switch--icon"
        :icon-pack="iconPack"
        :icon="vsIconOn || vsIcon"
      ></vs-icon>
    </span>
    <span
      ref="off"
      :class="{'active-text':!isChecked && !$attrs.checked}"
      class="text-off text-switch vs-switch--text">
      <!-- gato con botas -->
      <slot name="off"/>
      <vs-icon
        class="icons-switch vs-switch--icon"
        :icon-pack="iconPack"
        :icon="vsIconOff || vsIcon"
      ></vs-icon>
    </span>
    <span class="vs-circle-switch vs-switch--circle"/>
  </button>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name:'VsSwitch',
  inheritAttrs:false,
  props:{
    value:{},
    color:{
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
    iconPack:{
      default:'material-icons',
      type:String
    },
    vsValue:{}
  },
  data:()=>({
    widthx:42,
    checkboxClicked: false,
  }),
  computed:{
    style(){
      return {
        background: this.value?_color.getColor(this.color,1):null,
        width: `${this.widthx}px`
      }
    },
    listeners(){
      return {
        ...this.$listeners,
        input: (evt) => {
          this.toggleValue(evt)
        },
      }
    },
    isChecked(){
      return this.isArrayx() ? this.isArrayIncludes() : this.value
    },
  },
  mounted(){
    this.$nextTick(()=>{
      let w = this.$refs.on.clientWidth>this.$refs.off.clientWidth?this.$refs.on.clientWidth:this.$refs.off.clientWidth
      this.widthx = w + 24
    })

  },
  methods:{
    toggleValue(evt){
      if(Array.isArray(this.value)){
        this.setArray(evt)
      }
      else {
        this.$emit('input', !this.value)
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
