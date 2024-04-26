function firstNonRepeatingChar(str) {
    const charCount = {};

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of str) {
        if (charCount[char] === 1) {
            return char; 
        }
    }

    return null;
}

const str = "leetcode";
const firstNonRepeating = firstNonRepeatingChar(str);
console.log("Первый неповторяющийся символ:", firstNonRepeating); 
