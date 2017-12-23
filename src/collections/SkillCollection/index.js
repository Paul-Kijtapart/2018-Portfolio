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
    }

    getId() {
        return this.id;
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

    getSkillList(){
        return this.skillList;
    }
}