// src/main.js
// Vue.config.devtools = true;

Vue.use(VueRouter);

import App from './components/App.js';
import Home from './components/content/home.js';

const router = new VueRouter({
  base: location.href.split('dexygen.com')[1],
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Name',
    component: Home
  }]
});

new Vue({
  render: h => h(App),
  router
}).$mount(`#app`);