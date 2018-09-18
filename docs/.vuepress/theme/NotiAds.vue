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
          color $accentColor !important
          border 1px dashed $accentColor
</style>
