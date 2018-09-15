<template lang="html">
  <transition name="vs-sidebar-overlay">
    <div
      v-show="vsStatic || vsActive"
      ref="considebar"
      :class="{'vsStatic':vsStatic,'body-sidebar':vsParent=='body'}"
      class="vs-component con-sidebar">

      <!-- Overlay -->
      <div
        v-if="vsActive && (!vsBackgroundHidden || !vsStatic)"
        class="con-darkx"
        @click="clickOut()"/>

      <!-- Core -->
      <transition
        :leave-to-class="`vs-sidebar-core-${vsPos}`"
        :enter-class="`vs-sidebar-core-${vsPos}`"
        appear
        name="vs-sidebar-core">
        <div
          v-show="vsStatic || vsActive"
          :class="{'reducex':reduce}"
          :style="posStyle"
          class="vs-sidebar"
        >
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
      </transition>
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
    },
    vsPos:{
      default:'left',
      type:String
    }
  },
  data:()=>({
    reduce:false
  }),
  computed:{
    posStyle(){
      return {
        [this.vsPos]: '0px'
      }
    }
  },
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

.vs-sidebar-overlay-enter-active, .vs-sidebar-overlay-leave-active {
  transition: opacity .5s;
}
.vs-sidebar-overlay-enter, .vs-sidebar-overlay-leave-to /* .vs-sidebar-overlay-leave-active below version 2.1.8 */ {
  opacity: 0 !important;
}


.vs-sidebar-core-left
  transform translate(-100%) !important

.vs-sidebar-core-right
  transform translate(100%) !important

.con-sidebar
  transition all .25s
  height 100%
  position absolute
  left 0px
  top 0px
  width 100%
  z-index 10000
  overflow hidden

  .expand-reduce
    display flex
    justify-content flex-end
    position relative
    // background rgb(254, 57, 194)
    width 100%

    i
      position relative
      display block
      padding 7px
      cursor pointer

  &.body-sidebar
    position fixed !important

  .con-darkx
    position absolute
    width 100%
    height 100%
    left 0px
    top 0px
    opacity 1
    background rgba(3, 7, 15,.2)
    transition all .3s ease

  .vs-sidebar
    width calc(100% - 20px)
    max-width 270px
    height 100%
    position absolute
    top 0px
    box-shadow 5px 0px 20px 0px rgba(0, 0, 0, 0.1)
    background rgb(255, 255, 255)
    display block
    transform translate(0)
    transition all .3s ease

    .ulx
      padding 0px
      overflow auto
      height 100%

    header
      padding-top 20px


&.reducex

  .expand-reduce
    width 100%
    align-items center
    justify-content center
  // background rgb(24, 198, 180) !important
  max-width 60px !important

  li
    width 45px !important
    height 45px !important
    border-radius 10px
    // overflow hidden
    margin-left 7.5px
    margin-top 5px !important
    margin-bottom 5px !important
    background rgb(255, 255, 255)
    padding-left 0px !important
    box-shadow 0px 8px 30px 4px rgba(0, 0, 0, 0.08)

    &.active-item
      .vs-tagx
        background rgb(255, 255, 255)

      a
        color rgb(255, 255, 255) !important

      &:after
        border-radius 10px
        width 4px
        display none
        height 30px !important

    .vs-tagx
      width 7px !important
      height 7px !important
      right 5px
      padding 0px !important
      overflow hidden
      color rgba(255, 255, 255,0) !important
      top 5px !important
      position absolute !important
      transform translate(0) !important

    a
      padding 0px !important
      position absolute
      width 100%
      height 100%
      display flex
      align-items center !important
      justify-content center !important
      margin 0px !important
      .material-icons
        margin-right 0px !important
    .only-reduse
      display block !important
    .textx_span
      display none
    .icon-arrowx
      font-size 0.9375em !important
      top 9px !important
      right 1px !important
      margin-right 0px !important

  .labelx
    padding 0px !important
    display flex
    align-items center
    justify-content center
    i
      margin-right 0px !important


@css {
  .reducex .active-item {
    background: rgb(var(--primary));
  }
}


// static
.vsStatic
  position relative
  display block
  width 100%
  width 280px
  .vs-sidebar
    box-sizing border-box
    border-right 1px solid rgba(0, 0, 0, 0.1)
    width 100% !important

</style>
