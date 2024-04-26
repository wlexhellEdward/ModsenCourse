function sumOfFirstHalf(array) {
    const halfIndex = Math.ceil(array.length / 2); 
    const firstHalf = array.slice(0, halfIndex);
    const sum = firstHalf.reduce((acc, cur) => acc + cur, 0); 
    return sum;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = sumOfFirstHalf(numbers);
console.log("Массив чисел:", numbers);
console.log("Сумма первой половины элементов:", sum);
