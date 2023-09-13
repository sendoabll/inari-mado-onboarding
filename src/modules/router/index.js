import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from '@/views/HomePage/index.vue'
import ProductsPage from '@/views/ProductsPage/index.vue'
import DevelopersSaihokenPage from '@/views/ProductsPage/Developers/SaihokenPage/index.vue'

const routes = [
  { path: '/', name:'root', component: HomePage },
  { path: '/products', name:'products', component: ProductsPage },
  { path: '/products/dev/saihoken', name:'products.developers.saihoken', component: DevelopersSaihokenPage },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
