<template lang="html">
  <div
    class="vs-topbar"
    :style="{
      'background':vsColor?/[#()]/.test(vsColor)?vsColor:`rgba(var(--${vsColor}),1)`:'rgb(244,244,244)',
      'color':colorx
    }">
    <slot>
    </slot>
  </div>
</template>

<script>
import color from '../../utils/color.js'
export default {
  name:'vs-topbar',
  props:{
    vsColor:{
      type:String,
      default:null,
    }
  },
  computed: {
    colorx(){
      if(this.vsColor){
        if(color.contrastColor(this.vsColor)){
          return 'rgba(0, 0, 0,.7)'
        } else {
          return 'rgba(255, 255, 255,.8)'
        }
      } else {
        return 'rgba(0, 0, 0,.7)'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .vs-topbar
    width 100%
    height auto
    display flex
    justify-content space-around
    align-items center
    border-bottom-left-radius 8px
    border-bottom-right-radius 8px
    box-shadow 0 20px 40px -8px rgba(0,0,0,0.1)
</style>
