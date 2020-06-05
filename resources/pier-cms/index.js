import './bootstrap';

import router from './router';
import Loader from './UI/components/Loader';

Vue.component('Loader', Loader);

new Vue({
  el: 'main',
  router,
  render: (h) => h('router-view')
}).$mount();