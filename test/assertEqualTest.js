const {expect} = require('chai');
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
    it("returns true for same strings 'Lighthouse Labs','Lighthouse Labs'", () => {
        const output = assertEqual('Lighthouse Labs', 'Lighthouse Labs');
        expect(output).to.equal(true);
    });

    it("returns false for different strings 'Lighthouse Labs','Bootcamp'", () => {
        const output = assertEqual('Lighthouse Labs', 'Bootcamp');
        expect(output).to.equal(false);
    });
    
    it("returns true for same numbers 1,1", () => {
        const output = assertEqual(1, 1);
        expect(output).to.equal(true);
    });

    it("returns false for different numbers 1,2", () => {
        const output = assertEqual(1, 2);
        expect(output).to.equal(false);
    });

    it("returns false for string to number '1',1", () => {
        const output = assertEqual('1', 2);
        expect(output).to.equal(false);
    });

    it("returns true for truthy booleans comparison true, true", () => {
        const output = assertEqual(true, true);
        expect(output).to.equal(true);
    });

    it("returns false for different booleans true, false", () => {
        const output = assertEqual(true, false);
        expect(output).to.equal(false);
    });

    it("returns true for falsy booleans comparison false, false", () => {
        const output = assertEqual(false, false);
        expect(output).to.equal(true);
    });

    it("returns true for null, null", () => {
        const output = assertEqual(null, null);
        expect(output).to.equal(true);
    });

    it("returns true for undefined, undefined", () => {
        const output = assertEqual(undefined, undefined);
        expect(output).to.equal(true);
    });

    it("returns false for undefined, null", () => {
        const output = assertEqual(undefined, null);
        expect(output).to.equal(false);
    });

});