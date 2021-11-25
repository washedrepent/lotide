const {expect} = require('chai');
const middle = require('../middle');

describe("#middle", () => {
    it("returns [] for [1]", () => {
        const output = middle([1]);
        expect(output).to.eql([]);
    });

    it("returns [] for [1, 2]", () => {
        const output = middle([1, 2]);
        expect(output).to.eql([]);
    });

    it("returns [2] for [1, 2, 3]]", () => {
        const output = middle([1, 2, 3]);
        expect(output).to.eql([2]);
    });
    
    it("returns [2, 3] for [1, 2, 3, 4]", () => {
        const output = middle([1, 2, 3, 4]);
        expect(output).to.eql([2, 3]);
    });

    it("returns [3] for [1, 2, 3, 4, 5]", () => { 
        const output = middle([1, 2, 3, 4, 5]);
        expect(output).to.eql([3]);
    });

    it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
        const output = middle([1, 2, 3, 4, 5, 6]);
        expect(output).to.eql([3, 4]);
    });
});