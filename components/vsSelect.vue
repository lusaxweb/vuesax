<template lang="html">
  <div class="con-select">
    <div :class="{'mostando':visible}" @click="visible=!visible" class="vsSelect-value">
      {{claveMostar}}
    </div>
    <transition v-on:enter="enter" name="fade">
      <div v-show="visible" class="div-ul">

    <ul >
      <li :class="{'activo':valorMostar == option[valor]}" @click="clickOption(option[valor])" v-for="option in vsOptions">
        {{option[clave]}}
      </li>
    </ul>
  </div>
  </transition>
  </div>
</template>

<script>
export default {
  name:'vs-select',
  props:{
    "value": {},
    vsOptions:{},
    "clave":{},
    "valor":{}
  },
  data(){
    return{
      vModel:this.value,
      visible:false,
    }
  },
  watch:{
    vModel(){
      this.$emit('change')
    },
    visible(despues,antes){
      console.log("antes===>",antes);
      console.log("despues===>",despues);
      if(!antes){

      }
    }
  },
  methods:{
    enter: function (el) {
  // ...
  let elx = el.querySelectorAll(".activo")
  let lix = elx[0].offsetHeight
  let ulx = el.querySelectorAll("ul")[0].offsetHeight-lix
  console.log(lix);
  el.querySelectorAll("ul")[0].scrollTop = elx[0].offsetTop - ulx/2;
},
    clickOption(valor){
      // console.log(valor);
      this.vModel=valor
      this.$emit('input',valor)
      let bodyx = document.getElementsByTagName('body')[0]
      bodyx.classList.remove("vs-select")
      this.visible=false
    }
  },
  computed:{
    valorMostar(){
      let valuex = this.vModel
      let options = this.vsOptions
      options = options.filter((item)=>{
        return item[this.valor] == valuex
      })
      return options[0][this.valor]
    },
    claveMostar(){
      let valuex = this.vModel
      let options = this.vsOptions
      options = options.filter((item)=>{
        return item[this.valor] == valuex
      })
      return options[0][this.clave]
    }
  },
}
</script>

<style lang="css">
/* .fade-enter-active, .fade-leave-active {
  transition: opacity .2s cubic-bezier(0.4, 0.0, 0.2, 1),transform .3s cubic-bezier(0.4, 0.0, 0.2, 1);
} */
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translate(0,-50%) scale(.8) scaleY(.5)  !important;
  border-radius: 50px;
  overflow: hidden;
}
.fade-enter ul, .fade-leave-to ul {
}
.vsSelect-value {
  padding: 10px;
  border-radius: 5px;
  background: transparent;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.8);
  transition: all .3s ease, color .1s ease .2s;
}
.mostando {
  transition: color .1s;
  transform: scaley(6);
  color: transparent;
  opacity: 0
}
.con-select {
  /* max-width: 200px; */
  min-width: 200px;
  position: relative;
}
.con-select .div-ul {
  position: absolute;
  display: block;
  width: 100%;
  transition: all .2s cubic-bezier(0.4, 0.0, 0.2, 1),transform .3s cubic-bezier(0.4, 0.0, 0.2, 1);
  transform: translate(0,-50%);
  top: 50%;
}
.con-select ul {
  padding: 5px;
  width: 100%;
  max-height: 300px;
  overflow: auto;
  background: rgb(255, 255, 255);
  box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.1);
  position: relative;


  display: block;
}
.con-select ul li {
  padding: 10px;
  cursor: pointer;
  transition: all .2s ease;
}
.con-select ul li:hover {
  background: rgb(245, 245, 245);
}
.con-select ul li.activo {
  background: rgb(230, 230, 230);
}
</style>
