<template>
  <i
    class="vs-icon notranslate"
    :class="[iconPack, iconPack !='material-icons' ? icon : '']"
    @click="click">
    <slot>{{iconPack =='material-icons' ? icon : ''}}</slot>
  </i>
</template>
<script>
export default {
  name:'VsIcon',
  props:{
    icon: {
      default: null,
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    click: {
      default: null,
      type: Function
    }
  }
}
</script>
