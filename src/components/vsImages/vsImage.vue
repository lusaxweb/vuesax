<template>
  <li class="vs-image">
    <div class="con-vs-image">
      <div
        :v-bind="$attrs"
        :style="styleImage"
        class="img">
      </div>
    </div>
    <img class="imag-blur" :src="src" alt="">
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
