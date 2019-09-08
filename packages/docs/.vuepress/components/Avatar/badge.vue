<template>
  <div class="con-demo flex">
    <vs-avatar badge="primary" />

    <vs-avatar badge="success" color="danger">
      U
    </vs-avatar>

    <vs-avatar badge="danger">
      <img
        src="/86.jpg"
        alt="user"
      >
    </vs-avatar>
    <vs-avatar>
      <img
        src="/24.jpg"
        alt="user"
      >

      <template v-slot:badge>
        4
      </template>
    </vs-avatar>
    <vs-avatar badge="success">
      <img
        src="/2.jpg"
        alt="user"
      >

      <template v-slot:badge>
        <span>
          12
        </span>
      </template>
    </vs-avatar>

    <vs-avatar badge="danger">
      <img
        src="/90.jpg"
        alt="user"
      >

      <template v-slot:badge>
        <i class='bx bxs-bell-ring' ></i>
      </template>
    </vs-avatar>

    <vs-avatar badge="dark">
      <img
        src="/25.jpg"
        alt="user"
      >

      <template v-slot:badge>
        <i class='bx bx-play' ></i>
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
