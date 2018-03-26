<template lang="html">
  <div>
    <con-doc :apix="api"  titlex="buttons" textx="Nice buttons and easy to use.">
      <div slot="codes" >

        <codex text="true" @click-disabled="disabled1=!disabled1" :disabledx="true" :disabled-value.sync="disabled1" titlex="Filled" :code="code1" codepen="https://codepen.io/lusaxweb/pen/mXrQOj">
          <div slot="text">
            Para definir el tipo de boton se usa la directiva <b>vs-type</b> con el valor de algun tipo de boton como puede ser: <b>primary-filled, success-filled, danger-filled, warning-filled, dark-filled</b>
          </div>
          <div slot="ejemplo">
            <vs-button :disabled="disabled1" vs-type="primary-filled">Primary</vs-button>
            <vs-button :disabled="disabled1" vs-type="success-filled">Success</vs-button>
            <vs-button :disabled="disabled1" vs-type="danger-filled">Danger</vs-button>
            <vs-button :disabled="disabled1" vs-type="warning-filled">Warning</vs-button>
            <vs-button :disabled="disabled1" vs-type="dark-filled">Dark</vs-button>
          </div>
        </codex>
        <codex @click-disabled="disabled1=!disabled1" :disabledx="true" :disabled-value="disabled1" titlex="Border" :code="code2" codepen="https://codepen.io/lusaxweb/pen/bLwQgJ">
          <div slot="ejemplo">
            <vs-button :disabled="disabled1" vs-type="primary-border">Primary</vs-button>
            <vs-button :disabled="disabled1" vs-type="success-border">Success</vs-button>
            <vs-button :disabled="disabled1" vs-type="danger-border">Danger</vs-button>
            <vs-button :disabled="disabled1" vs-type="warning-border">Warning</vs-button>
            <vs-button :disabled="disabled1" vs-type="dark-border">Dark</vs-button>
          </div>
        </codex>

        <codex @click-disabled="disabled1=!disabled1" :disabledx="true" :disabled-value="disabled1" titlex="Flat" :code="code3" codepen="https://codepen.io/lusaxweb/pen/LQRXmQ">
          <div slot="ejemplo">
            <vs-button :disabled="disabled1" vs-type="primary-flat">Primary</vs-button>
            <vs-button :disabled="disabled1" vs-type="success-flat">Success</vs-button>
            <vs-button :disabled="disabled1" vs-type="danger-flat">Danger</vs-button>
            <vs-button :disabled="disabled1" vs-type="warning-flat">Warning</vs-button>
            <vs-button :disabled="disabled1" vs-type="dark-flat">Dark</vs-button>
          </div>
        </codex>
        <codex @click-disabled="disabled1=!disabled1" :disabledx="true" :disabled-value="disabled1" titlex="Line Down" :code="code4" codepen="https://codepen.io/lusaxweb/pen/qxaQKx">
          <div slot="ejemplo">
            <vs-button :disabled="disabled1" vs-type="primary-line-down">Primary</vs-button>
            <vs-button :disabled="disabled1" vs-type="success-line-down">Success</vs-button>
            <vs-button :disabled="disabled1" vs-type="danger-line-down">Danger</vs-button>
            <vs-button :disabled="disabled1" vs-type="warning-line-down">Warning</vs-button>
            <vs-button :disabled="disabled1" vs-type="dark-line-down">Dark</vs-button>
          </div>
        </codex>
        <codex @click-disabled="disabled1=!disabled1" :disabledx="true" :disabled-value="disabled1" titlex="Gradient" :code="code5" codepen="https://codepen.io/lusaxweb/pen/qxaQyx">
          <div slot="ejemplo">
            <vs-button :disabled="disabled1" vs-type="primary-gradient">Primary</vs-button>
            <vs-button :disabled="disabled1" vs-type="success-gradient">Success</vs-button>
            <vs-button :disabled="disabled1" vs-type="danger-gradient">Danger</vs-button>
            <vs-button :disabled="disabled1" vs-type="warning-gradient">Warning</vs-button>
            <vs-button :disabled="disabled1" vs-type="dark-gradient">Dark</vs-button>
          </div>
        </codex>

        <codex @click-disabled="disabled1=!disabled1" :disabledx="true" :disabled-value="disabled1" titlex="Relief" :code="code6" codepen="https://codepen.io/lusaxweb/pen/paEQOy">
          <div slot="ejemplo">
            <vs-button :disabled="disabled1" vs-type="primary-relief">Primary</vs-button>
            <vs-button :disabled="disabled1" vs-type="success-relief">Success</vs-button>
            <vs-button :disabled="disabled1" vs-type="danger-relief">Danger</vs-button>
            <vs-button :disabled="disabled1" vs-type="warning-relief">Warning</vs-button>
            <vs-button :disabled="disabled1" vs-type="dark-relief">Dark</vs-button>
          </div>
        </codex>


      </div>
    </con-doc>
  </div>
</template>

<script>

// import vsButton from '../../vuesax/components/vsBoton.vue'


import conDoc from '../../../components/conDoc.vue'
import titlex from '../../../components/title.vue'
import codex from '../../../components/code.vue'
import $ from 'jquery'
export default {
  components:{
    conDoc,
    codex,
    // component
    // vsButton,
  },
  data(){
    return {
      disabled1:false,
      api:[
        {
          name:'vs-type',
          type:'String',
          descripcion:'El tipo de boton',
          default:'primary-filled'
        },
      ],
code1:
`<vs-button vs-type="primary-filled">Primary</vs-button>
<vs-button vs-type="success-filled">Success</vs-button>
<vs-button vs-type="danger-filled">Danger</vs-button>
<vs-button vs-type="warning-filled">Warning</vs-button>
<vs-button vs-type="dark-filled">Dark</vs-button>
`,
code2:
`<vs-button vs-type="primary-border">Primary</vs-button>
<vs-button vs-type="success-border">Success</vs-button>
<vs-button vs-type="danger-border">Danger</vs-button>
<vs-button vs-type="warning-border">Warning</vs-button>
<vs-button vs-type="dark-border">Dark</vs-button>
`,
code3:
`<vs-button vs-type="primary-flat">Primary</vs-button>
<vs-button vs-type="success-flat">Success</vs-button>
<vs-button vs-type="danger-flat">Danger</vs-button>
<vs-button vs-type="warning-flat">Warning</vs-button>
<vs-button vs-type="dark-flat">Dark</vs-button>
`,
code4:
`<vs-button vs-type="primary-line-down">Primary</vs-button>
<vs-button vs-type="success-line-down">Success</vs-button>
<vs-button vs-type="danger-line-down">Danger</vs-button>
<vs-button vs-type="warning-line-down">Warning</vs-button>
<vs-button vs-type="dark-line-down">Dark</vs-button>
`,
code5:
`<vs-button vs-type="primary-gradient">Primary</vs-button>
<vs-button vs-type="success-gradient">Success</vs-button>
<vs-button vs-type="danger-gradient">Danger</vs-button>
<vs-button vs-type="warning-gradient">Warning</vs-button>
<vs-button vs-type="dark-gradient">Dark</vs-button>
`,
code6:
`<vs-button vs-type="primary-relief">Primary</vs-button>
<vs-button vs-type="success-relief">Success</vs-button>
<vs-button vs-type="danger-relief">Danger</vs-button>
<vs-button vs-type="warning-relief">Warning</vs-button>
<vs-button vs-type="dark-relief">Dark</vs-button>
`,
    }
  },
  methods:{
    prueba(){
      console.log(disabled1);
      console.log("paso");
    }
  }
}
</script>

<style lang="css" scoped>
</style>
