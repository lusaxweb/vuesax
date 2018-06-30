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
