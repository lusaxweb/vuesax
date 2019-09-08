<template>
  <div
    ref="component"
    class="vs-breadcrumb">
    <div class="vs-breadcrumb__divider">
      <slot name="divider" />
    </div>

    <slot />
  </div>
</template>

<script>
import globalProps from '../../vuesax/mixins/props'
export default {
  name: 'VsBreadcrumb',
  mixins: [globalProps],

  methods:{
    getDivider() {
      return this.$slots.divider || '/'
    }
  }
}
</script>

<style lang="stylus">
  @import "../../vuesax/style/imports"
  @import "./main"
</style>
