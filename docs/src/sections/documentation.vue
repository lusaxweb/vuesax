<template lang="html">

  <div class="con-doc">



  <div class="doc">



    <transition name="fade">
    <router-view/>
  </transition>
  </div>
  <div class="color">
    <div class="colorMover">

    </div>
  </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {

  created(){
    this.$store.state.menuVisible = true
  },
  mounted(){


    // $(".con-codes").scroll(function(event) {
    //   if($(this).scrollTop())
    //   $(".color").css({'top':'-'+$(this).scrollTop()/3+'px'});
    //   if($(this).scrollTop()>400){
    //     $('.contiene-titulo').addClass('solo-title');
    //   } else {
    //
    //     $('.contiene-titulo').removeClass('solo-title');
    //   }
    // });
  },
}
</script>

<style lang="css" scoped>
.color {
  /* background: radial-gradient(ellipse at 70% 70%,rgba(var(--morado),1) 8%,rgb(198, 45, 191) 42%,rgb(250, 178, 97) 58%); */
  /* background: linear-gradient(45deg, rgba(var(--morado),1) 0%,rgb(198, 45, 191) 50%, rgb(250, 178, 97) 100%); */
  padding-bottom: 30px;
  width: 110%;
  height: 500px;
  position: absolute;
  left: -5%;
  top: 0px;
  /* top: -110px; */
  display: block;
  /* transform: translate(0,-200px); */
  z-index: 100;
  transform: rotate(-5deg) translate(0,-250px);
  border-radius: 50%;
  /* box-shadow: 0px 0px 30px 0px rgba(var(--morado),.5); */
  overflow: hidden;
}
.colorMover {
  position: absolute;
  margin-left: -25%;
  padding-bottom: 75%;
    padding-top: 75%;
  margin-top: -75%;
  animation: GradientRotation 15s steps(120) infinite;
  width: 150vw;
  height: 150vh;
  background: radial-gradient(ellipse at 70% 70%,rgba(var(--morado),1) 8%,rgb(198, 45, 191) 42%,rgb(250, 178, 97) 58%);
}

@keyframes GradientRotation {
  0% {
    /* -webkit-transform: rotate(0deg); */
    transform: rotate(0deg);
  }
  100% {
    /* -webkit-transform: rotate(360deg); */
    transform: rotate(360deg);
  }
}
.color::after {
  position: absolute;
  top: 0px;
  left: 100px;
  content: '';
  width: 0px;
  height: 0px;
  box-shadow: inset 0px 0px 20px 0px rgb(255, 255, 255);
  border-radius: 50%;
  animation: gota 6s ease infinite;
  display: block;
}
.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter  /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translate(-40%) ;
}
.fade-leave-to {
  opacity: 0;
  transform: translate(40%) ;
}

.con-doc {
  /* margin-left: 260px; */
  top: 0px;
  /* padding: 30px; */
  padding-top: 0px;
  left: 0px;
  width: 100%;
  height: calc(100% - 59px);
  position: fixed;
  background: rgb(245, 245, 245);
  /* background: linear-gradient(45deg, rgba(var(--morado),1) 0%, rgba(var(--morado),1) 100%); */
  z-index: 1000;
  margin-top: 49px;

}
.doc {
  width: calc(100% - 260px);
  position: relative;
  margin-left: 260px;
  z-index: 1000;
  display: block;
}
@media only screen and (max-width: 1000px) {
  .doc {
    width: 100%;
    position: relative;
    margin-left: 0px;
  }
}
@media only screen and (max-width: 600px) {
  .color {
  height: 250px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all 0s;
  }
  .fade-enter  /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translate(0) scale(1);
  }
  .fade-leave-to {
    opacity: 0;
    transform: translate(0) scale(1);
  }
}
</style>
