const { expect } = require("chai");
const without = require("../without");

describe("#without", () => {
    const words = ["hello", "world", "lighthouse"];
    const numbers = [1, 2, 3, 4, 5];

    it("returns full array when given ['hello', 'world', 'lighthouse'] and removing empty array", () => {
        const output = without(words, []);
        expect(output).to.deep.equal(words);
    });

    it("returns array with values ['hello', 'world'] when removing ['lighthouse'] from ['hello', 'world', 'lighthouse']", () => {
        const output = without(words, ["lighthouse"]);
        expect(output).to.deep.equal(["hello", "world"]);
    });

    it("returns array with values ['hello'] when removing ['lighthouse', 'world'] from ['hello', 'world', 'lighthouse']", () => {
        const output = without(words, ["lighthouse", "world"]);
        expect(output).to.deep.equal(["hello"]);
    });

    it("returns empty array when removing ['hello', 'world', 'lighthouse'] from ['hello', 'world', 'lighthouse']", () => {
        const output = without(words, ["lighthouse", "world", "hello"]);
        expect(output).to.deep.equal([]);
    });

    it("returns full array with values [1, 2, 3, 4, 5] when removing empty array", () => {
        const output = without(numbers, []);
        expect(output).to.deep.equal(numbers);
    });

    it("returns array with values [1, 2, 3, 4] when removing [5] from [1, 2, 3, 4, 5]", () => {
        const output = without(numbers, [5]);
        expect(output).to.deep.equal([1, 2, 3, 4]);
    });

    it("returns array with values [1, 2, 3] when removing [5, 4] from [1, 2, 3, 4, 5]", () => {
        const output = without(numbers, [5, 4]);
        expect(output).to.deep.equal([1, 2, 3]);
    });

    it("returns undefined when given undefined", () => {
        const output = without(undefined, []);
        expect(output).to.equal(undefined);
    });

    it("returns empty array when given empty array", () => {
        const output = without([], []);
        expect(output).to.deep.equal([]);
    });

});