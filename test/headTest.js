const {expect} = require('chai');
const head   = require('../head');

describe("#head", () => {
    it("returns 1 for [1, 2, 3]", () => {
        const output = head([1, 2, 3]);
        expect(output).to.equal(1);
    });

    it("returns '5' for ['5']", () => {
        const output = head(['5']);
        expect(output).to.equal('5');
    });

    it("returns '5' for [5, 6, 7]", () => {
        const output = head([5, 6, 7]);
        expect(output).to.equal(5);
    });
    
    it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
        const output = head(['Hello', 'Lighthouse', 'Labs']);
        expect(output).to.equal('Hello');
    });

    it("returns  'One' for ['One']", () => {
        const output = head(['One']);
        expect(output).to.equal('One');
    });

    it("returns undefined for []", () => {
        const output = head([]);
        expect(output).to.equal(undefined);
    });  
});