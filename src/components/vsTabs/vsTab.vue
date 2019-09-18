<template lang="html">
  <transition :name="invert?vertical?'fade-tab-vertical-invert':'fade-tab-invert':vertical?'fade-tab-vertical':'fade-tab'">
    <div
      v-if="active"
      class="con-tab vs-tabs--content">
      <slot/>
    </div>
  </transition>
</template>

<script>
export default {
  name:'VsTab',
  inheritAttrs: false,
  props:{
    label:{
      default:'Label',
      type:String
    },
    icon:{
      default:'',
      type:String
    },
    tag:{
      default:'',
      type:String
    },
    iconPack:{
      type:String,
      default:'material-icons'
    },
  },
  data:()=>({
    vertical:false,
    active:false,
    id:null,
    invert:false
  }),
  watch: {
    label(val) {
      this.$parent.children[this.id].label = val;
    }
  },
  mounted(){
    this.id = this.$parent.children.length
    this.$parent.children.push({
      label: this.label,
      icon: this.icon,
      iconPack: this.iconPack,
      tag: this.tag,
      id: this.$parent.children.length,
      listeners: this.$listeners,
      attrs: this.$attrs
    })
  }
}
</script>
