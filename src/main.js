import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Routes from './routes';
import store from './store/index';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  // mode: 'history',
  routes: Routes,
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
