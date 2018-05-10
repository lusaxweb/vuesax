<template lang="html">
  <div
    class="vs-progress-background"
    :style="{
      'background':vsColor?/[#()]/.test(vsColor)?`rgba(${vsColor.replace(/[rgb()]/g,'')},.1)`:`rgba(var(--${vsColor}),.1)`:'rgba(var(--primary),.1)',
    }">
    <div
      class="vs-progress-foreground"
      :style="{
        'background':vsColor?/[#()]/.test(vsColor)?`rgba(${vsColor.replace(/[rgb()]/g,'')},1)`:`rgba(var(--${vsColor}),1)`:'rgba(var(--primary),1)',
        'color':'white',
        'width':vsPercent+'%'
      }">
      <small v-if="vsInside">{{vsPercent}}%</small>
    </div>
  </div>
</template>

<script>
import color from '../../utils/color.js'

export default {
  name:'vs-progress',
  props:{
    vsPercent:{
      type:Number,
      default:0
    },
    vsInside:{
      type:Boolean,
      default:true
    },
    vsColor:{
      type:String,
      default:'primary'
    }
  }
}
</script>

<style lang="css" scoped>
  .vs-progress-background {
    width: 100%;
    height: 22px;
    border-radius: 6px;
    background-color: rgba(var(--primary),.1);
    z-index: 50;
    margin: 5px;
  }
  .vs-progress-foreground {
    z-index: 100;
    height: 22px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
</style>
