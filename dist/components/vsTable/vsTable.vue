<template lang="html">
  <div
    :class="[{'stripe': stripe, 'hoverFlat': hoverFlat}, `vs-table-${color}`,]"
    class="vs-component vs-con-table">
    <!-- header -->
    <header class="header-table vs-table--header">
      <span>
        <slot name="header"></slot>
      </span>

      <div
        v-if="search"
        class="con-input-search vs-table--search">
        <input
          v-model="searchx"
          class="input-search vs-table--search-input"
          type="text">
        <i class="material-icons">
          search
        </i>
      </div>
    </header>
    <div class="con-tablex vs-table--content">

      <!-- <div class="vs-con-table-theade vs-table--thead">
        <table
          :style="tableHeaderStyle"
          class="vs-table--thead-table">
          <colgroup ref="colgroup">
            <col width="20"/>
            <col
              v-for="(col,index) in getThs"
              :key="index"
              :name="`col-${index}`"
              class="colx">
          </colgroup>
          <thead ref="thead">
            <tr>
              <th class="td-check">
                <span
                  v-if="multiple"
                  class="con-td-check">
                  <vs-checkbox
                    :icon="isCheckedLine ? 'remove' : 'check'"
                    :checked="isCheckedMultiple"
                    size="small"
                    @click="changeCheckedMultiple"/>
                </span>
              </th>
              <slot name="thead"></slot>
            </tr>
          </thead>
        </table>
      </div> -->

      <div
        :style="styleConTbody"
        class="vs-con-tbody vs-table--tbody ">
        <table
          ref="table"
          class="vs-table vs-table--tbody-table">
          <thead
            ref="thead"
            class="vs-table--thead">
            <tr>
              <th class="td-check">
                <span
                  v-if="multiple"
                  class="con-td-check">
                  <vs-checkbox
                    :icon="isCheckedLine ? 'remove' : 'check'"
                    :checked="isCheckedMultiple"
                    size="small"
                    @click="changeCheckedMultiple"/>
                </span>
              </th>
              <slot name="thead"></slot>
            </tr>
          </thead>
          <colgroup ref="colgrouptable">
            <col width="20"/>
            <col
              v-for="(col,index) in 3"
              :key="index"
              :name="`col-${index}`" >
          </colgroup>
          <!-- <tbody ref="tbody"> -->
          <slot :data="datax"></slot>
          <!-- </tbody> -->
        </table>
      </div>
      <div
        v-if="isNoData"
        class="not-data-table vs-table--not-data">
        No data Available
      </div>

      <div
        v-if="pagination"
        v-show="!searchx"
        class="con-pagination-table vs-table--pagination">
        <vs-pagination
          :total="getTotalPages"
          v-model="currentx"></vs-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VsTable",
  props:{
    value:{},
    color: {
      default:'primary',
      type: String
    },
    stripe:{
      default: false,
      type: Boolean
    },
    hoverFlat:{
      default: false,
      type: Boolean
    },
    maxHeight:{
      default: 'auto',
      type: String
    },
    multiple:{
      default: false,
      type: Boolean
    },
    data:{
      default: null,
    },
    notSpacer:{
      default:false,
      type:Boolean
    },
    search:{
      default: false,
      type: Boolean
    },
    maxItems:{
      default: 5,
      type: [Number, String]
    },
    pagination:{
      default: false,
      type: Boolean
    }
  },
  data:()=>({
    headerWidth: '100%',
    trs: [],
    datax: [],
    searchx: null,
    currentx: 1
  }),
  computed:{
    getTotalPages() {
      return Math.ceil(this.data.length / this.maxItems)
    },
    isNoData() {
      return this.datax?this.datax.length == 0:false && this.search
    },
    isCheckedLine () {
      let lengthx = this.data.length
      let lengthSelected = this.value.length
      return lengthx !== lengthSelected
    },
    isCheckedMultiple () {
      return this.value.length > 0
    },
    styleConTbody () {
      return {
        maxHeight: this.maxHeight,
        overflow: this.maxHeight != 'auto'?'auto':null
      }
    },
    getThs () {
      let ths = this.$slots.thead.filter(item => item.tag )
      return ths.length
    },
    tableHeaderStyle () {
      return {
        width: this.headerWidth
      }
    }
  },
  watch:{
    currentx() {
      this.loadData()
    },
    maxItems() {
      this.loadData()
    },
    data() {
      this.loadData()
      this.$nextTick(() => {
        if(this.datax.length > 0) {
          this.changeTdsWidth()
        }
      })
    },
    searchx() {
      this.filterValues()
    }
  },
  mounted () {
    window.addEventListener('resize', this.listenerChangeWidth)

    this.loadData()

    this.$nextTick(() => {
      if(this.datax.length > 0) {
        this.changeTdsWidth()
      }
    })
  },
  destroyed () {
    window.removeEventListener('resize', this.listenerChangeWidth)
  },
  methods:{
    loadData() {
      let max = Math.ceil(this.currentx * this.maxItems)
      let min = max - this.maxItems
      this.datax = this.pagination ? this.getItems(min, max) : this.data || []
    },
    getItems(min, max) {
      let items = []

      this.data.forEach((item, index) => {
        if(index >= min && index < max) {
          items.push(item)
        }
      })
      return items
    },
    sort(key, active) {
      let datax = (this.pagination) ? this.data : this.datax

      function compare(a,b) {
        if (a[key] < b[key])
          return active?1:-1
        if (a[key] > b[key])
          return active?-1:1;
        return 0;
      }

      this.datax = datax.sort(compare)
    },
    filterValues () {
      let dataBase = this.data

      let filterx = dataBase.filter((tr)=>{
        let values = this.getValues(tr).toString().toLowerCase()
        return values.indexOf(this.searchx.toLowerCase()) != -1
      })

      let pagex = filterx

      if (this.pagination) {
        let max = Math.ceil(this.currentx * this.maxItems)
        let min = max - this.maxItems
        pagex = this.getItems(min, max)
      }

      this.datax = (this.searchx !== '') ? filterx : pagex
    },
    getValues(obj) {
      let valuesx = Object.values(obj)
      let strings = []

      function getStrings (obj) {

        if(Array.isArray(obj)) {

          strings = [...strings,...obj]
          obj.forEach((item) => {
            getStrings(item)
          })
        } else if (typeof obj == 'object') {
          let subObj = Object.values(obj)
          strings = [...strings,...subObj]
          getStrings(subObj)
        }

      }
      getStrings(valuesx)

      strings = strings.filter(item => typeof item == 'string' || typeof item == 'number')

      return valuesx
    },
    getStrings(obj, valuesx) {
      let stringsx = Object.values(obj)
      valuesx.forEach((item) => {
        if (typeof item == 'object') {
          valuesx = [...valuesx,...Object.values(item)]
        }
      })
      // return [...valuesx,...Object.values(item)]
      return stringsx
    },
    changeCheckedMultiple () {
      let lengthx = this.data.length
      let lengthSelected = this.value.length
      let selectedx = (lengthx - lengthSelected)
      if (selectedx == 0) {
        this.$emit('input', [])
      } else {
        this.$emit('input', this.data)
      }
    },
    clicktr (tr, isTr) {

      if(this.multiple && isTr){
        let val = this.value.slice(0)
        if(val.includes(tr)) {
          val.splice(val.indexOf(tr),1)
        } else {
          val.push(tr)
        }

        this.$emit('input', val)
        this.$emit('selected', tr)
      } else if (isTr) {
        this.$emit('input', tr)
        this.$emit('selected', tr)
      }
    },
    listenerChangeWidth () {
      this.headerWidth = `${this.$refs.table.offsetWidth}px`
      this.changeTdsWidth()
    },
    changeTdsWidth() {
      let tbody = this.$refs.table.querySelector('tbody')

      let tds = tbody.querySelector('.tr-values').querySelectorAll('.td')

      let tdsx = []

      tds.forEach((td, index) => {
        tdsx.push({index: index, widthx: td.offsetWidth})
      });

      let colgroup = this.$refs.colgroup
      let cols = colgroup.querySelectorAll('.col')
      cols.forEach((col, index) => {
        col.setAttribute('width', tdsx[index].widthx)
      });

      let colgrouptable = this.$refs.colgrouptable
      let colsTable = colgrouptable.querySelectorAll('.col')
      colsTable.forEach((col, index) => {
        col.setAttribute('width', tdsx[index].widthx)
      });
    }
  }
}
</script>
