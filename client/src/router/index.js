import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.baseURL),
  routes: [
    {
      path: '/',
      name: 'register',
      component: Register
    },
  ]
})

export default router
