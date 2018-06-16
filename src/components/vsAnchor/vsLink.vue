<template lang="html">
  <li :id="'link-'+vsHref" :class="{'no-hasta-hover':vsHoverTitle,'a-activox':this.$parent._data.links.length>0?this.$parent._data.links[0].href == vsHref:false,'sinTitle':!vsText}" @click="irSection(vsHref)">
    <span class="spanx">{{vsText}}</span>

    <!-- :href="vsHref" -->
  </li>
</template>

<script>
import easing from '../../utils/easing.js'
export default {
  name:'vs-link',
  props:{
    vsHref:{
      type:String,
      default:'#',
    },
    vsText:{
      type:String,
      default:null,
    },
    vsHoverTitle:{
      type:Boolean,
      default:null,
    },

  },
  data(){
    return {
      padreScroll:'body',
      scrollLess:0,
      time:500,
    }
  },
  mounted(){
    this.padreScroll = this.$parent._props.vsScroll
    this.scrollLess = this.$parent._props.vsScrollLess
    this.time = this.$parent.$props.vsTime
    this.$parent._data.links.push({
      href:this.vsHref
    })
  },
  methods:{
    irSection(idx){
      let conx = document.getElementById(idx.replace('#',''));
      scrollTo(document.querySelector(this.padreScroll), conx.offsetTop - this.scrollLess, this.time);


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
            setTimeout(animateScroll, increment);
          }
        };
        animateScroll();


      }

    }
  }
}
</script>

<style lang="css" scoped>
  .sinTitle {
    border-radius: 6px;
    width: 50px;
    height: 12px;
    background: rgb(235, 235, 235);
    display: block;
  }
  li {
    border-radius: 6px;
      padding: 5px;
      display: block;
      transform: translate(50%);
      transition: transform .2s ease;
      margin-top: 14px;
      margin-bottom: 14px;
      cursor: pointer;
  }
  .a-activox {
    background: rgb(var(--morado));
    transform: translate(20%) !important;
  }
</style>
