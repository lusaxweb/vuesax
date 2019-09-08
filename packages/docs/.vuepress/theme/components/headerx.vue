<template>
  <div ref="header" class="con-header">


  <header class="headerx">
    <div class="content-headerx">

      <h2>{{ $page.title }}</h2>
      <ul>
        <li>
          <a
            target="_blank"
            :href="editLink">
            <i class='bx bxl-dribbble' ></i>
          </a>
        </li>
        <li>
          <button
            @click="$vs.clipboard(`https://lusaxweb.github.io/vuesax${$route.fullPath}`), checkedItem($event)"
            >
            <i class='bx bx-link' ></i>
            <i class='bx bx-check' ></i>
          </button>
        </li>
        <li>
          <button class="content-options">
            <i class='bx bx-share-alt' ></i>

            <ul class="options">
              <li class="tw">
                <a target="_blank" :href="`https://twitter.com/intent/tweet?url=https%3A%2F%2Flusaxweb.github.io%2Fvuesax&text=@vuesax+framework+components+for+vuejs+/+${$page.title}&hashtags=${$page.title},framework,components,vuejs,vuesax,lusaxweb,design,developer,frontend`">
                  <i class='bx bxl-twitter' ></i>
                </a>
              </li>
              <li class="f">
                <a target="_blank" :href="`https://www.facebook.com/sharer.php?u=https%3A%2F%2Flusaxweb.github.io%2Fvuesax%2F`">
                  <i class='bx bxl-facebook-square' ></i>
                </a>
              </li>
              <li class="in">
                <a target="_blank" :href="`https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Flusaxweb.github.io%2Fvuesax&title=Vuesax+Framework&summary=framework+components+for+vuejs.&source=Vuesax`">
                  <i class='bx bxl-linkedin' ></i>
                </a>

              </li>
              <li class="redit">
                <a target="_blank" :href="`https://www.reddit.com/submit?url=https%3A%2F%2Flusaxweb.github.io%2Fvuesax&title=Vuesax+Framework+components+for+vuejs`">
                  <i class='bx bxl-reddit' ></i>
                </a>
              </li>
            </ul>
          </button>
        </li>
        <li>
          <a
            target="_blank"
            :href="editLink">
            <i class='bx bx-slideshow' ></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            :href="editLink">
            <i class='bx bx-package' ></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            :href="editLink">
            <i class='bx bx-code-alt' ></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            :href="editLink">
            <i class='bx bxs-edit' ></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            :href="`https://github.com/lusaxweb/vuesax/issues/new?title=[${$page.title}] - Your Bug Name&amp;body=**Steps to Reproduce**%0A1. Do something%0A2. Do something else.%0A3. Do one last thing.%0A%0A**Expected**%0AThe ${$page.title} should do this%0A%0A**Result**%0AThe ${$page.title} does not do this%0A%0A**Testcase**%0A(fork this to get started)%0Ahttp://jsfiddle.net/exmple-bug/1/`">
            <i class='bx bx-bug' ></i>
          </a>
        </li>
      </ul>
      </div>
    </header>
    </div>
</template>
<script>
import { resolvePage, normalize, outboundRE, endingSlashRE } from '../util'
export default {
  computed:{
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
      if(window.pageYOffset + 48 > document.querySelector('h1').offsetTop) {
        this.$refs.header.classList.add('fixed')
        document.querySelector('.navbar').classList.add('fixed')
      } else {
        document.querySelector('.navbar').classList.remove('fixed')
        this.$refs.header.classList.remove('fixed')
      }
    })
  },
  methods: {
    checkedItem(evt) {
      let el = evt.target
      el.classList.add('checked')
      setTimeout(() => {
        el.classList.remove('checked')
      }, 600);
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
</script>
<style lang="stylus">
.con-header
  width 100%
  padding-left 15rem
  padding-right 8.5rem
  position absolute
  top 115px
  z-index 4000
  display flex
  align-items center
  justify-content center
  flex-direction column

  &:after
    width 0%
    height 1px
    background rgba(0,0,0,.02)
    // box-shadow 0px 0px 5px 0px rgba(0,0,0,.1)
    left calc(50% + 3.5rem)
    transform translate(-50%)
    position absolute
    top 0px
    content ''
    transition all .0s ease
  &.fixed
    position fixed
    top 48px
    // box-shadow 0px 15px 15px -15px rgba(0,0,0,0.03)
    // &:after
    //   width 60%
    //   transition all .3s ease
    .headerx
      // background rgb(255,255,255)
      background #fdfdfd
      border-radius 0px 0px 0px 0px
      // box-shadow 0px 15px 15px -15px rgba(0,0,0,0.03)
      box-shadow 0px 15px 15px -13px rgba(0,0,0,0.03)
      // &:after
      //   left -32px
      //   opacity 1
      // &:before
      //   right -32px
      //   opacity 1

      table
        margin 0px
        width calc(100% - 20px)
        margin 0px 10px
        display table
        tr
          width 100%
          border 0px !important
          th
            font-size .8rem
            font-weight normal
            // background #f5f7fb
            border 0px !important
    h2
      opacity 1
      transform translate(0)
      transition all .25s ease .15s
      padding-left 20px
    ul:not(.options)
      padding 3px 0px !important
      // border-left 1px solid rgba(0,0,0,0.03)
      // border-right 1px solid rgba(0,0,0,0.03)
      opacity .6
      &:hover
        opacity 1
  h2
    opacity 0
    transform translate(0,-20px)
    margin 0px
    padding 0px
    padding-left 20px
    display flex
    align-items center
    justify-content center
    position relative
    font-size 1.15rem

.headerx
  display block
  padding-bottom 0px
  width 100%
  position relative
  max-width 900px
  padding 0rem 2.5rem
  flex-direction column
  .content-headerx
    display flex
    justify-content space-between
    align-items center
  &:after
    content ''
    position absolute
    width 20px
    height 20px
    left 0px
    top -15px
    border-radius 0% 70%
    border 15px solid rgba(255,255,255,1)
    border-bottom 15px solid rgba(0,0,0,0)
    border-left 15px solid rgba(0,0,0,0)
    opacity 0
  &:before
    content ''
    position absolute
    width 20px
    height 20px
    right 0px
    top -15px
    border-radius 70% 0%
    border 15px solid rgba(255,255,255,1)
    border-bottom 15px solid rgba(0,0,0,0)
    border-right 15px solid rgba(0,0,0,0)
    opacity 0
  .options
    position absolute
    top 30px
    left 0px
    display flex
    align-items center
    justify-content center
    flex-direction column
    height 0px
    padding-left 0px
    background rgb(255,255,255)
    border-radius 0px 0px 8px 8px
    box-shadow 0px 3px 10px 0px rgba(0,0,0,.04)
    opacity 0
    visibility hidden
    transition all .25s ease
    z-index 100
    overflow hidden
    li
      font-size 1rem
      margin 0px !important
      position relative
      display block
      a
        position relative
        width 30px
        height 30px
        display flex
        align-items center
        justify-content center
        color $textColor
      &:hover
        &.f
          a
            color #3b5998
        &.tw
          a
            color #55acee
        &.in
          a
            color #007bb5
        &.redit
          a
            color #ff4500
  ul:not(.options)
    margin 0px

    // transform translate(0,42px)
    display flex
    align-items center
    justify-content flex-end
    position relative
    max-width 900px
    transition all .25s ease
    padding 0px
    border-left 1px solid rgba(0,0,0,0)
    border-right 1px solid rgba(0,0,0,0)
    >li
      list-style none
      margin 0px 1px
      cursor pointer
      position relative
      >a, button
        background transparent
        border 0px
        width 30px
        height 30px
        display flex
        align-items center
        justify-content center
        border-radius 8px
        transition all .25s ease
        color $textColor
        cursor pointer
        outline none
        box-sizing border-box
        font-size 1rem
        transform rotate(0deg)
        position relative

        i
          pointer-events none
          position absolute
          transition all .25s ease
          z-index 200
          &.bx-check
            opacity 0
            transform scale(.8)
        &.checked
          transform rotate(360deg)
          border-radius 50%;

          .bx
            opacity 0
          .bx-check
            opacity 1 !important
            transform scale(1.2)
            color rgb(70, 201, 58) !important
        &:hover
          box-shadow 0px 3px 10px 0px rgba(0,0,0,.04)
          background rgb(255,255,255)
        &.content-options
          &:hover
            border-radius 5px 5px 0px 0px
            .options
              opacity 1
              height 120px
              visibility visible
              top 30px
        span
          pointer-events none
          &:before
            font-size .95rem
</style>

