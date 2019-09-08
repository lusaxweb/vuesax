<template>
  <header class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>

    <router-link
      :to="$localePath"
      class="home-link"
    >
      <span
        >
        <img
          class="logo"
          v-if="$site.themeConfig.logo"
          :src="$withBase($site.themeConfig.logo)"
          :alt="$siteTitle"
        >
      </span>
      <!-- <span
        ref="siteName"
        class="site-name"
        v-if="$siteTitle"
        :class="{ 'can-hide': $site.themeConfig.logo }"
      >{{ $siteTitle }}</span> -->
    </router-link>

    <div
      class="links"
      :style="linksWrapMaxWidth ? {
        'max-width': linksWrapMaxWidth + 'px'
      } : {}"
    >
      <!-- <AlgoliaSearchBox
        v-if="isAlgoliaSearch"
        :options="algolia"
      /> -->
      <!-- <SearchBox v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"/> -->
      <NavLinks class="can-hide"/>
      <div class="content-right">
        <ul class="redesx">
          <li>
            <a
              href="https://github.com/lusaxweb/vuesax">
              <i class='bx bxl-github' ></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/vuesax">
              <i class='bx bxl-twitter' ></i>
            </a>
          </li>
          <li>
            <a
              class="con-svg"
              href="https://discord.gg/9dsKtvB">
              <i class='bx bxl-discord' ></i>
            </a>

          </li>
        </ul>

        <button
          class="btn-color">
          <span></span>
        </button>
      </div>

    </div>
  </header>
</template>

<script>
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from '@SearchBox'
import SidebarButton from '@theme/components/SidebarButton.vue'
import NavLinks from '@theme/components/NavLinks.vue'



export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox },

  data () {
    return {
      linksWrapMaxWidth: null
    }
  },

  mounted () {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
          - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)
  },

  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  },
  methods:{
    mousemove(e, x = 6, y = 6) {
      let span = e.target.querySelector('span')
      span.style.transform = `translate(${(e.layerX - e.target.offsetWidth/2)/x}px, ${(e.layerY - e.target.offsetHeight/2)/y}px)`
    },
    mouseleave(e) {
      let span = e.target.querySelector('span')
      span.style.transition = `transform .25s ease`
      span.style.transform = `translate(0px, 0px)`

      setTimeout(() => {
        span.style.transition = `transform 0s ease`
      }, 250);
    }
  }
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.4rem
$navbar-horizontal-padding = 1.5rem

vs-color(colorx, alpha = 1)
    unquote("rgba(var(--vs-"+colorx+"), "+alpha+")")

vs-var(var)
    unquote("var(--vs-"+var+")")

.btn-color
  position relative
  border 0px
  background transparent
  margin-left 10px
  padding 5px
  outline none
  cursor pointer
  span
    pointer-events none
    width 20px
    height 20px
    border-radius 7px
    border 0px

    box-shadow 0px 0px 0px 0px vs-color('primary',1)
    background vs-color('primary')
    outline none
    transition box-shadow .25s ease
    cursor pointer
  &:hover
    span
      box-shadow 0px 3px 10px -3px vs-color('primary',.5)
.content-right
  display flex
  align-items center
  justify-content flex-end
.download
  margin-left 5px
  background transparent
  border 0px
  padding 10px
  border-left 1px solid rgba(0,0,0,.1)
  border-right 1px solid rgba(0,0,0,.1)
  color $textColor
  transition color .25s ease
  font-size .75rem
  position relative
  span
    pointer-events none
  &:before
    font-weight bold
    margin-right 5px
  &:hover
    color $accentColor

.redesx
  margin 0px
  padding 0px
  display flex
  align-items center
  justify-content center
  li
    list-style none
    position relative
    a
      color $textColor
      padding 10px 7px
      display flex
      align-items center
      justify-content center
      position relative
      i
        font-size 1.1rem
      &:hover
        color $accentColor

.navbar
  // padding $navbar-vertical-padding $navbar-horizontal-padding
  // line-height $navbarHeight - 1.4rem
  display flex
  position relative
  align-items center
  justify-content space-between
  width 100%
  // box-shadow 0px 0px 15px 0px rgba(0,0,0,.03)
  border-radius 0px 0px 0px 20px
  transition all .25s ease
  &.fixed
    box-shadow 0px 0px 0px 0px rgba(0,0,0,.0)
    // border-radius 0px
  a, span, img
    display block
  .home-link
    margin-left 4rem
    margin-right 0.8rem
  .logo
    height $navbarHeight - 1.4rem
    min-width $navbarHeight - 1.4rem
    transition all .25s ease
    vertical-align top
    pointer-events none
  .site-name
    font-size 1.3rem
    font-weight 600
    color $textColor
    position relative
  .links
    box-sizing border-box
    white-space nowrap
    font-size 0.9rem
    position relative
    display flex
    margin-right 10px
    width 100%
    justify-content space-between
    align-items center
    padding-left 40px
    .search-box
      flex: 0 0 auto
      vertical-align top

@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    .can-hide
      display none
    .links
      padding-left 1.5rem
</style>
