<template lang="html">
  <transition
    name="noti"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
  >
    <div
      v-if="active"
      ref="noti"
      :style="stylex"
      :class="[`vs-noti-${position}`,`vs-noti-${color}`,{'activeNoti':active}]"
      class="vs-component vs-notifications"
      @click="clickNoti">
      <div class="content-noti">
        <div class="con-text-noti">
          <h3 v-html="title"/>
          <p v-html="text"/>

          <slot/>
        </div>
        <vs-icon
          v-if="icon"
          :icon="icon"
          :icon-pack="iconPack"
          class="vs-icon-noti"
        ></vs-icon>
      </div>
      <span
        :style="fillingStyle"
        class="filling"/>
    </div>
  </transition>
</template>

<script>
import vsIcon from '../../components/vsIcon/vsIcon.vue'
export default {
  components: {
    vsIcon
  },
  data:()=>({
    fullWidth:false,
    icon:null,
    iconPack:'material-icons',
    color:'primary',
    colorText:'rgb(255, 255, 255)',
    active:true,
    text:null,
    title:null,
    position:'bottom-right',
    time:3000,
    cords:{
      top:null,
      left:null,
      right:null,
      bottom:null,
    },
    widthx:0,
    fixed:false,

  }),
  computed:{
    fillingStyle(){
      return {
        left: this.cords.left?'-100px':null,
        right: this.cords.right?'-100px':null,
        background: this.color,
        height:`${this.widthx*2}px`,
        width:`${this.widthx*2}px`,
      }
    },
    stylex(){
      return {
        ...this.cords,
        color: this.colorText,
        width: this.fullWidth?`calc(100% - 14px)`:``,
        maxWidth: this.fullWidth?'none':`350px`
      }
    }
  },
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

    if(!this.fixed){
      setTimeout( () => {
        this.closeNoti()
      }, this.time);
    }
  },
  methods:{
    clickNoti(){
      this.active = false
      this.click?this.click():null
    },
    beforeEnter(el) {
      el.style.opacity = 0
    },
    enter(el, done){
      el.style.opacity = 1
      done()
    },
    leave(el, done) {
      el.style.opacity = 0
      let transformx = el.style.transform
      if(this.cords.left == '50%' || this.fullWidth){
        transformx += ` translateY(${this.cords.top?'-':''}100%)`
      } else {
        transformx += ` translateX(${this.cords.left?'-':''}100%)`
      }
      el.style.transform = transformx
      setTimeout( () => {
        done()
        this.moverNotis()
      }, 150);
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
      let notisx = document.querySelectorAll('.vs-noti-'+this.position);
      for (var i = 0; i < notisx.length; i++) {
        let hx = 10
        for (var i2 = 0; i2 < i; i2++) {
          hx += notisx[i2].clientHeight + 6
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
    }
  }
}
</script>
