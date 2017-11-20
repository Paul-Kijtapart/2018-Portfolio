// ROOT

// Cross-browser Compatibility
import 'babel-polyfill';

// Required Libraries
import Vue from 'vue';
import VueI18n from 'vue-i18n'

// Required stylesheets
import 'element-ui/lib/theme-chalk/index.css';

// State
import store from '@/store';

// App's Components
import Hello from './Components/Hello.vue';

// Register plugins to Vue globally
Vue.use(VueI18n);

// Set up internationalization
const i18n = new VueI18n({
    locale: 'en', // default locale
    messages: require('./internationalization/translation.message.json') // translation file
});

new Vue({
    el: '#app',
    store, // Register store at the root to access it anywhere
    i18n, // make internationalization to be available to all childs
    render: h => h(Hello)
});