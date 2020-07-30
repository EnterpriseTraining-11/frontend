import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:false
  },
  mutations: {
      authorize (state, token) {
        // 变更状态
        state.token = token;
        
      }
  },
  actions: {
  },
  modules: {
  }
})
