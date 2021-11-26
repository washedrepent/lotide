//create a new array populated with results of callback function
const map = function(array, callback) {
    const results = [];

    //check if callback was not passed
    if (typeof callback !== "function") {
        return undefined;
    }

    //check if array is not empty
    if (array && array.length > 0) {
        //loop through array
        for (let item of array) {
            //push the result of the callback to the results array
            results.push(callback(item));
        }
    }else{
        return undefined;
    }

    //return the results array
    return results;
};

module.exports = map;