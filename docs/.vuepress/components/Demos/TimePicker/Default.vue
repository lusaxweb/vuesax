<template lang="html">
  <div>
    {{ timex }}
    <vs-timePicker v-model="timex" />
  </div>
</template>

<script>
export default {
  data: () => ({
    timex: '11:50'
  })
}
</script>

<style lang="stylus">
</style>
