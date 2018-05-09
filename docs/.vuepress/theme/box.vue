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
  margin-top: -71px !important;
  width: 100% !important
  margin-left: 0px !important;
  .box
    border-top: 1px solid rgb(240, 240, 240)
    text-align: center;
    border-radius: 0px 0px 10px 10px !important;
.con-box
  padding-top: 40px
  width: calc(100% - 30px);
  margin-left: 15px;
  margin-top: -40px
  // background: rgb(47, 194, 105)
  .box
    background: rgb(198, 184, 76)
    margin-top: 15px
    background: rgb(255, 255, 255)
    border-radius: 6px
    box-shadow: 0 20px 40px -15px rgba(0,0,0,.13)
    margin-bottom: 15px
    h2
      border-radius: 6px 6px 0px 0px
      padding: 10px
      // padding-top: 4rem
      width: 100%
      background: rgb(245, 245, 245)
      border-bottom: 0px;
      font-weight: bold;
      padding-left: 25px !important
      a
        text-decoration: none !important;
    h3
      padding: 10px
      font-weight: bold;
    p, iframe
      width: calc(100% - 30px)
      margin-left: 15px !important
    p
      background: transparent !important
    & > ul ,& > li
      margin-left: 20px;

.box pre
  border-radius: 0px !important;

.con-demo pre
  border-radius: 10px !important;
</style>
