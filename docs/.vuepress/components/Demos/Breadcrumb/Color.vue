<template lang="html">
  <div class="centerx">
    <input v-model="colorx" type="color" name="" value="">
    <vs-breadcrumb
    :color="colorx"
    :items="items"
    ></vs-breadcrumb>
  </div>
</template>

<script>
export default {
  data: ()=>({
    colorx:'#3DC9B3',
    items:[
      {
        title: 'Dashboard',
        url: 'dashboard'
      },
      {
        title: 'Link 1',
        url: 'link-1'
      },
      {
        title: 'Link 2',
        disabled: true
      },
      {
        title: 'Active',
        active: true
      }
    ]
  })
}
</script>

<style lang="css">
</style>
