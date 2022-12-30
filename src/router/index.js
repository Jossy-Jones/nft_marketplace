import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import(/* webpackChunkName: "homeview" */ '../views/HomeView.vue'),
    meta: {
      title: "Home",
    }
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: ()=>import(/* webpackChunkName: "signup" */ '../views/SignUpView.vue'),
    meta: {
      title: 'Create Account'
    }
  },
  {
    path: '/connect-wallet',
    name: 'connect-wallet',
    component: ()=>import(/* webpackChunkName: "connectwallet" */ '../views/ConnectWallet.vue'),
    meta: {
      title: 'Connect Wallet'
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
