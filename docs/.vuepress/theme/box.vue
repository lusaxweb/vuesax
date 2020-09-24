<template lang="html">
  <div :class="{'headerx':header}" class="con-box">
    <div  class="box">
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    header:{
      default:false,
      type:Boolean,
    }
  },
  mounted(){
    let h = this.$el.querySelector('h2') || this.$el.querySelector('h3')
    if(h) {
    let a = h.querySelector('a')
      // console.dir(a.attribut/es[0].value);
      let hrefx = a.attributes[0].value.replace('#','')
      a.parentNode.id = ''
      a.closest('.con-box').id = hrefx

    }
  }
}
</script>

<style lang="stylus">
// .box > ul > li {
//   margin-left: 25px;
//   list-style: outside;
// }
// .box > ul > li > ul > li {
//   list-style: circle;
// }
.headerx
  // background: rgb(151, 237, 254);
  margin-top: -70px !important;
  width: 100% !important
  margin-left: 0px !important;
  .box
    border-top: 1px solid rgb(240, 240, 240)
    text-align: center;
    border-radius: 0px 0px 10px 10px !important;
    box-shadow: 0 20px 40px -15px rgba(0,0,0,.0) !important
    background transparent !important

    p
      text-align left
      padding-left 35px
.con-box
  padding-top: 50px
  width: calc(100% - 30px);
  margin-left: 15px;
  margin-top: -40px
  // background: rgb(47, 194, 105)
  .box
    // margin-top: 15px
    background: rgb(255, 255, 255)
    border-radius: 6px
    box-shadow: 0 20px 40px -15px rgba(0,0,0,.05)
    margin-bottom: 15px
    overflow hidden
    // padding-bottom: 10px;
    margin-top 0px;
    .header
      // background transparent !important
      // border-top 1px solid rgba(0,0,0,.0) !important
      border-bottom 0px solid rgba(0,0,0,.03) !important
    h2
      border-radius: 6px 6px 0px 0px
      padding: 10px
      width: calc(100% - 30px)
      // margin-left 15px
      border-bottom 0px !important
      transition all .25s ease

      // border-bottom: 0px;
      font-weight: bold;
      // padding-left: 20px !important
      font-size 1.4rem
      &:hover
        padding-left 30px
      a
        text-decoration: none !important;
    h3
      padding: 10px
      font-weight: bold;
    p
      // width: calc(100% - 20px)
      width 100%
      padding 6px 20px
      // margin-left: 10px !important
    p
      background: transparent !important
      margin-top 0px;
    & > ul ,& > li
      margin-left: 20px;

.box pre
  border-radius: 0px !important;

.con-demo pre
  border-radius: 10px !important;

@media (max-width: 550px)
  .con-box
    .box
      h2
        font-size: 16px;
      p, li
        font-size: 11px;
      .vs-row
        p
          margin: 0px !important;
          width: 100%;
</style>
