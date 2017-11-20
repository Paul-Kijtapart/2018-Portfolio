// Where we assemble modules and Export the store

// Libaries
import Vue from 'vue';
import Vuex from 'vuex';

// TODO: Root actions and getters
import * as actions from './actions';
import * as getters from './getters';

// Modules
import test from './modules/test';

// Vuex's helpers
const debug = process.env.NODE_ENV !== 'production';
import createLogger from 'vuex/dist/logger'

// Export Singleton Store
Vue.use(Vuex); // register vuex as plugins globally for the first time
export default new Vuex.Store({
    modules: {
        test
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
});