<template>
  <li class="vs-image">
    <div class="con-vs-image">
      <div
        :v-bind="$attrs"
        :style="styleImage"
        class="vs-image--img">
      </div>
    </div>
    <img
      :src="src"
      class="imag-blur"
      alt="">
  </li>
</template>
<script>
export default {
  name: 'VsImage',
  inheritAttrs: false,
  props:{
    src:{
      default: null,
      type: String
    }
  },
  computed:{
    styleImage () {
      return {
        backgroundImage: `url(${this.src})`
      }
    }
  }
}
</script>
