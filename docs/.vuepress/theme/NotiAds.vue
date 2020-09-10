<template>
  <div class="notiads">
    <div class="sponsor-special">
      <h4>Sponsorship</h4>
      <div :title="'Beacome a Sponsor ' + titlex" class="sponsor-s">
        <a target="_blank" href="https://www.patreon.com/bePatron?c=1567892">
          <!-- <vs-icon class="" icon="add"></vs-icon> -->
          <img v-if="ramdom == 1" :src="$withBase('/patreon/Coffe-Vuesax.png')" alt="">
          <img v-if="ramdom == 2" :src="$withBase('/patreon/02-Vuesax-Pizza-Manuel-Rovira-Luis-Daniel-Rovira-Lusax-Web-Framework-ui-components-Vue-js-nuxt-vuepr.png')" alt="">
          <img v-if="ramdom == 3" :src="$withBase('/patreon/03-Vuesax-Bronze-Manuel-Rovira-Luis-Daniel-Rovira-Lusax-Web-Framework-ui-components-Vue-js-nuxt-vuep.png')" alt="">
          <img v-if="ramdom == 4" :src="$withBase('/patreon/02-Vuesax-Silver-Manuel-Rovira-Luis-Daniel-Rovira-Lusax-Web-Framework-ui-components-Vue-js-nuxt-vuep.png')" alt="">
          <img v-if="ramdom == 5" :src="$withBase('/patreon/01-Vuesax-Gold-Manuel-Rovira-Luis-Daniel-Rovira-Lusax-Web-Framework-ui-components-Vue-js-nuxt-vuepre.png')" alt="">
          <img v-if="ramdom == 6" :src="$withBase('/patreon/06-Vuesax-Diamond-Manuel-Rovira-Luis-Daniel-Rovira-Lusax-Web-Framework-ui-components-Vue-js-nuxt-vue.png')" alt="">
          <img v-if="ramdom == 7" :src="$withBase('/patreon/07-Vuesax-Special-Manuel-Rovira-Luis-Daniel-Rovira-Lusax-Web-Framework-ui-components-Vue-js-nuxt-vue.png')" alt="">
        </a>
      </div>
      <a target="_blank" href="https://www.patreon.com/bePatron?c=1567892" class="btn-patreon" rel="noopener noreferrer">
        <img :src="$withBase('/patreon.webp')" alt="vuesax-patreon">
        Become a patron
      </a>
    </div>
    <div class="noti">

    </div>
    <Carbon ref="carbon" />
    <!-- <codefund ref="codefund" /> -->
  </div>
</template>
<script>
import Carbon from "./Carbon";
import Codefund from "./CodeFund.vue";
export default {
  components: {
    Carbon,
    Codefund
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
  watch: {
    '$route' (to, from) {
      if (
        to.path !== from.path
      ) {
        this.$refs.carbon.clean()
        this.ads = 'carbon'
        this.$refs.carbon.load()
        this.$refs.carbon.$el.classList.remove('hidden')
      }
    }
  },
  mounted () {
    this.$refs.carbon.clean()
    this.ads = 'carbon'
    this.$refs.carbon.load()
    this.$refs.carbon.$el.classList.remove('hidden')
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
          // background alpha(#f96854, .1)
          box-shadow 0px 5px 10px 0px alpha(#f96854, .13)
          transform translate(0, -4px)
        img
          width 100%
</style>
