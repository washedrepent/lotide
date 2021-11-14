const eqArrays = function(arr1, arr2) {
    // Check if the length of the arrays are equal
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Check if the elements in the arrays are equal
    for (let i = 0; i < arr1.length; i++) {

        // Check if the elements are equal
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
   
    return true;
};

const assertArraysEqual = function(arr1, arr2) {
    if (eqArrays(arr1, arr2)) {
        console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    }
};

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5];

const map = function(array, callback) {
    const results = [];
    for (let item of array) {
        results.push(callback(item));
    }
    return results;
};

const results1 = map(words, word => word[0]);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(numbers, numb => numb * 2), [2, 4, 6, 8, 10]);
assertArraysEqual(map([10,20,30,40], num => num / 2), [5, 10, 15, 20]);