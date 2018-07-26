<template>
  <div ref="convstooltip" @mouseover="mouseoverx" class="con-vs-tooltip">
    <div
      ref="vstooltip"
      :style="style"
      class="vs-tooltip">
      hola mundo {{this.cords.left}}
    </div>
    <slot></slot>
  </div>
</template>
<script>
import utils from '../../utils'
export default {
  name:'VsTooltip',
  data:()=>({
    cords:{}
  }),
  computed:{
    style(){
      return {
        left:this.cords.left,
        top:this.cords.top
      }
    }
  },
  mounted(){
    utils.insertBody(this.$refs.vstooltip)
  },
  methods:{
    mouseoverx(){
      let cords = utils.changePosition(this.$refs.convstooltip,this.$refs.vstooltip,true)
      this.cords = cords
      console.log(cords)
    }
  }
}
</script>
