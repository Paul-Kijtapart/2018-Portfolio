// ROOT

// Enable Cross-browser Compatibility
import 'babel-polyfill';

// Required Libraries
import Vue from 'vue';
import VueI18n from 'vue-i18n'

// Required stylesheets
import 'element-ui/lib/theme-chalk/index.css';

// State
import store from '@/store';

// App's components

// App's Views
import Home from './views/Home.vue';

// Register plugins to Vue globally
Vue.use(VueI18n);

// Set up internationalization
const i18n = new VueI18n({
    locale: 'th', // default locale
    messages: require('./internationalization/translation.message.json') // translation file
});

new Vue({
    el: '#app',
    store, // Register store at the root to access it anywhere
    i18n, // make internationalization to be available to all childs
    render: h => h(Home)
});