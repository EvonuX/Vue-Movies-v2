import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import BackToTop from 'vue-backtotop'
Vue.use(require('vue-moment'));

Vue.use(BackToTop)

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preLoad: 1,
  error: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy67qKEMJNh_JsKfsEY3BTVbfSzvXi9F0QzwgKxC9fxTzYBEIb',
  loading: 'https://cdn.dribbble.com/users/194846/screenshots/1452453/loadingspinner.gif',
  attempt: 2
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
