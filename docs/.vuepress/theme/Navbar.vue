<template>
  <header :class="{'shadow':true}" class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>
    <div class="con-btns-header">
      <router-link :to="$localePath" class="home-link">
        <div class="con-logo">
          <img class="logo"
          v-if="$site.themeConfig.logo"
          :src="$withBase($site.themeConfig.logo)">
        </div>
        <span class="site-name"
          v-if="$siteTitle"
          :class="{ 'can-hide': $site.themeConfig.logo }">
          <!-- {{ $siteTitle }} -->
        </span>
      </router-link>
      <div :class="{'linksColor':!$page.frontmatter.home}" class="links">
        <!-- <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia"/> -->
        <!-- <SearchBox v-else-if="$site.themeConfig.search !== false"/> -->
        <NavLinks class="can-hide"/>
      </div>
    </div>

    <div class="con-redes-download">
      <a
        title="Github"
        v-if="repoLink"
        :href="repoLink"
        class="repo-link flaticon-github"
        target="_blank"
        rel="noopener noreferrer">
          <!-- {{ repoLabel }} -->
          <!-- <OutboundLink/> -->
        </a>
        <a target="_blank" title="@vuesax" href="https://twitter.com/vuesax">
          <vs-icon class="flaticon-twitter twitterx" icon=""></vs-icon>
        </a>
        <a target="_blank" title="Discord" class="icon-discord" href="https://discord.gg/6AZNXEa">
          <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245 240"><path class="st0" d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"/><path class="st0" d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"/></svg>
        </a>

        <a href="https://github.com/lusaxweb/vuesax/releases/download/v3.8.61/vuesax-3.8.61.zip" class="btn-download">
          <vs-icon class="" icon="get_app"></vs-icon>
          <span>Download</span>
        </a>

      <div title="Change Color Primary" v-if="!$page.frontmatter.home" class="con-colors-input">
        <div :style="{
          'box-shadow': '0px 5px 20px -4px rgba(var(--vs-primary),.9)',
          'background': 'rgb(var(--vs-primary))'}" class="con-inputx-c">
          <input @change="changeColor($event.target.value)" type="color" name="" :value="color">
        </div>
      </div>

      <btnApps />
    </div>
    <!-- colors change -->

  </header>
</template>

<script>
import btnApps from './btnApps.vue'
import SidebarButton from './SidebarButton.vue'
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from './SearchBox.vue'
import NavLinks from './NavLinks.vue'

export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox, btnApps },
  data(){
    return {
      color: '#008afb',
      shadow:false,
    }
  },
  computed: {
    repoLink () {
      const { repo } = this.$site.themeConfig
      if (repo) {
        return /^https?:/.test(repo)
          ? repo
          : `https://github.com/${repo}`
      }
    },
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },
    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  },
  mounted(){
    if(this.$page.frontmatter.home){
      window.addEventListener('scroll',(e)=>{
        if(e.target.scrollingElement.scrollTop > 350){
          this.shadow = true
        } else {
          this.shadow = false
        }
      })
    } else {
      this.shadow = true
    }

  },
  methods:{
    changeColor(colorx){
      this.$vs.theme({
        primary:colorx // myColorNew
      })
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'
//vuesax
.st0
  fill:#5b5777

.icon-discord
  position relative
  svg
    width 22px
    height 22px
.con-redes-download
  display flex
  align-items center
  justify-content center
  .twitterx
    &:before
      font-size 1.2rem !important
  .repo-link
    &:before
      font-size 1.2rem !important
  a
    display flex !important
    align-items center
    justify-content center
    padding 0px 4px
    transition all .25s ease
    color #5b5777
    &:hover
      color $accentColor !important
      .st0
        fill $accentColor !important
  .btn-download
    padding 12px 10px
    font-size .8rem
    display flex
    align-items center
    justify-content center
    border-left 1px solid rgba(0,0,0,.05)
    border-right 1px solid rgba(0,0,0,.05)
    margin-left 5px
    cursor pointer
    span
      margin-left 5px
.con-inputx-c {
  overflow: hidden;
  display: inline-block;
  position: relative;
  // overflow: hidden;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  box-shadow: 0px 0px
}
.con-colors-input{
  position: relative;
  display flex
  align-items center
  justify-content center
  margin-left 10px
}
.con-colors-input input{
  border: 0px;
  background: transparent;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.shadow {
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.04) !important
}
.logo {
  transition: all .3s ease
  // opacity: 0;
  // transform: translate(0,-100%);
}
.visible
  opacity: 1;
  transform: translate(0);
//vuesax

.navbar
  height: 3rem !important;
  padding 0.4rem 1rem
  line-height $navbarHeight - 1.5rem
  position relative
  background: $background
  z-index: 1200 !important
  position: fixed;
  width: calc(100% + 7px)
  display flex
  align-items center
  justify-content space-between

  i
    font-size 1rem

  .home-link
    margin-left 2.5rem
    margin-right 3.5rem
  .con-btns-header
    display flex
    align-items center
    // justify-content flex-start
  a, span, img
    display block
  .logo
    height $navbarHeight - 0.7rem
    // min-width $navbarHeight - 1.4rem
    // margin-right 4.5rem
    vertical-align top
    // margin-left 2.5rem
  .site-name
    font-size 1.3rem
    display none
    font-weight 600
    color $textColor
    position relative
  .links
    font-size 0.9rem
    position relative
    // right 0rem
    top 0rem
    transition: all .2s ease;
    &.linksColor
      // right: 1.5rem
@media (max-width: $MQMobile)
  .links
    line-height 48px
  .navbar
    padding-left 3rem
    .can-hide
      display none
</style>
