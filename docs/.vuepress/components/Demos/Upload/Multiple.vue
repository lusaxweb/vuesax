<template lang="html">
  <div class="centerx">
    <vs-upload :vs-file-list.sync="urls1" multiple />
    <pre class="pre">{{urls1}}</pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      urls1:[],
    }
  }
}
</script>

<style lang="css">
.pre {
  width: 100%;
  color: rgba(255, 255, 255,.7);
}
</style>
