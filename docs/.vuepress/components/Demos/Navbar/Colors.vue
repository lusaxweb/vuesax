
<template>
  <div class="centerx">
    <div class="content-radius">
      <h4>
        Selected Color
      </h4>
      <vs-radio v-model="colorx" vs-value="primary">Primary</vs-radio>
      <vs-radio v-model="colorx" color="danger" vs-value="danger">Danger</vs-radio>
      <vs-radio v-model="colorx" color="success" vs-value="success">Success</vs-radio>
      <vs-radio v-model="colorx" color="warning" vs-value="warning">Warning</vs-radio>
      <vs-radio v-model="colorx" color="dark" vs-value="dark">Dark</vs-radio>
    </div>
    <input class="input-color" v-model="colorx" type="color" name="" value="">
    <vs-navbar
      v-model="indexActive"
      :color="colorx"
      text-color="rgba(255,255,255,.6)"
      active-text-color="rgba(255,255,255,1)"
      class="myNavbar">
      <div slot="title">
        <vs-navbar-title>
          Navbar Color
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="0" >
        <a href="#">Home</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">News</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#">Update</a>
      </vs-navbar-item>

      <vs-spacer></vs-spacer>

      <vs-button color-text="rgb(255, 255, 255)" color="rgba(255, 255, 255, 0.3)" type="flat" icon="more_horiz"></vs-button>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  data: ()=>({
    colorx:'#1db952',
    indexActive: 0
  })
}
</script>

<style lang="stylus">
.content-radius
  display flex
  align-items flex-start
  flex-direction column
  width 100%
.input-color
  margin-bottom 10px
  position relative
  display block
.myNavbar
  color rgb(255,255,255)
</style>
