<template>
  <div>
    <p>Current: {{ currentx }}</p>
    <vs-button @click="currentx++">Increment</vs-button>
    <vs-button @click="currentx--">Decrement</vs-button>
    <br><br>
    <vs-pagination :total="20" v-model="currentx"></vs-pagination>
  </div>
</template>
<script>
export default {
  data: () => ({
    currentx: 5
  })
}
</script>
