<template>
  <th
    colspan="1"
    rowspan="1">
    <div class="vs-table-text">
      <span
        v-if="sortKey"
        class="sort-th">
        <i
          class="material-icons up-sort"
          @click="sortValue(false)">
          expand_less
        </i>
        <i
          class="material-icons down-sort"
          @click="sortValue(true)">
          expand_more
        </i>
      </span>
      <slot></slot>
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
    sortActive: false
  }),
  computed: {
    styleth () {
      return {
        width: this.thwidth
      }
    }
  },
  methods:{
    sortValue (direction) {
      this.$parent.sort(this.sortKey, direction)
      this.sortActive = direction
    }
  }

}
</script>
