<template lang="html">
  <div class="con-404">
    <div class="con-ilus">
      <not-found/>
    </div>
  </div>
</template>

<script>
import notFound from './svg/notFound.vue'
export default {
  components:{
    notFound,
  }
}
</script>

<style lang="css">
  .con-404 {
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px;
  }
  .con-ilus {
    width: 50%;
  }
  .con-ilus svg{
    width: 100%;
  }
</style>
