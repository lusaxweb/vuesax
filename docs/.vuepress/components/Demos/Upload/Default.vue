<template lang="html">
  <div class="centerx">
    <vs-upload :vs-file.sync="url1" />
  </div>
</template>

<script>
export default {
  data(){
    return {
      url1:'',
    }
  }
}
</script>

<style lang="css">
</style>
