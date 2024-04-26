function sumFirstAndLastDigit(number) {
    const numberStr = String(number);
    
    const firstDigit = parseInt(numberStr[0]);

    const lastDigit = parseInt(numberStr[numberStr.length - 1]);

    const sum = firstDigit + lastDigit;

    console.log(`Сумма первой и последней цифры числа ${number} равна ${sum}`);
}

sumFirstAndLastDigit(12345); 
sumFirstAndLastDigit(8675309); 
