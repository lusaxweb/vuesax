import Vue from 'vue';
import utils from '../../utils'
import vsDialog from './index.vue'


const dialogConstructor = Vue.extend(vsDialog);

let instance;

export default { name:'dialog', vsfunction(props) {



  instance = new dialogConstructor();

  instance.$props.text = props.text
  instance.$props.title = props.title || 'Dialog'
  instance.$props.color = props.color
  instance.$props.type = props.type || 'alert'
  instance.$props.buttonAccept = props.buttonAccept || 'filled'
  instance.$props.buttonCancel = props.buttonCancel || 'flat'
  instance.$props.acceptText = props.acceptText || 'Accept'
  instance.$props.cancelText = props.cancelText || 'Cancel'
  instance.$props.closeIcon = props.closeIcon || 'close'
  instance.$props.iconPack = props.iconPack || 'material-icons'
  instance.$props.isValid = props.isValid || 'none'



  instance.$data.isPrompt = false

  instance.vm = instance.$mount();

  props.accept?instance.vm.$on('accept', props.accept):null
  props.cancel?instance.vm.$on('cancel', props.cancel):null
  props.close?instance.vm.$on('close', props.close):null
  utils.insertBody(instance.vm.$el, props.parent);

  Vue.nextTick(() => {
    instance.$data.fActive = true
    instance.$data.parameters = props.parameters
  });
}

}
