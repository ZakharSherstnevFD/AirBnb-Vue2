import Vue from "vue";
import Router from 'vue-router'

Vue.use(Router)

import Home from './pages/TheHome.vue'
import HomesPage from "@/pages/HomesPage.vue";
import ExperiencesPage from '@/pages/ExperiencesPage.vue'
import RestaurantsPage from '@/pages/RestaurantsPage.vue'

import NoteFound from './pages/TheNotFound.vue'


export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/homesPage',
      name: 'homesPage',
      component: HomesPage,
    },
    {
      path: '/experiencesPage',
      name: 'experiencesPage',
      component: ExperiencesPage,
    },
    {
      path: '/restaurantsPage',
      name: 'restaurantsPage',
      component: RestaurantsPage,
    },
    {
      path: '*',
      name: 'noteFound',
      component: NoteFound,
    }
  ]
})
