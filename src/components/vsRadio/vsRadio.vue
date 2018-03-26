<template lang="html">
  <div :class="{'disabledx':disabled,'vsActivo':value?value.search(vsValue)!=-1:false}" @click="clickx" class="con-radio">
    <span  class="vs-radio">
      <div :style="{'background':backgroundx,'boxShadow':'0px 0px 5px 0px '+backgroundx}" class="vs-circle">

      </div>
      <div :style="{'border':'2px solid rgb(170, 170, 170)'}" class="vs-border">

      </div>
    </span>
    <span class="textx" :style="{'color':value?value.search(vsValue)!=-1?backgroundx:'rgba(0,0,0,.7)':false}">
      <slot>
      </slot>
    </span>
  </div>
</template>

<script>
export default {
  name:'vs-radio',
  props:[
    'vsColor',
    // 'vsType',
    'value',
    'vsValue',
    'disabled',
  ],
  computed:{
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
  methods:{
    clickx(){
      this.$emit('input',this.vsValue);
      this.$emit('click',this.vsValue);
      this.$emit('change',this.vsValue);
    }
  }
}
</script>

<style lang="css" scoped>
.textx {
  transition: all .3s ease;
}
.disabledx {
  opacity: .4;
  pointer-events: none;
}
.disabledx::selection span{
  background: transparent !important;
}
.con-radio {
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: rgba(0, 0, 0, 0.7);
}
.vs-radio {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: block;
  margin-right: 7px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
.vs-circle {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transform: scale(.4);
  opacity: 0;
  transition: all .3s ease;
  position: absolute;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
}
.vs-border {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform: scale(1);
  opacity: 1;
  transition: all .3s ease;
}
.vsActivo .vs-circle{
  opacity: 1;
  transform: scale(1);
}
.vsActivo .vs-border{
  opacity: 0;
  transform: scale(.4);
}
.con-radio:active .vs-border{
  transform: scale(1.1);
}
.vsActivo:active .vs-circle{
  transform: scale(1.1);
}

.vs-bottom {
  box-shadow: 0px 5px 20px -2px rgba(0, 0, 0, 0.1);
  margin: 4px;
  border-radius: 5px;
  padding: 10px;
  padding-top: 7px;
  padding-bottom: 7px;
  transition: all .3s ease;
}
.vs-bottom.vsActivo {
  box-shadow:inset 0px 0px 15px 0px rgba(0, 0, 0, 0.150)
}
</style>


<!-- <input type="radio" id="contactChoice1" name="contact" value="email"> -->
