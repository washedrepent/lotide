const { expect } = require("chai")
const map = require("../map")

describe("#map", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const numbers = [1, 2, 3, 4, 5];

    it("returns an array", () => {
        const results = map(words, word => word[0]);
        expect(results).to.be.an("array");
    });

    it("returns an array with correct values", () => {
        const results = map(words, word => word[0]);
        expect(results).to.deep.equal(["g", "c", "t", "m", "t"]);
    });

    it("returns an array with correct values using callback", () => {
        const results = map(numbers, number => number * 2);
        expect(results).to.deep.equal([2, 4, 6, 8, 10]);
    });

    it("returns undefined if no array is passed", () => {
        const results = map();
        expect(results).to.equal(undefined);
    });

    it("returns undefined if array is empty", () => {
        const results = map([], word => word[0]);
        expect(results).to.equal(undefined);
    });

    it("returns undefined if no callback is passed", () => {
        const results = map(words);
        expect(results).to.equal(undefined);
    });

    it("returns undefined if callback is not a function", () => {
        const results = map(words, "string");
        expect(results).to.equal(undefined);
    });

    it("returns undefined if callback is null", () => {
        const results = map(words, null);
        expect(results).to.equal(undefined);
    });

    it("returns undefined if callback is empty string", () => {
        const results = map(words, "");
        expect(results).to.equal(undefined);
    });

    it("returns undefined if callback is undefined", () => {
        const results = map(words, undefined);
        expect(results).to.equal(undefined);
    });
});