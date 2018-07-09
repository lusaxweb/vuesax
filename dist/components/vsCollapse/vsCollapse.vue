<template lang="html">
  <div
    @mouseover="hoverx=true"
    @mouseout="hoverx=false"
    :style="styles"
    :class="[`vs-collapse-${isColor()?vsColor:null}`]"
    class="vs-component vs-collapse vs-collapse-"
    v-bind="$attrs"
    v-on="$listeners">
    Component vsCollapse
  </div>
</template>

<script>

import _color from '../../utils/color.js'
export default {
  inheritAttrs:false,
  name: "vs-collapse",
  props:{
    vsColor:{
      default:'primary',
      type:String
    }
  },
  data:()=>({
    hoverx:false
  }),
  mounted(){
    // console.log("mounted>>>>>>",_color.getColor('rgb(189, 21, 74)'));
  },
  computed:{
    styles() {
      if(!this.isColor()){
        return {
          color: this.vsColor,
          background: this.hoverx?_color.getColor(this.vsColor,.1):null
        }
      }
    }
  },
  methods:{
    isColor(){
      return _color.isColor(this.vsColor)
    },
  }
}
</script>
