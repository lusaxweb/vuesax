<template>
  <div>
    <vs-navbar v-model="activeItem" class="nabarx">
      <vs-button type="flat" icon="menu"></vs-button>

      <div slot="title">
        <vs-navbar-title>
          Hello world
        </vs-navbar-title>
      </div>



      <vs-navbar-item index="0">
        <a href="#">Home</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">News</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#">Update</a>
      </vs-navbar-item>
      <vs-navbar-item dropdown index="2">
        <a href="#">Group items</a>

        <div slot="submenu">
          <vs-navbar-item index="2.1">
            <a href="#">Home</a>
          </vs-navbar-item>
          <vs-navbar-item index="2.2">
            <a href="#">News</a>
          </vs-navbar-item>
          <vs-navbar-item index="2.3">
            <a href="#">Update</a>
          </vs-navbar-item>
        </div>
      </vs-navbar-item>

    </vs-navbar>
  </div>
</template>
<script>
export default {
  data:()=>({
    activeItem: 0
  })
}
</script>
