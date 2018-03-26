<template lang="html">
  <div class="">
    <con-doc :apix="api" titlex="Switch" textx="simple and functional.">
      <div slot="codes">
        <codex titlex="State" :code="code1">
          <div slot="ejemplo">
            <ul class="con-s">
              <li>
                <label for="">true / active</label>
                <vs-switch vs-type="primary" v-model="switch1"/>
              </li>
              <li>
                <label for="">false / inactive</label>
                <vs-switch vs-type="primary" v-model="switch2"/>
              </li>
              <li>
                <label for="">disabled / active</label>
                <vs-switch disabled="true" vs-type="primary" v-model="switch3"/>
              </li>
              <li>
                <label for="">disabled / inactive</label>
                <vs-switch disabled="true" vs-type="primary" v-model="switch4"/>
              </li>
            </ul>
          </div>
          </codex>
        <codex titlex="Type" :code="code2">
          <div slot="ejemplo">
            <ul class="con-s">
              <li>
                <label for="">Primary</label>
                <vs-switch vs-type="primary" v-model="switch2_1"/>
              </li>
              <li>
                <label for="">success</label>
                <vs-switch vs-type="success" v-model="switch2_2"/>
              </li>
              <li>
                <label for="">danger</label>
                <vs-switch vs-type="danger" v-model="switch2_3"/>
              </li>
              <li>
                <label for="">warning</label>
                <vs-switch vs-type="warning" v-model="switch2_4"/>
              </li>
              <li>
                <label for="">dark</label>
                <vs-switch vs-type="dark" v-model="switch2_5"/>
              </li>
              <li>
                <label for="">rgb(color) / #color</label>
                <vs-switch @change="cambio" vs-type="rgb(177, 9, 165)" v-model="switch2_6"/>
              </li>
            </ul>
          </div>
          </codex>
          <codex titlex="Color" :code="code3">
            <div slot="ejemplo">
                  <input v-model="color" class="color" type="color" name="" value="">
                  <label for="">Color: <span>{{color}}</span></label>
                  <vs-switch :vs-type="color" v-model="switch4_1"/>
            </div>
            </codex>
          <codex :float="true" titlex="Icons" :code="code4" codepen="https://codepen.io/lusaxweb/pen/OQzLro">
            <div slot="ejemplo">
              <p class="px">Los iconos de Vuesax utilizan la biblioteca de fuentes de Google Material Icons. Para obtener una lista de todos los íconos disponibles, visite la página oficial de <a target="_blank" href="https://material.io/icons/">Iconos de materiales</a>. </p>
              <ul class="con-s">
                <li>
                  <label for="">Primary</label>
                  <vs-switch vs-type="primary" v-model="switch3_1" vs-icon="notifications_none"/>
                </li>
                <li>
                  <label for="">success</label>
                  <vs-switch vs-type="success" v-model="switch3_2" vs-icon="done"/>
                </li>
                <li>
                  <label for="">danger</label>
                  <vs-switch vs-type="danger" v-model="switch3_3" vs-icon="close"/>
                </li>
                <li>
                  <label for="">warning</label>
                  <vs-switch vs-type="warning" v-model="switch3_4" vs-icon="error_outline"/>
                </li>
                <li>
                  <label for="">dark</label>
                  <vs-switch vs-type="dark" v-model="switch3_5" vs-icon="volume_off"/>
                </li>
                <li>
                  <label for="">rgb(color) / #color</label>
                  <vs-switch vs-type="rgb(51, 53, 83)" v-model="switch3_6" vs-icon="photo_camera"/>
                </li>
              </ul>
            </div>
            </codex>
            <codex :float="true" titlex="Array" :code="code5">
              <div slot="ejemplo">
                <ul class="ul">
                  <li class="modelx">
                    {{switch5_1}}
                  </li>
                  <li>
                    <vs-switch :vs-type="color" v-model="switch5_1" vs-value="luis">Luis</vs-switch>
                  </li>
                  <li>
                    <vs-switch :vs-type="color" v-model="switch5_1" vs-value="carols">Carols</vs-switch>
                  </li>
                  <li>
                    <vs-switch :vs-type="color" v-model="switch5_1" vs-value="summer">Summer</vs-switch>
                  </li>
                  <li>
                    <vs-switch :vs-type="color" v-model="switch5_1" vs-value="lyon">Lyon</vs-switch>
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
      color:'#5a3cc4',
      switch1:true,
      switch2:false,
      switch3:true,
      switch4:false,

      switch2_1:false,
      switch2_2:false,
      switch2_3:false,
      switch2_4:false,
      switch2_5:false,
      switch2_6:false,

      switch3_1:false,
      switch3_2:false,
      switch3_3:false,
      switch3_4:false,
      switch3_5:false,
      switch3_6:false,

      switch4_1:true,

      switch5_1:['luis'],
      api:[

        {
          name:'v-model',
          type:'boolean || Array',
          parametros:'true || false || []',
          descripcion:'valores de enlace',
          default:'null'
        },
        {
          name:'vs-value',
          type:'String',
          parametros:'',
          descripcion:'valor en caso de ser diferente a un boolean',
          default:'null'
        },
        {
          name:'vs-type',
          type:'String',
          parametros:'type || #color || rgb(color)',
          descripcion:'tipo de elemento o color',
          default:'primary'
        },
        {
          name:'vs-icon',
          type:'String',
          parametros:'icon material',
          descripcion:'icono dentro del elemento',
          default:'null'
        },
        {
          name:'change',
          type:'evento',
          parametros:'function',
          descripcion:'evento que se ejecuta al hacer cambio de datos en el componente',
          default:'null'
        },
      ],
      code1:`#template
<vs-switch vs-type="primary" v-model="switch1"/>
<vs-switch vs-type="primary" v-model="switch2"/>
<vs-switch disabled="true" vs-type="primary" v-model="switch3"/>
<vs-switch disabled="true" vs-type="primary" v-model="switch4"/>

#script
<script>
export default {
  data(){
    return {
      switch1:true,
      switch2:false,
      switch3:true,
      switch4:false,
    }
  }
}
<\/script>
`,
      code2:`#template
<vs-switch vs-type="primary" v-model="switch1"/>
<vs-switch vs-type="success" v-model="switch2"/>
<vs-switch vs-type="danger" v-model="switch3"/>
<vs-switch vs-type="warning" v-model="switch4"/>
<vs-switch vs-type="dark" v-model="switch5"/>
<vs-switch vs-type="rgb(177, 9, 165)" v-model="switch6"/>

#script
<script>
export default {
  data(){
    return {
      switch1:false,
      switch2:false,
      switch3:false,
      switch4:false,
      switch5:false,
      switch6:false,
    }
  }
}
<\/script>
`,
      code3:`#template
<input v-model="color" class="color" type="color" name="" value="">
<label for="">Color: {{color}}</label>
<vs-switch :vs-type="color" v-model="switch1"/>

#script
<script>
export default {
  data(){
    return {
     color:'#5a3cc4',
     switch1:true,
    }
  }
}
<\/script>
`,
      code4:`#template
<vs-switch vs-type="primary" v-model="switch1" vs-icon="notifications_none"/>
<vs-switch vs-type="success" v-model="switch2" vs-icon="done"/>
<vs-switch vs-type="danger" v-model="switch3" vs-icon="close"/>
<vs-switch vs-type="warning" v-model="switch4" vs-icon="error_outline"/>
<vs-switch vs-type="dark" v-model="switch5" vs-icon="volume_off"/>
<vs-switch vs-type="rgb(51, 53, 83)" v-model="switch6" vs-icon="photo_camera"/>

#script
<script>
export default {
  data(){
    return {
      switch1:false,
      switch2:false,
      switch3:false,
      switch4:false,
      switch5:false,
      switch6:false,
    }
  }
}
<\/script>
`,
      code5:`#template
<template>
<li>
  {{switch1}}
</li>
<li>
  <vs-switch :vs-type="color" v-model="switch1" vs-value="luis">Luis</vs-switch>
</li>
<li>
   <vs-switch :vs-type="color" v-model="switch1" vs-value="carols">Carols</vs-switch>
</li>
<li>
   <vs-switch :vs-type="color" v-model="switch1" vs-value="summer">Summer</vs-switch>
</li>
<li>
   <vs-switch :vs-type="color" v-model="switch1" vs-value="lyon">Lyon</vs-switch>
</li>
</template>

<script>
export default {
  data(){
    return {
     switch1:['luis'],
    }
  }
}
<\/script>
`,

    }
  },
  methods:{
    cambio(value){

      console.log("hola cambio",value);
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
.color {
  margin-right: 20px;
}
.color + label span {
  background: rgb(245, 245, 245);
  padding: 7px;
  color: rgba(0, 0, 0, 0.7);
}
.px {
  padding: 10px;
  font-size: 15px;
  padding-bottom: 30px;
  color: rgba(0, 0, 0, 0.7);
}
.con-s{
  display: flex;
  align-items: center;
  justify-content: center;
}
.con-s li {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.7);
}

@media only screen and (max-width: 1000px) {
  .con-s {
    flex-wrap: wrap;
  }
}
@media only screen and (max-width: 650px) {
  .con-s {
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
  }
}
</style>
