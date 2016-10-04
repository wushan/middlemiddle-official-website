// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App'
import Home from './components/Home'
import Wall from './components/Wall'

/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/wall', component: Wall }
  ]
})

new Vue({
  router: router,
  components: {
    App
  },
  created () {
  }
}).$mount('#app')
