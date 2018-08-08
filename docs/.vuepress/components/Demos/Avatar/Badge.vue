<template lang="html">
  <div class="con-avatarsx">
    <div class="con-avatar-solo">
    <vs-avatar badge />
    <vs-avatar :badge="badge1" text="Luisdaniel"/>
    <vs-avatar badge-color="rgb(140, 23, 164)" :badge="badge2" text="Luisd"/>
  </div>
      <vs-button type="filled" @click="increment">
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
