<template lang="html">
  <div class="vs-list-item">
    <div v-if="vsIcon" class="list-icon">
      <i class="material-icons">{{vsIcon}}</i>
    </div>
    <div class="list-titles">
      <div class="list-title" v-if="vsTitle">{{vsTitle}}</div>
      <div class="list-subtitle" v-if="vsSubtitle">{{vsSubtitle}}</div>
    </div>
    <div class="list-slot">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import color from '../../utils/color.js'
export default {
  name:'vs-list-item',
  props: {
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
  .vs-list-item + .vs-list-item
    border-top 3px solid rgb(240,240,240)
  .vs-list-item
    border-left 3px solid rgb(240,240,240)
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
    .list-slot
      margin-left auto
</style>
