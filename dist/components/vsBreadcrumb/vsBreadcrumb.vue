<template lang="html">
  <nav class="vs-breadcrumb" :class="`vs-align-${vsAlign}`" aria-label="breadcrumb">
    <ol>
      <slot></slot>
      <li
        v-if="!hasSlot"
        v-for="item in vsItems"
        :key="item.title"

        :class="{'vs-active':item.active,'disabled-link':item.disabled}"
        :aria-current="item.active ? 'page' : null"
      >
        <a
          v-if="!item.active"
          :href="item.url ? item.url : '#'"
          :title="item.title"

        >
          {{item.title}}
        </a>
        <template v-else>
          <span :style="{
            'color':vsColor?/[#()]/.test(vsColor)?vsColor:`rgba(var(--${vsColor}),1)`:'rgb(var(--primary))'
          }" >
          {{item.title}}
        </span>
          </template>
        <span  v-if="!item.active" class="separator" :class="vsSeparator.length > 1 ? 'material-icons' : null" aria-hidden="true">{{vsSeparator}}</span>
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
      transition: all .2s ease
      color: rgba(0, 0, 0, 0.4);
      &:hover
      &:focus
        // opacity .7
        color: rgba(0, 0, 0, 0.7);
        text-decoration none!important

    li.vs-active
      // color rgba(0, 0, 0, 0.4)
      cursor: default;

    .separator
      color rgba(0, 0, 0, 0.4)
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
.disabled-link
  opacity: .5
  pointer-events: none;
</style>
