<template>
  <tr
    ref="tableTr"
    :class="[`tr-table-state-${state}`, {'is-selected':isSelected, 'selected': data, 'is-expand': maxHeight != '0px', 'activeEdit': activeEdit, 'hoverFlat': $parent.hoverFlat}]"
    class="tr-values vs-table--tr"
    @dblclick="dblclicktr"
    @click="clicktr"
  >
    <td
      v-if="$parent.multiple || $slots.expand"
      :class="{'active-expanded': expanded}"
      class="td-check"
    >
      <vs-checkbox
        v-if="$parent.multiple"
        :checked="isSelected"
        size="small"
        @change="handleCheckbox"
      />

      <vs-icon v-if="$slots.expand" @click="expand_click">keyboard_arrow_down</vs-icon>
    </td>
    <slot></slot>
  </tr>
</template>
<script>
import Vue from 'vue';
import trExpand from './vsTrExpand.vue'
export default {
  name: 'VsTr',
  props:{
    state:{
      type:String,
      default: null
    },
    data: {
      default: null
    },
  },
  data:()=>({
    colspan:0,
    expanded: false,
    maxHeight:'0px',
    activeEdit: false
  }),
  computed:{
    styleExpand () {
      return {
        maxHeight: this.maxHeight
      }
    },
    getColspanExpand () {
      let lengthx = this.$parent.$refs.colgroup.querySelectorAll('th').length
      return lengthx
    },
    isSelected(){
      if(this.$parent.multiple && this.$parent.value) {
        return this.data ? this.$parent.value.includes(this.data) : false
      } else {
        return this.data ? this.$parent.value == this.data : false
      }
    }
  },
  watch: {
    '$parent.datax'() {
      this.collapseExpandedData()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.colspan = this.$parent.$refs.thead.querySelectorAll('th').length
      if (this.$slots.expand) {
        this.colspan++
      }
    })
  },
  created() {
    if(this.$slots.expand) this.$parent.hasExpadableData = true
  },
  methods:{
    handleCheckbox() {
      this.$parent.handleCheckbox(this.data)
    },
    insertAfter(e,i){
      if(e.nextSibling){
        e.parentNode.insertBefore(i,e.nextSibling);
      } else {
        e.parentNode.appendChild(i);
      }
    },
    clicktr (evt, expand=false) {
      this.$parent.clicktr(this.data, true)

      if (!this.$slots.expand) return

      if (this.$parent.onlyIconExpand) {
        if (expand) this.clicktd(evt)
      } else {
        this.clicktd(evt)
      }
    },
    dblclicktr () {
      this.$parent.dblclicktr(this.data, true)
    },
    clicktd (evt) {
      if(this.$parent.multiple || !this.$slots.expand) return
      let tr = evt.target.closest('tr')
      if(this.expanded) {
        tr.parentNode.removeChild(tr.nextSibling)
        tr.classList.remove('tr-expandedx')
        this.expanded = false
      } else {
        tr.classList.add('tr-expandedx')
        let trx = Vue.extend(trExpand);
        let instance = new trx();
        instance.$props.colspan = this.colspan
        instance.$slots.default = this.$slots.expand
        instance.vm = instance.$mount();
        var newTR = document.createElement('tr').appendChild(instance.vm.$el);
        this.insertAfter(tr, newTR)
        this.expanded = true
      }
    },
    collapseExpandedData() {
      if(this.expanded){
        const tr = this.$refs.tableTr
        tr.parentNode.removeChild(tr.nextSibling)
        tr.classList.remove('tr-expandedx')
        this.expanded = false
      }
    },
    expand_click(evt) {
      if (this.$parent.onlyIconExpand) this.clicktr(evt, true)
    }
  }
}
</script>
