<template lang="html">
  <div
    :class="{
      'vsIndeterminate':vsIndeterminate,
      }"
    class="vs-progress-background"
    :style="{
      'height':`${vsHeight}px`,
      'background':vsColor
      ?/[#()]/.test(vsColor)
      ?`rgba(${/[#]/.test(vsColor)?returnColorRGB(vsColor):vsColor.replace(/[rgb()]/g,'')},.1)`
      :`rgba(var(--${vsColor}),.1)`
      :'rgba(var(--primary),.1)',

    }">
    <div
      class="vs-progress-foreground"
      :style="{
        'background':vsColor
        ?/[#()]/.test(vsColor)
        ?vsColor
        :`rgba(var(--${vsColor}),1)`
        :'rgba(var(--primary),1)',
        'width':percent+'%'
      }">
    </div>
    <div
    v-if="vsIndeterminate"
    :style="{
      'background':vsColor?/[#()]/.test(vsColor)?`rgba(${vsColor.replace(/[rgb()]/g,'')},1)`:`rgba(var(--${vsColor}),1)`:'rgba(var(--primary),1)',
      'width':percent+'%'
    }"
    class="indeterminate-bar">

    </div>
    <!-- <div
      class="vs-progress-text"
      :style="{
        'color':colorx // TODO get best color contrast based on background color
      }"
      >
      <small>
        <slot>
        </slot>
      </small>
    </div> -->
  </div>
</template>

<script>
import color from '../../utils/color.js'
export default {
  name:'vs-progress',
  props:{
    vsHeight:{
      type:[Number,String],
      default:8
    },
    vsIndeterminate:{
      type:Boolean,
      default:false,
    },
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
  },
  methods:{
    returnColorRGB(vsColor){
      return color.hexToRgb(vsColor).replace(/[rgb()]/g,'')
    }
  }
}
</script>

<style lang="css" scoped>
.indeterminate-bar {
  position: absolute;
  width: 0%;
  height: 100%;
  background: rgb(219, 23, 67);
  left: -100%;
  top: 0px;
  border-radius: 2px;
  animation: indeterminate 1.200s ease infinite;
  border-radius: 20px;
}
@keyframes indeterminate {
    0% {
      width: 30%;
      left: -40%;
    }
    60% {
      left: 100%;
      width:100%;
    }
    100% {
      left: 100%;
      width:0%;
    }
}
  .vsIndeterminate{
    background: rgb(221, 121, 99);
  }
  .vs-progress-background {
    width: 100%;
    border-radius: 18px;
    background-color: rgba(var(--primary),.1);
    z-index: 50;
    position: relative;
    display: inline-block;
    overflow: hidden;
  }
  .vs-progress-foreground {
    z-index: 100;
    height: 100%;
    border-radius: 18px;
    transition: all .5s ease;
  }
  /* .vs-progress-text {
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
    height: 10px;
    z-index: 200;
  } */
</style>
