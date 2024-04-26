console.log(x); 

var x = 10; 

console.log("Попытка доступа к переменной var до её объявления:", x); // undefined


console.log(y); 

let y = 20;

console.log("Попытка доступа к переменной let до её объявления:", y); // ReferenceError: y не найдена


console.log(z); 

const z = 30; 

console.log("Попытка доступа к переменной const до её объявления:", z); // ReferenceError: z не найдена

