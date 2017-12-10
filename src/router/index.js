import Vue from 'vue'
import Router from 'vue-router'

// Views
import {
    Home,
} from '@/views';

// Register router globally
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }
    ]
});
