const {expect} = require('chai');
const assertArraysEqual = require('../assertArraysEqual');

describe('#assertArraysEqual', () => {
    it('returns true for [1, 2, 3] and [1, 2, 3]', () => {
        const output = assertArraysEqual([1, 2, 3], [1, 2, 3]);
        expect(output).to.equal(true);
    });

    it('returns false for [1, 2, 3] and [1, 2, 4]', () => {
        const output = assertArraysEqual([1, 2, 3], [1, 2, 4]);
        expect(output).to.equal(false);
    });

    it('returns true for ["1", "2", "3"] and ["1", "2", "3"]', () => {
        const output = assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
        expect(output).to.equal(true);
    });

    it('returns false for ["1", "2", "3"] and ["1", "2", "4"]', () => {
        const output = assertArraysEqual(["1", "2", "3"], ["1", "2", "4"]);
        expect(output).to.equal(false);
    });

    it('returns true for [] and []', () => {
        const output = assertArraysEqual([], []);
        expect(output).to.equal(true);
    });

});

