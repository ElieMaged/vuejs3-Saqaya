import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import ProductDetails from '../views/ProductDetails.vue'


const routes = [
  { path: '/', name: 'MainPage', component: MainPage },

  // Dynamic route
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true,
  },

  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
