function sumOfSquares(numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum += number * number;
    }

    return sum;
}

const numbers = [1, 2, 3, 4, 5];
const result = sumOfSquares(numbers);
console.log("Сумма квадратов элементов массива:", result); 
