import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Project from '../pages/Project.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/project/:id', name: 'project', component: Project, props: true },
  ],
})

export default router