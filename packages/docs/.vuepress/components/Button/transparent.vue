<template>
  <div class="con-demo flex">
    <vs-button transparent :active="active == 0" @click="active = 0">
      Transparent
    </vs-button>
    <vs-button transparent :active="active == 1" @click="active = 1">
      Transparent
    </vs-button>
    <vs-button transparent disabled >
      Transparent
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
