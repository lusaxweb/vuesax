<template>
  <div
    class="dropdown-wrapper"
    :class="{ open }"
  >
    <a
      class="dropdown-title"
      @click="toggle"
    >
      <span class="title">{{ item.text }}</span>
      <i class='arrow bx bx-chevron-down' ></i>
      <!-- <span
        class="arrow flaticon-down"
      ></span> -->
        <!-- :class="open ? 'down' : 'right'" -->
    </a>

    <DropdownTransition>
      <ul
        class="nav-dropdown"
      >
        <!-- v-show="open" -->
        <li
          class="dropdown-item"
          :key="subItem.link || index"
          v-for="(subItem, index) in item.items"
        >
          <h4 v-if="subItem.type === 'links'">{{ subItem.text }}</h4>

          <ul
            class="dropdown-subitem-wrapper"
            v-if="subItem.type === 'links'"
          >
            <li
              class="dropdown-subitem"
              :key="childSubItem.link"
              v-for="childSubItem in subItem.items"
            >
              <NavLink :item="childSubItem"/>
            </li>
          </ul>

          <NavLink
            v-else
            :item="subItem"
          />
        </li>
      </ul>
    </DropdownTransition>
  </div>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import DropdownTransition from '@theme/components/DropdownTransition.vue'

export default {
  components: { NavLink, DropdownTransition },

  data () {
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
    toggle () {
      this.open = !this.open
    }
  }
}
</script>

<style lang="stylus">
.dropdown-wrapper
  cursor pointer
  .dropdown-title
    display flex
    align-items center
    justify-content center
    padding 14px
    .arrow
      font-size .85rem !important
    &:hover
      border-color transparent
    .arrow
      vertical-align middle
      margin-top -1px
      margin-left 0.3rem
      border-radius 4px
  .nav-dropdown
    .dropdown-item
      color inherit
      line-height 1.7rem
      h4
        margin 0.45rem 0 0
        border-top 1px solid #eee
        padding 0.45rem 1.5rem 0 1.25rem
        color rgb(0,0,0)
      .dropdown-subitem-wrapper
        padding 0
        list-style none
        .dropdown-subitem
          font-size 0.9em
      a
        display block
        line-height 1.7rem
        position relative
        border-bottom none
        font-weight 400
        margin-bottom 0
        padding 0 1.5rem 0 1.25rem
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
      transition height .1s ease-out
      overflow hidden
      .dropdown-item
        h4
          border-top 0
          margin-top 0
          padding-top 0
        h4, & > a
          font-size 15px
          line-height 2rem
        .dropdown-subitem
          font-size 14px
          padding-left 1rem

@media (min-width: $MQMobile)
  .dropdown-wrapper
    height 1.8rem
    &:hover
      .nav-dropdown
        // override the inline style.
        visibility visible !important
        opacity 1 !important
        transform translate(0%)
      .dropdown-title
        .arrow
          transform rotate(180deg) !important
          background alpha($accentColor,.05)
    .dropdown-title .arrow
      margin-top 4px
      transition all .25s ease
      display block

    .nav-dropdown
      display block
      visibility hidden
      opacity 0
      transform translate(0,-10px)
      transition all .25s ease, opacity .15s ease
      height auto !important
      box-sizing border-box;
      max-height calc(100vh - 2.7rem)
      overflow-y auto
      position absolute
      top calc(100% + 15px)
      right 0
      background-color #fff
      padding 0.6rem 0
      box-shadow 0px 8px 15px -6px rgba(0,0,0,.05)
      text-align left
      border-radius 0px 0px 10px 10px
      white-space nowrap
      margin 0
      overflow hidden
</style>
