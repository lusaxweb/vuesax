<template lang="html">
  <div class="con-example-images">
    <vs-images>
      <vs-image :key="index" :src="`https://picsum.photos/400/400?image=2${index}`" v-for="(image, index) in 9" />
      <vs-image :key="`index-${index}`" :src="`https://picsum.photos/400/400?image=1${index}`" v-for="(image, index) in 7" />
    </vs-images>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.con-example-images
  max-height 500px
  overflow auto
</style>
