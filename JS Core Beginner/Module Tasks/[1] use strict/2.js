'use strict';

function isValuePresent(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}

const myArray = [1, 2, 3, 4, 5];
console.log(isValuePresent(myArray, 3)); 
console.log(isValuePresent(myArray, 6));
