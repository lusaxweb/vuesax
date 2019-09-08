<template>
  <div class="con-demo flex">
    <vs-alert content-hidden >
      <template v-slot:header>
        Click on me for more information
      </template>

      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
    </vs-alert>

    <vs-alert
      content-hidden
      class="alert-warning" color="warning">
      <template v-slot:icon>
        <i class='bx bx-error-circle' ></i>
      </template>

      <template v-slot:header>
        1) Invalid username
      </template>

      The username is already busy, please enter another name

      <template v-slot:header2>
        2) Unsafe Password
      </template>

      <template v-slot:content2>
        The password is very insecure, to ensure a secure password you can add special characters and capital letters
      </template>
    </vs-alert>

    <vs-alert color="dark" content-hidden >
      <template v-slot:icon>
        <i class='bx bx-repost' ></i>
      </template>

      <template v-slot:header>
        Change icon for slot
      </template>

      <template v-slot:hidden-icon>
        <i class='bx bx-plus' ></i>
      </template>

      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
    </vs-alert>
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
