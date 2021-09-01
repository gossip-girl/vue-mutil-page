import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { 
        path: '/', 
        name: 'home', 
        component: ()=>import('./views/Home.vue'), 
        meta: { title: '页面2首页' }
    },
    { 
        path: '/pageTwoInner', 
        name: 'pageTwoInner', 
        component: ()=>import('./views/pageTwoInner.vue'), 
        meta: { title: '页面2' }}
]

export default new VueRouter({
    routes: routes
})