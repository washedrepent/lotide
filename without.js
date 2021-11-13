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

const without = function(source, itemsToRemove) {
    let newArray = [];
    for (let i = 0; i < source.length; i++) {
        if (!itemsToRemove.includes(source[i])) {
            newArray.push(source[i]);
        }
    }
    return newArray;
};


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case

// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without(words, ["hello", "world"]), ["lighthouse"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
assertArraysEqual(without(words, ["lighthouse", "hello", "world"]), []);
assertArraysEqual(without(["1", "2", "3"], [1, 2]), ["3"]);//will fail as string is not same as number