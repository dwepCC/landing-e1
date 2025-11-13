import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Services from '../pages/Services.vue'
import Fleet from '../pages/Fleet.vue'
import Contact from '../pages/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        { path: '', name: 'home', component: Home, meta: { noTopPad: true } },
        { path: 'about', name: 'about', component: About },
        { path: 'services', name: 'services', component: Services },
        { path: 'fleet', name: 'fleet', component: Fleet },
        { path: 'contact', name: 'contact', component: Contact },
      ],
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router