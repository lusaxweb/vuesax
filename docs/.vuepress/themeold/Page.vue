<template>
  <transition name="fade">
  <div v-if="this.$page.frontmatter.home" class="page">
    <div class="color">
      <div class="colorMover">

      </div>
    </div>
    <transition name="fade">
    <Content :custom="false"/>
    </transition>
    <div class="content edit-link" v-if="editLink">
      <a :href="editLink" target="_blank" rel="noopener noreferrer">{{ editLinkText }}</a>
      <OutboundLink/>
    </div>
    <div class="content">
      <api />
      <contributors :title="title" :repo="this.$site.themeConfig.repo" :contributors="contributors"/>
    </div>
    <div class="content page-nav" v-if="prev || next">
      <p class="inner">
        <span v-if="prev" class="prev">
           <i class="material-icons">keyboard_arrow_left</i><router-link v-if="prev" class="prev" :to="prev.path">
            {{ prev.title || prev.path }}
          </router-link>
        </span>
        <span v-if="next" class="next">
          <router-link v-if="next" :to="next.path">
            {{ next.title || next.path }}
          </router-link> <i class="material-icons">keyboard_arrow_right</i>
        </span>
      </p>
    </div>

    <Footer/>
  </div>
  </transition>
</template>

<script>
import api from './api.vue'
import contributors from './contributors.vue'
import OutboundLink from './OutboundLink.vue'
import { resolvePage, normalize, outboundRE, endingSlashRE } from './util'
import easing from './easing.js'
import Footer from './Footer.vue'
export default {
  components: { OutboundLink, api, Footer, contributors },
  props: ['sidebarItems'],
  computed: {
    contributors() {
      return this.$page.frontmatter.contributors
    },
    title() {
      return this.$page.frontmatter.titleContributors
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
      const {
        repo,
        editLinks,
        docsDir = '',
        docsBranch = 'master'
      } = this.$site.themeConfig

      let path = normalize(this.$page.path)
      if (endingSlashRE.test(path)) {
        path += 'README.md'
      } else {
        path += '.md'
      }

      if (repo && editLinks) {
        const base = outboundRE.test(repo)
          ? repo
          : `https://github.com/${repo}`
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
  },
  mounted(){
    this.linksx()
  },
  updated(){

    this.linksx()
  },
  methods:{
    linksx(){
      let _this = this
      let ax = document.querySelectorAll('.header-anchor')
      ax.forEach((item)=>{
        item.addEventListener('click',function(event){
          event.preventDefault()
          _this.irSection(event.target.hash)
        })
      })
      let am = document.querySelectorAll('.sidebar-link')
      am.forEach((item)=>{
        item.__vue__.$listener = []
        // getEventListeners().click.forEach((e)=>{e.remove()})
        item.addEventListener('click',function(event){
          event.preventDefault()
          // _this.irSection(event.target.hash)
        })
      })
    },
    irSection(idx){
      let conx = document.getElementById(idx.replace('#',''));
      scrollTo(document.documentElement, conx.offsetTop, 500);


      function scrollTo(element, to, duration) {
        var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

        var animateScroll = function(){
          currentTime += increment;
          var val = easing.easeInOutCirc(currentTime, start, change, duration);
          element.scrollTop = val;
          if(currentTime < duration) {
            setTimeout(animateScroll, increment);
          }
        };
        animateScroll();


      }

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

</style>
