"use strict";
// let num = 5;debugger

// function say() {
//     let num = 4;debugger
//     console.log(num);
// }

// num = 6;debugger

// say();debugger
//===================================================
/*
Урок 3. JavaScript. Что такое замыкания. Как они работают (+ примеры)
https://www.youtube.com/watch?v=pahO5XjnfLA
 */

// 1. =======
// function createCalcFunction(n){
//     return function() {
//         console.log(1000 * n);
//     }
// }

// const calc = createCalcFunction(42);
// calc();

// 2. =======
// function createIncrementor(n) {
//     return function(num) {
//         return n + num
//     }
// }

// const addOne = createIncrementor(1);
// const addTwo = createIncrementor(2);


// console.log(addOne(3)); //4
// console.log(addTwo(3)); //5

// 3. =======
function urlGenerator (domain) {
    return function(url) {
        return `https://www.${url}.${domain}`
    }
}


let comUrl = urlGenerator("com");
let comUz = urlGenerator("uz");

console.log(comUrl("facebook"));
console.log(comUrl("vk"));
console.log(comUrl("kun"));
console.log(comUrl("daryo"));


//==============================================================================================================================
//=======================================================Ivan Petrechenko=======================================================
//==============================================================================================================================

// function creatCounter() {
//     let counter = 0;debugger

//     const myFunction =function(){
//         counter = counter + 1;debugger
//         return counter;
//     }

//     return myFunction;

// }


// const incerement = creatCounter();debugger
// const c1 = incerement();debugger
// const c2 = incerement();debugger
// const c3 = incerement();debugger

// console.log(c1, c2, c3);debugger




