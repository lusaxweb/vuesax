<template>

  <div class="con-home">
    <div class="logo-g">
      <img  v-if="data.heroImage" :src="$withBase(data.heroImage)" alt="hero">
    </div>

  <div class="home">
    <div v-if="data.heroImage" :class="{'doc-activo':doc}" class="doc-img">
      <img :src="$withBase(data.heroImage)" alt="">
    </div>
    <div :class="{'git-activo':git}" class="flaticon-github git-img">

    </div>
    <div :class="{'homeBackgroundComponent':data.heroBackgroundComponent}" class="home-init">
      <div class="heroBackgroundComponent" :is="data.heroBackgroundComponent">

      </div>
    <div class="hero">

      <h1 v-if="data.heroText" v-html="data.heroText"></h1>
      <h1 v-else>{{$title || 'hello'}}</h1>
      <p v-html="data.tagline || $description || 'Welcome to your VuePress site'" class="description"></p>
      <p class="action" v-if="data.actionText && data.actionLink">
        <NavLink class="action-button" :item="actionLink"/>
      </p>
      <p class="actions">
        <!-- {{data.vueThemes.actionsLinks}} -->
        <ul>
          <li @mouseenter="doc=true" @mouseleave="doc=false" v-for="action in data.vueThemes.actionsLinks">
            <router-link
              class="nav-link"
              :to="action.link"
              :exact="action.link === '/'"
            >{{action.text}}</router-link>
          </li>
          <li>
            <a @mouseenter="git=true" @mouseleave="git=false" class="flaticon-github fgithub" :href="data.vueThemes.github">
              <span class="stargazers_count">{{star}}</span>
            </a>
          </li>
        </ul>
      </p>
    </div>
    </div>
    <!-- <div class="features" v-if="data.features && data.features.length">
      <div class="feature" v-for="feature in data.features">
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div> -->
    <div class="contenedor">


    <div class="features" v-if="data.features && data.features.length">
      <div class="feature" v-for="feature in data.features">
        <div class="con-text-feature">
          <h2 v-html="feature.title"></h2>
          <p v-html="feature.details"></p>
          <div v-if="feature.button" class="con-btns-features">
            <button type="button" name="button">
              <router-link
                class="nav-link"
                :to="feature.button.link"
                :exact="feature.button.link === '/'"
              >{{feature.button.text?feature.button.text:'see more'}}</router-link>
              </button>
            <!-- <button v-if="feature.github" type="button" name="button"> -->
              <a target="_blank" class="flaticon-github githubx" :href="data.vueThemes.github"></a>
            <!-- </button> -->
          </div>
        </div>
        <div class="con-img-feature">
          <div v-if="feature.component" :is="feature.component">
            {{feature.img}}
          </div>
          <img v-if="feature.img"  :src="$withBase(data.heroImage)" alt="">
        </div>
      </div>
    </div>
    <Content custom/>
    </div>
    <!-- <div class="footer" v-if="data.footer">
      {{ data.footer }}
    </div> -->
    <div class="con-contribuitors">
      <contributors :title="title" :repo="this.$site.themeConfig.repo" contributors="all"/>
    </div>
  </div>


      <Footer/>
  </div>
  </div>

</template>

<script>
import NavLink from './NavLink.vue'
import Footer from './Footer.vue'
import contributors from './contributors.vue'
export default {
  components: { NavLink, Footer, contributors },
  data(){
    return {
      star:0,
      git:false,
      doc:false,
    }
  },
  computed: {
    data () {
      return this.$page.frontmatter
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  },
  mounted(){
    console.log("entro");
     fetch('https://api.github.com/repos/lusaxweb/vuesax')
  .then(response => response.json())
  .then(json => {
    this.star = json.stargazers_count
  })
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'

.doc-img
  position: absolute;
  transform: translate(-5%);
  opacity: 0;
  transition: all .3s ease;
  img
    width: 50vw;
    filter: grayscale(100%);
    opacity: .080;

.githubx
  padding:0px
  width: 40px;
  border-radius: 50%;
  height: 40px;
  margin-left: 0px;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $accentColor;
  color: rgb(255, 255, 255) !important;
  transition: all .2s ease;
  &:hover
    box-shadow: 0px 0px 10px 0px $accentColor
.doc-activo
  opacity: 1 !important;
  transform: translate(0%);

.git-img {
  opacity: 0;
  transition: all .250s ease;
  transform: translate(-5%);
}
.git-img:before {
  font-size: 60rem !important;
  position: absolute;
  left: 100px;
  top: 0px
  color: rgb(247, 247, 247);
}
.git-activo {
  opacity: 1;
  transform: translate(0%) rotate(0deg);
}
.oculto-img
  transform: translate(0,-100%) !important;
  opacity: 0 !important
.logo-g
  margin-left: 30px
  padding: 10px
  top: -10px
  display: block;
  position: absolute;
  z-index: 1000;
  background: rgb(255, 255, 255)
  transition: all .3s ease
  opacity: 1;
  transform: translate(0);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1)
  width: 180px
  border-radius: 6px
  padding-top: 25px
  img
    width: 100%
    display: block;
.con-btns-features
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 10px;
  button
    background: $accentColor
    border: 0px;
    border-radius: 6px;
    color: rgb(255, 255, 255);

    cursor: pointer;
    transition: all .2s ease;

    box-shadow: 0px 0px 0px 0px $accentColor
    a
      display: block;
      padding: 10px;
      color: rgb(255, 255, 255);
      padding-left: 20px
      padding-right: 20px
    &:hover
      box-shadow: 0px 0px 10px 0px $accentColor
.homeBackgroundComponent {
  margin-bottom: 200px;
}
.heroBackgroundComponent {
  position: absolute;
  z-index: 0;
  width: 90%;
  right:  -5%;
  bottom: -5%
  max-width: 1150px;
  // transform: translate(0,40%);
}
@media (min-width: 1800px) {
  .heroBackgroundComponent {
  max-width: 1500px;
}
}
.con-img-feature
  width: 100%
  max-width: 600px;
  padding: 2rem

.fgithub
  padding: 0px !important;
  width: 42px;
  height: 42px;
  border-radius: 20px !important;
  background: rgb(255, 255, 255) !important;
  display: flex !important;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 2px solid $accentColor;
  color: $accentColor !important
  .stargazers_count
    position: absolute;
    right: -15px;
    background: $accentColor;
    border-radius: 7px;
    padding: 2px;
    padding-left: 8px;
    padding-right: 8px;
    color: rgb(255, 255, 255);
    font-size: 12px;
    transform: translate(100%);
    &:after
      position: absolute;
      left: 0px;
      top: 50%;
      transform: translate(-50%,-50%) rotate(45deg);
      content: '';
      width: 10px
      height: 10px;
      background: inherit

.actions
  clear: both;
  width: 100%
  display: flex
  align-items: center
  justify-content: flex-start;
  ul
    padding-left: 0px !important
  *
    list-style: none
  li
    // background: $accentColor
    float: left;

    margin-right: 10px;
    transition: all .3s ease
    a
      padding: 8px
      font-size: 15px;
      padding-left: 20px;
      padding-right: 20px;
      color: rgb(255, 255, 255);
      display: block;
      box-shadow: 0px 0px 0px 0px $accentColor
      transition: all .250s ease
      background: $accentColor
      border-radius: 7px;
      &:hover
        box-shadow: 0px 0px 11px 0px $accentColor
.home-init
  display: flex
  align-items: flex-start;
  justify-content: center;
  flex-direction: column
  position: relative;
  height: 100vh;
.contenedor
  max-width: 1300px
  width: 100%
  margin 0px auto
.home
  top: 0px;
  display: block;
  position: relative;
  padding $navbarHeight 2rem 0
  width: 100%;
  .hero
    position: relative;
    display: block;
    z-index: 1;
    margin-top: -15rem
    padding-left: 3rem
    img
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
      color: $textColor
      font-weight: lighter;
      font-size: 40px;
    h1, .description, .action
      // margin 1.8rem auto
    .description
      // max-width 35rem
      padding: 10px
      padding-left: 0px
      padding-bottom: 20px
      font-size 1.3rem
      line-height 1.3
      color lighten($textColor, 10%)

    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    // border-top 1px solid $borderColor
    // box-shadow: 0px -7px 20px -10px rgba(0, 0, 0, 0.1);
    padding 1.2rem
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items: center;
  .feature
    flex-grow 1
    flex-basis 100%
    max-width 100%
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.2rem;
    margin-bottom: 2rem

    &:last-child
      border-bottom: 0px solid rgba(0, 0, 0, 0.050)
    &:nth-child(odd)
      .con-text-feature
        order: 3;
    h2
      font-size 2rem
      font-weight 500
      border-bottom none
      padding-bottom 0
    p
      color $textColor
    .con-text-feature
      max-width: 500px;
      padding: 30px;
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .homeBackgroundComponent
    margin-bottom 100px
  .logo-g
    display: none
  .home
    .hero
      padding-left 0
    .features
      flex-direction column
      .feature
        max-width 100%
        padding 0
        margin-bottom 2.5rem
        flex-direction column
        .con-text-feature
          &:nth-child(odd)
            order 1
        .con-img-feature
          padding 0
          margin 20px
          &:nth-child(odd)
            order 0
  .con-home
    footer
      margin-top 200px


@media (max-width: $MQMobileNarrow)
  .heroBackgroundComponent
    right: 0
    bottom: 0
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .features
      padding 0
      .feature
        h2
          font-size 1.25rem
  footer
    .bosque
      top 60%
      transform scale(1.5)
</style>
