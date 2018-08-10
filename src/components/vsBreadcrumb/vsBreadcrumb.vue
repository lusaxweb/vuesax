<template lang="html">
  <nav
    v-bind="$attrs"
    :class="`vs-align-${vsAlign}`"
    class="vs-breadcrumb"
    aria-label="breadcrumb"
    v-on="$listeners">
    <ol>
      <slot/>
      <li
        v-for="item in vsItems"
        v-show="!hasSlot"
        :key="item.title"
        :class="{'vs-active':item.active,'disabled-link':item.disabled}"
        :aria-current="item.active ? 'page' : null"
      >
        <a
          v-if="!item.active"
          :href="item.url ? item.url : '#'"
          :title="item.title"
        >
          {{ item.title }}
        </a>
        <template v-else>
          <span
            :class="textClass"
            :style="textStyle"
            class="vs-breadcrumb-text"
          >
            {{ item.title }}
          </span>
        </template>
        <span
          v-if="!item.active"
          :class="vsSeparator.length > 1 ? 'material-icons' : null"
          class="separator notranslate"
          translate="no"
          aria-hidden="true">{{ vsSeparator }}</span>
      </li>
    </ol>
  </nav>
</template>

<script>
import _color from '../../utils/color.js'

export default {
  name:'VsBreadcrumb',
  props:{
    vsItems:{
      type:Array
    },
    vsSeparator:{
      type:String,
      default:'/'
    },
    vsColor:{
      type:String,
      default: 'primary'
    },
    vsAlign:{
      type:String,
      default:'left'
    }
  },
  computed: {
    textClass() {
      const classes = {}
      if (_color.isColor(this.vsColor)) {
        classes[`vs-breadcrumb-text-${this.vsColor}`] = true
      }
      return classes
    },
    textStyle() {
      const style = {}
      if (!_color.isColor(this.vsColor)) {
        style.color = _color.getColor(this.vsColor)
      }
      return style
    },
    hasSlot () {
      return !!this.$slots.default
    }
  }
}
</script>
