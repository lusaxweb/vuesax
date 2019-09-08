<template>
  <div class="con-demo flex">
    <vs-avatar  loading />

    <vs-avatar loading badge="success" color="danger">
      U
    </vs-avatar>

    <vs-avatar loading typing="danger" badge="danger">
      <img
        src="/86.jpg"
        alt="user"
      >
    </vs-avatar>
    <vs-avatar loading history="success" badge="dark">
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

    <vs-avatar loading circle color="danger" badge="warning">
      <img
        src="/90.jpg"
        alt="user"
      >
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
