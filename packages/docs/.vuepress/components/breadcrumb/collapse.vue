<template>
  <div class="con-demo">
    <button @click="activeCollapse = !activeCollapse" >{{ activeCollapse ? 'close collapse' : 'open collapse' }}</button>
    <vs-breadcrumb>
      <template v-slot:divider>
          |
      </template>

      <vs-breadcrumb-item :active="$route.hash == '#collapse-1'" >
        <a href="#collapse-1">Vuesax</a>
      </vs-breadcrumb-item>

      <vs-breadcrumb-group v-model="activeCollapse">
        <vs-breadcrumb-item :active="$route.hash == '#collapse-2'">
          <a href="#collapse-2">Components</a>
        </vs-breadcrumb-item>
        <vs-breadcrumb-item :active="$route.hash == '#collapse-3'">
          <a href="#collapse-3">Breadcrumb</a>
        </vs-breadcrumb-item>
      </vs-breadcrumb-group>

      <vs-breadcrumb-item :active="$route.hash == '#collapse'">
        <a href="#collapse">collapse</a>
      </vs-breadcrumb-item>
    </vs-breadcrumb>

    <vs-breadcrumb>
      <vs-breadcrumb-item :active="$route.hash == '#collapse-1'" >
        <a href="#collapse-1">Vuesax</a>
      </vs-breadcrumb-item>

      <vs-breadcrumb-group v-model="activeCollapse">
        <template v-slot:icon>
          <i class='bx bx-user' ></i>
        </template>
        <vs-breadcrumb-item :active="$route.hash == '#collapse-2'">
          <a href="#collapse-2">User</a>
        </vs-breadcrumb-item>
        <vs-breadcrumb-item :active="$route.hash == '#collapse-3'">
          <a href="#collapse-3">Name</a>
        </vs-breadcrumb-item>
      </vs-breadcrumb-group>

      <vs-breadcrumb-item :active="$route.hash == '#collapse'">
        <a href="#collapse">collapse</a>
      </vs-breadcrumb-item>
    </vs-breadcrumb>

    <vs-breadcrumb>
      <template v-slot:divider>
          <i class='bx bx-chevron-right' ></i>
      </template>

      <vs-breadcrumb-group v-model="activeCollapse">
        <vs-breadcrumb-item :active="$route.hash == '#collapse-1'" >
          <a href="#collapse-1">Vuesax</a>
        </vs-breadcrumb-item>

        <template v-slot:icon>
          <i class='bx bxs-book-bookmark' ></i>
        </template>
        <vs-breadcrumb-item :active="$route.hash == '#collapse-2'">
          <a href="#collapse-2">User</a>
        </vs-breadcrumb-item>
        <vs-breadcrumb-item :active="$route.hash == '#collapse-3'">
          <a href="#collapse-3">Name</a>
        </vs-breadcrumb-item>

        <vs-breadcrumb-item :active="$route.hash == '#collapse'">
          <a href="#collapse">collapse</a>
        </vs-breadcrumb-item>
      </vs-breadcrumb-group>
    </vs-breadcrumb>
  </div>
</template>

<script>
export default {
  data:() => ({
    activeCollapse: true
  })
}
</script>

<style lang="stylus" scoped>
.con-demo
  padding-top 40px
  padding-bottom 20px

button
  padding 8px 10px
  background transparent
  border 0px
  background rgb(31, 116, 255)
  color rgb(255,255,255)
  border-radius 10px
  margin-bottom 10px
  cursor pointer
  transition all .25s ease
  &:hover
    opacity .8
</style>

