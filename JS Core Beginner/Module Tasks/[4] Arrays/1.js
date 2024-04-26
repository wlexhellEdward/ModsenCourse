function increaseNumbers(array) {
    const increasedArray = array.map(number => number * 1.1);
    return increasedArray;
}

const numbers = [10, 20, 30, 40];
const increasedNumbers = increaseNumbers(numbers);
console.log("Исходный массив чисел:", numbers);
console.log("Массив чисел с увеличенными значениями на 10%:", increasedNumbers);
