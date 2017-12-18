// ROOT

// Enable Cross-browser Compatibility
import 'babel-polyfill';

// Required Libraries
import Vue from 'vue';
import VueI18n from 'vue-i18n';

// Set up Element UI, Register Component globally
import './element-variables.scss';
import {
    Select,
    Button,
    Option,
    Tag,
    Carousel,
    CarouselItem,
} from "element-ui";

Vue.use(Select);
Vue.use(Button);
Vue.use(Option);
Vue.use(Tag);
Vue.use(Carousel);
Vue.use(CarouselItem);

// State
import store from '@/store';

// Vue-router
import router from './router';

// App's Views
import Home from './App.vue';

// Register plugins to Vue globally
Vue.use(VueI18n);

// Set up internationalization
import enLocale from 'element-ui/lib/locale/lang/en';
import thLocale from 'element-ui/lib/locale/lang/th';
import ElementLocale from 'element-ui/lib/locale'
const translationMessages = require('./internationalization/translation.message.json');
const messages = {
    en: {
        ...translationMessages.en,
        ...enLocale
    },
    th: {
        ...translationMessages.th,
        ...thLocale
    }
};
const i18n = new VueI18n({
    locale: store.state.language.language, // default locale
    messages: messages
});
ElementLocale.i18n((key, value) => i18n.t(key, value));

new Vue({
    el: '#app',
    store, // Register store at the root to access it anywhere
    router,
    i18n, // make internationalization to be available to all childs
    template: '<Home></Home>',
    components: {Home}
});