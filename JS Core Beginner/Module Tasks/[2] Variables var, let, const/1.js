'use strict';

function testScope() {
    var x = 10;
    let y = 20;
    const z = 30;

    console.log("Внутри блока:");
    console.log("var x:", x); 
    console.log("let y:", y); 
    console.log("const z:", z); 
}

testScope();


console.log("Вне блока:"); 
console.log("var x:", x); // не видна
console.log("let y:", y); // не видна
console.log("const z:", z); // не видна
