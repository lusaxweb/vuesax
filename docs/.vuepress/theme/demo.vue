<template lang="html">
  <div class="demo">
    <slot>
    </slot>

    <slot v-if="show" name="code">
    </slot>
    <div class="con-toggle-code">
      <a class="toggle-code" @click.prevent="show=!show" href="#">{{show?'Hide Code':'Show Code'}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    show:{
      type:[Boolean,String],
      default:false,
    }
  },
  data(){
    return {
      code:false
    }
  }
}
</script>

<style lang="stylus">
.con-toggle-code
  position: relative;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .toggle-code
    display: block;
    // color: $accentColor
</style>
