<template lang="html">
    <button 
        :class="buttonClasses"
        :style="buttonStyle"
        v-bind="$attrs"
        v-on="listeners"
        ref="btn"
        type="button"
    >
        <span
            ref="backgroundx"
            :style="stylesBackground"
            class="vs-button-backgroundx vs-button--background">
        </span>

        <vs-icon
            v-if="icon"
            :style="{
                'order':iconAfter?2:0,
                ['margin-' + isRTL('left')]:$slots.default&&!iconAfter?'5px':'0px',
                ['margin-' + isRTL('right')]:$slots.default&&iconAfter?'5px':'0px'
            }"
            :icon-pack="iconPack"
            :icon="icon"
            class="vs-button--icon"
        ></vs-icon>

        <span
            v-if="$slots.default"
            class="vs-button-text vs-button--text"
        >
            <slot />
        </span>

        <span
            ref="linex"
            :style="styleLine"
            class="vs-button-linex" />
    </button>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name:'VsCheckButton',
  inheritAttrs:false,
  props:{
    value: {
        type: Boolean,
        default: false
    },
    lineOrigin:{
      default:'center',
      type:String
    },
    linePosition:{
      default:'bottom',
      type:String
    },
    gradientDirection:{
      default:'30deg',
      type:String
    },
    size:{
      type:String,
      default:null,
    },
    icon:{
      type:String,
      default:null
    },
    iconPack:{
      type:String,
      default:'material-icons'
    },
    iconAfter:{
      default:false,
      type:Boolean
    },
    radius:{
      default:false,
      type:Boolean
    },
    color:{
      default:'primary',
      type:String
    },
  },
  data:()=>({
    isActive:false,
    hoverx:false,
    leftBackgorund:20,
    topBackgorund:20,
    radio:0,
    time:0.3,
    timeOpacity:0.3,
    opacity:1,
    transitioning: false
  }),
  computed:{
    buttonClasses() {
        return [
            'vs-component',
            'vs-button',
            'vs-button-border',
            'vs-button-dark',
            this.value ? 'isActive' : null
        ]
    },
    buttonStyle() {
        let cssColor
        if (this.isColor(this.color)) {
            cssColor = `rgba(var(--vs-${this.color}), 1)`
        } else {
            cssColor = _color.getColor(this.color, 0)
        }
        if (this.value) {
            return {
                borderColor: `${cssColor} !important`
            }
        }
    },
    listeners() {
      return {
        ...this.$listeners,
        click: (event) => this.clickButton(event),
      }
    },
    styles() {
      if(!this.value){
        return {
          background: _color.getColor(this.color,1),
          boxShadow: this.hoverx?`0px 8px 25px -8px ${_color.getColor(this.color,1)}`:null
        }
      } else {
        return {
          border: `1x solid ${_color.getColor(this.color,1)}`,
          background: this.hoverx?_color.getColor(this.color,.1):'transparent',
          color: _color.getColor(this.color,1)
        }
      }
    },
    stylesBackground(){
      return {
        background: `rgba(var(--vs-${this.color}), 1)`,
        opacity: this.opacity,
        left: `${this.leftBackgorund}px`,
        top: `${this.topBackgorund}px`,
        width: `${this.radio}px`,
        height: `${this.radio}px`,
        transition: `width ${this.time}s ease, height ${this.time}s ease, opacity ${this.timeOpacity}s ease`
      }
    },
    styleLine(){
      let lineOrigin = '50%'
      if(this.lineOrigin == 'left'){
        lineOrigin = '0%'
      } else if (this.lineOrigin == 'right') {
        lineOrigin = 'auto'
      }

      let styles = {
        top: this.linePosition == 'top'?'-2px':'auto',
        bottom: this.linePosition == 'bottom'?'-2px':'auto',
        background: _color.getColor(this.color,1),
        left: lineOrigin,
        right: lineOrigin == 'auto'?'0px':null,
        transform: lineOrigin=='50%'?'translate(-50%)':null
      }

      return styles
    }
  },
  watch: {
      value() {
        this.transitioning = true
        if (!this.value) {
            this.opacity = 0
            setTimeout( () => {
                this.radio = 0
                setTimeout(() => {
                    this.transitioning = false
                }, 200)
            }, 150);
        } else {
            let btn = this.$refs.btn
            let xEvent = event.offsetX
            let yEvent = event.offsetY
            let radio = btn.clientWidth * 3
            this.time  = btn.clientWidth / (btn.clientWidth + 70)

            if (event.srcElement && event.srcElement != btn) {
                xEvent += event.target.offsetLeft
                yEvent += event.target.offsetTop
            }
            
            this.leftBackgorund = xEvent
            this.topBackgorund = yEvent
            this.radio = radio
            this.opacity = 1
            setTimeout( () => {
                this.timeOpacity = .15
                this.transitioning = false
            }, this.time*1100);
        }
    }
  },
  methods:{
    isRTL(value) {
      if (this.$vs.rtl) {
        return value
      } else {
        if (value === 'right') {
          return 'left'
        }
        if (value === 'left') {
          return 'right'
        }
      }
    },
    clickButton(event){
      if (!this.transitioning) {
          this.$emit('input', !this.value)
          this.$emit('click',event)
      }
    },
    isColor(){
      return _color.isColor(this.color)
    }
  }
}
</script>
