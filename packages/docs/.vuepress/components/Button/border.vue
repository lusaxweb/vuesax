<template>
  <div class="con-demo flex">
    <vs-button border :active="active == 0" @click="active = 0">
      Border
    </vs-button>
    <vs-button border :active="active == 1" @click="active = 1">
      Border
    </vs-button>
    <vs-button border disabled >
      Border
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
