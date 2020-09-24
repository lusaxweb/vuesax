<template lang="html">
  <div
    :class="[`vs-images-hover-${hover}`, {'alternating': alternating, 'notBorderRadius': notBorderRadius, 'notMargin': notMargin}]"
    class="vs-component vs-images">
    <ul class="vs-ul-images vs-images--ul">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: "VsImages",
  inheritAttrs:false,
  props:{
    hover:{
      default:'default',
      type: String
    },
    alternating: {
      default: false,
      type: Boolean
    },
    notBorderRadius:{
      default: false,
      type: Boolean
    },
    notMargin:{
      default: false,
      type: Boolean
    }
  },
  data:()=>({

  }),
}
</script>
