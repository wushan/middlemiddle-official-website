// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueFire from 'vuefire'
// import VueQuillEditor from 'vue-quill-editor'
// explicit installation required in module environments
// Vue.use(VueQuillEditor)
Vue.use(VueFire)
Vue.use(VueRouter)

import App from './App'
import Home from './components/Home'
import Wall from './components/Wall'

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    // if (to.hash) {
    //   console.log(position)
    //   console.log(to.hash)
    //   position.selector = to.hash
    // }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}
// FrontEnd
import Container from './components/Container'
import NewsWrapper from './components/NewsWrapper'
import NewsSingle from './components/NewsSingle'
// Admin
import Admin from './components/admin/Admin'
import Adminhome from './components/admin/Home'
import Login from './components/admin/Login'
import NewsAdmin from './components/admin/NewsAdmin'
import NewsList from './components/admin/NewsList'
import AddNews from './components/admin/addNews'
import ModifyNews from './components/admin/modifyNews'
/* eslint-disable*/
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  scrollBehavior,
  routes: [
    { path: '/', component: Container, children: 
      [
        { path: '', component: Home },
        { path: 'fun', component: Home, name: 'fun' },
        { path: 'foods', component: Home, name: 'foods' },
        { path: 'news', component: NewsWrapper, children: 
          [
            { path: 'single/:id', component: NewsSingle }
          ]
        },
        { path: 'wall', component: Wall },
      ]
    },
    { path: '/admin', component: Admin, children:
      [
        { path: '', component: Login },
        { path: 'login', component: Login },
        { path: 'home', component: Adminhome, children: 
          [
            { path: 'news', component: NewsAdmin, children:
              [
                { path: '', component: NewsList },
                { path: 'list', component: NewsList },
                { path: 'add', component: AddNews },
                { path: 'modify/:id', component: ModifyNews }
              ]
            }
          ]
        }
      ]
    }
  ]
})

new Vue({
  router: router,
  components: {
    App
  },
  created () {
  }
}).$mount('#app');

// GA
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-68400394-1', 'auto');
ga('send', 'pageview');

window.fbAsyncInit = function() {
  FB.init({
    appId      : '1671181963161506',
    xfbml      : true,
    version    : 'v2.7'
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk/debug.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));