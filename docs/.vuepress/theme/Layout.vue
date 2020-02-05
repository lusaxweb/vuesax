<template>
  <div class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd">

    <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar"/>

    <!-- <CodeFund
      propertyId="1d55a3b5-154d-4e29-a7b6-46017e50c663"
      template="image-centered"
      theme="light"
    /> -->
    <!-- <Carbon/> -->
     <sidebar-map :items="sortComponents" />

    <div class="sidebar-mask" @click="toggleSidebar(false)"></div>
    <Sidebar :items="sortComponents" @toggle-sidebar="toggleSidebar">
      <slot name="sidebar-top" slot="top"/>
      <slot name="sidebar-bottom" slot="bottom"/>
    </Sidebar>
    <div class="custom-layout" v-if="$page.frontmatter.layout">
      <component :is="$page.frontmatter.layout"/>
    </div>
    <transition name="pagex">
    <Home v-if="$page.frontmatter.home"/>
    </transition>
    <transition name="homex">
    <Page v-if="!$page.frontmatter.home&&!$page.frontmatter.layout" :sidebar-items="sortComponents">
      <slot name="page-top" slot="top"/>
      <slot name="page-bottom" slot="bottom"/>
    </Page>
    </transition>



  </div>
</template>

<script>
import Vue from 'vue'
import nprogress from 'nprogress'
import Home from './Home.vue'
import Navbar from './Navbar.vue'
import Page from './Page.vue'
import Sidebar from './Sidebar.vue'
import sidebarMap from './SidebarMap.vue'
import { resolveSidebarItems, pathToComponentName } from './util'
import './icons/font/flaticon.css'
export default {
  components: { Home, Page, Sidebar, Navbar, sidebarMap },
  data () {
    return {
      isSidebarOpen: false,
      currentMetaTags: []
    }
  },

  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (frontmatter.navbar === false) return false
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      )
    },
    shouldShowSidebar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      return (
        !frontmatter.layout &&
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      )
    },
    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$route,
        this.$site,
        this.$localePath
      )
    },
    sortComponents () {
      return this.sidebarItems.map((items) => {
        if(items.title == 'Components') {
          items.children = items.children.sort((a, b) => a.title.localeCompare(b.title))
        }
        return items
      })
    },
    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar,
        },
        userPageClass
      ]
    }
  },

  created () {
    if (this.$ssrContext) {
      this.$ssrContext.title = this.$title
      this.$ssrContext.lang = this.$lang
      this.$ssrContext.description = this.$page.description || this.$description
    }

  },

  mounted () {
    // update title / meta tags
    // this.currentMetaTags = []
    // const updateMeta = () => {
    //   document.documentElement.lang = this.$lang
    //   const meta = [
    //     {
    //       name: 'description',
    //       content: this.$description
    //     },
    //     ...(this.$page.frontmatter.meta || [])
    //   ]
    //   this.currentMetaTags = updateMetaTags(meta, this.currentMetaTags)
    // }
    // this.$watch('$page', updateMeta)
    // updateMeta()

    // configure progress bar
    nprogress.configure({ showSpinner: false })

    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !Vue.component(pathToComponentName(to.path))) {
        nprogress.start()
      }
      next()
    })

    this.$router.afterEach(() => {
      nprogress.done()
      this.isSidebarOpen = false
    })
  },

  beforeDestroy () {
    updateMetaTags(null, this.currentMetaTags)
  },

  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
    },
    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },
    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}

function updateMetaTags (meta, current) {
  if (current) {
    current.forEach(c => {
      document.head.removeChild(c)
    })
  }
  if (meta) {
    return meta.map(m => {
      const tag = document.createElement('meta')
      Object.keys(m).forEach(key => {
        tag.setAttribute(key, m[key])
      })
      document.head.appendChild(tag)
      return tag
    })
  }
}
</script>
<style lang="stylus">
.homex-enter-active, .homex-leave-active {
  transition: all .250s;
}
.homex-enter /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  position: absolute !important;
  transform: translate(-100%) !important;
}
.homex-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translate(100%) !important;
  position: absolute !important;
}

.homex-enter-active .logo-g, .homex-leave-active .logo-g{
  transition: all .250s .3s;
}
.homex-enter .logo-g /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  position: absolute !important;
  transform: translate(0,-100%) !important;
}
.homex-leave-to .logo-g/* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translate(0,100%) !important;
  position: absolute !important;
}
//

.pagex-enter-active, .pagex-leave-active {
  transition: all .250s;

}
.pagex-enter /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  position: absolute !important;
  transform: translate(-100%) !important;
}
.pagex-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  position: absolute !important;
  transform: translate(100%) !important;
}

.pagex-enter-active .sidebar, .pagex-leave-active .sidebar{
  transition: all .250s .3s;

}

@media only screen and (max-width: 1100px)
  .con-contributors
    width 100% !important
    padding-right 0px
    padding 10px
</style>
<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="./styles/theme.styl" lang="stylus"></style>
