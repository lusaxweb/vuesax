import Vue from 'vue';
import utils from '../../utils'
import vsDialog from './index.vue'


const dialogConstructor = Vue.extend(vsDialog);

let instance;

export default { name:'dialog', vsfunction(parameters){

  instance = new dialogConstructor({
    data: parameters,
  });

  instance.$data.isPrompt = false

  instance.vm = instance.$mount();

  parameters.accept?instance.vm.$on('accept',parameters.accept):null
  parameters.cancel?instance.vm.$on('cancel',parameters.cancel):null
  utils.insertBody(instance.vm.$el);

  Vue.nextTick(() => {
    instance.active = true
  });
}

}
