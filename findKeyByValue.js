//find a key in an object by its value
const findKeyByValue = function(object, value) {
    //iterate through the object by each key
    for (const key in object) {
        //if the value of the object is equal to the value we are looking for at the key
        if (object[key] === value) {
            return key;
        }
    }
    
    //if the value is not found, return undefined
    return undefined;
};

module.exports = findKeyByValue;