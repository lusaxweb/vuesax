<template lang="html">
  <nav class="vs-breadcrumb" :class="`vs-align-${vsAlign}`" aria-label="breadcrumb">
    <ol>
      <slot></slot>
      <li
        v-if="!hasSlot"
        v-for="item in vsItems"
        :key="item.title"
        :disabled="item.disabled"
        :class="item.active ? 'vs-active' : null"
        :aria-current="item.active ? 'page' : null"
      >
        <a
          v-if="!item.active"
          :href="item.url ? item.url : '#'"
          :title="item.title"
          :style="{
            'color':vsColor?/[#()]/.test(vsColor)?vsColor:`rgba(var(--${vsColor}),1)`:null/*'rgb(var(--primary))'*/
          }"
        >
          {{item.title}}
        </a>
        <template v-else>{{item.title}}</template>
        <span v-if="!item.active" class="separator" :class="vsSeparator.length > 1 ? 'material-icons' : null" aria-hidden="true">{{vsSeparator}}</span>
      </li>
    </ol>
  </nav>
</template>

<script>

export default {
  name:'vs-breadcrumb',
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
      default:null
    },
    vsAlign:{
      type:String,
      default:'left'
    }
  },
  computed: {
    hasSlot () {
      return !!this.$slots.default
    }
  }
}
</script>

<style lang="stylus" scoped>
  .vs-breadcrumb
      display flex
      
    ol
      display flex
      flex-wrap wrap
      padding .75rem 1rem

    a
      &:hover
      &:focus
        opacity .7
        text-decoration none!important

    li.vs-active
      color #767a7d
    
    .separator
      color #767a7d
      padding 0 .5rem 0 .5rem
    &.material-icons
      vertical-align: middle
      margin-top: -2px
      font-size inherit

  &.vs-align-left
    justify-content: flex-start
  &.vs-align-center
    justify-content: center
  &.vs-align-right
    justify-content: flex-end
</style>
