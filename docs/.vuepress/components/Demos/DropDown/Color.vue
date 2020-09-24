<template lang="html">
  <div class="examplex">

    <input type="color" v-model="colorx">

    <vs-dropdown :color="colorx">
      <a class="a-icon" href="#">
        Dropdown hover
        <vs-icon icon="expand_more"></vs-icon>
      </a>

      <vs-dropdown-menu>
        <vs-dropdown-item>
          option 1
        </vs-dropdown-item>
        <vs-dropdown-item>
          option 2
        </vs-dropdown-item>
        <vs-dropdown-item divider>
          option 3
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
export default {
  data:()=>({
    colorx:'#c80948'
  }),
}
</script>

<style lang="stylus">
.examplex
  display: flex;
  align-items: center;
  justify-content: center;
  input[type="color"]
    border: 0px;
    width: 30px;
    height: 30px;
    display: block;
  .a-icon
    outline: none;
    text-decoration: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
    i
      font-size: 18px;
</style>
