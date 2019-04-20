<template>
  <a target="_blank" :href="href" class="con-scrimba">
    <vs-icon class="con-btn-play" icon="play_arrow"></vs-icon>
    <span class="text">{{ text }}</span>
  </a>
</template>
<script>
export default {
  props:{
    href:{
      default: null,
      type: String
    },
    text:{
      default: 'Try this lesson on Scrimba',
      type: String
    }
  }
}
</script>
<style lang="stylus">
  .con-scrimba
    padding 10px 25px
    background #e7ecf3
    display flex
    align-items center
    justify-content flex-start
    text-decoration none !important
    transition all .25s ease
    &:hover
      background alpha(#e7ecf3, .6)
      .con-btn-play
        transform scale(1.15)
      .text
        transform translate(10px)
    .con-btn-play
      transition all .25s ease
      display flex
      align-items center
      justify-content center
      color rgb(255,255,255)
      background #73abfe
      width 35px
      height 35px
      border-radius 10px
    .text
      transition all .25s ease
      font-weight bold
      color #486491
      padding-left 10px
</style>
