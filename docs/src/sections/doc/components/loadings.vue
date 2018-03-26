<template lang="html">
  <div class="">
    <con-doc :apix="api" titlex="Loading" textx="very simple to implement and remove.">
      <div slot="codes">
        <codex :float="true" titlex="Default" :code="code1">
        <div  slot="ejemplo">
           <!-- //code -->
           <vs-button @click="openLoading" vs-type="primary-filled">Loading Default</vs-button>
         </div>
       </codex>
        <codex :float="true" titlex="Color" :code="code2">
        <div  slot="ejemplo">
           <!-- //code -->
           <input type="color" v-model="colorLoading" name="" value="">
           <vs-button @click="openLoadingColor" vs-type="danger-gradient">Primary</vs-button>
         </div>
       </codex>
        <codex :float="true" titlex="Background" :code="code3">
        <div  slot="ejemplo">
           <!-- //code -->
           <input type="color" v-model="backgroundLoading" name="" value="">
           <vs-button @click="openLoadingBackground" vs-type="danger-gradient">Primary</vs-button>
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
      colorLoading:'#7d0c3f',
      backgroundLoading:'#22c16b',
      api:[
        {
          name:'$vs.loading()',
          type:'function',
          parametros:'JSON',
          descripcion:'function para abrir loading',
          default:'null'
        },
        {
          name:'$vs.loading.close()',
          type:'function',
          parametros:'',
          descripcion:'function para cerrar loading',
          default:'null'
        },
        {
          name:'color',
          type:'String',
          parametros:'RGB, HEX, primary, danger, success, dark, warning',
          descripcion:'Color del loading',
          default:'primary'
        },
        {
          name:'background',
          type:'String',
          parametros:'RGB, HEX, primary, danger, success, dark, warning',
          descripcion:'background del loading',
          default:'rgba(255, 255, 255,.8)'
        },
      ],
      code1:`
<template>
<vs-button @click="openLoading" vs-type="primary-filled">Loading Default</vs-button>
</template>
<script>
export default {
  data(){
    methods:{
      openLoading(){
        this.$vs.loading()
        setTimeout( ()=> {
          this.$vs.loading.close()
        }, 2000);
      },
    }
  }
}
</\script>
      `,
      code2:`
<template>
<input type="color" v-model="colorLoading" name="" value="">
<vs-button @click="openLoadingColor" vs-type="danger-gradient">Primary</vs-button>
</template>
<script>
export default {
  data(){
    methods:{
      openLoadingColor(){
        this.$vs.loading({color:this.colorLoading})
        setTimeout( ()=> {
          this.$vs.loading.close()
        }, 2000);
      },
      },
    }
  }
}
</\script>
      `,
      code3:`
<template>
<input type="color" v-model="backgroundLoading" name="" value="">
<vs-button @click="openLoadingBackground" vs-type="danger-gradient">Primary</vs-button>
</template>
<script>
export default {
  data(){
    methods:{
      openLoadingBackground(){
        this.$vs.loading({background:this.backgroundLoading,color:'rgb(255, 255, 255)'})
        setTimeout( ()=> {
          this.$vs.loading.close()
        }, 2000);
      },
      },
    }
  }
}
</\script>
      `,
    }
  },
  methods:{
    openLoadingBackground(){
      this.$vs.loading({background:this.backgroundLoading,color:'rgb(255, 255, 255)'})
      setTimeout( ()=> {
        this.$vs.loading.close()
      }, 2000);
    },
    openLoadingColor(){
      this.$vs.loading({color:this.colorLoading})
      setTimeout( ()=> {
        this.$vs.loading.close()
      }, 2000);
    },
    openLoading(){
      this.$vs.loading()
      setTimeout( ()=> {
        this.$vs.loading.close()
      }, 2000);
    },
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
