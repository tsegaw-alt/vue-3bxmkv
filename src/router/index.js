import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const parseProps = (r) => ({ id: parseInt(r.params.id) });

const routes = [
  {
    path: '/',
    name: '',
  },
  {
    path: '/events',
    name: 'Events',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/events.vue'),
  },
  {
    path: '/events/:id',
    name: 'event-detail',
    // props: true,
    props: parseProps,
    component: () =>
      import(
        /* webpackChunkName: "bundle.bookingevents" */ '../views/event-detail.vue'
      ),
  },
  {
    path: '/help',
    name: '',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/logout',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
