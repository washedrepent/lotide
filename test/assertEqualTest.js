const {expect} = require('chai');
const assertEqual = require('../assertEqual');

describe('#assertEqual', () => {
    it('returns true for [1, 2, 3] and [1, 2, 3]', () => {
        const output = assertEqual([1, 2, 3], [1, 2, 3]);
        expect(output).to.equal(true);
    });

    it('returns false for [1, 2, 3] and [1, 2, 4]', () => {
        const output = assertEqual([1, 2, 3], [1, 2, 4]);
        expect(output).to.equal(false);
    });

    it('returns true for ["You", "You"]', () => {
        const output = assertEqual(["You", "You"], ["You", "You"]);
        expect(output).to.equal(true);
    });

    it('returns false for [1, "1"]', () => {
        const output = assertEqual([1, "1"], [1, "1"]);
        expect(output).to.equal(false);
    });

    it('returns true for [1, 1]', () => {
        const output = assertEqual([1, 1], [1, 1]);
        expect(output).to.equal(true);
    });
});

