<template lang="html">
  <div v-if="props || slots || events" id="vs-api" class="con-api">
    <h2 class="h2"><a href="#vs-api">#</a> API</h2>
    <div class="content-api">

      <div v-for="(table, key) in getTables" class="content-table">
        <header>
          <h3>
            {{ key }}
          </h3>
        </header>

        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Type</th>
              <th>Values</th>
              <th>Description</th>
              <th>default</th>
              <th>Example</th>
              <th class="bugx">
                <span>
                  More
                </span>
              </th>
            </tr>
          </thead>
          <tbody :id="`api-${tr.name}`" v-for="tr in table">
            <tr>
              <td>


                <router-link v-if="tr.link && !isExternal(tr.link)" :to="tr.link">
                  {{ tr.name }}<i class='bx bx-link' ></i>
                </router-link>

                <a target="_blank" :href="tr.link" v-else-if="tr.link && isExternal(tr.link)" >
                  {{ tr.name }} <i class='bx bx-link-external'></i>
                </a>

                <span v-else>
                  {{ tr.name }}
                </span>
              </td>
              <td>{{tr.type}}</td>
              <td v-html="getValues(tr.values)"></td>
              <td v-html="tr.description"></td>
              <td>{{tr.default}}</td>
              <td>
                <a :href="tr.usage" v-if="tr.usage" class="btn-usage">
                  Usage <i class='bx bx-code-block' ></i>
                </a>
                <a :href="`#vs-api-${tr.name}`" v-if="tr.code" @click="toggleCode($event,tr)" class="btn-toggle-code">
                  <span class="open">Open <i class='bx bx-code-alt' ></i></span> <span class="close">Close <i class='bx bx-x' ></i></span>
                </a>
              </td>

              <td class="bugx">
                <a target="_blank" :href="`https://github.com/lusaxweb/vuesax/issues/new?title=[${$page.title}] prop (${tr.name}) - Your Bug Name&amp;body=**Steps to Reproduce**%0A1. Do something%0A2. Do something else.%0A3. Do one last thing.%0A%0A**Expected**%0AThe ${tr.name} should do this%0A%0A**Result**%0AThe ${tr.name} does not do this%0A%0A**Testcase**%0A(fork this to get started)%0Ahttp://jsfiddle.net/example-bug/1/`" >
                  <i class='bx bx-bug' ></i>
                </a>

                <a target="_blank" :href="`https://github.com/lusaxweb/vuesax/`" >
                  <i class='bx bx-terminal' ></i>
                </a>
              </td>
            </tr>
            <tr v-if="tr.code" class="tr-code">
              <td
                @click="copyCode($event, tr.code)"
                v-html="getCode(tr.code)"
                colspan="7">
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { isExternal } from '../util'
import prism from 'prismjs'
export default {

  computed: {
    props(){
      return this.$page.frontmatter.PROPS
    },
    slots(){
      return this.$page.frontmatter.SLOTS
    },
    events(){
      return this.$page.frontmatter.EVENTS
    },
    getTables() {
      let tables = {}

      if(this.props) {
        tables.props = this.props
      }
      if(this.slots) {
        tables.slots = this.slots
      }
      if(this.events) {
        tables.events = this.events
      }

      return tables
    }
  },

  mounted() {
    document.addEventListener('scroll', () => {
      let tables = document.querySelectorAll('.content-api table')
      tables.forEach((table, index) => {
        if(window.pageYOffset + 84 >= table.offsetTop && window.pageYOffset + 100 < table.offsetTop + table.offsetHeight) {
          let clone = table.cloneNode(true)
          let tbodys = clone.querySelectorAll('tbody')
          tbodys.forEach((tbody) => {
            clone.removeChild(tbody)
          })

          let ths = table.querySelectorAll('thead th')
          let thsNew = clone.querySelectorAll('thead th')

          ths.forEach((th, index) => {
            thsNew[index].setAttribute('width', th.offsetWidth)
          })

          clone.classList.add('table-'+index)

          if(!document.querySelector(`.con-header .table-${index}`)) {

            if(document.querySelector(`.con-header table:not(.table-${index})`)) {
              let header = document.querySelector('.con-header header')
              header.removeChild(document.querySelector(`.con-header table:not(.table-${index})`))
            }
            document.querySelector('.con-header header').appendChild(clone)
          }
        } else {
          let header = document.querySelector('.con-header header')
          if(document.querySelector(`.con-header .table-${index}`)) {
            header.removeChild(header.querySelector('.table-'+index))
          }
        }


        if (window.pageYOffset + 100 >= table.offsetTop + table.offsetHeight) {
          let header = document.querySelector('.con-header header')
          if(document.querySelector(`.con-header .table-${index}`)) {
            header.removeChild(header.querySelector('.table-'+index))
          }
        }
      })
      // window.pageYOffset
    })
  },

  methods:{
    isExternal,
    copyCode(evt, code) {
      evt.preventDefault();
      evt.target.classList.add('copied')
      setTimeout(() => {
        evt.target.classList.remove('copied')
      }, 1000);

      this.$vs.clipboard(code)
    },
    getValues(values) {
      if(!values) return
      let arrayValues = values.split(',')
      let spanValues = ''
      arrayValues.map(item => {
        spanValues += `<span class='value-span'>${item}</span>`
      })
      return spanValues
    },
    toggleCode(evt, tr) {
      let trParent = evt.target.closest('tr')
      let nextCode = trParent.nextElementSibling
      if(nextCode) {
        if(nextCode.classList.contains('open')) {
          evt.target.setAttribute('href', '#vs-api-close-' + tr.name)
          nextCode.classList.remove('open')
          evt.target.classList.remove('open-btn')

          nextCode.querySelector('pre').style.padding = '0px 20px'
          nextCode.querySelector('pre').style.maxHeight = `0px`
        } else {
          evt.target.setAttribute('href', '#vs-api-' + tr.name)
          evt.target.classList.add('open-btn')
          nextCode.classList.add('open')
          // console.dir()
          nextCode.querySelector('pre').style.padding = '20px'
          nextCode.querySelector('pre').style.maxHeight = `${nextCode.querySelector('pre').scrollHeight + 40}px`
        }
      }
    },
    getCode(str) {
      function wrap (code, lang) {
        return `<pre v-pre class="language-${lang}"><code>${code}</code></pre>`
      }
      const code = prism.highlight(str, prism.languages['html'], 'html')
      return wrap(code, 'html')
    },
  }
}
</script>
<style lang="stylus">

.content-table
  &:last-child
    table
      margin-bottom 0px

.bugx
  font-size 10px !important
  padding 5px
  span
    display flex
    align-items center
    justify-content center
  a
    margin-top 3px
    border 1px dashed rgba(0,0,0,0.04)
    border-radius 50%;
    display flex !important
    align-items center !important
    justify-content center !important
    transition all 0s ease !important
    width 30px
    height 30px
    &:first-child
      margin-top 0px
      &:hover
        background rgba(255, 71, 87,.15) !important
        color rgb(255, 71, 87) !important
        border 2px solid rgba(255, 71, 87,0)
    &:nth-child(2)
      &:hover
        background rgba(31, 116, 255,.15) !important
        color rgb(31, 116, 255) !important
        border 2px solid rgba(31, 116, 255,0)
    i
      margin 0px !important
      font-size .8rem !important


.btn-usage
  border 0px
  padding 4px 9px
  background transparent
  border 1px dashed rgba(0,0,0,0.04)
  cursor pointer
  outline none
  border-radius 15px
  transition all .25s ease
  display flex
  align-items center
  justify-content space-between
  font-size .7rem
  color inherit
  margin 3px 0px
  i
    padding-left 5px
    pointer-events none
  &:hover
    background #f5f7fb
.btn-toggle-code
  border 0px
  padding 4px 9px
  background transparent
  border 1px dashed rgba(0,0,0,0.04)
  cursor pointer
  outline none
  border-radius 15px
  transition all .25s ease
  display flex
  align-items center
  justify-content center
  font-size .7rem
  color inherit
  margin 3px 0px
  span
    display flex
    align-items center
    justify-content space-between
  .open
    position relative
    pointer-events none
    align-items center
    justify-content space-between
  .close
    display none
    pointer-events none
    align-items center
    justify-content space-between
  i
    padding-left 4px
    pointer-events none
    font-size .8rem
  &.open-btn
    color $accentColor !important
    background #f5f7fb
    border 1px solid #f5f7fb
    .close
      position relative
      display flex
    .open
      display none
  &:not(.open-btn):hover
    background #f5f7fb

.tr-code
  // display none

  cursor pointer
  td
    padding 0px !important
    border-bottom 0px
    border-left 0px !important
    transition all .25s ease
    overflow hidden
    &:&:nth-child(1)
      border-left 0px !important
    pre
      max-height 0px
      overflow hidden
      padding 0px 20px
      transition all .25s ease

    // padding 5px !important
    &:after
      content "Copied to Clipboard"
      top 0px
      left 50%
      transform translate(-50%, -100%)
      position absolute
      padding 6px
      background rgba(70, 201, 58,1)
      color rgb(255,255,255)
      font-size .65rem
      font-weight normal
      transition all .25s ease
      border-radius 0px 0px 10px 10px
    &.copied
      background rgba(70, 201, 58,.1)
      &:after
        transform translate(-50%, 0%)
      code, pre
        background transparent !important
  code, pre
    pointer-events none
    font-size .8rem
  &:active
    opacity .7
  &:hover
    code[class*="language-"]
      background alpha($accentColor,.1)

  &.open
    display table-row
  tr
    border 0px !important
  td
    border 0px !important
    margin 0px !important
    pre[class*="language-"]
      margin 0px
.con-api
  max-width 900px
  margin auto
  padding: 1rem 2.5rem;
  padding-top 60px
  h2
    padding 0px 20px
    padding-top 40px
    padding-bottom 20px
    transition all .25s ease
    &:hover
      padding-left 40px
      a
        opacity: 1
    a
      font-size 0.85em
      float left
      margin-left -0.87em
      padding-right 0.23em
      margin-top 0.125em
      opacity 0
      transition: all .2s ease
      outline: none
      text-decoration: none
      font-weight: 600
      color $textColor
      &:hover
        opacity .7
  .content-api
    padding 10px
    background rgb(255,255,255)
    border-radius 5px
    box-shadow 0px 20px 15px -10px rgba(0,0,0,0.03)

    h3
      text-transform capitalize
      &:first-child
        margin-top 0px
    table
      border-radius 15px
      border-bottom 0px
      border-bottom 1px solid rgba(0,0,0,0.04)
      height auto
      overflow hidden
      width 100%
      display table !important
      border-collapse: separate;
      border-spacing: 0;

      &.fixed-thead
        thead
          position fixed
          z-index 8000
          top 0px

      tbody:nth-child(2)
        td
          border-top 0px !important
      tr
        border 0px
      td:nth-child(1)
        border-left 1px solid rgba(0,0,0,0.04)
      td:nth-child(2)
        color #e2777a
      td:nth-child(3)
        padding 4px
      td:nth-child(4)
        font-size .75rem
      td:nth-child(5)
        color #7ec699
        border-right 1px dashed rgba(0,0,0,0.04) !important
      td:nth-child(6)
        padding 4px
        border-left 0px dashed rgba(0,0,0,0.04) !important
        border-right 0px solid rgba(0,0,0,0.0)
        border-top 1px dashed rgba(0,0,0,0.04) !important
      td:nth-child(7)
        border-left 0px solid rgba(0,0,0,0.0)
        border-top 1px dashed rgba(0,0,0,0.04) !important
        border-right 1px solid rgba(0,0,0,0.04) !important


      td
        padding 10px

      th
        background #f5f7fb
        border 0px !important
        font-weight normal
        &:nth-child(6)
          font-size .7rem !important
          background darken(#f5f7fb, 1.5%)
        &:nth-child(7)
          font-size .7rem !important
          background darken(#f5f7fb, 1.5%)
      td, th
        font-size .8rem
        border-left 1px solid rgba(0,0,0,0.04)
        border-top 1px solid rgba(0,0,0,0.04)
        border-right 0px solid rgba(0,0,0,0.04)
        border-bottom 0px solid rgba(0,0,0,0.04)
        position relative
        &:last-child
          border-right 0px
        > span.value-span
          border 1px solid rgba(0,0,0,.1)
          margin 2px
          border-radius 5px
          padding 1px 3px
          display block
          float left
          font-size .65rem
          &:hover
            border 1px solid rgba(0,0,0,.3)
        > a:not(.btn-toggle-code):not(.btn-usage)
          color inherit
          display flex
          align-items center
          justify-content flex-start
          transition all .25s ease
          &:hover
            opacity .7
            i
              margin-left 5px
          i
            transition all .25s ease
            font-size .7rem
            margin-left 3px
            margin-top 4px
    .h2
      border 0px
      transition all .25s ease
      margin 0px
      a
        opacity 0
      &:hover
        padding-left 20px
        a
          opacity 1


</style>
