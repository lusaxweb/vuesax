import Vue from 'vue';
import utils from '../../utils'
import vsNotifications from './index.vue'

const NotiConstructor = Vue.extend(vsNotifications);


let instance;

export default {name:'notify',vsfunction(parameters){
  if(parameters.fullWidth){
    if(parameters.position) {
      parameters.position = parameters.position.replace('right','left')
    }
  }


  instance = new NotiConstructor({
    data: parameters,
  });
  instance.vm = instance.$mount();
  parameters.click?instance.vm.$on('click',parameters.click):null
  utils.insertBody(instance.vm.$el);
}
}
