import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeMain from '../components/home/main.vue'
import MainContent from '../components/common/MainContent.vue'

import RoomList from '../components/room/list.vue'
import RoomAdd from '../components/room/add.vue'
import RoomModify from '../components/room/modify.vue'

import RoomAddType from '../components/room/addType.vue'
import RoomModifyType from '../components/room/modifyType.vue'
import RoomListType from '../components/room/listType.vue'

import AddAndModifyGuest from '../components/guest/addAndModify.vue'
import GuestList from '../components/guest/list.vue'

import OrderAdd from '../components/order/add.vue'
import OrderList from '../components/order/list.vue'

import AdminLogin from '../components/admin/login.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {
            guestAvaliable: true,  // 添加该字段，表示进入这个路由是不需要登录的
        },
        component: HomeMain
    },
    {
        path: '/room',
        component: MainContent,
        children: [
            { path: '', redirect: 'list' },
            { path: 'list', component: RoomList },
            {
                path: 'add', component: RoomAdd,
                children: [{ path: 'addType', component: RoomAddType }, { path: 'listType', component: RoomListType }]
            },
            {
                path: 'modify/:roomId', name: 'ModifyRoom', component: RoomModify,
                props: (route) => { console.log(route); return { roomId: parseInt(route.params.roomId) } }
            },
            { path: 'addType', component: RoomAddType },
            {
                path: 'modifyType/:typeId', name: 'ModifyType', component: RoomModifyType,
                props: (route) => { console.log(route); return { typeId: parseInt(route.params.typeId) } }
            },
            { path: 'listType', component: RoomListType }
        ]
    },
    {
        path: '/guest',
        component: MainContent,
        children: [
            { path: '', redirect: 'list' },
            { path: 'list', component: GuestList },
            {
                path: 'modify/:idCard?', name: "AddAndModifyGuest", component: AddAndModifyGuest,
                props: (route) => { console.log(route); return { idCard: route.params.idCard } }
            }
        ]
    },
    {
        path: '/order',
        component: MainContent,
        children: [
            { path: '', redirect: 'list' },
            { path: 'list', component: OrderList },
            {
                path: 'add/:roomId', name:"OrderAdd", component: OrderAdd,
                props: (route) => { console.log(route); return { roomId: parseInt(route.params.roomId) } }
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            guestAvaliable: true,  // 添加该字段，表示进入这个路由是不需要登录的
        },
        component: AdminLogin
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    console.log(to);
    if (to.meta.guestAvaliable) {  // 判断该路由是否需要登录权限
        console.log("guest avaliable")
        next();
    }
    else {
        if (localStorage.getItem("authorize")) {  // 通过vuex state获取当前的token是否存在
            console.log("authorized")
            next();
        }
        else {
            console.log("to login")
            next({
                path: '/login',
                query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
})

export default router
