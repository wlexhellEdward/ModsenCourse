function getLastCharacter(str) {
    if (str.length === 0) {
        console.log("Строка пуста");
    } else {
        console.log("Последний символ строки:", str.charAt(str.length - 1));
    }
}

const myString = "Hello";
getLastCharacter(myString); 
