<template>
  <div class="con-demo flex">
    <vs-button shadow :active="active == 0" @click="active = 0">
      Shadow
    </vs-button>
    <vs-button shadow :active="active == 1" @click="active = 1">
      Shadow
    </vs-button>
    <vs-button shadow disabled >
      Shadow
    </vs-button>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: 1
  })
}
</script>
<style lang="stylus" scoped>

</style>
