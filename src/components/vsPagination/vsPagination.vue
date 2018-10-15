<template>
  <div
    :style="stylePagination"
    :class="[`vs-pagination-${color}`]"
    class="con-vs-pagination">
    <nav class="nav-pagination">
      <button
        :class="{disabled:current <= 1 ? 'disabled' : null}"
        class="btn-pagination btn-prev-pagination"
        @click="prevPage"
        :disabled="current === 1">
        <i class="material-icons">
          {{ prevIcon }}
        </i>
      </button>
      <ul>
        <li
          v-for="(page, index) in pages"
          :key="index"
          :class="{'is-current': page == current}"
          class="item-pagination"
          @click="goTo(page)">
          <span>
            {{ page }}
          </span>

          <div class="effect"></div>
        </li>
      </ul>
      <!-- :style="styleBtn" -->
      <button
        :class="{disabled:current === total ? 'disabled' : null}"
        class="btn-pagination btn-next-pagination"
        @click="nextPage"
        :disabled="current === total">
        <i class="material-icons">
          {{ nextIcon }}
        </i>
      </button>
      <input
        v-if="goto"
        v-model="go"
        :max="total"
        class="input-goto"
        min="1"
        type="number"
        @change="goTo">
    </nav>
  </div>
</template>
<script>
import _color from '../../utils/color.js'

export default {
  name: 'VsPagination',
  props:{
    color:{
      type:String,
      default:'primary'
    },
    total:{
      type:Number,
      required:true
    },
    value:{
      type:Number,
      required:true,
      default: 1
    },
    max:{
      type:Number,
      default:9
    },
    goto:{
      type:Boolean
    },
    type:{
      type:String
    },
    prevIcon:{
      type:String,
      default:'chevron_left'
    },
    nextIcon:{
      type:String,
      default:'chevron_right'
    }
  },
  data: () => ({
    pages: [],
    current: 0,
    go: 0,
    prevRange: '',
    nextRange: '',
    hoverBtn1: false
  }),
  computed: {
    stylePagination () {
      let style = {}
      if (!_color.isColor(this.color)) {
        style = {
          '--color-pagination': _color.getColor(this.color),
          '--color-pagination-alpha': _color.getColor(this.color,.5)
        }
      }
      return style
    },
  },
  watch: {
    current() {
      this.getPages()
      this.$emit('input', this.current)
    },
    total() {
      this.getPages()
    }
  },

  mounted () {
    this.current = this.go = this.value
    this.getPages()
  },

  methods:{
    isEllipsis(page) {
      return page === '...'
    },
    goTo(page) {
      if(page === '...') {
        return
      }
      if (typeof page.target === 'undefined') {
        this.current = page
      } else {
        const value  = parseInt(page.target.value, 10)
        this.go      = (
          value < 1 ? 1 : (value <= this.total ? value : this.total)
        )
        this.current = this.go
      }
    },
    getPages() {
      if (this.total <= this.max) {
        let pages = this.setPages(1, this.total)
        this.pages = pages
      }
      const even     = this.max % 2 === 0 ? 1 : 0
      if(this.total < 6) {
        this.prevRange = Math.floor(this.max / (this.max/2))
      } else {
        this.prevRange = Math.floor(this.max / 2)
      }
      this.nextRange = this.total - this.prevRange + 1 + even

      if (this.current >= this.prevRange && this.current <= this.nextRange) {
        const start = this.current - this.prevRange + 2
        const end   = this.current + this.prevRange - 2 - even

        this.pages = [1, '...', ...this.setPages(start, end), '...', this.total]
      } else if (this.total < 6) {
        this.pages = [
          ...this.setPages(1, this.total)
        ]
      } else {
        this.pages = [
          ...this.setPages(1, this.prevRange),
          '...',
          ...this.setPages(this.nextRange, this.total)
        ]
      }

    },
    setPages(start, end) {
      const setPages = []

      for (start > 0 ? start : 1; start <= end; start++) {
        setPages.push(start)
      }

      return setPages
    },
    nextPage() {
      if(this.current < this.total) {
        this.current++
      }
    },
    prevPage() {
      if(this.current > 1) {
        this.current--
      }
    }
  }
}
</script>
