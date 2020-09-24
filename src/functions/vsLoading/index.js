import Vue from 'vue';
import vsLoading from './index.vue'

const loadingConstructor = Vue.extend(vsLoading);

export default {
  name:'loading',
  vsfunction(parameters){
    let instance = new loadingConstructor();
    let containerx = document.body
    if(parameters){
      instance.$data.type = parameters.type || 'default'
      instance.$data.background = parameters.background
      instance.$data.color = parameters.color
      instance.$data.scale = parameters.scale
      instance.$data.text = parameters.text
      instance.$data.clickEffect = parameters.clickEffect
      if(parameters.container) {
        containerx = parameters.container instanceof Element ? parameters.container : document.querySelector(parameters.container)
      }
    }
    instance.vm = instance.$mount();
    containerx.insertBefore(instance.vm.$el, containerx.firstChild)
  },
  close(elx){
    let loadings

    if (elx instanceof Element) {
      // Mimicking the behavior of doing `elx.querySelectorAll('> con-vs-loading')` but `>` is not well supported.
      // We are doing this because we can only add the respective classes to .con-vs-loading
      loadings = Array.from(elx.children).filter(el => el.classList.contains('con-vs-loading'))
    } else {
      loadings = document.querySelectorAll(elx || 'body > .con-vs-loading')
    }

    loadings
      .forEach((loading)=>{
        loading.classList.add('beforeRemove')
        setTimeout(()=>{
          loading.remove()
        },300)
      })
  }
}
