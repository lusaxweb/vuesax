<template lang="html">
  <transition name="dropdownx">
    <div
      v-if="dropdownVisible"
      ref="options"
      :class="{'rightx':vsDropRight || $parent.rightx,'notHeight':notHeight}"
      :style="{
        'left':leftx+'px',
        'top':topx+'px'
      }"
      class="con-vs-dropdown--menu vs-dropdown-menu"
      @mouseleave="mouseleavex"
      @mouseenter="mouseenterx"
    >
      <!-- @mouseout="toggleMenu($event)" -->
      <!-- @mouseover="toggleMenu($event)" -->
      <ul
        v-if="!vsCustomContent"
        class="vs-component vs-dropdown--menu" >
        <slot/>
      </ul>
      <div
        v-else
        class="vs-dropdown--custom vs-dropdown--menu">
        <slot/>
      </div>
      <div
        ref="menuAfter"
        :class="[ vsDropRight ? 'vs-dropdown-right--menu--after' : 'vs-dropdown--menu--after']"
      ></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "VsDropdownMenu",
  data:()=>({
    dropdownVisible:false,
    leftAfter:20,
    leftx:0,
    topx:0,
    rightx:true,
    vsTriggerClick:false,
    vsDropRight:false,
    widthx:0,
    notHeight:false,
    vsCustomContent:false,
    parentNode:null
  }),
  watch:{
    dropdownVisible(val){
      let dropdownGroup = this.$children.filter((item)=>{
        return item.hasOwnProperty('activeGroup')
      })
      dropdownGroup.forEach((item_group)=>{
        item_group.activeGroup = false
      })
      this.setDirection()

      !val ? this.$parent.rightx = false : null
    }
  },
  mounted(){
    this.insertBody()
  },
  beforeDestroy() {
    this.$el.parentNode.removeChild(this.$el)
  },
  methods:{
    mouseenterx() {
      if (!this.vsTriggerClick) {
        this.dropdownVisible = true
        this.widthx = this.$el.clientWidth
      }
    },
    mouseleavex() {
      if (!this.vsTriggerClick) {
        this.dropdownVisible = false
        this.widthx = this.$el.clientWidth
      }
    },
    setDirection() {
      setTimeout(() => {
        const dropdown = this.parentNode
        const menuAfter = this.$refs.menuAfter
        if (!menuAfter) return
        if(dropdown && menuAfter && dropdown.getBoundingClientRect().top + 300 >= window.innerHeight) {
          // const hasGroup = this.$children.find(it=>it.hasOwnProperty('activeGroup'))
          menuAfter.style.bottom = '-5px'
          menuAfter.style.transform = 'rotate(225deg)'
          return
        }
        menuAfter.style.top = '10px'
      }, 100)
    },
    toggleMenu(event){
      if(event.type == 'mouseover' && !this.vsTriggerClick){
        this.dropdownVisible = true
      }
      else if (!this.vsTriggerClick) {
        this.dropdownVisible = false
      }
      this.widthx = this.$el.clientWidth
    },
    insertBody(){
      let elp = this.$el
      this.parentNode = this.$el.parentNode
      document.body.insertBefore(elp, document.body.firstChild)
    },
  }

}
</script>
