<template lang="html">
  <div class="">
    <con-doc :apix="api" titlex="Tooltip" textx="Very easy to implement and in any element of the DOM.">
      <div slot="codes">
        <codex :float="true" titlex="Default" :code="code1">
        <div  slot="ejemplo">
           <vs-slider v-tooltip="'Tooltip Default'" v-model="valueslider"/>
           <vs-input-number v-tooltip="'Tooltip Default'" v-model="number1"/>
           <vs-button v-tooltip="'Tooltip Default'" vs-type="primary-border">Primary</vs-button>
        </div>
       </codex>
        <codex :float="true" titlex="Position" :code="code2">
        <div  slot="ejemplo">
           <vs-button v-tooltip="{text:'Tooltip position top'}">Position Top</vs-button>
           <vs-button v-tooltip="{text:'Tooltip position bottom',position:'bottom'}">Position bottom</vs-button>
           <vs-button v-tooltip="{text:'Tooltip position left',position:'left'}">Position left</vs-button>
           <vs-button v-tooltip="{text:'Tooltip position right',position:'right'}">Position right</vs-button>
        </div>
       </codex>
        <codex :float="true" titlex="Delay" :code="code3">
        <div  slot="ejemplo">
           <vs-button v-tooltip="{text:'Tooltip default delay'}">Delay default</vs-button>
           <vs-button v-tooltip="{text:'Tooltip delay 0.5s',delay:500}">Delay 0.5s</vs-button>
           <vs-button v-tooltip="{text:'Tooltip delay 1.5s',delay:1500}">Delay 1.5s</vs-button>
        </div>
       </codex>
        <codex :float="true" titlex="Color" :code="code4">
        <div  slot="ejemplo">
           <vs-button v-tooltip="{text:'Default Color'}">Default Color</vs-button>
           <vs-button  vs-type="primary-border" v-tooltip="{text:'Color primary',color:'primary'}">Color primary</vs-button>
           <vs-button vs-type="success-border" v-tooltip="{text:'Color success',color:'success'}">Color success</vs-button>
           <vs-button vs-type="danger-border" v-tooltip="{text:'Color danger',color:'danger'}">Color danger</vs-button>
           <vs-button vs-type="warning-border" v-tooltip="{text:'Color warning',color:'warning'}">Color warning</vs-button>
           <vs-button vs-type="dark-border" v-tooltip="{text:'Color dark',color:'dark'}">Color dark</vs-button>
           <vs-button vs-type="success-gradient" v-tooltip="{text:'Color RGB',color:'rgb(42, 207, 133)'}">Color RGB</vs-button>
           <vs-button vs-type="danger-gradient" v-tooltip="{text:'Color HEX',color:'rgb(74, 13, 107)'}">Color HEX</vs-button>
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
      valueslider:24,
      number1:10,
      value1:'',
      checkBox1:false,
      api:[
        {
          name:'v-tooltip',
          type:'string || json',
          parametros:'text, position, color, delay',
          descripcion:'function principal que agrega un tooltip al elemento',
          default:'null'
        },
        {
          name:'text',
          type:'string',
          descripcion:'Texto del tooltip',
          default:'null'
        },
        {
          name:'position',
          type:'string',
          parametros:'top, bottom, left, right',
          descripcion:'posicion del tooltip respecto al elemento',
          default:'top'
        },
        {
          name:'position',
          type:'string',
          parametros:'top, bottom, left, right',
          descripcion:'posicion del tooltip respecto al elemento',
          default:'top'
        },
        {
          name:'delay',
          type:'number',
          parametros:'',
          descripcion:'tiempo de retardo en aparecer el tooltip',
          default:'0'
        }
      ],
      code1:`
<template>
<vs-slider v-tooltip="'Tooltip Default'" v-model="valueslider"/>
<vs-input-number v-tooltip="'Tooltip Default'" v-model="number1"/>
<vs-button v-tooltip="'Tooltip Default'" vs-type="primary-border">Primary</vs-button>
</template>
<script>
export default {
  data(){
    valueslider:24,
    number1:10,
  }
}
</\script>
      `,
      code2:`
<template>
<vs-button v-tooltip="{text:'Tooltip position top'}">Position Top</vs-button>
<vs-button v-tooltip="{text:'Tooltip position bottom',position:'bottom'}">Position bottom</vs-button>
<vs-button v-tooltip="{text:'Tooltip position left',position:'left'}">Position left</vs-button>
<vs-button v-tooltip="{text:'Tooltip position right',position:'right'}">Position right</vs-button>
</template>
<script>
export default {
  data(){
  }
}
</\script>
      `,
      code3:`
<template>
<vs-button v-tooltip="{text:'Tooltip default delay'}">Delay default</vs-button>
<vs-button v-tooltip="{text:'Tooltip delay 0.5s',delay:500}">Delay 0.5s</vs-button>
<vs-button v-tooltip="{text:'Tooltip delay 1.5s',delay:1500}">Delay 1.5s</vs-button>
</template>
<script>
export default {
  data(){
  }
}
</\script>
      `,
      code4:`
<template>
<vs-button v-tooltip="{text:'Default Color'}">Default Color</vs-button>
<vs-button  vs-type="primary-border" v-tooltip="{text:'Color primary',color:'primary'}">Color primary</vs-button>
<vs-button vs-type="success-border" v-tooltip="{text:'Color success',color:'success'}">Color success</vs-button>
<vs-button vs-type="danger-border" v-tooltip="{text:'Color danger',color:'danger'}">Color danger</vs-button>
<vs-button vs-type="warning-border" v-tooltip="{text:'Color warning',color:'warning'}">Color warning</vs-button>
<vs-button vs-type="dark-border" v-tooltip="{text:'Color dark',color:'dark'}">Color dark</vs-button>
<vs-button vs-type="success-gradient" v-tooltip="{text:'Color RGB',color:'rgb(42, 207, 133)'}">Color RGB</vs-button>
<vs-button vs-type="danger-gradient" v-tooltip="{text:'Color HEX',color:'rgb(74, 13, 107)'}">Color HEX</vs-button>
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
