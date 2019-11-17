<template>
  <div class="con-home-patreons">
    <h2>Patreon Sponsors</h2>
    <ul>
      <li :class="{'patreonx':patreon.name}" :title="patreon.name?`Proudly patronized by ${patreon.name}`:'Become a Patron - Add your logo here'" v-for="patreon,index in patreons">
        <a target="_blank" :href="patreon.link?patreon.link:'https://www.patreon.com/luisdanielroviracontreras'" rel="noopener noreferrer">
          <img v-if="patreon.img" :src="$withBase(patreon.img)" alt="vuesax-patreon">
          <vs-icon v-if="!patreon.img" class="" icon="add"></vs-icon>

        </a>
      </li>
    </ul>

    <ul>
      <li class="patreon2" :class="{'patreonx':patreon.name}" :title="patreon.name?`Proudly patronized by ${patreon.name}`:'Become a Patron - Add your logo here'" v-for="patreon,index in patreons2">
        <a target="_blank" :href="patreon.link?patreon.link:'https://www.patreon.com/luisdanielroviracontreras'" rel="noopener noreferrer">
          <img v-if="patreon.img" :src="$withBase(patreon.img)" alt="vuesax-patreon">
          <vs-icon v-if="!patreon.img" class="" icon="add"></vs-icon>

        </a>
      </li>
    </ul>



    <div class="con-text-home-patreons">
      <span>
      It helps to pay dedicated development time so that I can move forward and evolve.
      </span>
      <a target="_blank" href="https://www.patreon.com/bePatron?c=1567892" class="btn-patreon" rel="noopener noreferrer">
        <img :src="$withBase('/patreon.webp')" alt="vuesax-patreon">
        Become a patron
      </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: ()=>({
    patreons:[
      {
        name:'Tipe',
        img:'/tipe.png',
        link:'https://tipe.io/'
      },
      {
        name:'Bit Share Code',
        img:'/bit-share-code.png',
        link:'https://bitsrc.io/'
      },
      {
        name:'WrapPixel',
        img:'/wrappixel-logo.png',
        link:'https://www.wrappixel.com/?ref=102'
      },
      {
        name:null,
        img:'/vuesax-logo.png'
      },
      {
        name:null
      },
    ],
    patreons2: [

    ]
  })
}
</script>

<style lang="stylus">
@import './styles/config.styl'
.con-home-patreons
  padding 20px;
  h2
    text-align center
    border-bottom 0px;
  ul
    display flex
    align-items center
    justify-content center
    flex-wrap wrap
    margin-left 0px;
    padding-left 0px
    li
      position relative
      list-style none
      margin 10px;
      border-radius 50%;
      border: 1px dashed  rgb(220,220,220)
      transition all .2s ease
      &.patreon2
        a
          width 85px !important
          height 85px !important
      &.patreonx
        border: 1px solid rgb(245,245,245)
        img
          opacity 1 !important
          filter grayscale(0%) !important
        &:hover
          background rgba(255,255,255,1)
          border: 1px solid rgba(245,245,245,0)
          box-shadow: 0px 9px 28px -9px rgba(0, 0, 0,.1)
      &:hover
        background rgba(249, 104, 84,.1)
        cursor pointer
        border: 1px dashed rgba(249, 104, 84,1)
        box-shadow: 0px 9px 28px -9px rgba(249, 104, 84,.5)
        transform translate(0,-6px)
        img
          filter grayscale(0%)
          opacity 1
        i
          color rgba(249, 104, 84,1) !important
          opacity 1
      img
        transition all .2s ease
        position absolute
        left 50%;
        top 50%
        width 80px;
        filter grayscale(100%)
        opacity .1
        transform translate(-50%,-50%)
        width 80%;
        height auto
      i
        transition all .2s ease

        text-align center
        font-size 2rem;
        position absolute
        left 50%;
        top 50%
        width 80px;
        opacity .1
        transform translate(-50%,-50%)
      a
        width 120px;
        height 120px;
        position relative
        display block
  .con-text-home-patreons
    text-align center
    padding 10px;
    display flex
    align-items center
    justify-content center
    flex-direction column
  .btn-patreon
    padding 10px
    padding-left 20px
    padding-right 20px;
    border 1px solid rgb(249, 104, 84)
    color $accentColor
    background transparent
    margin-top 20px;
    border-radius 8px;
    cursor pointer
    transition all .2s ease
    background rgb(249, 104, 84)
    color rgb(255,255,255)
    display flex
    align-items center
    justify-content center
    text-transform uppercase
    font-size 14px
    font-weight bold
    &:hover
      box-shadow: 0px 9px 28px -9px rgb(249, 104, 84)
    img
      margin-right 5px
@media (max-width: $MQMobile)
  .con-home-patreons
    padding 0px
    ul
      li
        margin 5px;
        a
          width 80px;
          height 80px
</style>
