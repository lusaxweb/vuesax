<template lang="html">
  <div class="">
    <con-doc :apix="api" titlex="Input Number" textx="Input of single numbers pleasant to the user and practical.">
      <div slot="codes">
        <codex :float="true" titlex="Default" :code="code1">
        <div  slot="ejemplo">
           <vs-input-number v-model="number"/>
           <vs-input-number :disabled="true" v-model="number1"/>
         </div>
       </codex>
        <codex :float="true" titlex="Color" :code="code2">
          <div  slot="ejemplo">
             <vs-input-number vs-color="danger" v-model="number2"/>
             <vs-input-number vs-color="success" v-model="number2_3"/>
             <vs-input-number vs-color="warning" v-model="number2_2"/>
             <vs-input-number vs-color="dark" v-model="number2_4"/>
             <vs-input-number vs-color="rgb(218, 24, 94)" v-model="number2_5"/>
             <vs-input-number vs-color="#ad3af9" v-model="number2_6"/>
           </div>
       </codex>
        <codex :float="true" titlex="Min - Max" :code="code3">
          <div  slot="ejemplo">
             <vs-input-number vs-min="13" vs-max="21" v-model="number3"/>
           </div>
       </codex>
        <codex :float="true" titlex="Size" :code="code4">
          <div  slot="ejemplo">
             <vs-input-number v-model="number3_0"/>
             <vs-input-number vs-size="medium" v-model="number3_1"/>
             <vs-input-number vs-size="small" v-model="number3_2"/>
             <vs-input-number vs-size="mini" v-model="number3_3"/>
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
      number:34,
      number1:48,
      number2:196,
      number2_2:25,
      number2_3:88,
      number2_4:12,
      number2_5:590,
      number2_6:32,

      number3:21,

      number3_0:95,
      number3_1:21,
      number3_2:67,
      number3_3:2,
      api:[
        {
          name:'vs-color',
          type:'string',
          parametros:'RGB, HEX, primary, success, danger, warning, dark',
          descripcion:'Color del componente',
          default:'primary'
        },
        {
          name:'vs-max',
          type:'number',
          parametros:'',
          descripcion:'numero maximo admitido',
          default:'null'
        },
        {
          name:'vs-min',
          type:'number',
          parametros:'',
          descripcion:'numero minimo admitido',
          default:'null'
        },
        {
          name:'vs-size',
          type:'string',
          parametros:'medium, small, mini',
          descripcion:'Tamaño del componente',
          default:'null'
        },
        {
          name:'change',
          type:'function',
          parametros:'',
          descripcion:'function ejecutada al cambiar el valor del componente',
          default:'null'
        },
      ],
      code1:`
<template>
<vs-input-number v-model="number1"/>
<vs-input-number :disabled="true" v-model="number2"/>
</template>
<script>
export default {
  data(){
    return {
      number1:34,
      number2:48,
    }
  }
}
</\script>
      `,
      code2:`
<template>
<vs-input-number vs-color="danger" v-model="number1"/>
<vs-input-number vs-color="success" v-model="number2"/>
<vs-input-number vs-color="warning" v-model="number3"/>
<vs-input-number vs-color="dark" v-model="number4"/>
<vs-input-number vs-color="rgb(218, 24, 94)" v-model="number5"/>
<vs-input-number vs-color="#ad3af9" v-model="number6"/>
</template>
<script>
export default {
  data(){
    return {
      number1:196,
      number2:88,
      number3:25,
      number4:12,
      number5:590,
      number6:32,
    }
  }
}
</\script>
      `,
      code3:`
<template>
<vs-input-number vs-min="13" vs-max="21" v-model="number1"/>
</template>
<script>
export default {
  data(){
    return {
      number1:21,
    }
  }
}
</\script>
      `,
      code4:`
<template>
<vs-input-number v-model="number3_0"/>
<vs-input-number vs-size="medium" v-model="number3_1"/>
<vs-input-number vs-size="small" v-model="number3_2"/>
<vs-input-number vs-size="mini" v-model="number3_3"/>
</template>
<script>
export default {
  data(){
    return {
      number1:95,
      number2:21,
      number3:67,
      number4:2,
    }
  }
}
</\script>
      `,
    }
  },
  methods:{
    cambio(){
      console.log("hola cambio");
    }
  }
}
</script>

<style lang="css" scoped>
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
