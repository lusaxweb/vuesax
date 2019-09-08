<template>
  <div class="con-patreonbar">
    <div class="con-patreon">
      <h3>
        Sponsorship
      </h3>

        <a

          class="con-img-patreon"
          target="_blank" href="https://www.patreon.com/bePatron?c=1567892">

          <span
            >
            <!-- @mousemove="$mouseMove($event, 9, 9, 'img', true)" -->
            <img v-if="ramdom == 1" :src="$withBase('/patreon/Coffe-Vuesax.png')" alt="">
            <img v-if="ramdom == 2" :src="$withBase('/patreon/02-Vuesax-Pizza-Manuel-Rovira-Luis-Daniel-Rovira-Lusax-Web-Framework-ui-components-Vue-js-nuxt-vuepr.png')" alt="">
            <img v-if="ramdom == 3" :src="$withBase('/patreon/03-Vuesax-Bronze-Manuel-Rovira-Luis-Daniel-Rovira-Lusax-Web-Framework-ui-components-Vue-js-nuxt-vuep.png')" alt="">
            <img v-if="ramdom == 4" :src="$withBase('/patreon/02-Vuesax-Silver-Manuel-Rovira-Luis-Daniel-Rovira-Lusax-Web-Framework-ui-components-Vue-js-nuxt-vuep.png')" alt="">
            <img v-if="ramdom == 5" :src="$withBase('/patreon/01-Vuesax-Gold-Manuel-Rovira-Luis-Daniel-Rovira-Lusax-Web-Framework-ui-components-Vue-js-nuxt-vuepre.png')" alt="">
            <img v-if="ramdom == 6" :src="$withBase('/patreon/06-Vuesax-Diamond-Manuel-Rovira-Luis-Daniel-Rovira-Lusax-Web-Framework-ui-components-Vue-js-nuxt-vue.png')" alt="">
            <img v-if="ramdom == 7" :src="$withBase('/patreon/07-Vuesax-Special-Manuel-Rovira-Luis-Daniel-Rovira-Lusax-Web-Framework-ui-components-Vue-js-nuxt-vue.png')" alt="">
          </span>

        </a>

        <a
          target="_blank" href="https://www.patreon.com/bePatron?c=1567892"  class="btn-patreon" rel="noopener noreferrer">
          <img :src="$withBase('/patreon.webp')" alt="vuesax-patreon">
          Become a patron
        </a>
    </div>

    <div
      class="con-ads">
      <carbon />
    </div>
  </div>
</template>
<script>
import carbon from './carbon.vue'
export default {
  components:{
    carbon
  },
  data: () => ({
    ramdom: 1
  }),
  computed: {
    titlex () {
      let titlex = 'Coffe'
      if (this.ramdom == 2) {
        titlex = 'Pizza'
      } else if (this.ramdom == 3) {
        titlex = 'Bronze'
      } else if (this.ramdom == 4) {
        titlex = 'Silver'
      } else if (this.ramdom == 5) {
        titlex = 'Gold'
      } else if (this.ramdom == 6) {
        titlex = 'Diamond'
      } else if (this.ramdom == 7) {
        titlex = 'Special'
      }
      return titlex
    }
  },
  mounted () {
    this.ramdom = this.numeroAleatorio(1, 7)
  },
  updated () {
    this.ramdom = this.numeroAleatorio(1, 7)
  },
  methods: {
    numeroAleatorio (min, max) {
      return Math.round(Math.random() * (max - min) + min)
    }
  }
}
</script>
<style lang="stylus">
.con-ads
  background rgb(255,255,255)
  border-radius 20px 0px 0px 0px
  // box-shadow 0px -14px 14px 0px rgba(0,0,0,.025)
  transition all .25s ease, bottom 0s
  bottom 0px
  right 0px
  position absolute
  overflow hidden
  &.bottom-footer
    border-radius 20px 0px 20px 20px
  &:hover
    transform translate(-10px, -10px)
    border-radius 20px
    box-shadow 0px 0px 14px 0px rgba(0,0,0,.04)
    // div[id*="carbonads"]
.btn-patreon
    padding 3px 8px
    border 1px solid rgb(249, 104, 84)
    color $accentColor
    background transparent
    margin-top 12px;
    border-radius 10px;
    cursor pointer
    transition box-shadow .2s ease
    background rgb(249, 104, 84)
    color rgb(255,255,255)
    display flex
    align-items center
    justify-content center
    text-transform uppercase
    font-size 9px
    white-space: nowrap;
    position relative
    font-weight 600
    span
      display flex
      align-items center
      justify-content center
      pointer-events none
    &:hover
      box-shadow: 0px 9px 15px -11px rgb(249, 104, 84)
      img
        transform scale(1.2)
    img
      margin-right 3px
      width 20px
      transition all .25s ease
.con-patreonbar
  width 8.5rem
  height calc(100% - 48px)
  position fixed
  right 0px
  // background rgb(255,255,255)
  // background #f5f7fb
  z-index 6000
  top 48px
  box-sizing border-box
  display flex
  flex-direction column
  justify-content space-between
  // box-shadow 0px 15px 15px 0px rgba(0,0,0,.03)
  // border-left 1px solid rgba(0,0,0,.03)
  // &:after
  //   position absolute
  //   top 0px
  //   content ''
  //   left -20px
  //   width 20px
  //   height 20px
  //   background rgb(250,250,250)
  //   border-radius 0px 100% 0px 0px
  //   // box-shadow inset 0px 0px 15px 0px rgba(0,0,0,1)
  &:before
    position absolute
    top 0px
    content ''
    left -25px
    width 25px
    height 25px
    border-radius 0px 50%
    box-shadow: 4px -4px 0 0 rgb(255,255,255)
  .con-patreon
    width 100%
    padding 10px
    padding-top 5px
    position relative
    background rgb(255,255,255)
    border-radius 0px 0px 0px 15px
    // box-shadow 0px 14px 14px 0px rgba(0,0,0,.03)
    h3
      text-align center
      width 100%
      margin 0px
      padding 10px
      font-size .85rem
      font-weight 600
    .con-img-patreon
      position relative
      span
        background rgb(255,255,255)
        display block
        border 1px dashed rgba(0,0,0,.05)
        position relative
        height calc(9rem - 30px)
        display flex
        align-items center
        border-radius 10px
        justify-content center
        transition all .3s ease
        overflow hidden
        &:hover
          // border 1px dasehd rgba(0,0,0,.1)
          box-shadow 0px 9px 13px 0px rgba(0,0,0,.03)
          transform scale(.94)
          img
            transform scale(1.25)
      img
        pointer-events none
        width 85%
        display block
        transition width .2s ease
        transition all .25s ease


</style>
