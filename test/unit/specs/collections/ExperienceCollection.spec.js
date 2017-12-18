// Libraries
const expect = require('chai').expect;
const moment = require('moment-timezone');

// App
import {
    Experience,
    WebExperience,
    AndroidExperience,
    ExperienceAdapter,
    ExperienceError,
    ExperienceCollections
} from '../../../../src/collections/ExperienceCollection';

describe('Experience', function () {
    before(function () { // runs before all tests in this block
        // Update libraries
        moment.tz.setDefault(moment.tz.guess());

        // Expected final format for exp
        this.hackathonWebExp = {
            pk: 1,
            name: "MapViz",
            type: "web",
            eventType: "hackathon",
            startDate: 1513053711,
            endDate: 1513485019,
            timezone: "US/PACIFIC",
            url: "",
            // list of image URL to fetch (GET)
            images: [
                {pk: 1, name: "", url: "mapViz1.experience.png"},
                {pk: 2, name: "", url: "mapViz2.experience.png"},
            ],
            // list of collaborator to fetch (GET)
            collaborators: [
                {
                    pk: 1,
                    name: "Daniel Lim",
                    linkedin: ""
                },
                {
                    pk: 2,
                    name: "Napon Taratan",
                    linkedin: ""
                }
            ],
            // list of languages to fetch (GET)
            language: [
                {pk: 1, name: "Python",},
                {pk: 2, name: "Django"},
                {pk: 3, name: "ReactJs"},
                {pk: 4, name: "Sass"},
                {pk: 5, name: "PostgreSQL"},
                {pk: 6, name: "LeafletJS"},
            ],
            // list of responsibilites to fetch (GET)
            responsibilities: [
                {pk: 1, description: "Won 2nd place at Open Data Hack-a-thon #HackOurCity."},
                {
                    pk: 2,
                    description: "Contributed to aggregating dataset, parsing dataset, creating corresponding models and loading those data to a PostgreSQL database."
                },
                {pk: 3, description: "Wrote queries to associate Foreign and Primary Keys between tables."},
                {pk: 4, description: "Used LeafletJS to render a Choropleth map based on scoring function."},
            ]
        };
        this.persoanlWebExp = {
            pk: 2,
            name: "Shopping Web",
            type: "web",
            eventType: "personal",
            startDate: 1513053711,
            endDate: 1513485019,
            timezone: "",
            url: "",
            // list of image URL to fetch (GET)
            images: [
                {pk: 3, name: "", url: "shopping1.experience.png"},
                {pk: 4, name: "", url: "shopping2.experience.png"},
                {pk: 5, name: "", url: "shopping3.experience.png"},
                {pk: 6, name: "", url: "shopping4.experience.png"},
                {pk: 7, name: "", url: "shopping5.experience.png"},
            ],
            // list of collaborator to fetch (GET)
            collaborators: [],
            // list of languages to fetch (GET)
            language: [
                {pk: 8, name: "NodeJS",},
                {pk: 9, name: "ExpressJS",},
                {pk: 3, name: "ReactJS",},
                {pk: 4, name: "Sass"},
                {pk: 10, name: "MongoDB"},
            ],
            // list of responsibilites to fetch (GET)
            responsibilities: [
                {
                    pk: 5,
                    description: "Built a web app that users can purchase listed items and store orders in MongoDB"
                },
                {pk: 6, description: "Established session between client and server using express-session module."},
                {pk: 7, description: "Implemented server-side authentication using passport and bCrypt modules."},
            ]
        };
        this.androidExp = {
            pk: 3,
            name: "Vibernate 2",
            type: "android",
            eventType: "volunteer",
            startDate: 1513053711,
            endDate: 1513485019,
            timezone: "",
            url: "https://vivid-torch-5902.firebaseapp.com",
            // list of image URL to fetch (GET)
            images: [
                {pk: 8, name: "", url: "vibernate1.experience.png"},
                {pk: 9, name: "", url: "vibernate2.experience.png"},
                {pk: 10, name: "", url: "vibernate3.experience.png"},
                {pk: 11, name: "", url: "vibernate4.experience.png"},
                {pk: 12, name: "", url: "vibernate5.experience.png"},
            ],
            // list of collaborator to fetch (GET)
            collaborators: [
                {
                    pk: 1,
                    name: "Daniel Lim",
                    linkedin: ""
                },
                {
                    pk: 2,
                    name: "Napon Taratan",
                    linkedin: ""
                }
            ],
            // list of languages to fetch (GET)
            language: [
                {pk: 11, name: "java"},
                {pk: 12, name: "android"}
            ],
            // list of responsibilites to fetch (GET)
            responsibilities: [
                {pk: 8, description: "Built a page displaying all created Vibernate event in list format."},
                {pk: 9, description: "Created the Front-end based on the designed's requirements."},
                {
                    pk: 10,
                    description: "Ensured that all user's actions on the list-view page reflect on the models immediately."
                }
            ]
        };
    });

    after(function () {
        // runs after all tests in this block
    });

    beforeEach(function () {
        // runs before each test in this block
    });

    afterEach(function () {
        // runs after each test in this block
    });

    // test cases
    it('create Experience should throw error.', function (done) {
        try {
            new Experience();
            done(new Error('create Experience fails'));
        }
        catch (err) {
            done();
        }
    });

    it('create subclasses of Experience should pass.', function (done) {
        try {
            let w1 = new WebExperience(this.hackathonWebExp);
            let w2 = new WebExperience(this.persoanlWebExp);
            let a1 = new AndroidExperience(this.androidExp);

            done();
        }
        catch (err) {
            done(err);
        }
    });

    it('test if instances of WebExperience have default fields', function () {
        let w1 = new WebExperience(this.hackathonWebExp);

        expect(w1.pk).to.equal(this.hackathonWebExp.pk);
        expect(w1.name).to.equal(this.hackathonWebExp.name);
        expect(w1.eventType).to.equal(this.hackathonWebExp.eventType);
        expect(w1.startDate).to.equal(this.hackathonWebExp.startDate);
        expect(w1.endDate).to.equal(this.hackathonWebExp.endDate);
        expect(w1.timezone).to.equal(this.hackathonWebExp.timezone);
        expect(w1.images).to.equal(this.hackathonWebExp.images);
        expect(w1.collaborators).to.equal(this.hackathonWebExp.collaborators);
        expect(w1.language).to.equal(this.hackathonWebExp.language);
        expect(w1.responsibilities).to.equal(this.hackathonWebExp.responsibilities);
    });

    it('test if instances of AndroidExperience have default fields', function () {
        let a1 = new WebExperience(this.androidExp);

        expect(a1.pk).to.equal(this.androidExp.pk);
        expect(a1.name).to.equal(this.androidExp.name);
        expect(a1.eventType).to.equal(this.androidExp.eventType);
        expect(a1.startDate).to.equal(this.androidExp.startDate);
        expect(a1.endDate).to.equal(this.androidExp.endDate);
        expect(a1.timezone).to.equal(this.androidExp.timezone);
        expect(a1.images).to.equal(this.androidExp.images);
        expect(a1.collaborators).to.equal(this.androidExp.collaborators);
        expect(a1.language).to.equal(this.androidExp.language);
        expect(a1.responsibilities).to.equal(this.androidExp.responsibilities);
    });

    it('test toString of all Experience subclasses', function () {
    });

    it('ExperienceAdapter', function () {
        expect(ExperienceAdapter.createExperience(this.hackathonWebExp))
            .to.be.an.instanceof(WebExperience);
        expect(ExperienceAdapter.createExperience(this.persoanlWebExp))
            .to.be.an.instanceof(WebExperience);
        expect(ExperienceAdapter.createExperience(this.androidExp))
            .to.be.an.instanceof(AndroidExperience);
    });

    it('ExperienceCollections', function () {
        let experiences = new ExperienceCollections(
            [
                this.hackathonWebExp,
                this.persoanlWebExp,
                this.androidExp
            ]);

        expect(experiences.count()).to.equal(3);
    });
});
