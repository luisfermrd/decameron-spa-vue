import { createRouter, createWebHistory } from 'vue-router'

import InicioPage from '@/pages/InicioPage.vue'
import HotelesPage from '@/pages/Hoteles/HotelesPage.vue'
import HabTipoPage from '@/pages/Habitaciones/HabTipoPage.vue'
import AcomodacionesPage from '@/pages/AcomodacionesPage.vue'
import HotelCreatePage from '@/pages/Hoteles/HotelCreatePage.vue'


const routes = [
  {path: '/',       name:'InicioPage', component: InicioPage},
  {path: '/hoteles', name:'HotelesPage', component: HotelesPage},
  {path: '/habitacionesTipo',  name:'HabTipoPage',  component: HabTipoPage},
  {path: '/acomodaciones', name:'AcomodacionesPage', component: AcomodacionesPage},
  {path: '/hotelCreate', name:'HotelCreatePage', component: HotelCreatePage}
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router
