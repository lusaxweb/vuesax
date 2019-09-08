<template>
  <div class="con-demo flex">
    <vs-button gradient :active="active == 0" @click="active = 0">
      Gradient
    </vs-button>
    <vs-button gradient :active="active == 1" @click="active = 1">
      Gradient
    </vs-button>
    <vs-button gradient disabled >
      Gradient
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
