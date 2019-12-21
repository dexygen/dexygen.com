// src/main.js
import App from './components/App.js';
Vue.config.devtools = true;

new Vue({
  render: h => h(App),
}).$mount(`#app`);