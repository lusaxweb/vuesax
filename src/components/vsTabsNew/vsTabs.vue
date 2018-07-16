<template lang="html">
  <div class="con-vs-tabs vs-tabs" :class="[`vs-tabs-${vsColor}`]" >
    <div class="con-ul-tabs">
    <ul class="ul-tabs">
      <li :class="{'activeChild':childActive == index}" @click="activeChild($event,index)" v-for="(child,index) in children">
        <button
          v-bind="child.attrs"
          v-on="child.listeners">
          {{child.label}}
          </button>
      </li>
    </ul>
      <span :style="stylex" class="line-vs-tabs">
      </span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import vsButton from '../vsButton/vsButton.vue'
export default {
  name:'vs-tabs',
  components:{vsButton},
  props:{
    vsColor:{
      default:'primary',
      type: String
    }
  },
  data:()=>({
    children:[],
    childActive:0,
    leftx:0,
    widthx:0,
  }),
  computed:{
    stylex(){
      return {
        left: `${this.leftx}px`,
        width: `${this.widthx}px`,
      }
    }
  },
  methods:{
    activeChild(evt,index){
      this.$children.map((item,item_index)=>{
        if(item_index != index) {

          item.active = false
        }
      })
      this.$children[index].active = true
      this.changePositionLine(evt)
      this.childActive = index
    },
    changePositionLine(evt){
      console.dir(evt.target)
      this.leftx = evt.target.offsetLeft
      this.widthx = evt.target.offsetWidth
    }
  }
}
</script>
