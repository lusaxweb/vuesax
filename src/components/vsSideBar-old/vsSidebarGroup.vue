<template lang="html">
  <div
    ref="considebar"
    :class="{'openx':open}"
    class="vs-component con-sidebar-group">
    <li
      ref="labelx"
      class="labelx"
      @click="open=!open">
      <i
        v-if="vsIcon"
        class="material-icons">
        {{ vsIcon }}
      </i>
      <i
        v-if="vsIconReduce"
        class="material-icons only-reduse">
        {{ vsIconReduce }}
      </i>
      <span class="textx_span">
        {{ vsLabel }}
      </span>
      <i class="material-icons icon-arrowx">
        keyboard_arrow_down
      </i>
    </li>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <ul
        v-show="open"
        ref="ulx">
        <slot/>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name:'VsSidebarGroup',
  props:{
    vsIcon:{
      default:null,
      type:String
    },
    vsIconReduce:{
      default:null,
      type:String
    },
    vsOpen:{
      default:false,
      type:Boolean
    },
    vsLabel:{
      default:'items',
      type:String
    }
  },
  data:()=>({
    open:false,
  }),
  created(){
    if(this.vsOpen){
      this.open = true
    }
  },
  methods:{
    na(min=0, max=10000) {
      return Math.round(Math.random() * (max - min) + min);
    },
    clickItem(){
      this.$parent.clickItem()
    },
    beforeEnter() {
      this.$refs.ulx.style.height = 0
    },
    enter(el, done){
      let h = this.$refs.ulx.scrollHeight
      this.$refs.ulx.style.height = h + 'px'
      parents(this)
      function parents(_this){
        if(_this.$parent.$el.className.search('con-sidebar-group')!=-1){
          // this.$parent.$el
          let hp = _this.$parent.$refs.ulx.scrollHeight
          _this.$parent.$refs.ulx.style.height = hp + h + 'px'
          parents(_this.$parent)
        }
      }

      done()
    },
    leave(){
      let __this = this
      addParents(this)
      function addParents(_this){
        if(_this.$parent.$refs.ulx){
          let hp = _this.$parent.$refs.ulx.scrollHeight - __this.$refs.ulx.scrollHeight
          _this.$parent.$refs.ulx.style.height = `${hp}px`
          addParents(_this.$parent)
        }
      }
      if(!this.$parent.$refs.ulx){
        this.$refs.ulx.style.height = `${0}px`
      }
      this.$refs.ulx.style.height = `${0}px`
    },
  }
}
</script>

<style lang="stylus">
.con-sidebar-group

  .labelx
    padding: 8px;
    padding-left: 20px;
    transition: all .25s ease
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    &.activeChild
      background: rgb(118, 159, 29) !important
    i.material-icons
      margin-right: 10px;
      font-size: 1.25em;
    .icon-arrowx
      position: absolute;
      right: 0px;
      font-size: 1.3125em;
      top: 50%;
      transform: translate(0,-50%);
      transition: transform .25s ease
  ul
    transition: all .250s ease;
    overflow: hidden;
    padding-left: 0px;
    position: relative;
    li
      padding-left: 10px;
      // margin-top: 0px !important;
      // margin-bottom: 0px !important
  a
    &:hover
      transform: translate(0) !important;
      border-radius: 0px !important
      box-shadow: none !important;


&.openx
  border-bottom: 1px solid rgba(0, 0, 0, 0.060);
  &:last-child
    border-bottom: 0px solid rgba(0, 0, 0, 0.060);
  >.labelx
    background: rgb(248, 248, 248)
    >.icon-arrowx
      transform: translate(0,-50%) rotate(180deg);
  .con-sidebar-group
    .labelx,a
      padding-left: 30px ;
</style>
