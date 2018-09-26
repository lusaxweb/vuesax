<template>
  <div
    :class="{'open-item': maxHeight != '0px'}"
    class="vs-collapse-item">
    <header @click="toggleContent">
      <slot name="header"></slot>

      <span class="icon-header">
        <i class="material-icons">
          keyboard_arrow_down
        </i>
      </span>
    </header>
    <div ref="content" :style="styleContent" class="vs-collapse-item-content">
      <div class="con-content-item">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'VsCollapseItem',
  data:() => ({
    maxHeight: '0px'
  }),
  computed:{
    styleContent() {
      return {
        maxHeight: this.maxHeight
      }
    }
  },
  methods:{
    toggleContent() {
      let maxHeightx = this.$refs.content.scrollHeight
      console.dir(maxHeightx)
      if(this.maxHeight == '0px') {
        this.maxHeight = `${maxHeightx}px`
      } else {
        this.maxHeight = `0px`
      }

    }
  }
}
</script>
