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
    /**
     * Return the skill with the given id
     * @param state {Object}
     * @return  skill {Object} with given id if exists
     *          otherwise, undefined
     */
    getSkillById: (state) => (id) => {
        return state.skillMap[id];
    },

    skillInFocusHighchart: state => {
        let skillInFocus = state.skillInFocus;

        return {
            chart: {
                polar: true,
                type: 'line'
            },
            title: {
                text: skillInFocus.name,
            },
            pane: {
                size: '80%'
            },
            xAxis: {
                categories: skillInFocus.children.map(skill => {
                    return skill.name;
                }),
                tickmarkPlacement: 'on',
                lineWidth: 0
            },
            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 0
            },
            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}%</b><br/>'
            },
            legend: {
                visible: false,
                align: 'right',
                verticalAlign: 'top',
                y: 70,
                layout: 'vertical'
            },
            series: [{
                showInLegend: false,
                name: 'Grade',
                data: skillInFocus.children.map(skill => {
                    return skill.value
                }),
                pointPlacement: 'on'
            }]
        };
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
    },

    /**
     * Set the given skill as focus
     * @param state
     * @param skill
     */
    focusSkill(state, skill) {
        state.skillInFocus = skill;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};