<template>
  <div
    ref="component"
    :class="Class"
    :style="Style"
    class="vs vs-avatar"
    v-bind="$props"
    v-on="Listeners"
  >
    <!-- icon user -->
    <svg
      v-if="!$slots.default"
      class="vs-avatar__svg-user"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <circle
        fill="none"
        cx="12"
        cy="7"
        r="3"
      />
      <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
    </svg>

    <div
      v-if="history"
      class="vs-avatar__history"
    />

    <slot v-if="!text" />

    <span v-else>
      {{ text }}
    </span>

    <span
      v-if="$slots.badge || badge"
      :class="{
        'vs-avatar__badge--content': $slots.badge
      }"
      class="vs-avatar__badge"
    >
      <slot name="badge" />
    </span>

    <span
      v-if="typing"
      class="vs-avatar__typing">
      <span class="vs-avatar__typing-circle vs-avatar__typing-circle--1" />
      <span class="vs-avatar__typing-circle vs-avatar__typing-circle--2" />
      <span class="vs-avatar__typing-circle vs-avatar__typing-circle--3" />
    </span>

    <span
      v-if="loading"
      class="vs-avatar__loading"
    >
      <span class="vs-avatar__loading-effect--1 vs-avatar__loading-effect" />
      <span class="vs-avatar__loading-effect--2 vs-avatar__loading-effect" />
    </span>

    <span
      v-if="$slots.verified || verified"
      class="vs-avatar__verified"
    >
      <svg
        v-if="verified"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z" />
      </svg>

      <slot
        v-else
        name="verified"
      />
    </span>

    <span
      v-if="$slots.social"
      class="vs-avatar__social"
    >
      <slot name="social" />
    </span>
  </div>
</template>
<script>
import globalProps from '../../vuesax/mixins/props'
import { setColor } from '../../vuesax/vsFunctions'
export default {
  name: 'VsAvatar',
  mixins: [globalProps],
  inheritAttrs: false,

  props:{
    badge: {
      default: null,
      type: String
    },
    to:{
      default: null,
      type: String
    },
    href:{
      default: null,
      type:String
    },
    blank:{
      default:false,
      type:Boolean
    },
    circle:{
      default:false,
      type:Boolean
    },
    verified:{
      default:false,
      type:Boolean
    },
    history:{
      default: null,
      type: [String, Boolean]
    },
    typing:{
      default: false,
      type: [Boolean, String]
    }
  },

  data:() => ({
    hasImg: false,
    text: null,
    fontSize: null,
  }),

  computed: {
    Style() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`
      }
    },
    Class() {
      return [
        { 'vs-avatar--social' : this.$slots.social },
        { 'vs-avatar--disabled' : this.disabled },
        { 'vs-avatar--loading' : this.loading },
        { 'vs-avatar--content' : this.$slots.default },
        { 'vs-avatar--img' : this.hasImg },
        { 'vs-avatar--circle' : this.circle },
        { [`vs-avatar--${this.size}`] : !!this.size },
        { [`vs-avatar--${this.$vsTheme}`]: !!this.$vsTheme },
        { [`vs-avatar--${this.kind}`] : !!this.kind },
        { [`vs-avatar--${this.fontSize}`] : !!this.fontSize },
        this.$vsGlobalClass,
      ]
    },
    Listeners() {
      return {
        ...this.$listeners,
        click: (evt) => {
          this.handleClick(evt)
        },
        mousedown: (evt) => {
          this.$vs.ripple(evt, this.$refs.component)
        }
      }
    }
  },

  watch:{
    badge() {
      this.setBadge()
    },
    history() {
      this.setHistory()
    },
    typing() {
      this.setTyping()
    }
  },

  mounted() {
    this.changeFontSize()
    this.setBadge()
    this.setHistory()
    this.setTyping()
    let img = this.$refs.component.querySelector('img')
    if(img) {
      this.hasImg = true
      this.cloneImage(img)
    }
  },
  methods:{
    changeFontSize() {
      if(this.$slots.hasOwnProperty('default')) {
        if(typeof this.$slots.default[0].text == 'string') {
          let text = this.$slots.default[0].text.trim()
          if(text.length <= 5) {
            this.text = text
            this.fontSize = text.length
          } else {
            let exp = /\s/g
            var letras = ''
            if(exp.test(text)){
              text.split(exp).forEach((word)=>{
                letras += word[0].toUpperCase()
              })
            } else {
              letras = text[0].toUpperCase()
            }
            this.text = letras.length>5?letras[0]:letras
            this.fontSize = letras.length>5?0:letras.length
          }
        }
      }
    },
    setBadge() {
      setColor('badge', this.badge, this.$refs.component)
    },
    setHistory() {
      // if(typeof this.history == 'boolean') this.history = 'primary'
      setColor('history', this.history, this.$refs.component)
    },
    setTyping() {
      setColor('typing', this.typing, this.$refs.component)
    },
    cloneImage(img) {
      let cloneImg = img.cloneNode(true)
      cloneImg.classList.add('vs-avatar__clone-img')
      this.$refs.component.appendChild(cloneImg)
    },
    handleClick(evt) {
      this.$emit('click',event)
      /**
       * soporte para el uso de vue-router y links html
       */
      if(this.to) {
        this.routerPush()
      } else if (this.href) {
        this.openHref()
      }

    },
    routerPush() {
      this.$router.push(this.to)
    },
    openHref() {
      this.blank ? window.open(this.href) : window.location.href = this.href
    }
  }
}
</script>

<style lang="stylus">
  @import "../../vuesax/style/imports"
  @import "./main"
</style>
