import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginUser:null
  },
  getters:{
    loginUser: state => {
      return state.loginUser;
    }
  },
  mutations: {
      login (state, loginUser) {
        state.loginUser = loginUser;
        localStorage.setItem("loginUser", JSON.stringify(loginUser));
      },
      logout(state) {
        state.loginUser = null;
        localStorage.removeItem("loginUser");
      },
  },
  actions: {

  },
  modules: {
  }
})
