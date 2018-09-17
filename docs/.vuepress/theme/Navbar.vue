<template>
  <header :class="{'shadow':shadow}" class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>
    <router-link @click.native="changeAds" :to="$localePath" class="home-link">
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
    <!-- colors change
    <div v-if="!$page.frontmatter.home" class="con-colors-input">
      <div :style="{
        'box-shadow': '0px 5px 20px -4px rgba(var(--primary),.9)',
        'background': 'rgb(var(--primary))'}" class="con-inputx-c">
        <input @change="changeColor($event.target.value)" type="color" name="" :value="color">
      </div>
    </div> -->
  </header>
</template>

<script>
import SidebarButton from './SidebarButton.vue'
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from './SearchBox.vue'
import NavLinks from './NavLinks.vue'

export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox },
  data(){
    return {
      color: '#008afb',
      shadow:false,
    }
  },
  computed: {
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
    changeAds(){
      if (!document.querySelector('#carbonads')) return;
      if (typeof _carbonads !== 'undefined') _carbonads.refresh();
    },
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
  position: absolute;
  right: 15px;
  top: 11px;
  display: inline-block;
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
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.050) !important
}
.logo {
  transition: all .3s ease
  // opacity: 0;
  // transform: translate(0,-100%);
  margin-left: 35px
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
  a, span, img
    display inline-block
  .logo
    height $navbarHeight - 0.7rem
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top
  .site-name
    font-size 1.3rem
    display none
    font-weight 600
    color $textColor
    position relative
  .links
    font-size 0.9rem
    position absolute
    right 0rem
    top 0rem
    transition: all .2s ease;
    &.linksColor
      right: 1.5rem
@media (max-width: $MQMobile)
  .links
    line-height 48px
  .navbar
    padding-left 3rem
    .can-hide
      display none
</style>
