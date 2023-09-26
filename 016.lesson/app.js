"use strict";
console.log("dynamic typing");

// 1.String metodi orqali stringga o'tadi
console.log(typeof(String(null)));
console.log(typeof(String(5)));
// 2. konkatinatsiya orqali: stringga qo'shish kerak

console.log(typeof( null + "8"));
console.log(typeof( null + "Name"));

// ================ To Number ==================
// 1 Number()
console.log(typeof(Number("5")));
// 2 unary +
console.log(typeof(+"8"));
//3 parseInt
console.log(typeof(parseInt("85px", 10)));

// ================ To Boolean ==================
// 0, "", null, undefined, NaN === false.
let value = null;
console.log(typeof(Boolean(value)));
console.log(Boolean(value));
//3. !! - orqali
console.log(typeof(!!value));
console.log(!!value);

