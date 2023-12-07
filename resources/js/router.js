import { createRouter, createWebHistory } from 'vue-router';

import SigninComponent from './components/SigninComponent.vue';
import ComponentTwo from './components/ComponentTwo.vue';
import ComponentThree from './components/ComponentThree.vue';
import ComponentFour from './components/ComponentFour.vue';
import ComponentFive from './components/ComponentFive.vue';
import ComponentSix from './components/ComponentSix.vue';
import ComponentSeven from './components/ComponentSeven.vue';
import ComponentEight from './components/ComponentEight.vue';
import ComponentNine from './components/ComponentNine.vue';
import ComponentTen from './components/ComponentTen.vue';
import ComponentEleven from './components/ComponentEleven.vue';

const routes = [
    {
        path: '/signIn',
        component: SigninComponent,
    },
    {
        path: '/second',
        component: ComponentTwo,
    },
    {
        path: '/three',
        component: ComponentThree,
    },
    {
        path: '/four',
        component: ComponentFour,
    },
    {
        path: '/five',
        component: ComponentFive,
    },
    {
        path: '/six',
        component: ComponentSix,
    },
    {
        path: '/seven',
        component: ComponentSeven,
    },
    {
        path: '/eight',
        component: ComponentEight,
    },
    {
        path: '/nine',
        component: ComponentNine,
    },
    {
        path: '/ten',
        component: ComponentTen,
    },
    {
        path: '/eleven',
        component: ComponentEleven,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
