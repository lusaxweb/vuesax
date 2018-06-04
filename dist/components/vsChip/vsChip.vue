<template lang="html">
  <div
    v-if="eliminado"
    :class="{
      'con-icon':vsIcon,
    }"
    :style="{
      'background':vsColor?/[#()]/.test(vsColor)?`rgba(${vsColor.replace(/[rgb()]/g,'')},.1)`:`rgba(var(--${vsColor}),.1)`:'rgba(var(--primary),.1)',
      'color':vsColor?/[#()]/.test(vsColor)?vsColor:`rgba(var(--${vsColor}),1)`:'rgba(var(--primary),1)'
    }"
    class="con-vs-chip">

    <i v-if="vsIcon" class="material-icons icon-chip">{{vsIcon}}</i>

    <h3 v-if="vsText" class="textx">{{vsText}}</h3>
    <!-- {{value}} -->
    <div class="vs-chip">
      <slot>
      </slot>
    </div>

     <div
      @click="remove"
      v-if="vsClosable"
      class="con-x">
      <i class="material-icons">close</i>
    </div>
  </div>
</template>

<script>
export default {
  name:'vs-chip',
  props:{
    item:{
      type:Boolean,
    },
    value:{},
    vsActive:{
      type:Boolean,
      default:true,
    },
    vsText:{
      type:String,
      default:null,
    },
    vsClosable:{
      type:[Boolean,String],
      default:false,
    },
    vsColor:{
      type:String,
      default:'primary',
    },
    vsIcon:{
      type:String,
      default:null,
    }
  },
  computed:{
    eliminado(){
      if(this.item){
        return true
      } else {
        if(this.vsClosable){
          return this.value
        } else {
          return true
        }
      }
    }
  },
  methods:{
    remove(){
      this.$emit('vs-remove', false)
      this.$emit('input', false)
    }
  }
}
</script>

<style lang="css" scoped>
.inactive {
  opacity: .1 !important;
}
.textx {
  padding: 0;
  font-weight: lighter;
}
.con-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-chip {
  position: relative;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.con-x {
  position: relative;
  width: 22px;
  height: 22px;
  margin: 5px;
  margin-left: 0px;
  border-radius: 50%;
  background: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  cursor: pointer;
  z-index: 100;
  transition: all .3s ease;
}
.con-x:hover {
  background: inherit;
  background: rgba(var(--danger));
  color: rgb(255, 255, 255);
}
.con-x i {
  font-size: 17px;
  color: inherit;
}
.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  /* opacity: 0; */
  max-height: 0 !important;
  margin-bottom: 0px !important;
  margin-top: 0px !important;
}
.con-vs-chip {
  width: auto;
  background: rgba(var(--primary),.1);
  border-radius: 20px;
  opacity: 1;
  overflow: hidden;
  position: relative;
  margin: 5px;
  display: inline-flex;
  cursor: default;
  align-items: center;
  justify-content: center;
  /* margin-top: 10px;
  margin-bottom: 10px; */
}
.vs-chip {
  color: inherit;
  padding: 5px 10px;
  font-size: 12px;
  position: relative;
}
.vs-chip b {
  color: rgb(var(--primary)) !important;

}
</style>
