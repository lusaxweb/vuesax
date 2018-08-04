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
        containerx = document.querySelector(parameters.container)
      }
    }
    instance.vm = instance.$mount();
    containerx.insertBefore(instance.vm.$el, containerx.firstChild)
  },
  close(elx){
    let el = elx || 'body > .con-vs-loading'
    let loadings = document.querySelectorAll(el)
    loadings.forEach((loading)=>{
      loading.classList.add('beforeRemove')
      setTimeout(()=>{
        loading.remove()
      },300)
    })
  }
}
