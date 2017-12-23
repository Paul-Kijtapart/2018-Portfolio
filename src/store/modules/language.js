// initial states
const state = {
    language: 'en',
    languageOptions: {
        th: {
            label: 'Th',
            value: 'th'
        },
        en: {
            label: 'en',
            value: 'en'
        }
    }
};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {

    /**
     * Set application language
     * @param {string} langAbbr - e.g. 'en' or 'th'
     */
    setLanguage (state, langAbbr) {
        state.language = langAbbr;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
