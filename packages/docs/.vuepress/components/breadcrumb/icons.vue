<template>
  <div class="con-demo">
    <vs-breadcrumb>
      <vs-breadcrumb-item :active="$route.hash == '#icons-1'">
        <a href="#icons-1">
          <i class='bx bxl-vuejs' ></i>
          vuesax
        </a>
      </vs-breadcrumb-item>
      <vs-breadcrumb-item :active="$route.hash == '#icons-2'">
        <a href="#icons-2">
          <i class='bx bx-package' ></i>
          Components
        </a>
      </vs-breadcrumb-item>
      <vs-breadcrumb-item :active="$route.hash == '#icons-3'">
        <a href="#icons-3">
          <i class='bx bx-dots-horizontal' ></i>
          Breadcrumb
        </a>
      </vs-breadcrumb-item>
      <vs-breadcrumb-item :active="$route.hash == '#icons'">
        <a href="#icons">
          <i class='bx bx-selection' ></i>
          Icons
        </a>
      </vs-breadcrumb-item>
    </vs-breadcrumb>

    <vs-breadcrumb>
      <vs-breadcrumb-item :active="$route.hash == '#icons-1'">
        <a href="#icons-1">
          <i class='bx bx-home' ></i>
        </a>
      </vs-breadcrumb-item>
      <vs-breadcrumb-item :active="$route.hash == '#icons-2'">
        <a href="#icons-2">
          <i class='bx bxs-bar-chart-alt-2' ></i>
        </a>
      </vs-breadcrumb-item>
      <vs-breadcrumb-item :active="$route.hash == '#icons-3'">
        <a href="#icons-3">
          <i class='bx bx-task' ></i>
        </a>
      </vs-breadcrumb-item>
      <vs-breadcrumb-item :active="$route.hash == '#icons'">
        <a href="#icons">
          <i class='bx bxs-paper-plane' ></i>
        </a>
      </vs-breadcrumb-item>
    </vs-breadcrumb>

    <vs-breadcrumb>
      <vs-breadcrumb-item :active="$route.hash == '#icons-1'">
        <a href="#icons-1">
          <i class='bx bxs-bug' ></i>
        </a>
      </vs-breadcrumb-item>
      <vs-breadcrumb-item :active="$route.hash == '#icons-2'">
        <a href="#icons-2">
          <i class='bx bx-code-alt' ></i>
          Component
        </a>
      </vs-breadcrumb-item>
      <vs-breadcrumb-item :active="$route.hash == '#icons-3'">
        <a href="#icons-3">
          <i class='bx bx-git-merge' ></i>
          Merge
        </a>
      </vs-breadcrumb-item>
      <vs-breadcrumb-item :active="$route.hash == '#icons'">
        <a href="#icons">
          <i class='bx bx-check-shield' ></i>
        </a>
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

