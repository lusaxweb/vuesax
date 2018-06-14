<template lang="html">
  <transition name="dropdownx">
  <div
  :class="{'rightx':rightx,'notHeight':notHeight}"
  v-show="dropdownVisible"
  @mouseover="toggleMenu($event)"
  @mouseout="toggleMenu($event)"
  :style="{
    'left':leftx+'px',
    'top':topx+'px'
  }" ref="options" class="con-vs-dropdown-menu">
    <ul v-if="!vsCustomContent" class="vs-component vs-dropdown-menu" >
      <div class="after"></div>
      <slot>
      </slot>
    </ul>
    <div v-else class="vs-dropdown-custom vs-dropdown-menu">
      <slot>
      </slot>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  name: "vs-dropdown-menu",
  data:()=>({
    dropdownVisible:false,
    leftAfter:20,
    leftx:0,
    topx:0,
    rightx:true,
    vsTriggerClick:false,
    widthx:0,
    notHeight:false,
    vsCustomContent:false
  }),
  mounted(){
    this.insertBody()
  },
  watch:{
    dropdownVisible(){
      let dropdownGroup = this.$children.filter((item)=>{
        return item.hasOwnProperty('activeGroup')
      })
      dropdownGroup.forEach((item_group)=>{
        item_group.activeGroup = false
      })
    }
  },
  methods:{
    toggleMenu(event){
      if(event.type == 'mouseover' && !this.vsTriggerClick){
        this.dropdownVisible = true
      } else if (!this.vsTriggerClick) {
        this.dropdownVisible = false
      }
      this.widthx = this.$el.clientWidth
    },
    insertBody(){
      let elx = this.$refs.options
      document.body.insertBefore(elx, document.body.firstChild)
    },
  }

}
</script>

<style lang="stylus">
//transitions
.dropdownx-enter, .dropdownx-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translate(-100%,8px) !important;
}
.con-vs-dropdown-menu
  padding-top: 10px
  position: absolute;
  height: auto;
  width: auto;
  z-index: 20000
  transform: translate(-100%);
  transition: opacity .25s, transform .25s, width .3s ease;
.vs-dropdown-menu
  background: rgb(255, 255, 255);
  padding-left: 0px !important;
  border-radius: 5px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1)
  padding-top: 5px;
  padding-bottom: 5px;
  position: relative;
  .after
    content: '';
    position: absolute;
    right: 10px;
    top: 0px;
    width: 10px;
    height: 10px;
    display: block;
    background: rgb(215, 45, 19);
    transform: rotate(45deg) translate(-7px);
    background: inherit
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    z-index: 10;
&.notHeight
  .after
    top: auto;
    bottom: 0px;
    border-top: 1px solid rgba(0, 0, 0, 0.0);
    border-left: 1px solid rgba(0, 0, 0, 0.0);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    transform: rotate(45deg) translate(7px);

.vs-dropdown-custom
  padding: 5px !important;
  padding-top: 8px !important;
</style>
