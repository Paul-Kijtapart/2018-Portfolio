const uuidv1 = require('uuid/v1');

/* Experience Error */
export class ExperienceError extends Error {
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

/* Experience */
export class Experience {
    // This should work as abstract class

    constructor(exp) {
        this.pk = !exp.pk ? '' : exp.pk;
        this.id = uuidv1();
        this.name = exp.name;
        this.eventType = exp.eventType;
        this.start = exp.start;
        this.end = exp.end;
        this.timezone = exp.timezone;
        this.images = exp.images;
        this.collaborators = exp.collaborators;
        this.languages = exp.languages;
        this.roles = exp.roles;
        this.url = exp.url;
    }

    getId() {
        return this.id;
    }

    toString() {
        return JSON.stringify(this);
    }

    getTimeframe(pattern="MMM-YYYY") {
        return moment.tz(this.start, this.timezone).format(pattern) + ' to ' + moment(this.end).format(pattern);
    }
}

/* Experience Adapter */
export class ExperienceAdapter {
    static createExperience(exp) {
        return new Experience(exp);
    }
}

/* Experience Collection */
export class ExperienceCollection {
    /**
     *
     * @param experiences {Object}
     */
    constructor(experiences) {
        this.experienceList = [];
        this.experienceMap = {};

        // Load given experiences to our state
        for (let exp of experiences) {
            this.addExperience(ExperienceAdapter.createExperience(exp));
        }
    }

    getExpList() {
        return this.experienceList;
    }

    addExperience(exp) {
        this.experienceList.push(exp);
        this.experienceMap[exp.getId()] = exp;
    }

    count() {
        return this.experienceList.length;
    }
}