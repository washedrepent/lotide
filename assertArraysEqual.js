const eqArrays = require('./eqArrays');

//assert if two arrays are equal
const assertArraysEqual = function(arr1, arr2) {
    //check if the two arrays are equal
    if (eqArrays(arr1, arr2)) {
        console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
        return true;
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
        return false;
    }
};

module.exports = assertArraysEqual;