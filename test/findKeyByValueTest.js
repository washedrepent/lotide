const {expect} = require('chai');
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
    const bestTVShowsByGenre = {
        scifi: "The Expanse",
        comedy: "Brooklyn Nine-Nine",
        drama:  "The Wire"
    };

    //check for "The Wire"
    it('returns "drama" for "The Wire"', () => {
        const output = findKeyByValue(bestTVShowsByGenre, "The Wire");
        expect(output).to.equal("drama");
    });

    //check for "That '70s Show"
    it('returns undefined for "That \'70s Show"', () => {
        const output = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
        expect(output).to.equal(undefined);
    });

    //check for "Brooklyn Nine-Nine"
    it('returns "comedy" for "Brooklyn Nine-Nine"', () => {
        const output = findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine");
        expect(output).to.equal("comedy");
    });

    //check for "The Expanse"
    it('returns "scifi" for "The Expanse"', () => {
        const output = findKeyByValue(bestTVShowsByGenre, "The Expanse");
        expect(output).to.equal("scifi");
    });

    //check for value that is not in the object
    it('returns undefined for "The Big Bang Theory"', () => {
        const output = findKeyByValue(bestTVShowsByGenre, "The Big Bang Theory");
        expect(output).to.equal(undefined);
    });

    //check undefined
    it('returns undefined for undefined', () => {
        const output = findKeyByValue(bestTVShowsByGenre, undefined);
        expect(output).to.equal(undefined);
    });
});