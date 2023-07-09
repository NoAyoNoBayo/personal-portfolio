import { createRouter, createWebHistory } from 'vue-router'
import IntroCard from '../components/introduction/IntroCard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: IntroCard,
    },
  ]
})

export default router
