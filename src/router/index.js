import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Day1 from "../views/Day1.vue";
import Day2 from "../views/Day2.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component:HomeView

    },
    {
        path: '/day1',
        name: 'day1',
        component:Day1

    },
    {
        path: '/day2',
        name: 'day2',
        component:Day2

    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router




