const uuidv1 = require('uuid/v1');

/* Skill Error */
export class SkillError extends Error {
    constructor(message) {
        super(message);

        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ExperienceError);
        }

        // Custom debugging information
        this.date = new Date();
    }
}

/* Skill */
export class Skill {
    constructor(skill) {

        this.pk = exp.pk ? '' : skill.pk;
        this.id = uuidv1();
        this.name = skill.name;
        this.description = skill.description;
        this.value = skill.value;
        this.children = [];
    }
}

export class SkillCollection {


}