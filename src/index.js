/* ROOT script */

// Required Libraries
import Vue from 'vue';

// Required stylesheets
import 'element-ui/lib/theme-chalk/index.css';

// App's Components
import Hello from './Components/Hello.vue';

new Vue({
    el: '#app',
    render: h => h(Hello)
});