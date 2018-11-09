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
    vsLabel:{
      default:'Label',
      type:String
    },
    vsIcon:{
      default:'',
      type:String
    }
  },
  data:()=>({
    vertical:false,
    active:false,
    id:null,
    invert:false
  }),
  mounted(){
    this.id = this.$parent.children.length
    this.$parent.children.push({
      label: this.vsLabel,
      icon: this.vsIcon,
      id: this.$parent.children.length,
      listeners: this.$listeners,
      attrs: this.$attrs
    })
  }
}
</script>
