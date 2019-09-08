<template>
  <div
    class="btn"
    ref="btn">

        <!-- @click.native="changeAds" -->
      <router-link
        class="nav-link"
        :to="link"
        v-if="!isExternal(link)"
        :exact="exact"
      >
        <span ref="spanx">
          {{ item.text }}
        </span>
        <!-- <div ref="after" class="after" /> -->
      </router-link>
      <a
        v-else
        :href="link"
        class="nav-link external"
        :target="isMailto(link) || isTel(link) ? null : '_blank'"
        :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
      >
        <span ref="spanx">
          {{ item.text }}
        </span>
        <!-- <div ref="after" class="after" /> -->
        <!-- <OutboundLink/> -->
      </a>
  </div>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from '../util'

export default {
  props: {
    item: {
      required: true
    }
  },

  computed: {
    link () {
      return ensureExt(this.item.link)
    },

    exact () {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)
      }
      return this.link === '/'
    }
  },

  methods: {
    isExternal,
    isMailto,
    isTel,
    changeAds(){
      if (!document.querySelector('#carbonads')) return;
      if (typeof _carbonads !== 'undefined') _carbonads.refresh();
    },
    mousemove(e) {
      let span = this.$refs.spanx
      span.style.transform = `translate(${(e.layerX - e.target.offsetWidth/2)/13}px, ${(e.layerY - e.target.offsetHeight/2)/6}px)`
    },
    mouseleave() {
      let span = this.$refs.spanx
      span.style.transition = `transform .25s ease`
      span.style.transform = `translate(0px, 0px)`

      setTimeout(() => {
        span.style.transition = `transform 0s ease`
      }, 250);
    }
  }
}
</script>
