<template>
  <div ref="codefund" class="codefund" id="codefund">
    <div></div>
  </div>
</template>

<script>
export default {
  name: "CodeFund",
};
</script>
<style lang="stylus">
.codefund
  position relative
  width 145px
  background #fff
  z-index 10000
  // padding 8px
  border-radius 25px 0px 0px 0px
  transition all .25s ease
  color: rgb(30,30,30)
  &:empty
    display none
  &:hover
    transform translate(-10px,-10px)
    border-radius 20px
  &.hidden
    visibility hidden
    opacity 0
  img
    border-radius 20px
    margin 8px
    margin-bottom 5px
  .cf-text
    width calc(100% - 10px)
    display inline-block
    margin 0px 5px
    strong,span
      position relative
      display inline-block
  .cf-wrapper
    font-size .7rem
    line-height 1.3
  .cf-powered-by
    font-size .6rem
  a
    display block
    width 100%
    text-align center !important
    color: rgb(30,30,30)
    &:last-child
      margin-top 2px
      padding-bottom 8px
    .cf-impression
      position absolute

@media (max-width: 600px)
  .codefund
    width 100%
    padding 0px 30px
    min-height 48px
    border-radius 0px
    .cf-text
      text-align left
    .cf-sponsored-by
      display flex
      align-items center
      justify-content center
    .cf-powered-by
      display none
    img
      height 44px
      width auto
      margin 0px
      border-radius 7px
      margin-right 10px
</style>
