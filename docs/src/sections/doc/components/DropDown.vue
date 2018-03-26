<template lang="html">
  <div class="">
    <con-doc :text="true" :apix="api" titlex="Dropdown" textx=".">
      <div slot="codes">
        <codex :float="true" titlex="Default" :code="code1">

        <div  slot="ejemplo">
           <!-- //code -->
           <vs-dropdown vs-title="default Dropdown">
               <vs-dropdown-item vs-group vs-label="actions group">
                 <vs-dropdown-item :key="index" v-for="a,index in 3">
                   <a href="#">Action {{index}}</a>
                 </vs-dropdown-item>
               </vs-dropdown-item>
           </vs-dropdown>
         </div>
       </codex>
        <codex :float="true" titlex="Disabled item" :code="code2">
        <div  slot="ejemplo">
           <!-- //code -->
           <vs-dropdown vs-title="Disabled item">
             <vs-dropdown-item vs-group vs-label="actions group">
               <vs-dropdown-item :vs-disabled="index==2" :key="index" v-for="a,index in 4">
                 <a href="#">Action {{index}}</a>
               </vs-dropdown-item>
             </vs-dropdown-item>
           </vs-dropdown>
         </div>
       </codex>
        <codex :float="true" titlex="trigger Dropdown click" :code="code3">
        <div  slot="ejemplo">
           <!-- //code -->
           <vs-dropdown vs-trigger-click vs-title="trigger Dropdown click">
             <vs-dropdown-item vs-group vs-label="actions group">
               <vs-dropdown-item :key="index" v-for="a,index in 5">
                 <a href="#">Action {{index}}</a>
               </vs-dropdown-item>
             </vs-dropdown-item>
           </vs-dropdown>
         </div>
       </codex>
        <codex :float="true" titlex="Button with dropdown menu
" :code="code4">
        <div  slot="ejemplo">
           <!-- //code -->
           <vs-dropdown>
             <div slot="button">
               <vs-button vs-type="primary-filled">Button dropdown</vs-button>
             </div>
             <vs-dropdown-item vs-group vs-label="actions group">
               <vs-dropdown-item :key="index" v-for="a,index in 3">
                 <a href="#">Action {{index}}</a>
               </vs-dropdown-item>
             </vs-dropdown-item>
           </vs-dropdown>

           <vs-dropdown vs-color-button="danger" vs-margin="0px 0px 0px 10px" vs-trigger-click>
             <div slot="button">
               <vs-button vs-color="danger" vs-type="primary-filled">trigger Click</vs-button>
             </div>
             <vs-dropdown-item vs-group vs-label="actions group">
               <vs-dropdown-item :key="index" v-for="a,index in 3">
                 <a href="#">Action {{index}}</a>
               </vs-dropdown-item>
             </vs-dropdown-item>
           </vs-dropdown>

           <vs-dropdown vs-margin="0px 0px 0px 10px" vs-disabled>
             <div slot="button">
               <vs-button vs-type="primary-filled">Disabled</vs-button>
             </div>
             <vs-dropdown-item vs-group vs-label="actions group">
               <vs-dropdown-item :key="index" v-for="a,index in 3">
                 <a href="#">Action {{index}}</a>
               </vs-dropdown-item>
             </vs-dropdown-item>
           </vs-dropdown>
         </div>
       </codex>
       <codex :float="true" titlex="Color" :code="code5">
       <div  slot="ejemplo">
         <vs-row>
           <vs-col  vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
             <input type="color" v-model="colorx" name="" value="">
           </vs-col>
         </vs-row>
          <!-- //code -->
          <vs-dropdown :vs-color="colorx" vs-margin="0px 0px 0px 10px" vs-title="trigger Dropdown click">
            <vs-dropdown-item vs-group vs-label="actions group">
              <vs-dropdown-item :key="index" v-for="a,index in 3">
                <a href="#">Action {{index}}</a>
              </vs-dropdown-item>
            </vs-dropdown-item>
          </vs-dropdown>

          <vs-dropdown :vs-color="colorx" vs-margin="0px 0px 0px 10px">
            <div slot="button">
              <vs-button vs-type="primary-filled">Disabled</vs-button>
            </div>
            <vs-dropdown-item vs-group vs-label="actions group">
              <vs-dropdown-item :key="index" v-for="a,index in 3">
                <a href="#">Action {{index}}</a>
              </vs-dropdown-item>
            </vs-dropdown-item>
          </vs-dropdown>
        </div>
      </codex>
       <codex :float="true" titlex="icon" :code="code6">
       <div  slot="ejemplo">

          <!-- //code -->
            <selected-icons :vs-icon.sync="iconx"/>
          <vs-dropdown :vs-icon="iconx" vs-margin="0px 0px 0px 10px">
            <div slot="button">
              <vs-button vs-type="primary-filled">Icon change</vs-button>
            </div>
            <vs-dropdown-item vs-group vs-label="actions group">
              <vs-dropdown-item :key="index" v-for="a,index in 3">
                <a href="#">Action {{index}}</a>
              </vs-dropdown-item>
            </vs-dropdown-item>
          </vs-dropdown>
        </div>
      </codex>
       <codex :float="true" titlex="Fixed title group" :code="code7">
       <div  slot="ejemplo">

          <!-- //code -->

          <vs-dropdown vs-margin="0px 0px 0px 10px">
            <div slot="button">
              <vs-button vs-type="primary-filled">Fixed title group</vs-button>
            </div>
              <vs-dropdown-item vs-group vs-label="actions group 1">
                <vs-dropdown-item :key="index" v-for="a,index in 3">
                  <a href="#">Action {{index}}</a>
                </vs-dropdown-item>
              </vs-dropdown-item>
              <vs-dropdown-item vs-group vs-label="actions group 2">
                <vs-dropdown-item :key="index" v-for="a,index in 5">
                  <a href="#">Action {{index}}</a>
                </vs-dropdown-item>
              </vs-dropdown-item>
              <vs-dropdown-item vs-group vs-label="actions group 3">
                <vs-dropdown-item :key="index" v-for="a,index in 10">
                  <a href="#">Action {{index}}</a>
                </vs-dropdown-item>
              </vs-dropdown-item>
          </vs-dropdown>
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
import $ from 'jquery'
export default {
  components:{
    conDoc,
    codex,
    selectedIcons,
  },
  data(){
    return {
      iconx:'add_circle_outline',
      colorx:"#0fbb5e",
      api:[
        {
          name:'vs-title',
          type:'String',
          parametros:'',
          descripcion:'Titulo del componente',
          default:'null'
        },
        {
          name:'vs-icon',
          type:'String',
          parametros:'',
          descripcion:'cambia el icono del componente',
          default:'keyboard_arrow_down',
        },
        {
          name:'vs-color-button',
          type:'String',
          parametros:'',
          descripcion:'Color del boton con el icono',
          default:'transparent || primary'
        },
        {
          name:'vs-trigger-click',
          type:'Boolean',
          parametros:'',
          descripcion:'Determina si la lista se activa al hacer click',
          default:'false'
        },
        {
          name:'vs-margin',
          type:'String',
          parametros:'',
          descripcion:'Margin del componente',
          default:'0px'
        },
        {
          name:'vs-disabled',
          type:'Boolean',
          parametros:'',
          descripcion:'Determina si el componente se encuanta en disabled',
          default:'false'
        },
        {
          name:'vs-color',
          type:'String',
          parametros:'',
          descripcion:'cambia el color de fondo de la lista',
          default:'false'
        },
        {
          name:'vs-color-row',
          type:'String',
          parametros:'',
          descripcion:'cambia el color de la flecha o icono',
          default:'rgb(255, 255, 255) || rgb(0, 0, 0)',
        },

      ],
code1:`
<template>
<vs-dropdown vs-title="default Dropdown">
    <vs-dropdown-item vs-group vs-label="actions group">
      <vs-dropdown-item :key="index" v-for="a,index in 3">
        <a href="#">Action {{index}}</a>
      </vs-dropdown-item>
    </vs-dropdown-item>
</vs-dropdown>
</template>
      `,
code2:`
<template>
<vs-dropdown vs-title="Disabled item">
  <vs-dropdown-item vs-group vs-label="actions group">
    <vs-dropdown-item :vs-disabled="index==2" :key="index" v-for="a,index in 4">
      <a href="#">Action {{index}}</a>
    </vs-dropdown-item>
  </vs-dropdown-item>
</vs-dropdown>
</template>
      `,
code3:`
<template>
<vs-dropdown vs-trigger-click vs-title="trigger Dropdown click">
  <vs-dropdown-item vs-group vs-label="actions group">
    <vs-dropdown-item :key="index" v-for="a,index in 5">
      <a href="#">Action {{index}}</a>
    </vs-dropdown-item>
  </vs-dropdown-item>
</vs-dropdown>
</template>
      `,
code4:`
<template>
<vs-dropdown>
  <div slot="button">
    <vs-button vs-type="primary-filled">Button dropdown</vs-button>
  </div>
  <vs-dropdown-item vs-group vs-label="actions group">
    <vs-dropdown-item :key="index" v-for="a,index in 3">
      <a href="#">Action {{index}}</a>
    </vs-dropdown-item>
  </vs-dropdown-item>
</vs-dropdown>

<vs-dropdown vs-color-button="danger" vs-margin="0px 0px 0px 10px" vs-trigger-click>
  <div slot="button">
    <vs-button vs-color="danger" vs-type="primary-filled">trigger Click</vs-button>
  </div>
  <vs-dropdown-item vs-group vs-label="actions group">
    <vs-dropdown-item :key="index" v-for="a,index in 3">
      <a href="#">Action {{index}}</a>
    </vs-dropdown-item>
  </vs-dropdown-item>
</vs-dropdown>

<vs-dropdown vs-margin="0px 0px 0px 10px" vs-disabled>
  <div slot="button">
    <vs-button vs-type="primary-filled">Disabled</vs-button>
  </div>
  <vs-dropdown-item vs-group vs-label="actions group">
    <vs-dropdown-item :key="index" v-for="a,index in 3">
      <a href="#">Action {{index}}</a>
    </vs-dropdown-item>
  </vs-dropdown-item>
</vs-dropdown>
</template>
      `,
code5:`
<template>
<vs-row>
  <vs-col  vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
    <input type="color" v-model="colorx" name="" value="">
  </vs-col>
</vs-row>
 <!-- //code -->
 <vs-dropdown :vs-color="colorx" vs-margin="0px 0px 0px 10px" vs-title="trigger Dropdown click">
   <vs-dropdown-item vs-group vs-label="actions group">
     <vs-dropdown-item :key="index" v-for="a,index in 3">
       <a href="#">Action {{index}}</a>
     </vs-dropdown-item>
   </vs-dropdown-item>
 </vs-dropdown>

 <vs-dropdown :vs-color="colorx" vs-margin="0px 0px 0px 10px">
   <div slot="button">
     <vs-button vs-type="primary-filled">Disabled</vs-button>
   </div>
   <vs-dropdown-item vs-group vs-label="actions group">
     <vs-dropdown-item :key="index" v-for="a,index in 3">
       <a href="#">Action {{index}}</a>
     </vs-dropdown-item>
   </vs-dropdown-item>
 </vs-dropdown>
</template>
<script>
export default {
  data(){
    colorx:"#0fbb5e",
  }
}
</\script>
      `,
code6:`
<template>
<vs-dropdown :vs-icon="iconx" vs-margin="0px 0px 0px 10px">
  <div slot="button">
    <vs-button vs-type="primary-filled">Icon change</vs-button>
  </div>
  <vs-dropdown-item vs-group vs-label="actions group">
    <vs-dropdown-item :key="index" v-for="a,index in 3">
      <a href="#">Action {{index}}</a>
    </vs-dropdown-item>
  </vs-dropdown-item>
</vs-dropdown>
</template>
<script>
export default {
  data(){
    iconx:'add_circle_outline'
  }
}
</\script>
      `,
code7:`
<template>
<vs-dropdown vs-margin="0px 0px 0px 10px">
  <div slot="button">
    <vs-button vs-type="primary-filled">Fixed title group</vs-button>
  </div>
    <vs-dropdown-item vs-group vs-label="actions group 1">
      <vs-dropdown-item :key="index" v-for="a,index in 3">
        <a href="#">Action {{index}}</a>
      </vs-dropdown-item>
    </vs-dropdown-item>
    <vs-dropdown-item vs-group vs-label="actions group 2">
      <vs-dropdown-item :key="index" v-for="a,index in 5">
        <a href="#">Action {{index}}</a>
      </vs-dropdown-item>
    </vs-dropdown-item>
    <vs-dropdown-item vs-group vs-label="actions group 3">
      <vs-dropdown-item :key="index" v-for="a,index in 10">
        <a href="#">Action {{index}}</a>
      </vs-dropdown-item>
    </vs-dropdown-item>
</vs-dropdown>
</template>
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
