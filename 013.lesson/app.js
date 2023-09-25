"use strict";

// let a = 5;
// let b = a;
// b = 15;

// b = b + 5;
// console.log(a); //5 
// console.log(b); //10
// console.log(a == b); //false

// ==========================================
// kopiyani o'zgartirsak asil varyantiham o'zgaradi
// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;
// copy.a = 10;

// console.log(copy);
// console.log(obj);
// ====================================== yuzaki copy
//==> for loop orqali objectni copy olish
// function copy(mainObj) {
//     let objCopy = {};

//     let key; 
//     for(key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy
// }

// const numbers = {
//     a: 2,
//     b: 1,
//     c: 3,
//     d: true,
//     f: {
//         x: 7,
//         y: 6
//     }
// }

// const newNumbers = copy(numbers);
// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);
//====================================
// Object.assign() yangi yuzaki copy yaratadi
// const num = {
//     a: 2,
//     b: 1,
//     c: 3,
//     d: true,
//     f: {
//         x: 7,
//         y: 6
//     }
// }

// const add = {
//     d: 7,
//     t: 20
// };
// let value = Object.assign(num, add)
// console.log(value);

/* =================================================== Array copy =================================================== */
/* =================================================== spread operator =================================================== */
// let fruits = ["Apple", "Orange", "Plum"];
// const newFruits =fruits.slice(); //COPY qiladi
// console.log(fruits == newFruits);
//=========================================

// let twiceFruits = ["apple", "banana", "orange", "grape", "kiwi"];
// let myFruits = [...fruits, twiceFruits, "watermelon"];
// console.log(myFruits);

// ============spread operator in function
// function log(a, b, c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const serverData = [2, 5, 9]
// log(serverData) //bu colatga 2 ta undefined chiqadi
// console.log(...serverData);

// =========================== array spread operator copy

// let array = [2, "a", "b"];
// let copyArray = [...array];
// console.log(copyArray == array);
// console.log(copyArray);

// =========================== object spread operator copy

let obj = {
    a: 2,
    b: "Hello",
    c: true,
}

let copyObj = {...obj};
console.log(copyObj);

/*

В JavaScript существуют два основных способа копирования объектов: поверхностное (shallow) копирование и глубокое (deep) копирование.

1. **Поверхностное копирование (Shallow Copy):**
   При поверхностном копировании создается новый объект, и копируются только ссылки на объекты, находящиеся на верхнем уровне. Если объект содержит другие объекты внутри себя, то в новой копии будут ссылки на те же самые внутренние объекты.

   Вот как можно выполнить поверхностное копирование объекта:

   ```javascript
   var originalObject = { a: 1, b: 2 };
   var shallowCopy = Object.assign({}, originalObject);
   ```

   В этом случае `shallowCopy` будет содержать копии свойств `a` и `b` из `originalObject`. Однако, если `originalObject` содержит объект внутри, то он будет разделяться между `originalObject` и `shallowCopy`.

2. **Глубокое копирование (Deep Copy):**
   Глубокое копирование создает новый объект и рекурсивно копирует все внутренние объекты и их свойства. Это гарантирует, что внутренние объекты также будут полностью скопированы, а не разделяться между оригиналом и копией.

   В JavaScript нет стандартного метода для глубокого копирования объектов, поэтому для этой цели часто используются библиотеки, такие как Lodash или написанные собственные функции для глубокого копирования.

   Вот пример глубокого копирования с использованием библиотеки Lodash:

   ```javascript
   var originalObject = { a: 1, b: { c: 2 } };
   var deepCopy = _.cloneDeep(originalObject);
   ```

   В этом случае `deepCopy` будет полностью независимой копией `originalObject`, включая внутренний объект `b` и его свойства.

Выбор между поверхностным и глубоким копированием зависит от конкретной задачи и структуры данных, которые вы обрабатываете. Глубокое копирование может быть более затратным по ресурсам, поэтому используйте его осторожно, особенно при работе с большими и сложными объектами.

*/










