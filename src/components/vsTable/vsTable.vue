<template lang="html">
  <div class="con-vs-table">
<!-- <div>
  {{ths}}
</div> -->
    <table>
      <thead ref="thead">
        <tr>
          <!-- header for JSON -->
          <th v-if="ths.length<=0" v-for="th in vsHeaders">
            {{th.title}}
          </th>

          <!-- // header por template -->
          <slot v-else>
          </slot>
        </tr>
      </thead>
      <tbody class="vs-tbody" :style="{'font-size':vsFontSize+'px'}"  @click="emitClickTr(tr,trIndex,$event)" v-for="tr,trIndex in vsData">
        <tr>
          <slot name="trs" :items="tr">

          </slot>
        </tr>

        <!-- <tr>
          <td width="50px" class="td-checkbox" v-if="checkbox">
            <div class="con-checkbox">
              <input :ref="'checkboxx'+trIndex" :checked="saberSiEstaCheck(tr)" @change="changeCheckbox(tr,trIndex,$event.target.checked)" type="checkbox" name="" value="">
              <div class="vs-checkbox">
                <span class="flaticon-check"></span>
              </div>
            </div>
          </td>

          <td v-if="!vsEditable" :style="{'font-size':td.vsFontSize+'px'}" v-for="td,index in ths.length>0?ths:vsHeaders">
            hola
            {{tr[td.property]}}
            {{vsEditable}}
          </td>


          <!-- editable  --
          <td v-if="vsEditable" :style="{'font-size':td.vsFontSize+'px'}" v-for="td,index in ths.length>0?ths:vsHeaders">
            hola
            <a v-if="editTd != index" href="#" @click="editTd = index">{{tr[td.property]}}</a>
            <div v-else class="">
              <slot :name="td.property" :tr="tr">

              </slot>
              <button @click="editTd = null" type="button" name="button">X</button>
            </div>
          </td>
        </tr> -->
      </tbody>
      <tbody v-if="vsData.length == 0">
        <tr>
          <td :colspan="thLength">
            {{vsNoData}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import vsTableColum from './vsTableColum.vue'
export default {
  components:{
    vsTableColum
  },
  props:{
    vsData:{
      type:Array,
      default:null,
    },
    vsHeaders:{
      type:Array,
      default:null,
    },
    vsSelected:{
      type:Array,
    },
    vsClickRowChecked:{
      type:Boolean,
      default:false,
    },
    vsFontSize:{
      type:Number,
      default:13,
    },
    vsNoData:{
      type:String,
      default:'No hay registros'
    },
    vsEditable:{
      type:Boolean,
      default:false,
    }
  },
  data(){
    return {
      editTd:null,
      ths:[],
      checkbox:false,
      thLength:0,
    }
  },
  created(){
    // console.log(this.$slot);
  },
  methods:{
    emitClickTr(tr,index,evt){
      console.log(tr);

      if(evt.target.localName == 'td'){

      this.$emit('vs-click-row',tr,index)
      if(this.vsClickRowChecked){
        this.changeCheckbox(tr,index,!this.$refs['checkboxx'+index][0].checked)
      }
    }
    },
    saberSiEstaCheck(tr){
      let indexx = null
      this.vsSelected.forEach((item,indexEach)=>{
        if(JSON.stringify(item) ===  JSON.stringify(tr)){
          indexx = indexEach
        }
      })
      if(indexx != null){
        return true
      } else {
        return false
      }
    },
    changeCheckboxAll(value){
      for (var i = 0; i < this.vsSelected.length+1; i++) {
        this.vsSelected.shift()
        this.vsSelected.pop()
      }
      if(value){
        this.vsData.forEach((item)=>{
          this.vsSelected.push(item)
        })
      }
    },
    changeCheckbox(tr,index,value){
      console.log('tr>',tr);
      console.log('index>',index);
      console.log('value>',value);
      if(value){
        this.vsSelected.push(tr)
      } else {
        let indexx = null
        this.vsSelected.forEach((item,indexEach)=>{
          if(JSON.stringify(item) ===  JSON.stringify(tr)){
            indexx = indexEach
          }
        })
        if(indexx != null){
          console.log(indexx);
          this.$delete(this.vsSelected, indexx);
        }
      }
    }
  },
  watch:{
    ths(){
      console.log(this.ths);
        this.ths = this.ths
    }
  }
}
</script>

<style lang="css" scoped>
.vs-tbody {
  position: relative;
}
.vs-tbody td {
  position: relative;
}
.con-vs-table {
    width: 100%;
    border-radius: 10px;
    margin-top: 20px;
    border: 1px solid rgb(240, 240, 240);
    margin-bottom: 20px;
}
.con-vs-table thead {
  background: rgb(245, 245, 245);
}
.con-vs-table tbody {
  border-bottom: 1px solid rgb(245, 245, 245);
}
.con-vs-table tbody tr {
  font-size: inherit
}
.con-vs-table tbody td {
  font-size: inherit
}
.con-vs-table tbody:hover {
  background: rgb(250, 250, 250);
}
.con-vs-table tbody tr:hover {
  background: rgb(250, 250, 250) !important;
}
.con-vs-table table {
  width: 100% !important;
}


.td-checkbox {
  /* position: relative;
  display: flex;
  align-items: center;
  justify-content: center; */
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
  font-size: 10px;
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
