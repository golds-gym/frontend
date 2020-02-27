import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/trainers',
    name: 'Trainers',
    component: () => import('../views/Trainers.vue')
  },
  {
    path: '/lockers',
    name: 'Lockers',
    component: () => import('../views/Lockers.vue')
  },
  {
    path: '/payment',
    name: 'Payment',
    component: () => import('../views/Payment.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
