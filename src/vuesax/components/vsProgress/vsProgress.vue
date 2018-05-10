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
        'width':percent+'%'
      }">
    </div>
    <div
      class="vs-progress-text"
      :style="{
        'color':colorx // TODO get best color contrast based on background color
      }"
      >
      <small>
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
    vsColor:{
      type:String,
      default:'primary'
    }
  },
  data () {
    return {
      percent: 0
    }
  },
  created () {
    this.percent = 0
  },
  mounted () {
    setTimeout(() => {
      this.percent = this.vsPercent // to force animation
    }, 1000)
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
    },
  }
}
</script>

<style lang="css" scoped>
  .vs-progress-background {
    width: 100%;
    height: 20px;
    border-radius: 18px;
    background-color: rgba(var(--primary),.1);
    z-index: 50;
    position: relative;
    display: inline-block;
  }
  .vs-progress-foreground {
    z-index: 100;
    height: 20px;
    border-radius: 18px;
    transition: all .5s ease;
  }
  .vs-progress-text {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    height: 20px;
    z-index: 200;
  }
</style>
