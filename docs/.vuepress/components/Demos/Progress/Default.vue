<template>
  <div>
    <button @click="valuex += 10">ahola</button>
    {{valuex}}
    <vs-progress :vs-percent="valuex" vs-color="primary">primary</vs-progress>
  </div>
</template>
<script>
export default {
  data:()=>({
    valuex:20
  })
}
</script>
