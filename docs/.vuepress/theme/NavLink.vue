<template>
  <router-link
    class="nav-link"
    :to="link"
    v-if="!isExternal(link)"
    :exact="link === '/'"
  >{{ item.text }}</router-link>
  <a
    v-else
    :href="link"
    class="nav-link"
    :class="{new: item.new}"
    :target="isMailto(link) ? null : '_blank'"
    :rel="isMailto(link) ? null : 'noopener noreferrer'"
  >{{ item.text }}
  </a>
</template>

<script>
import { isExternal, isMailto, ensureExt } from './util'

export default {
  props: {
    item: {
      required: true
    }
  },
  computed: {
    link() {
      return ensureExt(this.item.link)
    }
  },
  methods: {
    isExternal,
    isMailto,
  }
}
</script>
<style lang="stylus" scoped>
.new
  position relative
  font-weight bold
  &:before
    position absolute
    top 0px
    content 'New'
    right -5px
    background #5b3cc4
    color rgb(255,255,255)
    font-size .6rem
    font-weight normal
    padding 0px 5px
    line-height 1rem
    border-radius 0px 0px 8px 8px
</style>
