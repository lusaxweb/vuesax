<template>
  <!-- <tbody
    :class="[`tr-table-state-${state}`, {'is-selected':isSelected, 'selected': data, 'is-expand': maxHeight != '0px', 'activeEdit': activeEdit, 'hoverFlat': $parent.hoverFlat}]"
    class="tr-table"
    @click="clicktr"> -->
      <!-- <tr
        v-if="!$parent.notSpacer"
        class="tr-spacer"></tr> -->
      <tr
        @click="clicktr"
        :class="[`tr-table-state-${state}`, {'is-selected':isSelected, 'selected': data, 'is-expand': maxHeight != '0px', 'activeEdit': activeEdit, 'hoverFlat': $parent.hoverFlat}]"
        class="tr-values vs-table--tr">
        <td
          class="td-check"
          :class="{'active-expanded': this.expanded}"
          @click="clicktd($event)">
          <vs-checkbox
            v-if="$parent.multiple"
            :checked="isSelected"
            size="small"/>

          <vs-icon v-if="$slots.expand">keyboard_arrow_down</vs-icon>
        </td>
        <slot></slot>
      </tr>
      <!-- <tr
        v-if="$slots.expand"
        class="tr-expand">
        <td
          ref="td"
          :colspan="colspan">
          <div
            :style="styleExpand"
            class="con-expand">
            <slot name="expand"></slot>
          </div>
        </td>
      </tr> -->
  <!-- </tbody> -->
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
  mounted () {
    this.$nextTick(() => {
      this.colspan = this.$parent.$refs.thead.querySelectorAll('th').length
      if (this.$slots.expand) {
        this.colspan++
      }
    })
  },
  methods:{
    insertAfter(e,i){
      if(e.nextSibling){
        e.parentNode.insertBefore(i,e.nextSibling);
      } else {
        e.parentNode.appendChild(i);
      }
    },
    clicktr (evt) {
      this.$parent.clicktr(this.data, true)

      if (this.$slots.expand) {
        this.clicktd(evt)
      }
    },
    clicktd (evt) {
      if(this.$parent.multiple) {
        return
      }
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

      // this.$parent.clicktr(this.data, false)

      // if(this.$parent.multiple) {
      //   return
      // }
      // let scrollHeight = this.$refs.td.scrollHeight
      // if(this.maxHeight == '0px') {
      //   this.maxHeight = `${scrollHeight}px`
      //   setTimeout(() => {
      //     this.maxHeight = 'none'
      //   },300)
      // } else {
      //   this.maxHeight = `${scrollHeight}px`
      //   setTimeout(() => {
      //     this.maxHeight = `${0}px`
      //   }, 50)
      // }
    }
  }
}
</script>
