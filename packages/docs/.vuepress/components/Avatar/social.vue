<template>
  <div class="con-demo flex">
    <vs-avatar>
      <template v-slot:social>
        <i class='bx bxl-facebook-square' ></i>
        <i class='bx bxl-twitter' ></i>
        <i class='bx bxl-instagram-alt' ></i>
      </template>
    </vs-avatar>

    <vs-avatar badge="success" color="dark">
      U
      <template v-slot:social>
        <i class='bx bxl-github' ></i>
        <i class='bx bxl-codepen' ></i>
        <i class='bx bxl-discord' ></i>
      </template>
    </vs-avatar>

    <vs-avatar color="#5c3de8" badge="#5c3de8">
      <img
        src="/86.jpg"
        alt="user"
      >
      <template v-slot:social>
        <i class='bx bxl-behance' ></i>
        <i class='bx bxl-dribbble' ></i>
        <i class='bx bxl-slack-old' ></i>
      </template>
    </vs-avatar>
    <vs-avatar badge="dark">
      <img
        src="/2.jpg"
        alt="user"
      >

      <template v-slot:social>
        <i class='bx bxl-linkedin' ></i>
        <i class='bx bxl-skype' ></i>
      </template>
    </vs-avatar>

    <vs-avatar circle color="success" badge="success">
      <img
        src="/90.jpg"
        alt="user"
      >

      <template v-slot:social>
        <i class='bx bxl-whatsapp' ></i>
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
