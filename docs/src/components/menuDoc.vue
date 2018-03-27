<template lang="html">
  <div class="con-menux">


  <div :class="{'menu-fuera':fuera,'oculto':!$store.state.menuVisible}" class="menu-doc">
    <div @click="$router.push('/')" class="img-menu-doc">
      <img src="../assets/vuesax-logo-vertical-2.png" alt="">
    </div>
    <div @click="fuera=!fuera" class="btn-menu">
      <i :class="{'menuActivo':!fuera}" class="menubtn">
        <span class="menu-linea-1"></span>
        <span class="menu-linea-2"></span>
        <span class="menu-linea-3"></span>
      </i>
      <i :class="{'closeActivo':fuera}" class="closex">
        <span class="linea-1"></span>
        <span class="linea-2"></span>
      </i>
    </div>

    <ul class="ul-principal">
      <template v-for="li in childrenx">
        <li v-if="li.padre">
          <router-link :to="'/'+lang.route+'/docs/'+li.path" class="nav-link" active-class="activoPadre">
            {{li.name}}
          </router-link>
        </li>
        <ul class="ul-hijo">
          <li class="nuevo" v-for="_li in li.children">
            <router-link :to="'/'+lang.route+'/docs/'+li.path+_li.path" class="nav-link" active-class="activo">
              {{_li.path.replace('-',' ')}}
              <span v-if="_li.new">{{_li.new}}</span>
            </router-link>
          </li>
        </ul>
        </template>
    </ul>
  </div>
  <div @click="fuera=false" :class="{'obscuro-activo':fuera}" class="obscuro">

  </div>
  </div>
</template>

<script>
import {children} from '../router/index.js'
export default {
  data(){
    return {
      fuera:false,
      oculto:true,
      childrenx:children,
    }
  },
  created(){
    this.$router.beforeEach((to, from, next) => {
      this.fuera = false
        next()
    })
  },
  methods:{
    pushx(ruta){
      var _this = this
      this.$router.push(ruta,function(){
        _this.$set(_this.$store.state,'estas',ruta)
      })
    }
  }
}
</script>

<style lang="css" scoped>
.activoPadre {
  color: rgb(var(--morado));
}
.oculto {
  transform: translate(-100%);
}
.con-menux {
  position: fixed;
  z-index: 10000;
}
.obscuro {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  left: 0px;
  top: 0px;
  z-index: 100;
  visibility: hidden;
  opacity: 0;
  transition: all .3s ease;
}
.obscuro-activo {
  opacity: 1;
  visibility: visible;
}
.nuevo a{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nuevo span {
  padding: 5px;
  font-size: 10px;
  background: rgb(var(--morado));
  color:rgb(255, 255, 255);
  border-radius: 5px;
  text-transform: capitalize;
}
a {
  color: rgba(0, 0, 0, 0.6);
  display: block;
}
.activo {
  color: rgb(var(--morado));
  border-right: 2px solid rgb(var(--morado))
}
  .ul-principal {
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.040); */
    height: auto;
    overflow: auto;
    width: 100%;
    /* height: calc(100% - 73px); */
    padding-bottom: 20px;

  }
  li {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.6);
    transition: all .3s ease;
  }
  li a {
    text-transform: capitalize;
  }
  .ul-principal>li{
    padding: 15px;
    font-size: 17px;
    font-weight: bold;
    border-bottom: 1px solid rgba(0, 0, 0,.040);
    border-left: 0px solid rgb(var(--morado));
  }
  .ul-principal>li:hover {
    color: rgb(var(--morado));
    border-left: 4px solid rgb(var(--morado));
  }
  .ul-hijo {
    border-bottom: 1px solid rgba(0, 0, 0,.040);

  }
  .ul-hijo li a{
    padding: 9px;
    padding-left: 25px;
    transition: all .3s ease;
  }
  .ul-hijo li:last-child a{
    border-bottom: 0px solid rgba(0, 0, 0,.040) !important;
  }
    .ul-hijo li:hover a{
      color: rgb(var(--morado));
    }
  .menu-doc {
      position: absolute;
      left: 0px;
      top: 0px;
      height: calc(100vh - 49px);
      margin-top: 49px;
      width: 260px;
      background: rgb(255, 255, 255);
      z-index: 200;
      box-shadow: 10px 0px 20px 0px rgba(0, 0, 0,.030);
      transition: all .3s ease;
      display: flex;

      /* align-items: center; */
      /* justify-content: center; */
      flex-direction: column;
  }

  .btn-menu {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 45px;
    height: 45px;
    background: rgb(255, 255, 255);
    box-shadow: 5px 3px 10px 0px rgba(0, 0, 0, 0.150);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    border-radius: 0px 5px 5px 0px;
    cursor: pointer;
  }
  .btn-menu i{
    font-size: 25px;
  }



  .linea-1 {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 28px;
    height: 2px;
    background: rgb(80, 80, 80);
    transform: translate(-50%,-50%) rotate(0deg);
    transition: all .3s ease;
    opacity: 0;
    backface-visibility: hidden;
  }
  .linea-2{
    opacity: 0;
    transition: all .3s ease;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 28px;
    height: 2px;
    background: rgb(80, 80, 80);
    transform: translate(-50%,-50%) rotate(0deg);
    backface-visibility: hidden;
  }

  .closeActivo .linea-1{
    opacity: 1;
    transform: translate(-50%,-50%) rotate(-45deg) !important;
  }
  .closeActivo .linea-2{
    opacity: 1;
    transform: translate(-50%,-50%) rotate(45deg) !important;
  }


  .menu-linea-1 {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 28px;
    height: 2px;
    background: rgb(80, 80, 80);
    transform: translate(-50%,-50%) rotate(0deg);
    transition: all .3s ease;
    opacity: 0;
    backface-visibility: hidden;
  }
  .menu-linea-2 {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 28px;
    height: 2px;
    background: rgb(80, 80, 80);
    transform: translate(-50%,-50%) rotate(0deg);
    transition: all .3s ease;
    opacity: 0;
    backface-visibility: hidden;
  }
  .menu-linea-3 {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 28px;
    height: 2px;
    background: rgb(80, 80, 80);
    transform: translate(-50%,-50%) rotate(0deg);
    transition: all .3s ease;
    opacity: 0;
    backface-visibility: hidden;
  }

  .menuActivo .menu-linea-1 {
    opacity: 1;
    top: 35%;
  }
  .menuActivo .menu-linea-2 {
    opacity: 1;
  }
  .menuActivo .menu-linea-3 {
    opacity: 1;
    top: 66%;
  }
.img-menu-doc {
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
}
.img-menu-doc img{
  width: 80%;
}
@media only screen and (max-width: 1000px) {
  .menu-doc {
    transform: translate(-100%);
    height: calc(100vh - 0px);
    margin-top: 0px;
  }

  .menu-doc:not(.oculto) .btn-menu {
    transform: translate(100%);
    opacity: 1;
  }
  .menu-fuera {
    transform: translate(0);
  }

}
@media only screen and (max-width: 650px) {
  .img-menu-doc {
    display: block;
  }
}
</style>
