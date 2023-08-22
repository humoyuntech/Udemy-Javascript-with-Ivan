
"use strict"

/* ===========================
Agarda "use strict"  yozmasak quyidagi xato holat ya'ni let const ni ishlatmay
o'zgaruvchi e'lonqilsak boladi va bu xato hisoblanadi
 =========================== */

// a = 1;
// console.log(a);


// ===================  Variable e'lon qilish
// let number = 5;
// const leftBorderWidth = 1;

// console.log(number, leftBorderWidth);



/* 
========================================
JSda to'g'ridan-to'g'ri constantala yo'q 
========================================
*/

// const obj = {
//     a: 50,
//     b: 80
// };

// obj.a = 10;

// console.log(obj);

// ==============> Eski o'zgaruvchi - var

// var myNameIs = "Ivan";
// myNameIs = "Alex";
// console.log(myNameIs);


/* ================================
 Xosting yoki Suzib chiqish (сплития) o'zgaruvchi e'lon
 qilingandan oldin codni ishga tushurish 
 ================================ */

// console.log(myNum);
// var myNum = 30;

/* ===============================================
 let - {} - ichida ishlaydi va tashqariga chiqmaydi
 === xatoddan keyingi kod o'qilmaydi hatto u tog'ri bo'lsaham
  =============================================== */

// {
//     let result = 50;
// };

// console.log(result);

/* ===========================================
 var da esa {} ichidaginiham tashqarida o'qiydi
 =========================================== */

// {
//     var onceResult = 60;
// };

// console.log(onceResult);




// ======================= Variableni nomlash
//cameleCase
//_cameleCase
//Kabab-case
//PascalCase
// snake_case
// UPPER_SNAKE_CASE





// =======================  Data type  ======================= 

// =========== Primitive Простые тыпы 
//1- Number
//2- String
//3- Boolean
//4-null
//5-undefined




//6-Symbol
//7- BigInt

// =========== Non-primitive Object
// 8 Object
//   -Object
//   - Array
//   -function
//   -Object Date
//   - Регулярный выражения
//   -Error


// =================Number

// let num = 4.6;
// console.log(-4/0); // -Infinity
// console.log(4/0); //Infinity
// console.log("Hello" * 0); // NaN


// =================String

// let person = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, ipsum?';
// console.log(person);


// =================Boolean

// let boolOnce = true;
// let boolFalse = false;

// console.log(boolOnce, boolFalse);

// ==============  null undefined

// null --- qachonki o'zgaruvchi ichida hech narsa bo'lmasa va keyin 
// ma'lumot biriktirish kerak bo'lsa "null"ni biriktiramiz va u nolga o'xshagan narsa

// let age = null;
// console.log(age);

// undefined o'zgaruvchi mavjud lekin ichida hech narsa yo'q;

// let myVar;
// console.log(myVar);

//================== Object

// const obj = {
//     name: 'Khumoyun',
//     age: 30,
//     isMarried: true,
// };

// Objectga xossa qo'shish
// obj.city = "Vobkent";
// obj['cityTwice'] = "Toshkent";

// console.log(obj);
// console.log(obj.name);
// console.log(obj["age"]);

//=======agar Object ichidagi Objectga
//======= xossa qo'shish kerak bo'lsa
// let personalMovieDB = {
//     movies: {},
// };

// personalMovieDB['movies']['filmName'] = 'Avatar';
// console.log(personalMovieDB);

// var obj = {
//     innerObj: {} // Внутренний пустой объект
//   };
  
//   obj['innerObj']['property'] = 'Значение'; // Запись данных во внутренний объект
  
//   console.log(obj['innerObj']); // Выводит: { property: 'Значение' }

  
// let arrObj = {
//     0: 1,
//     1: 2,
//     2: 3,
//     3: 4,
// }

// console.log(arrObj[1]);


// ================= Array

// let arr = ["Khumoyun", "Doniyor" , "Said", true];
// let arrNum = 20;
// arr[4] = 10;
// arr.push(arrNum);

// console.log(arr);
// console.log(arr[2]);
// console.log(arr[3]);


//====================== Foydalanuvchi bilan muloqat===============================

// ========== alert - ogohlantirish chiqarish
// alert("hello world");


// ========== confirm - "true" yoki "false" qaytaradi
// const resultAnswer = confirm("Are you here?");
// console.log(resultAnswer);


// ========== prompt - orqali savolga foydalanuvchi javob kiritish mumkin.

// let textAnswer = prompt("Siz yoqtirgan kino", "Titanik");
// console.log(textAnswer);

//===================================== Интерполяция(ES6) =====================================

// let myName = "Khumoyun";
// console.log(`Hello mr ${myName}`);

//===================================== Операторы в JS/ Operator in JS =====================================


// console.log('arr' + "-object"); // konkitinatsiya
// console.log('5' + "-object"); // konkitinatsiya
// console.log(4 + "-object"); // konkitinatsiya
// console.log(4 + +"-object");//NaN

//1-da qator xosil buladi 
// 2-da 5 raqami songa aylanadi
// console.log(4 + "5");  //va bu String = 45
// console.log(4 + +"5"); // 5 + yordamida raqamga aylanadi = 9

// Increment/decrement


// ============> postfix form
// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// console.log(incr);
// console.log(decr);

// ==========> prefix form
// let incrm = 100,
//     decrm = 100;

// ++incrm;
// --decrm;
// plus++ minus--


// let incr_r = 500,
//     decr_r = 500;

// console.log(incr_r++);
// console.log(decr_r--);

// ++plus --minus


// let incr_rr = 500,
//     decr_rr = 500;

// console.log(++incr_rr);
// console.log(--decr_rr);

//  qoldiq
// console.log(5%2);


//============================== Logical operators ==============================
// ========== || (OR)

console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false

// ========== && (AND)

console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false