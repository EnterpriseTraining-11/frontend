import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeMain from '../components/home/main.vue'
import RoomMain from '../components/room/main.vue'
import RoomList from '../components/room/list.vue'
import RoomAdd from '../components/room/add.vue'
import RoomModify from '../components/room/modify.vue'

import RoomAddType from '../components/room/addType.vue'
import RoomModifyType from '../components/room/modifyType.vue'
import RoomListType from '../components/room/listType.vue'

import AddAndModifyGuest from '../components/guest/addAndModify.vue'
import GuestList from '../components/guest/list.vue'

import AdminLogin from '../components/admin/login.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeMain
    },
    {
        path: '/room',
        name: 'Room',
        component: RoomMain,
        children: [
            { path: '', redirect: 'list' },
            { path: 'list', component: RoomList },
            {
                path: 'add', component: RoomAdd,
                children: [{ path: 'addType', component: RoomAddType }, { path: 'listType', component: RoomListType }]
            },
            {
                path: 'modify', name: 'ModifyRoom', component: RoomModify,
                props: true
            },
            { path: 'addType', component: RoomAddType },
            {
                path: 'modifyType/:typeId', name: 'ModifyType', component: RoomModifyType,
                props: true
            },
            { path: 'listType', component: RoomListType }
        ]
    },
    {
        path: '/guest',
        name: 'Guest',
        component: RoomMain,
        children: [
            { path: '', redirect: 'list' },
            { path: 'list', component: GuestList },
            { path: 'addAndModify', component: AddAndModifyGuest }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: AdminLogin
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
