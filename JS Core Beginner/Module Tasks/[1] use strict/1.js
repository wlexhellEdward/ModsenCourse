'use strict';

function factorial(number) {
    if (number < 0) {
        return "Число должно быть больше 0";
    } else if (number === 0 || number === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= number; i++) {
            result *= i;
        }
        return result;
    }
}

console.log(factorial(5)); 
console.log(factorial(0)); 
console.log(factorial(-1)); 
