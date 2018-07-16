<template lang="html">
  <transition name="fade">
  <div v-if="active" class="con-tab">
    {{id}}
    <slot/>
  </div>
  </transition>
</template>

<script>
export default {
  name:'vs-tab',
  inheritAttrs: false,
  props:{
    vsLabel:{
      default:'Label',
      type:String
    }
  },
  data:()=>({
    active:false,
    id:null,
  }),
  mounted(){
    this.id = this.$parent.children.length
    this.$parent.children.push({
      label: this.vsLabel,
      id: this.$parent.children.length,
      listeners: this.$listeners,
      attrs: this.$attrs
      })
  }
}
</script>
