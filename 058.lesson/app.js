"use strict";
//IIFE -immediately invoked function expression
let app = 123;
console.log(app);

(function(){
    let app = "Hello";
    console.log(app);
}())

console.log(app);