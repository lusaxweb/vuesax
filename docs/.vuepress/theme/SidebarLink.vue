<script>
import { isActive, hashRE, groupHeaders } from './util'

export default {
  functional: true,
  props: ['item'],
  render (h, { parent: { $page, $site, $route }, props: { item }}) {
    // use custom active class matching logic
    // due to edge case of paths ending with / + hash
    const selfActive = isActive($route, item.path)
    // for sidebar: auto pages, a hash link should be active if one of its child
    // matches
    const active = item.type === 'auto'
      ? selfActive || item.children.some(c => isActive($route, item.basePath + '#' + c.slug))
      : selfActive
    const link = renderLink(h, item.path, item.title || item.path, active)
    const configDepth = $page.frontmatter.sidebarDepth != null
      ? $page.frontmatter.sidebarDepth
      : $site.themeConfig.sidebarDepth
    const maxDepth = configDepth == null ? 1 : configDepth
    if (item.type === 'auto') {
      return [link, renderChildren(h, item.children, item.basePath, $route, maxDepth, null ,item.frontmatter.tag)]
    } else if (active && item.headers && !hashRE.test(item.path)) {
      const children = groupHeaders(item.headers)
      return [link, renderChildren(h, children, item.path, $route, maxDepth, null ,item.frontmatter.tag)]
    } else {
      return link
    }
  }
}

function renderLink (h, to, text, active) {
  const title = text.replace('#new','').replace('#update','')
  let tag = null
  if(text.search('#new')!=-1){
    tag = 'new'
  } else if (text.search('#update')!=-1) {
    tag = 'update'
  }
  return h('router-link', {
    props: {
      to,
      activeClass: '',
      exactActiveClass: '',
    },
    class: {
      active,
      'sidebar-link': true
    }
  }, [
    title,
    tag?h('span', {class: `span-etiqueta span-${tag}`}, tag):null
  ])
}

function renderChildren (h, children, path, route, maxDepth, depth = 1, tag) {

  if (!children || depth > maxDepth) return null
  return h('ul', { class: 'sidebar-sub-headers' }, children.map(c => {
    const active = isActive(route, path + '#' + c.slug)
    const title = c.title.replace('#new','').replace('#update','')
    let tag = null
    if(c.title.search('#new')!=-1){
      tag = 'new'
    } else if (c.title.search('#update')!=-1) {
      tag = 'update'
    }
    return h('li', { class: 'sidebar-sub-header' }, [
      renderLink(h, '#' + c.slug, title, active),
      renderChildren(h, c.children, path, route, maxDepth, depth + 1),
      tag?h('span', {class: `span-etiqueta span-${tag}`}, tag):null
    ])
  }))
}
</script>

<style lang="stylus">
@import './styles/config.styl'

.span-etiqueta
  padding: 1px 5px;
  background: $accentColor
  border-radius: 6px;
  font-size: 10px;
  color: rgb(255, 255, 255);
  text-transform: capitalize;
  position: absolute;
  right: 6px;
  top: 4px;
  // transform: translate(0,-50%);
.sidebar-sub-header
  position: relative;

.sidebar .sidebar-sub-headers
  padding-left 1rem
  font-size 0.95em

a.sidebar-link
  width: 100%
  font-weight 400
  display inline-block
  color $textColor
  border-left 0.25rem solid transparent
  padding 0.35rem 1rem 0.35rem 1.25rem
  line-height 1.4
  transition: all .250s ease;
  &:hover
    color $accentColor
  &.active
    font-weight bold
    color $accentColor
    border-left-color $accentColor
  .sidebar-group &
    padding-left 2rem
  .sidebar-sub-headers &
    padding-top 0.4rem
    padding-bottom 0.4rem
    border-left none
    &.active
      font-weight bold
      border-right: 2px solid $accentColor
</style>
