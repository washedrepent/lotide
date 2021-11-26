const {expect} = require('chai');
const countOnly = require('../countOnly');

describe("#countOnly", () => {
    const firstNames = [
        "Karl",
        "Salima",
        "Agouhanna",
        "Fang",
        "Kavith",
        "Jason",
        "Salima",
        "Fang",
        "Joe"
    ]; 
    const results = countOnly(firstNames, { "Jason": true, "Salima": true, "Fang": true, "Agouhanna": false });

    it("returns {Jason: 1, Salima: 2, Fang: 2} for firstNames", () => {
        const output = results["Jason"];
        expect(output).to.equal(1);
    });

    it("returns 2 for 'Salima'", () => {
        const output = results["Salima"];
        expect(output).to.equal(2);
    });

    it("returns {Jason: 1, Salima: 2, Fang: 2} for firstNames", () => {
        const output = results["Fang"];
        expect(output).to.equal(2);
    });

    it("returns {Jason: 1, Salima: 2, Fang: 2} for firstNames", () => {
        const output = results["Agouhanna"];
        expect(output).to.equal(undefined);
    });

});