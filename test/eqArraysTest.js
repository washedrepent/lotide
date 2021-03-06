const {expect} = require('chai');
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
    it('returns true for [1, 2, 3] and [1, 2, 3]', () => {
        const output = eqArrays([1, 2, 3], [1, 2, 3]);
        expect(output).to.equal(true);
    });

    it('returns false for [1, 2, 3] and [1, 2, 4]', () => {
        const output = eqArrays([1, 2, 3], [1, 2, 4]);
        expect(output).to.equal(false);
    });

    it('returns true for ["1", "2", "3"] and ["1", "2", "3"]', () => {
        const output = eqArrays(["1", "2", "3"], ["1", "2", "3"]);
        expect(output).to.equal(true);
    });

    it('returns false for ["1", "2", "3"] and ["1", "2", "4"]', () => {
        const output = eqArrays(["1", "2", "3"], ["1", "2", "4"]);
        expect(output).to.equal(false);
    });

    it('returns true for [] and []', () => {
        const output = eqArrays([], []);
        expect(output).to.equal(true);
    });
});