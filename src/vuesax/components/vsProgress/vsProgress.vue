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
    </div>
    <div
      class="vs-progress-text"
      >
      <small v-if="vsInside">
        <slot>
        </slot>
      </small>
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
    height: 30px;
    border-radius: 18px;
    background-color: rgba(var(--primary),.1);
    z-index: 50;
    margin: 5px;
  }
  .vs-progress-foreground:hover {
    box-shadow: 0px 2px 15px 0px rgb(var(--dark));
    cursor: pointer;
  }
  .vs-progress-foreground {
    z-index: 100;
    height: 30px;
    border-radius: 18px;
  }
  .vs-progress-text {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    height: 30px;
    z-index: 200;
    margin: 5px;
  }
</style>
