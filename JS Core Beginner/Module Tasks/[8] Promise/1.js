function sequentialAsyncOperations() {
    function asyncOperation(value) {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log("Выполнена асинхронная операция с значением:", value);
                resolve();
            }, 1000);
        });
    }
    
    asyncOperation(1)
        .then(() => asyncOperation(2))
        .then(() => asyncOperation(3))
        .then(() => asyncOperation(4))
        .then(() => asyncOperation(5))
        .then(() => console.log("Все асинхронные операции выполнены"));
}

sequentialAsyncOperations();
