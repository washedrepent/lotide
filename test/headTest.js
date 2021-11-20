const assertEqual = require('../assertEqual');
const head = require('../head');

//Tests
assertEqual(head([5,6,7]), 5);//number array
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");//string array
assertEqual(head(["One"]), "One");//one element array
assertEqual(head([]), undefined);//empty array