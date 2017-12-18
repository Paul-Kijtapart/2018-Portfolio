/* Experiment with moment Js */
require('babel-register');
const expect = require('chai').expect;
const moment = require('moment-timezone');


describe('moment', function () {
    // moment js with no set timezone

    it('expect moment to have timezone', function () {
        expect(moment.tz.names()).to.be.lengthOf.above(0);
    });

    it('moment guess should match browser timezone', function () {
        expect(moment.tz.guess()).to.equal('America/Vancouver');
    });

    it('expect US/Pacific to exists in moment', function () {
        expect(moment.tz.names()).to.include('America/Vancouver');
    });
});