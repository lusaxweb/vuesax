<template>
  <div class="con-demo flex">
    <vs-avatar verified />

    <vs-avatar badge="success" color="danger">
      U

      <template v-slot:verified>
        <i class='bx bxs-star' ></i>
      </template>
    </vs-avatar>

    <vs-avatar badge="danger">
      <img
        src="/86.jpg"
        alt="user"
      >
      <template v-slot:verified>
        <i class='bx bxs-bookmark' ></i>
      </template>
    </vs-avatar>
    <vs-avatar color="#5c3de8">
      <img
        src="/2.jpg"
        alt="user"
      >

      <template v-slot:verified>
        <i class='bx bxs-pin' ></i>
      </template>
    </vs-avatar>

    <vs-avatar circle color="dark" badge="warning">
      <img
        src="/90.jpg"
        alt="user"
      >

      <template v-slot:verified>
        <i class='bx bx-dollar' ></i>
      </template>
    </vs-avatar>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" scoped>
.con-demo
  padding-top 40px
  padding-bottom 40px
</style>
