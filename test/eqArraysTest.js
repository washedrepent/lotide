const {expect} = require('chai');
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

describe('#assertEqual', () => {
    it('returns true for [1, 2, 3] and [1, 2, 3]', () => {
        const output = assertEqual([1, 2, 3], [1, 2, 3]);
        expect(output).to.equal(true);
    });

    it('returns false for [1, 2, 3] and [1, 2, 4]', () => {
        const output = assertEqual([1, 2, 3], [1, 2, 4]);
        expect(output).to.equal(false);
    });

    it('returns true for ["1", "2", "3"] and ["1", "2", "3"]', () => {
        const output = assertEqual(["1", "2", "3"], ["1", "2", "3"]);
        expect(output).to.equal(true);
    });

    it('returns false for ["1", "2", "3"] and ["1", "2", "4"]', () => {
        const output = assertEqual(["1", "2", "3"], ["1", "2", "4"]);
        expect(output).to.equal(false);
    });

});