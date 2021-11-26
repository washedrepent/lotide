//find the middle most index of an array
const middle = function(array) {
    let middleArray = [];
    let middleIndex = Math.floor(array.length / 2);

    if (array.length > 2) {
        if (array.length % 2 === 0) {
            middleArray = array.slice(middleIndex - 1, middleIndex + 1);
        } else {
            middleArray = array.slice(middleIndex, middleIndex + 1);
        }
    }

    return middleArray;
};

module.exports = middle;