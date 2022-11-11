import { createRouter, createWebHistory } from 'vue-router'
import mngList from '@/components/mngList/mngList.vue'
import listView from '@/components/listView/listView.vue'
import HomeView from '@/components/homeView/homeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/mng-list',
    name: 'mng-list',
    component: mngList
  },
  {
    path: '/list/:id',
    name: 'list',
    component: listView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
