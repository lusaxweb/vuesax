<template lang="html">
  <div
    :class="[`vs-header-list-${color}`,{
      'with-icon':icon,
    }]"
    :style="styleHeader"
    class="vs-list-header">
    <div
      v-if="icon"
      class="list-icon">
      <i
        translate="no"
        class="material-icons notranslate">{{ icon }}</i>
    </div>
    <div class="list-titles">
      <div
        v-if="title"
        class="list-title">{{ title }}</div>
        <!-- <div class="list-subtitle" v-if="subtitle">{{subtitle}}</div> -->
    </div>
  </div>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name:'VsListHeader',
  props: {
    color: {
      type:String,
      default:'primary',
    },
    title:{
      type:String,
      default:null,
    },
    subtitle:{
      type:String,
      default:null,
    },
    icon:{
      type:String,
      default:null,
    },
  },
  computed: {
    styleHeader () {
      return {
        color: _color.getColor(this.color)
      }
    }
  }
}
</script>
