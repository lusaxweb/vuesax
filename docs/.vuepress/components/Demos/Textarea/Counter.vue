<template lang="html">
  <div>
    <vs-textarea counter="20" label="Counter: 20" :counter-danger.sync="counterDanger" v-model="textarea" />
  </div>
</template>

<script>
export default {
  data:()=>({
    textarea: '',
    counterDanger: false
  })
}
</script>

<style lang="stylus">
</style>
