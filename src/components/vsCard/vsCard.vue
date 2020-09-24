<template>
  <div
    :class="{'withHover': actionable, 'fixedHeight': fixedHeight }"
    class="con-vs-card">
    <header
      v-if="hasSlot('header')"
      class="vs-card--header">
      <slot name="header"></slot>
    </header>

    <div
      v-if="hasSlot('media')"
      class="vs-card--media">
      <slot name="media"></slot>
    </div>

    <div
      v-if="hasSlot('default')"
      :class="{'fixedHeight': fixedHeight }"
      class="vs-card--content">
      <slot></slot>
    </div>

    <div
      v-if="hasSlot('extra-content')"
      class="vs-card-extra--content">
      <slot name="extra-content"></slot>
    </div>

    <footer
      v-if="hasSlot('footer')"
      :class="{'fixedHeight': fixedHeight }"
      class="vs-card--footer">
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
        type: Boolean
      },
      fixedHeight: {
        default: false,
        type: Boolean
      }
    },
    methods: {
      hasSlot(slot) {
        return this.$slots[slot]
      }
    }
  }
</script>
