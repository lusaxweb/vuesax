<template>
  <div class="con-demo">
    <vs-breadcrumb>
      <vs-breadcrumb-item :active="$route.hash == '#disabled-1'" >
        <a href="#disabled-1">Vuesax</a>
      </vs-breadcrumb-item>
      <vs-breadcrumb-item disabled :active="$route.hash == '#disabled-2'">
        <a href="#disabled-2">Components</a>
      </vs-breadcrumb-item>
      <vs-breadcrumb-item disabled :active="$route.hash == '#disabled-3'">
        <a href="#disabled-3">Breadcrumb</a>
      </vs-breadcrumb-item>
      <vs-breadcrumb-item :active="$route.hash == '#disabled'">
        <a href="#disabled">Default</a>
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

