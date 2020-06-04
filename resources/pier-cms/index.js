import './bootstrap';

import router from './router';

new Vue({
  el: 'main',
  router,
  render: (h) => h('router-view')
}).$mount();