<template>
  <div id="app">
    <div class="contenedor">
      <!-- menu top in page -->
      <menu-top/>

      <!-- menu left documents -->
      <menu-doc/>

      <transition name="fade2">
       <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>

import menuDoc from './components/menuDoc.vue'
import menuTop from './components/menuTop.vue'
export default {
  components:{
    menuDoc,
    menuTop,
  },
  name: 'App',
}
</script>

<style>
.fade2-enter-active, .fade2-leave-active {
  transition: all .3s;
}
.fade2-enter,.fade2-leave-to  /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  /* transform: translate(0,-10%); */
}
/* .fade2-enter-active .proximamente img, .fade2-leave-active .proximamente img{
  transition: all .3s;
} */
.fade2-enter .proximamente img,.fade2-leave-to .proximamente img  /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translate(0,-70px) scale(1.1);
}

.fade2-enter-active .contiene-titulo,.fade2-enter-active .contiene-titulo{
  transition: all .3s;
}
.fade2-enter .contiene-titulo  /* .fade-leave-active below version 2.1.8 */ {
  transform: translate(0,-100%);
}

.fade2-enter-active .con-code,.fade2-enter-active .con-code{
  transition: all .3s;
}
.fade2-enter .con-code  /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scale(.5);
}
#app {
  overflow: hidden;
}
.contenedor {
  /* margin-top: 48px; */
  overflow: hidden;
}
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  list-style: none;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  outline: none;
  text-transform: none;
  text-decoration: none;
}
*::-webkit-scrollbar{
  width: 5px;
}
*::-webkit-scrollbar-thumb{
  background: rgb(220, 220, 220);
  border-radius: 5px;
}
:root {
  --morado:92, 60, 196;
}
body {
  overflow: hidden;
  width: 100%;
}



</style>
