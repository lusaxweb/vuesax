<template>

  <div class="page">
    <div class="color">
      <div class="colorMover">

      </div>
    </div>

    <div id="codefund_ad"></div>

    <transition name="contentx">
    <Content :custom="false"/>
    </transition>

    <div class="content edit-link" v-if="editLink">
      <a :href="editLink" target="_blank" rel="noopener noreferrer">{{ editLinkText }}</a>
      <OutboundLink/>
    </div>
    <div class="content">
      <api />
      <contributors title="Contributors" :repo="this.$site.themeConfig.repo" :contributors="this.$page.frontmatter.contributors"/>
    </div>
    <div class="content page-nav" v-if="prev || next">
      <p class="inner">
        <span v-if="prev" class="prev">
          ← <router-link v-if="prev" class="prev" :to="prev.path">
            {{ prev.title || prev.path }}
          </router-link>
        </span>
        <span v-if="next" class="next">
          <router-link v-if="next" :to="next.path">
            {{ next.title || next.path }}
          </router-link> →
        </span>
      </p>
    </div>
    <slot name="bottom"/>
    <Footer/>
  </div>
</template>

<script>
import api from './api.vue'
import contributors from './contributors.vue'
import easing from './easing.js'
import Footer from './Footer.vue'
import OutboundLink from './OutboundLink.vue'
import { resolvePage, normalize, outboundRE, endingSlashRE } from './util'

export default {
  components: { OutboundLink, api, Footer, contributors },
  props: ['sidebarItems'],
  methods:{
    replaceH1(){
      let h1 = this.$el.querySelector('h1')
      h1.innerText = 'gola'
    }
  },
  computed: {
    prev () {
      const prev = this.$page.frontmatter.prev
      let prevx = null
      if (prev === false) {
        return
      } else if (prev) {
        prevx = resolvePage(this.$site.pages, prev, this.$route.path)
      } else {
        prevx = resolvePrev(this.$page, this.sidebarItems)
      }
      if(prevx){
        prevx.title = prevx.title.replace('<!--#new-->','').replace('<!--#update-->','')
      }
      return prevx
    },
    next () {
      const next = this.$page.frontmatter.next
      let netx = null
      if (next === false) {
        return
      } else if (next) {
        netx = resolvePage(this.$site.pages, next, this.$route.path)
      } else {
        netx = resolveNext(this.$page, this.sidebarItems)
      }
      if(netx){
        netx.title = netx.title.replace('<!--#new-->','').replace('<!--#update-->','')
      }
      return netx
    },
    editLink () {
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
        const base = outboundRE.test(docsRepo)
          ? docsRepo
          : `https://github.com/${docsRepo}`
        return (
          base.replace(endingSlashRE, '') +
          `/edit/${docsBranch}/` +
          docsDir.replace(endingSlashRE, '') +
          path
        )
      }
    },
    editLinkText () {
      return (
        this.$themeLocaleConfig.editLinkText ||
        this.$site.themeConfig.editLinkText ||
        `Edit this page`
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
  items.forEach(item => {
    if (item.type === 'group') {
      res.push(...item.children || [])
    } else {
      res.push(item)
    }
  })
  for (let i = 0; i < res.length; i++) {
    const cur = res[i]
    if (cur.type === 'page' && cur.path === page.path) {
      return res[i + offset]
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'


.contentx-enter-active, .contentx-leave-active {
  transition: all .250s;

}
.contentx-enter /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  position: absolute !important;
  transform: translate(-100%) !important;
}
.contentx-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  position: absolute !important;
  transform: translate(100%) !important;
}
.color {
  /* background: radial-gradient(ellipse at 70% 70%,rgba(var(--morado),1) 8%,rgb(198, 45, 191) 42%,rgb(250, 178, 97) 58%); */
  /* background: linear-gradient(45deg, rgba(var(--morado),1) 0%,rgb(198, 45, 191) 50%, rgb(250, 178, 97) 100%); */
  padding-bottom: 30px;
  width: 110%;
  height: 500px;
  position: absolute;
  left: -5%;
  top: 0px;
  /* top: -110px; */
  display: block;
  /* transform: translate(0,-200px); */
  z-index: 100;
  transform: rotate(-5deg) translate(0,-250px);
  border-radius: 50%;
  /* box-shadow: 0px 0px 30px 0px rgba(var(--morado),.5); */
  overflow: hidden;
}
.colorMover {
  position: absolute;
  margin-left: -25%;
  padding-bottom: 75%;
    padding-top: 75%;
  margin-top: -75%;
  animation: GradientRotation 15s steps(120) infinite;
  width: 150vw;
  height: 150vh;
  background: radial-gradient(ellipse at 70% 70%,$accentColor 8%,rgb(198, 45, 191) 42%,rgb(250, 178, 97) 58%);
}

@keyframes GradientRotation {
  0% {
    /* -webkit-transform: rotate(0deg); */
    transform: rotate(0deg);
  }
  100% {
    /* -webkit-transform: rotate(360deg); */
    transform: rotate(360deg);
  }
}
.color::after {
  position: absolute;
  top: 0px;
  left: 100px;
  content: '';
  width: 0px;
  height: 0px;
  box-shadow: inset 0px 0px 20px 0px rgb(255, 255, 255);
  border-radius: 50%;
  animation: gota 6s ease infinite;
  display: block;
}

.content:not(.custom)
  display: block;
  position: relative;
  z-index: 200;
.page
  overflow: hidden;
  display: block;
  position: relative;
  z-index: 5;
  // padding-bottom 2rem
  background: rgb(252, 252, 252)
.edit-link.content
  padding: 2rem 4rem !important;
  padding-top 0 !important
  display: flex;
  align-items: center;
  justify-content: flex-end;
  a
    margin-top: 0px !important
    margin-right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color lighten($textColor, 25%)

.page-nav.content
  padding-top 1rem !important
  padding-bottom 0 !important
  .inner
    min-height 2rem
    margin-top 0 !important
    border-top 1px solid $borderColor
    padding-top 1rem
    display: flex;
    align-items: center;
    justify-content: space-between;
    span
      padding: 10px;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
      background: rgb(255, 255, 255);
      display: flex;
      align-items: center;
      justify-content: center;
      float: left;
      border-radius: 10px;
      a
        transition: all .250s ease
    i
      font-size: 26px;
      display: inline-block;
      color: $accentColor
  .next
    float right
    i
      float: right;
.page
  .content
    p
      background: rgb(252, 252, 252)
      padding: 10px;
      border-radius: 10px;
      margin-top: 6px;
    h1
      background: rgb(255, 255, 255)
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1)
      padding: 15px
      text-align: center;
      color: $accentColor
      border-radius: 0px
      font-size: 30px;
      a
        margin-left: 10px
.header-anchor
  transition: all .3s ease !important;

@media (max-width: 700px)
  .content
    width 100% !important;
@media (max-width: 550px)
  .page-nav.content
    span
      font-size: 12px !important
  .color
    display: none;
  .edit-link
    text-align: center;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
</style>
