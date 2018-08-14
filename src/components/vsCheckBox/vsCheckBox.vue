<template lang="html">
  <div
    :class="[`vs-checkbox-${vsColor}`]"
    class="vs-component con-vs-checkbox">
    <input
      v-bind="$attrs"
      :checked="isChecked || $attrs.checked"
      :value="value"
      type="checkbox"
      v-on="listeners">
    <span
      :style="style"
      class="checkbox_x">
      <span
        :style="style_check"
        class="_check"/>
      <i
        translate="no"
        class="material-icons notranslate">
        {{ vsIcon }}
      </i>
    </span>
    <span class="con-slot-label">
      <slot/>
    </span>
  </div>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name:'VsCheckbox',
  inheritAttrs: false,
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
    style_check(){
      return {
        background: this.isChecked?_color.getColor(this.vsColor,1):null,
      }
    },
    style(){
      return {
        border: `2px solid ${this.isChecked?_color.getColor(this.vsColor,1):'rgb(180, 180, 180)'}`,
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
    giveColor(color){
      return _color.rColor(color)
    },
    toggleValue(evt){
      if(this.isArrayx()){
        this.setArray()
      } else if (typeof(this.vsValue) == 'string' ) {
        this.setValueString()
      }
      else {
        this.$emit('input',!this.value)
        this.$emit('change',evt)
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
