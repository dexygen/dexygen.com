// Vue.config.devtools = true;

Vue.use(VueRouter);

import App from './components/App.js';
import Home from './components/content/home.js';
import About from './components/content/about.js';

const router = new VueRouter({
  base: location.pathname,
  mode: 'history',
  routes: [{
    path: '/', name: 'Name', component: Home, children: [{
      path: 'about',
      name: 'About',
      component: About      
    }]
  }]
});

new Vue({
  render: h => h(App),
  router
}).$mount(`#app`);