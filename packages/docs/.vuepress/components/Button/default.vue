<template>
  <div class="con-demo flex">
    <vs-button
      :active="active == 0"
      @click="active = 0">
      Default
    </vs-button>
    <vs-button
      :active="active == 1"
      @click="active = 1">
      Default
    </vs-button>
    <vs-button
      disabled >
      Default
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
