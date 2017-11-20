import * as types from '../mutation-types';

const state = {
    count: 0
};

// getters
const getters = {
    isCountEven: state => {
        return state.count % 2 === 0;
    }
};

// actions
const actions = {};

// mutations
const MUTATIONS = {
    [types.INCREMENT](state) {
        state.count += 1;
    },
    [types.DECREMENT](state) {
        state.count -= 1;
    }
};

export default {
    state,
    getters,
    actions,
    MUTATIONS
};