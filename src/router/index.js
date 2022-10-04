import { createRouter, createWebHistory } from 'vue-router'

import InicioPage from '@/pages/InicioPage.vue'
import HotelesPage from '@/pages/Hoteles/HotelesPage.vue'
import HotelCreatePage from '@/pages/Hoteles/HotelCreatePage.vue'
import HotelDetallePage from '@/pages/Hoteles/HotelDetallePage.vue'
import HabitacionPage from '@/pages/Habitaciones/HabitacionPage.vue'
import HabTipoPage from '@/pages/Habitaciones/HabTipoPage.vue'
import HabCreatePage from '@/pages/Habitaciones/HabCreatePage.vue'
import HabEditarPage from '@/pages/Habitaciones/HabEditarPage.vue'
import AcomodacionesPage from '@/pages/AcomodacionesPage.vue'



const routes = [
  {path: '/',       name:'InicioPage', component: InicioPage},
  {path: '/hoteles', name:'HotelesPage', component: HotelesPage},
  {path: '/hotelCreate', name:'HotelCreatePage', component: HotelCreatePage},
  {path: '/hotelDetalle/:id', name:'HotelDetallePage', component: HotelDetallePage},
  {path: '/habitaciones/:id', name:'HabitacionPage', component: HabitacionPage},
  {path: '/habitacionesTipo',  name:'HabTipoPage',  component: HabTipoPage},
  {path: '/habitacionCreate/:id', name:'HabCreatePage', component: HabCreatePage},
  {path: '/habitacionesEditar/:id', name:'HabEditarPage', component: HabEditarPage},
  {path: '/acomodaciones', name:'AcomodacionesPage', component: AcomodacionesPage}
  
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router
