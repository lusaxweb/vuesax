<template lang="html">
  <div>
    <vs-tabs :color="colorx">
      <vs-tab vs-label="Pets" vs-icon="pets" @click="colorx = '#8B0000'">
      </vs-tab>
      <vs-tab vs-label="Bank" vs-icon="account_balance" @click="colorx = '#FFA500'">
      </vs-tab>
      <vs-tab vs-label="Dashboard" vs-icon="dashboard" @click="colorx = '#551A8B'">
      </vs-tab>
      <vs-tab vs-label="Profile" vs-icon="account_circle" @click="colorx = '#0000FF'">
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
