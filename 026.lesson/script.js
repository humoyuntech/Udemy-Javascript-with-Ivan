'use strict';
/**
 * Оператор опциональной последовательности
 * Optional chaining (?.)
 */

const box = document.querySelector('.box');
const block = document.querySelector('.block'); // mavjud emas

console.log(block) // null
// console.log(block.textContent); //xatolik beradi
console.log(block?.textContent); //endi xato o'rnigs undefined beradi
console.log(1 + 2);
console.clear();

const userData = {
    name: "Ivan",
    age: null
}

console.log(userData?.city?.adress);
console.log(userData.name);