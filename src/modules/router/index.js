import { createRouter, createWebHashHistory } from 'vue-router'

import MyExercisesPage from '@/views/MyExercisesPage/index.vue'
import AreaListPage from '@/views/AreaListPage/index.vue'
import AreaPage from '@/views/AreaPage/index.vue'
import DevelopersSaihokenPage from '@/views/ProductsPage/Developers/SaihokenPage/index.vue'


const routes = [
  { path: '/', name:'root', component: AreaListPage },
  { path: '/areas', name:'areas', component: AreaListPage },
  { path: '/area/:id', name:'area', component: AreaPage, props: true },
  { path: '/area/:id/:project', name:'area.project', component: DevelopersSaihokenPage, props: true },
  { path: '/myexercises', name:'myexercises', component: MyExercisesPage },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
