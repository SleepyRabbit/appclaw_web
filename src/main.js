// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex/store'
import router from './router/router'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
import './assets/css/common.css'
import './assets/icon/icomoon/style.css'
// import './assets/icon/Font-Awesome/css/font-awesome.min.css'

Vue.use(VueResource);
Vue.http.options.emulateJSON = true;

Vue.config.productionTip = false;

router.beforeEach((from, to, next) => {
  "use strict";
  // console.log(typeof(from.query.jwt));
  if(typeof(from.query.jwt) != "undefined" ) {
    // console.log("query!");
    store.dispatch('setJwt', from.query.jwt);     //把jwt放到vuex store中进行存储
//    localStorage.token = from.query.jwt;
  }
/*
else if(localStorage.token){
  store.dispatch('setJwt', localStorage.token);   //或者 localstorage中包含token
}
*/

  if(typeof(from.query.app_version) != "undefined" ) {
    store.dispatch('setVersion', from.query.app_version);
  }

  next();
})

FastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
