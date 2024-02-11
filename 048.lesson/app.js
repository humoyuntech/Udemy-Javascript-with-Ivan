"use strict";
//=== filter
// const names = ['Ivan', 'Ann', 'Ksinia', 'Voldemort'];

// let shortNames = names.filter((name) => {
//     return name.length < 5 ;
// });

// console.log(shortNames);

// === map
// let answers  = ['IvAn', 'AnnA', 'KsiNia', 'VoldeMort'];

// let result = answers.map((item) => {
//     return item.toLowerCase();
// });

// console.log(result);

// === every/some

let some = [4, 'qer', 'sdfdgffds'];

// some - bittasi to'g'ri bo'lsa booleon qaytaradi
// console.log(some.some(item => typeof(item) === 'number'));
// every - hammasini to'g'ri bo'lsa booleon qaytaradi
// console.log(some.every(item => typeof(item) === 'number'));

// ==================== reduce
// 1
// let arr = [4, 5, 1, 3, 2, 6]

// let res = arr.reduce((sum, current) => sum + current, 1);
// console.log(res);

// 2
// let arr = ['apple', 'pear', 'plum'];

// let res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);

//==============================================================================================
//==============================================================================================

/**
 * Object.entries() метод возвращает массив собственных перечисляемых свойств
 *  указанного объекта в формате [key, value], в том же порядке
 */

let obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal',
};

let newArr = Object.entries(obj)
.filter(item => item[1] === 'person')
.map(item => item[0]);

console.log(newArr);




