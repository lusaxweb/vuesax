<template lang="html">
  <div
    :class="{'textarea-danger': counter ? (value && value.length > counter) : false, 'focusx': focusx}"
    :style="getStyle"
    class="vs-component vs-con-textarea">

    <h4 v-if="label">
      {{ label }}
    </h4>

    <textarea
      :value="value"
      v-bind="$attrs"
      :style="getStyle"
      class="vs-textarea"
      v-on="listeners">
    </textarea>

    <div
      v-if="counter"
      class="count vs-textarea--count">
      {{ value ? value.length : 0 }} / {{ counter }}
    </div>

  </div>
</template>

<script>
export default {
  name: "VsTextarea",
  inheritAttrs:false,
  props:{
    value:{},
    label:{
      default:null,
      type: String
    },
    counter:{
      default: null,
      type: [Number, String]
    },
    counterDanger:{
      default: false,
      type: Boolean
    },
    height:{
      default:null,
      type: String
    },
    width:{
      default:null,
      type: String
    }
  },
  data:()=>({
    focusx: false
  }),
  computed:{
    getStyle() {
      let style = ''
      if (this.height) {
        style = `height:${this.height};`
      }

      if (this.width) {
        style += `width:${this.width};`
      }

      return style
    },
    listeners() {
      return {
        ...this.$listeners,
        input:(evt) => {
          this.$emit('input', evt.target.value)
        },
        focus:() => {
          this.focus()
        },
        blur:() => {
          this.blur()
        }
      }
    }
  },
  watch:{
    value() {
      if(this.value && this.value.length > this.counter) {
        this.$emit('update:counterDanger', true)
      } else {
        this.$emit('update:counterDanger', false)
      }
    }
  },
  methods:{
    focus() {
      this.focusx = true
      this.$emit('focus')
    },
    blur() {
      this.focusx = false
      this.$emit('blur')
    }
  }
}
</script>
