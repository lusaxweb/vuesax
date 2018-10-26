<template>
  <div>
    <vs-navbar v-model="activeItem" class="nabarx">
      <vs-button type="flat" icon="menu"></vs-button>

      <vs-navbar-title>
        Hello world
      </vs-navbar-title>

      <vs-navbar-item index="0">
        <a href="#">Home</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">News</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#">Update</a>
      </vs-navbar-item>
      <vs-spacer></vs-spacer>
      <vs-input icon="search" placeholder="Search" v-model="search"/>
    </vs-navbar>
  </div>
</template>
<script>
export default {
  data:()=>({
    activeItem: 0,
    search: ''
  })
}
</script>
