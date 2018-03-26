<template lang="html">
  <div class="">
    <con-doc :text="true" :apix="api" titlex="Popup" textx=".">
      <div slot="codes">
        <codex :float="true" titlex="Default" :code="code1">
          <div  slot="text">
             <!-- //code -->
           </div>
        <div  slot="ejemplo">
           <!-- //code -->
           <vs-button @click="popupActivo=true" vs-type="primary-border">open Default popup</vs-button>
           <vs-popup vs-title="Lorem ipsum dolor sit amet" :vs-active="popupActivo" @vs-cancel="popupActivo=false">
             <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
             </p>
           </vs-popup>
         </div>
       </codex>

        <codex :float="true" titlex="Nested Popup" :code="code2">
          <div  slot="text">
             <!-- //code -->
           </div>
        <div  slot="ejemplo">
           <!-- //code -->
           <vs-button @click="popupActivo2=true" vs-type="success-border">open Nested popup</vs-button>
           <vs-popup  vs-title="Lorem ipsum dolor sit amet" :vs-active="popupActivo2" @vs-cancel="popupActivo2=false">
             <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
             </p>
             <vs-button @click="popupActivo3=true" vs-type="primary-filled">open Inner Dialog</vs-button>
             <vs-popup vs-title="Inner popup" :vs-active="popupActivo3" @vs-cancel="popupActivo3=false">
               <p>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                 <br><br>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 <br><br>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               </p>
               </vs-popup>
           </vs-popup>
         </div>
       </codex>

        <codex :float="true" titlex="fullscreen Popup" :code="code3">
          <div  slot="text">
             <!-- //code -->
           </div>
        <div  slot="ejemplo">
           <!-- //code -->
           <vs-button @click="popupActivo4=true" vs-type="danger-border">open fullscreen popup</vs-button>
           <vs-popup vs-fullscreen vs-title="fullscreen" :vs-active="popupActivo4" @vs-cancel="popupActivo4=false">
             <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
             </p>
           </vs-popup>
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
      popupActivo:false,
      popupActivo2:false,
      popupActivo3:false,
      popupActivo4:false,
      api:[
        {
          name:'vs-active',
          type:'Boolean',
          parametros:'',
          descripcion:'Define si el popup esta activo o no',
          default:'false'
        },
        {
          name:'vs-cancel',
          type:'function',
          parametros:'',
          descripcion:'function que se ejecuta al salir del popup',
          default:'null'
        },
        {
          name:'vs-title',
          type:'String',
          parametros:'',
          descripcion:'titulo del popup',
          default:'null'
        },
        {
          name:'vs-fullscreen',
          type:'Boolean',
          parametros:'',
          descripcion:'Defina si el popup tiene una ancho y alto de toda la pantalla',
          default:'false'
        },
      ],
code1:`
<template>
<vs-button @click="popupActivo=true" vs-type="primary-border">open Default popup</vs-button>
<vs-popup vs-title="Lorem ipsum dolor sit amet" :vs-active="popupActivo" @vs-cancel="popupActivo=false">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</vs-popup>
</template>
<script>
export default {
  data(){
    popupActivo:false,
  }
}
</\script>
      `,
code2:`
<template>
<vs-button @click="popupActivo=true" vs-type="success-border">open Nested popup</vs-button>
<vs-popup  vs-title="Lorem ipsum dolor sit amet" :vs-active="popupActivo" @vs-cancel="popupActivo=false">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
  </p>
  <vs-button @click="popupActivo2=true" vs-type="primary-filled">open Inner Dialog</vs-button>
  <vs-popup vs-title="Inner popup" :vs-active="popupActivo2" @vs-cancel="popupActivo2=false">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      <br><br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      <br><br>
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    </vs-popup>
</vs-popup>
</template>
<script>
export default {
  data(){
    popupActivo:false,
    popupActivo2:false
  }
}
</\script>
      `,
code3:`
<template>
<vs-button @click="popupActivo=true" vs-type="danger-border">open fullscreen popup</vs-button>
<vs-popup vs-fullscreen vs-title="fullscreen" :vs-active="popupActivo" @vs-cancel="popupActivo=false">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</vs-popup>
</template>
<script>
export default {
  data(){
    popupActivo:false
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
