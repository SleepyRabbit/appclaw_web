// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
import './assets/css/common.css'
import './assets/icon/icomoon/style.css'
// import './assets/icon/Font-Awesome/css/font-awesome.min.css'

Vue.use(VueResource);
Vue.http.options.emulateJSON = true;

Vue.config.productionTip = false

FastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
