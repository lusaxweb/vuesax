<template lang="html">
  <transition
  name="noti"
  v-on:before-enter="beforeEnter"
  v-on:enter="enter"
  v-on:leave="leave"
  >
  <div
    @click="clickNoti"
    ref="noti"
    :style="stylex"
    v-if="active"
    :class="[`vs-noti-${position}`,`vs-noti-${color}`,{'activeNoti':active}]"
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
    active:true,
    text:null,
    title:null,
    position:'top-right',
    time:3000,
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

    setTimeout( () => {
      this.closeNoti()
    }, this.time);
  },
  computed:{
    fillingStyle(){
      return {
        left: this.cords.left?'-100px':null,
        right: this.cords.right?'-100px':null,
        background: this.color,
        height:`${this.widthx*2}px`,
        width:`${this.widthx*2}px`,
        // transform: `translate(${this.widthx/1.5}px,${this.widthx/1.5}px)`
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
    clickNoti(){
      this.active = false
    },
    beforeEnter(el) {
      el.style.opacity = 0
    },
    enter(el, done){
      let h = el.scrollHeight
      el.style.opacity = 1
      done()
    },
    leave(el, done) {
      el.style.opacity = 0
      let transformx = el.style.transform
      if(this.cords.left == '50%'){
        transformx += ` translateY(${this.cords.top?'-':''}100%)`
      } else {
        transformx += ` translateX(${this.cords.left?'-':''}100%)`
      }
      console.log("transformx",transformx);
      el.style.transform = transformx
      setTimeout( () => {
        done()
        this.moverNotis()
      }, 100);
    },
    closeNoti(){
      this.active = false
    },
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

      if(search('center')) {
        this.cords.left = '50%'
      }
    },
    moverNotis(){
      // console.log("paso en posision");
        let notisx = document.querySelectorAll('.vs-noti-'+this.position);
        console.log(notisx);
        for (var i = 0; i < notisx.length; i++) {
          let hx = 10
          for (var i2 = 0; i2 < i; i2++) {
            hx += notisx[i2].clientHeight + 10
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


.vs-notifications
  position: fixed;
  z-index: 200000;
  padding: 5px;
  // margin: 5px;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 10px;
  overflow: hidden;
  transition: all .3s ease;
  cursor: default;
  h3,p
    z-index: 100;
    position: relative;
    animation: open .4s ease;
  h3
    font-size: 18px;
    padding: 5px;
    padding-bottom: 0px;
  p
    font-size: 15px;
    padding: 5px;
  &.vs-noti-active
    h3,p
      opacity: 1;
  .filling
    position: absolute;
    transition: all .5s ease;
    z-index: 1;
    transform: translate(0,-50%);
for colorx, i in $vs-colors
  .vs-noti-{colorx}
    .filling
      background: $vs-colors[colorx];
      width: 10px;
      height: 10px;
      border-radius: 50%;

@keyframes open {
  0% {
    opacity: 0;
    transform: translate(-30px);
  }
  100% {
    transform: translate(0px);
    opacity: 1
  }
}

</style>
