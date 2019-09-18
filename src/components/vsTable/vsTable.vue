<template>
  <div
    :class="[{'stripe': stripe, 'hoverFlat': hoverFlat}, `vs-table-${color}`]"
    class="vs-component vs-con-table">
    <!-- header -->
    <header class="header-table vs-table--header">
      <slot name="header"></slot>
      <div
        v-if="search"
        class="con-input-search vs-table--search">
        <input
          v-model="searchx"
          class="input-search vs-table--search-input"
          type="text">
        <vs-icon icon="search"></vs-icon>
      </div>
    </header>
    <div class="con-tablex vs-table--content">
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
              <th
                v-if="multiple || hasExpadableData"
                class="td-check">
                <span
                  v-if="multiple"
                  class="con-td-check">
                  <vs-checkbox
                    :key="isCheckedLine ? 'remove' : 'check'"
                    :icon="isCheckedLine ? 'remove' : 'check'"
                    :checked="isCheckedMultiple"
                    size="small"
                    @click="changeCheckedMultiple"/>
                </span>
              </th>
              <slot name="thead"></slot>
            </tr>
          </thead>
          <slot :data="datax"></slot>
        </table>
      </div>
      <div
        v-if="isNoData"
        class="not-data-table vs-table--not-data">
        {{ noDataText }}
      </div>

      <div
        v-if="pagination"
        class="con-pagination-table vs-table--pagination">
        <vs-pagination
          :total="searchx && !sst ? getTotalPagesSearch : getTotalPages"
          :sizeArray="data.length"
          :maxItems="maxItemsx"
          :description="description"
          :descriptionItems="descriptionItems"
          @changeMaxItems="changeMaxItems"
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
    noDataText: {
      default: 'No data Available',
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
    },
    description:{
      default: false,
      type: Boolean
    },
    descriptionItems:{
      default: () => [],
      type: Array
    },
    currentPage: {
      default: 1,
      type: Number | String
    },
    sst:{
      default: false,
      type: Boolean
    },
    total: {
      type: Number,
      default: 0
    }
  },
  data:()=>({
    headerWidth: '100%',
    trs: [],
    datax: [],
    searchx: null,
    currentx: 1,
    maxItemsx: 5,
    hasExpadableData: false,
  }),
  computed:{
    getTotalPages() {
      return Math.ceil(this.data.length / this.maxItemsx)
    },
    getTotalPagesSearch() {
      let dataBase = this.data

      let filterx = dataBase.filter((tr)=>{
        let values = this.getValues(tr).toString().toLowerCase()
        return values.indexOf(this.searchx.toLowerCase()) != -1
      })

      return Math.ceil(filterx.length / this.maxItemsx)
    },
    isNoData() {
      if(typeof(this.datax) == Object) {
        return this.datax? Object.keys(this.datax).length == 0:false && this.search
      } else {
        return this.datax?this.datax.length == 0:false && this.search
      }
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
    },
  },
  watch:{
    currentPage() {
      this.currentx = this.currentPage
    },
    currentx() {
      if(this.sst) {
        this.$emit('change-page', this.currentx)
      } else {
        this.loadData()
      }
    },
    maxItems(val) {
      this.maxItemsx = val
      this.loadData()
    },
    maxItemsx() {
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
      if(this.sst) {
        this.$emit('search', this.searchx)
      } else {
        this.loadData()
        this.currentx = 1
      }
    }
  },
  mounted () {
    window.addEventListener('resize', this.listenerChangeWidth)
    this.maxItemsx = this.maxItems
    this.loadData()

    // this.$nextTick(() => {
    //   if(this.datax.length > 0) {
    //     this.changeTdsWidth()
    //   }
    // })
  },
  destroyed () {
    window.removeEventListener('resize', this.listenerChangeWidth)
  },
  methods:{
    loadData() {
      let max = Math.ceil(this.currentx * this.maxItemsx)
      let min = max - this.maxItemsx

      if(!this.searchx || this.sst) {
        this.datax = this.pagination ? this.getItems(min, max) : this.data || [];
      } else {
        this.datax = this.pagination ? this.getItemsSearch(true ,min, max) : this.getItemsSearch(false ,min, max) || []
      }
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
    getItemsSearch(pagination = false,min, max) {
      let dataBase = this.data

      let filterx = dataBase.filter((tr)=>{
        let values = this.getValues(tr).toString().toLowerCase()
        return values.indexOf(this.searchx.toLowerCase()) != -1
      })

      let items = []

      filterx.forEach((item, index) => {
        if(index >= min && index < max) {
          items.push(item)
        }
      })

      return items
    },
    sort(key, active) {
      if(this.sst) {
        this.$emit('sort', key, active)
        return
      }
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
    getValues(obj) {
      let valuesx = Object.values(obj)
      let strings = []

      function getStrings (obj) {

        if(Array.isArray(obj)) {

          strings = [...strings,...obj]
          obj.forEach((item) => {
            getStrings(item)
          })

        } else if (typeof obj == 'object' && obj != null) {
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
        if (item && typeof item == 'object') {
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
    dblclicktr (tr, isTr) {

      if (isTr) {
        this.$emit('dblSelection',tr)
      }

    },
    listenerChangeWidth () {
      this.headerWidth = `${this.$refs.table.offsetWidth}px`
      this.changeTdsWidth()
    },
    changeTdsWidth() {
      if(!this.value) return

      let tbody = this.$refs.table.querySelector('tbody')

      // Adding condition removes querySelector none error - if tbody isnot present
      if(tbody) {
        let trvs = tbody.querySelector('.tr-values')
        if (trvs === undefined || trvs === null ) return
        let tds = trvs.querySelectorAll('.td')

        let tdsx = []

        tds.forEach((td, index) => {
          tdsx.push({index: index, widthx: td.offsetWidth})
        });


        let colgrouptable = this.$refs.colgrouptable
        if (colgrouptable !== undefined && colgrouptable !== null ) {
          let colsTable = colgrouptable.querySelectorAll('.col')
          colsTable.forEach((col, index) => {
            col.setAttribute('width', tdsx[index].widthx)
          });
        }

      }
    },
    changeMaxItems (index) {
      this.maxItemsx = this.descriptionItems[index]
    }
  }
}
</script>