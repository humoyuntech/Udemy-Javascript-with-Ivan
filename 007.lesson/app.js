"use strict";

let str = "Methods and properties of strings and numbers";

console.log(str.length);
console.log(str[2]); //uchunchi harfga murojat qilish

//Methods
console.log(str.toUpperCase()); //barchasini katta qilib beradi
console.log(str.toLocaleLowerCase()); //barchasini kichik qilib beradi
console.log(str.indexOf("and")); //berilgan argument nechinchi indexdan boshlanishini topadi
console.log(str.slice(0, 22)); //berilgan raqamlardan boshlab ikkinchi raqamgacha kesib oladi
console.log(str.substring(0, 22)); //berilgan raqamlardan boshlab ikkinchi raqamgacha kesib oladi
console.log(str.substr(1, 22)); //eskirgan yuqoridagilar bilan birxil vazifani bajaradi
console.log(str.substring(1, 5)); //substr() -o'rniga qo'llaniladi



const num = 12.2;
console.log(Math.round(num)); // 12

const test = "12.8px";

console.log(parseInt(test)); //12
console.log(parseFloat(test)) //12.8