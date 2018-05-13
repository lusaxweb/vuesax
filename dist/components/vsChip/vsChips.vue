<template lang="html">
  <div class="">
    <!-- <pre>
      {{itemsx}}
    </pre> -->
    <div :class="{'no-items':itemsx.length==0}" class="con-chips">
      <vs-chip :vs-color="vsColor" :key="index" item vs-closable @vs-remove="removeItem(index)" v-for="item,index in itemsx">
        {{item}}
      </vs-chip>
      <input :placeholder="itemsx.length>0?null:placeholder" @keypress.enter="addItem" v-model="newChip" type="text" name="" value="">
      <div @click="removeTotalItems" class="x-global">
        <i class="material-icons">close</i>
      </div>
    </div>
  </div>
</template>

<script>
import vsChip from './vsChip.vue'
export default {
  name:'vs-chips',
  props:{
    vsColor:{
      type:String,
      default:'primary',
    },
    placeholder:{
      type:String,
      default:'',
    },
    items:{
      type:Array,
    }
  },
  components:{
    vsChip
  },
  data(){
    return {
      newChip:'',
      chip1:true,
      itemsx:this.items
    }
  },
  methods:{
    addItem(){
      this.itemsx.push(this.newChip)
      this.newChip = ''
    },
    removeItem(index){
      this.itemsx.splice(index, 1);
    },
    removeTotalItems(){
      // this.itemsx = []
      this.itemsx.splice(0, this.itemsx.length);
    }
  }
}
</script>

<style lang="css">
.con-chips {
  width: 100%;
  /* background: rgb(136, 231, 39); */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  padding: 5px;
}
.con-chips .con-vs-chip {
  margin-top: 0px;
  margin-bottom: 0px;
}
.con-chips input {
  display: inline-block;
  flex:1;
  /* height: 30px; */
  padding: 9px;
  box-sizing: border-box;
  min-width: 80px;
  border: 0px;
  padding-left: 2px;
}
.x-global {
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translate(0,-50%);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  cursor: pointer;
  transition: all .3s ease;
}
.x-global:hover {
  color: rgb(var(--danger))
}
.no-items input{
  padding-left: 10px !important;
}
</style>
