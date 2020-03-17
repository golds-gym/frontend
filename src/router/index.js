import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
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
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import('../views/Calendar.vue')
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(store.state.logedin)
  if (to.name !== 'Login' && !store.state.logedin) next({ name: 'Login' })
  else next()
})

export default router
