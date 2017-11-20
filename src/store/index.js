/* Where we assemble modules and Export the store */

// Libaries
import Vue from 'vue';
import Vuex from 'vuex';

// Root actions and getters
import * as actions from './actions';
import * as getters from './getters';

Vue.use(vuex);

const debug = process.env.NODE_ENV !== 'production';

// Export Singleton Store
export default new Vuex.Store({
    actions,
    getters,
    modules: {
        cart,
        products
    },
    strict: debug,
});