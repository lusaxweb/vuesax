<template lang="html">
  <div class="">
    <con-doc :text="true" :apix="api" titlex="selects" textx="Selects limpios y con un efecto agradable, muy faciles de implementar.">
      <div slot="codes">
        <codex :float="true" titlex="State" :code="code1">
          <div  slot="text">
             <!-- //code -->
           </div>
        <div  slot="ejemplo">
           <!-- //code -->
         </div>
       </codex>
      </div>
    </con-doc>
  </div>
</template>

<script>
import conDoc from '../../components/conDoc.vue'
import titlex from '../../components/title.vue'
import codex from '../../components/code.vue'
import $ from 'jquery'
export default {
  components:{
    conDoc,
    codex,
  },
  data(){
    return {
      api:[
        {
          name:'options',
          type:'Array',
          parametros:'',
          descripcion:'Opciones para seleccionar',
          default:'[]'
        },
      ],
      code1:`
<template>

</template>
<script>
export default {
  data(){

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
