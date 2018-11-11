import Vue from 'vue'
import Router from 'vue-router'
import Halo from './components/hello.vue'
Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            { path: '/', component: Halo },
            { path: '/hello/:id', component: () => import ('./components/hello.vue')},
            { path: '/item/:id', component: () => import ('./components/Item.vue')}
        ]
    })
}