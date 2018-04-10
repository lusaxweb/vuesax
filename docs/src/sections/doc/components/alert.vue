<template lang="html">
  <div class="">
    <con-doc  :apix="api" titlex="Alert" textx=".">
      <div slot="codes">
        <codex :float="true" titlex="Default" :code="code1">
        <div  slot="ejemplo">
           <!-- //code -->
           <vs-alert vs-active="true">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
           </vs-alert>
         </div>
       </codex>
        <codex :float="true" titlex="Title" :code="code2">
        <div  slot="ejemplo">
           <!-- //code -->
           <vs-alert vs-title="Lorem ipsum dolor sit amet" vs-color="rgb(231, 154, 23)" vs-active="true">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
           </vs-alert>
         </div>
       </codex>
        <codex :float="true" titlex="Color" :code="code3">
        <div  slot="ejemplo">
           <!-- //code -->
           <vs-alert vs-active="true" vs-color="primary">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
           </vs-alert>
           <vs-alert vs-active="true" vs-color="success">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
           </vs-alert>
           <vs-alert vs-active="true" vs-color="danger">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           </vs-alert>
           <vs-alert vs-active="true" vs-color="warning">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           </vs-alert>
           <vs-alert vs-active="true" vs-color="dark">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
           </vs-alert>
         </div>
       </codex>
        <codex :float="true" titlex="Closable" :code="code4">
        <div  slot="ejemplo">
           <!-- //code -->
           <vs-button @click="active1=!active1" vs-type="primary-filled">{{!active1?'Open Alert':'Close Alert'}}</vs-button>
           <vs-alert :vs-active.sync="active1" vs-closable>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
           </vs-alert>
         </div>
       </codex>
        <codex :float="true" titlex="Icons" :code="code5">
        <div  slot="ejemplo">
           <!-- //code -->
            <selected-icons :vs-icon.sync="icon1"/>
           <vs-alert vs-active="true" vs-color="rgb(111, 38, 224)" :vs-icon="icon1" >
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
           </vs-alert>
         </div>
       </codex>
        <codex :float="true" titlex="example of use" :code="code6">
        <div  slot="ejemplo">
           <!-- //code -->
           <vs-input vs-label="Enter only numbers" vs-placeholder="0123456789" v-model="value1"/>

           <vs-alert :vs-active="inputValido" vs-color="danger" vs-icon="new_releases" >
             the value is <b>invalid</b> you can only enter numbers
           </vs-alert>
         </div>
       </codex>

      </div>
    </con-doc>
  </div>
</template>

<script>
import selectedIcons from '../../../components/selectedIcons.vue'
import conDoc from '../../../components/conDoc.vue'
import titlex from '../../../components/title.vue'
import codex from '../../../components/code.vue'
export default {
  components:{
    conDoc,
    codex,
    selectedIcons,
  },
  data(){
    return {
      value1:'',
      icon1:'sms',
      active1:true,
      api:[
        {
          name:'vs-active',
          type:'Boolean',
          parametros:'true, false',
          descripcion:'Determines if the component is visible',
          default:'false',
        },
        {
          name:'vs-title',
          type:'String',
          parametros:'',
          descripcion:'Title of the alert',
          default:'null',
        },
        {
          name:'vs-closable',
          type:'Boolean',
          parametros:'',
          descripcion:'Determines if the alert can be closed by the user',
          default:'false',
        },
        {
          name:'vs-color',
          type:'String',
          parametros:'',
          descripcion:'Color of the alert',
          default:'primary',
        },
        {
          name:'vs-margin',
          type:'String',
          parametros:'',
          descripcion:'Mangin of the alert (top, bottom)',
          default:'10px',
        },
        {
          name:'vs-icon',
          type:'String',
          parametros:'',
          descripcion:'Determines the alert icon',
          default:'null',
        },
      ],
code1:`
<template>
<vs-alert vs-active="true">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</vs-alert>
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
<vs-alert vs-title="Lorem ipsum dolor sit amet" vs-color="rgb(231, 154, 23)" vs-active="true">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</vs-alert>
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
<vs-alert vs-active="true" vs-color="primary">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
</vs-alert>
<vs-alert vs-active="true" vs-color="success">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</vs-alert>
<vs-alert vs-active="true" vs-color="danger">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</vs-alert>
<vs-alert vs-active="true" vs-color="warning">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</vs-alert>
<vs-alert vs-active="true" vs-color="dark">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</vs-alert>
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
<vs-button @click="active1=!active1" vs-type="primary-filled">{{!active1?'Open Alert':'Close Alert'}}</vs-button>
<vs-alert :vs-active.sync="active1" vs-closable>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
   incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</vs-alert>
</template>
<script>
export default {
  data(){
   active1:true,
  }
}
</\script>
      `,
code5:`
<template>
<vs-alert vs-active="true" vs-color="rgb(111, 38, 224)" vs-icon="sms" >
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</vs-alert>
</template>
<script>
export default {
  data(){

  }
}
</\script>
      `,
code6:`
<template>
<vs-input vs-label="enter only numbers" vs-placeholder="0123456789" v-model="value1"/>

<vs-alert :vs-active="inputValido" vs-color="danger" vs-icon="new_releases" >
  the value is <b>invalid</b> you can only enter numbers
</vs-alert>
</template>
<script>
export default {
  data(){
    value1:'',
  },
  computed:{
    inputValido(){
      if(/^\d+$/.test(this.value1)){
        return false
      } else {
        return true
      }
    }
  },
}
</\script>
      `,
    }
  },
  computed:{
    inputValido(){
      if(/^\d+$/.test(this.value1)){
        return false
      } else {
        return true
      }
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
