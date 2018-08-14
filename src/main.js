import Vue from 'vue'
import App from './App.vue'
import router from './router'

import myAlert from './assets/js/myAlert';
Vue.use(myAlert);
import messagebox from './assets/js/messagebox';
Vue.use(messagebox);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
