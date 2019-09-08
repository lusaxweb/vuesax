<script>
import { isActive, hashRE, groupHeaders } from '../util'

export default {
  functional: true,

  props: ['item', 'sidebarDepth'],

  render (h,
    {
      parent: {
        $page,
        $site,
        $route,
        $themeConfig,
        $themeLocaleConfig
      },
      props: {
        item,
        sidebarDepth
      }
    }) {
    // use custom active class matching logic
    // due to edge case of paths ending with / + hash
    const selfActive = isActive($route, item.path)

    // for sidebar: auto pages, a hash link should be active if one of its child
    // matches
    const active = item.type === 'auto'
      ? selfActive || item.children.some(c => isActive($route, item.basePath + '#' + c.slug))
      : selfActive
    const link = renderLink(h, item.path, item.title || item.path, active)

    const configDepth = $page.frontmatter.sidebarDepth
      || sidebarDepth
      || $themeLocaleConfig.sidebarDepth
      || $themeConfig.sidebarDepth

    const maxDepth = configDepth == null ? 1 : configDepth

    const displayAllHeaders = $themeLocaleConfig.displayAllHeaders
      || $themeConfig.displayAllHeaders

    if (item.type === 'auto') {
      return [link, renderChildren(h, item.children, item.basePath, $route, maxDepth)]
    } else if ((active || displayAllHeaders) && item.headers && !hashRE.test(item.path)) {
      const children = groupHeaders(item.headers)
      return [link, renderChildren(h, children, item.path, $route, maxDepth)]
    } else {
      return link
    }
  }
}

function renderLink (h, to, text, active) {
  return h('router-link', {
    props: {
      to,
      activeClass: '',
      exactActiveClass: ''
    },
    class: [
      `link-${text.toLowerCase().replace(/ /g,'-')}`,
      {
        active,
        'sidebar-link': true
      }
    ]
  }, [
    h('span', { class: 'text' }, [text]),
    h('span', { class: 'afterx' }),
    h('span', { class: 'beforex' })
  ])
}

function renderChildren (h, children, path, route, maxDepth, depth = 1) {
  if (!children || depth > maxDepth) return null
  return h('ul', { class: 'sidebar-sub-headers' }, children.map(c => {
    const active = isActive(route, path + '#' + c.slug)
    return h('li', {
        class: 'sidebar-sub-header'
      }, [
      renderLink(h, path + '#' + c.slug, c.title, active),
      renderChildren(h, c.children, path, route, maxDepth, depth + 1)
    ])
  }))
}
</script>

<style lang="stylus">
.sidebar .sidebar-sub-headers
  // padding-left 1rem
  font-size 0.95em

a.sidebar-link
  font-size 1em
  font-weight 400
  display inline-block
  color $textColor
  opacity .5
  padding 0.4rem 1rem 0.35rem 1.25rem
  line-height 1.4
  width: 100%
  box-sizing: border-box
  position relative
  transition all .2s ease, fontWeight 0s
  padding-left 1rem
  display flex !important
  align-items center
  justify-content flex-start

  .badge-link
    position absolute
    width 4px
    height 4px
    background rgba(0,0,0,.2)
    display block
    margin 0px
    border-radius 50%
    // transform translate(3px,-5px)
    right 15px
    z-index 1200
    &.header-badge-link
      width auto
      height auto
      border-radius 10px
      padding 1px 6px
      font-size .55rem
      font-weight 600
      position absolute
      right 10px
      top 50%
      transform translate(0,-50%)
      z-index 1200
      display block
      &.accent
        background alpha($accentColor,.06)
        color $accentColor
      &.tip, &.green, &.success
        background-color alpha(#42b983,.1)
        color #42b983
      &.error, &.danger
        background-color alpha(rgb(255, 71, 87),.1) //#f66
        color rgb(255, 71, 87) //#f66
      &.warning, &.warn, &.yellow
        font-size .6rem
        background alpha(rgb(255, 186, 0),.1)
        color rgb(255, 186, 0)

    &.tip, &.green, &.success
      background-color #42b983
    &.error, &.danger
      background-color rgb(255, 71, 87) //#f66
    &.warning, &.warn, &.yellow
      background-color rgb(255, 186, 0)



  &:active
    opacity .6 !important
  span.text
    z-index 200
    position relative
  &:hover
    // color $accentColor
    opacity 1
  &:after
    content ''
    position absolute
    left -30px
    top 0px
    height 100%
    border-radius 25%
    width 30px
    opacity 0
    background $accentColor
    transition all .25s ease
    box-shadow 0px 0px 20px 0px alpha($accentColor,.5)
  &:before
    content ''
    position absolute
    left 0px
    top 0px
    height 100%
    border-radius 0px 12px 12px 0px
    width 0%
    opacity 1
    background #fdfdfd
    top 50%
    transform translate(0,-50%)
    transition all .25s ease, borderRadius .2s ease .2s
  .afterx
    position absolute
    right -11px
    transform rotate(-30deg)
    top -20px
    width 50px
    height 50px
    border-radius 50%
    border 10px solid rgba(0,0,10,0)
    border-bottom 10px solid #fdfdfd
    // transition top .25s ease .25s, opacity .1s ease .2s
    transition top .25s ease .0s, opacity .1s ease .0s
    // border-left 10px solid #fdfdfd
    opacity 0
  .beforex
    position absolute
    right -12px
    transform rotate(30deg)
    bottom -20px
    width 50px
    height 50px
    border-radius 50%
    border 10px solid rgba(0,0,10,0)
    // border-top 10px solid rgb(0,0,0)
    border-top 10px solid #fdfdfd
    transition bottom .25s ease .0s, opacity .1s ease .0s
    opacity 0
    z-index 10
  &.active
    // font-weight 500
    color $accentColor
    opacity 1
    padding-left 20px !important
    span.text
      color $accentColor

  .sidebar-group &
    padding-left 2rem
  .sidebar-sub-headers &
    padding-top 0.3rem
    padding-bottom 0.3rem
    border-left none
    padding-left 1.5rem
    &.active
      // font-weight 500
      padding-left 30px !important
      &:before
        width 100%
        height 100%
        border-radius 0px
      &:after
        opacity 1
        left -26px
      .afterx
        opacity 1
        top -40px

        transition bottom .25s ease .25s, opacity .1s ease .2s
      .beforex
        opacity 1
        bottom -40px
        transition bottom .25s ease .2s, opacity .1s ease .2s
</style>
