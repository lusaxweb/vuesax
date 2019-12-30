<template>
  <div class="home-templates">
    <header>
      <h2>
        Vuesax <b>Premium Themes</b>
      </h2>
      <p>
        Create great projects with a higher level saving time and work with the themes created with vuesax
      </p>
    </header>
    <ul>
      <li>
        <a target="_blank" href="https://www.wrappixel.com/templates/xtreme-vuesax-admin-pro/?ref=102">
          <img src="xtrene-vuesax-admin-template-nw.jpg" alt="">
          <!-- <div class="blackfriday">
            <img src="wrappixel-homepage-bf-banner.jpg" alt="">
          </div> -->
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" scoped>

.home-templates
  width 100%
  background transparent
  display flex
  align-items center
  justify-content center
  flex-direction column
  margin-top 50px
  margin-bottom 70px
  h2
    border 0
    text-align center
    padding 20px
    font-size 2.1rem
  p
    font-size 16px
    padding-bottom 20px
    opacity .7
  ul
    padding 20px
    box-sizing border-box
    li
      margin 10px
      transition all .25s ease
      position relative
      list-style none
      .blackfriday
        position absolute
        top -25px
        right -50px
        font-weight bold
        box-shadow 0px 0px 20px 0px rgba(0,0,0,.1)
        border-radius 30px
        max-width 160px
        background rgb(255,255,255)
        img
          width 100%
      &:hover
        box-shadow 0px 10px 20px -10px rgba(0,0,0,.1)
        transform translate(0,-10px)
      img
        max-width 400px
        width 100%
        border-radius 16px
</style>
