<template lang="html">
  <button ref="switchx" :style="{'background':backgroundx()}" @click="$emit('input',!value),$emit('change',!value)" class="con-switch" :class="[{'switch-activo':value}]">
    <!-- <span v-show="!value" ref="offx" class="off">
    <slot name='off'>
    </slot>
    </span> -->
    <span class="switch-circle"></span>
    <i class="material-icons">{{vsIcon}}</i>
    <!-- <span v-show="value" ref="onx" class="on">
      <slot name='on'>
      </slot>
    </span> -->
  </button>
</template>
<!-- rgba(var(--${vsType}),.4) -->
<script>
export default {
  name:'vs-switch',
  props:[
    'value',
    'vsType',
    'vsIcon',
  ],
  methods:{
    backgroundx(){
      if(this.value){
        if(/[#()]/i.test(this.vsType)){
          return this.vsType
        } else {
          return `rgb(var(--${this.vsType}))`
        }
      }

    }
  },
  mounted(){

  }
}
</script>

<style lang="css">
.off span{
  position: absolute;
  display: block;
  padding-left: 5px;
  padding-right: 23px;
  font-size: 13px;
  z-index: 10;
  top: 50%;
  left: 0px;
  transform: translate(0,-50%);
}
.on span{
  position: absolute;
  display: block;
  padding-left: 23px;
  padding-right: 5px;
  font-size: 13px;
  z-index: 10;
  right: 0px;
  top: 50%;
  transform: translate(0,-50%);
}

.con-switch i {
  position: absolute;
  left: calc(100% - 20px);
  font-size: 14px;
  color: rgba(0,0,0,.250);
  transition: all .3s ease .1s;
}
.switch-activo i {
  left: 5px;
  color: rgb(255, 255, 255);
}
.con-switch {
  position: relative;
  min-width: 42px;
  height: 22px;
  border-radius: 20px;
  background: rgb(220, 220, 220);
  cursor: pointer;
  box-shadow:inset 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  transition: all .3s ease;
  margin: 10px;
  border: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.con-switch:disabled {
  opacity: .4;
  cursor: default;
  pointer-events: none;
}
.con-switch:active .switch-circle{
  width: 25px;
}
.switch-activo:active .switch-circle{
  width: 25px;
  left: calc(100% - 29px);
}
.switch-circle {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 18px;
  height: 18px;
  background: rgb(255, 255, 255);
  border-radius: 20px;
  transition: all .250s ease-out;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  display: block;
  margin: 2px;
  z-index: 100;
  /* right: auto; */
}
/* .switch-activo {
  background: rgb(179, 214, 255);
} */
.switch-activo .switch-circle {
  /* background: rgb(var(--primary)); */
  /* left: auto !important; */
  /* right: 0px !important; */
  left: calc(100% - 22px);
}
</style>
