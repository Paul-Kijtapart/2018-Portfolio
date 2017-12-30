const uuidv1 = require('uuid/v1');

/* Skill Error */
export class SkillError extends Error {
    constructor(message) {
        super(message);

        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, SkillError);
        }

        // Custom debugging information
        this.date = new Date();
    }
}

/* Skill */
export class Skill {
    constructor(skill) {

        this.pk = !skill.pk ? '' : skill.pk;
        this.id = uuidv1();
        this.name = skill.name;
        this.description = skill.description;
        this.value = skill.value;
        this.children = skill.children;
        this.icon = skill.icon;
    }

    getId() {
        return this.id;
    }

    getChildNames() {
        return this.children.map(child => child.name).join(', ');
    }

    toHighchartProgressbar() {
        return {
            title: false,
            chart: {
                type: 'bar',
            },
            credits: false,
            tooltip: false,
            legend: false,
            navigation: {
                buttonOptions: {
                    enabled: false
                }
            },
            xAxis: {
                visible: false,
            },
            yAxis: {
                visible: false,
                min: 0,
                max: 100,
            },
            series: [{
                data: [100],
                grouping: false,
                animation: false,
                enableMouseTracking: false,
                showInLegend: false,
                color: '#CFEDFB', // $blue0
                pointWidth: 40,
                borderWidth: 0,
                borderRadiusTopLeft: '4px',
                borderRadiusTopRight: '4px',
                borderRadiusBottomLeft: '4px',
                borderRadiusBottomRight: '4px',
            }, {
                enableMouseTracking: false,
                data: [this.value],
                borderRadiusBottomLeft: '4px',
                borderRadiusBottomRight: '4px',
                color: '#004471', // $blue8
                borderWidth: 0,
                pointWidth: 40,
                animation: false,
                dataLabels: {
                    enabled: true,
                    inside: true,
                    align: 'left',
                    // format: '{point.y}%',
                    format: this.description,
                    style: {
                        color: '#D0D3D6', // $black1
                        textOutline: false,
                        fontSize: '16px'
                    }
                }
            }]
        };
    }
}

export class SkillCollection {
    constructor(objs) {
        this.skillList = [];
        this.skillMap = {};

        // Load given skills to our state
        for (let obj of objs) {
            this.addSkill(new Skill(obj));
        }
    }

    addSkill(skill) {
        this.skillList.push(skill);
        this.skillMap[skill.getId()] = skill;
    }

    getSkillList() {
        return this.skillList;
    }
}