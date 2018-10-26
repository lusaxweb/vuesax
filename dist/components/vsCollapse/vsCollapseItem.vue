<template>
  <div
    :class="{'open-item': maxHeight != '0px', 'disabledx': disabled}"
    class="vs-collapse-item"
    @mouseover="mouseover"
    @mouseout="mouseout">
    <header class="vs-collapse-item--header" @click="toggleContent">
      <slot name="header"></slot>

      <span
        v-if="!notArrow"
        class="icon-header vs-collapse-item--icon-header">
        <vs-icon>
          {{ iconArrow }}
        </vs-icon>
      </span>
    </header>
    <div
      ref="content"
      :style="styleContent"
      class="vs-collapse-item--content">
      <div class="con-content--item">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'VsCollapseItem',
  props:{
    disabled:{
      default:false,
      type: Boolean
    },
    notArrow:{
      default: false,
      type: Boolean
    },
    iconArrow:{
      default: 'keyboard_arrow_down',
      type: String
    }
  },
  data:() => ({
    maxHeight: '0px'
  }),
  computed:{
    accordion() {
      return this.$parent.accordion
    },
    openHover() {
      return this.$parent.openHover
    },
    styleContent() {
      return {
        maxHeight: this.maxHeight
      }
    }
  },
  watch:{
    maxHeight() {
      this.$parent.emitChange()
    }
  },
  mounted () {
    window.addEventListener('resize', this.changeHeight)
  },
  methods:{
    changeHeight () {
      let maxHeightx = this.$refs.content.scrollHeight
      if(this.maxHeight != '0px') {
        this.maxHeight = `${maxHeightx}px`
      }
    },
    toggleContent() {
      if(this.openHover || this.disabled) {
        return
      }

      if(this.accordion) {
        this.$parent.closeAllItems(this.$el)
      }

      let maxHeightx = this.$refs.content.scrollHeight
      if(this.maxHeight == '0px') {
        this.maxHeight = `${maxHeightx}px`
      } else {
        this.maxHeight = `0px`
      }
    },
    mouseover() {
      if(this.disabled) {
        return
      }
      let maxHeightx = this.$refs.content.scrollHeight
      if(this.openHover) {
        this.maxHeight = `${maxHeightx}px`
      }
    },
    mouseout() {
      if(this.openHover) {
        this.maxHeight = `0px`
      }
    }
  }
}
</script>
