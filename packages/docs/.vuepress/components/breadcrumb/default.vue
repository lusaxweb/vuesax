<template>
  <div class="con-demo">
    <vs-breadcrumb>
      <vs-breadcrumb-item :active="$route.hash == '#default-1'" >
        <a href="#default-1">Vuesax</a>
      </vs-breadcrumb-item>
      <vs-breadcrumb-item :active="$route.hash == '#default-2'">
        <a href="#default-2">Components</a>
      </vs-breadcrumb-item>
      <vs-breadcrumb-item :active="$route.hash == '#default-3'">
        <a href="#default-3">Breadcrumb</a>
      </vs-breadcrumb-item>
      <vs-breadcrumb-item :active="$route.hash == '#default'">
        <a href="#default">Default</a>
      </vs-breadcrumb-item>
    </vs-breadcrumb>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="stylus" scoped>
.con-demo
  padding-top 40px
  padding-bottom 20px
</style>

