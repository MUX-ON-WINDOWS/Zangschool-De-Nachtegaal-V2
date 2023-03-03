import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/docenten',
      name: 'Docenten',
      component: () => import('../views/Docenten.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/zanglessen',
      name: 'zanglessen',
      component: () => import('../views/ZangLessen.vue')
    },
    {
      path: '/producten',
      name: 'producten',
      component: () => import('../views/Producten.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    }
  ]
})

console.log('router', router)

export default router
