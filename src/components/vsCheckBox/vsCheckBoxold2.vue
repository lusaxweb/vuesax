<template lang="html">

  <label ref="checkBoxx" :disabled="disabled" :class="[{'disabledx':disabled,'checkBoxActivo':value}]"  class="con-check">
    <input
      v-bind="$attrs"
      v-on="listeners"
      type="checkbox"
      :checked="value">
    <span
      :style="{'border':typeof value == 'boolean'?!value?'2px solid rgb(160, 160, 160)':'2px solid '+backgroundx():!valueArray?'2px solid rgb(160, 160, 160)':'2px solid '+backgroundx()}" class="cuadro">
      <i class="material-icons">check</i>
      <span :style="{'background':backgroundx()}" class="afterx"></span>
    </span>
      <slot>
      </slot>
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
  name:'vs-checkbox',
  props:[
    'vs-value',
    'value',
    'vsColor',
    'disabled'
  ],
  data(){
    return {

    }
  },
  computed:{
    listeners(){
      return {
        ...this.$listeners,
        change: (event) => {
          console.log(event.target.value);
        }
      }
    },
    valueArray(){
      let arrayx = this.value
      let returnx = false
      if(typeof this.value == 'object' && this.value != null){
        if(typeof this.vsValue == 'object'){
          let valuex = JSON.stringify(this.vsValue)
          if(JSON.stringify(arrayx).search(valuex)!=-1){
            returnx = true
          } else {
            returnx = false
          }
        } else {
          if(arrayx.includes(this.vsValue)){
            returnx = true
          } else {
            returnx = false
          }
        }
      } else if (typeof this.value == 'string' || this.value == '' || this.value == null) {
        if(this.value == this.vsValue){
          returnx = true
        } else {
          returnx = false
        }
      }

      return returnx
    }
  },
  methods:{
    // checkBoxClick(){
    //
    //   if(typeof this.value == 'object'&&this.value != null){
    //     let valueOld = this.value
    //     if(this.$refs.checkBoxx.classList.contains('checkBoxActivo')){
    //       let valuenew = valueOld.filter((item) => {
    //         if(typeof item == 'object'){
    //           return JSON.stringify(item).indexOf(JSON.stringify(this.vsValue))==-1
    //         } else {
    //           return item.indexOf(this.vsValue)==-1
    //         }
    //       })
    //       this.$emit('input',valuenew)
    //     } else {
    //       valueOld.push(this.vsValue)
    //       this.$emit('input',valueOld)
    //     }
    //
    //   } else if (typeof this.value == 'boolean') {
    //     this.$emit('input',!this.value)
    //   } else if (typeof this.value == 'string' || this.value == '' || this.value == null) {
    //     if(this.value == this.vsValue){
    //       this.$emit('input',null)
    //     } else {
    //       this.$emit('input',this.vsValue)
    //     }
    //   }
    // },
    backgroundx(){
      if(this.vsColor){
        if(/[#()]/i.test(this.vsColor)){
          return this.vsColor
        } else {
          return `rgb(var(--${this.vsColor}))`
        }
      } else {
        return 'rgb(var(--primary))'
      }
    }
  },
}
</script>

<style lang="css" scoped>
.con-check input[type="checkbox"]{
  position: absolute;
  opacity: 0;
}
.disabledx {
  pointer-events: none;
  opacity: .4;
}
.disabledx .cuadro {
  box-shadow:inset 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
}
.con-check {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 5px;
  color: rgba(0, 0, 0, 0.7);
}
.con-check::selection {
  background: transparent;
}
.cuadro {
  width: 22px;
  height: 22px;
  border: 2px solid rgb(180, 180, 180);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  border-radius: 3px;
  position: relative;
  overflow: hidden;
  transition: all .2s ease;
  backface-visibility: hidden;
}
.con-check:active .cuadro{
  transform: rotate(20deg);
}
.checkBoxActivo:active .cuadro {
  transform: rotate(70deg) !important;
}
.afterx {
  position: absolute;
  background: rgb(var(--primary));
  opacity: 1;
  transition: all .250s ease;
  transform: translate(100%,0%);
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: block;
}
.cuadro i {
  font-size: 18px;
  color: rgb(255, 255, 255);
  z-index: 100;
  transform: rotate(-90deg);
  opacity: 0;
  transition: all .3s ease .1s;
}
.checkBoxActivo .cuadro {
  transform: rotate(90deg);
}
.checkBoxActivo .cuadro i{
  opacity: 1
}
.checkBoxActivo .afterx {
  transform: translate(0,0);
}
</style>
