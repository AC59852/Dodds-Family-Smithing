import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/products/:product',
    name: 'products',
    component: ProductsView,
    // check if params is valid
    beforeEnter: (to, from, next) => {
      if (to.params.product === 'swords') {
        next()
      } else {
        // hit route /404
        next({ name: '404' })
      }
    }
  },

  // redirect to 404 if no route is matched
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: '404' }
  },

  // 404 if no route is matched
  {
    path: '/404',
    name: '404',
    component: () => import('../views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }

    return { top: 0, behavior: 'instant' }
  },
  routes
})

export default router
