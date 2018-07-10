
import Vue from 'vue';
import utils from '../../utils'
import vsDialog from './index.vue'


const dialogConstructor = Vue.extend(vsDialog);


let instance;
let _this;


function isVNode(node) {
  return node !== null && typeof node === 'object'
};

export default { name:'dialog', vsfunction(parameters){
  let nodex
  if(isVNode(parameters.text)){
    nodex = parameters.text
    parameters.text = null
  }

  instance = new dialogConstructor({
    data: parameters,
  });
  
  instance.$data.isPrompt = false

  instance.vm = instance.$mount();

  if(nodex){
    console.log(nodex)
    instance.$slots.default = [nodex]
  }

  parameters.accept?instance.vm.$on('accept',parameters.accept):null
  parameters.cancel?instance.vm.$on('cancel',parameters.cancel):null
  utils.insertBody(instance.vm.$el);

  Vue.nextTick(() => {
    instance.active = true;
  });
 }

}