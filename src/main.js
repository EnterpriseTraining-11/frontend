import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const axios = require('axios');
const axiosJSON = axios.create({
  baseURL: 'http://localhost:2333/'
});

Vue.config.productionTip = false;
Vue.prototype.axiosJSON = axiosJSON;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
