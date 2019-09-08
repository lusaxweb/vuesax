<template>
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
  >
    <div
      v-show="typeof value == 'boolean' ? value : true"
      ref="component"
      :class="Class"
      class="vs-alert"
      @click="handleClick"
    >
      <div ref="content" class="vs-alert__content">
        <div
          v-if="$slots.icon"
          class="vs-alert__icon">
          <slot name="icon" />
        </div>

        <div class="vs-alert__content__text">
          <header v-if="$slots.header">
            <slot name="header" />

            <div v-if="contentHidden">
              <slot
                v-if="$slots['hidden-icon']"
                name="hidden-icon"
              />

              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <path d="M16.293 9.293L12 13.586 7.707 9.293 6.293 10.707 12 16.414 17.707 10.707z" />
              </svg>
            </div>
          </header>

          <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
          >
            <div v-show="typeof contentHidden == 'boolean' ? contentHidden ? hidden : true : true && $slots.default">
              <slot />
            </div>
          </transition>
        </div>

        <div
          v-if="$slots.header2 || $slots.content2 || $slots.footer2"
          class="vs-alert__content__text"
        >
          <header v-if="$slots.header2">
            <slot name="header2" />

            <div v-if="contentHidden">
              <slot
                v-if="$slots['hidden-icon']"
                name="hidden-icon" />

              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <path d="M16.293 9.293L12 13.586 7.707 9.293 6.293 10.707 12 16.414 17.707 10.707z" />
              </svg>
            </div>
          </header>

          <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
          >
            <div v-show="typeof contentHidden == 'boolean' ? contentHidden ? hidden : true : true && $slots.default">
              <slot name="content2" />
            </div>
          </transition>
        </div>
      </div>

      <footer v-if="$slots.footer">
        <slot name="footer" />
      </footer>

      <footer v-if="$slots.footer2">
        <slot name="footer2" />
      </footer>



      <div
        v-if="closable"
        class="vs-alert__close"
      >
        <slot
          v-if="$slots.close"
          name="close"
        />

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          @click="handleClose"
        >
          <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" />
        </svg>
      </div>
    </div>
  </transition>
</template>
<script>
import globalProps from '../../vuesax/mixins/props'
import { isColor, css } from '../../vuesax/utils'
import { setColor } from '../../vuesax/vsFunctions'
import Color from 'color'
export default {
  name: 'VsAlert',
  mixins: [globalProps],

  props:{
    value: {
      default: null,
      type: [Boolean]
    },
    contentHidden: {
      default: null,
      type: [Boolean]
    },
    closable: {
      default: false,
      type: [Boolean]
    }
  },



  data:()=>({
    hidden: false
  }),

  computed:{
    Class() {
      return [
        { [`vs-alert--content__footer`] : this.$slots.footer || this.$slots.footer2 },
        { [`vs-alert--content-hidden`] : !!this.contentHidden },
        { [`vs-alert--content-hidden-open`] : this.hidden },
        { [`vs-alert--closable`] : typeof this.value == 'boolean' },
        { [`vs-alert--two__content`] : this.$slots.header2 || this.$slots.content2 || this.$slots.footer2 },
      ]
    }
  },

  mounted() {
    if(this.$el && this.value && !this.contentHidden) {
      let h = this.$el.scrollHeight
      this.$el.style.maxHeight = h + 'px'
    }

    let _color = this.color

    if(!this.color) {
      _color = 'primary'
    }

    if(!isColor(_color)) {
      let colorDarken = Color(_color).darken(0.2).rgb().string()
      setColor('text', colorDarken, this.$refs.component)
    } else {
      let vsColor = `rgb(${getComputedStyle(this.$refs.component).getPropertyValue('--vs-color')})`


      let colorDarken = Color(vsColor).darken(0.2).rgb().string()
      setColor('text', colorDarken, this.$refs.component)
    }
  },

  methods:{
    handleClick(evt) {
      this.$emit('click', evt)
      if(this.contentHidden) {
        this.hidden = !this.hidden
      }
    },
    handleClose() {
      this.$emit('input', false)
      this.$emit('change', false)
    },
    // animation
    beforeEnter(el) {
      el.style.maxHeight = '0px'
    },
    enter(el, done){
      let h = el.scrollHeight

      if(el != this.$el) {
        el.style.maxHeight = h + 'px'
        this.$el.style.maxHeight = this.$el.scrollHeight + h + 'px'
      } else {
        el.style.maxHeight = h + 'px'
      }

      done()
    },
    leave(el, done) {
      el.style.maxHeight = '0px'
      setTimeout(() => {
        done()
      }, 250);
    },
  }
}
</script>
<style lang="stylus">
  @import "../../vuesax/style/imports"
  @import "./main"
</style>
