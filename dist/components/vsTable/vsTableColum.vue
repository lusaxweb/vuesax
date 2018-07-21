<template lang="html">
  <th 
    v-if="vsLabel||vsType" 
    :width="vsType=='checkbox'?'50px':'auto'">
    {{ vsLabel }}
    <!-- input checkbox -->
    <div 
      v-show="typeof vsCheckAll == 'Boolean'?vsCheckAll:vsCheckAll!='false'" 
      v-if="vsType?vsType=='checkbox':false" 
      class="con-checkbox">
      <input 
        :disabled="lengthData==0" 
        type="checkbox" 
        name="" 
        value="" 
        @change="changeCheckbox($event.target.checked)">
      <div class="vs-checkbox">
        <span class="flaticon-check"/>
      </div>
    </div>
  </th>
</template>

<script>
export default {
  name:'VsTableColum',
  props:{
    vsLabel:{
      type:String,
      default:'',
    },
    vsType:{
      type:String,
      default:null,
    },
    vsProperty:{
      type:String,
      default:null,
    },
    vsCheckAll:{
      type:[Boolean,String],
      default:true,
    },
    vsFontSize:{
      type:[Number,String],
      default:13,
    }
  },
  data(){
    return {
      lengthData:0,
    }
  },
  created(){

    this.types()
  },
  updated(){
    this.types()
  },
  methods:{
    changeCheckbox(value){
      this.$parent.changeCheckboxAll(value)
    },
    types(){
      if(this.vsType){
        if(this.vsType=='checkbox'){

          this.$parent.checkbox = true
        }
      }

      // emit al padre

      if(this.vsProperty){
        this.$parent.ths.push(this._props)
      }

      this.$parent.thLength++

    },
    retornaTh(element){
      if(this.vsProperty){
        return element.property.search(this.vsProperty)!=-1
      }
    }
  },
}
</script>

<style lang="css" scoped>
.td-checkbox {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 50px;
}
input[type="checkbox"]{
  width: 15px;
  height: 15px;
  background: rgb(113, 199, 224);
  position: absolute;
  opacity: 0;
  z-index: 200;
  padding: 0px !important;
  margin: 0px !important;
  left: 0px;
  top: 0px;
  cursor: pointer;
}
input[type="checkbox"]:disabled + .vs-checkbox {
  opacity: .4 !important;
  pointer-events: none;
}
.con-checkbox {
  width: 17px;
  height: 17px;
  position: relative;
  left: 0px;
  top: 0px;
}
.vs-checkbox {
  width: 100%;
  position: relative;
  z-index: 100;
  height: 100%;
  background: rgb(255, 255, 255);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(200, 200, 200);
  transition: all .3s ease;
  cursor: pointer;
}
.vs-checkbox span {
  font-size: 0.625em;
  color: rgb(255, 255, 255);
}
input[type="checkbox"]:checked + .vs-checkbox {
  border: 1px solid rgb(var(--color-primary));
  background: rgb(var(--color-primary));
}
input[type="checkbox"]:checked + .vs-checkbox span{
  color: rgb(255, 255, 255);
}
</style>
