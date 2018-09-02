<template>
  <div>
    <vs-pagination :total="100" v-model="currentx" prev-icon="arrow_back" next-icon="arrow_forward"></vs-pagination>
  </div>
</template>
<script>
export default {
  data: () => ({
    currentx: 64
  })
}
</script>
