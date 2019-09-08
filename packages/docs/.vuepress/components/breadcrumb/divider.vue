<template>
  <div class="con-demo">
    <vs-breadcrumb>
      <template v-slot:divider>
        |
      </template>

      <vs-breadcrumb-item :active="$route.hash == '#divider-1'">
        <a href="#divider-1">Vuesax</a>
      </vs-breadcrumb-item>
      <vs-breadcrumb-item :active="$route.hash == '#divider-2'">
        <a href="#divider-2">Components</a>
      </vs-breadcrumb-item>
      <vs-breadcrumb-item :active="$route.hash == '#divider-3'">
        <a href="#divider-3">Breadcrumb</a>
      </vs-breadcrumb-item>
      <vs-breadcrumb-item :active="$route.hash == '#divider'">
        <a href="#divider">Divider</a>
      </vs-breadcrumb-item>
    </vs-breadcrumb>

    <vs-breadcrumb>
      <template v-slot:divider>
        <i class='bx bx-right-arrow-alt' ></i>
      </template>

      <vs-breadcrumb-item :active="$route.hash == '#divider-1'">
        <a href="#divider-1">Vuesax</a>
      </vs-breadcrumb-item>
      <vs-breadcrumb-item :active="$route.hash == '#divider-2'">
        <a href="#divider-2">Components</a>
      </vs-breadcrumb-item>
      <vs-breadcrumb-item :active="$route.hash == '#divider-3'">
        <a href="#divider-3">Breadcrumb</a>
      </vs-breadcrumb-item>
      <vs-breadcrumb-item :active="$route.hash == '#divider'">
        <a href="#divider">Divider</a>
      </vs-breadcrumb-item>
    </vs-breadcrumb>

    <vs-breadcrumb>
      <template v-slot:divider>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.296 7.71L14.621 12 10.296 16.29 11.704 17.71 17.461 12 11.704 6.29z"/><path d="M6.704 6.29L5.296 7.71 9.621 12 5.296 16.29 6.704 17.71 12.461 12z"/></svg>
      </template>

      <vs-breadcrumb-item :active="$route.hash == '#divider-1'">
        <a href="#divider-1">Vuesax</a>
      </vs-breadcrumb-item>
      <vs-breadcrumb-item :active="$route.hash == '#divider-2'">
        <a href="#divider-2">Components</a>
      </vs-breadcrumb-item>
      <vs-breadcrumb-item :active="$route.hash == '#divider-3'">
        <a href="#divider-3">Breadcrumb</a>
      </vs-breadcrumb-item>
      <vs-breadcrumb-item :active="$route.hash == '#divider'">
        <a href="#divider">Divider</a>
      </vs-breadcrumb-item>
    </vs-breadcrumb>

    <vs-breadcrumb>
      <template v-slot:divider>
        \
      </template>

      <vs-breadcrumb-item :active="$route.hash == '#divider-1'">
        <a href="#divider-1">Vuesax</a>
      </vs-breadcrumb-item>
      <vs-breadcrumb-item :active="$route.hash == '#divider-2'">
        <a href="#divider-2">Components</a>
      </vs-breadcrumb-item>
      <vs-breadcrumb-item :active="$route.hash == '#divider-3'">
        <a href="#divider-3">Breadcrumb</a>
      </vs-breadcrumb-item>
      <vs-breadcrumb-item :active="$route.hash == '#divider'">
        <a href="#divider">Divider</a>
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

svg
  max-width 20px
</style>

