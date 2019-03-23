<template>
  <transition name="tr-expand">
  <tr class="tr-expand" v-if="active">
    <td :colspan="colspan">
      <div class="content-tr-expand">
        <slot></slot>

        <button
          @click="$emit('click', $event)"
          v-if="close" class="tr-expand--close">
          <i class="material-icons">
            clear
          </i>
        </button>
      </div>
    </td>
  </tr>
  </transition>
</template>

<script>
export default {
  props: {
    close: {
      type: Boolean,
      default: false
    },
    colspan:{
      default: 1,
      type: Number
    }
  },
  data:() => ({
    active: false
  }),
  mounted() {
    this.active = true
  }
}
</script>
