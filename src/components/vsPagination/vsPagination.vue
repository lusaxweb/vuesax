<template lang="html">
  <nav class="vs-component" aria-label="Page pagination" role="navigation">
    <ul :class="['vs-pagination', vsType ? `vs-pager-${vsType}` : '', vsRounded ? 'vs-pager-rounded' : '']">
      <li><button @click="previousPage()" :disabled="onFirstPage() ? true : false"><i class="material-icons">{{vsPrevIcon}}</i></button></li>
      <li v-for="(page, index) in pages" :key="index">
        <button :style="{
          'background':onCurrentPage(page)&&vsType?vsColor?/[#()]/.test(vsColor)?vsColor:`rgba(var(--${vsColor}),1)`:'rgb(var(--primary))':null
          }"
          @click="goTo(page)" :class="onCurrentPage(page)" :disabled="isEllipsis(page) ? true : false">{{page}}</button>
      </li>
      <li><button @click="nextPage()" :disabled="onLastPage() ? true : false"><i class="material-icons">{{vsNextIcon}}</i></button></li>
      <li v-if="vsGoto" class="goto"><vs-input vs-type="number" v-model="go" @change="goTo" min="1" :max="vsTotal"/></li>
    </ul>
  </nav>
</template>

<script>

export default {
  name:'vs-pagination',
  props:{
    vsColor:{
      type:String,
      default:'primary'
    },
    vsTotal:{
      type:Number,
      required:true
    },
    vsCurrent:{
      type:Number,
      required:true
    },
    vsMax:{
      type:Number,
      default:9
    },
    vsGoto:{
      type:Boolean
    },
    vsType:{
      type:String
    },
    vsRounded:{
      type:Boolean
    },
    vsPrevIcon:{
      type:String,
      default:'chevron_left'
    },
    vsNextIcon:{
      type:String,
      default:'chevron_right'
    }
  },
  data() {
    return {
      pages: [],
      current: this.vsCurrent,
      go: this.vsCurrent,
      prevRange: '',
      nextRange: ''
    }
  },
  created() {
     this.pagination
     if (this.vsGoto) {
      const vsInput = () => import('../vsInput/vsInput.vue')
     }
  },
  methods: {
    onFirstPage() {
      return this.current === 1
    },
    previousPage() {
      this.current--
    },
    onCurrentPage(page) {
      return page === this.current ? 'vs-active' : ''
    },
    isEllipsis(page) {
      return page === '...'
    },
    onLastPage() {
      return this.current === this.vsTotal
    },
    nextPage() {
      this.current++
    },
    goTo(page) {
      if (typeof page.target === 'undefined') {
        this.current = page
      } else {
        const value  = parseInt(page.target.value, 10)
        this.go      = (
          value < 1 ? 1 : (value <= this.vsTotal ? value : this.vsTotal)
        )
        this.current = this.go
      }
    },
    setPages(start, end) {
      const setPages = []

      for (start > 0 ? start : 1; start <= end; start++) {
        setPages.push(start)
      }

      return setPages
    }
  },
  computed: {
    pagination() {
      if (this.vsTotal <= this.vsMax) {
        return this.pages = this.setPages(1, this.vsTotal)
      }

      const even     = this.vsMax % 2 === 0 ? 1 : 0
      this.prevRange = Math.floor(this.vsMax / 2)
      this.nextRange = this.vsTotal - this.prevRange + 1 + even

      if (this.current >= this.prevRange && this.current <= this.nextRange) {
        const start = this.current - this.prevRange + 2
        const end   = this.current + this.prevRange - 2 - even

        return this.pages = [1, '...', ...this.setPages(start, end), '...', this.vsTotal]
      } else {
        return this.pages = [
          ...this.setPages(1, this.prevRange),
          '...',
          ...this.setPages(this.nextRange, this.vsTotal)
        ]
      }
    }
  },
  watch: {
     current() {
      this.pagination
      this.$emit('page', this.current)
     }
  }
}
</script>

<style lang="stylus" scoped>
  dark     = rgb(30, 30, 30) // TODO: Fix this so it uses css variables, Stylus doesn't seem to work well with them
  primary  = rgb(31, 116, 255)
  defaultx = rgb(244, 244, 245)

  .vs-pagination
    display flex
    padding-left 0
    // list-style none
    // border-radius .25rem
    button
    .vs-ellipsis
      min-height 40px
      min-width 40px
      margin 3px
      color rgba(0, 0, 0, 0.7)
      padding 3px 10px
      line-height 2
      text-align center
      display inline-block
      text-decoration none!important
      border-radius 5px
      background-color transparent
      &.vs-active
        color primary
        font-weight bold
        cursor default
      &:hover
        color primary
      &:focus
        // outline dotted 1px primary
      &:active
        opacity .7

    .vs-ellipsis
      &:hover
      &:focus
        color inherit
        outline none

    button i
      vertical-align: top

  .vs-pager-flat
    button
      background-color transparent;
      &:hover
        background-color rgba(30, 30, 30, .07)

  .vs-pager-filled
    button
      background-color defaultx
      &:hover
        box-shadow 0px 8px 10px -4px rgba(0, 0, 0, 0.150)
      &.vs-active
        color #fff
        background-color primary
        box-shadow none

  .vs-pager-rounded
    // li:first-child button
    // li:last-child button
    //     border-radius 5px
    button
      border-radius 50px

</style>

<style lang="stylus">
  .vs-pagination

    li.goto .con-input
      width 60px
      margin-top 5px
</style>
