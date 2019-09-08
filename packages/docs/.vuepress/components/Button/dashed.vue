<template>
  <div class="con-demo flex">
    <vs-button dashed :active="active == 0" @click="active = 0">
      Dashed
    </vs-button>
    <vs-button dashed :active="active == 1" @click="active = 1">
      Dashed
    </vs-button>
    <vs-button dashed disabled >
      Dashed
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
