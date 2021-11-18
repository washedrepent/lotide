// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};

//find the key of the object
const findKey = function(object, callback) {
    //loop through the object
    for (const key in object) {
        //if the callback returns true, return the key
        if (callback(object[key])) {
            return key;
        }
    }
};

//test cases variables
const obj = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
};

const find1 = findKey(obj,  x => x.stars === 2);
const find2 = findKey(obj , x => x.stars === 1); 
const find3 = findKey(obj , x => x.stars === 3); 
const find4 = findKey(obj , x => x.stars === 0); 


//run test cases
assertEqual(find1, "noma");//true
assertEqual(find2, "Blue Hill");//true
assertEqual(find3, "Akaleri");//true
assertEqual(find4, undefined);//true