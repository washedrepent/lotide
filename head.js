// Assert Equal Function
const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};

//head function returns the first element (head) of an array
const head = function(arr) {
    return arr[0];
};

//Tests
assertEqual(head([5,6,7]), 5);//number array
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");//string array
assertEqual(head(["One"]), "One");//one element array
assertEqual(head([]), undefined);//empty array