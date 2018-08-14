import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/class',
      name: 'class',
      component: () => import('./views/Class.vue')
    },
    {
      path:'/event',
      name: 'event',
      component: () => import('./views/Event.vue')
    },
    {
      path:'/form',
      name: 'form',
      component: () => import('./views/FormStudy.vue')
    },
    {
      path:'/delegate',
      name: 'delegate',
      component: () => import('./views/Delegate.vue')
    },
    {
      path:'/slot',
      name: 'slot',
      component: () => import('./views/slot/Parent.vue')
    },
    {
      path:'/myalert',
      name: 'myalert',
      component: () => import('./views/MyAlert.vue')
    },
    {
      path:'/vuex',
      name: 'vuex',
      component: () => import('./views/Vuex.vue')
    }
  ]
})
