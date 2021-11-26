// count the number of times a value occurs
const countOnly = function(allItems, itemsToCount) {
    const results = {};

    //iterate over allItems
    for (const item of allItems) {
        //if item is in itemsToCount
        if (itemsToCount[item]) {
            //increment the value of item in results
            if (results[item]) {
                results[item] += 1;
            } else {
                results[item] = 1;
            }
        }
    }
    //return results
    return results;
};

module.exports = countOnly;
