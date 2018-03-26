<template lang="html">
  <div class="">
    <con-doc :apix="api" titlex="Radio" textx="Radio with a nice effect, very easy to implement.">
      <div slot="codes">
        <codex :float="true" titlex="Default" :code="code1">
          <div slot="ejemplo">
            <ul class="ul">
              <li class="modelx">
                {{radios1}}
              </li>
              <li>
                <vs-radio v-model="radios1" vs-value="luis">Luis</vs-radio>
              </li>
              <li>
                <vs-radio v-model="radios1" vs-value="carols">Carols</vs-radio>
              </li>
              <li>
                <vs-radio v-model="radios1" vs-value="summer">summer</vs-radio>
              </li>
              <li>
                <vs-radio disabled="true" v-model="radios1" vs-value="lyon">Lyon - disabled</vs-radio>
              </li>
            </ul>
          </div>
        </codex>
        <codex :float="true" titlex="Colors" :code="code2">
          <div slot="ejemplo">
            <ul class="ul">
              <li class="modelx">
                {{radios2}}
              </li>
              <li>
                <vs-radio v-model="radios2" vs-value="primary">Primary</vs-radio>
              </li>
              <li>
                <vs-radio vs-color="success" v-model="radios2" vs-value="Success">Success</vs-radio>
              </li>
              <li>
                <vs-radio vs-color="danger" v-model="radios2" vs-value="Danger">Danger</vs-radio>
              </li>
              <li>
                <vs-radio vs-color="warning" v-model="radios2" vs-value="Warning">Warning</vs-radio>
              </li>
              <li>
                <vs-radio vs-color="dark" v-model="radios2" vs-value="Dark">Dark</vs-radio>
              </li>
              <li>
                <vs-radio vs-color="rgb(87, 251, 187)" v-model="radios2" vs-value="RGB">RGB</vs-radio>
              </li>
              <li>
                <vs-radio vs-color="#e48346" v-model="radios2" vs-value="HEX">HEX</vs-radio>
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
      radios1:'luis',
      radios2:'primary',
      radios3:'primary',
      api:[
        {
          name:'vsValue',
          type:'string',
          descripcion:'Valor del radio',
          default:'null'
        },
        {
          name:'vsColor',
          type:'string',
          parametros:'primary,success,danger,warning,dark,RGB,HEX',
          descripcion:'Color del radio',
          default:'primary'
        },
      ],
      code1:`<template>
<ul>
  <li>
    {{radios1}}
  </li>
  <li>
    <vs-radio v-model="radios1" vs-value="luis">Luis</vs-radio>
  </li>
  <li>
    <vs-radio v-model="radios1" vs-value="carols">Carols</vs-radio>
  </li>
  <li>
    <vs-radio v-model="radios1" vs-value="summer">summer</vs-radio>
  </li>
  <li>
    <vs-radio disabled="true" v-model="radios1" vs-value="lyon">Lyon</vs-radio>
  </li>
</ul>
</template>

<script>
export default {
  data(){
    radios1:'luis',
  }
}
</\script>
      `,
      code2:`<template>
<ul>
  <li>
    {{radios1}}
  </li>
  <li>
    <vs-radio v-model="radios1" vs-value="primary">Primary</vs-radio>
  </li>
  <li>
    <vs-radio vs-color="success" v-model="radios1" vs-value="Success">Success</vs-radio>
  </li>
  <li>
    <vs-radio vs-color="danger" v-model="radios1" vs-value="Danger">Danger</vs-radio>
  </li>
  <li>
    <vs-radio vs-color="warning" v-model="radios1" vs-value="Warning">Warning</vs-radio>
  </li>
  <li>
    <vs-radio vs-color="dark" v-model="radios1" vs-value="Dark">Dark</vs-radio>
  </li>
  <li>
    <vs-radio vs-color="rgb(87, 251, 187)" v-model="radios1" vs-value="RGB">RGB</vs-radio>
  </li>
  <li>
    <vs-radio vs-color="#e48346" v-model="radios1" vs-value="HEX">HEX</vs-radio>
  </li>
</ul>
</template>

<script>
export default {
  data(){
    radios1:'primary',
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
