<template lang="html">
  <!-- @contextmenu.capture.prevent -->
  <button
    v-bind="$attrs"
    v-on="listeners"
    ref="dropdown"
    class="vs-con-dropdown parent-dropdown">
    <slot>
    </slot>
  </button>
</template>

<script>
export default {
  inheritAttrs:false,
  name: "vs-dropdown",
  props:{
    vsTriggerClick:{
      default:false,
      type:Boolean
    },
    vsTriggerContextmenu:{
      default:false,
      type:Boolean
    },
    vsColor:{
      default:'primary',
      type:String
    },
    vsCustomContent:{
      default:false,
      type:Boolean
    }
  },
  data:()=>({
    vsDropdownVisible:false,
    rightx:false
  }),
  watch:{
    vsDropdownVisible(){
      this.changePositionMenu()
      if(this.vsDropdownVisible){
        this.$emit('focus')
      } else {
        this.$emit('blur')
      }
    }
  },
  mounted(){
    let [dropdownMenu] = this.$children.filter((item)=>{
      return item.hasOwnProperty('dropdownVisible')
    })
    dropdownMenu.vsCustomContent = this.vsCustomContent
    dropdownMenu.vsTriggerClick = this.vsTriggerClick
    this.changeColor()
  },
  computed:{
    listeners(){
      return {
        ...this.$listeners,
        contextmenu: (evt) => this.vsTriggerContextmenu?this.clickToogleMenu(evt,true):{},
        click: (evt) => this.vsTriggerContextmenu?{}:this.clickToogleMenu(evt),
        mouseout: (evt) => this.toggleMenu('out',evt),
        mouseover: (evt) => this.toggleMenu('over',evt),
      }
    }
  },
  methods:{
    changeColor(){
      let child = this.$children
      child.forEach((item)=>{
        if(item.$vnode.tag.indexOf('dropdown')!=-1){
          item.vsColor = this.vsColor
        }
      })
    },
    changePositionMenu(){
      let [dropdownMenu] = this.$children.filter((item)=>{
        return item.hasOwnProperty('dropdownVisible')
      })
      let scrollTopx = window.pageYOffset || document.documentElement.scrollTop;
      console.dir();
      if(this.$refs.dropdown.getBoundingClientRect().top + 300 >= window.innerHeight) {
        this.$nextTick(() => {
            dropdownMenu.topx = (this.$refs.dropdown.getBoundingClientRect().top - dropdownMenu.$el.clientHeight) + scrollTopx
            dropdownMenu.notHeight = true
        });

      } else {
        dropdownMenu.notHeight = false
        dropdownMenu.topx = (this.$refs.dropdown.getBoundingClientRect().top + this.$refs.dropdown.clientHeight) + scrollTopx
      }

      this.$nextTick(() => {
        var w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

        if(this.$refs.dropdown.getBoundingClientRect().left + dropdownMenu.$el.offsetWidth >= w - 20){
          this.rightx = true
        }
        dropdownMenu.leftx = this.$refs.dropdown.getBoundingClientRect().left + this.$refs.dropdown.clientWidth
      });
    },
    clickToogleMenu(evt,isContextmenu){
      if(evt.type == 'contextmenu'){
        evt.preventDefault()
      }
      let [dropdownMenu] = this.$children.filter((item)=>{
        return item.hasOwnProperty('dropdownVisible')
      })
      if(this.vsTriggerClick || this.vsTriggerContextmenu){
        if(this.vsDropdownVisible && !evt.target.closest('.vs-dropdown-menu')){
          dropdownMenu.dropdownVisible = this.vsDropdownVisible = false
        } else {
          dropdownMenu.dropdownVisible = this.vsDropdownVisible = true
          window.addEventListener('click',()=>{
            if(!evt.target.closest('.vs-con-dropdown') && !evt.target.closest('.vs-dropdown-menu')) {
              dropdownMenu.dropdownVisible = this.vsDropdownVisible = false
            }
          })
        }
      }
    },
    toggleMenu(typex,event){
      let [dropdownMenu] = this.$children.filter((item)=>{
        return item.hasOwnProperty('dropdownVisible')
      })
      if(!this.vsTriggerClick && !this.vsTriggerContextmenu){
        if(typex == 'over'){
          dropdownMenu.dropdownVisible = this.vsDropdownVisible = true
        } else {
          dropdownMenu.dropdownVisible = this.vsDropdownVisible = false
        }
      }
    }
  }
}
</script>

<style lang="stylus">
.vs-con-dropdown
  position: relative;
  display: inline-block;
  border: 0px;
  background: transparent;
  a
    user-select: none !important;
  &:active
    opacity: 1 !important;
</style>
