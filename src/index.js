import Vue from 'vue';

import Hello from './Components/Hello.vue';

new Vue({
    el: '#app',
    render: h => h(Hello)
});