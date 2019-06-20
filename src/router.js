import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Upcoming from './views/Upcoming.vue'
import Popular from './views/Popular.vue'
import Movie from './views/Movie.vue'
import Person from './views/Person.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/upcoming',
      name: 'Upcoming',
      component: Upcoming
    },
    {
      path: '/popular',
      name: 'Popular',
      component: Popular
    },
    {
      path: '/movie/:id',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/person/:id',
      name: 'Person',
      component: Person
    }
  ]
})
