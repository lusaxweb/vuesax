<template lang="html">
  <div
    slot-scope
    class="">
    <a
      v-if="!editando"
      href="#"
      @click="editar()">{{ vsProperty }}</a>
    <div
      v-else
      class="con-editx">
      <slot @enter="editando=false"/>
      <button
        type="button"
        name="button"
        @click="editando=false">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name:'VsEdit',
  props:{
    vsProperty:{
      type:String,
      default:null
    }
  },
  data(){
    return {
      editando:false,
    }
  },
  methods:{
    editar(){
      this.editando = true
    }
  }
}
</script>

<style lang="css" scoped>
  .con-editx {
    position: absolute;
    padding: 10px;
    background: rgb(255, 255, 255);
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    top: 0px;
    left: 0px;
  }
</style>
