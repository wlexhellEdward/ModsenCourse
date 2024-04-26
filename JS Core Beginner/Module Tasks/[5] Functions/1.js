function repeatOperation(operation, interval, repetitions) {
    let count = 0;
    const intervalId = setInterval(() => {
        operation();
        count++;
        if (count === repetitions) {
            clearInterval(intervalId); 
        }
    }, interval);
}

function printMessage() {
    console.log("Эта операция выполняется каждые 2 секунды");
}

repeatOperation(printMessage, 2000, 5); 
