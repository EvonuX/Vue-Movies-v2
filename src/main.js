import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BackToTop from 'vue-backtotop'

Vue.use(BackToTop)

Vue.config.productionTip = false

// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: 'dist/error.png',
//   loading: 'dist/loading.gif',
//   attempt: 1
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
