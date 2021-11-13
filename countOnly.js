const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};


const countOnly = function(allItems, itemsToCount) {
    const results = {};

    //iterate over allItems
    for (const item of allItems) {
        if (itemsToCount[item]) {
            if (results[item]) {
                results[item] += 1;
            } else {
                results[item] = 1;
            }
        }
    }
    return results;
};

const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

//assertEqual(countOnly([1, 2, 3, 4, 5], { "3": true, "5": true }), { "3": 1, "5": 2 });
//assertEqual(countOnly([1, 2, 3, 4, 5], { "3": true, "5": true }), { "3": 1, "5": 2 });
//assertEqual(countOnly([1, 2, 3, 4, 5], { "3": true, "5": true }), { "3": 1, "5": 2 });
