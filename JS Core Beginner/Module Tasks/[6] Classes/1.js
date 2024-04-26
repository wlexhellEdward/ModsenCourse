class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displayInfo() {
        console.log(`Имя: ${this.name}, Возраст: ${this.age}, Страна: ${this.country}`);
    }
}

const person1 = new Person("Вадим", 30, "Беларусь");
const person2 = new Person("Валера", 25, "Беларусь");

person1.displayInfo(); 
person2.displayInfo(); 
