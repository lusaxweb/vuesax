<template lang="html">
  <div class="centerx">
    <div class="modelx">
      {{form.regions}}
    </div>
    <vs-col v-for="(region, index) in regions" :key="index">
      <vs-checkbox v-model="form.regions" :vs-value="region" >{{ region.name }}</vs-checkbox>
    </vs-col>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
    regions: []
  },
  regions: [
    { id: 1, name: 'Queensland' },
    { id: 2, name: 'South Australia' },
    { id: 3, name: 'New South Wales' },
  ]
})
}
</script>

<style lang="css">
</style>
