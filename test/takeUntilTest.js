const { expect } = require("chai");
const takeUntil = require("../takeUntil");   

describe("#takeUntil", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const data3 = [1, -2, 5, 7, -5];
    
    it("returns an array", () => {
        const results = takeUntil(data1, x => x < 0);
        expect(results).to.be.an("array");
    });

    it("returns undefined if no array is passed", () => {
        const results = takeUntil();
        expect(results).to.equal(undefined);
    });

    it("returns undefined if no callback is passed", () => {
        const results = takeUntil(data1);
        expect(results).to.equal(undefined);
    });

    it("returns undefined if callback is not a function", () => {
        const results = takeUntil(data1, "string");
        expect(results).to.equal(undefined);
    });

    it("returns undefined if callback is null", () => {
        const results = takeUntil(data1, null);
        expect(results).to.equal(undefined);
    });

    it("returns undefined if callback is empty string", () => {
        const results = takeUntil(data1, "");
        expect(results).to.equal(undefined);
    });

    it("returns undefined if callback is undefined", () => {
        const results = takeUntil(data1, undefined);
        expect(results).to.equal(undefined);
    });

    it("returns an array with correct values on data [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
        const results = takeUntil(data1, x => x < 0);
        expect(results).to.deep.equal([1, 2, 5, 7, 2]);
    });

    it("returns an array with correct values on data ['I've', 'been', 'to', 'Hollywood', ',']", () => {
        const results = takeUntil(data2, x => x === ",");
        expect(results).to.deep.equal(["I've", "been", "to", "Hollywood"]);
    });

    it("returns an array with correct values on data [1, -2, 5, 7, -5]", () => {
        const results = takeUntil(data3, x => x < 0);
        expect(results).to.deep.equal([1]);
    });

    it("returns an empty array with correct values on data [1, -2, 5, 7, -5]", () => {
        const results = takeUntil(data3, x => x > 0);
        expect(results).to.deep.equal([]);
    });
});