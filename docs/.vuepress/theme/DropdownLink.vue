<template>
  <div class="dropdown-wrapper" :class="{ open }">
    <a class="dropdown-title" @click="toggle">
      <span class="title">{{ item.text }}</span>
      <!-- <span class="arrow" :class="open ? 'down' : 'right'"></span> -->
      <vs-icon class="" icon="keyboard_arrow_down"></vs-icon>
    </a>
    <DropdownTransition>
      <ul class="nav-dropdown">
        <li
        class="dropdown-item"
        v-for="subItem in item.items"
        :key="subItem.link">
          <h4 v-if="subItem.type === 'links'">{{ subItem.text }}</h4>
          <ul class="dropdown-subitem-wrapper" v-if="subItem.type === 'links'">
            <li
            class="dropdown-subitem"
            v-for="childSubItem in subItem.items"
            :key="childSubItem.link">
              <NavLink :item="childSubItem"/>
            </li>
          </ul>
          <NavLink v-else :item="subItem"/>
        </li>
      </ul>
    </DropdownTransition>
  </div>
</template>

<script>
import { isExternal, ensureExt } from './util'
import NavLink from './NavLink.vue'
import DropdownTransition from './DropdownTransition.vue'

export default {
  components: { NavLink, DropdownTransition },
  data() {
    return {
      open: false
    }
  },
  props: {
    item: {
      required: true
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'

.dropdown-wrapper
  .dropdown-title
    display flex
    align-items center
    justify-content center
    i
      transition all .25s ease
    &:hover
      i
        transform rotate(180deg)
    // display block
    // &:hover
    //   border-color transparent
    // .arrow
    //   vertical-align middle
    //   margin-top -1px
    //   margin-left 0.4rem
  .nav-dropdown
    .dropdown-item
      color inherit
      line-height 1.5rem
      h4
        margin 0.45rem 0 0
        border-top 1px solid #eee
        padding 0.45rem 1.5rem 0 1.25rem
      .dropdown-subitem-wrapper
        padding 0
        list-style none
        .dropdown-subitem
          font-size 0.9em
      a
        display block
        height 1.5rem
        line-height 1.5rem
        position relative
        border-bottom none
        font-weight 400
        margin-bottom 0
        padding 0 1.5rem 0 1.25rem
        font-size .75rem
        &:hover
          color $accentColor
        &.router-link-active
          color $accentColor
          &::after
            content ""
            width 0
            height 0
            border-left 5px solid $accentColor
            border-top 3px solid transparent
            border-bottom 3px solid transparent
            position absolute
            top calc(50% - 2px)
            left 9px
      &:first-child h4
        margin-top 0
        padding-top 0
        border-top 0

@media (max-width: $MQMobile)
  .dropdown-wrapper
    &.open .dropdown-title
      margin-bottom 0.5rem
    .nav-dropdown
      transition all .1s ease-out

      // overflow hidden
      .dropdown-item

        h4
          border-top 0
          margin-top 0
          padding-top 0
        h4, & > a
          font-size 15px
          height 2rem
          line-height 2rem
          &::after
            display: none !important;
        .dropdown-subitem
          font-size 14px
          padding-left 1rem



@media (min-width: $MQMobile)
  .dropdown-wrapper
    height 3rem
    &:hover .nav-dropdown
      // override the inline style.
      // display block !important
      visibility: visible !important;
      transform: translate(0) !important;
      opacity: 1 !important;
    .dropdown-title .arrow
      // make the arrow always down at desktop
      border-left 4px solid transparent
      border-right 4px solid transparent
      border-top 6px solid $arrowBgColor
      border-bottom 0
    .nav-dropdown
      // display none
      visibility: hidden;
      opacity: 0;
      transform: translate(0,-10px);
      // Avoid height shaked by clicking
      height auto !important
      box-sizing border-box;
      max-height calc(100vh - 2.7rem)
      overflow-y auto
      position absolute
      top 100%
      right 0
      background-color #fff
      padding 0.6rem 0
      box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.060);
      // border 1px solid #ddd
      // border-bottom-color #ccc
      text-align left
      border-radius 0px 0px 8px 8px
      white-space nowrap
      margin 0
      transition: all .3s ease;
      a
        &::after
          display: none !important;
</style>
