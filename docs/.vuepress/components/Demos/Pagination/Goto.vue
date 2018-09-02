<template>
  <div>
    <vs-pagination :total="20" v-model="currentx" goto ></vs-pagination>
  </div>
</template>
<script>
export default {
  data: () => ({
    currentx: 8
  })
}
</script>
