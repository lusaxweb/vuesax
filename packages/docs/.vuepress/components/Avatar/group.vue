<template>
  <div class="con-demo flex">
    <vs-avatar-group>
      <vs-avatar />

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
      <vs-avatar badge="dark">
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

      <vs-avatar color="danger" badge="warning">
        <img
          src="/90.jpg"
          alt="user"
        >
      </vs-avatar>
    </vs-avatar-group>

    <vs-avatar-group class="group-float" max-items-row="3" float >
      <vs-avatar>
        <i class='bx bx-plus' ></i>
      </vs-avatar>

      <vs-avatar badge="success" color="danger">
        <img
          src="/25.jpg"
          alt="user"
        >
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
      <vs-avatar badge="dark">
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

      <vs-avatar color="danger" badge="warning">
        <img
          src="/90.jpg"
          alt="user"
        >
      </vs-avatar>
    </vs-avatar-group>
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
.group-float
  position relative
  margin 0px 20px
</style>
