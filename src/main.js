import Vue from 'vue'
import App from './App.vue'
import router from './router'
import LDrag from './../lib/ldrag.umd.min'
import './../lib/ldrag.css'
// import LDrag from './../packages/drag/index'
Vue.config.productionTip = false

Vue.use(LDrag)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
