function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Деление на ноль запрещено");
    }
    return a / b;
}

try {
    const result = divideNumbers(10, 0);
    console.log("Результат деления:", result);
} catch (error) {
    console.error("Произошла ошибка:", error.message);
}
