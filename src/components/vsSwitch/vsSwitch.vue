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
    class="vs-component vs-switch"
    type="button"
    name="button"
    @click="toggleCheckbox($event)">
    <input
      ref="inputCheckbox"
      :checked="value"
      :disabled="$attrs.disabled"
      class="input-switch"
      type="checkbox"
      name=""
      value=""
      v-on="listeners">

    <span
      ref="on"
      :class="{'active-text':isChecked || $attrs.checked}"
      class="text-on text-switch">
      <slot name="on"/>

      <i
        translate="no"
        class="material-icons icons-switch notranslate">
        {{ vsIconOn || vsIcon }}
      </i>
    </span>
    <span
      ref="off"
      :class="{'active-text':!isChecked && !$attrs.checked}"
      class="text-off text-switch">
      <!-- gato con botas -->
      <slot name="off"/>
      <i
        translate="no"
        class="material-icons icons-switch notranslate">
        {{ vsIconOff || vsIcon }}
      </i>
    </span>
    <span class="vs-circle-switch"/>
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
        change: (evt) => {
          this.toggleValue(evt)
        }
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
    toggleCheckbox() {
      if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
        this.$refs.inputCheckbox.checked = !this.$refs.inputCheckbox.checked;
        this.$emit('input', this.$refs.inputCheckbox.checked);
      }
    },
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
