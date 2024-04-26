function delayExecution(callback) {
    setTimeout(callback, 2000); 
}

function myCallback() {
    console.log("Callback функция вызвана после задержки в 2 секунды");
}

delayExecution(myCallback);
