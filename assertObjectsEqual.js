const eqObjects = require('./eqObjects');

//assert if two objects are equal
const assertObjectsEqual = function(actual, expected) { 
    //load inspect from util to inspect the objects in output
    const inspect = require('util').inspect;
    
    //check if the two objects are equal
    if (eqObjects(actual, expected)) {
        console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
        return true;
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
        return false;
    }
};

module.exports = assertObjectsEqual;