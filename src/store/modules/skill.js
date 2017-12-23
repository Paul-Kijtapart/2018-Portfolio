import * as types from '../mutation-types';

// initial data
import {
    Skill
} from '@/collections/SkillCollection';

const state = {
    skillList: [],
    skillMap: {},

    // focus
    skillInFocus: undefined
};

// getters
const getters = {

    getSkillList(state) {
        return state.skillList;
    },

    /**
     * Return the skill with the given id
     * @param state {Object}
     * @return  skill {Object} with given id if exists
     *          otherwise, undefined
     */
    getSkillById: (state) => (id) => {
        return state.skillMap[id];
    }
};

// actions
const actions = {
    /**
     * Load list of objects to Skill instances followed by updating states
     * @param state {Object} - local state (not the global)
     * @param objs {Object} from the server
     */
    loadSkills({state, commit, rootState}, objs) {
        for (let obj of objs) {
            commit({
                type: 'addSkill',
                skill: new Skill(obj)
            });
        }
    }
};

// mutations
const mutations = {

    /**
     * Add skills to both skillList and skillMap
     * @param state {Object} - local state (not the global)
     * @param skill {Skill}
     */
    addSkill(state, {skill}) {
        state.skillList.push(skill)
        state.skillMap[skill.getId()] = skill;
    },

    clearSkills(state) {
        state.skillList = [];
        state.skillMap = {};
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};