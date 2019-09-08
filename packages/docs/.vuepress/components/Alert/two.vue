<template>
  <div class="con-demo flex">
    <vs-alert class="alert-warning" color="warning">
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
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" scoped>
.con-demo
  padding-top 20px
  padding-bottom 20px
.alert-warning
  button
    padding 7px 20px
    border 0px
    border-radius 15px
    background rgb(255, 186, 0)
    color rgb(255,255,255)
    cursor pointer
    transition all .25s ease
    &:hover
      opacity .7
</style>
