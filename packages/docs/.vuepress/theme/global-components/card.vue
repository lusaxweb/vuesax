<template>
  <div class="card">
    <div class="text">
      <slot></slot>
    </div>

    <div class="example">
      <slot name="example" />
    </div>


    <div class="slotcode">
      <codex>
        <div v-if="$slots.template" slot="template">
          <slot name="template" />
        </div>
        <div v-if="$slots.script" slot="script">
          <slot name="script" />
        </div>
        <div v-if="$slots.style" slot="style">
          <slot name="style" />
        </div>
      </codex>
    </div>
  </div>
</template>
<script>
import codex from './codex.vue'
export default {
  components:{
    codex
  }
}
</script>
<style lang="stylus">

.card
  // background rgb(255,255,255)
  border-radius 10px
  overflow hidden
  margin 20px 0px
  margin-top 20px
  box-shadow 0px 35px 15px -30px rgba(0,0,0,.04)
  margin-bottom -50px
  width 100%
  .example
    position relative
    padding 10px
    margin-top 10px
    border-radius 10px 10px 0px 0px
    // border 1px solid rgba(0,0,0,.03)
    // box-shadow 0px -15px 20px -25px rgba(0,0,0,.1)
    border-bottom 0px solid rgba(0,0,0,.03)
    background rgb(255,255,255)
    position relative
    overflow hidden
    // &:after
    //   position absolute
    //   left 0px
    //   top 0px
    //   width 5%
    //   background-image: linear-gradient(90deg, #fcfcfc 0%, rgba(255,255,255,0) 100%);
    //   height 100%
    //   content ''
    //   z-index 200
    // &:before
    //   position absolute
    //   right 0px
    //   top 0px
    //   width 5%
    //   background-image: linear-gradient(270deg, #fcfcfc 0%, rgba(255,255,255,0) 100%);
    //   height 100%
    //   content ''
    //   z-index 200
  .text


    h2, h3, h4, h5, h6
      padding 15px 20px
      margin 0px
      border-bottom 0px
      padding-bottom 10px
      transition all .25s ease
      z-index 200
      position relative
      &:hover
        padding-left 40px
    h2
      padding-top 120px
    p
      padding 5px 20px
      margin 0px
      font-size .85rem
      z-index 200
      position relative

</style>
