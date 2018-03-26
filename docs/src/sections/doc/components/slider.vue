<template lang="html">
  <div class="">
    <con-doc :apix="api" titlex="Slider" textx="change the values with very good UX.">
      <div slot="codes">
        <codex :float="true" titlex="Default" :code="code1">
        <div  slot="ejemplo">
           <!-- //code -->
           <vs-slider v-model="value1"/>
           <vs-slider disabled="true" v-model="value2"/>
         </div>
       </codex>
        <codex :float="true" titlex="Color" :code="code2">
        <div slot="ejemplo">
          <input type="color" v-model="colorx" name="" >
           <vs-slider :vs-color="colorx" v-model="value3"/>
         </div>
       </codex>
        <!-- <codex :float="true" titlex="Min / Max" :code="code1">
        <div slot="ejemplo">
           <vs-slider vs-min="20" :vs-color="'rgb(235, 67, 67)'" v-model="value4"/>
         </div>
       </codex> -->
        <codex :float="true" titlex="Change" :code="code3">
        <div slot="ejemplo">
           <vs-slider @change="cambio" :vs-color="'rgb(45, 208, 129)'" v-model="value4"/>
           <div :style="{'width':widthx+'px','height':heightx+'px'}" class="cuadrox">
             {{value4}}
           </div>
         </div>
       </codex>
      </div>
    </con-doc>
  </div>
</template>

<script>
import conDoc from '../../../components/conDoc.vue'
import titlex from '../../../components/title.vue'
import codex from '../../../components/code.vue'
import $ from 'jquery'
export default {
  components:{
    conDoc,
    codex,
  },
  data(){
    return {
      heightx:80,
      widthx:80,
      colorx:'#bb20c8',
      value1:69,
      value2:306,
      value3:55,
      value4:80,
      api:[
        {
          name:'vs-color',
          type:'string',
          parametros:'RGB || HEX',
          descripcion:'Color del componente Slider',
          default:'primary'
        },
        {
          name:'change',
          type:'function',
          parametros:'value',
          descripcion:'function que se ejecuta al hacer cambio en el valor del slider',
          default:'null'
        },
        {
          name:'disabled',
          type:'boolean',
          parametros:'true || false',
          descripcion:'determina si el objeto esta inhabilitado',
          default:'false'
        },
      ],
      code1:`
<template>
  <vs-slider v-model="value1"/>
  <vs-slider disabled="true" v-model="value2"/>
</template>
<script>
data(){
  return {
    value1:69,
    value2:36,
  }
}
</\script>
      `,
      code2:`
<template>
 <input type="color" v-model="colorx" name="" >
 <vs-slider :vs-color="colorx" v-model="value1"/>
</template>
<script>
export default {
  data(){
    return {
      colorx:'#bb20c8',
      value1:55,
    }
  }
}
</\script>
      `,
      code3:`
<template>
<vs-slider @change="cambio" :vs-color="'rgb(45, 208, 129)'" v-model="value1"/>
<div :style="{'width':widthx+'px','height':heightx+'px'}" class="cuadrox">
  {{value1}}
</div>
</template>
<script>
export default {
  data(){
    return {
      colorx:'#bb20c8',
      value1:55,
    }
  },
  methods:{
    cambio(value){
      this.widthx = value
      this.heightx = value
    }
  }
}

</\script>
      `,
    }
  },
  methods:{
    cambio(value){
      this.widthx = value
      this.heightx = value
    }
  }
}
</script>

<style lang="css" scoped>
.cuadrox {
  background: rgb(45, 208, 129);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(255, 255, 255);
  border-radius: 5px;
}
.ul {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}
.modelx {
  padding: 10px;
  color: rgba(0, 0, 0, 0.7);
  background: rgb(240, 240, 240);
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>
