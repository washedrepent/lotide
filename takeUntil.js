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

// Get slice of array until predicate (callback) is true
const takeUntil = function(array, callback) {
    let result = [];
    //iterate over the array
    for (let i = 0; i < array.length; i++) {
        //if the callback returns true, stop iterating
        if (callback(array[i])) {
            break;
        }
        //otherwise, push the element to the result array
        result.push(array[i]);
    }
    return result;
};


//declare test case variables
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

const data3 = [1, -2, 5, 7, -5];
const results3 = takeUntil(data3, x => x < 0);

//run test cases
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results3, [1]);