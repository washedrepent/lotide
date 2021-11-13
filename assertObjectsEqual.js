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


//compare two objects to see if they are equal
const eqObjects = function(object1, object2) {

    //check if the objects are the same length using the Object.keys() method
    if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false;
    }

    //iterate through the keys of the objects
    for (let key in object1) {

        //check if it is an array
        if (Array.isArray(object1[key])) {

            //check if the object2 has an array with the same key
            if (!Array.isArray(object2[key])) {
                return false;
            }

            //check if the arrays are equal size
            if (object1[key].length !== object2[key].length) {
                return false;
            }
            
            //compare the arrays to see if they are equal using our eqArrays() function
            if(eqArrays(object1[key], object2[key]) === false) {
                return false;
            }

        } else if (typeof object1[key] === 'object') { //check if it is an object

            //check if the object2 has an object with the same key
            if (typeof object2[key] !== 'object') {
                return false;
            }

            //check if the objects are equal using our eqObjects() function (recursivelly)
            if (!eqObjects(object1[key], object2[key])) {
                return false;
            }

        } else if (object1[key] !== object2[key]) { //check if it is a primitive
            return false;
        }
    }
    return true;
};

const assertObjectsEqual = function(actual, expected) { 
    const inspect = require('util').inspect;
    if (eqObjects(actual, expected)) {
        console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
};