<template>
  <main class="page">
    <slot name="top"/>



    <Content/>

    <api />

    <footer class="page-edit">
      <div
        class="edit-link"
        v-if="editLink"
      >
        <a
          :href="editLink"
          target="_blank"
          rel="noopener noreferrer"
        >{{ editLinkText }}</a>
        <OutboundLink/>
      </div>

      <div
        class="last-updated"
        v-if="lastUpdated"
      >
        <span class="prefix">{{ lastUpdatedText }}: </span>
        <span class="time">{{ lastUpdated }}</span>
      </div>
    </footer>

    <div class="page-nav" v-if="prev || next">
      <p class="inner">
        <span
          v-if="prev"
          class="prev fle"
        >

          <router-link
            v-if="prev"
            class="prev"
            :to="prev.path"
          >
            <i class='bx bx-left-arrow-alt' ></i>
            {{ prev.title || prev.path }}
          </router-link>
        </span>

        <span
          v-if="next"
          class="next fle"
        >
          <router-link
            v-if="next"
            :to="next.path"
          >
            {{ next.title || next.path }}
            <i class='bx bx-right-arrow-alt' ></i>
          </router-link>

          <!-- → -->
        </span>
      </p>
    </div>

    <slot name="bottom"/>

    <div
      ref="up"
      @click="handleUp"
      class="up">
      <i class='bx bx-chevron-up' ></i>
    </div>
  </main>
</template>

<script>

import api from './api'
import { resolvePage, normalize, outboundRE, endingSlashRE } from '../util'

export default {
  components:{
    api
  },
  props: ['sidebarItems'],

  computed: {
    lastUpdated () {
      return this.$page.lastUpdated
    },

    lastUpdatedText () {
      if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
        return this.$themeLocaleConfig.lastUpdated
      }
      if (typeof this.$site.themeConfig.lastUpdated === 'string') {
        return this.$site.themeConfig.lastUpdated
      }
      return 'Last Updated'
    },

    prev () {
      const prev = this.$page.frontmatter.prev
      if (prev === false) {
        return
      } else if (prev) {
        return resolvePage(this.$site.pages, prev, this.$route.path)
      } else {
        return resolvePrev(this.$page, this.sidebarItems)
      }
    },

    next () {
      const next = this.$page.frontmatter.next
      if (next === false) {
        return
      } else if (next) {
        return resolvePage(this.$site.pages, next, this.$route.path)
      } else {
        return resolveNext(this.$page, this.sidebarItems)
      }
    },

    editLink () {
      if (this.$page.frontmatter.editLink === false) {
        return
      }
      const {
        repo,
        editLinks,
        docsDir = '',
        docsBranch = 'master',
        docsRepo = repo
      } = this.$site.themeConfig

      let path = normalize(this.$page.path)
      if (endingSlashRE.test(path)) {
        path += 'README.md'
      } else {
        path += '.md'
      }
      if (docsRepo && editLinks) {
        return this.createEditLink(repo, docsRepo, docsDir, docsBranch, path)
      }
    },

    editLinkText () {
      return (
        this.$themeLocaleConfig.editLinkText
        || this.$site.themeConfig.editLinkText
        || `Edit this page`
      )
    }
  },

  mounted() {
    window.addEventListener('scroll',() => {
      if(window.pageYOffset > 300) {
        this.$refs.up.classList.add('active')
      } else {
        this.$refs.up.classList.remove('active')
      }

      let footerx = document.querySelector('.footerx')
      let footerTop = footerx.offsetTop

      if(window.pageYOffset + (window.innerHeight) >= footerTop) {
        this.$refs.up.style.bottom = `${window.pageYOffset + (window.innerHeight) - footerTop}px`
        document.querySelector('.con-ads').style.bottom = `${window.pageYOffset + 20 + (window.innerHeight) - footerTop}px`
        document.querySelector('.con-ads').classList.add('bottom-footer')
      } else {
        document.querySelector('.con-ads').classList.remove('bottom-footer')
        this.$refs.up.style.bottom = document.querySelector('.con-ads').style.bottom = '0px'

      }

      // console.log(window.pageYOffset + (window.innerHeight) - footerTop)
    })
  },

  methods: {
    handleUp() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    createEditLink (repo, docsRepo, docsDir, docsBranch, path) {
      const bitbucket = /bitbucket.org/
      if (bitbucket.test(repo)) {
        const base = outboundRE.test(docsRepo)
          ? docsRepo
          : repo
        return (
          base.replace(endingSlashRE, '')
           + `/src`
           + `/${docsBranch}`
           + (docsDir ? '/' + docsDir.replace(endingSlashRE, '') : '')
           + path
           + `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
        )
      }

      const base = outboundRE.test(docsRepo)
        ? docsRepo
        : `https://github.com/${docsRepo}`

      return (
        base.replace(endingSlashRE, '')
        + `/edit/${docsBranch}`
        + (docsDir ? '/' + docsDir.replace(endingSlashRE, '') : '')
        + path
      )
    }
  }
}

function resolvePrev (page, items) {
  return find(page, items, -1)
}

function resolveNext (page, items) {
  return find(page, items, 1)
}

function find (page, items, offset) {
  const res = []
  flatten(items, res)
  for (let i = 0; i < res.length; i++) {
    const cur = res[i]
    if (cur.type === 'page' && cur.path === decodeURIComponent(page.path)) {
      return res[i + offset]
    }
  }
}

function flatten (items, res) {
  for (let i = 0, l = items.length; i < l; i++) {
    if (items[i].type === 'group') {
      flatten(items[i].children || [], res)
    } else {
      res.push(items[i])
    }
  }
}

</script>

<style lang="stylus">
@require '../styles/wrapper.styl'
.up
  position fixed
  bottom 0px
  right 150px
  width 40px
  height 40px
  background rgb(255,255,255)
  display flex
  align-items center
  justify-content center
  font-size 1.5rem
  border-radius 12px
  cursor pointer
  margin 20px
  // box-shadow 0px 10px 20px 0px rgba(0,0,0,.08)
  transform translate(0,calc(100% + 20px))
  transition all .25s ease, bottom 0s
  z-index 500
  &:active
    transform scale(.9) translate(0) !important
    opacity .7
  &:hover
    color $accentColor
    box-shadow 0px 10px 20px 0px rgba(0,0,0,.1)
  &.active
    transform translate(0)
.fle
  font-size 1rem
  float left
  &.next
    a
      &:hover
        i
          transform translate(5px) !important
  a
    display flex
    align-items center
    justify-content center
    color $textColor
    padding 5px 10px
    border-radius 10px
    transition all .25s ease
    i
      transition all .4s ease


    &:hover
      color $accentColor
      background rgb(255,255,255)
      box-shadow 0px 5px 10px 0px rgba(0,0,0,.08)
      transform translate(0,-5px)
      i
        transform translate(-5px)

      span
        color $accentColor
  span
    margin-bottom 2px
    padding 0px 4px
    display block
    position relative
    &:before
      font-size .5rem

.page
  padding-bottom 2rem
  display block
  padding-top 100px
  h1
    padding-left 20px
.page-edit
  @extend $wrapper
  padding-top 1rem
  padding-bottom 1rem
  overflow auto
  .edit-link
    display inline-block
    a
      color lighten($textColor, 25%)
      margin-right 0.25rem

  .last-updated
    float right
    font-size 0.9em
    .prefix
      font-weight 500
      color lighten($textColor, 25%)
    .time
      font-weight 400
      color #aaa

.page-nav
  @extend $wrapper
  padding-top 1rem
  padding-bottom 30px
  // margin-bottom 20px
  .inner
    min-height 2rem
    margin-top 0
    // border-top 1px solid rgba(0,0,0,.04)
    padding-top 1rem
  .next
    float right

@media (max-width: $MQMobile)
  .page-edit
    .edit-link
      margin-bottom .5rem
    .last-updated
      font-size .8em
      float none
      text-align left

</style>
