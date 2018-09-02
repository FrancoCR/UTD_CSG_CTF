import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from "./views/login.vue"
import SecureComponent from "./views/adminLoggedIn.vue"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: {
                name: "login"
            }
        },
        {
            path: "/login",
            name: "login",
            component: LoginComponent
        },
        {
            path: "/ghostbusters",
            name: "ghostbusters",
            component: SecureComponent
        },
        {
            path: "/adminLoggedIn",
            name: "adminLoggedIn",
            component: SecureComponent
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
           path: '/about',
           name: 'about',
           // route level code-splitting
           // this generates a separate chunk (about.[hash].js) for this route
           // which is lazy-loaded when the route is visited.
           component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
