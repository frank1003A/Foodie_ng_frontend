import { createRouter, createWebHistory } from 'vue-router'

// Define route components.
import Home from '../views/Home.vue'
import Account from '../views/Account.vue'
import Profile from '../views/Profile.vue'
import Restaurant from '../components/CreateRestaurant.vue'
import Cart from '../views/Cart.vue'
import Wallet from '../views/Wallet.vue'

//admin routes
import Login from '../views/Admin/Login.vue'
import Dashboard from '../../src/views/Admin/Dashboard.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: Wallet
  },
  {
    path: '/restaurant/account',
    name: 'CreateRestaurant',
    component: Restaurant
  },
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: Login
  },
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
