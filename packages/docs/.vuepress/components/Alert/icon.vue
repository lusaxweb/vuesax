<template>
  <div class="con-demo flex">
    <vs-alert color="warning">
      <template v-slot:icon>
        <i class='bx bxs-error' ></i>
      </template>

      <template v-slot:header>
        Lorem ipsum dolor sit amet
      </template>

      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </vs-alert>

    <vs-alert color="success">
      <template v-slot:icon>
        <i class='bx bx-gift' ></i>
      </template>

      <template v-slot:header>
        Lorem ipsum dolor sit amet
      </template>

      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </vs-alert>

    <vs-alert color="rgb(250,20,100)">
      <template v-slot:icon>
        <i class='bx bxs-coffee' ></i>
      </template>

      <template v-slot:header>
        Lorem ipsum dolor sit amet
      </template>

      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
</style>
