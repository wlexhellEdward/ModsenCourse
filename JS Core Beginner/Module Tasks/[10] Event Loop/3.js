function generateRandomNumberWithDelay() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 10) + 1; 
        const delayInSeconds = randomNumber; 

        setTimeout(() => {
            if (randomNumber <= 5) {
                resolve(randomNumber); 
            } else {
                reject(new Error(`Сгенерированное число ${randomNumber} от 6 до 10`)); 
            }
        }, delayInSeconds * 1000); 
    });
}

generateRandomNumberWithDelay()
    .then(number => {
        console.log("Сгенерированное число от 1 до 5:", number);
    })
    .catch(error => {
        console.error("Произошла ошибка:", error.message);
    });
