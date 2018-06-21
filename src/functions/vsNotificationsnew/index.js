import Vue from 'vue';
import utils from '../../utils'
import vsNotifications from './index.vue'

const NotiConstructor = Vue.extend(vsNotifications);

let instance;
let _this;


export default {name:'notify',vsfunction(parameters){
  instance = new NotiConstructor({
    data: parameters
  });
  instance.vm = instance.$mount();
  utils.insertBody(instance.vm.$el);
  instance.vm.active = true;
}
}
