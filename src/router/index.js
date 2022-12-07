import { createRouter, createWebHistory } from 'vue-router'
import mngList from '@/components/mngList/mngList.vue'
import listView from '@/components/listView/listView.vue'
import HomeView from '@/components/homeView/homeView.vue'
import loginView from '@/components/loginView/loginView.vue'


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
  },
  {
    path: '/login',
    name: 'login',
    component: loginView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
