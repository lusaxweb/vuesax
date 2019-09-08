<template>
  <div class="con-demo flex">
    <input v-model="color" type="color" name="color" id="color">
    <vs-breadcrumb :color="color">
      <vs-breadcrumb-item :active="$route.hash == '#color-1'">
        <a href="#color-1">Vuesax</a>
      </vs-breadcrumb-item>
      <vs-breadcrumb-item :active="$route.hash == '#color-2'">
        <a href="#color-2">Components</a>
      </vs-breadcrumb-item>
      <vs-breadcrumb-item :active="$route.hash == '#color-3'">
        <a href="#color-3">Breadcrumb</a>
      </vs-breadcrumb-item>
      <vs-breadcrumb-item :active="$route.hash == '#color' || $route.hash == '#default'">
        <a href="#color">Color</a>
      </vs-breadcrumb-item>
    </vs-breadcrumb>
  </div>
</template>

<script>
export default {
  data:() => ({
    color: '#3DC9B3'
  })
}
</script>
<style lang="stylus" scoped>
.con-demo
  padding-top 40px
  padding-bottom 20px
</style>

