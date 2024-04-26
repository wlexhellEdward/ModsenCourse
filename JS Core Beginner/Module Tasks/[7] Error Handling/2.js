function accessUndefinedProperty(obj) {
    try {
        console.log("Попытка доступа к свойству неопределенного объекта:", obj.undefinedProperty);
    } catch (error) {
        console.log("Произошла ошибка:", error.message);
    }
}

const obj = {};
accessUndefinedProperty(obj);
