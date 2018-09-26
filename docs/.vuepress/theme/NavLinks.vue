<template>
  <nav class="nav-links" v-if="userLinks.length || repoLink">
    <!-- user links -->
    <div
      class="nav-item"
      v-for="item in userLinks"
      :key="item.link">
      <DropdownLink v-if="item.type === 'links'" :item="item"/>
      <NavLink v-else :item="item"/>
    </div>

    <!-- repo link -->
    <!-- <a v-if="repoLink"
      :href="repoLink"
      class="repo-link flaticon-github"
      target="_blank"
      rel="noopener noreferrer">
      <! {{ repoLabel }} -->
       <!-- <OutboundLink/> -->
    <!-- </a> -->
  </nav>
</template>

<script>
import OutboundLink from './OutboundLink.vue'
import DropdownLink from './DropdownLink.vue'
import { resolveNavLinkItem } from './util'
import NavLink from './NavLink.vue'

export default {
  components: { OutboundLink, NavLink, DropdownLink },
  computed: {
    userNav () {
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || []
    },
    nav () {
      const { locales } = this.$site
      if (locales && Object.keys(locales).length > 1) {
        let currentLink = this.$page.path
        const routes = this.$router.options.routes
        const themeLocales = this.$site.themeConfig.locales || {}
        const languageDropdown = {
          text: this.$themeLocaleConfig.selectText || 'Languages',
          items: Object.keys(locales).map(path => {
            const locale = locales[path]
            const text = themeLocales[path] && themeLocales[path].label || locale.lang
            let link
            // Stay on the current page
            if (locale.lang === this.$lang) {
              link = currentLink
            } else {
              // Try to stay on the same page
              link = currentLink.replace(this.$localeConfig.path, path)
              // fallback to homepage
              if (!routes.some(route => route.path === link)) {
                link = path
              }
            }
            return { text, link }
          })
        }
        return [...this.userNav, languageDropdown]
      }
      return this.userNav
    },
    userLinks () {
      return (this.nav || []).map((link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem)
        })
      }))
    },
    repoLink () {
      const { repo } = this.$site.themeConfig
      if (repo) {
        return /^https?:/.test(repo)
          ? repo
          : `https://github.com/${repo}`
      }
    },
    repoLabel () {
      if (!this.repoLink) return
      if (this.$site.themeConfig.repoLabel) {
        return this.$site.themeConfig.repoLabel
      }

      const repoHost = this.repoLink.match(/^https?:\/\/[^/]+/)[0]
      const platforms = ['GitHub', 'GitLab', 'Bitbucket']
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i]
        if (new RegExp(platform, 'i').test(repoHost)) {
          return platform
        }
      }

      return 'Source'
    },
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'



.repoLink
  position: relative;
.iconx {
  margin-left: 0px !important;
}
.nav-links
  display inline-block
  padding-right: 0px;
  a
    // line-height 1.25rem
    color inherit
    padding: .7rem;
    transition: all .2s ease
    position: relative;
    &:after
      content: ''
      display: block
      position: absolute
      width: 0%
      left: 50%
      transform: translate(-50%)
      height: 3px
      border-radius 0px 0px 2px 2px
      background: $accentColor
      transition: all .2s ease
      top: -1px;
    &:hover, &.router-link-active
      color $accentColor
    &:hover:after
      width: 40% !important
  .nav-item
    cursor: pointer
    position relative
    display inline-block
    margin-left .4rem
    font-weight 500
    // line-height 2rem
    position: relative
  .github-link
    margin-left 1.5rem

@media (max-width: $MQMobile)
  .nav-links
    .nav-item, .github-link
      margin-left 0
      a
        padding: 0px !important;
    .repo-link
      display: none !important;
.links
  // right 1.5rem !important
@media (min-width: $MQMobile)
  .nav-links
    a

      &:hover, &.router-link-active
        color $accentColor
        // margin-bottom -2px
      &:hover:after, &.router-link-active:after
        width: 40% !important
        // border-bottom 2px solid lighten($accentColor, 5%)
</style>
