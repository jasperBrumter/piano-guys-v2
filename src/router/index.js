import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';
import Home from '../views/Home.vue';
// import * as Text from '../locales/en.json';

Vue.use(VueRouter);
Vue.use(Meta, {
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  ssrAttribute: 'data-vue-meta-server-rendered',
  tagIDKeyName: 'vmid',
  refreshOnceOnNavigation: true,
});

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/gallery',
    name: 'gallery',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/gallery/index.vue'),
  },
  {
    path: '/restoration',
    name: 'restoration',
    component: () => import(/* webpackChunkName: "about" */ '../views/Restoration.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/contact.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
