<template lang="html">
  <div :class="[`vs-input-number-${color}`,{'isChangeValue':isChangeValue}]" class="vs-input-number">
    <button class="btn-less" @click="changeValue('-')" type="button">
      <i class="material-icons">
        remove
      </i>
    </button>
    <input
      :value="value"
      v-on="listeners"
      type="number">
    <button class="btn-plus" @click="changeValue('+')" type="button">
      <i class="material-icons">
        add
      </i>
    </button>
  </div>
</template>

<script>

export default {
  name:'VsInputNumber',
  props:{
    value:{},
    color:{
      default:'primary',
      type:String
    }
  },
  data:()=>({
    isChangeValue:false
  }),
  watch:{
    value(){
      this.isChangeValue = true
      setTimeout(()=>{
        this.isChangeValue = false
      },200)
    }
  },
  computed:{
    listeners(){
      return {
        input:(evt)=>{
          this.$emit('input',evt.target.value)
        }
      }
    }
  },
  methods:{
    changeValue(signo){
      if(signo == '+'){
        this.$emit('input',Number(this.value) + 1)
      } else {
        this.$emit('input',Number(this.value) - 1)
      }
    }
  }
}
</script>
