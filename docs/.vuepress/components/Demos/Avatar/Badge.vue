<template lang="html">
  <div class="con-avatarsx">
    <div class="con-avatar-solo">
    <vs-avatar vs-badge />
    <vs-avatar :vs-badge="badge1" vs-text="Luisdaniel"/>
    <vs-avatar vs-badge-color="rgb(140, 23, 164)" :vs-badge="badge2" vs-text="Luisd"/>
  </div>
      <vs-button vs-type="filled" @click="increment">
        Increment Badge counter
      </vs-button>
  </div>
</template>

<script>
export default {
  data:()=>({
    badge1:2,
    badge2:10,
  }),
  methods:{
    increment(){
      this.badge1 ++
      this.badge2 ++
    }
  }
}
</script>

<style lang="stylus">
  .con-avatarsx
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
</style>
