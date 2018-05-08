<template lang="html">
  <div class="chips">
    <con-doc :text="true" :apix="api" titlex="Chip" textx="Chips represent complex entities in small blocks, such as a contact.">
      <div slot="codes">
        <codex :float="true" titlex="Basic state" :code="code1">
          <div slot="ejemplo">
            <vs-chip vs-color="primary">
              primary
            </vs-chip>
            <vs-chip vs-color="success">
              success
            </vs-chip>
            <vs-chip vs-color="danger">
              danger
            </vs-chip>
            <vs-chip vs-color="warning">
              warning
            </vs-chip>
            <vs-chip vs-color="dark">
              dark
            </vs-chip>
          </div>
        </codex>
        <codex :float="true" titlex="Closable button" :code="code2">
          <div slot="ejemplo">
            <vs-chip vs-closable="true" vs-color="primary">
              primary
            </vs-chip>
            <vs-chip vs-closable="true" vs-color="success">
              success
            </vs-chip>
            <vs-chip vs-closable="true" vs-color="danger">
              danger
            </vs-chip>
            <vs-chip vs-closable="true" vs-color="warning">
              warning
            </vs-chip>
            <vs-chip vs-closable="true" vs-color="dark">
              dark
            </vs-chip>
          </div>
        </codex>
        <codex :float="true" titlex="Icon added" :code="code3">
          <div slot="ejemplo">
            <vs-chip vs-icon="info" vs-color="primary">
              primary
            </vs-chip>
            <vs-chip vs-icon="check_circle" vs-color="success">
              success
            </vs-chip>
            <vs-chip vs-icon="error" vs-color="danger">
              danger
            </vs-chip>
            <vs-chip vs-icon="help" vs-color="warning">
              warning
            </vs-chip>
            <vs-chip vs-icon="account_circle" vs-color="dark">
              dark
            </vs-chip>
          </div>
        </codex>
        <codex :float="true" titlex="Icon and closable" :code="code4">
          <div slot="ejemplo">
            <vs-chip vs-closable="true" vs-icon="info" vs-color="primary">
              primary
            </vs-chip>
            <vs-chip vs-closable="true" vs-icon="check_circle" vs-color="success">
              success
            </vs-chip>
            <vs-chip vs-closable="true" vs-icon="error" vs-color="danger">
              danger
            </vs-chip>
            <vs-chip vs-closable="true" vs-icon="help" vs-color="warning">
              warning
            </vs-chip>
            <vs-chip vs-closable="true" vs-icon="account_circle" vs-color="dark">
              dark
            </vs-chip>
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
      api:[
        {
          name:'vs-color',
          type:'String',
          parametros:'primary, success, danger, warning, dark',
          descripcion:'Color to use',
          default:'primary'
        },
        {
          name:'vs-closable',
          type:'Boolean',
          parametros:'true, false',
          descripcion:'Closable or not',
          default:'false'
        },
        {
          name:'vs-icon',
          type:'String',
          parametros:'',
          descripcion:'Icon to use',
          default:''
        },
      ],
      code1:`
<template>
  <vs-chip vs-color="primary">
    primary
  </vs-chip>
  <vs-chip vs-color="success">
    success
  </vs-chip>
  <vs-chip vs-color="danger">
    danger
  </vs-chip>
  <vs-chip vs-color="warning">
    warning
  </vs-chip>
  <vs-chip vs-color="dark">
    dark
  </vs-chip>
</template>
<script>
export default {
  data(){

  }
}
</\script>
      `,
      code2:`
<template>
  <vs-chip vs-closable="true" vs-color="primary">
    primary
  </vs-chip>
  <vs-chip vs-closable="true" vs-color="success">
    success
  </vs-chip>
  <vs-chip vs-closable="true" vs-color="danger">
    danger
  </vs-chip>
  <vs-chip vs-closable="true" vs-color="warning">
    warning
  </vs-chip>
  <vs-chip vs-closable="true" vs-color="dark">
    dark
  </vs-chip>
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
  <vs-chip vs-icon="info" vs-color="primary">
    primary
  </vs-chip>
  <vs-chip vs-icon="check_circle" vs-color="success">
    success
  </vs-chip>
  <vs-chip vs-icon="error" vs-color="danger">
    danger
  </vs-chip>
  <vs-chip vs-icon="help" vs-color="warning">
    warning
  </vs-chip>
  <vs-chip vs-icon="account_circle" vs-color="dark">
    dark
  </vs-chip>
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
  <vs-chip vs-closable="true" vs-icon="info" vs-color="primary">
    primary
  </vs-chip>
  <vs-chip vs-closable="true" vs-icon="check_circle" vs-color="success">
    success
  </vs-chip>
  <vs-chip vs-closable="true" vs-icon="error" vs-color="danger">
    danger
  </vs-chip>
  <vs-chip vs-closable="true" vs-icon="help" vs-color="warning">
    warning
  </vs-chip>
  <vs-chip vs-closable="true" vs-icon="account_circle" vs-color="dark">
    dark
  </vs-chip>
</template>
<script>
export default {
  data(){

  }
}
</\script>
      `
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
</style>
