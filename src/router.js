import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Store',
        component: () => import ('./views/Store.vue'),
        
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () => import ('./views/Cart.vue')
    },
    {
        path: "/products/:id",
        name: "ProductDetail",
        component: () => import ('./views/ProductDetails.vue'),
        props: true,
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('./views/Home.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router