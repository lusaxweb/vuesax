<template lang="html">
  <div class="vs-list-item">
    <div class="list-avatar">
      <slot name="avatar">
      </slot>
    </div>
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
import vsAvatar from '../vsAvatar/vsAvatar'
import color from '../../utils/color.js'
export default {
  name:'vs-list-item',
  props: {
    vsAvatar:{
      type:[Boolean,String],
      default:false,
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
  .vs-list-item + .vs-list-item
    border-top 1px solid rgb(235,235,235)
  .vs-list-item
    border-left 1px solid rgb(235,235,235)
    border-right 1px solid rgb(235,235,235)
    display flex
    justify-content center
    align-items center
    flex-direction row
    font-weight 500
    position relative
    white-space nowrap
    .list-avatar
      margin-left: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
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
