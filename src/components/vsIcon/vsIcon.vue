<template>
  <i
    translate="no"
    class="vs-icon material-icons notranslate">
    <slot></slot>
  </i>
</template>
<script>
export default {
  name:'VsIcon',
  props:{
    icon: {
      default: null,
      type: String
    }
  }
}
</script>
