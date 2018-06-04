<template lang="html">
  <div  :class="[vsType?vsType:'','vs-'+vsPosition]" class="con-tabs">
    <ul class="ul-tabs">
      <li :class="{'tab-disabledx':vsTab._props.disabled,'tab-activo':vsTab._data.activo}" @click="clickLiTab(vsTab,index)" v-for="vsTab,index in vsTabs">
        <span :style="{'color':vsTab._data.activo?vsColor?vsColor:'rgb(var(--primary))':''}" class="tabtext">
          {{vsTab.vsLabel}}
        </span>
        <span
          :style="{'border-bottom':vsType=='border-bottom'?'2px solid '+vsColor:'','background':vsTab._data.activo?vsColor?vsColor:'rgb(var(--primary))':''}" class="cuadro">

        </span>
        </li>
    </ul>
    <div class="contiene-tabs">
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'vs-tabs',
  props:[
    'vsType',
    'vsColor',
    'vsPosition'
  ],
  data(){
    return {
      vsTabs:[],
    }
  },
  methods:{
    clickLiTab(tab,index){
      console.log("tab",tab._props.disabled);
      for (var i = 0; i < this.vsTabs.length; i++) {
        this.vsTabs[i]._data.activo = false
      }
      tab._data.activo = true
      // console.log("tab",tab.data);
      console.log("click",index);
    }
  },
  mounted(){
    this.vsTabs[0]._data.activo = true
  }
}
</script>

<style lang="css" scoped>
.contiene-tabs {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.con-tabs {
  display: flex;
  width: 100%;
  flex-direction: column;
}
.ul-tabs {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.050);
  box-shadow: 0px -3px 15px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 15px;
}
.ul-tabs li {
  padding: 10px;
  cursor: pointer;
  transition: all .3s ease;
  position: relative;
  border-right: 1px solid  rgba(0, 0, 0, 0.070);
  padding-left: 15px;
  padding-right: 15px;
}
.ul-tabs li:last-child {
  border-right: 1px solid  rgba(0, 0, 0, 0.0);
  border-radius: 0px 5px 5px 0px;
}
.ul-tabs li:first-child {
  border-radius: 5px 0px 0px 5px;
  overflow: hidden;
}
/* .ul-tabs li:hover {
  color: rgb(var(--primary));
} */
.tab-activo {
  /* color: rgb(var(--primary)); */
  /* background: rgba(var(--primary),.050); */
}
.tab-disabledx {
  opacity: .250;
  pointer-events: none;
  user-select: none;
}
.cuadro {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  opacity: .150;
  transition: all .3s ease;
}
.tabtext {
  /* transition: all .3s ease; */
  display: block;
  position: relative;
}

.vs-top-right ul{
  justify-content: flex-end;
}
.vs-bottom-right ul{
  justify-content: flex-end;
}
.vs-bottom-right .ul-tabs{
  order:1;
}

.vs-right {
  flex-direction: row;
}
.vs-right>.ul-tabs{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    order:1;
    width: auto;
}
.vs-right>.ul-tabs li {
  border-bottom: 1px solid rgba(0, 0, 0, 0.070);
  border-right: 0px;
  width: 100%;
}
.vs-right>.ul-tabs li:last-child {
  border-bottom: 1px solid rgba(0, 0, 0, 0);
  border-radius: 0px 0px 5px 5px;
}
.vs-right>.ul-tabs li:first-child {
  border-bottom: 1px solid rgba(0, 0, 0, 0);
  border-radius: 5px 5px 0px 0px;
}


.vs-bottom>.ul-tabs{
    order:1;
    margin-bottom: 0px;
    margin-top: 15px;
}


.vs-left {
  flex-direction: row;
}
.vs-left>.ul-tabs{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: auto;
}
.vs-left>.ul-tabs li {
  border-bottom: 1px solid rgba(0, 0, 0, 0.070);
  border-right: 0px;
  width: 100%;
}
.vs-left>.ul-tabs li:last-child {
  border-bottom: 1px solid rgba(0, 0, 0, 0);
  border-radius: 0px 0px 5px 5px;
}
.vs-left>.ul-tabs li:first-child {
  border-bottom: 1px solid rgba(0, 0, 0, 0);
  border-radius: 5px 5px 0px 0px;
}


.border-bottom ul{
  padding: 0px;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
}
.border-bottom ul li {
  border: 0px solid rgb(29, 109, 113);
  border-radius: 0px !important;
}
.border-bottom ul li .cuadro {
  opacity: 0;

}
</style>
