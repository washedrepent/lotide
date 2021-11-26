const { expect } = require("chai")
const findKey = require("../findKey")

describe("#findKey", () => {    
    const obj = {
        "Blue Hill": { stars: 1 },
        "Akaleri":   { stars: 3 },
        "noma":      { stars: 2 },
        "elBulli":   { stars: 3 },
        "Ora":       { stars: 2 },
        "Akelarre":  { stars: 3 }
    };

    it("returns 'noma' for obj['noma']", () => {
        const output = findKey(obj, x => x.stars === 2);
        expect(output).to.equal("noma");
    });

    it("returns 'Akaleri' for obj['Akaleri']", () => {
        const output = findKey(obj, x => x.stars === 3);
        expect(output).to.equal("Akaleri");
    });

    it("returns 'Blue Hill' for obj['Blue Hill']", () => {
        const output = findKey(obj, x => x.stars === 1);
        expect(output).to.equal("Blue Hill");
    });

    it("returns undefined for object with value 4", () => {
        const output = findKey(obj, x => x.stars === 4);
        expect(output).to.equal(undefined);
    });

    //check for undefined
    it("returns undefined if callback is undefined", () => {
        const output = findKey(obj, undefined);
        expect(output).to.equal(undefined);
    });

    it("returns undefined when no callback passed", () => {
        const output = findKey(obj);
        expect(output).to.equal(undefined);
    });

    it("returns undefined when callback is null", () => {
        const output = findKey(obj, null);
        expect(output).to.equal(undefined);
    });

    it("returns undefined when callback is empty string", () => {
        const output = findKey(obj, "");
        expect(output).to.equal(undefined);
    });

    it("returns undefined when callback is not a function", () => {
        const output = findKey(obj, "not a function");
        expect(output).to.equal(undefined);
    });

});