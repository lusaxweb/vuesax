<template lang="html">
  <div class="contenedorx">
    <sub-menu :data-codes="codes"/>
    <div class="con-contenido">


    <titlex :titlex="titlex" :textx="textx"/>
    <div class="con-codes">

      <slot name="codes">
      </slot>
      <div v-if="apix" class="apis">
        <api :data="apix">
        </api>
      </div>
      <!-- <div class="linksx">
        <a v-if="puedesIrAtras" @click.parent="atrasx" href="#">Atras</a>
        <a @click.parent="siguientex" href="#">Siguiente</a>
      </div> -->
    </div>
    </div>
  </div>

</template>

<script>
import subMenu from './subMenu.vue'
import titlex from './title.vue'
import codex from './code.vue'
import api from './api.vue'
import $ from 'jquery'
export default {
  props:[
    'titlex',
    'textx',
    'apix'
  ],

  components:{
    subMenu,
    titlex,
    codex,
    api,
  },
  data(){
    return {
      codes:[],
      title:this.titlex
    }
  },

  computed:{
    puedesIrAtras(){
      return true
      // if($('.ul-hijo').find('.activo').index()==0){
      //   return false
      // } else {
      //   return true
      // }
    }
  },
  methods:{
    scrollx(e){
      console.log(e);
    },
    siguientex(){
      // if($('.ul-hijo').find('.activo').parent().next('li').length==0){
      //   return
      // }
      let urlx = $('.ul-hijo').find('.activo').parent().next('li').find('a')[0].__vue__.to
      console.log(urlx);
      // if(urlx){
        this.$router.push(urlx)
      // }
    },
    atrasx(){

        // if($('.ul-hijo').find('.activo').parent().index() == 0){
        //   return
        // }

        let urlx = $('.ul-hijo').find('.activo').parent().prev('li').find('a')[0].__vue__.to
        console.log(urlx);
        this.$router.push(urlx)

    }
  },
  mounted(){


      // let codes = document.querySelector(".con-codes")
      // console.log(codes);
      // codes.addEventListener('scroll',(e)=> {
      //   this.scrollx(e)
      // })



    var lastScrollTop = 0;

    $('.con-codes').bind('mousewheel', function(e){
      // console.log($(".con-codes").scrollTop());
            if(e.originalEvent.wheelDelta /120 > 0) {
                // console.log('scrolling up !');
                if($(".con-codes").scrollTop()==0){
                  $(".con-codes").css({"transform":'translate(0,45px)'});
                  setTimeout(function () {
                    $(".con-codes").css({"transform":'translate(0,0px)'});
                  }, 300);
                }
            }
            else{
              if(($(".con-codes")[0].scrollHeight - $(".con-codes")[0].scrollTop) === $(".con-codes")[0].clientHeight){
                $(".con-codes").css({"transform":'translate(0,-110px)'});
                setTimeout(function () {
                  $(".con-codes").css({"transform":'translate(0,-55px)'});
                }, 300);
              }
                // console.log('scrolling down !');
            }
        });

        let _this = this
          $(".con-codes").scroll(function(event) {

            let cuantosFaltan = 0
            for (var i = 0; i < _this.codes.length; i++) {
              let codex = document.querySelector('#'+_this.codes[i].idx)
              let topx = codex.offsetTop - 20

              // console.log("top",$(this).scrollTop(),'===',topx);
              if($(this).scrollTop() + 50 >= topx){
                // console.log(codex);
                let btnx = document.querySelector('#btn-'+_this.codes[i].idx)
                let btnsx = document.querySelectorAll('.btn-activo')
                btnsx.forEach((item)=>{
                  item.classList.remove('btn-activo')
                })
                btnx.classList.add('btn-activo');
              }

                if(($(".con-codes")[0].scrollHeight - $(".con-codes")[0].scrollTop) === $(".con-codes")[0].clientHeight){
                  let btnx = document.querySelector('#btn-'+_this.codes[i].idx)
                  if($(this).scrollTop() < topx){
                    btnx.classList.add('btn-activo');
                  }
                  // console.log(cuantosFaltan);
                  // topx = $(this).scrollTop() - 20
                }




            }

            if($(this).scrollTop())
            $(".color").css({'top':'-'+$(this).scrollTop()/3+'px'});
            if($(this).scrollTop()>400){
              $('.contiene-titulo').addClass('solo-title');
            } else {

              $('.contiene-titulo').removeClass('solo-title');
            }
          });

$(".con-codes").scroll(function(event){
   var st = event.target.scrollTop
   if (st > lastScrollTop){
     if(st>500){
        $('.con-titulo').css({"transform":'translate(0,-55px)'});
        $('.con-codes').css({"transform":'translate(0,-55px)'});
     }
     // console.log('para abajo');
   } else {
     if(st>500){
       $('.con-codes').css({"transform":'translate(0,0px)'});
       $('.con-titulo').css({"transform":'translate(0,0px)'});
     }
     // console.log('para arriba');
   }
   lastScrollTop = st;
});

  $('.color').animate({'top':'0px'})

  }
}
</script>

<style lang="css" scoped>
.linksx {
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin: auto;
  margin-top: 10px;
  max-width: 1200px;
}
.linksx a {
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.0);
  padding-left: 20px;
  padding-right: 20px;
  transition: all .3s ease;
  display: block;
  color: rgb(var(--morado));
}
.linksx a:hover {
  background: rgb(255, 255, 255);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
  transform: translate(0,-4px);
}
.contenedorx::after {
    position: absolute;
    bottom: 0px;
    content: '';
    left: 0px;
    width: 100%;
    height: 150px;
    background: linear-gradient(bottom,rgb(245, 245, 245) 0%, rgba(245, 245, 245,.0) 100%);
    z-index: 7000;
}

@keyframes gota {
	0% {
		width: 0px;
    height:0px;
	}
	60% {
    opacity: 0;
    left: -250px;
    top: -250px;
    height:800px;
		width: 800px;
	}
	100% {
    opacity: 0;
    left: -250px;
    top: -250px;
    height:800px;
		width: 800px;
	}
}
.contenedorx {
  width: 100%;
  /* overflow: auto; */
  height: 100vh;
  position: absolute;
}
.con-contenido {
  width: calc(100% - 170px);
  height: 100vh;
}
.con-codes {
  width: calc(100%);
  /* max-width: 1060px; */
  z-index: 5000;
  /* padding: 30px; */
  margin: auto;
  /* background: rgb(129, 227, 70); */
  position: relative;
  /* margin-top: 10px; */
  /* display: flex; */
  /* align-items: center;
  justify-content: flex-start;
  flex-direction: column; */
  overflow: auto;
  height: 100%;
  padding-bottom: 250px;
  transition: all .3s ease;
}
.con-codes::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255,0) !important;
}
.-moz- .con-codes {
  height: calc(100% - 100px);
}
@media only screen and (max-width: 800px)  {
  .con-contenido {
      width: 100%;
  }
}
@media only screen and (max-width: 500px) {

  .contenedorx::after {
    height: 50px;
  }
}

</style>
