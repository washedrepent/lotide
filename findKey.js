//find the key of the object
const findKey = function(object, callback) {
    //check if callback is a function
    if (typeof callback !== 'function') {
        return undefined;
    }

    //loop through the object
    for (const key in object) {
        //if the callback returns true, return the key
        if (callback(object[key])) {
            return key;
        }
    }

    //if the callback returns false, return undefined
    return undefined;
};
module.exports = findKey;