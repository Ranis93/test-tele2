import { createRouter, createWebHistory } from "vue-router";
import HomePage from './views/HomePage.vue'
import PrivilegePage from './views/PrivilegePage.vue'
import TariffsPage from './views/TariffsPage.vue'
import PromotionsPage from './views/PromotionsPage.vue'
import PromotariffPage from './views/PromotariffPage.vue'
import EsimPage from './views/EsimPage.vue'
import NewPage from './views/NewPage.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: HomePage },
    {path: '/privilege', component: PrivilegePage },
    {path: '/tariffs', component: TariffsPage },
    {path: '/promotions', component: PromotionsPage },
    {path: '/promotariff', component: PromotariffPage },
    {path: '/esim', component: EsimPage },
    {path: '/new', component: NewPage }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})