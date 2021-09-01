import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
		path: '/',
        component: ()=>import('./Home.vue'), 
		meta: {
			title: '项目主入口',
		},
		redirect: '/homeIndex',
	},
    { 
        path: '/homeIndex', 
        name: 'home', 
        component: ()=>import('./Home.vue'), 
        meta: { title: '' }
    },
    { 
        path: '/mainInner', 
        name: 'mainInner', 
        component: ()=>import('./mainInner.vue'), 
        meta: { title: '' }
    },
]

export default new VueRouter({
    routes: routes
})