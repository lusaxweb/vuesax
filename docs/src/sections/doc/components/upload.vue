<template lang="html">
  <div class="">
    <con-doc :apix="api" titlex="Upload" textx="Upload images easily and with nice effect (in progress).">
      <div slot="codes">
        <codex :float="true" titlex="Default" :code="code1">
        <div  slot="ejemplo">
            <vs-upload :vs-file.sync="url1" />
         </div>
       </codex>
        <codex :float="true" titlex="Multiple" :code="code2">
        <div  slot="ejemplo">
           <!-- //code -->
           <vs-upload :vs-file-list.sync="urls1" multiple />
<pre class="pre">
{{urls1}}
</pre>
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
      url1:'hola',
      urls1:[],
      api:[
        {
          name:'vs-file',
          type:'String',
          parametros:'',
          descripcion:'Valor del componente (No multiple)',
          default:''
        },
        {
          name:'vs-file-list',
          type:'Array',
          parametros:'name',
          descripcion:'Valor del componente Multiple image',
          default:'[]'
        },
      ],
      code1:`
<template>
  <vs-upload :vs-file.sync="url1" />
</template>
<script>
export default {
  data(){
    url1:'',
  }
}
</\script>
      `,
      code2:`
<template>
  <vs-upload :vs-file-list.sync="urls1" multiple />
  <pre class="pre">
  {{urls1}}
  </pre>
</template>
<script>
export default {
  data(){
    urls1:[],
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
.pre {
  width: 100%;
  background: rgb(245, 245, 245);
  margin-top: 10px;
  text-align: left;
  padding: 20px;
  border-radius: 10px;
  color: rgba(0, 0, 0, 0.6);
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
