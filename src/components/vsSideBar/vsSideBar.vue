<template lang="html">
  <transition name="sidebarx">
    <div
      v-show="vsStatic?true:vsActive"
      ref="considebar"
      :class="{'vsStatic':vsStatic,'body-sidebar':vsParent=='body'}"
      class="vs-component con-sidebar">
      <div
        v-if="vsBackgroundHidden?false:!vsStatic"
        class="con-darkx"
        @click="clickOut()"/>
      <!-- :style="{'color':vsColor?/[#()]/.test(vsColor)?vsColor:`rgba(var(--${vsColor}),1)`:'rgb(var(--primary))'}" -->
      <div
        :class="{'reducex':reduce}"
        class="vs-sidebar">
        <div
          v-if="vsReduceExpand"
          class="expand-reduce">
          <i
            class="material-icons"
            @click="reduce=!reduce">
            {{ reduce?'menu':'first_page' }}
          </i>
        </div>

        <header>
          <slot name="header"/>
        </header>


        <ul class="ulx">
          <slot/>
        </ul>


        <footer>
          <slot name="footer"/>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: "VsSidebar",
  props:{
    vsColor:{
      default:null,
      type:String
    },
    vsBlur:{
      default:false,
      type:Boolean
    },
    vsClickClose:{
      default:false,
      type:Boolean
    },
    vsActive:{
      default:false,
      type:[Boolean,String]
    },
    vsParent:{
      default:'body',
      type:String,
    },
    vsReduce:{
      default:false,
      type:Boolean
    },
    vsReduceExpand:{
      default:false,
      type:Boolean
    },
    vsStatic:{
      default:false,
      type:Boolean
    },
    vsBackgroundHidden:{
      default:false,
      type:Boolean
    }
  },
  data:()=>({
    reduce:false
  }),
  watch:{
    vsReduce(){
      this.reduce = this.vsReduce
    },
    reduce(){
      this.$slots.default.forEach((item)=>{
        if(item.componentInstance) {
          item.componentInstance.reduce = this.reduce
        }
      })
    },
    vsActive(){
      if(this.vsBlur && this.vsParent=='body'){
        let elx = document.querySelector('#app')
        if(this.vsActive){
          elx.style.filter = 'blur(8px)'
        } else {
          elx.style.filter = 'none'
        }
      }
    }
  },
  mounted(){
    this.$nextTick(()=>{
      document.querySelector(this.vsParent).addEventListener("touchstart",this.onTouchStart)
      document.querySelector(this.vsParent).addEventListener("touchend",this.onTouchEnd)
      this.insertBody()
    })


  },
  methods:{
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },
    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.$emit('update:vsActive',true)
        } else {
          this.$emit('update:vsActive',false)
        }
      }
    },
    clickItem(){
      if(this.vsClickClose){
        this.clickOut()
      }
    },
    clickOut(){
      this.$emit('update:vsActive',false)
    },
    insertBody(){
      let elx = this.$refs.considebar
      let parentx = document.querySelector(this.vsParent)
      parentx.insertBefore(elx, parentx.firstChild)
    },
  }
}
</script>

<style lang="stylus">
// vars


.sidebarx-enter-active , .sidebarx-leave-active {
  transition: all .25s;
}
.sidebarx-enter , .sidebarx-leave-to /* .sidebarx-leave-active below version 2.1.8 */ {
  // transition: all .5s ;
  // transform: translate(-100%) !important;
}

.sidebarx-enter-active .vs-sidebar, .sidebarx-leave-active .vs-sidebar{
  transition: all .25s;
}
.sidebarx-enter .vs-sidebar, .sidebarx-leave-to .vs-sidebar/* .sidebarx-leave-active below version 2.1.8 */ {
  // transition: all .5s ;
  transform: translate(-100%) !important;
}

.sidebarx-enter-active .con-darkx, .sidebarx-leave-active .con-darkx{
  transition: all .25s ease !important;
}
.sidebarx-enter .con-darkx, .sidebarx-leave-to .con-darkx/* .sidebarx-leave-active below version 2.1.8 */ {
  // transition: all .5s ;
  opacity: 0 !important;
}

.con-sidebar
  transition: all .25s ;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  z-index: 10000;
  overflow: hidden;
  .expand-reduce
    display: flex;
    justify-content: flex-end;
    position: relative;
    // background: rgb(254, 57, 194);
    width: 100%;
    i
      position: relative;
      display: block;
      padding: 7px;
      cursor: pointer;
  &.body-sidebar
    position: fixed !important;
  .con-darkx
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    opacity: 1;
    background: rgba(3, 7, 15,.2)
    // background-image: linear-gradient(200deg, rgba(0, 0, 0, 0.01) 25%, rgba(0, 0, 0, 0.4) 100%);
  .vs-sidebar
    width: calc(100% - 20px);
    max-width: 270px;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    box-shadow: 5px 0px 20px 0px rgba(0, 0, 0, 0.1);
    background: rgb(255, 255, 255);
    display: block;
    transform: translate(0);
    transition: all .3s ease;
    .ulx
      padding: 0px;
      overflow: auto;
      height: 100%;
    header
      padding-top: 20px;


&.reducex
  .expand-reduce
    width: 100%;
    align-items: center;
    justify-content: center;
  // background: rgb(24, 198, 180) !important;
  max-width: 60px !important;
  li
    width: 45px !important;
    height: 45px !important;
    border-radius: 10px;
    // overflow: hidden;
    margin-left: 7.5px;
    margin-top: 5px !important;
    margin-bottom: 5px !important;
    background: rgb(255, 255, 255);
    padding-left: 0px !important
    box-shadow: 0px 8px 30px 4px rgba(0, 0, 0, 0.08)
    &.active-item
      // background: rgb(114, 168, 12);
      .vs-tagx
        background: rgb(255, 255, 255)
      a
        color: rgb(255, 255, 255) !important;
      &:after
        border-radius: 10px;
        width: 4px;
        display: none;
        height: 30px !important;
    .vs-tagx
      width: 7px !important;
      height: 7px !important;
      right: 5px;
      padding: 0px !important;
      overflow: hidden;
      color: rgba(255, 255, 255,0) !important
      top: 5px !important;
      position: absolute !important;
      transform: translate(0) !important;
    a
      padding: 0px !important
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center !important;
      justify-content: center !important;
      margin: 0px !important
      .material-icons
        margin-right: 0px !important;
    .only-reduse
      display: block !important;
    .textx_span
      display: none;
    .icon-arrowx
      font-size: 0.9375em !important;
      top: 9px !important;
      right: 1px !important;
      margin-right: 0px !important;
      // transform: translate(0) !important;
  .labelx
    padding: 0px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    i
      margin-right: 0px !important;
  // max-width: 55px !important

@css {
  .reducex .active-item {
    background: rgb(var(--primary))
  }
}


// static
.vsStatic
  position: relative;
  display: block;
  width: 100%;
  width: 280px;
  .vs-sidebar
    box-sizing: border-box;
    border-right: 1px solid rgba(0, 0, 0, 0.1)
    width: 100% !important;

</style>
