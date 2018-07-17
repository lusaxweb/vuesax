<template lang="html">
  <div
    :class="{
      'with-icon':vsIcon,
    }"
    :style="{
      'color':vsColor?/[#()]/.test(vsColor)?vsColor:`rgba(var(--${vsColor}),1)`:'rgb(244,244,244)',
      'border-color':vsColor?/[#()]/.test(vsColor)?vsColor:`rgba(var(--${vsColor}),1)`:'rgb(244,244,244)',
    }"
    class="vs-list-header">
    <div 
      v-if="vsIcon" 
      class="list-icon">
      <i class="material-icons">{{ vsIcon }}</i>
    </div>
    <div class="list-titles">
      <div 
        v-if="vsTitle" 
        class="list-title">{{ vsTitle }}</div>
        <!-- <div class="list-subtitle" v-if="vsSubtitle">{{vsSubtitle}}</div> -->
    </div>
  </div>
</template>

<script>
import color from '../../utils/color.js'
export default {
  name:'VsListHeader',
  props: {
    vsColor:{
      type:String,
      default:'primary',
    },
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
  }
}
</script>

<style lang="stylus" scoped>
  .vs-list-header
    border-left 3px solid red
    background-color rgb(244,244,244)
    border-left 3px solid rgba(0,0,0,.1)
    display flex
    justify-content center
    align-items center
    flex-direction row
    font-weight 500
    position relative
    white-space nowrap
    .list-icon
      display flex
      justify-content center
      align-items center
      i
        font-size 1.5rem
        margin 16px
        margin-right: 0px;
    .list-titles
      width 100%
      display flex
      justify-content center
      align-items flex-start
      flex-direction column
      padding 8px
      margin-left: 10px;
      .list-title
        font-size 1rem
      .list-subtitle
        font-size 0.8rem
</style>
