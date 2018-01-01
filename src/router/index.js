import Vue from 'vue'
import Router from 'vue-router'

// Views
import {
    ResumeView,
    AboutView,
    ContactView
} from '@/views';

// Register router globally
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: ResumeView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/resume',
            name: 'resume',
            component: ResumeView
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactView
        },
    ]
});
