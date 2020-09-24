<template>
  <div
    ref="convstooltip"
    class="con-vs-tooltip"
    @mouseleave="mouseleavex"
    @mouseenter="mouseenterx">
    <transition name="tooltip-fade">
      <div
        v-show="activeTooltip"
        ref="vstooltip"
        :class="[`vs-tooltip-${positionx || position}`,`vs-tooltip-${color}`, {'after-none': noneAfter}]"
        :style="style"
        class="vs-tooltip">
        <h4 v-if="title">{{ title }}</h4>
        {{ text }}
      </div>
    </transition>
    <slot></slot>
  </div>
</template>
<script>
import utils from '../../utils'
import _color from '../../utils/color.js'
export default {
  name:'VsTooltip',
  props:{
    title:{
      default:null,
      type:[String,Number]
    },
    text:{
      default:null,
      type:[String,Number]
    },
    color:{
      default:null,
      type:String
    },
    position:{
      default:'top',
      type:String
    },
    delay:{
      default:'0s',
      type:[Number,String]
    },
    active: {
      default: true,
      type: [Boolean]
    }
  },
  data:()=>({
    cords:{},
    activeTooltip:false,
    widthx: 'auto',
    positionx: null,
    noneAfter: false
  }),
  computed:{
    style(){
      return {
        left:this.cords.left,
        top:this.cords.top,
        transitionDelay: this.activeTooltip?this.delay:'0s',
        background:_color.getColor(this.color,1),
        width: this.widthx
      }
    }
  },
  mounted(){
    // utils.insertBody(this.$refs.vstooltip)
  },
  updated() {
    let nodes = this.$refs.convstooltip.childNodes.length
    if (nodes === 1) {
      this.activeTooltip = false
    }
  },
  methods:{
    mouseenterx(){
      if(this.active) {
        this.activeTooltip = true
        this.$nextTick(()=>{
          utils.insertBody(this.$refs.vstooltip)
          this.changePosition(this.$refs.convstooltip,this.$refs.vstooltip)
        })
      }
    },
    mouseleavex(){
      this.activeTooltip = false
      if(this.$refs.vstooltip) {
        utils.removeBody(this.$refs.vstooltip)
      }

    },
    changePosition(elxEvent, tooltip){
      this.noneAfter = false
      this.positionx = null
      let elx = elxEvent.closest('.con-vs-tooltip')
      let scrollTopx = window.pageYOffset || document.documentElement.scrollTop;
      let topx = elx.getBoundingClientRect().top + scrollTopx - tooltip.clientHeight - 4
      let leftx = elx.getBoundingClientRect().left - tooltip.clientWidth / 2 + elx.clientWidth / 2
      let widthx = elx.clientWidth

      if(this.position === 'bottom'){
        topx = elx.getBoundingClientRect().top + scrollTopx + elx.clientHeight + 4
      } else if (this.position === 'left') {
        leftx = elx.getBoundingClientRect().left - tooltip.clientWidth - 4
        topx = elx.getBoundingClientRect().top + scrollTopx + (elx.clientHeight / 2) - (tooltip.clientHeight / 2)
        if (Math.sign(leftx)===-1) {
          leftx = elx.getBoundingClientRect().left
          topx = elx.getBoundingClientRect().top + scrollTopx + elx.clientHeight + 4
          this.positionx = 'bottom'
          this.noneAfter = true
        }
      } else if (this.position === 'right') {
        leftx = elx.getBoundingClientRect().left + elx.clientWidth + 4
        topx = elx.getBoundingClientRect().top + scrollTopx + (elx.clientHeight / 2) - (tooltip.clientHeight / 2)
        if( window.innerWidth - (leftx + tooltip.clientWidth) <= 20) {
          leftx = elx.getBoundingClientRect().left - tooltip.clientWidth / 2 - 10
          topx = elx.getBoundingClientRect().top + scrollTopx + elx.clientHeight + 4
          this.positionx = 'bottom'
          this.noneAfter = true
        }
      }



      this.cords = {
        left: `${leftx}px`,
        top: `${topx}px`,
        width: `${widthx}px`
      }

    },
  }
}
</script>
