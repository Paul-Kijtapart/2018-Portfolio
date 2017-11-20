/* ROOT script */

// Cross-browser Compatibility
import 'babel-polyfill';

// Required Libraries
import Vue from 'vue';

// Required stylesheets
import 'element-ui/lib/theme-chalk/index.css';

// State
import store from '@/store';

// App's Components
import Hello from './Components/Hello.vue';

new Vue({
    el: '#app',
    store, // Register store at the root to access it anywhere
    render: h => h(Hello)
});