<template>
  <div>
    <vs-navbar v-model="activeItem" class="nabarx">
      <vs-button vs-type="flat" vs-radius="50%" vs-icon="menu"></vs-button>

      <vs-navbar-title>
        Hello world
      </vs-navbar-title>

      <vs-spacer></vs-spacer>

      <vs-navbar-item index="0">
        <a href="#">Home</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">News</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#">Update</a>
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
