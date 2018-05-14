<template lang="html">
  <div slot-scope class="">
    <a v-if="!editando" href="#" @click="editar()">{{vsProperty}}</a>
    <div v-else class="con-editx">
      <slot  @enter="editando=false">
      </slot>
      <button @click="editando=false" type="button" name="button">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name:'vs-edit',
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
  created(){
    console.log(this.$parent);
    // console.log(this.$parent);
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
