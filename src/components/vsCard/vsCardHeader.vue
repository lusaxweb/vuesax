<template lang="html">
  <div
    class="con-vs-card-header"
    :style="{
      'background-color':vsFill?vsBackgroundColor?/[#()]/.test(vsBackgroundColor)?vsBackgroundColor:`rgba(var(--${vsBackgroundColor}),1)`:'rgb(244,244,244)':'rgb(244,244,244)',
      'color':vsFill?colorx:vsBackgroundColor?/[#()]/.test(vsBackgroundColor)?vsBackgroundColor:`rgba(var(--${vsBackgroundColor}),1)`:colorx,
      'border-color':!vsFill?vsBackgroundColor?/[#()]/.test(vsBackgroundColor)?vsBackgroundColor:`rgba(var(--${vsBackgroundColor}),1)`:'rgb(244,244,244)':'transparent',
      'border-left':!vsFill?'3px solid':'none',
      'border-top-left-radius':!vsFill?'5px':'inherit'
    }">
      <div v-if="vsIcon" class="card-icon">
        <i class="material-icons">{{vsIcon}}</i>
      </div>
      <div class="card-titles">
        <div class="card-title" v-if="vsTitle">{{vsTitle}}</div>
        <div class="card-subtitle" v-if="vsSubtitle">{{vsSubtitle}}</div>
      </div>
  </div>
</template>

<script>
import color from '../../utils/color.js'
export default {
  name:'vs-card-header',
  props:{
    vsTitle:{
      type:String,
      default:null,
    },
    vsSubtitle:{
      type:String,
      default:null,
    },
    vsIcon:{
      type:String,
      default:null,
    },
    vsBackgroundColor:{
      type:String,
      default:null,
    },
    vsFill:{
      type:Boolean,
      default:false,
    }
  },
  computed:{
    colorx(){
      if(this.vsBackgroundColor){
        if(color.contrastColor(this.vsBackgroundColor)){
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
  .con-vs-card-header
    display flex
    justify-content center
    align-items center
    flex-direction row
    font-weight 500
    position relative
    white-space nowrap
    .card-icon
      display flex
      justify-content center
      align-items center
      i
        font-size 1.5rem
        margin 10px
        margin-right 0px
    .card-titles
      width 100%
      display flex
      justify-content center
      align-items flex-start
      flex-direction column
      padding 8px
      margin-left 10px
      .card-title
        font-size 1.5rem
      .card-subtitle
        font-size 0.8rem
</style>
