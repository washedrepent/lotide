//assert if two values are equal
const assertEqual = function(actual, expected) {
    //check if actual and expected are equal
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
        return true;
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
        return false;
    }
};

module.exports = assertEqual;