<template lang="html">
  <div class="">
    <con-doc :apix="api" titlex="checkbox" textx="Radio with a nice effect, very easy to implement.">
      <div slot="codes">
        <codex :float="true" titlex="State" :code="code1">
          <div  slot="ejemplo">
            <ul class="ul">
              <li>
                <vs-checkbox v-model="checkBox1">Primary - active</vs-checkbox>
              </li>
              <li>
                <vs-checkbox v-model="checkBox2">Primary - inactive</vs-checkbox>
              </li>
              <li>
                <vs-checkbox disabled="true" v-model="checkBox3">Primary - active - disabled</vs-checkbox>
              </li>
              <li>
                <vs-checkbox disabled="true" v-model="checkBox4">Primary - inactive - disabled</vs-checkbox>
              </li>
            </ul>
          </div>
          </codex>

        <codex :float="true" titlex="Colors" :code="code2" codepen="https://codepen.io/lusaxweb/pen/zRpYGN">
          <div  slot="ejemplo">
            <ul class="ul">
              <li>
                <vs-checkbox v-model="checkBox2_1">Primary</vs-checkbox>
              </li>
              <li>
                <vs-checkbox vs-color="success" v-model="checkBox2_2">Success</vs-checkbox>
              </li>
              <li>
                <vs-checkbox vs-color="danger" v-model="checkBox2_3">Danger</vs-checkbox>
              </li>
              <li>
                <vs-checkbox vs-color="warning" v-model="checkBox2_4">Warning</vs-checkbox>
              </li>
              <li>
                <vs-checkbox vs-color="dark" v-model="checkBox2_5">Dark</vs-checkbox>
              </li>
              <li>
                <vs-checkbox vs-color="rgb(38, 187, 174)" v-model="checkBox2_6">Color RGB</vs-checkbox>
              </li>
              <li>
                <vs-checkbox vs-color="#720ea8" v-model="checkBox2_7">Color HEX</vs-checkbox>
              </li>
            </ul>
          </div>
          </codex>
          <codex :float="true" titlex="boolean" :code="code3">
            <div  slot="ejemplo">
              <ul class="ul">
                <li>
                  <vs-checkbox v-model="checkBox3_1">{{checkBox3_1}}</vs-checkbox>
                </li>
                <li>
                  <vs-checkbox v-model="checkBox3_2">{{checkBox3_2}}</vs-checkbox>
                </li>
              </ul>
            </div>
            </codex>
          <codex :float="true" titlex="String" :code="code4">
            <div  slot="ejemplo">
              <ul class="ul">
                <li class="modelx">
                  {{checkBox4_1==null?'null':checkBox4_1}}
                </li>
                <li>
                  <vs-checkbox v-model="checkBox4_1" vs-value="luis daniel" >luis daniel</vs-checkbox>
                </li>
              </ul>
            </div>
            </codex>
          <codex :float="true" titlex="Array" :code="code5">
            <div  slot="ejemplo">
              <ul class="ul">
                <li class="modelx">
                  {{checkBox5_1}}
                </li>
                <li>
                  <vs-checkbox v-model="checkBox5_1" vs-value="luis">Luis</vs-checkbox>
                </li>
                <li>
                  <vs-checkbox v-model="checkBox5_1" vs-value="carols">carols</vs-checkbox>
                </li>
                <li>
                  <vs-checkbox v-model="checkBox5_1" vs-value="summer">summer</vs-checkbox>
                </li>
                <li>
                  <vs-checkbox v-model="checkBox5_1" vs-value="lyon">Lyon</vs-checkbox>
                </li>
              </ul>
            </div>
            </codex>
          <codex :float="true" titlex="Contribution">
            <div  slot="ejemplo">
              <ul class="contribution">
                <li>
                  <b>v 2.0.35 -</b> Updated with the help of <a href="https://twitter.com/SHiFtalm">Yung Lennon</a>
                </li>
              </ul>
            </div>
            </codex>
      </div>
    </con-doc>
  </div>
</template>

<script>
import conDoc from '../../../components/conDoc.vue'
import codex from '../../../components/code.vue'
export default {
  components:{
    conDoc,
    codex,
  },
  data(){
    return {
      checkBox1:true,
      checkBox2:false,
      checkBox3:true,
      checkBox4:false,

      checkBox2_1:true,
      checkBox2_2:true,
      checkBox2_3:true,
      checkBox2_4:true,
      checkBox2_5:true,
      checkBox2_6:true,
      checkBox2_7:true,

      checkBox3_1:true,
      checkBox3_2:false,

      checkBox4_1:null,
      checkBox5_1:['luis'],
      api:[
        {
          name:'v-model',
          type:'String / bolean / array',
          parametros:'',
          descripcion:'valores de enlace',
          default:'null'
        },
        {
          name:'vs-color',
          type:'string',
          parametros:'primary, success, danger, warning, dark, RGB, HEX',
          descripcion:'opciones de colores para el checkBox',
          default:'primary'
        },
        {
          name:'vs-value',
          type:'String',
          parametros:'',
          descripcion:'valor en caso de ser diferente a un boolean',
          default:'null'
        },

      ],
      code1:`<template lang="html">
  <vs-checkbox v-model="checkBox1">Primary - active</vs-checkbox>
  <vs-checkbox v-model="checkBox2">Primary - inactive</vs-checkbox>
  <vs-checkbox disabled="true" v-model="checkBox3">Primary - active - disabled</vs-checkbox>
  <vs-checkbox disabled="true" v-model="checkBox4">Primary - inactive - disabled</vs-checkbox>
</template>

<script>
export default {
  data(){
    return {
      checkBox1:true,
      checkBox2:false,
      checkBox3:true,
      checkBox4:false,
    }
  }
</\script>
`,
code2:`<template lang="html">
<vs-checkbox v-model="checkBox1">Success</vs-checkbox>
<vs-checkbox vs-color="success" v-model="checkBox2">Success</vs-checkbox>
<vs-checkbox vs-color="danger" v-model="checkBox3">Success</vs-checkbox>
<vs-checkbox vs-color="warning" v-model="checkBox4">Success</vs-checkbox>
<vs-checkbox vs-color="dark" v-model="checkBox5">Success</vs-checkbox>
<vs-checkbox vs-color="rgb(38, 187, 174)" v-model="checkBox6">Success</vs-checkbox>
<vs-checkbox vs-color="#720ea8" v-model="checkBox7">Success</vs-checkbox>
</template>

<script>
export default {
  data(){
    return {
      checkBox1:true,
      checkBox2:true,
      checkBox3:true,
      checkBox4:true,
      checkBox5:true,
      checkBox6:true,
      checkBox7:true,
    }
  }
</\script>
`,
code3:`<template lang="html">
  <vs-checkbox v-model="checkBox3_1">{{checkBox3_1}}</vs-checkbox>
  <vs-checkbox v-model="checkBox3_2">{{checkBox3_2}}</vs-checkbox>
</template>

<script>
export default {
  data(){
    return {
      checkBox1:true,
      checkBox2:false,
    }
  }
</\script>
`,
code4:`<template lang="html">
{{checkBox1}}
  <vs-checkbox v-model="checkBox1" vs-value="luis daniel" >luis daniel</vs-checkbox>
</template>

<script>
export default {
  data(){
    return {
      checkBox1:null,
    }
  }
</\script>
`,
code5:`<template lang="html">
  <vs-checkbox v-model="checkBox1" vs-value="luis">Luis</vs-checkbox>
  <vs-checkbox v-model="checkBox1" vs-value="carols">Carols</vs-checkbox>
  <vs-checkbox v-model="checkBox1" vs-value="summer">Summer</vs-checkbox>
  <vs-checkbox v-model="checkBox1" vs-value="lyon">Lyon</vs-checkbox>
</template>

<script>
export default {
  data(){
    return {
      checkBox1:['luis'],
    }
  }
</\script>
`
    }
  }
}
</script>

<style lang="css" scoped>
.contribution {
  width: 100%;
  color: rgb(0,0,0,.7);
}
.contribution a {
  color: rgb(var(--morado));
  font-weight: bold;
  text-decoration: underline;
  padding-left: 5px;
}
.modelx {
  padding: 10px;
  color: rgba(0, 0, 0, 0.7);
  background: rgb(240, 240, 240);
  border-radius: 5px;
  margin-bottom: 10px;
}
.ul {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}
</style>
