<template lang="html">
  <div class="con-vs-anchor">
    <ul>
      <slot>
      </slot>
    </ul>
  </div>
</template>

<script>
import easing from '../../utils/easing.js'
export default {
  name:'vs-anchor',
  props:{
    vsColor:{
      type:String,
      default:null,
    },
    vsScroll:{
      type:String,
      default:'body',
    },
    vsScrollLess:{
      type:[String,Number],
      default:0,
    },
    vsTime:{
      type:[String,Number],
      default:500,
    },
    vsMouseWheel:{
      type:Boolean,
      default:false,
    },
    vsKeyboard:{
      type:Boolean,
      default:false,
    }
  },
  data(){
    return {
      links:[],
      delta:true,
    }
  },
  beforeDestroy(){
    let el = document.querySelector(this.vsScroll)
    el.removeEventListener('scroll',this.scrollx)
    el.removeEventListener('mousewheel',this.mouseWheelx)
    window.removeEventListener('keyup',this.keyboardx)
  },
  mounted(){
    let _this = this
    let el = document.querySelector(_this.vsScroll)
      el.addEventListener('scroll',this.scrollx)
    //   // mouse wheel
    //   if(this.vsMouseWheel){
    //     el.addEventListener('mousewheel',this.mouseWheelx)
    //   }
    //   if(this.vsKeyboard){
    //     window.addEventListener('keyup',this.keyboardx)
    //   }


  },
  methods:{
    scrollx(e){

        let colorear
        for (var i = 0; i < this.links.length; i++) {
          let itemx = document.querySelector('#'+this.links[i].href)
          document.querySelector('#link-'+this.links[i].href).classList.remove('a-activox')
          if(e.target.scrollTop > itemx.offsetTop - 300){
              colorear = document.querySelector('#link-'+this.links[i].href)
          }
        }
        colorear.classList.add('a-activox')

    },
    mouseWheelx(e){

      if(document.querySelector('.a-activox')){
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        console.dir(delta);
        if(this.delta){
          if(delta==1) {
            let estasLink = document.querySelector('.a-activox')
            if(estasLink.previousElementSibling){
              this.irSection(estasLink.previousElementSibling.id.replace('link-',''))
            }
          }
          else{
            let estasLink = document.querySelector('.a-activox')
            if(estasLink.nextElementSibling){
              this.irSection(estasLink.nextElementSibling.id.replace('link-',''))
            }
          }
        }
      }

    },
    keyboardx(e){
      if(document.querySelector('.a-activox')){
        if(this.delta){
          if(e.code == 'ArrowUp'){
            let estasLink = document.querySelector('.a-activox')
            if(estasLink.previousElementSibling){
              this.irSection(estasLink.previousElementSibling.id.replace('link-',''))
            }
          } else if (e.code == 'ArrowDown') {
            let estasLink = document.querySelector('.a-activox')
            if(estasLink.nextElementSibling){
              this.irSection(estasLink.nextElementSibling.id.replace('link-',''))
            }
          }
        }
      }

    },
    irSection(idx){
      let _this = this
      _this.delta = false
      let conx = document.getElementById(idx.replace('#',''));
      scrollTo(document.querySelector(this.vsScroll), conx.offsetTop - this.vsScrollLess, this.vsTime);
      function scrollTo(element, to, duration) {
        var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;
        var animateScroll = function(){
          currentTime += increment;
          var val = easing.easeInOutCirc(currentTime, start, change, duration);
          element.scrollTop = val;
          if(currentTime < duration) {
            var intervalx = setTimeout(animateScroll, increment);

          } else {
            _this.delta = true
          }
        };
        animateScroll();


      }

    }
  }
}
</script>

<style lang="css" scoped>
.con-vs-anchor {
  position: fixed;
  right: 0px;
  top: 50%;
  z-index: 10000;
  transform: translate(0,-50%);
}

</style>
