import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{
    path: '/home',
    component: () => import('../views/Home.vue'),
  }, {
    path: '/a',
    component: () => import('../views/A.vue'),
  }, {
    path: '/b',
    component: () => import('../views/B.vue')
  }]
}) 

export default router;