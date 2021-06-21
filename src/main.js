import Vue from 'vue'
//IMPORT STORE DARI FILE store.js
import store from './store'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  //MENGGUNAKAN VUEX YANG TELAH DIDEFINISIKAN
  store,
  render: h => h(App)
}).$mount('#app')