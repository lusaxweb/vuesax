<template lang="html">
  <div
    :class="[`vs-tabs-${vsColor}`,`vs-tabs-position-${vsPosition}`]"
    class="con-vs-tabs vs-tabs" >
    <div
      :style="styleTabs"
      class="con-ul-tabs">
      <ul
        ref="ul"
        :class="[`ul-tabs-${vsAlignment}`]"
        class="ul-tabs">
        <li
          v-for="(child,index) in children"
          :class="{'activeChild':childActive == index}"
          @mouseover="hover = true"
          @mouseout="hover = false"
          @click="activeChild($event,index)">
          <button
            v-bind="child.attrs"
            type="button"
            v-on="child.listeners">
            {{ child.label }}
          </button>
        </li>
      </ul>
      <span
        :style="stylex"
        class="line-vs-tabs"/>
    </div>
    <div class="con-slot-tabs">
      <slot/>
    </div>
  </div>
</template>

<script>
import _color from '../../utils/color.js'
import vsButton from '../vsButton/vsButton.vue'
export default {
  name:'VsTabs',
  components:{vsButton},
  props:{
    vsColor:{
      default:'primary',
      type: String
    },
    vsAlignment:{
      default:'left',
      type:String,
    },
    vsPosition:{
      default:'top',
      type:String
    }
  },
  data:()=>({
    topx:'auto',
    heightx:2,
    hover:false,
    children:[],
    childActive:0,
    leftx:0,
    widthx:0,
    these:false,
  }),
  computed:{
    styleTabs(){
      return {
        color: _color.getColor(this.vsColor,1),
      }
    },
    stylex(){
      return {
        top: `${this.topx}px`,
        left: `${this.leftx}px`,
        width: `${this.widthx}px`,
        height: `${this.heightx}px`,
        background: `linear-gradient(30deg, ${_color.getColor(this.vsColor,1)} 0%, ${_color.getColor(this.vsColor,.5)} 100%)`,
        boxShadow: `0px 0px 8px 0px ${_color.getColor(this.vsColor,.5)}`,
        transform: `scaleX(${this.these?1.3:1})`
      }
    }
  },
  mounted(){
    this.changePositionLineCreated()
    this.$children[this.childActive].active = true
    if(this.vsPosition == 'left' || this.vsPosition == 'left'){
      this.$children[this.childActive].vertical = true
    }
  },
  methods:{
    changePositionLineCreated(){
      this.$nextTick(() => {
        let lix = this.$refs.ul.querySelector('.activeChild')

        if(this.vsPosition == 'left' || this.vsPosition == 'right'){
          this.topx = lix.offsetTop
          this.heightx = lix.offsetHeight
          this.widthx = 2
        } else {
          setTimeout(()=>{
            this.leftx = lix.offsetLeft
            this.widthx = lix.offsetWidth
          },100)
        }

      });
    },
    activeChild(evt,index){
      if(this.childActive == index){
        this.these = true
        evt.target.classList.add('isActive')
        setTimeout(()=>{
          evt.target.classList.remove('isActive')
          this.these = false
        }, 200);
      }


      this.$children.map((item,item_index)=>{
        if(item_index != index) {
          item.active = false
        }
      })

      if(this.childActive > index){
        this.$children[index].invert = true
        this.$children[this.childActive].invert = false
      } else {
        this.$children[this.childActive].invert = true
        this.$children[index].invert = false
      }





      this.$children[index].active = true
      this.childActive = index

      if(this.vsPosition == 'left' || this.vsPosition == 'right'){
        this.$children[index].vertical = true
      }

      this.changePositionLine(evt)

    },
    changePositionLine(evt){
      if(this.vsPosition == 'left' || this.vsPosition == 'right'){
        this.topx = evt.target.offsetTop
        this.heightx = evt.target.offsetHeight
        this.widthx = 2
      } else {
        this.leftx = evt.target.offsetLeft
        this.widthx = evt.target.offsetWidth
      }
    }
  }
}
</script>
