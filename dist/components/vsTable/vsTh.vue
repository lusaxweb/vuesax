<template>
  <th class="col-0 col" colspan="1" rowspan="1">
    <div class="vs-table-text">
      <span v-if="sortKey" class="sort-th">
        <i @click="sortValue(false)" class="material-icons up-sort">
          expand_less
        </i>
        <i @click="sortValue(true)" class="material-icons down-sort">
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
