function bubbleSort(array) {
    const len = array.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (array[i] > array[i + 1]) {
                const temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return array;
}


const unsortedArray = [5, 3, 8, 1, 4, 9, 2, 7, 6];
console.log("Исходный массив:", unsortedArray);
const sortedArray = bubbleSort(unsortedArray);
console.log("Отсортированный массив:", sortedArray);
