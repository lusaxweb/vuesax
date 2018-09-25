<template>
  <div class="notiads">
    <div class="sponsor-special">
      <h4>Special Sponsor</h4>
      <div title="Beacome a Sponsor" class="sponsor-s">
        <a target="_blank" href="https://www.patreon.com/bePatron?c=1567892">
          <i class="material-icons">
            add
          </i>
        </a>
      </div>
      <a target="_blank" href="https://www.patreon.com/bePatron?c=1567892" class="btn-patreon" rel="noopener noreferrer">
        <img :src="$withBase('/patreon.webp')" alt="vuesax-patreon">
        Become a patron
      </a>
    </div>
    <div class="noti">

    </div>
    <Carbon/>
  </div>
</template>
<script>
import Carbon from "./Carbon";
export default {
  components: {
    Carbon
  }
}
</script>
<style lang="stylus">
@import './styles/config.styl'
.notiads
  background rgb(255,255,255)
  height 100%
  position absolute
  left 0px
  top 0px
  width 100%
  display flex
  flex-direction column
  box-shadow -4px 4px 10px 0px rgba(0,0,0,.02)
  .btn-patreon
    padding 4px
    padding-left 6px
    padding-right 6px;
    border 1px solid rgb(249, 104, 84)
    color $accentColor
    background transparent
    margin-top 15px;
    border-radius 5px;
    cursor pointer
    transition all .2s ease
    background rgb(249, 104, 84)
    color rgb(255,255,255)
    display flex
    align-items center
    justify-content center
    text-transform uppercase
    font-size 10px
    font-weight bold
    &:hover
      box-shadow: 0px 9px 28px -9px rgb(249, 104, 84)
    img
      margin-right 5px
  .noti
    flex-grow: 1 !important
  .sponsor-special
    width 100%
    display flex
    align-items center
    justify-content center
    padding 20px 0px
    flex-direction column
    h4
      padding-bottom 10px
    .sponsor-s
      a
        color rgba(0,0,0,.1)
        width 120px
        height 120px
        border-radius 10px
        border 1px dashed #dcdcdc
        display flex
        align-items center
        justify-content center
        transition all .3s ease
        &:hover
          color #f96854 !important
          border 1px dashed #f96854
          background alpha(#f96854, .1)
          box-shadow 0px 5px 10px 0px alpha(#f96854, .13)
          transform translate(0, -4px)
</style>
