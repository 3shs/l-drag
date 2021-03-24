import Vue from 'vue'
import App from './App.vue'
import router from './router'
import LDrag from './../packages/drag/index'
import './../src/assets/icon/iconfont.css'

Vue.config.productionTip = false

Vue.use(LDrag)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
