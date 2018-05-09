<template lang="html">
  <footer>
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
      <span :style="{'left':lineaL+'px'}" :class="{'lineaActiva':lineaActiva}" class="lineax"></span>
    </div>
    <div class="con-copy">
      Copyright © 2018 vuesax.
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
      console.dir(evt.target.offsetLeft);
      this.lineaL = evt.target.offsetLeft
    }
  }

}
</script>

<style lang="css" scoped>

footer {
  width: 100%;
  /* min-height: 30vh; */
  height: auto;
  background: #110d26;
  position: relative;
  z-index: 3000;
  position: relative;
  margin-top: 400px;
  display: block;
}

.con-footer {
  width: 100%;
  height: 100vh;
  background: rgb(255, 255, 255);
}
.con-copy {
  position: absolute;
  right: 20px;
  bottom: 15px;
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
  left: 0px;
  /* transform: translate(calc(100% + 7px) ); */
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
  font-weight: 500;
}
.con-links {
  position: relative;
  width: 40%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 200;
  /* padding: 30px; */
  /* padding-top: 10px; */
  left: 0px;
  padding-bottom: 10px;
  /* bottom: 50px; */
  /* background: rgb(196, 5, 117); */
}
.con-links ul {
  display: block;
  width: 100%;
  line-height: normal;
  padding-left: 0px;
  position: relative;
  padding-left: 20px;
}
.con-links ul li {
  padding: 4px;
  list-style: none;
}
.con-links a {
  cursor: pointer;
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
  transform: translate(0,-50%);
  top: 0px;
  display: block;
  left: -6%;
  position: absolute;
  width: 112%;
  z-index: 10;
}
.cls-1-piso {
  fill: #110d26;
}
</style>
