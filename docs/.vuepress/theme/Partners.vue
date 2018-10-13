<template>
  <div class="con-partners">
    <h3>Partners</h3>
    <ul class="listPartners">
      <li :class="partner.class" :title="partner.name" v-for="partner in partners" class="partner">
        <a target="_blank" :href="partner.link">
          <img :src="$withBase(partner.img)" alt="">

          <span class="text-partner">{{ partner.text }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data: ()=>({
    partners:[
      {
        name:'Madewithvuejs',
        img:'/made-with-vuejs.png',
        link:'https://madewithvuejs.com?ref=lusaxweb.github.io'
      },
      {
        class:'vue-book',
        text: 'Vue.js Book',
        name:'Vue.js Book',
        img:'/vue-book.png',
        link:'https://vuejsbook.com?ref=lusaxweb.github.io'
      },
      ]
  })
}
</script>
<style lang="stylus">
.con-partners
  width 100%
  height auto
  h3
    text-align center
    padding 15px
    font-size 1.5rem
  .listPartners
    width 100%
    display flex
    align-items center
    justify-content center
    flex-wrap wrap
    padding-left 0px
    li
      list-style none
      margin 0px 5px
      a
        border-radius 50%
        width 150px
        height 150px
        display block
        display flex
        align-items center
        justify-content center
        padding 10px
        border 1px solid rgba(0,0,0,.05)
        transition all .25s ease
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0,0)
        flex-direction column
        color #5b5777
        &:hover
          background rgba(255,255,255,1)
          border: 1px solid rgba(245,245,245,0)
          box-shadow: 0px 9px 28px -9px rgba(0, 0, 0,.1)
      img
        width 100%
        transition all .25s ease
      &.vue-book
        img
          width 60% !important
</style>
