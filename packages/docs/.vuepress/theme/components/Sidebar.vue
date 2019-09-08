<template>
  <div class="content-sidebar">
    <svg class="goo-filter" viewBox="0 0 1 1">
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -20" result="goo" />
        <feBlend in="SourceGraphic" in2="goo" />
      </filter>
    </svg>

    <div class="background">
      <div class="bg-content">
        <div class="drip"></div>
        <div class="drip"></div>
        <div class="drip"></div>
      </div>
      <div class="bg-description">
        <div class="drip"></div>
        <div class="drip"></div>
        <div class="drip"></div>
      </div>
    </div>

    <aside class="sidebar">
        <SearchBox placeholder="Search"/>
        <NavLinks/>
        <slot name="top"/>

        <SidebarLinks :depth="0" :items="items"/>
        <slot name="bottom"/>
    </aside>
  </div>
</template>

<script>
import SidebarLinks from '@theme/components/SidebarLinks.vue'
import NavLinks from '@theme/components/NavLinks.vue'
import SearchBox from '@theme/components/SearchBox.vue'
export default {
  name: 'Sidebar',

  components: { SidebarLinks, NavLinks, SearchBox },

  props: ['items'],
}
</script>

<style lang="stylus">

.goo-filter { position: absolute; top: 0; left: 0; visibility: hidden; }

.sidebar
  position relative

  ul
    padding 0
    margin 0
    list-style-type none
    transition all .25s ease
  a
    display inline-block
  .nav-links
    display none
    border-bottom 1px solid $borderColor
    padding 0.5rem 0 0.75rem 0
    a
      font-weight 600
    .nav-item, .repo-link
      display block
      line-height 1.25rem
      font-size 1.1em
      padding 0.5rem 0 0.5rem 1.5rem
  & > .sidebar-links
    // padding 1.5rem 0
    & > li > a.sidebar-link
      font-size 1em
      line-height 1.7
      font-weight 500
    // & > li:not(:first-child)
    //   margin-top .75rem

@media (max-width: $MQMobile)
  .sidebar
    .nav-links
      display block
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)
    & > .sidebar-links
      padding 1rem 0
</style>
