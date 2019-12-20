import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import './assets/tailwind.css'
import InfiniteSlideBar from 'vue-infinite-slide-bar'

Vue.config.productionTip = false

Vue.component('infinite-slide-bar', InfiniteSlideBar)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
