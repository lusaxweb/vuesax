<template lang="html">
  <footer class="footerx_theme">
    <bosque class="bosque"/>

      <svg class="svg-piso" xmlns="http://www.w3.org/2000/svg" viewBox="4209.3 4660 1514.932 404">
        <defs>
        </defs>
        <path id="Path_1901" data-name="Path 1901" class="cls-1-piso" d="M-77.7,67.7s180-205.4,964-48,501.3-84,501.3-84l20.4,404H0Z" transform="translate(4287 4724.3)"/>
      </svg>

    <div class="con-links">
      <div class="uls">
        <ul @mouseenter="lineaLx($event),lineaActiva=true" @mouseleave="linealeave()" v-for="ul in data">
          <li class="title">
            {{ul.title}}
          </li>
          <li v-for="li in ul.items">
            <a :target="li.self?'_self':'_blank'" :href="li.link">{{li.text}}</a>
          </li>
        </ul>
      </div>
      <!-- <span :style="{'left':lineaL+'px','top':lineaL+'px'}" :class="{'lineaActiva':lineaActiva}" class="lineax"></span> -->
    </div>
    <div class="con-copy">
      Copyright © 2020 vuesax.
    </div>
  </footer>
</template>

<script>
import config from '../config.js'
export default {
  data(){
    return {
      hoverText:false,
      lineaL:0,
      lineaActiva:false,
      topx:0,
    }
  },
  computed:{
    data(){
      return config.vueThemes.footer
    }
  },
  methods:{
    linealeave(){
      this.lineaActiva = false
    },
    lineaLx(evt){
      this.lineaActiva = true
      let cords = evt.target.getBoundingClientRect()
      this.lineaL = cords.left + 23
      this.topx = cords.top
    }
  }

}
</script>

<style lang="stylus" scoped>
@import './styles/config.styl'

footer.footerx_theme
  // width calc(100% + 160px)
  width 100%
  height auto
  background #110d26
  position relative
  z-index 1
  margin-top 300px
  display block

.con-footer
  width 100%
  height 100vh
  background rgb(255, 255, 255)

.con-copy
  position absolute
  right 20px
  bottom 15px
  color rgba(255, 255, 255, 0.2)
  z-index 500
  display block
  font-size 12px
  padding-right 30px

.con-links
  position relative
  width 50%
  display flex
  align-items flex-start
  justify-content center
  z-index 200
  left 0px
  padding-bottom 40px
  padding-left 20px
  .lineax
    position absolute
    top -10px
    background rgb(255, 255, 255)
    height 3px
    border-radius 5px
    width 30px
    transition all .3s ease
    color rgb(255, 255, 255)
    opacity 0
    left 0px
  ul
    display block
    width 100%
    line-height normal
    padding-left 0px
    position relative
    padding-left 20px
    li
      padding 4px
      list-style none
  a
    cursor pointer
    font-size 13px
    color rgba(255, 255, 255,.6)
    transition all .2s ease
    text-shadow 0px 0px 5px rgba(0,0,0,1)
    &:hover
      color rgb(255, 255, 255)

.lineaActiva
  width 30px !important
  opacity 1 !important

.uls
  position relative
  display flex
  align-items flex-start
  justify-content space-around
  width 100%
  max-width 500px

.title
  color rgb(255, 255, 255)
  font-size 16px
  padding-bottom 15px !important
  font-weight 500

.bosque
  position absolute
  z-index 100
  width 33%
  right 10%
  bottom 70px

.svg-piso
  transform translate(0,-50%)
  top 0px
  display block
  left -6%
  position absolute
  width 112%
  z-index 10

.cls-1-piso
  fill #110d26

@media (max-width: $MQMobile)
  .bosque
    display none
  .con-copy
    position static
    text-align center
    padding 10px 0

  .con-links
    width 100%

@media (max-width: $MQMobileNarrow)
  .uls
    flex-wrap wrap
    justify-content flex-start
  .con-links ul
    padding 0 20px
    margin-bottom 20px
    width 50%
</style>
