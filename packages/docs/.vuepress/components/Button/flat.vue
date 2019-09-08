<template>
  <div class="con-demo flex">
    <vs-button flat :active="active == 0" @click="active = 0">
      Flat
    </vs-button>
    <vs-button flat :active="active == 1" @click="active = 1">
      Flat
    </vs-button>
    <vs-button flat disabled >
      Flat
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
button
  padding-left 25px
  padding-right 25px
</style>
