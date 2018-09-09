<template>
  <div>
    <vs-pagination :total="30" v-model="currentx" :max="13"></vs-pagination>
  </div>
</template>
<script>
export default {
  data: () => ({
    currentx: 17
  })
}
</script>
