<template lang="html">
  <div>
    <vs-textarea
      counter="5"
      label-outside="Label outside Textarea"
      v-model="textarea"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    textarea: ""
  })
};
</script>
