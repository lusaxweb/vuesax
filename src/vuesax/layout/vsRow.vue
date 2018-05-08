<template lang="html">
  <div :style="{
    'align-items':vsAlign,
    'justify-content':vsJustify,
    'display':vsType,
    'width':vsW*100/12+'%'}"
    class="vs-row">
    <slot>
    </slot>
  </div>
</template>

<script>
export default {
  name:'vs-row',
  props:{
    vsType:{
      type:String,
    },
    vsW:{
      type:[Number,String],
      default:12,
    },
    vsJustify:{
      type:String,
      default:null,
    },
    vsAlign:{
      type:String,
      default:null,
    },
  }
}
</script>

<style lang="css">
.vs-row {
  clear: both;
  overflow: hidden;
  flex-flow: wrap;
}
</style>
