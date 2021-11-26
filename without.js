//removes specified element from array
const without = function(source, itemsToRemove) {
    let newArray = [];

    //if itemsToRemove is empty 
    if (itemsToRemove.length === 0) {
        return source;
    }

    //check if source is not empty or undefined
    if (source && source.length > 0) {
        //iterate over the source array
        for (let i = 0; i < source.length; i++) {
            //if the source element is not in the itemsToRemove array, push it to the newArray
            if (!itemsToRemove.includes(source[i])) {
                newArray.push(source[i]);
            }
        }
    }

    //return the newArray
    return newArray;
};

module.exports = without;