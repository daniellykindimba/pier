import './bootstrap';

import Chakra from '@chakra-ui/vue';

import router from './router';
import App from './App.vue';

Vue.use(Chakra);

const app = new Vue({
  el: '#app',
  // store,
  router,
  render: (h) => h(App)
}).$mount();