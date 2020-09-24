<template>
  <div class="con-type-example">

    <vs-select
      class="selectExample"
      label="Figuras"
      v-model="type"
      >
      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in types" />
    </vs-select>

    <vs-navbar :type="type" v-model="activeItem" class="nabarx">

      <div slot="title">
        <vs-navbar-title>
          Type {{type}}
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="0">
        <a href="#">Home</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">News</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#">Update</a>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>
<script>
export default {
  data:()=>({
    activeItem: 0,
    type: 'flat',
    types: [
      {
        value: null, text: 'Default'
      },
      {
        value: 'flat', text: 'Flat'
      },
      {
        value: 'fund', text: 'Fund'
      },
      {
        value: 'border', text: 'border'
      },
      {
        value: 'gradient', text: 'Gradient'
      },
      {
        value: 'shadow', text: 'Shadow'
      }
    ]
  })
}
</script>
<style lang="stylus">
.con-type-example
  .vs-navbar
    margin-top 10px
</style>
