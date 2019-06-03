<template lang="html">
  <li
    :class="{'marginIcon':vsCollapse, 'no-cascading':!vsCollapse, 'group-rightx':rightx}"
    class="vs-component vs-dropdown--group"
    ref="group"
    @click="clickGroup">
    <!-- @mouseout="toggleGroup($event)" -->
    <span
      v-if="vsCollapse"
      class="span vs-dropdown--group-label">{{ vsLabel }}</span>
    <h3 v-else>{{ vsLabel }}</h3>
    <vs-icon
      v-if="vsCollapse"
      class="icon-group notranslate vs-dropdown--group-icon"
      :icon-pack="iconPack"
      :icon="vsIcon"
    ></vs-icon>
    <!-- <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    > -->
        <!-- v-if="activeGroup||!vsCollapse" -->
      <div
        ref="ulx"
        :style="styleItems"
        :class="{'con-dropdown-group-no-cascading':!vsCollapse}"
        class="con-dropdown--group-con-ul">
        <ul class="con-dropdown--group-ul">
          <slot/>
        </ul>
      </div>
    <!-- </transition> -->
  </li>
</template>

<script>
export default {
  name:'VsDropdownGroup',
  props:{
    vsLabel:{
      default:'Options',
      type:String
    },
    vsCollapse:{
      default:false,
      type:Boolean
    },
    vsIcon: {
      default: 'keyboard_arrow_right',
      type:String
    },
    iconPack:{
      default:'material-icons',
      type:String
    }
  },
  data:()=>({
    activeGroup:false,
    rightx:false,
    widthx:0,
    maxHeight: '0px',
  }),
  computed:{
    styleItems() {
      return {
        maxHeight: this.vsCollapse?this.maxHeight:'auto'
      }
    }
  },
  methods:{
    clickGroup(evt) {
      if(evt.target != this.$refs.group) return
      if(!this.openHover) {
        let scrollHeight = this.$refs.ulx.scrollHeight
        if(this.maxHeight == '0px') {
          this.maxHeight = `${scrollHeight}px`
          setTimeout(() => {
            this.maxHeight = 'none'
          },300)
        } else {
          this.maxHeight = `${scrollHeight}px`
          setTimeout(() => {
            this.maxHeight = `${0}px`
          }, 50)
        }
      }
    },
    beforeEnter(el) {
      el.style.height = 0
      el.style.opacity = 0
    },
    enter(el, done){
      // let h = this.$refs.ulx.scrollHeight
      // this.$refs.ulx.style.height = h + 'px'
      // el.style.opacity = 1
      // parents(this)
      // function parents(_this){
      //   if(_this.$parent.$el.className.search('vs-dropdown--group')!=-1){
      //     // this.$parent.$el
      //     let hp = _this.$parent.$refs.ulx.scrollHeight
      //     _this.$parent.$refs.ulx.style.height = hp + h + 'px'
      //     parents(_this.$parent)
      //   }
      // }

      done()
    },
    leave: function (el) {
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
        this.$refs.ulx.style.height = 0 + 'px'
      }
      this.$refs.ulx.style.height = 0 + 'px'
      el.style.opacity = 0
    },
    toggleGroup(evt){
      if (evt.target == this.$refs.group) {
        this.activeGroup = !this.activeGroup
      }
    }
  },
}
</script>
