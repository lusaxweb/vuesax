<template lang="html">
  <div class="">
    <con-doc :apix="api" titlex="Dialog" textx="Dilogs very easy to implement and practical to use in any case and need.">
      <div slot="codes">
        <codex :float="true" titlex="Alert" :code="code1">
        <div  slot="ejemplo">
           <vs-button @click="alert" vs-type="default-filled">Alert Default</vs-button>
           <vs-button @click="alert('primary')" vs-type="primary-flat">Alert Primary</vs-button>
           <vs-button @click="alert('success')" vs-type="success-flat">Alert success</vs-button>
           <vs-button @click="alert('danger')" vs-type="danger-flat">Alert Danger</vs-button>
           <vs-button @click="alert('warning')" vs-type="warning-flat">Alert Warning</vs-button>
           <vs-button @click="alert('dark')" vs-type="dark-flat">Alert dark</vs-button>
           <vs-button @click="alertColor()" vs-type="primary-gradient">Alert Color RGB || HEX</vs-button>
         </div>
       </codex>
        <codex :float="true" titlex="Confirm" :code="code2">
        <div  slot="ejemplo">
           <vs-button @click="confirm" vs-type="danger-gradient">Run Confirm</vs-button>
         </div>
       </codex>
        <codex :float="true" titlex="Prompt" :code="code3">
        <div  slot="ejemplo">
          <div class="modelx">
            {{val==null?'null':val}}
          </div>
           <vs-button @click="prompt" vs-type="primary-border">Run prompt</vs-button>
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
      val:'',
      api:[
        {
          name:'$vs.alert()',
          type:'function',
          parametros:'JSON',
          descripcion:'Function que ejecuta el dialog Alert',
          default:'null'
        },
        {
          name:'$vs.confirm()',
          type:'function',
          parametros:'JSON',
          descripcion:'Function que ejecuta el dialog Confirm',
          default:'null'
        },
        {
          name:'$vs.prompt()',
          type:'function',
          parametros:'JSON',
          descripcion:'Function que ejecuta el dialog prompt',
          default:'null'
        },
        {
          name:'color',
          type:'string',
          parametros:'primary, success, danger, warning, dark, RGB, HEX',
          descripcion:'Color del dialog',
          default:'Cancel'
        },
        {
          name:'title',
          type:'string',
          parametros:'string',
          descripcion:'Titulo del dialog',
          default:'null'
        },
        {
          name:'text',
          type:'string',
          parametros:'string',
          descripcion:'Texto del dialog',
          default:'null'
        },
        {
          name:'textConfirm',
          type:'string',
          parametros:'string',
          descripcion:'Texto del boton confirm en el dialog',
          default:'Accept'
        },
        {
          name:'textCancel',
          type:'string',
          parametros:'string',
          descripcion:'Texto del boton cancel en el dialog',
          default:'Cancel'
        },
        {
          name:'confirm',
          type:'function',
          parametros:'(value) solo en el dialog prompt',
          descripcion:'Function que se ejecuta al confirmar el dialog',
          default:'null'
        },
        {
          name:'cancel',
          type:'function',
          parametros:'',
          descripcion:'Function que se ejecuta al cancelar en el dialog',
          default:'null'
        },
        {
          name:'input',
          type:'json',
          parametros:'placeholder, type, maxLength, value',
          descripcion:'Parametros del input del dialog prompt (en el parametro type no son permitidos los inputs: checkBox, radio o button )',
          default:'null'
        },

      ],
      code1:`
      <template>
  <vs-button
    @click="alert"
    vs-type="default-filled">
      Alert Default
    </vs-button>
  <vs-button
    @click="alert('primary')"
    vs-type="primary-flat">
      Alert Primary
    </vs-button>
  <vs-button
    @click="alert('success')"
    vs-type="success-flat">
      Alert success
    </vs-button>
  <vs-button
    @click="alert('danger')"
    vs-type="danger-flat">
      Alert Danger
    </vs-button>
  <vs-button
    @click="alert('warning')"
    vs-type="warning-flat">
      Alert Warning
    </vs-button>
  <vs-button
    @click="alert('dark')"
    vs-type="dark-flat">
      Alert dark
    </vs-button>
  <vs-button
    @click="alertColor()"
    vs-type="primary-gradient">
      Alert Color RGB || HEX
    </vs-button>

      </template>
      <script>
      alert(color){
        this.$vs.alert({
          title:'Dialog alert Default',
          text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          textConfirm:'Aceptar',
          color:color,
          confirm:()=>{
            //function confirm
          },
        })
      },
      alertColor(){
        function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min)) + min;
        }
        let color = 'rgb('+getRandomInt(0,255)+','+getRandomInt(0,255)+','+getRandomInt(0,255)+')'
        this.$vs.alert({
          title:'Dialog alert Default',
          text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          textConfirm:'Aceptar',
          color:color,
          confirm:function(){
            //function confirm
          },
        })
      },
      </\script>
      `,
      code2:`
      <template>
        <vs-button @click="confirm" vs-type="danger-gradient">Run Confirm</vs-button>
      </template>
      <script>
      confirm(){
        this.$vs.confirm({
          title:'Dialog Confirm Default',
          text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          color:'danger',
          confirm:()=>{
            console.log("hola esto esta en confirm");
            this.$vsNotify({
              title:'Eliminado',
              text:'Lorem ipsum dolor sit amet',
              color:'danger',
            })
          },
          cancel:()=>{
            console.log("cancel click");
            this.$vsNotify({
              title:'Cancel',
              text:'Lorem ipsum dolor sit amet',
            })
          }
        })
      },
      </\script>
      `,
      code3:`
      <template>
      <div class="modelx">
        {{val==null?'null':val}}
      </div>
       <vs-button @click="prompt" vs-type="primary-border">Run prompt</vs-button>
      </template>
      <script>
      prompt(){
        this.$vs.prompt({
          title:'Dialog Confirm Default',
          text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          color:'primary',
          input:{
            placeholder:'Name',
            value:this.val,
            maxLength:20,
            type:'text'
          },
          confirm:(value)=>{
            this.val = value
            console.log("value",value);
          },
          cancel:function(){
            console.log("cancel click");
            //function cancel
          }
        })
      },
      </\script>
      `,

    }
  },
  methods:{
    alert(color){
      this.$vs.alert({
        title:'Dialog alert Default',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        textConfirm:'Aceptar',
        color:color,
        confirm:()=>{

        },
      })
    },
    alertColor(){
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`

      this.$vs.alert({
        title:'Dialog alert Default',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        textConfirm:'Aceptar',
        color:color,
        confirm:function(){
          // console.log("hola esto esta en confirm");
        },
      })
    },
    confirm(){
      this.$vs.confirm({
        title:'Dialog Confirm Default',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        color:'danger',
        confirm:()=>{
          // console.log("hola esto esta en confirm");
          this.$vsNotify({
            title:'Eliminado',
            text:'Lorem ipsum dolor sit amet',
            color:'danger',
          })
        },
        cancel:()=>{
          console.log("cancel click");
          this.$vsNotify({
            title:'Cancel',
            text:'Lorem ipsum dolor sit amet',
          })
        }
      })
    },
    prompt(){
      this.$vs.prompt({
        title:'Dialog Confirm Default',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        color:'primary',
        input:{
          placeholder:'Name',
          value:this.val,
          maxLength:20,
          type:'text'
        },
        confirm:(value)=>{
          this.val = value
          this.$vsNotify({
            title:'Muy Bien',
            text:'Gracias '+value,
            color:'success',
          })
        },
        cancel:function(){
          console.log("cancel click");
        }
      })
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
