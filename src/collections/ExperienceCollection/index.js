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
        if (new.target === Experience) {
            throw new ExperienceError('Cannot construct Experience instance directly');
        }


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
    }

    getId() {
        return this.id;
    }

    toString() {
        return JSON.stringify(this);
    }
}
export class WebExperience extends Experience {
    constructor(exp) {
        super(exp);
    }
}
export class AndroidExperience extends Experience {
    constructor(exp) {
        super(exp);
    }
}

/* Experience Adapter */
export class ExperienceAdapter {
    static createExperience(exp) {
        switch (exp.type) {
            case 'web':
                return new WebExperience(exp);
            case 'android':
                return new AndroidExperience(exp);
            default:
                throw new ExperienceError('Invalid experience type at creation' + exp.type);
        }
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