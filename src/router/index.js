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
    path: '/rankings',
    name: 'rankings',
    component: ()=>import(/* webpackChunkName: "rankings" */ '../views/Rankings.vue'),
    meta: {
      title: 'Rankings'
    }
  },
  {
    path: '/marketplace',
    name: 'marketplace',
    component: ()=>import(/* webpackChunkName: "rankings" */ '../views/Marketplace.vue'),
    meta: {
      title: 'Marketplace'
    }
  },
  {
    path: '/artist-page',
    name: 'artist-page',
    component: ()=>import(/* webpackChunkName: "artist-page" */ '../views/ArtistPage.vue'),
    meta: {
      title: 'Artist Page'
    }
  },
  {
    path: '/nft-page',
    name: 'nft-page',
    component: ()=>import(/* webpackChunkName: "nft-page" */ '../views/NftPage.vue'),
    meta: {
      title: 'NFT Page'
    }
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
