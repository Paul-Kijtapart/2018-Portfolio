const uuidv1 = require('uuid/v1');

class Course {
    constructor(obj) {
        this.name = obj.name;
        this.id = obj.name.trim().replace(' ', '-');
        this.type = obj.type;
        this.value = obj.value;
    }

    getId() {
        return this.id;
    }
}

class Education {
    constructor(obj) {
        this.school = obj.school;
        this.id = obj.school.trim().replace(' ', '-');
        this.description = obj.description;
        this.alias = obj.alias;
        this.courses = [];

        // ensure we're loading courses
        for (let course of obj.courses) {
            if (!(course instanceof Course)) {
                this.courses.push(new Course(course));
            }
            else {
                this.courses.push(course);
            }
        }
    }

    getId() {
        return this.id;
    }

    toHighChart() {
        return {
            chart: {
                polar: true,
                type: 'line'
            },
            title: {
                text: this.description,
                style: {
                    fontSize: "24px",
                    color: "#303336" // $black8
                }
            },
            pane: {
                size: '80%'
            },
            xAxis: {
                categories: this.courses.map(course => {
                    return course.name;
                }),
                tickmarkPlacement: 'on',
                lineWidth: 0,
                labels: {
                    style: {
                        fontSize: "16px"
                    }
                }
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
                data: this.courses.map(course => {
                    return course.value
                }),
                pointPlacement: 'on'
            }]
        };
    }
}

const state = {
    educationList: [],
    educationMap: {},
};

// getters
const getters = {
    spiderWebEducation(state) {
        return state.educationList.map(education => {
            return {
                ...education,
                highchart: education.toHighChart()
            }
        });
    }
};

// actions
const actions = {
    loadEducation({state, commit, rootState}, objs) {
        for (let obj of objs) {
            commit({
                type: 'addEducation',
                education: new Education(obj)
            })
        }
    }
};

// mutations
const mutations = {

    addEducation(state, {education}) {
        state.educationList.push(education);
        state.educationMap[education.getId()] = education;
    },

    clearEducation(state) {
        state.educationList = [];
        state.educationMap = {};
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};