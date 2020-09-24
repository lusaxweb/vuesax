<template lang="html">
  <div>
    <vs-tabs :color="colorx">
      <vs-tab label="Pets"  tag="close" icon="pets" @click="colorx = '#8B0000'">
      </vs-tab>
      <vs-tab label="Bank" icon="account_balance" @click="colorx = '#FFA500'">
      </vs-tab>
      <vs-tab label="Dashboard" icon="dashboard" @click="colorx = '#551A8B'">
      </vs-tab>
      <vs-tab label="Profile" icon="account_circle" @click="colorx = '#0000FF'">
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
export default {
  data:()=>({
    colorx: '#8B0000'
  })
}
</script>

<style lang="css">
</style>
