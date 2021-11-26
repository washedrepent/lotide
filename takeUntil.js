// Get slice of array until predicate (callback) is true
const takeUntil = function(array, callback) {
    let result = [];

    //check if callback was not passed
    if (typeof callback !== "function") {
        return undefined;
    }

    //check if array is not empty or undefined
    if (array && array.length > 0) {
        //iterate over the array
        for (let i = 0; i < array.length; i++) {
            //if the callback returns true, stop iterating
            if (callback(array[i])) {
                break;
            }
            //otherwise, push the element to the result array
            result.push(array[i]);
        }
    }

    //return the result array
    return result;
};

module.exports = takeUntil;