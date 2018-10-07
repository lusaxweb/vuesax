<template>
  <td class="td" :class="{'td-edit': $slots.edit}" ref="td">
    <span @click="clicktd">
      <vs-icon class="icon-edit" v-if="$slots.edit">
        edit
      </vs-icon>
      <slot></slot>
      <span v-if="$slots.edit" class="empty">
        {{data ? '' : 'Empty'}}
      </span>
    </span>

    <transition name="td">
      <div v-if="activeEdit" class="con-edit-td">
        <slot name="edit"></slot>
        <vs-button @click="close" vs-icon="clear"  vs-size="small" color="primary" vs-type="flat"></vs-button>
      </div>
    </transition>
  </td>
</template>
<script>
export default {
  name: 'VsTd',
  props:{
    data:{
      default: null
    }
  },
  data: () => ({
    activeEdit: false
  }),
  watch:{
    activeEdit() {
      this.$parent.activeEdit = this.activeEdit
    }
  },
  methods:{
    clicktd () {

      if(this.$slots.edit) {
        if (!this.activeEdit) {
          this.activeEdit = true
          setTimeout(()=>{
            window.addEventListener('click', this.closeEdit)
          },10)
        }
      }
    },
    closeEdit (evt) {
      if (!evt.target.closest('.con-edit-td') && !evt.target.closest('.vs-select-options')) {
        this.close()
      }
    },
    close(){
      this.activeEdit = false
      window.removeEventListener('click', this.closeEdit)
    },
    saveEdit () {
      this.activeEdit = false
    }
  }
}
</script>
