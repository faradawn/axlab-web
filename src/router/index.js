import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '../components/Homepage'
import About from '../components/About'
import PublishedWorks from '../components/PublishedWorks'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      name: 'Home',
      component: Homepage
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/publishedworks',
      component: PublishedWorks,
    },
  ],
  mode: "history"
})