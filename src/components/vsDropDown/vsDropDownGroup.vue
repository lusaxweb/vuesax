<template lang="html">
  <li
  :class="{'marginIcon':vsCollapse, 'no-cascading':!vsCollapse, 'group-rightx':rightx}"
  @mouseout="toggleGroup($event)"
  @mouseover="toggleGroup($event)" class="vs-component vs-dropdown-group">
    <span class="span" v-if="vsCollapse">{{vsLabel}}</span>
    <h3 v-else>{{vsLabel}}</h3>
    <i v-if="vsCollapse" class="material-icons icon-group">
      keyboard_arrow_right
    </i>
    <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
    >
      <div ref="ulx" v-if="activeGroup||!vsCollapse" :class="{'con-dropdown-group-no-cascading':!vsCollapse}" class="con-dropdown-group">
        <ul >
          <slot>
          </slot>
        </ul>
      </div>
  </transition>
    <!-- <div ref="ulx" v-if="!vsCollapse" class="con-dropdown-group-no-cascading">
      <ul>
        <slot>
        </slot>
      </ul>
    </div> -->
  </li>
</template>

<script>
export default {
  name:'vs-dropdown-group',
  props:{
    vsLabel:{
      default:'Options',
      type:String
    },
    vsCollapse:{
      default:false,
      type:Boolean
    }
  },
  data:()=>({
    activeGroup:false,
    rightx:false,
    widthx:0,
  }),
  methods:{
    beforeEnter(el) {
      el.style.height = 0
      el.style.opacity = 0
    },
    enter(el, done){
      let h = this.$refs.ulx.scrollHeight
      this.$refs.ulx.style.height = h + 'px'
      el.style.opacity = 1
      parents(this)
      function parents(_this){
        if(_this.$parent.$el.className.search('vs-dropdown-group')!=-1){
          // this.$parent.$el
          let hp = _this.$parent.$refs.ulx.scrollHeight
          _this.$parent.$refs.ulx.style.height = hp + h + 'px'
          parents(_this.$parent)
        } else {

        }
      }

      done()
    },
    leave: function (el, done) {
      let __this = this
      addParents(this)
      function addParents(_this){
        if(_this.$parent.$refs.ulx){
          let hp = _this.$parent.$refs.ulx.scrollHeight - __this.$refs.ulx.scrollHeight
          _this.$parent.$refs.ulx.style.height = hp + 'px'
          addParents(_this.$parent)
        }
      }
      if(!this.$parent.$refs.ulx){
        let hp = this.$refs.ulx.scrollHeight
        this.$refs.ulx.style.height = 0 + 'px'
      }
      this.$refs.ulx.style.height = 0 + 'px'
      el.style.opacity = 0
    },
    toggleGroup(event){
      let parentx
      let _self = this
      searchParent(this)
      function searchParent(_this){
        let parent = _this.$parent
        if(parent.$el.className.indexOf('con-vs-dropdown-menu')==-1){
          searchParent(parent)
        } else {
          parentx = parent
        }
      }

      this.activeGroup = !this.activeGroup
    }
  },
}
</script>

<style lang="stylus">

//transitions
.dropdown-group-enter-active, .dropdown-group-leave-active {
  transition: opacity .25s;
}
.dropdown-group-enter, .dropdown-group-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  // transform: translate(100%) !important;
}

.vs-dropdown-group
  position: relative;
  list-style: none;
  width: calc(100% - 6px);
  margin-left: 3px;
  width: auto;
  display: block;
  padding: 5px;
  padding-left: 10px
  padding-right: 10px
  box-sizing: border-box;
  cursor: pointer;
  transition: all .3s ease;
  .span
    font-size: 0.9375em;
    font-weight: normal;
  &.marginIcon
    padding-right: 25px;
    &:hover
      // background: rgb(245, 245, 245)
      .con-dropdown-group
        border-left: 1px solid rgba(0, 0, 0, 0.1);
      >.icon-group
        transform: translate(0,-50%) rotate(-180deg);
        opacity: 0;
  .icon-group
    position: absolute;
    right: 4px;
    font-size: 1.125em;
    top: 50%;
    transition: all .25s ease;
    transform: translate(0,-50%);
  .con-dropdown-group
    padding-left: 3px
    position: relative;
    right: 0px;
    top: 0px;
    min-width: 130px;
    width: auto;
    z-index: 1000;
    background: inherit
    overflow: hidden;
    transition: all .3s ease;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    ul
      padding-top: 5px;
      // padding-bottom: 5px;
      padding-left: 0px;
      position: relative;
      background: rgb(255, 255, 255);
      // box-shadow: 0px 5px 20px 0px rgba(0, 0, 0,.1);
      border-radius: 5px;
  // &.group-rightx:not(.no-cascading)
  //   >.con-dropdown-group
  //     padding-right: 8px !important;
  //     padding-left: 0px !important;
  //     left: 0px;
  //     right: auto !important
  //     transform: translate(-100%) !important;
.no-cascading
  font-weight: bold;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  padding-left: 0px !important;
  padding-right: 0px !important;
  margin-top: 5px !important;
  margin-left: 0px;
  >h3
    padding: 0px 10px;
    font-size: 0.9375em;
    padding-top: 6px;
    padding-bottom: 6px;
    cursor: default;
  .con-dropdown-group-no-cascading
    width: 100% !important;
    font-weight: bold;
    height: auto !important;
    opacity: 1 !important;
    border-left: 1px solid rgba(0, 0, 0, 0.0) !important;
    ul
      width: 100%;
      box-shadow: 0px 5px 20px 0px rgba(0, 0, 0,0) !important;
      padding-left: 0px !important;

</style>
