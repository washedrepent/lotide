// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};

// Check if two arrays are equal
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);// => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);// => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);// => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);// => false