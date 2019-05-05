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
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/train/:workout?',
      name: 'train',
      component: () => import(/* webpackChunkName: "workout" */ './views/Train.vue')
    },
    {
      path: '/workouts',
      name: 'workouts',
      component: () => import(/* webpackChunkName: "workouts" */ './views/Workouts.vue')
    },
    {
      path: '/workouts/create',
      name: 'new-workout',
      component: () => import(/* webpackChunkName: "workouts" */ './views/Workouts.vue'),
      props: { create: true }
    }
  ]
})
