<template>
  <div class="con-demo flex">
    <button @click="active = !active" >
      {{ active ? 'Close' : 'Open' }} Alert
    </button>
    <vs-alert closable v-model="active">
      <template v-slot:header>
        Lorem ipsum dolor sit amet
      </template>

      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
    </vs-alert>
  </div>
</template>
<script>
export default {
  data:()=>({
    active: true
  })
}
</script>
<style lang="stylus" scoped>
.con-demo
  padding-top 40px
  padding-bottom 20px
button
  padding 8px 10px
  border 0px
  margin-bottom 20px
  background alpha($accentColor,.1)
  color $accentColor
  border-radius 10px
  cursor pointer
  transition all .25s ease
  &:hover
    opacity .7

</style>
