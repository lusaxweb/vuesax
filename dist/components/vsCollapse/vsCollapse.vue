<template lang="html">
  <div
    :style="styles"
    :class="[`vs-collapse-${isColor()?vsColor:null}`]"
    v-bind="$attrs"
    class="vs-component vs-collapse vs-collapse-"
    @mouseover="hoverx=true"
    @mouseout="hoverx=false"
    v-on="$listeners">
    Component vsCollapse
  </div>
</template>

<script>

import _color from '../../utils/color.js'
export default {
  name: "VsCollapse",
  inheritAttrs:false,
  props:{
    vsColor:{
      default:'primary',
      type:String
    }
  },
  data:()=>({
    hoverx:false
  }),
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
  mounted(){
    // console.log("mounted>>>>>>",_color.getColor('rgb(189, 21, 74)'));
  },
  methods:{
    isColor(){
      return _color.isColor(this.vsColor)
    },
  }
}
</script>
