import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeMain from '../components/home/main.vue'
import RoomMain from '../components/room/main.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeMain
  },{
      path: '/room',
      name: 'Room',
      component: RoomMain
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
