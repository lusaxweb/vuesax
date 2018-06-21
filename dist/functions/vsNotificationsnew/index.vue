<template lang="html">
  <div
    :style="stylex"
    v-if="active"
    :class="[`vs-noti-${position}`,`vs-noti-${color}`]"
     class="vs-component vs-notifications">
    <h3>{{title}}</h3>
    <p>{{text}}</p>
    <span class="filling"></span>
  </div>
</template>

<script>
export default {
  data:()=>({
    color:'primary',
    colorText:'rgb(255, 255, 255)',
    active:false,
    text:null,
    title:null,
    position:'right-bottom',
    cords:{
      top:0,
      left:0,
      right:0,
      bottom:0,
    }
  }),
  created(){
    setTimeout( () => {
      this.moverNotis()
    }, 0);
  },
  computed:{
    stylex(){
      return {
        background: this.color,
        color: this.colorText,
        bottom: `${this.cords.bottom}px`,
      }
    }
  },
  methods:{
    moverNotis(){
      // console.log("paso en posision");
      let notisx = document.querySelectorAll('.vs-noti-'+this.position);
      console.log(notisx);
      for (var i = 0; i < notisx.length; i++) {
        let hx = 10
        for (var i2 = 0; i2 < i; i2++) {
          hx += notisx[i2].offsetHeight + 10
        }
        if(this.position.search('center')==-1){
          if(this.position.search('top')!=-1){
            notisx[i].style.transform = `translatey(${hx}px)`
          } else if (this.position.search('bottom')!=-1) {
            notisx[i].style.transform = `translatey(-${hx}px)`
          }
        }

         if (this.position.search('top-center')!=-1) {
          notisx[i].style.transform = `translate(-50%,${hx}px)`
          notisx[i].style.zIndex = 10000-i
        }
         if (this.position.search('bottom-center')!=-1) {
          notisx[i].style.transform = `translate(-50%,-${hx}px)`
          notisx[i].style.zIndex = 10000-i
        }
      }
      // console.log(hx);
    }
  }
}
</script>

<style lang="stylus">

@import '../../styles'

.vs-notifications
  position: fixed;
  z-index: 200000;
  right: 10px;
  bottom: 10px;
  padding: 5px;
  border-radius: 10px;
  overflow: hidden;
  .filling
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;

for colorx, i in $vs-colors
  .vs-noti-{colorx}
    .filling
      background: $vs-colors[colorx];



</style>
