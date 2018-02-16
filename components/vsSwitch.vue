<template lang="html">
  <label for="">
    <button :disabled="disabled" ref="componentex" :style="{'background':backgroundx()}" @click="Clickx" class="con-switch" :class="[{'switch-activo':typeof value == 'boolean'?value:valueArray}]">
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
<span>
  <slot>
  </slot>
</span>

  </label>
</template>
<!-- rgba(var(--${vsType}),.4) -->
<script>
export default {
  name:'vs-switch',
  props:[
    'vsValue',
    'value',
    'vsType',
    'vsIcon',
    'disabled'

  ],
  computed:{
    valueArray(){
      let arrayx = this.value
      if(typeof this.value == 'object' && this.value != null){
        if(arrayx.includes(this.vsValue)){
          return true
        } else {
          return false
        }
      } else if (typeof this.value == 'string' || this.value == '' || this.value == null) {
        if(this.value == this.vsValue){
          return true
        } else {
          return false
        }
      }
    }
  },
  methods:{
    Clickx(){
      console.log("paso");
      if(typeof this.value == 'object'&&this.value != null){
        let valueOld = this.value
        if(this.$refs.componentex.classList.contains('switch-activo')){
          let valuenew = valueOld.filter((item) => {
            return item.indexOf(this.vsValue)==-1
          })
          this.$emit('input',valuenew)
          this.$emit('click',valuenew)
          this.$emit('change',valuenew)
        } else {
          valueOld.push(this.vsValue)
          this.$emit('input',valueOld)
          this.$emit('click',valueOld)
          this.$emit('change',valueOld)
        }

      } else if (typeof this.value == 'boolean') {
        this.$emit('input',!this.value)
      } else if (typeof this.value == 'string' || this.value == '' || this.value == null) {
        if(this.value == this.vsValue){
          this.$emit('input',null)
        } else {
          this.$emit('input',this.vsValue)
        }
      }
    },
    backgroundx(){
      let arrayx = this.value
      if(typeof this.value == 'boolean'){
        if(this.value){
          if(/[#()]/i.test(this.vsType)){
            return this.vsType
          } else {
            return `rgb(var(--${this.vsType}))`
          }
        }
      } else if (typeof this.value == 'object') {
        if(arrayx.includes(this.vsValue)){
          if(/[#()]/i.test(this.vsType)){
            return this.vsType
          } else {
            return `rgb(var(--${this.vsType}))`
          }
        }
      }
    }
  },
  mounted(){

  }
}
</script>

<style lang="css" scoped>
label {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.7);
}
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
