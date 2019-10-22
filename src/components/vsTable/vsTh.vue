<template>
  <th
    colspan="1"
    rowspan="1"
    @click="sortValue()">
    <div class="vs-table-text">
      <slot></slot>
      <span
        v-if="isColumnSelectedForSort && currentSort != 0"
        class="sort-th">
        <vs-icon
          :icon="currentSort == 1 ? 'expand_less' : 'expand_more'"
          class="th-sort-icon">
        </vs-icon>
      </span>
    </div>
  </th>
</template>
<script>
export default {
  name: 'VsTh',
  props:{
    sortKey:{
      default:null,
      type: String
    }
  },
  data: () => ({
    thIndex:0,
    thwidth: '100%',
    currentSort: 0,
    sortStatuses: [
      null,
      'asc',
      'desc'
    ]
  }),
  computed: {
    styleth () {
      return {
        width: this.thwidth
      }
    },
    isColumnSelectedForSort() {
      if(!this.sortKey) {
        return false;
      }
      if(this.$parent.currentSortKey != this.sortKey) {
        this.resetSort();
      }
      return this.$parent.currentSortKey == this.sortKey;
    },
    parentSortStatus() {
      return this.$parent.currentSortType;
    }
  },
  methods:{
    sortValue () {
      this.currentSort = this.currentSort !== 2 ? this.currentSort + 1 : 0;
      this.$parent.sort(this.sortKey, this.sortStatuses[this.currentSort]);
    },
    resetSort() {
      this.currentSort = 0;
    }
  }

}
</script>
