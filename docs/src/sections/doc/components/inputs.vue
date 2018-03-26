<template lang="html">
  <div class="">
    <con-doc :apix="api" titlex="Input" textx="Nice inputs with many variants.">
      <div slot="codes">
        <codex :float="true" titlex="input default" :code="code1">
        <div  slot="ejemplo">
           <vs-input vs-placeholder="Nombre" v-model="value1"/>
           <vs-input disabled="true" vs-placeholder="Disabled" v-model="value2"/>
         </div>
       </codex>
        <codex :float="true" titlex="input label" :code="code2">
        <div  slot="ejemplo">

           <vs-input vs-label="Label" vs-placeholder="Placeholder" v-model="value2_1"/>
           <vs-input disabled="true" vs-label="Label" vs-placeholder="Disabled" v-model="value2_2"/>

         </div>
       </codex>
        <codex :float="true" titlex="input label-placeholder" :code="code3">
        <div  slot="ejemplo">
           <vs-input vs-label-placeholder="Label-placeholder" v-model="value3_1"/>
           <vs-input disabled="true" vs-label-placeholder="Label-placeholder" v-model="value3_2"/>
         </div>
       </codex>
        <codex :float="true" titlex="Icons" :code="code4">
        <div  slot="ejemplo">
          <p class="px">Los iconos de Vuesax utilizan la biblioteca de fuentes de Google Material Icons. Para obtener una lista de todos los íconos disponibles, visite la página oficial de <a target="_blank" href="https://material.io/icons/">Iconos de materiales</a>. </p>
           <vs-input vs-icon="search" vs-placeholder="Search" v-model="value4_1"/>
           <vs-input vs-icon-after="true" vs-label="Icon after" vs-icon="mode_edit" vs-placeholder="Nombre" v-model="value4_2"/>
           <vs-input vs-icon="add" vs-label-placeholder="Label-placeholder" v-model="value4_3"/>
           <vs-input vs-icon-after="true"  vs-icon="shopping_cart" vs-label-placeholder="Label-placeholder" v-model="value4_4"/>
           <vs-input disabled="true" vs-icon="error_outline" vs-label-placeholder="icon-disabled" v-model="value4_5"/>
           <vs-input vs-icon-after="true" disabled="true" vs-icon="email" vs-label-placeholder="icon-disabled" v-model="value4_6"/>
         </div>
       </codex>
        <codex :float="true" titlex="Colors" :code="code5">
        <div  slot="ejemplo">
          <vs-input vs-label-placeholder="Default" v-model="value5_1"/>
          <vs-input vs-color="success" vs-label-placeholder="Success" v-model="value5_2"/>
          <vs-input vs-color="danger" vs-label-placeholder="Danger" v-model="value5_3"/>
          <vs-input vs-color="warning" vs-label-placeholder="Warning" v-model="value5_4"/>
          <vs-input vs-color="dark" vs-label-placeholder="Dark" v-model="value5_5"/>
          <vs-input vs-color="rgb(213, 14, 151)" vs-label-placeholder="RGB: rgb(213, 14, 151)" v-model="value5_6"/>
          <vs-input vs-color="#11e988" vs-label-placeholder="HEX: #11e988" v-model="value5_7"/>
         </div>
       </codex>
        <codex :float="true" titlex="Validation" :code="code6">
        <div  slot="ejemplo">
          <pre class="pre">
  valid: {{validos}}
          </pre>
          <vs-input :vs-valid.sync="validos.email" vs-success-text="Correo Valido" vs-danger-text="El email no cumple con los requisitos" vs-type="email" vs-label-placeholder="Email" v-model="value6_1"/>
          <vs-input :vs-valid.sync="validos.number" vs-success-text="Numero Valido" vs-danger-text="El minimo es 10 y el maximo 20" vs-max="20" vs-min="10" vs-type="number" vs-label-placeholder="Number" v-model="value6_2"/>
          <vs-input :vs-valid.sync="validos.url" vs-success-text="Correo Valido" vs-danger-text="El email no cumple con los requisitos" vs-type="url" vs-label-placeholder="url" v-model="value6_3"/>
          <vs-input :vs-valid.sync="validos.password" vs-success-text="Password Valida" vs-danger-text="La contraseña debe tener al menos 8 caracteres, 1 numero, 1 caracter especial" vs-type="password" vs-label-placeholder="Password" v-model="value6_4"/>
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
      value1:'',
      value2:'',

      value2_1:'',
      value2_2:'',

      value3_1:'',
      value3_2:'',

      value4_1:'',
      value4_2:'',
      value4_3:'',
      value4_4:'',
      value4_5:'',
      value4_6:'',

      value5_1:'',
      value5_2:'',
      value5_3:'',
      value5_4:'',
      value5_5:'',
      value5_6:'',
      value5_7:'',

      value6_1:'',
      value6_2:'',
      value6_3:'',
      value6_4:'',
validos:{
        email:false,
        number:false,
        url:false,
        password:false
      },
      api:[
        {
          name:'v-model',
          type:'bind',
          parametros:'',
          descripcion:'valores de enlace',
          default:'null'
        },
        {
          name:'vs-placeholder',
          type:'string',
          parametros:'string',
          descripcion:'breve sugerencia que describe el valor esperado de ul campo de entrada',
          default:'null'
        },
        {
          name:'vs-label',
          type:'string',
          parametros:'string',
          descripcion:'etiqueta para el elemento de entrada',
          default:'null'
        },
        {
          name:'vs-label-placeholder',
          type:'string',
          parametros:'string',
          descripcion:'etiqueta label con forma de placeholder para el elemento de entrada',
          default:'null'
        },
        {
          name:'vs-icon',
          type:'string',
          parametros:'icon material',
          descripcion:'icono del elemento',
          default:'null'
        },
        {
          name:'vs-icon-after',
          type:'boolean',
          parametros:'icon material',
          descripcion:'posición del icono despues del input',
          default:'false'
        },
        {
          name:'vs-color',
          type:'string',
          parametros:'primary,success,danger,warning,dark,RGB,HEX  ',
          descripcion:'Color del input y de el texto',
          default:'primary'
        },
        {
          name:'vs-type',
          type:'string',
          parametros:'email, number, url, password',
          descripcion:'El tipo de elemento',
          default:'text'
        },
        {
          name:'vs-valid.sync',
          type:'boolean',
          parametros:'enlace boolean',
          descripcion:'retorna si el elemento es valido o no',
          default:'null'
        },
        {
          name:'vs-danger-text',
          type:'string',
          parametros:'string',
          descripcion:'texto a mostrar cuando el elemento es invalido',
          default:'null'
        },
        {
          name:'vs-success-text',
          type:'string',
          parametros:'string',
          descripcion:'texto a mostrar cuando el elemento es valido',
          default:'null'
        },
      ],
      code1:`
<template>
<vs-input vs-placeholder="Nombre" v-model="value1"/>
<vs-input disabled="true" vs-placeholder="Disabled" v-model="value2"/>
</template>

<script>
export default {
  data(){
    value1:'',
    value2:''
  }
}
</\script>
      `,
      code2:`
<template>
<vs-input vs-label="Label" vs-placeholder="Placeholder" v-model="value1"/>
<vs-input disabled="true" vs-label="Label" vs-placeholder="Disabled" v-model="value2"/>
</template>

<script>
export default {
  data(){
    value1:'',
    value2:''
  }
}
</\script>
      `,
      code3:`
<template>
<vs-input vs-label-placeholder="Label-placeholder" v-model="value1"/>
<vs-input disabled="true" vs-label-placeholder="Label-placeholder" v-model="value2"/>
</template>

<script>
export default {
  data(){
    value1:'',
    value2:''
  }
}
</\script>
      `,
      code4:`
<template>
<vs-input vs-icon="search" vs-placeholder="Search" v-model="value1"/>
<vs-input vs-icon-after="true" vs-label="Icon after" vs-icon="mode_edit" vs-placeholder="Nombre" v-model="value2"/>
<vs-input vs-icon="add" vs-label-placeholder="Label-placeholder" v-model="value3"/>
<vs-input vs-icon-after="true"  vs-icon="shopping_cart" vs-label-placeholder="Label-placeholder" v-model="value4"/>
<vs-input disabled="true" vs-icon="error_outline" vs-label-placeholder="icon-disabled" v-model="value5"/>
<vs-input vs-icon-after="true" disabled="true" vs-icon="email" vs-label-placeholder="icon-disabled" v-model="value6"/>
</template>

<script>
export default {
  data(){
    value1:'',
    value2:'',
    value3:'',
    value4:'',
    value5:'',
    value6:''
  }
}
</\script>
      `,
      code5:`
<template>
<vs-input vs-label-placeholder="Default" v-model="value1"/>
<vs-input vs-color="success" vs-label-placeholder="Success" v-model="value2"/>
<vs-input vs-color="danger" vs-label-placeholder="Danger" v-model="value3"/>
<vs-input vs-color="warning" vs-label-placeholder="Warning" v-model="value4"/>
<vs-input vs-color="dark" vs-label-placeholder="Dark" v-model="value5"/>
<vs-input vs-color="rgb(213, 14, 151)" vs-label-placeholder="RGB: rgb(213, 14, 151)" v-model="value6"/>
<vs-input vs-color="#11e988" vs-label-placeholder="HEX: #11e988" v-model="value7"/>
</template>

<script>
export default {
  data(){
    value1:'',
    value2:'',
    value3:'',
    value4:'',
    value5:'',
    value6:'',
    value7:''
  }
}
</\script>
      `,
      code6:`
<template>
<pre class="pre">
valid: {{validos}}
</pre>
<vs-input
  :vs-valid.sync="valid.email"
  vs-success-text="Correo Valido"
  vs-danger-text="El email no cumple con los requisitos"
  vs-type="email" vs-label-placeholder="Email"
  v-model="value1"/>

<vs-input
  :vs-valid.sync="valid.number"
  vs-success-text="Numero Valido"
  vs-danger-text="El minimo es 10 y el maximo 20"
  vs-max="20"
  vs-min="10"
  vs-type="number"
  vs-label-placeholder="Number"
  v-model="value2"/>

<vs-input
  :vs-valid.sync="valid.url"
  vs-success-text="Correo Valido"
  vs-danger-text="El email no cumple con los requisitos"
  vs-type="url"
  vs-label-placeholder="url"
  v-model="value3"/>

<vs-input
   :vs-valid.sync="valid.password"
   vs-success-text="Password Valida"
   vs-danger-text="La contraseña debe tener al menos 8 caracteres, 1 numero, 1 caracter especial"
   vs-type="password"
   vs-label-placeholder="Password"
   v-model="value4"/>
</template>

<script>
export default {
  data(){
    value1:'',
    value2:'',
    value3:'',
    value4:'',

    valid:{
            email:false,
            number:false,
            url:false,
            password:false
          },
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
  color: rgba(0, 0, 0, 0.7);
  padding: 15px;
}
.px {
  padding: 10px;
  font-size: 15px;
  padding-bottom: 30px;
  color: rgba(0, 0, 0, 0.7);
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
@media only screen and (max-width: 450px) {
  .con-input {
    width: 100%;
  }
}
</style>
