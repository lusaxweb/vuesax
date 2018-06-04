<template lang="html">
  <transition name="fade">
  <div v-if="activo" class="con-tab">
    <slot/>
  </div>
  </transition>
</template>

<script>
export default {
  name:'vs-tab',
  props:[
    'vsLabel',
    'disabled'
  ],
  data(){
    return {
      activo:false,
    }
  },
  created(){
    // console.log("hola tab",this.$parent);
    this.$parent.vsTabs.push(this)
  }
}
</script>

<style lang="css" scoped>
.fade-enter-active, .fade-leave-active {
  transition: all .4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  position: absolute !important;
  transform: translate3d(100%, 0, 0);
}
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  position: absolute !important;
  transform: translate3d(-100%, 0, 0);
}
.con-tab {
      width: 100%;
      position: relative;
      /* padding: 15px; */

  }
</style>
