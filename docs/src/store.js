// register
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    estas:'/',
    color:'#3680b5',
    menuVisible:false,
    loading:false,
    scroll:false,
  }
})
