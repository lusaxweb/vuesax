<template lang="html">
  <li
    @click="closeParent"
    :class="{vsDivider}"
    :style="{
      'color':hoverx?giveColor()+' !important':null,
      'background':hoverx?giveColor(.01)+' !important':null
      }"
      @mouseover="hoverx=true"
      @mouseout="hoverx=false"
    class="vs-component vs-dropdown-item">
    <router-link
    v-if="to"
    :to="to"
    v-bind="$attrs"
    v-on="$listeners"
    :class="{'disabled':disabled}"

    >
      {{$attrs.disabled}}
      <slot>
      </slot>
    </router-link>

    <a
    v-else
    v-bind="$attrs"
    v-on="$listeners"
    :class="{'disabled':disabled}"
    >
      <slot>
      </slot>
    </a>
  </li>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  inheritAttrs:false,
  name: "vs-dropdown-item",
  props:{
    to:{},
    disabled:{
      default:false,
      type:Boolean
    },
    vsDivider:{
      default:false,
      type:Boolean
    },
  },
  data:()=>({
    hoverx:false,
    vsDropDownItem:true,
    vsColor:null
  }),
  mounted(){
    this.changeColor()
  },
  updated(){
    this.changeColor()
  },
  methods:{
    closeParent(){
      if(this.disabled){
        return
      }
      let _self = this
      searchParent(this)
      function searchParent(_this){
        let parent = _this.$parent
        if(parent.$el.className.indexOf('parent-dropdown')==-1){
          searchParent(parent)
        } else {
          let [dropdownMenu] = parent.$children.filter((item)=>{
            return item.hasOwnProperty('dropdownVisible')
          })
          dropdownMenu.dropdownVisible = parent.vsDropdownVisible = false

        }
      }
    },
    changeColor(){
      let _self = this
      searchParent(this)
      function searchParent(_this){
        let parent = _this.$parent
        if(parent.$el.className.indexOf('parent-dropdown')==-1){
          searchParent(parent)
        } else {
          _self.vsColor = parent.vsColor
        }
      }
    },
    giveColor(opacity=1){
      return _color.rColor(this.vsColor,opacity)
    },
  },

}
</script>

<style lang="stylus">
.vs-dropdown-item
  transition: all .2s ease;
  position: relative;
  z-index: 100;
  text-align: left;
  border-radius: 5px;
  width: calc(100% - 6px)
  margin: 0px 3px;
  list-style: none;
  font-weight: normal !important;
  font-size: 0.9375em;
  a
    background: inherit !important;
    color: inherit !important;
    cursor: pointer;
    transition: all .2s ease;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
    position: relative;
    display: block;
    color: rgba(0, 0, 0, 0.7);
    &.disabled
      user-select: none;
      pointer-events: none !important;
      cursor: default;
      opacity: .3 !important;
  &.vsDivider
    border-top: 1px solid rgba(0, 0, 0, 0.08)
    margin-top: 5px;
</style>
