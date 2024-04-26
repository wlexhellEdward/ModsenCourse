function countVowels(str) {
    'use strict';

    const vowels = ['a', 'e', 'i', 'o', 'u','а','о','е','у','и','ю','ы'];
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

const str = 'Привет, Модсен!';
const vowelsCount = countVowels(str);
console.log(`Количество гласных букв в строке "${str}" равно ${vowelsCount}`);
