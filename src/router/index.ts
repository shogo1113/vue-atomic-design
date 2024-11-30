import { createRouter, createWebHistory } from 'vue-router'
import TodoPage from '@/pages/TodoPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: TodoPage,
    },
  ],
})

export default router
