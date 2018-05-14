<template lang="html">
  <div
    class="con-vs-card-header"
    :style="{
      'background-color':vsBackgroundColor?/[#()]/.test(vsBackgroundColor)?vsBackgroundColor:`rgba(var(--${vsBackgroundColor}),1)`:'rgb(255,255,255)',
      'color':colorx
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
      default:'primary'
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
    align-items flex-start
    flex-direction row
    font-weight 500
    position relative
    white-space nowrap
    .card-icon
    .card-titles
      height 70px
    .card-icon
      display flex
      justify-content center
      align-items center
      i
        font-size 2rem
        margin 16px 0 16px 16px
    .card-titles
      width 100%
      display flex
      justify-content center
      align-items flex-start
      flex-direction column
      padding 16px
      .card-title
        font-size 2rem
      .card-subtitle
        font-size 0.8rem
</style>
