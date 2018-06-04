<template>
  <transition name="dropdown">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'SidebarGroup',
  methods: {
    setHeight (items) {
      // explicitly set height so that it can be transitioned
      items.style.height = items.scrollHeight + 'px'
    },
    unsetHeight (items) {
      items.style.height = ''
    }
  }
}
</script>

<style lang="stylus">
// .dropdown-enter, .dropdown-leave-to
//   height 0 !important
  .dropdown-enter-active, .dropdown-leave-active {
    transition: all .2s;
  }
  .dropdown-enter, .dropdown-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translate(0,-10px);
  }
</style>
