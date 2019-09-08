<template>
  <footer class="footerx">

    <div class="con-uls">
      <ul
        :key="index"
        v-for="(ul, index) in uls">
        <li class="title">
          {{ ul.title }}
        </li>
        <li
          :key="index"
          v-for="(li, index) in ul.items"
          >
          <a
            :href="li.link">
            <span>
              {{ li.text }}
            </span>
          </a>
        </li>
      </ul>
    </div>


    <p class="copy">
      © 2019, Lusaxweb.
    </p>
  </footer>
</template>
<script>
export default {
  data:() => ({
    uls:[
      {
        title:'Social',
        items:[
          {
            text:'GitHub',
            link:'https://github.com/lusaxweb/vuesax'
          },
          {
            text:'Discord',
            link:'https://discord.gg/9dsKtvB'
          },
          {
            text:'Twitter',
            link:'https://twitter.com/vuesax'
          },
          {
            text:'Facebook',
            link:'https://www.facebook.com/vuesax/'
          },
          {
            text:'Behance',
            link:'https://www.behance.net/ManuelRovira'
          },
          {
            text:'Dribbble',
            link:'https://dribbble.com/ManuelRovira'
          },
          {
            text:'Codepen',
            link:'https://codepen.io/lusaxweb/'
          },
        ]
      },
      {
        title:'Help',
        items:[
          {
            text:'Issues',
            link:'https://github.com/lusaxweb/vuesax/issues'
          },
          {
            text:'Edit Page',
            link:'https://github.com/lusaxweb/vuesax/tree/master/docs'
          },
          {
            text:'Latest Releases',
            link:'https://github.com/lusaxweb/vuesax/releases'
          },
          {
            text:'Stackoverflow',
            link:'https://stackoverflow.com/questions/tagged/vuesax'
          },
          {
            text:'FAQ',
            link:'https://github.com/lusaxweb/vuesax/wiki'
          },
        ]
      },
      {
        title:'More',
        items:[
          {
            text:'Lusaxweb',
            link:'http://www.lusaxweb.com.ve/'
          },
          {
            text:'Email',
            link:'mailto:vuesax@gmail.com'
          },
          {
            text:'Chat',
            link:'https://gitter.im/vuesax/Lobby'
          },
          {
            text:'Pull request',
            link:'https://github.com/lusaxweb/vuesax/pulls'
          },
          {
            text:'Codepen Template',
            link:'https://codepen.io/lusaxweb/pen/mxMKYr'
          },
        ]
      }
    ]
  })
}
</script>
<style lang="stylus">

.footerx
  width 100%
  position relative
  display block
  background #f5f7fb
  padding-left 16rem
  display flex
  align-items center
  justify-content flex-start
  box-sizing border-box
  // border-top 1px solid rgba(0,0,0,.03)
  &:after
    content ''
    position absolute
    width 50px
    height 50px
    border 20px solid #f5f7fb
    border-radius 0% 50%
    top -70px
    left calc(15rem - 20px)
    border-top 20px solid rgba(0,0,0,0)
    border-right  20px solid rgba(0,0,0,0)
  &:before
    content ''
    position absolute
    width 15rem
    height 400px
    background #f5f7fb
    top -70px
    left 0px
    border-radius 0px 20px 20px 0px
  .copy
    position absolute
    bottom 0px
    right 1rem
    font-size .7rem
    color rgba(0,0,0,.5)
  .con-uls
    display flex
    align-items flex-start
    justify-content center
    ul
      padding 10px 50px
      .title
        font-size 1rem
        padding 4px
        color $textColor
        opacity 1
      li
        list-style none
        font-size .75rem
        a
          color $textColor
          opacity .75
          padding 4px
          display block
          position relative
          span
            display block
            pointer-events none
          &:hover
            color $accentColor
            opacity 1
</style>

