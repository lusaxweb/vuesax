<template>
  <div
    :class="{'withHover': actionable }"
    class="con-vs-card">
    <header class="vs-card-header">
      <slot name="header"></slot>
    </header>

    <div class="vs-card-media">
      <slot name="media"></slot>
    </div>

    <div class="vs-card-content">
      <slot></slot>
    </div>

    <div class="vs-card-extra-content">
      <slot name="extra-content"></slot>
    </div>

    <footer class="vs-card-footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'VsCard',
  props:{
    actionable: {
      default: false,
      type: [Boolean, String]
    }
  }
}
</script>
