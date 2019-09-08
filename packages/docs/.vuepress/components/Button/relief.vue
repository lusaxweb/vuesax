<template>
  <div class="con-demo flex">
    <vs-button relief :active="active == 0" @click="active = 0">
      Relief
    </vs-button>
    <vs-button relief :active="active == 1" @click="active = 1">
      Relief
    </vs-button>
    <vs-button relief disabled >
      Relief
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
