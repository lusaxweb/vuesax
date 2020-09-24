<template lang="html">
  <div class="centex">
    <vs-button @click="$vs.notify({title:'Time default',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary',icon:'query_builder'})" type="flat">Time default</vs-button>
    <vs-button @click="$vs.notify({time:4000,title:'Time 4s (4000)',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary',icon:'query_builder'})" type="flat">Time 4s (4000)</vs-button>
    <vs-button @click="$vs.notify({time:8000,title:'Time 8s (8000)',text:'Lorem ipsum dolor sit amet, consectetur',color:'primary',icon:'query_builder'})" type="flat">Time 8s (8000)</vs-button>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
