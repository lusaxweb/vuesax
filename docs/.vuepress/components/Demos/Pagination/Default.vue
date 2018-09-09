<template>
  <div>
    <vs-pagination :total="40" v-model="currentx"></vs-pagination>
  </div>
</template>
<script>
export default {
  data: () => ({
    currentx: 14
  })
}
</script>
