import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from '@/views/HomePage/index.vue'
import AreaListPage from '@/views/AreaListPage/index.vue'
import AreaPage from '@/views/AreaPage/index.vue'
import DevelopersSaihokenPage from '@/views/ProductsPage/Developers/SaihokenPage/index.vue'

const routes = [
  { path: '/', name:'root', component: HomePage },
  { path: '/areas', name:'areas', component: AreaListPage },
  { path: '/area/:id', name:'area', component: AreaPage, props: true },
  { path: '/area/:id/:project', name:'area.project', component: DevelopersSaihokenPage, props: true },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
