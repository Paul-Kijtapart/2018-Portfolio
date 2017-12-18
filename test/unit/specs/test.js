/* Mocha allows you to use any assertion library you wish! */

// NodeJS built-in assert module
require('babel-register');
const assert = require('chai').assert;

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});