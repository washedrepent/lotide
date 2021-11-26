const {expect} = require('chai');
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
    it('returns true for simple object [{a: 1}, {a: 1}]', () => {
        const output = eqObjects({a: 1}, {a: 1});
        expect(output).to.equal(true);
    });

    it('returns false for simple object [{a: 1}, {a: 2}]', () => {
        const output = eqObjects({a: 1}, {a: 2});
        expect(output).to.equal(false);
    });
    
    it('returns true for simple object with more than 1 element [{a: 1, b: 2}, {a: 1, b: 2}]', () => {
        const output = eqObjects({a: 1, b: 2}, {a: 1, b: 2});
        expect(output).to.equal(true);
    });

    it('returns false for simple object with more than 1 element [{a: 1, b: 2}, {a: 1, b: 3}]', () => {
        const output = eqObjects({a: 1, b: 2}, {a: 1, b: 3});
        expect(output).to.equal(false);
    });

    it('returns true for empty objects [{}, {}]', () => {
        const output = eqObjects({}, {});
        expect(output).to.equal(true);
    }); 

    it('returns false for empty object against non-empty [{a: 1}, {}]', () => {
        const output = eqObjects({a: 1}, {});
        expect(output).to.equal(false);
    });

    it('returns true for more complex object [{a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3}]', () => {
        const output = eqObjects({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3});
        expect(output).to.equal(true);
    });

    it('returns false for more complex object [{a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 4}]', () => {    
        const output = eqObjects({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 4});
        expect(output).to.equal(false);
    });

    it('returns true for complex object with inner arrays [{a: 1, b: 2, c: [1, 2, 3]}, {a: 1, b: 2, c: [1, 2, 3]}]', () => {
        const output = eqObjects({a: 1, b: 2, c: [1, 2, 3]}, {a: 1, b: 2, c: [1, 2, 3]});
        expect(output).to.equal(true);
    });

    it('returns false for complex object with inner arrays  [{a: 1, b: 2, c: [1, 2, 3]}, {a: 1, b: 2, c: [1, 2, 4]}]', () => {
        const output = eqObjects({a: 1, b: 2, c: [1, 2, 3]}, {a: 1, b: 2, c: [1, 2, 4]});
        expect(output).to.equal(false);
    });
});