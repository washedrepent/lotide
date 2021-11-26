# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @washedrepent/lotide`

**Require it:**

`const _ = require('@washedrepent/lotide');`

**Call it:**

`const results = _.head([1, 2, 3]) // => 1`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: returns an assertment to the console when comparing two passed in arrays about their equality
* `assertEqual`: returns an assertment to the console when comparing two primative values about their equality
* `assertObjectsEqual`: returns an assertment to the console when comparing two objects about their equality
* `countOnly`: counts how many times an element appears in an array
* `eqArrays`: returns true or false when comparing two passed in arrays
* `eqObjects`: returns true or false when comparing two passed in objects
* `findKey`: returns the key of an object based on the result of a callback function
* `findKeyByValue`: returns the key of an object based on the value
* `head`: returns the first index of an array
* `map`: Takes an array and a callback function and returns a new array based on the evaluation of a callback function on each item. 
* `middle`: returns the middle most one or two indexes of a passed in array based on odd or even size. Empty array if size is less than 3
* `takeUntil`: takes an array argument and a callback function, executes the callback on each array item and returns a new array consisting of each item up until the callback function evalutated to true.
* `without`: takes a source and items to remove element and returns a new array consisting of the souce without the items specifiled for removal