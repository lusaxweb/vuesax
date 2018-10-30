<template>
  <div :class="{'activeSuggestion': activeSuggestion}" class="sidebar">
    <div class="c-sidebar">

    <slot name="top"/>
    <div class="sponsor-sidebar">
      <h4>Sponsors</h4>
      <ul>
        <li title="Become a Sponsor" v-for="sponsor in 3">
          <a target="_blank" href="https://www.patreon.com/bePatron?c=1567892">
            <vs-icon v-if="!sponsor.img" class="" icon="add"></vs-icon>
          </a>
        </li>
      </ul>
    </div>

    <SearchBox v-if="$site.themeConfig.search !== false"/>

    <NavLinks/>
    <ul class="sidebar-links" v-if="items.length">
      <li v-for="(item, i) in items">
        <SidebarGroup v-if="item.type === 'group'"
          :item="item"
          :first="i === 0"
          :open="i === openGroupIndex"
          :collapsable="item.collapsable"
          @toggle="toggleGroup(i)"/>
        <SidebarLink v-else :item="item"/>
      </li>
    </ul>
    <slot name="bottom"/>
  </div>
  </div>
</template>

<script>
import SidebarGroup from './SidebarGroup.vue'
import SidebarLink, { groupHeaders } from './SidebarLink.vue'
import NavLinks from './NavLinks.vue'
import SearchBox from './SearchBox.vue'
import { isActive, resolveSidebarItems } from './util'

export default {
  components: { SidebarGroup, SidebarLink, NavLinks, SearchBox },
  props: ['items'],
  data () {
    return {
      openGroupIndex: 0,
      activeSuggestion: false
    }
  },
  created () {
    this.refreshIndex()
  },
  watch: {
    '$route' () {
      this.refreshIndex()
    }
  },
  methods: {
    refreshIndex () {
      const index = resolveOpenGroupIndex(
        this.$route,
        this.items
      )
      if (index > -1) {
        this.openGroupIndex = index
      }
    },
    toggleGroup (index) {
      this.openGroupIndex = index === this.openGroupIndex ? -1 : index
    },
    isActive (page) {
      return isActive(this.$route, page.path)
    }
  }
}

function resolveOpenGroupIndex (route, items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (item.type === 'group' && item.children.some(c => isActive(route, c.path))) {
      return i
    }
  }
  return -1
}
</script>

<style lang="stylus">
@import './styles/config.styl'

.sponsor-sidebar
  padding-bottom 10px
  h4
    padding 10px
  ul
    display flex
    align-items center
    justify-content center
    li
      background transparent
      margin 5px
      margin-top 0px
      border-radius 10px
      border 1px dashed #dcdcdc
      cursor pointer
      transition all .25s ease
      a
        width 50px
        height 50px
        display flex
        align-items center
        justify-content center
        color rgba(0,0,0,.15)
        transition all .25s ease
      &:hover
        border 1px dashed #f96854
        background alpha(#f96854, .13)
        transform translate(0, -3px)
        box-shadow 0px 4px 10px 0px alpha(#f96854, .13)
        a
          color #f96854
.c-sidebar
  width: calc(100% - 5px)
  margin-right: 5px;
  overflow: auto;
  height: calc(100% - 10px);
  margin-top: 5px;
  padding-right: 5px;
.sidebar
  &.activeSuggestion
    .sidebar-links
      filter: blur(3px);
  ul
    padding 0
    margin 0
    list-style-type none
  a
    display inline-block

  .nav-links
    display none
    border-bottom 1px solid $borderColor
    padding 0.5rem 0 0.75rem 0
    a
      font-weight 600
      opacity: 1 !important;
    .nav-item, .repo-link
      display block
      line-height 1.25rem
      font-size 1.1em
      padding 0.5rem 0 0.5rem 1.5rem
  .sidebar-links
    padding 1rem 0
@media (max-width: $MQMobile)
  .sidebar
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.040)
    .nav-links
      display block
    .sidebar-links
      padding 1rem 0 !important
</style>
