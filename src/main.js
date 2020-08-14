import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
import './china.js'
import 'lib-flexible/flexible'


Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

document.addEventListener('deviceready',function () {
        if(window.MobileAccessibility){
          window.MobileAccessibility.usePreferredTextZoom(false);
        }
})