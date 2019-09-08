<template>
  <div
    :class="Class"
    class="vs-avatar-group">
    <slot />

    <slot name="more" />
  </div>
</template>
<script>
import { setVar } from '../../vuesax/vsFunctions'
export default {
  name: 'VsAvatarGroup',
  props:{
    float: {
      default: false,
      type: Boolean
    },
    maxItemsRow:{
      default: null,
      type: [Number, String]
    }
  },
  computed:{
    Class() {
      return {
        'vs-avatar-group--float': this.float
      }
    }
  },
  mounted() {
    this.setMaxItemsRow()
  },
  methods:{
    setMaxItemsRow() {
      setVar('max-items-row', `${this.maxItemsRow * 38}px`, this.$el)
    },
  }
}
</script>
