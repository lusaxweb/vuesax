<template lang="html">
  <div class="con-papge">
    <div @click="bajarx()" class="con-fle">
      <i class="material-icons">expand_more</i>
    </div>
    <div class="con-todo">

      <vs-anchor vs-keyboard vs-mouse-wheel vs-scroll=".con-papge" vs-time="300" vs-scroll-less="48">
        <vs-link vs-href="home-city"/>
        <vs-link vs-href="con-mueble"/>
        <vs-link vs-href="con-responsive"/>
        <vs-link vs-href="con-laboratorio"/>
        <vs-link vs-href="con-footer"/>
      </vs-anchor>

  <div id="home-city" class="home-city">
    <div class="con-text">
      <h1 class="h1">
        <span class="gradient-top"></span>
        <span v-html="$marked(lang.home.start.h1)"></span>
      </h1>
      <h3 v-html="$marked(lang.home.start.text)">
        <!-- Amamos lo que hacemos, déjanos ayudarte a hacer lo que amas. -->
      </h3>
      <div class="con-btns">
        <vs-button @click="$router.push('/'+$route.params.lang+'/docs/vuesax/getting-started')" vs-color="rgb(var(--morado))" class="btn-doc" vs-type="primary-filled" :vs-html="$marked(lang.home.start.button)"></vs-button>
        <button class="btn-github" type="button" name="button"><a target="_blank" class="flaticon-github-logo" href="https://github.com/lusaxweb/vuesax"></a></button>
      </div>
    </div>
    <div class="con-city">
      <city/>
    </div>

  </div>


  <div v-for="section in lang.home.sections" :id="section.id" :class="section.id" class="con-sec">
    <div v-if="!section.invert" class="con-ilus">
      <div :is="section.image"></div>
    </div>
    <div :class="{'ilus-invert':section.invert}" class="con-text-sec">
      <div  class="text-sec">
        <h3 v-html="$marked(section.h3)"></h3>
        <p v-html="$marked(section.text)"></p>
        <div class="con-btn-sec">
          <vs-button vs-padding="12px 35px 12px 35px" vs-radius="20px" vs-color="rgb(var(--morado))" :vs-html="$marked(section.button)" @click="$router.push('/'+$route.params.lang+section.href)" vs-type="primary-filled"/>
          <button class="btn-github" type="button" name="button"><a target="_blank" class="flaticon-github-logo" href="https://github.com/lusaxweb/vuesax"></a></button>
        </div>
      </div>
    </div>
    <div v-if="section.invert" class="con-ilus ">
      <div :is="section.image"></div>
    </div>
  </div>

    <div id="con-footer" class="con-footer">
      <div class="con-sponsor">
        <div class="contiene-sponsor">
          <h3 v-html="$marked(lang.home.sponsors.title)"></h3>
          <vs-button
          @click="patronLink"
          @mouseenter="hoverText=true"
          @mouseleave="hoverText=false"
          vs-padding="12px 35px 12px 35px"
          vs-radius="20px"
          vs-color="rgb(var(--morado))"
          vs-type="primary-filled"
          :vs-html="$marked(lang.home.sponsors.button)"/>
        </div>
        <span :class="{'hoverText':hoverText}" class="text-g">vuesax</span>
      </div>
      <footer>
        <bosque class="bosque"/>

          <svg class="svg-piso" xmlns="http://www.w3.org/2000/svg" viewBox="4209.3 4660 1514.932 404">
            <defs>
            </defs>
            <path id="Path_1901" data-name="Path 1901" class="cls-1-piso" d="M-77.7,67.7s180-205.4,964-48,501.3-84,501.3-84l20.4,404H0Z" transform="translate(4287 4724.3)"/>
          </svg>

        <div class="con-links">
          <div class="uls">
            <ul @mouseenter="lineaLx($event),lineaActiva=true" @mouseleave="linealeave()" v-for="ul in lang.home.footer.uls">
              <li class="title">
                {{ul.title}}
              </li>
              <li v-for="li in ul.items">
                <a :target="li.self?'_self':'_blank'" :href="li.href">{{li.text}}</a>
              </li>
            </ul>
          </div>
          <span :style="{'left':lineaL+'px'}" :class="{'lineaActiva':lineaActiva}" class="lineax"></span>
        </div>
        <div class="con-copy">
          Copyright © 2018 vuesax.
        </div>
      </footer>
    </div>
  </div>
  </div>
</template>

<script>
import '../assets/font/flaticon.css'
// lang
import city from './svg/city.vue'
import mueble from './svg/mueble.vue'
import responsive from './svg/responsive.vue'
import open from './svg/openSource.vue'
import bosque from './svg/bosque.vue'

export default {
  components:{
    city,
    mueble,
    responsive,
    open,
    bosque
  },
  data(){
    return {
      hoverText:false,
      lineaL:0,
      lineaActiva:false,
    }
  },
  created(){
    this.$store.state.menuVisible = false
    // this.$vs.theme({
    //   primary:'rgb(39, 212, 144)',
    //   danger:'rgb(255, 0, 0)',
    // })
  },
  mounted(){
    // this.lang =
    // console.log(lang[this.$route.params.lang]);
    document.querySelector('.con-papge').addEventListener('scroll',(e)=>{
      if(e.target.scrollTop > 500){
        this.$store.state.scroll = true
      } else {
        this.$store.state.scroll = false
      }
    })
  },
  methods:{
    patronLink(){
      document.location.href='https://www.patreon.com/luisdanielroviracontreras'
    },
    bajarx(){
      let estasLink = document.querySelector('.a-activox')
      if(estasLink.nextElementSibling){
        this.irSection(estasLink.nextElementSibling.id.replace('link-',''))
      }
    },
    irSection(idx){
      let _this = this
      _this.delta = false
      // console.log(document.querySelector(this.vsScroll));
      let conx = document.getElementById(idx.replace('#',''));
      // console.log(conx.offsetTop);
      scrollTo(document.querySelector('.con-papge'), conx.offsetTop - 48, 300);
      function scrollTo(element, to, duration) {
        var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;
        var animateScroll = function(){
          currentTime += increment;
          var val = _this.$vs.easing.easeInOutCirc(currentTime, start, change, duration);
          console.log(val);
          element.scrollTop = val;
          if(currentTime < duration) {
            var intervalx = setTimeout(animateScroll, increment);

          } else {
            _this.delta = true
          }
        };
        animateScroll();
      }
    },
    linealeave(){
      console.log("paso salir");
      this.lineaActiva = false
    },
    lineaLx(evt){
      this.lineaActiva = true
      this.lineaL = evt.target.getBoundingClientRect().left
    }
  }
}
</script>

<style lang="css" scoped>
.con-fle {
  width: 30px;
  height: 50px;
  background: rgba(255, 255, 255, 0.7);
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%);
  border-radius: 20px;
  border: 2px solid rgb(var(--morado));
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .3s ease;
  cursor: pointer;
  z-index: 200;
}
.con-fle i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-100%);
  opacity: 0;
  color: rgb(255, 255, 255);
  transition: all .3s ease;
}
.con-fle:hover {
  transform: translate(-50%,20px);
  background: rgb(var(--morado));
  height: 60px;
}
.con-fle:hover i {
  opacity: 1;
  z-index: 100;
  transform: translate(-50%,-50%);
}
.con-fle::after {
  position: relative;
  content: '';
  width: 5px;
  height: 5px;
  background: rgb(var(--morado));
  border-radius: 50%;
  animation: raton 1.5s ease infinite;
  transition: all .3s ease;
  z-index: 10;
}
@keyframes raton {
0% {
  transform: translate(0,-15px) scale(0);
  opacity: 0;
}
50% {
  transform: translate(0,-10px) scale(1.1);
  opacity: 1;
}
80% {
  transform: translate(0,0px) scale(1);
  opacity: 1;
}
100% {
  transform: translate(0,7px) scale(0);
  opacity: 0;
}
}
.con-copy {
  position: absolute;
  right: 20px;
  bottom: 60px;
  color: rgba(255, 255, 255, 0.2);
  z-index: 500;
  display: block;
  font-size: 12px;
}
.con-links .lineax {
  position: absolute;
  /* left: 0px; */
  top: -10px;
  background:rgb(255, 255, 255);
  height: 3px;
  border-radius: 5px;
  width: 30px;
  /* transform: translate(100%); */
  transition: all .3s ease;
  color: rgb(255, 255, 255);
  opacity: 0;
  width: 0px;
  transform: translate(6px);
}
.lineaActiva {
  width: 30px !important;
  opacity: 1 !important;
}
.uls {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  max-width: 500px;
}
.title {
  color: rgb(255, 255, 255);
  font-size: 16px;
  padding-bottom: 15px !important;
  /* font-weight: bold; */
}
.con-links {
  position: absolute;
  width: 40%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 200;
  padding: 30px;
  padding-top: 10px;
  left: 0px;
  bottom: 50px;
  /* background: rgb(196, 5, 117); */
}
.con-links ul {
  display: block;
  width: 100%;
}
.con-links ul li {
  padding: 6px;
}
.con-links a {
  font-size: 13px;
  color: rgba(255, 255, 255,.5);
  transition: all .2s ease;
}
.con-links a:hover {
  color: rgb(255, 255, 255);
}
.bosque {
  position: absolute;
  z-index: 100;
  width: 33%;
  right: 20%;
  bottom: 70px;
}
.svg-piso {
  margin-top: -11%;
  display: block;
  left: -6%;
  position: absolute;
  width: 112%;
  z-index: 10;
}
.cls-1-piso {
  fill: #110d26;
}
.con-sponsor {
  height: 70vh;
  position: relative;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 10%;
}
.con-sponsor .text-g {
  position: absolute;
  /* left: -10%; */
  top: 0%;
  font-size: 40rem;
  text-align: center;
  color: rgb(250, 250, 250);
  z-index: 10;
  width: 100%;
  transition: all .3s ease;
  transform: scale(1.1);
}
.hoverText {
  color: #110d26 !important;
  transform: scale(.3) rotate(10deg) translate(65%,55%) !important;
}
.contiene-sponsor {
 position: relative;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 z-index: 100;
}

.contiene-sponsor h3 {
  font-size: 35px;
  font-weight: lighter;
  letter-spacing: 2px;
  padding: 20px;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
}
footer {
  width: 100%;
  height: 30vh;
  background: #110d26;
  position: relative;
  z-index: 200;
  position: relative;
}

.con-footer {
  width: 100%;
  height: 100vh;
  background: rgb(255, 255, 255);
}
.con-btn-sec {
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.text-sec {
  width: 70%;
  color: rgba(0, 0, 0, 0.7);
}
.text-sec h3 {
  position: relative;
  padding: 10px;
  font-size: 30px;
  padding-top: 20px;
  font-weight: lighter;
}
.text-sec h3::after {
  position: absolute;
  top: 0px;
  left: 10px;
  width: 50px;
  height: 5px;
  background-color: #4158D0;
  background-image: linear-gradient(-270deg,  #fecd57 0%, #e31c92  35%, #550dc7 100%);
  content: '';
  display: block;
  border-radius: 4px;
}
.text-sec p {
  padding: 10px;
}
.con-text-sec {
  position: relative;
  width: 50%;
  float: left;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
}
.con-ilus {
  width: 50%;
  height: 100%;
  position: relative;
  left: 0px;
  float: left;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.con-ilus svg {
  width: 65%;
  top: -50px;
  position: relative;
}
.con-mueble {
  height: 100vh;
  position: relative;
  background: rgb(255, 255, 255);
}
.con-responsive {
  height: 100vh;
  position: relative;
  background: rgb(255, 255, 255);
}
.con-laboratorio {
  height: 100vh;
  position: relative;
  background: rgb(255, 255, 255);
}
.btn-doc {
  /* padding: 2px; */
  padding-left: 130px;
  font-size: 15px;
}
.con-btns {
  transform: translate(-130px);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
}
.btn-github {
  position: relative;

  background: rgb(255, 255, 255);
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;

}
.btn-github a {
  color: rgba(0, 0, 0, 0.6);
  width: 45px;
  height: 45px;
  cursor: pointer;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-github:hover {
  background: rgb(var(--morado));
  border: 2px solid rgb(var(--morado));
}
.btn-github:hover a {
  color: rgb(255, 255, 255);

}
.gradient-top {
  position: absolute;
  top: 0px;
  left: 10px;
  width: 50px;
  height: 5px;
  background-color: #4158D0;
  background-image: linear-gradient(270deg,  #e31c92 46%, #fecd57 100%);
  border-radius: 10px;
}
.con-text {
  position: absolute;
  left: 100px;
  top: 240px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  width: 40%;
  z-index: 200;
  color: rgba(0, 0, 0, 0.7);
}
.con-text h1 {
  font-size: 35px;
  padding: 10px;
  padding-top: 20px;
  position: relative;
  font-weight: lighter;
}
.con-text h3 {
  padding: 10px;
  font-weight: lighter;
}
.con-city {
  width: 75%;
  max-width: 1500px;
  position: absolute;
  right: -30px;
  bottom: -50px
}
.con-city svg {
  width: 100%;
}
.home-city {
  height: 100vh;
  position: relative;
}
.city-svg {
  position: absolute;
  width: 85%;
  right: 0px;
  bottom: 0px;
}


.github-corner {
  position: fixed;
  z-index: 20000;
  right: 0px;
  top: 0px;
}
.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}

.con-papge {
  overflow: hidden;
  height: 100vh;
  overflow-x: hidden;
}
.con-todo {
  overflow: hidden;
}
button {
  cursor: pointer;
  transition: all .3s ease;
}
button:hover {
  box-shadow: 0px 3px 10px 0px rgb(var(--morado));
}

@media only screen and (max-width: 1200px) {
  .con-links {
    bottom: 20px;
  }
}
@media only screen and (max-width: 1070px) {
  .bosque {
    right: 50px;
  }
  .con-links {
    width: 60%;
  }
}
@media only screen and (max-width: 1000px) {
  .con-city {
    width: 100%;
  }
  .con-text {
    width: 100%;
    background: rgba(255, 255, 255,.8);
  }
  .btn-doc {
    padding-left: 0px;
  }
  .con-btns {
    justify-content: flex-start;
    padding-left: 130px;
  }
}
@media only screen and (max-width: 800px) {
  .con-text {
    width: 100%;
    left: 0px;
    padding: 15px;
    text-align: center;
  }

}
@media only screen and (max-width: 768px) {

  .con-sec {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .con-ilus {
    width: 100%;
    height: 35vh;
    box-sizing: border-box;
    align-items: stretch;
  }
  /* .con-text-sec {
    justify-content: flex-start;
  }
  .ilus-invert {
    justify-content: flex-end;

  } */
  .text-sec {
    width: 100%;
    padding: 10px;
  }
  .con-ilus svg {
    width: auto;
    height: 100%;
    top: 0px;
  }
  .con-text-sec {
    width: 100%;
    height: 30vh;
  }
  .con-links ul li {
    padding: 2px;
  }
  .con-links ul li a {
    font-size: 11px;

  }
}
@media only screen and (max-width: 600px) {
  .con-links {
    width: 100%;
  }
  .bosque {
      display: none;
  }
}
</style>
