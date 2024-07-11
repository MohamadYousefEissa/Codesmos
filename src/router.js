import { createRouter, createWebHistory } from 'vue-router'

import TheHeader from './components/layouts/TheHeader.vue'
import TheFooter from './components/layouts/TheFooter.vue'

import PageMain from './components/pages/PageMain.vue'

const PageHome = () => import('./components/pages/PageHome.vue')
const PageProducts = () => import('./components/pages/products/PageProducts.vue')
const PagePortfolio = () => import('./components/pages/portfolio/PagePortfolio.vue')
const PageTheProcess = () => import('./components/pages/theProcess/PageTheProcess.vue')
const PageAboutUs = () => import('./components/pages/aboutUs/PageAboutUs.vue')
const PageContactUs = () => import('./components/pages/contactUs/PageContactUs.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/Codesmos',
      components: { default: PageMain, TheHeader },
      meta: { transition: 'none' }
    },
    {
      path: '/Codesmos/Home',
      components: { default: PageHome, TheHeader, TheFooter },
      children: [{ path: 'Products', component: PageProducts }],
      meta: { transition: 'none' }
    },
    {
      path: '/Codesmos/Portfolio',
      components: { default: PagePortfolio, TheHeader, TheFooter }
    },
    {
      path: '/Codesmos/TheProcess',
      components: { default: PageTheProcess, TheHeader, TheFooter }
    },
    {
      path: '/Codesmos/AboutUs',
      components: { default: PageAboutUs, TheHeader, TheFooter }
    },
    {
      path: '/Codesmos/ContactUs',
      components: {
        default: PageContactUs,
        TheHeader,
        TheFooter
      }
    }
  ],
  scrollBehavior(to, _, savedPos) {
    if (savedPos) return savedPos
    else if (to.path.includes('/Products')) return
    return { left: 0, top: 0 }
  }
})

export default router
