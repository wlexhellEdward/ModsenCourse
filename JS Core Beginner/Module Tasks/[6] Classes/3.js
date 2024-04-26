class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary); 
        this.department = department;
    }

    calculateAnnualSalary() {
        const bonus = 0.1 * this.salary;
        return super.calculateAnnualSalary() + bonus;
    }
}

const manager1 = new Manager("Иван", 50000, "Продажи");
const manager2 = new Manager("Мария", 60000, "Маркетинг");

console.log(`${manager1.name} (${manager1.department}): ${manager1.calculateAnnualSalary()} рублей`);
console.log(`${manager2.name} (${manager2.department}): ${manager2.calculateAnnualSalary()} рублей`);
