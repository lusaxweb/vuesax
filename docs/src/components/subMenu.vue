<template lang="html">
  <div class="con-sub-menu">
    <ul>
      <li :class="{'btn-activo':index==0}" :id="'btn-'+li.idx" @click="irSection(li.idx,li.title)" v-for="li,index in dataCodes">
        {{li.title}}
        <!-- <a :href="'#'+li.idx">{{li.title}}</a> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    dataCodes:{
      type:Array
    }
  },

  methods:{
    irSection(idx,titlex){
      console.log();
      let codex = document.getElementById(idx);
      console.log();
      scrollTo(document.querySelector('.con-codes'), codex.offsetTop - 10, 500);
      console.log();
      // router.
      // this.$router.push(this.$parent.title+'/#'+titlex)

      function easeInOutQuad(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
      };

      function scrollTo(element, to, duration) {
        var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

        var animateScroll = function(){
          currentTime += increment;
          var val = easeInOutQuad(currentTime, start, change, duration);
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

<style lang="css">
  .btn-activo {
    border-left: 2px solid rgb(var(--morado)) !important;
    color: rgb(var(--morado)) !important;
  }
  .con-sub-menu {
    width: 160px;
    position: absolute;
    right: 0px;
    background: rgba(245, 245, 245,1);
    z-index: 10000;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .con-sub-menu ul li {
    padding: 8px;
    padding-left: 10px;
    cursor: pointer;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.7);
    border-left: 2px solid rgba(0, 0, 0, 0.2);
    transition: all .2s ease;
  }
  @media only screen and (max-width: 800px)  {
      .con-sub-menu {
        transform: translate(100%);
      }
  }
</style>
