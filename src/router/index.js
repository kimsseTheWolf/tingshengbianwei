import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/ingame/:roundNum",
      name: "ingame pages",
      component: ()=>import("../views/InGame.vue")
    },
    {
      path: "/intro",
      name: "intro",
      component: ()=>import("../views/Intro.vue")
    }
    
  ]
})

export default router
