import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/Index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/index/:categoryId',
    name: 'index',
    component: Index
  },
  {
    path: '/detail/:itemId',
    name: 'detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Detail.vue')
  },
  { path: '*', redirect: '/index/cats' }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
