<template lang="html">
  <transition name="noti">
  <div
    ref="noti"
    :style="stylex"
    v-show="active"
    :class="[`vs-noti-${position}`,`vs-noti-${color}`]"
     class="vs-component vs-notifications">
    <h3>{{title}}</h3>
    <p>{{text}}</p>
    <span :style="fillingStyle" class="filling"></span>
  </div>
</transition>
</template>

<script>
export default {
  data:()=>({
    color:'primary',
    colorText:'rgb(255, 255, 255)',
    active:false,
    text:null,
    title:null,
    position:'bottom-right',
    cords:{
      top:null,
      left:null,
      right:null,
      bottom:null,
    },
    widthx:0,
  }),
  created(){
    setTimeout( () => {
      this.moverNotis()
    }, 0);
    this.changeCords()
  },
  mounted(){
    setTimeout( () => {
      this.widthx = this.$refs.noti.clientWidth
    }, 0);
  },
  computed:{
    fillingStyle(){
      return {
        ...this.cords,
        background: this.color,
        height:`${this.widthx*2}px`,
        width:`${this.widthx*2}px`,
        transform: `translate(-${this.widthx}px)`
      }
    },
    stylex(){
      return {
        ...this.cords,
        color: this.colorText,
      }
    }
  },
  methods:{
    changeCords(){
      let positions = this.position.split('-')
      let search = (text) => {
        return positions.indexOf(text)!=-1
      }
      if(search('top')){
        this.cords.top = '0px'
      }
      if(search('bottom')){
        this.cords.bottom = '0px'
      }
      if(search('right')){
        this.cords.right = '0px'
      }
      if(search('left')){
        this.cords.left = '0px'
      }
    },
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

         if (this.position.search('top')!=-1 && this.position.search('center')!=-1) {
          notisx[i].style.transform = `translate(-50%,${hx}px)`
          notisx[i].style.zIndex = 10000-i
        }
         if (this.position.search('bottom')!=-1 && this.position.search('center')!=-1) {
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

// animations
.noti-enter-active, .noti-leave-active {
  transition: opacity .5s;
}
.noti-enter, .noti-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scale(.5) !important;
}

.vs-notifications
  position: fixed;
  z-index: 200000;
  padding: 5px;
  margin: 8px;
  border-radius: 10px;
  overflow: hidden;
  background: rgb(141, 189, 188);
  transition: all .2s ease;
  .filling
    position: absolute;
    width: 100%;
    height: 100%;
for colorx, i in $vs-colors
  .vs-noti-{colorx}
    .filling
      background: $vs-colors[colorx];
      width: 10px;
      height: 10px;
      border-radius: 50%;



</style>
